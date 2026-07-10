function uid() { return 'e' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
function nowISO() { return new Date().toISOString(); }

function buildSeedEntries() {
  const ids = {};
  ['Maeren', 'Brynna', 'Rían', 'Aurelian', 'Bear Guardian', 'Moonstone', 'Garden Ending', 'Book 3 Climax', 'Identity', 'Nature']
    .forEach(t => (ids[t] = uid()));

  const mk = (title, type, fields, body, tags, links) => ({
    id: ids[title] || uid(), type, title, fields, body: body || '', tags: tags || [],
    series: 'Series 1', favorite: false, isStub: false,
    links: links.map(t => ids[t]).filter(Boolean), history: [],
    createdAt: nowISO(), updatedAt: nowISO(),
  });

  const entries = [
    mk('Maeren', 'character', {
      summary: 'A girl raised at the edge of the Hollow Wood who carries more of the forest in her than she admits.',
      arc: 'From self-erasure to ownership of her own nature.',
      internalConflict: 'Fear of what she becomes when she stops holding herself back.',
      externalConflict: 'The Kingdom of Ashvane hunts anything touched by the old bloodlines.',
      symbolism: 'The bear as buried instinct; the moonstone as conscience.',
      representativeTheme: 'Identity', representativeForce: 'Nature', status: 'Alive',
    }, 'Maeren is bound to the [[Bear Guardian]] and steadied by the [[Moonstone]]. Her closest tie is to [[Brynna]], and her rivalry-turned-alliance with [[Rían]] shapes Book Three.',
    ['Book 3', 'Character Arc'], ['Bear Guardian', 'Moonstone', 'Brynna', 'Rían', 'Garden Ending', 'Book 3 Climax', 'Identity', 'Nature']),

    mk('Brynna', 'character', {
      summary: "Maeren's foster-sister and the last trained Warden of the eastern wall.",
      arc: 'Learns that duty and love are not always the same order.',
      internalConflict: 'Loyalty to the Wardens versus loyalty to Maeren.',
      externalConflict: 'Ordered to report any bloodline awakening she witnesses.',
      symbolism: 'The wall itself — protection that can become a cage.',
      representativeTheme: 'Leadership', representativeForce: 'Order', status: 'Alive',
    }, 'Brynna is bonded to [[Maeren]] since childhood and stands opposite [[Rían]] in Book Two.', ['Political', 'Character Arc'], ['Maeren', 'Rían']),

    mk('Rían', 'character', {
      summary: 'A wandering bloodline-hunter with a debt to the Ashvane throne he has never spoken of.',
      arc: 'Mercenary neutrality collapses into genuine allegiance.',
      internalConflict: 'Believing he is only useful, never chosen.',
      externalConflict: 'Contracted to bring in bloodline-touched fugitives, including Maeren.',
      symbolism: "The hunter's blade — a tool that learns to protect instead of take.",
      representativeTheme: 'Hope', representativeForce: 'Redemption', status: 'Alive',
    }, "Rían's path crosses [[Maeren]] and [[Brynna]] and resolves at the [[Book 3 Climax]].", ['Book 3', 'Mystery'], ['Maeren', 'Brynna', 'Book 3 Climax']),

    mk('Aurelian', 'character', {
      summary: 'The exiled scholar-prince who first catalogued the bloodline awakenings.',
      arc: 'From detached observer to reluctant kingmaker.',
      internalConflict: 'Knowledge he is not sure the world is ready for.',
      externalConflict: 'Hunted by his own family for the archive he keeps.',
      symbolism: 'The archive — memory as both weapon and cure.',
      representativeTheme: 'Power', representativeForce: 'Truth', status: 'Alive',
    }, "Aurelian's research explains the origin of the [[Moonstone]].", ['Book 2'], ['Moonstone']),

    mk('Bear Guardian', 'symbol', {
      meaning: 'The dormant instinct and protective violence within the bloodline-touched — what Maeren fears becoming.',
      appearances: 'Appears in dreams throughout Book One; manifests physically at the Garden Ending.',
    }, 'Every time [[Maeren]] loses control, the Bear Guardian surfaces first as dream, then as claim.', ['Book 1', 'Foreshadowing', 'Magic'], ['Maeren']),

    mk('Moonstone', 'symbol', {
      meaning: 'A conscience made physical — it protects Maeren from herself, not from her enemies.',
      appearances: 'Given by an unnamed source in Book One; central to the discovery log entry below.',
    }, 'Bound to [[Maeren]]; its origin is tied to research by [[Aurelian]].', ['Magic', 'Needs Work'], ['Maeren', 'Aurelian']),

    mk('Garden Ending', 'scene', {
      book: 'Book 1', chapter: '32', pov: 'Maeren',
      summary: 'Maeren chooses to let the Bear Guardian surface in front of Brynna rather than hide it.',
      purpose: 'Break the pattern of self-erasure established in Act One.',
      emotionalGoal: 'Relief tangled with shame.',
      characterDevelopment: 'First time Maeren is witnessed, not hidden.',
      theme: 'Identity', foreshadowing: 'Sets up the full transformation at the Book 3 Climax.',
      payoffs: 'Pays off the recurring dream imagery from Chapters 4, 11, 19.', status: 'Final',
    }, 'Connected to [[Maeren]], [[Bear Guardian]], and the theme of [[Identity]].', ['Book 1', 'Ending', 'Emotional'], ['Maeren', 'Bear Guardian', 'Identity']),

    mk('Book 3 Climax', 'scene', {
      book: 'Book 3', chapter: 'TBD', pov: 'Maeren',
      summary: 'Maeren and Rían face the Ashvane vanguard together at the Hollow Wood threshold.',
      purpose: 'Resolve the Maeren/Rían arc and the bloodline-hunt plotline.',
      emotionalGoal: 'Earned trust after a book of suspicion.',
      characterDevelopment: 'Maeren stops asking permission to be herself.',
      theme: 'Identity, Nature', foreshadowing: 'Payoff of Garden Ending and every Moonstone scene.',
      payoffs: 'Bear Guardian fully embraced, not feared.', status: 'Idea',
    }, 'The convergence point for [[Maeren]], [[Rían]], [[Identity]], and [[Nature]].', ['Book 3', 'Needs Work'], ['Maeren', 'Rían', 'Identity', 'Nature']),

    mk('Identity', 'theme', {
      description: 'What it costs to stop performing a smaller version of yourself for the safety of others.',
    }, 'Threads through [[Maeren]], the [[Garden Ending]], and the [[Book 3 Climax]].', ['Book 3'], ['Maeren', 'Garden Ending', 'Book 3 Climax']),

    mk('Nature', 'theme', {
      description: 'The old bloodlines as inheritance rather than curse — nature as something to reconcile with, not conquer.',
    }, 'Embodied by [[Maeren]] and resolved at the [[Book 3 Climax]].', ['Book 3', 'Magic'], ['Maeren', 'Book 3 Climax']),
  ];

  const discovery = {
    id: uid(), type: 'discovery', title: 'The moonstone protects Maeren from herself.',
    fields: {
      date: '', importance: 'Pivotal',
      description: 'A breakthrough while drafting Book One: the Moonstone was never meant to guard Maeren from outside threats — it was made to guard her from what she becomes when the Bear Guardian surfaces.',
    },
    body: "Reframes the entire function of the [[Moonstone]] and deepens [[Maeren]]'s internal conflict.",
    tags: ['Magic', 'Character Arc'], series: 'Series 1', favorite: true, isStub: false,
    links: [ids['Moonstone'], ids['Maeren']], history: [], createdAt: nowISO(), updatedAt: nowISO(),
  };

  return [...entries, discovery];
}

module.exports = { buildSeedEntries, uid, nowISO };
