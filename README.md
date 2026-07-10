# The Bear Guardian Codex — server edition

A real backend now sits behind the Codex: an Express API talking to an actual
SQLite database via [libSQL](https://turso.tech/libsql). Run it on your own
machine with zero setup, or point it at a free hosted database and put it
online so nothing is ever lost between sessions.

## 1. Run it locally (no signup, no database to configure)

```bash
npm install
npm start
```

Open **http://localhost:3000**. Your data is written to `./data/local.db` —
an ordinary SQLite file on your disk. Back it up by copying that one file.

## 2. Put it online for real, for free

The one thing to know: most "free" hosting tiers spin your app down when idle
and either can't keep a local SQLite file (no persistent disk) or delete
free databases after 30 days. The fix is to keep the database itself
somewhere that's genuinely free and permanent, and let the (stateless,
disposable) web server talk to it over the network. That's exactly what
**Turso** gives you — the same SQLite you're already using, just hosted.

### Step A — create a free Turso database

1. Go to [turso.tech](https://turso.tech) and sign up (no credit card).
2. Create a database (any name, e.g. `bear-guardian-codex`).
3. From its dashboard, grab:
   - the **Database URL** (starts with `libsql://…`)
   - an **Auth Token**

Turso's free tier is generous (multiple GB, many databases) and doesn't
auto-delete your data the way some free Postgres tiers do.

### Step B — push this project to GitHub

```bash
git init
git add .
git commit -m "Bear Guardian Codex"
```
Create a repo on GitHub and push it there.

### Step C — deploy the web server

Pick one:

- **Render** (render.com) — easiest, has a genuinely free web service tier.
  New Web Service → connect your repo → Build command `npm install` →
  Start command `npm start`. Free services spin down after ~15 minutes idle
  and take about a minute to wake back up on the next visit — fine for a
  personal writing tool you check in on, not for something that needs to
  respond instantly at all hours.
- **Railway** (railway.com) — no spin-down, $5/month Hobby plan, the
  smoothest git-push deploy experience if you don't mind the small cost.
- **Fly.io** — more setup, more control, has a light free allowance.

Whichever you pick, set these **environment variables** on the service:

| Variable | Value |
|---|---|
| `TURSO_DATABASE_URL` | the `libsql://…` URL from Step A |
| `TURSO_AUTH_TOKEN` | the auth token from Step A |
| `ANTHROPIC_API_KEY` | *(optional)* your own key, only needed for the "Ask the Codex" AI panel |

Deploy. You'll get a public URL — that's your Codex, reachable from any
device, backed by a real database that isn't tied to this chat or this
machine.

### Why not just use SQLite's file directly in production?

Because most affordable hosts wipe or don't provide local disks on their
cheapest tiers. Turso keeps the SQLite experience (and this app's code
barely changes) while storing the actual bytes somewhere durable. If you'd
rather use Postgres instead (e.g. via [Neon](https://neon.tech), also free
and durable), that only requires rewriting `db.js` — everything else in this
project is unaffected.

## 3. The AI assistant panel

"Ask the Codex" calls Anthropic's API from the *server*, not the browser, so
your API key is never exposed. Get a key from
[console.anthropic.com](https://console.anthropic.com), set it as
`ANTHROPIC_API_KEY`, and the panel works. Without it, the rest of the app
works fine — you'll just get a clear message if you try the AI panel.

## Project structure

```
server.js        Express app + REST API (entries, search index, AI proxy)
db.js            Database layer — local SQLite file or hosted Turso, same code
seed.js          The demo Maeren/Bear Guardian entries, inserted once on first run
public/codex.html   The full frontend (single file, talks to the API above)
```

## API reference

- `GET  /api/index` — lightweight summaries of every entry (for lists/search)
- `GET  /api/entries/:id` — one full entry
- `POST /api/entries` — `{ entry, isNew }` → create or update; handles
  version history and `[[wikilink]]` auto-linking/stub-creation server-side
- `DELETE /api/entries/:id` — deletes an entry and cleans up references to it
- `POST /api/seed` — inserts the demo data, only if the database is empty
- `POST /api/ask` — `{ question, context }` → proxies to Claude
