// Canon entries compiled from "Writer's Realm Archive" (newest, dated material —
// treated as source of truth) and "TBG Support Docs" (earlier drafts, used only
// where not superseded). Each entry: { title, type, fields, body, tags }.
// [[Wikilinks]] in body/fields auto-resolve to other entries by exact title match
// and auto-create stub entries if the target doesn't exist yet — the import
// script relies on this, so titles below must match exactly.

const entries = [

  // ───────────────────────── CHARACTERS ─────────────────────────

  {
    title: 'Maeren', type: 'character', tags: ['Book 1', 'Book 2', 'Book 3', 'Character Arc', 'Protagonist'],
    fields: {
      image: '',
      summary: "House Ario's hidden daughter — raised believing herself ordinary while the [[Moonstone]] conceals her true Shai'thi features and buries [[The Bear]] within her.",
      arc: "Book One asks 'Who am I?' (identity, family, memory). Book Two asks 'What is true?' — she unravels after the Serodon killing, isolates in the mountains, and rises not from destiny but because she is [[Brynna]]'s sister, becoming the [[Bear Guardian]]. Book Three asks 'What kind of world should exist?' — she releases her ownership of power and chooses an ordinary life with [[Rían]].",
      internalConflict: "Believes that losing control confirms she is the monster the world warned her about ('They're right. I'm a monster.'). Later, her deeper fear surfaces: if someone truly sees all of her, they will leave.",
      externalConflict: "Hunted by [[The Order]] and manipulated by [[The Elders]]'s official history; her Ario bloodline power is tied to balance and portals, and costs her physically and mentally every time she uses it.",
      symbolism: "The Bear — buried instinct she fears, then becomes. The Moonstone — may be both a suppressor of her power and a glamour that has hidden her true appearance from herself her entire life.",
      representativeTheme: 'Identity', representativeForce: 'Nature', status: 'Alive',
    },
    body: "Daughter of [[Nyara]], granddaughter of [[Onór Ario]]. Bound to the [[Moonstone]] since childhood. Her closest tie is to [[Brynna]]; her bond with [[Rían]] becomes the emotional spine of Books Two and Three. Ends the trilogy gardening, teaching healing plants she learned from [[Aurelian]], and riding her horse [[Riven (Horse)]] through [[Syrithien]] without looking back.",
  },

  {
    title: 'Brynna', type: 'character', tags: ['Book 2', 'Book 3', 'Character Arc', 'Warrior'],
    fields: {
      image: '',
      summary: "Maeren's foster-sister, embodiment of justice within the trilogy, and the last person who should forgive [[Aurelian]].",
      arc: 'Fierce protector → rises as a militant/rebel figure in Book Two → trains under [[Sigrin]] in [[Caerdon]], where her true gift (momentum-based combat magic) is revealed → progression toward Aurelian is distrust, then reluctant respect, then trust, then — last of all — forgiveness → chooses to remain in Caerdon at the end, separating from Maeren on her own terms.',
      internalConflict: "Her lifelong pursuit was never actually greatness — it was belonging. Loyalty to duty and justice versus love for Maeren.",
      externalConflict: "Political instability after [[Velmora]]'s battle and King Luctar's death; later, Caerdon's famine caused by the Order's food requisitions.",
      symbolism: "Momentum — successful strikes increase her strength and speed, being struck reverses it; every fight becomes about maintaining flow, not raw power. By the ending, she unknowingly identifies birdsong by ear, having inherited Maeren's way of noticing the world.",
      representativeTheme: 'Belonging vs. Achievement', representativeForce: 'Justice', status: 'Alive',
    },
    body: "Bonded to [[Maeren]] since childhood; mentored by Queen [[Sigrin]] in [[Caerdon]]. Stands opposite [[Rían]] and, for most of Book Two, opposite [[Aurelian]] as well. Her ending mirrors and redeems the ancient parting of the [[Sisters of Creation]] — she and Maeren separate, but this time by choice, both finally home.",
  },

  {
    title: 'Rían', type: 'character', tags: ['Book 2', 'Book 3', 'Romance', 'Character Arc'],
    fields: {
      image: '',
      summary: 'Member of the Soren bloodline; finds Maeren after the Serodon killing and becomes the first person to fully witness her without trying to define her.',
      arc: "Believes his worth comes from power (control, leadership, fulfilling duty) → slowly realizes power cannot heal, only presence can → becomes the reason Maeren believes she is capable of becoming the [[Bear Guardian]] — not by rescuing her, but by removing the last obstacle to her choosing herself.",
      internalConflict: "False belief: 'My worth comes from power.' Fears being useful rather than chosen.",
      externalConflict: 'A Soren among Ario-scale stakes — his people exist to accompany extraordinary power, not command it, which he must learn to accept rather than resent.',
      symbolism: "The hunter's/protector's presence — stitching wounds, building fires, waiting — love expressed through action rather than words.",
      representativeTheme: 'Recognition, not rescue', representativeForce: 'Presence', status: 'Alive',
    },
    body: "Finds [[Maeren]] after she flees into the mountains following the Serodon killing; cares for her silently for days before telling her '[[Brynna]] needs your help.' A member of the [[Soren Bloodline]], complementary to Maeren's [[Ario Bloodline]]. Central to Maeren's romance thesis: recognition, not destiny or rescue.",
  },

  {
    title: 'Aurelian', type: 'character', tags: ['Book 1', 'Book 2', 'Redemption', 'Character Arc'],
    fields: {
      image: '',
      summary: 'Exiled prince whose fatal arrow kills [[Nyara]] in Book One, believing he is saving everyone — and who spends two books becoming someone who would have tried to save her instead.',
      arc: "Immature prince, dictated by the King, the Order, prophecy, and expectation → increasingly aligned with Maeren → in Book Two, witnesses Maeren dying after she over-extends her power, gathers Brynna and Rían himself, and chooses to heal her — his first fully free moral choice — sacrificing his own life in the process. Earns Brynna's forgiveness not by saving Maeren, but because Brynna eventually realizes he has become the kind of man who would have saved Nyara, given another chance.",
      internalConflict: "'Someone tell me what is right' → 'Follow me.' Guilt over Nyara's death versus a growing, freely-chosen compassion.",
      externalConflict: 'Hunted by his own family for defecting from the Order and the crown; distrusted by Brynna for most of Book Two.',
      symbolism: "Peppermint and gardening — his legacy is not the arrow, it's the small kindness (teaching Maeren peppermint eases headaches) that outlives him, passed to her children years later.",
      representativeTheme: 'Truth', representativeForce: 'Redemption', status: 'Deceased',
    },
    body: "Kills [[Nyara]] in Book One with a single arrow. Dies in [[The Grove]] at the end of Book Two healing [[Maeren]] at the cost of his own life, witnessed by [[Brynna]] and [[Rían]]. Remembered not for his worst act but for the gentleness — gardening, healing plants — that survives him through Maeren.",
  },

  {
    title: 'Nyara', type: 'character', tags: ['Book 1', 'Backstory', "Maeren's Mother"],
    fields: {
      image: '',
      summary: "Maeren's mother. Killed by [[Aurelian]]'s arrow in Book One. May have cast and maintained the glamour hiding Maeren's true Shai'thi appearance.",
      arc: 'Protected Maeren by allowing her a normal human childhood — possibly at the cost of Maeren never truly seeing herself.',
      internalConflict: 'Love that protects also postpones becoming — protecting her daughter from recognition, possibly past the point it still served her.',
      externalConflict: 'Targeted as part of the wound at the center of the trilogy; her death sets Book One\'s "hope collapsing" fallout in motion, alongside Eamon\'s execution and Aurelian\'s betrayal.',
      symbolism: 'The Moonstone — the anchor of the glamour she may have cast; her final act of motherhood.',
      representativeTheme: 'Protection', representativeForce: 'Love', status: 'Deceased',
    },
    body: "Mother of [[Maeren]]. Her death at the hands of [[Aurelian]] is one of the three collapses (with [[Eamon]]'s execution and Aurelian's betrayal) that end Book One in fallout rather than triumph. Possibly the one who bound the glamour to the [[Moonstone]].",
  },

  {
    title: 'Eamon', type: 'character', tags: ['Book 1', 'Backstory'],
    fields: {
      image: '',
      summary: "Executed in Book One's rapid-fire collapse alongside Nyara's death and Aurelian's betrayal — part of what shatters Maeren's understanding of herself.",
      arc: 'Remembered, like Aurelian and Nyara, for the quality that survives him rather than the manner of his death.',
      internalConflict: '', externalConflict: '',
      symbolism: 'Compassion — the trait later generations are said to carry forward from him.',
      representativeTheme: 'Legacy', representativeForce: '', status: 'Deceased',
    },
    body: "Executed in Book One. His compassion is one of the qualities the ending explicitly says survives into the next generation, alongside [[Aurelian]]'s healing and [[Nyara]]'s protection.",
  },

  {
    title: 'Sigrin', type: 'character', tags: ['Book 2', 'Caerdon', 'Mentor'],
    fields: {
      image: '',
      summary: "Queen of Caerdon (working name; also appears as 'Sigryn'). Youngest of seven siblings, raised among six brothers; becomes Brynna's second great mentor.",
      arc: "Where Maeren teaches Brynna how to love, Sigrin teaches her how to lead — redirecting her competitive nature into wisdom rather than softening it.",
      internalConflict: 'Quietly suspects the Order orchestrated her last brother\'s death, believing a female monarch would be easier to manipulate — instead she becomes Caerdon\'s strongest ruler.',
      externalConflict: "Rules a kingdom starved by the Order's food requisitions after the blight; the catalyst for open war.",
      symbolism: 'A rugged mountain ruler respected for competence, not ceremony — coaches rather than comforts.',
      representativeTheme: 'Leadership', representativeForce: 'Competence', status: 'Alive',
    },
    body: "Queen of [[Caerdon]]. Mentors [[Brynna]] through Book Two, guards [[The Grove]] while [[Maeren]] and [[Aurelian]] undergo their climax there, and is the one who warns Brynna that Specter Alai is escaping.",
  },

  {
    title: 'Gwyrionez', type: 'character', tags: ['Book 2', 'Family History'],
    fields: {
      image: '',
      summary: 'An old woman defined by loneliness, fading memory, and quiet domestic kindness — the final living witness to a generation of Ario women erased from history.',
      arc: "Her chapter reveals that she, and sisters [[Nyara]] and Hana, were effectively sacrificed by [[Onór Ario]] to preserve House Ario's standing.",
      internalConflict: '', externalConflict: '',
      symbolism: 'Remembering people before symbols; tea offered as an act of quiet grief and kindness.',
      representativeTheme: 'Recovering Stolen History', representativeForce: '', status: 'Alive',
    },
    body: "Central to the emotional family-history chapter of Book Two. [[Maeren]] chooses not to reveal her true identity to Gwyrionez, protecting the old woman's peace over her own longing for connection. Ties to [[Onór Ario]] and [[Nyara]].",
  },

  {
    title: 'Onór Ario', type: 'character', tags: ['Backstory', 'Ario Bloodline'],
    fields: {
      image: '',
      summary: 'Patriarch of House Ario, aligned with the Elders — sacrifices his own daughters to preserve the House\'s standing.',
      arc: 'One of the trilogy\'s earliest examples of power demanding family sacrifice; not a simple villain, but the origin point of the erasure Maeren and Gwyrionez later uncover.',
      internalConflict: '', externalConflict: '',
      symbolism: '', representativeTheme: 'Power demanding sacrifice', representativeForce: '', status: 'Deceased',
    },
    body: "Father (or forebear) of [[Nyara]] and [[Gwyrionez]] within House [[Ario Bloodline]]. His practice of sending Ario women into human courts through marriage becomes established historical practice among [[The Elders]].",
  },

  {
    title: 'Cordova', type: 'character', tags: ['Book 2', 'Political'],
    fields: {
      image: '',
      summary: 'Not becoming "good" — pragmatic. Shifts loyalty away from the Elders once they stop being the safest source of power.',
      arc: '', internalConflict: '', externalConflict: '',
      symbolism: '', representativeTheme: 'Pragmatism over morality', representativeForce: '', status: 'Alive',
    },
    body: "Politically aligned with [[The Elders]] until it stops serving her interests.",
  },

  {
    title: 'Vaela', type: 'character', tags: ['Book 2', 'Identity'],
    fields: {
      image: '',
      summary: 'Possibly a Velmoran name rather than her true one — her real Caerdonian name may be revealed once she returns home, underscoring the cultural divide between Velmora and Caerdon.',
      arc: '', internalConflict: '', externalConflict: '',
      symbolism: '', representativeTheme: 'Identity across cultures', representativeForce: '', status: 'Alive',
    },
    body: "Connected to both [[Velmora]] and [[Caerdon]]; also appears in earlier notes as 'Orli/Vela,' who identifies the Nymari's memory-scrambling tactics and later reveals truths about the [[Sisters of Creation]] myth.",
  },

  // ───────────────────────── CREATURES ─────────────────────────

  {
    title: 'The Bear', type: 'creature', tags: ['Book 1', 'Book 3', 'Symbol', 'Magic'],
    fields: {
      image: '',
      description: "Opens the trilogy as a terrifying, unknowable force moving through Syrithien while humans invade the forest — throughout the story it represents prophecy, mystery, fear, sacrifice, Nyara, and the burden of magic. By the end it is simply allowed to exist: a living creature, not a symbol.",
      habitat: '[[Syrithien]]',
      abilities: "Maeren transforms into the Bear at the end of Book One and falls through a sealing portal. Becoming the Bear Guardian is later understood not as commanding this creature but as Maeren herself holding that title.",
    },
    body: "The trilogy opens and closes on a bear. In the final scene, [[Maeren]] and a bear acknowledge one another in [[Syrithien]] and each continues on their way — nothing happens, because everything already has.",
  },

  {
    title: 'Riven (Horse)', type: 'creature', tags: ['Book 3', 'Companion'],
    fields: {
      image: '',
      description: "Maeren's horse in the trilogy's final chapters. (Earlier notes used 'Riven' for a since-renamed companion character who died in a grove-burning — in current canon the name belongs to the horse.)",
      habitat: '', abilities: '',
    },
    body: "Maeren turns Riven toward home in the trilogy's closing image, after her final encounter with [[The Bear]] in [[Syrithien]].",
  },

  // ───────────────────────── LOCATIONS ─────────────────────────

  {
    title: 'Caerdon', type: 'location', tags: ['Book 2', 'Book 3', 'Kingdom'],
    fields: {
      image: '',
      description: 'Mountain kingdom, economically centered on iron and metallurgy; rugged, weathered culture representing competence and earned leadership rather than inherited elegance.',
      kingdom: 'Caerdon',
      significance: "Historically trades iron for Velmoran grain; suffers famine after the Order redirects food supplies, which becomes the catalyst for open war. Where Brynna trains under Sigrin, discovers her combat gift, and ultimately chooses to make her home.",
    },
    body: "Ruled by Queen [[Sigrin]]. [[Brynna]] chooses to remain here at the trilogy's end, separating from [[Maeren]] by choice rather than tragedy.",
  },

  {
    title: 'Velmora', type: 'location', tags: ['Book 2', 'Kingdom'],
    fields: {
      image: '',
      description: 'Grain-producing kingdom, historically interdependent with Caerdon through trade.',
      kingdom: 'Velmora',
      significance: "Site of the Battle of Velmora, where King Luctar dies and the Order falls, opening the political vacuum that Book Three's rebuilding responds to.",
    },
    body: "The Battle of [[Velmora]] ends Book Two's political arc; [[The Order]] falls here.",
  },

  {
    title: 'Syrithien', type: 'location', tags: ['Book 1', 'Book 3', 'Forest'],
    fields: {
      image: '',
      description: 'The forest where the trilogy opens (from the Bear\'s point of view, watching humans invade) and closes (Maeren riding home after a peaceful encounter with a bear).',
      kingdom: '',
      significance: "By the trilogy's end, bears once again freely inhabit Syrithien — restored balance between humanity and nature rather than the absence of danger.",
    },
    body: "Home of [[The Bear]]. The site of the trilogy's mirrored opening and closing images, both centered on [[Maeren]].",
  },

  {
    title: 'Aios', type: 'location', tags: ['Book 3', 'Kingdom'],
    fields: {
      image: '',
      description: 'A throne/kingdom Maeren is positioned to inherit at the end of the trilogy.',
      kingdom: 'Aios',
      significance: "Maeren deliberately does not inherit Aios — giving her another throne would simply replace one burden with another. She chooses an ordinary life instead.",
    },
    body: "Considered and rejected as [[Maeren]]'s ending. She chooses home over rule.",
  },

  {
    title: 'Talauvmor', type: 'location', tags: ['Book 3', 'Realm'],
    fields: {
      image: '',
      description: 'The reunited realm/world at the climax of Book Three — reality itself reshapes as it reunites (water condensing into floating spheres, fog behaving similarly, landscapes folding together).',
      kingdom: '',
      significance: 'Following reunification, Maeren and company journey across the transformed landscape toward Eos for the final confrontation with the Elders, passing the exposed skeleton of a colossal ancient sea creature along the way.',
    },
    body: "Reunifies at the climax of Book Three, en route to [[Eos]].",
  },

  {
    title: 'Eos', type: 'location', tags: ['Book 3', 'Climax'],
    fields: {
      image: '',
      description: 'City where the final confrontation with the Elders takes place, following the reunification of Talauvmor.',
      kingdom: '', significance: 'Site of the trilogy\'s climactic confrontation.',
    },
    body: "Destination of [[Maeren]]'s party after [[Talauvmor]] reunites, for the final confrontation with [[The Elders]].",
  },

  {
    title: 'The Grove', type: 'location', tags: ['Book 2', 'Sacrifice'],
    fields: {
      image: '',
      description: "Quiet grove where Aurelian heals the catastrophically wounded Maeren at the cost of his own life, witnessed by Brynna and Rían. Orange poppies are said to sprout where he passed, echoing his mother.",
      kingdom: '', significance: "The end-of-Book-Two emotional climax; guarded from outside by Sigrin while it happens.",
    },
    body: "Where [[Aurelian]] sacrifices himself healing [[Maeren]], witnessed by [[Brynna]] and [[Rían]], guarded by [[Sigrin]].",
  },

  // ───────────────────────── BLOODLINES & PEOPLES ─────────────────────────

  {
    title: 'Ario Bloodline', type: 'bloodline', tags: ['Magic', "Maeren's Family"],
    fields: {
      image: '',
      description: "Maeren's bloodline — carries transformative power tied to balance and portals. Complementary to, not superior to, the Soren bloodline.",
      members: "[[Maeren]], [[Nyara]], [[Onór Ario]], [[Gwyrionez]]",
      traits: 'Transformative power; historically, House Ario sent its women into human courts through marriage as political practice.',
    },
    body: "The Ario carry transformative power; the [[Soren Bloodline]] carries relational strength to help them remain themselves beneath it. Neither is above the other.",
  },

  {
    title: 'Soren Bloodline', type: 'bloodline', tags: ['Magic', "Rían's Family"],
    fields: {
      image: '',
      description: "Rían's bloodline. Exist to accompany the Ario, not to control or direct them — their greatest strength is relational rather than magical.",
      members: '[[Rían]]',
      traits: 'Steadfast presence; created alongside the Ario specifically to help extraordinary people remain themselves under impossible burdens.',
    },
    body: "Complements the [[Ario Bloodline]]. [[Rían]]'s arc is the discovery that this relational strength is not lesser than magical power.",
  },

  {
    title: "Shai'thi", type: 'bloodline', tags: ['Magic', 'Hidden Identity'],
    fields: {
      image: '',
      description: "A people/bloodline with recognizable traits (traditionally pointed ears, but likely more — resemblance to an ancient bloodline, prophetic significance) that can be hidden by glamour magic anchored to artifacts like the [[Moonstone]].",
      members: '[[Maeren]] (possibly, under glamour)',
      traits: "Identity, not just appearance, can be concealed — the reveal of Shai'thi heritage is meant to land as identity, not a physical surprise.",
    },
    body: "The [[Moonstone]] may anchor a glamour hiding a character's Shai'thi nature entirely, not just their ears.",
  },

  {
    title: 'Nymari', type: 'bloodline', tags: ['Storytelling', 'Political'],
    fields: {
      image: '',
      description: "A people with a storytelling tradition, historically used politically by the Elders. Associated with memory-scrambling as both a plot device and a trauma metaphor ('the brain forgets, the body remembers').",
      members: '', traits: 'Storytelling; can be manipulated as tools of political narrative.',
    },
    body: "Connected to [[The Elders]]'s control of official history and to the memory-scrambling thread [[Vaela]] uncovers.",
  },

  // ───────────────────────── FACTIONS ─────────────────────────

  {
    title: 'The Order', type: 'custom', tags: ['Antagonist', 'Political'],
    fields: {
      image: '',
      description: "Institution whose power has expanded past religion into food distribution, trade, political succession, and economic dependence. Its deepest weapon isn't suppressing magic directly — it's building and maintaining an official history that magic's existence would disprove.",
    },
    body: "Falls at the [[Velmora]] battle in Book Two. Starves [[Caerdon]] by requisitioning its food, creating the material cause for war beneath the ideological one. Works in service of [[The Elders]].",
  },

  {
    title: 'The Elders', type: 'custom', tags: ['Antagonist', 'Political'],
    fields: {
      image: '',
      description: 'The true antagonist beneath the Order — the official history they have built and maintained. Historically sent Ario women into human courts through marriage to manage the bloodline politically.',
    },
    body: "Manipulate the [[Nymari]] as tools of narrative control. Confronted at [[Eos]] at the trilogy's climax. Responsible, generations back, for the sacrifice of [[Onór Ario]]'s daughters, including [[Nyara]] and [[Gwyrionez]].",
  },

  // ───────────────────────── MAGIC ─────────────────────────

  {
    title: 'Portal / Veil Magic', type: 'magic', tags: ['Book 1', 'Book 2', 'Book 3', 'Magic System'],
    fields: {
      image: '',
      description: "Magic tied to balance, portals, and the Veils separating realms. Central to Maeren's Ario power.",
      rules: "Closing or using portal magic exacts a physical and psychic cost on the user (a pull toward shadow/fracture). The Veils are seeded in Book One but remain primarily a Book Two mystery.",
      cost: "Depletes and fractures the user; overuse nearly kills Maeren at the end of Book Two, which is what leads to [[Aurelian]]'s sacrifice.",
    },
    body: "At the climax of Book Three, [[Talauvmor]] reunites — magic stops being extracted, controlled, or possessed by anyone and instead becomes part of the living ecosystem again, like rivers or sunlight.",
  },

  // ───────────────────────── MYTH ─────────────────────────

  {
    title: 'Sisters of Creation', type: 'custom', tags: ['Myth', 'Foreshadowing'],
    fields: {
      image: '',
      description: "Creation myth in which two sister-figures are forced apart forever, never knowing if the other survived — originally framed as pure tragedy.",
    },
    body: "The trilogy's ending redeems, without undoing, this myth: [[Maeren]] and [[Brynna]] also separate, but this time by choice, each knowing the other is safe and loved. 'The Sisters of Creation separated to survive. Maeren and Brynna separate because they finally can.'",
  },

  // ───────────────────────── THEMES ─────────────────────────

  {
    title: 'Identity', type: 'theme', tags: ['Book 1', 'Book 2', 'Book 3'],
    fields: { image: '', description: "What it costs to stop performing a smaller version of yourself for the safety of others — and, more specifically, discovering who you are when every reflection you've trusted (a mirror, an inherited myth, an official history) has been incomplete." },
    body: "Threads through [[Maeren]], the possible [[Moonstone]] glamour reveal, and her final choice to become the [[Bear Guardian]] from identity rather than obligation.",
  },

  {
    title: 'Nature', type: 'theme', tags: ['Book 3', 'Magic'],
    fields: { image: '', description: 'The old bloodlines, and magic itself, as inheritance and ecosystem rather than curse or resource — something to belong within, not conquer or own.' },
    body: "Resolved when [[Maeren]] releases ownership of her power and magic returns to the world at large after [[Talauvmor]] reunites.",
  },

  {
    title: 'Healing vs. Ruling', type: 'theme', tags: ['Book 3', 'Ending'],
    fields: { image: '', description: "The trilogy's ending distributes not kingdoms but growth: Aurelian receives redemption, Brynna receives freedom, Rían receives belonging, Maeren receives home. No one ends where they expected — everyone ends where they've grown into." },
    body: "Directly informs why [[Maeren]] does not inherit [[Aios]] and why [[Brynna]] chooses [[Caerdon]] over further conquest.",
  },

  {
    title: 'Recovering Stolen History', type: 'theme', tags: ['Book 1', 'Book 2'],
    fields: { image: '', description: "The story isn't about learning history — it's about recovering history that was intentionally erased, especially the lives of women written out of it." },
    body: "Connects [[Maeren]]'s dreams, [[Gwyrionez]]'s memories, [[The Order]]'s censorship, [[The Elders]]'s manipulation, and the [[Nymari]]'s storytelling tradition.",
  },

  {
    title: 'Belonging vs. Achievement', type: 'theme', tags: ['Book 2', 'Book 3'],
    fields: { image: '', description: "Brynna's lifelong pursuit was never actually greatness — it was belonging. Leadership through competence rather than destiny; home as something chosen rather than inherited." },
    body: "Central to [[Brynna]]'s arc and her choice to remain in [[Caerdon]] under [[Sigrin]]'s mentorship.",
  },

  // ───────────────────────── SCENES ─────────────────────────

  {
    title: 'The Serodon Killing', type: 'scene', tags: ['Book 2', 'Turning Point'],
    fields: {
      image: '',
      book: 'Book 2', chapter: 'Early', pov: 'Maeren',
      summary: "While living among the Serodonians, Maeren loses control of the Bear and kills an Order messenger. She concludes: 'They're right. I'm a monster.'",
      purpose: "Turns Maeren's internal fracture outward and drives her into isolation, opening Book Two's 'unraveling' arc.",
      emotionalGoal: 'Shame and devastation, not political consequence.',
      characterDevelopment: 'The catalyst for her flight into the mountains and eventual self-dissection.',
      theme: 'Identity', foreshadowing: "Sets up [[Rían]]'s discovery of her and the mountain cabin scene.",
      payoffs: '', status: 'Final',
    },
    body: "Precedes the mountain cabin isolation. Connected to [[Maeren]] and the theme of [[Identity]].",
  },

  {
    title: 'The Mountain Cabin', type: 'scene', tags: ['Book 2', 'Romance', 'Healing'],
    fields: {
      image: '',
      book: 'Book 2', chapter: '', pov: 'Maeren',
      summary: "Maeren, starving and increasingly feral, cuts open her own arm trying to understand where the monster in her begins — not to punish herself, but to understand. Rían finds her, cares for her silently for days, then tells her Brynna needs her help.",
      purpose: 'The emotional center of Book Two — being fully seen and chosen rather than being fixed or rescued.',
      emotionalGoal: "Maeren expects rejection ('Now he'll finally leave') and instead is fully witnessed.",
      characterDevelopment: "Rían becomes the first person to witness Maeren without trying to define her; Maeren chooses to rise as Brynna's sister, not as the Bear Guardian.",
      theme: 'Identity', foreshadowing: 'Payoff of the Serodon killing; sets up the Grove Healing at the end of Book Two.',
      payoffs: "Maeren's decision to return and, eventually, become the [[Bear Guardian]].",
      status: 'Final',
    },
    body: "Follows [[The Serodon Killing]]. Central scene for [[Maeren]] and [[Rían]]. Key line: '[[You were trying to understand]].'",
  },

  {
    title: 'The Grove Healing', type: 'scene', tags: ['Book 2', 'Sacrifice', 'Ending'],
    fields: {
      image: '',
      book: 'Book 2', chapter: 'Final', pov: 'Brynna',
      summary: "Maeren, catastrophically wounded and fracturing toward shadow from overusing her power, is healed by Aurelian in the Grove — his first fully free moral choice, made at the cost of his own life.",
      purpose: "Aurelian's redemption climax and the emotional gut-punch that closes Book Two.",
      emotionalGoal: 'Grief tangled with awe; Maeren wakes to learn he is gone.',
      characterDevelopment: "Transforms Aurelian's arc from 'someone tell me what is right' to 'follow me.' Orange poppies sprout where he passed, echoing his mother.",
      theme: 'Truth', foreshadowing: "Aurelian's later, full forgiveness from Brynna.",
      payoffs: "Brynna and Maeren hold each other; the political vacuum of Book Three begins.",
      status: 'Final',
    },
    body: "Takes place in [[The Grove]], guarded by [[Sigrin]]. Involves [[Maeren]], [[Aurelian]], [[Brynna]], and [[Rían]].",
  },

  {
    title: 'The Gwyrionez Chapter', type: 'scene', tags: ['Book 2', 'Family History'],
    fields: {
      image: '',
      book: 'Book 2', chapter: '', pov: 'Maeren',
      summary: "Maeren visits Gwyrionez and learns that she, Nyara, and Hana were effectively sacrificed by Onór Ario to preserve House Ario's standing. Maeren processes the revelation physically (spilling tea) before intellectually, and chooses not to reveal her identity.",
      purpose: 'The emotional family-history chapter, not a mythology lecture.',
      emotionalGoal: "Grief and tenderness; sisters meeting secretly in a marsh becomes the image readers remember.",
      characterDevelopment: "Maeren transitions from seeking answers to seeking justice for her family's history.",
      theme: 'Recovering Stolen History', foreshadowing: '',
      payoffs: '', status: 'Final',
    },
    body: "Features [[Maeren]] and [[Gwyrionez]]; reveals the fate of [[Nyara]] under [[Onór Ario]].",
  },

  {
    title: 'The Final Bear Encounter', type: 'scene', tags: ['Book 3', 'Ending', 'Mirror'],
    fields: {
      image: '',
      book: 'Book 3', chapter: 'Final', pov: 'Maeren',
      summary: "Years later, Maeren rides through Syrithien and encounters a bear — mirroring the trilogy's opening. Neither reacts with fear. The bear disappears into the brush; Maeren turns Riven toward home. 'Maeren Ario did not look back.'",
      purpose: "Closes the trilogy's central thematic circle: the opening taught 'a bear means terror'; the ending teaches 'a bear means a bear.'",
      emotionalGoal: 'Peace through restraint, not spectacle.',
      characterDevelopment: "Maeren witnesses wildness without needing to possess, destroy, or interpret it — her greatest growth is relinquishing the need to use her power.",
      theme: 'Nature', foreshadowing: 'Mirrors the trilogy\'s opening chapter (the Bear\'s POV watching humans invade the forest).',
      payoffs: "The [[Bear Guardian]] role ends — there is no successor, because the wound it existed to carry has healed.",
      status: 'Final',
    },
    body: "Final scene of the trilogy. Involves [[Maeren]], [[The Bear]], and [[Riven (Horse)]] in [[Syrithien]].",
  },

  // ───────────────────────── DISCOVERIES ─────────────────────────

  {
    title: 'The Bear Guardian role ends with Maeren', type: 'discovery', tags: ['Ending', 'Character Arc'],
    fields: {
      image: '',
      date: '', importance: 'Pivotal',
      description: "The trilogy is not about creating the greatest guardian — it's about making guardians unnecessary. The Bear Guardian exists because the world is wounded; when the wound heals, the office disappears. There is no successor, not because Maeren failed, but because she succeeded.",
    },
    body: "Reframes [[Maeren]]'s entire arc and the ending of [[The Final Bear Encounter]].",
  },

  {
    title: "The moonstone may hide Maeren's true appearance", type: 'discovery', tags: ['Magic', 'Identity', 'Needs Work'],
    fields: {
      image: '',
      date: '', importance: 'High',
      description: "The Moonstone may do more than suppress Maeren's power — it may maintain a glamour concealing her true Shai'thi features, meaning she has never truly seen herself. Every mirror scene, and every time she touches the necklace, gains a second meaning if this becomes canon.",
    },
    body: "Deepens [[Maeren]]'s arc and [[Nyara]]'s role as the one who may have cast it. Connected to the [[Shai'thi]] bloodline.",
  },

  {
    title: 'The core hook: they were hunting the wrong monster', type: 'discovery', tags: ['Theme', 'Series Identity'],
    fields: {
      image: '',
      date: '', importance: 'High',
      description: "The trilogy's real hook isn't 'a chosen one discovers magic' — it's that the heroes slowly realize they've been hunting the wrong monster, and that everything they believed about their world's history is backwards. The Order doesn't just suppress magic; it maintains an official narrative, and magic is evidence that narrative is false.",
    },
    body: "Reframes the antagonist as [[The Elders]]'s official history rather than [[The Order]] itself. Ties the [[Bear Guardian]] title's layered meaning together.",
  },

  // ───────────────────────── QUOTES ─────────────────────────

  { title: "You were trying to understand", type: 'quote', tags: ['Book 2', 'Rían', 'Maeren'],
    fields: { image: '', text: "You were trying to understand.", speaker: 'Rían', context: "Said to Maeren in [[The Mountain Cabin]], after finding her bleeding and believing she is a monster." } , body: '' },

  { title: "You're her sister", type: 'quote', tags: ['Book 2', 'Rían', 'Maeren'],
    fields: { image: '', text: "You're her sister.", speaker: 'Rían', context: "Rían's answer when Maeren asks 'Who am I to help? I'm a monster,' in [[The Mountain Cabin]]." }, body: '' },

  { title: 'You don\'t have to be perfect', type: 'quote', tags: ['Book 2', 'Sigrin', 'Brynna'],
    fields: { image: '', text: "You don't have to be perfect. You just have to be better than them.", speaker: 'Sigrin', context: "Sigrin's coaching philosophy for [[Brynna]] in [[Caerdon]]." }, body: '' },

  { title: 'The office becomes obsolete', type: 'quote', tags: ['Book 3', 'Thesis'],
    fields: { image: '', text: "The Bear Guardian doesn't fail. The office becomes obsolete.", speaker: 'Narration', context: "The trilogy's central thesis on how [[Maeren]]'s arc, and the [[Bear Guardian]] role, resolve." }, body: '' },

  { title: 'Maeren Ario did not look back', type: 'quote', tags: ['Book 3', 'Final Line'],
    fields: { image: '', text: 'Maeren Ario did not look back.', speaker: 'Narration', context: "Candidate final line of the trilogy, closing [[The Final Bear Encounter]]." }, body: '' },

  { title: 'Love creates the conditions', type: 'quote', tags: ['Book 2', 'Romance', 'Thesis'],
    fields: { image: '', text: "Love doesn't rescue someone from becoming themselves. Love creates the conditions in which they can choose to become themselves.", speaker: 'Narration', context: "The romance thesis between [[Maeren]] and [[Rían]]." }, body: '' },

  { title: 'The Sisters separated to survive', type: 'quote', tags: ['Myth', 'Ending', 'Brynna'],
    fields: { image: '', text: "The Sisters of Creation separated to survive. Maeren and Brynna separate because they finally can.", speaker: 'Narration', context: "How [[Maeren]] and [[Brynna]]'s ending redeems the [[Sisters of Creation]] myth." }, body: '' },
  {
    title: 'Garden Ending', type: 'scene', tags: ['Book 3', 'Ending', 'Emotional'],
    fields: {
      image: '',
      book: 'Book 3', chapter: 'Final', pov: 'Maeren',
      summary: "The trilogy's true final image: Maeren wakes peacefully, Rían beside her, children nearby, a garden waiting outside. No crown, no council — the world is still imperfect, life simply continues.",
      purpose: "Replaces a 'rewarded with a throne' ending with an ordinary-life ending Maeren has secretly wanted all along.",
      emotionalGoal: 'Quiet contentment rather than triumph.',
      characterDevelopment: "Her Book One dream of invisibility and safety, born from trauma, is the same dream — but its meaning has changed to flourishing rather than hiding. Gardening quietly carries Aurelian's memory forward.",
      theme: 'Nature', foreshadowing: "Payoff of everything Maeren wanted since Book One.",
      payoffs: "Confirms Maeren does not inherit [[Aios]]; she chooses home.",
      status: 'Final',
    },
    body: "Companion piece to [[The Final Bear Encounter]]. Involves [[Maeren]] and [[Rían]]; carries [[Aurelian]]'s memory forward through gardening.",
  },

  {
    title: 'Book 3 Climax', type: 'scene', tags: ['Book 3', 'Climax'],
    fields: {
      image: '',
      book: 'Book 3', chapter: '', pov: 'Maeren',
      summary: "Following the reunification of Talauvmor, Maeren's party journeys across the transformed landscape — passing the exposed skeleton of a colossal ancient sea creature — toward Eos for the final confrontation with the Elders.",
      purpose: "Resolves the series' true antagonist: not the Order directly, but the official history the Elders built and maintained.",
      emotionalGoal: 'Awe mixed with grief and moral resolution.',
      characterDevelopment: "Maeren's journey completes: 'I don't understand this power' (Book 1) → 'I don't want this power' (Book 2) → 'I was never meant to own it' (Book 3).",
      theme: 'Identity, Nature', foreshadowing: 'Payoff of every portal/Veil thread since Book One.',
      payoffs: 'Magic is liberated rather than possessed; no one owns it afterward.',
      status: 'Idea',
    },
    body: "The convergence point in [[Talauvmor]] and [[Eos]] for [[Maeren]] against [[The Elders]]. Precedes [[The Final Bear Encounter]] and [[Garden Ending]].",
  },

  {
    title: 'Moonstone', type: 'symbol', tags: ['Magic', 'Identity', 'Needs Work'],
    fields: {
      image: '',
      meaning: "A conscience made physical, protecting Maeren from herself rather than her enemies — and possibly much more: a glamour that has hidden her true Shai'thi appearance from everyone, including herself, since childhood.",
      appearances: "Given in Book One; central to [[The moonstone may hide Maeren's true appearance]]. If removed or destroyed, the glamour it anchors would dissolve instantly, revealing Maeren's true appearance — likely landing as disorientation rather than triumph.",
    },
    body: "Bound to [[Maeren]]; possibly cast by [[Nyara]]. Connected to the [[Shai'thi]] bloodline and the theme of [[Identity]].",
  },

];

module.exports = { entries };
