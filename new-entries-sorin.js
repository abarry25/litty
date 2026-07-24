// Addendum to canon-entries.js — the net-new material from the July 16, 2026
// Writer's Room (Sorins-may-be-human-bloodline discovery). Everything else in
// that session was already covered by canon-entries.js.
//
// This UPDATES 'Rían' and 'Soren Bloodline' (matched by exact title, so their
// existing ids/links/history are preserved — see import-canon.js) and CREATES
// four new entries (1 discovery, 2 quotes, 1 myth/theme).
//
// Usage:
//   BASE_URL=https://litty.onrender.com node import-canon-sorin.js
// (see import-canon-sorin.js, a copy of import-canon.js pointed at this file)

const entries = [

  // ───────────────────────── UPDATED: Rían ─────────────────────────
  {
    title: 'Rían', type: 'character', tags: ['Book 2', 'Book 3', 'Romance', 'Character Arc', 'Soren Bloodline'],
    fields: {
      image: '',
      summary: "Member of the Soren bloodline — possibly descended from an ancient human bloodline the Sisters created specifically to protect the Bear Guardian, culturally absorbed into Shai'thi nobility over centuries of intermarriage. Finds Maeren after the Serodon killing and becomes the first person to fully witness her without trying to define her.",
      arc: "Believes his worth comes from power (control, leadership, fulfilling duty) → slowly realizes power cannot heal, only presence can → becomes the reason Maeren believes she is capable of becoming the [[Bear Guardian]] — not by rescuing her, but by removing the last obstacle to her choosing herself. His comparatively modest magic, once read as a flaw, is reframed as evidence he embodies the Sorens exactly as intended: 'Rían isn't a failed Shai'thi. He's an exceptionally complete Soren.'",
      internalConflict: "False belief: 'My worth comes from power.' Fears being useful rather than chosen.",
      externalConflict: "A Soren among Ario-scale stakes — his people exist to accompany extraordinary power, not command it, which he must learn to accept rather than resent. If his human ancestry becomes public, it could destabilize how Shai'thi society sees House Soren's centuries-long status as noble kin.",
      symbolism: "The hunter's/protector's presence — stitching wounds, building fires, waiting — love expressed through action rather than words. His humanity is not dilution. It is design.",
      representativeTheme: 'Recognition, not rescue; humanity as design, not deficiency', representativeForce: 'Presence', status: 'Alive',
    },
    body: "Finds [[Maeren]] after she flees into the mountains following the Serodon killing; cares for her silently for days before telling her '[[Brynna]] needs your help.' A member of the [[Soren Bloodline]], complementary to Maeren's [[Ario Bloodline]] — possibly humanity's own line rather than a Shai'thi one. Central to Maeren's romance thesis: recognition, not destiny or rescue. See [[The Sorins may descend from humans, not Shai'thi]].",
  },

  // ───────────────────────── UPDATED: Soren Bloodline ─────────────────────────
  {
    title: 'Soren Bloodline', type: 'bloodline', tags: ['Magic', "Rían's Family", 'Hidden Identity'],
    fields: {
      image: '',
      description: "Rían's bloodline. Exist to accompany the Ario, not to control or direct them — their greatest strength is relational rather than magical. Possibly not Shai'thi at all: may originate as a human bloodline intentionally created by the Sisters to protect the [[Bear Guardian]], culturally absorbed into Shai'thi nobility over centuries of intermarriage while their deepest ancestry remains human.",
      members: '[[Rían]]',
      traits: "Steadfast presence, loyalty, sacrifice, resilience — inherited strengths distinct from Ario/Shai'thi magical power. Created alongside the Ario specifically to help extraordinary people remain themselves under impossible burdens.",
    },
    body: "Complements the [[Ario Bloodline]]. [[Rían]]'s arc is the discovery that this relational strength is not lesser than magical power. See [[The Sorins may descend from humans, not Shai'thi]] for the possible human-origin reveal and its implications for Shai'thi society.",
  },

  // ───────────────────────── NEW: Discovery ─────────────────────────
  {
    title: "The Sorins may descend from humans, not Shai'thi", type: 'discovery', tags: ['Mythology', 'Rían', 'Identity', 'Needs Work'],
    fields: {
      image: '',
      date: '2026-07-16', importance: 'High',
      description: "The Sorins may have originated as a human bloodline, intentionally created by the Sisters to protect the [[Bear Guardian]]. Centuries of intermarriage with the Shai'thi gave them the cultural identity of a noble Shai'thi house — but their deepest ancestry is human. This reframes [[Rían]]'s comparatively modest magic: not a flaw to explain away, but evidence he embodies the Sorens exactly as intended. It also implies the Sisters entrusted humanity — not the most magically gifted people — with one of creation's most important responsibilities, and that this revelation, if it surfaced in-world, could destabilize Shai'thi society's assumptions about its own noble houses.",
    },
    body: "Reframes [[Rían]] and the [[Soren Bloodline]]. Structurally mirrors [[Maeren]]'s arc: she discovers she is more magical than she believed, he discovers he is more human than he believed — they move toward each other rather than apart. Connects to [[The Sisters' Four Peoples]].",
  },

  // ───────────────────────── NEW: Myth/Creation entry ─────────────────────────
  {
    title: "The Sisters' Four Peoples", type: 'custom', tags: ['Myth', 'Worldbuilding', 'Needs Work'],
    fields: {
      image: '',
      description: "Possible creation-mythology structure: the Sisters intentionally created different peoples for different purposes — Humans (children of Maevira), [[Shai'thi]] (magical civilization), [[Nymari]] (guardians of the Veil), and the [[Soren Bloodline]] (humanity's sacred guardian bloodline, tasked with standing beside the Bear Guardian). Core idea: the greatest *gift* wasn't magic — the greatest *responsibility* was entrusted to humans.",
    },
    body: "Ties together [[Sisters of Creation]], [[Shai'thi]], [[Nymari]], and [[Soren Bloodline]] into one mythological framework. Underlies [[The Sorins may descend from humans, not Shai'thi]].",
  },

  // ───────────────────────── NEW: Quotes ─────────────────────────
  {
    title: 'His humanity is not dilution', type: 'quote', tags: ["Rían", 'Identity', 'Thesis'],
    fields: { image: '', text: 'His humanity is not dilution. It is design.', speaker: 'Narration', context: "Reframing of [[Rían]]'s modest magical ability as evidence of his Soren heritage rather than a deficiency." },
    body: '',
  },

  {
    title: 'An exceptionally complete Soren', type: 'quote', tags: ["Rían", 'Identity'],
    fields: { image: '', text: "Rían isn't a failed Shai'thi. He's an exceptionally complete Soren.", speaker: 'Narration', context: "Companion line to '[[His humanity is not dilution]],' on the reframing of [[Rían]]'s heritage." },
    body: '',
  },

];

module.exports = { entries };
