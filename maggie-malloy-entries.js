// Starter/demo entries for "Maggie Malloy and the Deadly Seven" — a separate
// book/universe from The Bear Guardian. These exist so the new universe
// switcher and Split Timeline view have something real to show the moment
// you run the import. Edit or delete freely — nothing here is load-bearing;
// it's scaffolding, not canon. Follows the same { title, type, fields, body,
// tags } shape as canon-entries.js, plus a `universe` tag so these entries
// land in the right world.

const UNIVERSE = 'maggieMalloy';

const entries = [
  // ───────────────────────── CHARACTERS ─────────────────────────
  {
    title: 'Maggie Malloy', type: 'character', universe: UNIVERSE,
    tags: ['Protagonist', 'Present Day'],
    fields: {
      image: '',
      summary: 'The last name on a bounty ledger nobody else wants to collect — and the only person alive who rode with all seven and lived to be interviewed about it.',
      arc: 'Reluctant witness -> unreliable narrator -> the one person who has to decide what the record should say actually happened.',
      internalConflict: 'What she tells the interviewer and what she remembers are drifting apart, and she is starting to prefer the version she is inventing.',
      externalConflict: 'The interview itself -- someone wants this story on paper before she changes her mind about telling it, or before something worse than a reporter comes looking for her.',
      symbolism: "Her missing left-hand glove -- she never explains why she stopped wearing a matching pair.",
      representativeTheme: 'Truth vs. Story', representativeForce: 'Memory', status: 'Alive',
    },
    body: "Sits across from [[The Interviewer]] in every present-day chapter. Everything in the Then track is what she's describing having lived through in [[Sorrow's Bend]].",
  },
  {
    title: 'The Interviewer', type: 'character', universe: UNIVERSE,
    tags: ['Present Day', 'Frame Narrative'],
    fields: {
      image: '',
      summary: 'Never named on the page -- the present-day frame device whose questions drive which flashback chapter comes next.',
      arc: 'Starts believing they are recording a confession; ends unsure if they were recording one at all.',
      internalConflict: 'Professional detachment cracking against how much they want Maggie’s story to be true.',
      externalConflict: 'A deadline, and the growing suspicion someone else wants this transcript before it is finished.',
      symbolism: 'The tape recorder that keeps almost running out at the worst moments.',
      representativeTheme: 'Truth vs. Story', representativeForce: 'Doubt', status: 'Alive',
    },
    body: "Every 'present day' chapter is this interview with [[Maggie Malloy]].",
  },
  {
    title: 'Ezra Cole', type: 'character', universe: UNIVERSE,
    tags: ['The Deadly Seven', 'Antagonist'],
    fields: {
      image: '',
      summary: 'First of the Deadly Seven Maggie names in the interview -- a gunslinger who made a deal he insists he doesn’t remember making.',
      arc: 'Introduced as a myth; becomes, chapter by chapter, the most human of the seven.',
      internalConflict: 'Cannot tell anymore which of his own memories are his and which were part of the bargain.',
      externalConflict: "Bound to collect a debt from [[Sorrow's Bend]] whether he wants to or not.",
      symbolism: 'His six-shooter only ever holds five bullets -- he never explains where the sixth chamber went.',
      representativeTheme: 'Damnation vs. Choice', representativeForce: 'Debt', status: 'Unknown',
    },
    body: "Appears in the flashback chapters set in [[Sorrow's Bend]], recounted by [[Maggie Malloy]] to [[The Interviewer]].",
  },

  // ───────────────────────── LOCATION ─────────────────────────
  {
    title: "Sorrow's Bend", type: 'location', universe: UNIVERSE,
    tags: ['Then'],
    fields: {
      image: '',
      description: 'The town where the seven were bound and where Maggie says everything actually happened -- a one-street town that shows up on no map printed after that year.',
      kingdom: 'The Territory',
      significance: 'The setting of every flashback chapter; the present-day interview keeps circling back to whether the town still exists at all.',
    },
    body: "First mentioned by [[Maggie Malloy]] in the interview with [[The Interviewer]].",
  },

  // ───────────────────────── SPLIT TIMELINE -- CHAPTER 1 ─────────────────────────
  {
    title: 'Interview, Session One', type: 'timelineEvent', universe: UNIVERSE,
    tags: ['Present Day', 'Chapter 1'],
    fields: {
      date: 'Present day', order: '1', track: 'Interview (Present Day)', chapter: '1',
      book: 'Book 1', kingdom: '', character: 'Maggie Malloy',
      description: "The Interviewer sits down across from Maggie Malloy for the first time. She agrees to talk, on the condition that she gets to say it in the order she remembers it -- not the order it happened.",
    },
    body: "Opposite chapter: [[Maggie Malloy Rides Into Sorrow's Bend]].",
  },
  {
    title: "Maggie Malloy Rides Into Sorrow's Bend", type: 'timelineEvent', universe: UNIVERSE,
    tags: ['Then', 'Chapter 1'],
    fields: {
      date: 'Years earlier', order: '2', track: 'Then (POV Flashback)', chapter: '1',
      book: 'Book 1', kingdom: 'The Territory', character: 'Maggie Malloy',
      description: "Maggie arrives in [[Sorrow's Bend]] looking for work, not knowing the town has already made a deal that will need collecting.",
    },
    body: "Opposite chapter: [[Interview, Session One]].",
  },

  // ───────────────────────── SPLIT TIMELINE -- CHAPTER 2 ─────────────────────────
  {
    title: 'Interview, Session Two', type: 'timelineEvent', universe: UNIVERSE,
    tags: ['Present Day', 'Chapter 2'],
    fields: {
      date: 'Present day', order: '3', track: 'Interview (Present Day)', chapter: '2',
      book: 'Book 1', kingdom: '', character: 'Maggie Malloy',
      description: "The Interviewer pushes on the first inconsistency in Maggie's story. She changes the subject to how she met Ezra Cole instead of answering.",
    },
    body: "Opposite chapter: [[Maggie Malloy Meets Ezra Cole]].",
  },
  {
    title: 'Maggie Malloy Meets Ezra Cole', type: 'timelineEvent', universe: UNIVERSE,
    tags: ['Then', 'Chapter 2'],
    fields: {
      date: 'Years earlier', order: '4', track: 'Then (POV Flashback)', chapter: '2',
      book: 'Book 1', kingdom: 'The Territory', character: 'Ezra Cole',
      description: "Ezra Cole warns Maggie to leave Sorrow's Bend before sundown. She doesn't leave.",
    },
    body: "Opposite chapter: [[Interview, Session Two]]. Introduces [[Ezra Cole]].",
  },

  // ───────────────────────── SPLIT TIMELINE -- CHAPTER 3 ─────────────────────────
  {
    title: 'Interview, Session Three', type: 'timelineEvent', universe: UNIVERSE,
    tags: ['Present Day', 'Chapter 3'],
    fields: {
      date: 'Present day', order: '5', track: 'Interview (Present Day)', chapter: '3',
      book: 'Book 1', kingdom: '', character: 'Maggie Malloy',
      description: 'Maggie asks to see the tape recorder. The Interviewer says no. This is the first time she looks afraid instead of tired.',
    },
    body: "Opposite chapter: still unwritten -- add a Then-track Timeline Event with Chapter 3 once you've drafted it.",
  },
];

module.exports = { entries };
