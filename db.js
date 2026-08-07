const { createClient } = require('@libsql/client');
require('dotenv').config();

// Local dev: no env vars needed at all — writes to ./data/local.db on disk.
// Production: set TURSO_DATABASE_URL + TURSO_AUTH_TOKEN (from turso.tech, free)
// and the exact same code talks to your real hosted database instead.
const path = require('path');
const usingTurso = !!process.env.TURSO_DATABASE_URL;

const dataDir = path.join(__dirname, 'data');
if (!usingTurso) {
  const fs = require('fs');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || ('file:' + path.join(dataDir, 'local.db')),
  authToken: process.env.TURSO_AUTH_TOKEN || undefined,
});

async function init() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS entries (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      universe TEXT DEFAULT 'bearGuardian',
      series TEXT DEFAULT 'Series 1',
      favorite INTEGER DEFAULT 0,
      isStub INTEGER DEFAULT 0,
      tags TEXT DEFAULT '[]',
      links TEXT DEFAULT '[]',
      fields TEXT DEFAULT '{}',
      body TEXT DEFAULT '',
      history TEXT DEFAULT '[]',
      createdAt TEXT,
      updatedAt TEXT
    )
  `);
  // Migration for databases created before the 'universe' column existed —
  // ALTER TABLE ADD COLUMN throws if the column is already there, so this is
  // safe to run every time the server boots.
  try {
    await client.execute(`ALTER TABLE entries ADD COLUMN universe TEXT DEFAULT 'bearGuardian'`);
  } catch (err) {
    if (!/duplicate column/i.test(err.message || '')) throw err;
  }
}

function rowToEntry(row) {
  return {
    id: row.id,
    type: row.type,
    title: row.title,
    universe: row.universe || 'bearGuardian',
    series: row.series || 'Series 1',
    favorite: !!row.favorite,
    isStub: !!row.isStub,
    tags: JSON.parse(row.tags || '[]'),
    links: JSON.parse(row.links || '[]'),
    fields: JSON.parse(row.fields || '{}'),
    body: row.body || '',
    history: JSON.parse(row.history || '[]'),
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

async function getAllEntries() {
  const res = await client.execute('SELECT * FROM entries');
  return res.rows.map(rowToEntry);
}

async function getEntry(id) {
  const res = await client.execute({ sql: 'SELECT * FROM entries WHERE id = ?', args: [id] });
  return res.rows.length ? rowToEntry(res.rows[0]) : null;
}

async function upsertEntry(entry) {
  await client.execute({
    sql: `INSERT INTO entries (id,type,title,universe,series,favorite,isStub,tags,links,fields,body,history,createdAt,updatedAt)
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
          ON CONFLICT(id) DO UPDATE SET
            type=excluded.type, title=excluded.title, universe=excluded.universe, series=excluded.series,
            favorite=excluded.favorite, isStub=excluded.isStub, tags=excluded.tags,
            links=excluded.links, fields=excluded.fields, body=excluded.body,
            history=excluded.history, createdAt=excluded.createdAt, updatedAt=excluded.updatedAt`,
    args: [
      entry.id, entry.type, entry.title, entry.universe || 'bearGuardian', entry.series || 'Series 1',
      entry.favorite ? 1 : 0, entry.isStub ? 1 : 0,
      JSON.stringify(entry.tags || []), JSON.stringify(entry.links || []),
      JSON.stringify(entry.fields || {}), entry.body || '',
      JSON.stringify(entry.history || []), entry.createdAt, entry.updatedAt,
    ],
  });
  return entry;
}

async function deleteEntry(id) {
  await client.execute({ sql: 'DELETE FROM entries WHERE id = ?', args: [id] });
}

async function count() {
  const res = await client.execute('SELECT COUNT(*) as c FROM entries');
  return Number(res.rows[0].c);
}

module.exports = { init, getAllEntries, getEntry, upsertEntry, deleteEntry, count, usingTurso };
