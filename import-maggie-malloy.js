// Run this once to add the starter "Maggie Malloy and the Deadly Seven" demo
// entries — a separate universe/book from The Bear Guardian — so the new
// Universe switcher and Split Timeline view have something real to show.
//
// Usage:
//   node import-maggie-malloy.js                          # defaults to http://localhost:3000
//   BASE_URL=https://litty.onrender.com node import-maggie-malloy.js   # against the live site
//
// Safe to re-run: entries are matched by exact title (case-insensitive).
// If a title already exists, that entry is UPDATED (its id, links, and
// version history are preserved). If not, a new entry is created.

const { entries } = require('./maggie-malloy-entries');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

function uid() {
  return 'e' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function nowISO() { return new Date().toISOString(); }

async function getIndex() {
  const res = await fetch(`${BASE_URL}/api/index`);
  if (!res.ok) throw new Error(`GET /api/index failed: ${res.status}`);
  return res.json();
}

async function getFullEntry(id) {
  const res = await fetch(`${BASE_URL}/api/entries/${id}`);
  if (!res.ok) return null;
  return res.json();
}

async function saveEntry(entry, isNew) {
  const res = await fetch(`${BASE_URL}/api/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entry, isNew }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST /api/entries failed for "${entry.title}": ${res.status} ${text}`);
  }
  return res.json();
}

async function main() {
  console.log(`Importing ${entries.length} "Maggie Malloy" demo entries into ${BASE_URL} ...\n`);
  let created = 0, updated = 0, failed = 0;

  for (const spec of entries) {
    try {
      const index = await getIndex();
      const existing = index.find(e => e.title.toLowerCase() === spec.title.toLowerCase());

      let entry;
      let isNew;
      if (existing) {
        const full = await getFullEntry(existing.id);
        entry = {
          ...full,
          type: spec.type,
          title: spec.title,
          universe: spec.universe || 'maggieMalloy',
          fields: spec.fields,
          body: spec.body || '',
          tags: Array.from(new Set([...(full.tags || []), ...(spec.tags || [])])),
        };
        isNew = false;
      } else {
        entry = {
          id: uid(), type: spec.type, title: spec.title,
          universe: spec.universe || 'maggieMalloy',
          fields: spec.fields, body: spec.body || '', tags: spec.tags || [],
          series: 'Series 1', favorite: false, isStub: false, links: [],
          history: [], createdAt: nowISO(), updatedAt: nowISO(),
        };
        isNew = true;
      }

      await saveEntry(entry, isNew);
      if (isNew) { created++; console.log(`  + created  "${spec.title}"`); }
      else { updated++; console.log(`  ~ updated  "${spec.title}"`); }
    } catch (err) {
      failed++;
      console.error(`  ! FAILED   "${spec.title}": ${err.message}`);
    }
  }

  console.log(`\nDone. Created ${created}, updated ${updated}, failed ${failed}.`);
  console.log('Open the Codex and switch "Universe / Book" in the sidebar to "Maggie Malloy & the Deadly Seven" to see it themed, and check the new "Split Timeline" tab.');
}

main().catch(err => { console.error(err); process.exit(1); });
