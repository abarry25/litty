const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('./db');
const { buildSeedEntries, uid, nowISO } = require('./seed');

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname, 'public')));

function summarize(entry) {
  return {
    id: entry.id, title: entry.title, type: entry.type, tags: entry.tags || [],
    series: entry.series || 'Series 1', favorite: !!entry.favorite, isStub: !!entry.isStub,
    updatedAt: entry.updatedAt, createdAt: entry.createdAt, links: entry.links || [],
    snippet: (entry.body || Object.values(entry.fields || {}).find(v => typeof v === 'string') || '').slice(0, 140),
  };
}

// ---------- Routes ----------

app.get('/api/index', async (req, res) => {
  try {
    const all = await db.getAllEntries();
    res.json(all.map(summarize));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/seed', async (req, res) => {
  try {
    const existing = await db.count();
    if (existing > 0) return res.json({ seeded: false, reason: 'Database is not empty.' });
    const entries = buildSeedEntries();
    for (const e of entries) await db.upsertEntry(e);
    res.json({ seeded: true, count: entries.length });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/entries/:id', async (req, res) => {
  try {
    const entry = await db.getEntry(req.params.id);
    if (!entry) return res.status(404).json({ error: 'Not found' });
    res.json(entry);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/entries', async (req, res) => {
  try {
    const { entry, isNew } = req.body;
    if (!entry || !entry.id || !entry.title || !entry.type) {
      return res.status(400).json({ error: 'Entry must include id, type, and title.' });
    }
    const prevFull = isNew ? null : await db.getEntry(entry.id);
    const toSave = { ...entry };

    if (prevFull) {
      toSave.history = (prevFull.history || []).slice(-19);
      toSave.history.push({ timestamp: prevFull.updatedAt, snapshot: prevFull });
      toSave.createdAt = prevFull.createdAt;
    } else {
      toSave.history = toSave.history || [];
      toSave.createdAt = toSave.createdAt || nowISO();
    }
    toSave.updatedAt = nowISO();

    // Resolve [[wikilinks]] against every existing entry title; auto-create stubs.
    const allEntries = await db.getAllEntries();
    const linkTitles = new Set();
    const scanText = (txt) => {
      if (!txt) return;
      const re = /\[\[([^\]]+)\]\]/g; let m;
      while ((m = re.exec(txt))) linkTitles.add(m[1].trim());
    };
    scanText(toSave.body);
    Object.values(toSave.fields || {}).forEach((v) => { if (typeof v === 'string') scanText(v); });

    const explicitLinks = new Set(toSave.links || []);
    for (const t of linkTitles) {
      let found = allEntries.find((e) => e.title.toLowerCase() === t.toLowerCase());
      if (!found) {
        const stub = {
          id: uid(), type: 'custom', title: t, fields: { description: '' }, body: '',
          tags: ['stub'], series: toSave.series || 'Series 1', favorite: false, isStub: true,
          links: [], history: [], createdAt: nowISO(), updatedAt: nowISO(),
        };
        await db.upsertEntry(stub);
        allEntries.push(stub);
        found = stub;
      }
      explicitLinks.add(found.id);
    }
    toSave.links = Array.from(explicitLinks).filter((id) => id !== toSave.id);
    delete toSave.isStub;

    await db.upsertEntry(toSave);
    const updatedAll = await db.getAllEntries();
    res.json({ entry: toSave, index: updatedAll.map(summarize) });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/entries/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.deleteEntry(id);
    const all = await db.getAllEntries();
    for (const e of all) {
      if ((e.links || []).includes(id)) {
        e.links = e.links.filter((l) => l !== id);
        await db.upsertEntry(e);
      }
    }
    const updated = await db.getAllEntries();
    res.json({ index: updated.map(summarize) });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// AI assistant proxy — keeps the Anthropic API key on the server, never in the browser.
app.post('/api/ask', async (req, res) => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(400).json({ error: 'The AI assistant needs an ANTHROPIC_API_KEY set on the server. See the README.' });
    }
    const { question, context } = req.body;
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 1000,
        system: context || '',
        messages: [{ role: 'user', content: question }],
      }),
    });
    const data = await resp.json();
    if (data.error) return res.status(500).json({ error: data.error.message || 'Anthropic API error' });
    const text = (data.content || []).filter((c) => c.type === 'text').map((c) => c.text).join('\n');
    res.json({ text: text || 'No response.' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'codex.html'));
});

const PORT = process.env.PORT || 3000;
db.init().then(() => {
  app.listen(PORT, () => {
    console.log(`The Bear Guardian Codex is running at http://localhost:${PORT}`);
    console.log(`Database: ${db.usingTurso ? 'Turso (hosted)' : 'local file ./data/local.db'}`);
  });
});
