export type SiteCategory = "heritage" | "religious" | "nature" | "museum" | "ancient" | "monument";

export interface Site {
  id: string;
  name: string;
  frenchName?: string;
  tamilName?: string;
  category: SiteCategory;
  lat: number;
  lng: number;
  era: string;
  summary: string;
  history: string;
  highlights: string[];
  photo?: string;
  photoPosition?: string;
  labelPosition?: "left" | "right";
  visitInfo?: {
    hours?: string;
    entry?: string;
    tip?: string;
  };
}

export const CATEGORY_LABELS: Record<SiteCategory, string> = {
  heritage: "Colonial Heritage",
  religious: "Religious Site",
  nature: "Nature & Garden",
  museum: "Museum",
  ancient: "Ancient History",
  monument: "Monument & Street",
};

export const CATEGORY_COLORS: Record<SiteCategory, string> = {
  heritage: "#b45309",
  religious: "#7c3aed",
  nature: "#16a34a",
  museum: "#2563eb",
  ancient: "#b91c1c",
  monument: "#0e7490",
};

export const sites: Site[] = [
  {
    id: "promenade",
    name: "Promenade Beach",
    frenchName: "Avenue Goubert",
    category: "heritage",
    lat: 11.9335,
    lng: 79.8361,
    era: "Colonial (18th–20th c.)",
    summary:
      "A 1.5 km seafront walk where fishermen cast nets at dawn and three centuries of history line the boulevard. Walk it end to end and Pondicherry's entire story unfolds in fifteen minutes.",
    history:
      "**The sea that built the city.** The Coromandel coast is a sailor's nightmare: flat, featureless, deadly surf, no natural harbour. Ships anchored offshore and goods came to shore by small boat through breaking waves. The French never solved the harbour problem, but they gave Pondicherry a face: a seafront grand enough to make visitors forget there was no port behind it.\n\n**The monuments, north to south.** Named after Mayor Édouard Goubert, the Promenade is an accidental open-air museum. Walking south: the French War Memorial (still tended by the French Consulate today); the Jeanne d'Arc memorial park; the Dupleix statue (the man who nearly made France master of India); the Gandhi statue (the man who made Britain leave); the circular Douane, the old Customs House, built in 1827 at the height of Pondicherry's Restoration-era rebuild. Notre-Dame des Anges isn't on the Promenade but you can see its twin towers from here.\n\n**The sea wall.** The low granite parapet running along the seafront isn't just a barrier. It's the city's communal sitting place. Pondicherrians have been perching on it at dusk for centuries.",
    highlights: [
      "The Dupleix and Gandhi statues share the same boulevard: French colonial ambition and Indian independence, neither displacing the other. Stand between them.",
      "Look for the circular Douane building (1827); its round form is unlike anything else in the White Town grid.",
      "The granite parapet wall: low, simple, perpetually occupied at dusk. This is where the city comes to breathe.",
    ],
    photo: "promenade.jpg",
    visitInfo: {
      hours: "Open 24h; best at dawn (fishermen, early walkers) and dusk (the whole city comes out)",
      entry: "Free",
      tip: "Walk north to south. The shore is rocky, no swimming. Come for the walk, not the beach.",
    },
  },
  {
    id: "ashram",
    name: "Sri Aurobindo Ashram",
    frenchName: "Ashram de Sri Aurobindo",
    category: "religious",
    lat: 11.9368,
    lng: 79.8343,
    era: "Founded 1926",
    summary:
      "A political refugee who became a philosopher of human transformation. Sri Aurobindo arrived in Pondicherry in 1910 fleeing a British sedition charge. French territory meant France couldn't hand him over. He never left.",
    history:
      "**The escape.** On 4 April 1910, Sri Aurobindo Ghose stepped off the SS Dupleix, named with perfect irony after the man who'd tried to keep India French. He had slipped out of Calcutta secretly to avoid a third sedition prosecution. French Pondicherry was genuine sanctuary: the Franco-British Extradition Treaty barred extradition for political offences. Britain watched. He stayed.\n\n**The transformation.** He withdrew from politics entirely and devoted himself to Yoga and philosophy. The Ashram was formally established on 24 November 1926, when he retired into seclusion and handed management to Mirra Alfassa (The Mother), a Paris-born artist of French-Egyptian-Turkish descent who had recognised him as her spiritual guide in 1914. Under her, the Ashram became a city within the city: school, printing press, workshops, farms, and the dominant institutional presence in the White Town.\n\n**The tomb.** Sri Aurobindo died in 1950. His samadhi in the main courtyard draws hundreds of thousands of pilgrims annually. The Ashram still owns significant property throughout the White Town.",
    highlights: [
      "The ship he arrived on was named the SS Dupleix; historians have been noting the irony ever since.",
      "Stand in the main courtyard: the samadhi is covered in flowers by visitors around the clock. The silence here is genuine.",
      "Look at the buildings around you: the Ashram owns much of this street. Rue de la Marine, the most maritime artery of the French Quarter, became a spiritual address.",
    ],
    photo: "sri-aurobindo-ashram.jpg",
    visitInfo: {
      hours: "Main building: 8:00–12:00 and 14:00–18:00 (hours may vary)",
      entry: "Free; respectful dress required, silence observed",
      tip: "Remove shoes before entering the courtyard. Come mid-morning when the samadhi flowers are freshest and the crowds thinnest.",
    },
  },
  {
    id: "sacred-heart",
    name: "Sacred Heart Basilica",
    frenchName: "Basilique du Sacré-Cœur de Jésus",
    category: "religious",
    lat: 11.9262,
    lng: 79.8271,
    photo: "sacred-heart-church.jpg",
    era: "Built 1902–1907",
    summary:
      "France shipped 28 stained-glass windows from a factory in France to a tropical Indian city, not because it made practical sense, but because it was a statement. Built 1902–1907, consecrated on 17 December 1907, this basilica says: we are permanent.",
    history:
      "**The ambition.** By 1902 the French Catholic mission in Pondicherry was two centuries old and confident. The early Capuchin missionaries had built modest coral-stone chapels. Their successors built this: a full Neo-Gothic basilica, 50 metres long, 48 wide, 18 high, on 24 massive pillars (capacity 2,000). Architect Télesphore Welter reached for the most expensive, most explicitly European style available; construction was overseen by Fr. Fourcaud.\n\n**The Paris connection.** The comparison with Sacré-Cœur in Paris is not accidental. Both were built in the same generation, in the same style, as acts of French Catholic confidence after national trauma. Paris's Sacré-Cœur began in 1875 after the Franco-Prussian War. Pondicherry's answer, in a colonial city that had survived four British occupations, followed the same logic: build in stone what politics cannot undo. Above the entrance, a Latin inscription from 2 Chronicles 7:16: *My eyes and my heart will always be there.*\n\n**The glass.** The 28 stained-glass panels were manufactured in France and shipped here, depicting saints associated with the Sacred Heart devotion. In a city built from local coral stone, they are the most explicitly imported objects in any building.",
    highlights: [
      "Look up at the front façade: four evangelist statues stand on biographical lamp posts: Matthew, Mark, Luke, John, each with their symbol.",
      "Step inside mid-morning: 28 French-made stained-glass panels flood the nave with coloured light. Each one shipped from France.",
      "Find the Latin inscription above the entrance door: 2 Chronicles 7:16: 'My eyes and my heart will always be there.' The builders meant it literally.",
    ],
    visitInfo: {
      hours: "Generally open during daylight hours; check Mass schedule",
      entry: "Free",
      tip: "Visit mid-morning when sunlight streams through the stained glass from the east. Respectful dress required.",
    },
  },
  {
    id: "raj-nivas",
    name: "Lok Nivas",
    frenchName: "Palais du Gouverneur",
    category: "heritage",
    lat: 11.9389,
    lng: 79.8363,
    era: "Founded 1738 (rebuilt from 1766)",
    summary:
      "The same building. Three sovereignties. Dupleix used it to run a protectorate over half of south India. The British deliberately levelled it. France rebuilt it. India uses it now, as the Lieutenant Governor's official residence, renamed Lok Nivas.",
    history:
      "**The headquarters of ambition.** Governor Dumas laid the foundation in 1738. Dupleix finished it and made it the command centre of the most ambitious French project in India: a protectorate stretching from the Carnatic to Hyderabad. Indian princes came here to negotiate. Mughal imperial envoys were received here. Ananda Ranga Pillai, Dupleix's broker and diarist, recorded the comings and goings with intimate detail.\n\n**The deliberate destruction.** When the British captured Pondicherry in January 1761, they didn't just occupy it, they levelled it. The palace, Fort Louis, the churches, the warehouses: all systematically demolished over three months. It was policy, not damage. The goal was to ensure France would never recover a functioning base.\n\n**The comeback.** Reconstruction began from 1766. The original French Baroque structure was rebuilt in Rococo style, a single-story rectangular building with side porticoes that later grew into a double-story residence. After 1962 it was renamed Raj Nivas, then Lok Nivas, and handed to India's Lieutenant Governor: same building, same function, nearly 300 years on. Inside: ancient artefacts, porcelain, brass and silver wares, antique furniture and a grand piano.",
    highlights: [
      "The façade is best seen from Bharathi Park; step back and look at the proportions: this was built to impress Indian rulers, and it still does.",
      "You're standing near where Dupleix received Mughal imperial envoys in the 1740s. The empire he was building from here never materialised. Britain's did.",
      "The four guest suites inside are named Pondicherry, Karaikal, Mahé, and Yanam: the four territories of the former French India, reunited under one roof.",
    ],
    photo: "lok-nivas.jpg",
    visitInfo: {
      hours: "Not open to the public (active official residence)",
      entry: "Exterior and façade viewable from Bharathi Park",
      tip: "Best seen from the park side in morning light. The southern gate on Rue François Martin is the main entrance.",
    },
  },
  {
    id: "museum",
    name: "Pondicherry Museum",
    frenchName: "Musée de Pondichéry",
    tamilName: "புதுச்சேரி அரசு அருங்காட்சியகம்",
    category: "museum",
    lat: 11.9345,
    lng: 79.8349,
    era: "Established 1983",
    summary:
      "The most undervisited museum in Pondicherry. ₹10 gets you Roman pottery from Italy, Chola bronzes of world-class quality, a cot believed to have been used by Dupleix, and a vehicle that Subramania Bharathi loved. Allow 90 minutes.",
    history:
      "**Two thousand years before the French.** The Arikamedu gallery holds Roman Arretine pottery, red-glaze tableware from Arezzo, Italy, identifiable by potters' stamps pressed into the clay. Not a local imitation: direct imports. Plus amphorae, glass beads, coin hoards, physical proof that Roman merchants were trading on this coast in the first century BCE. And a rusted sword retrieved from a burial urn in Ousoudou village, fashioned like a Roman blade. 1,700 years before the French East India Company existed.\n\n**The bronzes.** Cast in *panchaloga* (five-metal alloy) using the lost-wax technique, the Chola and Pallava figures in this gallery are of international calibre. Look for the Nataraja (Dancing Shiva) and the Umamaheswara and Thiripurasundari in *tribhanga* posture, from Sorakkudi. These were treasure troves found in the region; they ended up here.\n\n**The French galleries.** Two rooms recreate the interiors of a White Town house (Drawing Chamber, Dining Room, Bedchamber) with Franco-Tamil hybrid furniture: French frames, Tamil carvings, local teak. In the bedchamber: a cot believed to have been used by Dupleix himself. In the first gallery: a replica of his chair, a hand-operated Gutenberg printing press from the Imprimerie du Gouvernement, and an issue of *Vijaya*, the first Tamil daily, edited by the poet Subramania Bharathi during his Pondicherry years.\n\n**The courtyard.** A bullock-drawn coach from the descendants of Dewan Kanakaraya Mudaliar, the man who helped the French establish their settlement in 1674. And a *pousse-pousse*: a unique vehicle with mechanical steering operated by the passenger, pushed from behind and pulled by rope in front. Bharathi apparently loved it.",
    highlights: [
      "In the Arikamedu gallery: find the Arretine pottery with the potters' stamps. Those marks were pressed into clay in Arezzo, Italy, 2,000 years ago.",
      "In the bedchamber: the cot believed to be Dupleix's. The man who ran half of India slept here, or so the story goes.",
      "In the courtyard: find the pousse-pousse. A vehicle pushed from behind and steered by the passenger. Subramania Bharathi, the Tamil poet and freedom fighter, was a fan.",
    ],
    photo: "pondy-museum-2.jpg",
    visitInfo: {
      hours: "10:00–18:00, closed Mondays",
      entry: "₹10 (Indian adults), ₹5 (children over 5)",
      tip: "Photography not permitted inside. The bronze gallery rewards slow looking; give it at least 30 minutes. Best ₹10 in Pondicherry.",
    },
  },
  {
    id: "bharathi-park",
    name: "Bharathi Park",
    frenchName: "Place du Gouvernement",
    category: "nature",
    lat: 11.9331,
    lng: 79.8342,
    era: "Colonial era (redesignated post-1962)",
    summary:
      "The ceremonial heart of French Pondicherry, and its oldest public garden. Eight acres of shaded lawns, Greco-Roman columns, and a poet's bronze likeness looking out over the same square where colonial governors once received Mughal envoys. Come for the morning walk; stay for everything else.",
    history:
      "**Before the French, before the British.** The oldest story in Bharathi Park has nothing to do with Europeans. A courtesan named Aayi demolished her own house and used the land and her savings to build a water tank for the city, centuries before any flag arrived. The French colonial administration, under Napoleon III in the 1850s, built a Greco-Roman pavilion at the centre of their principal public square to commemorate her. Four white columns. A domed roof. A Tamil legend preserved in European stone. They named it the Aayi Mandapam, and it still stands at the park's centre today, one of the most photographed structures in Pondicherry.\n\n**Napoleon's garden.** The French laid out this green space as the ceremonial core of their colonial capital, the open square between the Governor's palace, the Legislative Assembly, and the administrative buildings. They called it Place du Gouvernement, though locals knew it informally as Napoleon Park. When Dupleix received Indian princes and Mughal envoys at the palace to the north, this square was the formal approach. Raj Nivas, the Legislative Assembly, the Secretariat, the Puducherry Museum: all of them face this park. Three centuries of power, arranged around a garden.\n\n**The poet takes the square.** After 1962, the Place du Gouvernement became Bharathi Park, renamed for Subramania Bharathi, the Tamil poet, journalist, and freedom fighter who lived in Pondicherry from 1908 to 1919. He used French territory as a legal sanctuary from British arrest, writing some of his most celebrated verse in exile on these streets, the same legal loophole that sheltered Sri Aurobindo. A bronze statue of Bharathi now stands at the park entrance: not a soldier, not a governor, but a poet. The square that once symbolised French authority now carries the name of the man who helped dismantle it.\n\n**The park today.** Eight acres of manicured lawns, wide sandy walkways under a canopy of mango, tamarind, and banyan trees, colonial-style benches, and flowerbeds that shift colour with the seasons. Small water features draw birds into the shrubbery: sparrows, doves, and if you arrive early enough, a kingfisher or a sunbird in the flowering shrubs. Butterflies move between the blooms. Families on Sunday mornings, joggers before the heat builds, retirees reading newspapers on shaded benches: this is what a city park is supposed to feel like. Cultural events run here through the year, music concerts, poetry readings, seasonal flower shows. And every evening, the musical fountain runs with synchronised lights and sound. Free. Open to anyone. The best show in White Town.",
    highlights: [
      "The Aayi Mandapam at the park's centre: four classical columns, a domed roof, a Tamil legend in European stone. Built under Napoleon III to honour a woman who lived here centuries before him. Read the story on the plaque slowly.",
      "Look north to Raj Nivas (formerly Lok Nivas): the building Dupleix governed from in the 1740s still faces this park. Three sovereignties; same view.",
      "Evening: the musical fountain runs with synchronised music and dancing lights. Free, open to everyone, the best show in White Town.",
      "Morning: arrive before 8am and you share the walkways with local joggers, yoga groups, and elderly residents reading the newspaper under the palms. The park before the heat is a different place.",
      "The park sits at the centre of Pondicherry's administrative and cultural core. The Puducherry Museum is a 2-minute walk to the east; Rock Beach is 5 minutes on foot to the north. Four landmark buildings visible from one bench.",
    ],
    photo: "bharathi-park1.jpg",
    visitInfo: {
      hours: "Open daily 6:00 AM to 8:00 PM; musical fountain runs in the evenings",
      entry: "Free",
      tip: "Two visits are better than one: mornings for the cool air, birdsong, and local life under the palms; evenings for the fountain and the golden light on the colonial facades. November to February is the sweet spot, lower humidity and manageable heat. The park covers 8 acres, larger than it looks from the entrance.",
    },
  },
  {
    id: "notre-dame",
    name: "Notre-Dame des Anges",
    frenchName: "Notre-Dame des Anges",
    category: "religious",
    lat: 11.9299,
    lng: 79.8345,
    era: "Founded 1687 (current building 1851–55)",
    photo: "notre-dame-des-anges.jpg",
    labelPosition: "left",
    summary:
      "On this seafront site since 1687: four churches, same spot. The twin cream towers are the first French colonial building most visitors see arriving from Chennai. The only church in Pondicherry where Mass is said in French, English, and Tamil.",
    history:
      "**Four churches, one site.** The Capuchins built the first chapel here in 1707, a year after François Martin's death. A second was built 1739–1758 under Governors Dumas and Dupleix, then razed by the British in 1761. A third went up 1765–1770; its square bell-tower and nave were absorbed into the current building. The fourth and present church was built 1851–1855 by engineer Louis Guerre (1800–1865), whose family had lived in Pondicherry since the 18th century. Tamil residents still call the site Capus Koil ('Capuchin Church' in Tamil phonetics), honouring the order that started it all in 1674.\n\n**The engineer.** Louis Guerre also built the lighthouse and many of the finest residences in the neighbourhood. The church sits atop a substructure, reached by two symmetric staircases of a dozen steps each, and measures 55 by 35 metres. Its dome (polygonal, above the crossing) diffuses soft light through eight latticed windows in blue, yellow, and red over the high altar. That altar, white marble with grey veins, was gifted by François Gaudart; it carries a low-relief of the Last Supper in wrought brass.\n\n**Joan of Arc.** Between the church and the sea lies a small garden. At its centre: a marble Joan of Arc, armoured, carrying a battle standard, installed in April 1923, donated by François Gaudart, politician and industrialist. Joan expelled the English from France; the English had razed this church in 1761. Under Governor Charles Baron during the Second World War, the annual feast became a Gaullist commemoration: Free France rallying around a medieval French warrior-saint, in a colonial church, on the Bay of Bengal.",
    highlights: [
      "On the facade: two Latin inscriptions. Above the door: DOMUS DEI (House of God). On the entablature: D.O.M. SUB INVOCATIONE DOMINAE ANGELORUM (Under the protection of Our Lady of Angels). Count the 24 niches on the towers: 12 apostles alternating with 12 urns.",
      "Inside, in front of the altar: a grave marker for Governor de Calan, who died in 1850 having just planned this very church. He never saw it built.",
      "The Joan of Arc garden between the church and the sea: best visited at dawn, when the light comes in from the east directly onto the statue's face; the church was aligned that way deliberately.",
    ],
    visitInfo: {
      hours: "Open daily for services and visitors; early morning best",
      entry: "Free",
      tip: "Sunday Mass is celebrated in French, English, and Tamil, the only church in Pondicherry to do so. Start your White Town walk here and head south along the Promenade.",
    },
  },
  {
    id: "botanical-garden",
    name: "Botanical Garden",
    frenchName: "Jardin botanique de Pondichéry",
    category: "nature",
    lat: 11.9302,
    lng: 79.8224,
    photo: "botanical-garden.jpg",
    era: "Established 1826",
    summary:
      "1,500 plant varieties across 30 sections, including fossil plants and giant trees that have been growing since 1826. Twenty-two acres of shade, a toy train, singing fountains, and a fossil park. The most underrated family stop in Pondicherry.",
    history:
      "**Why 1826?** France had just recovered Pondicherry definitively after the Napoleonic Wars. The Restoration governors were rebuilding the city's institutions: the French College (1826), the lighthouse (1835), the Law School (1838). The botanical garden was part of the same programme, a scientific investment that said: we're staying. By 1829, just three years in, 800 to 900 species were already growing here.\n\n**The scientist.** In 1838, the eminent French botanist S.G. Perottet arrived and added numerous new and rare species, turning the garden into a living herbarium. He connected Pondicherry to the networks of the Muséum national d'Histoire naturelle in Paris. After 1954, the Ministry of Agriculture took over maintenance and the garden has remained open every day since.\n\n**The jewels.** Giant trees planted in the 19th century form the canopy that makes this garden what it is. Fossil plants, ancient species that predate the colonial garden by millions of years, are among the most unusual things you'll see. The annual Fête des Fleurs (flower festival) draws nature lovers from across the region. Come in winter (November to February) for the best conditions.",
    highlights: [
      "The fossil park: plants that existed before humans did, in a garden planted by French colonial scientists. The juxtaposition is quietly extraordinary.",
      "Sit under one of the 19th-century giants and listen. The canopy birds and insects do the rest. No information panel needed.",
      "Evening: the musical fountain performs with coloured jets in different shapes and patterns, timed to music. The lotus fountain nearby is the quieter alternative.",
    ],
    visitInfo: {
      hours: "10:00–17:00 daily (including weekends)",
      entry: "₹20 (adults), ₹10 (children)",
      tip: "Best November to February when the heat is manageable. Combine with the Pudhuvai Museum next door. Allow at least an hour; families with children will want two.",
    },
  },
  {
    id: "arikamedu",
    name: "Arikamedu: Roman Trading Site",
    tamilName: "அரிகமேடு",
    category: "ancient",
    lat: 11.9012,
    lng: 79.8201,
    era: "2nd century BCE – 8th century CE",
    summary:
      "An engraved emblem of Emperor Augustus was found here. Roman wine jars. Pottery imported directly from Arezzo, Italy. This unmanaged site 4 km south of the French Quarter is proof that Pondicherry was a global trading hub 2,000 years before the French arrived.",
    history:
      "**The Romans were here.** The Arretine pottery found at Arikamedu is not a local imitation; it was manufactured in Arezzo, central Italy, and shipped here, identifiable by potters' stamps pressed into the base. Roman amphorae for wine and olive oil. Mediterranean glass. An engraved emblem of Emperor Augustus. A wooden toy boat. These arrived in the first century BCE, within decades of Rome opening the direct Red Sea route to India.\n\n**What they were trading.** The northern sector shows evidence of mass feeding of sailors and traders. To the south: dyeing vats where muslin was dyed for export. Indo-Pacific beads were crafted here locally and shipped west. Pepper and spices came through from further south. A rare Brahma statue was found, unusual in South India of this period. The Sangam Tamil poems confirm it: yavanas (Romans) arriving with wine, leaving with pepper and fine cloth.\n\n**The excavators.** Sir Mortimer Wheeler came in 1945 and thought he'd found a Greek trading post lasting ~200 years. Later work by Vimala Begley (1989–1992) revised this: continuous occupation from the 2nd century BCE to the 8th century CE, a span of over 600 years. The French team under Jean-Marie Casal (1947–1950) excavated on what was still French colonial soil, some finds going to the Musée Guimet in Paris. In 2004, Italy and Pondicherry jointly proposed the site for UNESCO World Heritage status under Silk Road Sites in India.",
    highlights: [
      "The site itself has no panels or infrastructure; visit the Pondicherry Museum first to see the finds, including the Arretine pottery with its Italian potters' stamps.",
      "Look for the low mound near the Ariyankuppam River estuary and the remains of the 45-metre brick storehouse. This was a working port for 600 years.",
      "The site may be the 'Poduke' described as an emporium in both the Periplus of the Erythraean Sea and Ptolemy's writings, possibly derived from Tamil 'Potikai', meaning 'meeting place'.",
    ],
    visitInfo: {
      hours: "Accessible at all times (ASI-protected, unmanaged)",
      entry: "Free",
      tip: "4 km south on the coast road toward Ariyankuppam. No signage or facilities on site. Visit the Pondicherry Museum first: the Arikamedu gallery there is the real experience. Then come here for the ground.",
    },
  },
  {
    id: "white-town-streets",
    name: "White Town (Ville Blanche)",
    frenchName: "Ville Blanche",
    category: "heritage",
    lat: 11.9350,
    lng: 79.8338,
    era: "17th–20th century",
    summary:
      "A grid of ochre-yellow coral-stone mansions, bougainvillea walls, and streets named Rue Dupleix, Rue Suffren, Rue Bussy. The best-preserved French colonial streetscape in the world, built on a Dutch plan, filled with French names, in a city that is now part of India.",
    history: `**Step into the oldest street in French India.**\n\nWalk north on Rue de la Marine, the street named not for a person but for the sea itself, the institution without which Pondicherry could not have survived. It is early morning. The air is cool from the Bay of Bengal, heavy with jasmine and the faint salt of last night's tide. Yellow walls rise on both sides of you, their plaster smooth and warm in the new light. Bougainvillea falls in purple cascades over coral-stone balconies. Somewhere down the block, someone is unlocking shuttered windows. Green wooden shutters, eight feet tall, painted the colour of old bottle glass. They creak open. The morning sounds arrive: a bicycle bell, a temple bell, a distant call to prayer.\n\nYou have just stepped into the best-preserved French colonial streetscape anywhere on earth. But the deeper truth is that you have stepped into something far stranger. The grid you are walking was not designed by the French. The buildings are not from Dupleix's time; they were rebuilt after the British destroyed the city in 1761. The street you are on was walked by a Tamil broker who wrote in Tamil, and whose diary is the finest portrait of the French colonial world we have. Nothing about the White Town is simple. Everything about it is astonishing.\n\n**Before the French, before everyone**\n\nThis coast was ancient before any European arrived. The Romans came first, or close enough. Three kilometres south of where you are standing, the Ariyankuppam river meets the Bay of Bengal at a site called Arikamedu, and in the mud of that ancient port, archaeologists found Arretine pottery: red-glaze tableware made in Arezzo, Italy, stamped with the potters' marks of men who were alive when Augustus was emperor. Not local imitations. Originals. Shipped from Italy to this precise coast, roughly two thousand years ago. The Tamil Sangam poets wrote of yavanas, Romans, arriving with ships full of wine and departing with pepper and fine cloth. Pondicherry was a world city before it was a French one.\n\nThe Pallavas held this coast, then the Cholas, then the Pandyas, then Vijayanagar, then the Sultanate of Bijapur. The local Tamil name meant simply "new town," Puducherry: a place that had already reinvented itself many times before the Europeans arrived. When a young French merchant named François Martin first looked upon this flat coastal strip in 1674, what he saw was a fishing village on a dune ridge, backed by a lagoon and a canal, stretching toward the interior. He saw something else too. He saw that it could be held.\n\n**The six men who built a city**\n\nThe scene is almost impossible to believe. It is September 1674. San Thomé, the stronghold north of Madras that France had briefly held, has just surrendered to the Dutch. The French admiral has sailed away. Martin's superior has been recalled. Martin is left at Pondicherry with six men. Six men and a fishing village on the most treacherous, surf-beaten, harbourless shore in the Indian Ocean.\n\nHis patron, the local governor Chirkhan Loudy, advises him to leave. Everyone advises him to leave. Martin stays. His reasoning, recorded in his Mémoires, is precise and almost beautiful in its clarity: if France abandons this site, they will never be permitted to return, and the Dutch will immediately occupy it. So he stays. He writes letters. He negotiates. He cultivates Chirkhan with the patience of a man who understands that what he is building will take decades, not months. The Dutch send six warships in 1678. Martin, with thirty-three men of whom two are invalids, prepares the defences and waits. The Dutch commander hesitates. Weeks pass. The Peace of Nijmegen arrives from Europe like a reprieve. The Dutch sail away.\n\nThis is the true founding moment of the White Town. Not a declaration, not a ceremony, but a man who refused to leave.\n\nMartin spent the next three decades building. Streets, a fort, a canal, a textile industry. He died here on 30 December 1706 and was buried in Fort Saint-Louis. He never returned to France. He had left Paris in 1665 at the age of thirty, and this city was his only home for forty years. A street bears his name: Rue François Martin. Walk it one morning and think of the man who held this place with six soldiers while an admiral sailed away.\n\n**The city that talked to Versailles**\n\nUnder Martin's successors, Pondicherry grew quietly. But it was Joseph François Dupleix, arriving as Governor-General on 15 January 1742 to twenty-one cannon salutes, who turned this modest colonial capital into something that the court of Versailles could not ignore.\n\nDupleix had a theory. He had spent years at Chandernagor in Bengal, watching the Mughal Empire dissolve into succession crises, watching Indian princes fight each other with armies that could be tipped by a few hundred European-trained soldiers. He understood what his superiors in Paris consistently refused to accept: that military presence was the precondition for commercial dominance, not a costly distraction from it. Back the right Indian prince with French troops, and you collect not just trading rights but territory, revenue, and sovereignty.\n\nHe began to practise it. By December 1749, the new Nizam of Hyderabad, Muzaffar Jang, came to Pondicherry in person, to the Government Palace on the edge of Bharathi Park, to acknowledge his French protector. Indian princes came to these streets to negotiate. Mughal imperial envoys were received in this city. The Mughal Emperor's formal grant made Dupleix Nawab and Governor of all of southern India from the Krishna River to Cape Comorin. Pondicherry was, on paper, the capital of the Deccan.\n\nAn anonymous witness wrote in 1746: "Everyday, when he leaves home, he is preceded by two flags and an escort of a dozen mounted guards. When he marches in ceremony, he is preceded by more than a hundred troopers and three elephants, upon which his flags are carried, and his coach is followed by a crowd of horsemen and jesters." This was not vanity. It was calculated policy. To be recognised by Indian rulers as a sovereign actor, you had to look like one. Dupleix looked like one. And Pondicherry, for a brief and glittering decade, was the jewel of it: talked about in Versailles, feared in Madras, astonishing to every traveller who arrived by small boat through the Coromandel surf.\n\nThe Governor of Madras, Saunders, wrote to the British East India Company in February 1751: "The French are striving to establish themselves in the most convenient places on the coast and are laying the foundations of an advantageous trade without the slightest regard for the interests of their neighbours." Robert Clive, a former bookkeeper turned military commander, dismantled the French position in the Carnatic piece by piece. Paris chose dividends over empire. In October 1754, Dupleix departed Pondicherry aboard the Duc d'Orléans. He was never coming back. He spent his last nine years in Paris fighting the Compagnie for compensation and died broke in 1763, the case still open. The bronze statue on Goubert Avenue shows him as he was in his prime: facing the sea, toward the ships that brought his rise and carried him home in disgrace. He stands in Indian soil. The empire he almost built became someone else's. His statue is still here.\n\n**The man who watched it all and wrote it down**\n\nTo understand Pondicherry in Dupleix's time, you need one book: the Private Diary of Ananda Ranga Pillai, twelve volumes in Tamil, written by the man who was closer to Dupleix than any other person alive.\n\nPillai was the dubash, the chief broker and interpreter of the French establishment. The word combines Tamil roots for "two languages," but the role was far more than translation: he managed the Indian-side of all commercial operations, extended credit, negotiated with local officials, and served as the social intelligence service of the entire colony. His diary records everything. The Governor's moods. The movements of French officers. The gossip of the bazaar. The private conversations with Dupleix himself, reported at length with a candour that no official document could match. When Dupleix speaks bitterly of his rival La Bourdonnais, Pillai records it in direct speech: "He is an utterly petty-minded man, and one entirely regardless of the blow which the honour of the French has sustained."\n\nBut Pillai also wrote one of the most beautiful passages in the history of French India, comparing the three governors he had served to gardeners: "Monsieur Lenoir worked like a gardener. He enriched the earth, ploughed, fertilised and prepared his crops. He planted trees which blossomed and whose fruit he enjoyed during his time. Monsieur Dumas simply devoured the produce. In Monsieur Dupleix's time, a tempest devoured the garden."\n\nHis house still stands in the White Town. Tamil floor plan around inner courtyards, fine woodcarving from Tamil craftsmen, French colonial proportions on the upper storey. Walk past it and understand that this is what the White Town actually was: not French, not Tamil, but something that had never existed anywhere else on earth.\n\n**The year everything was destroyed**\n\n16 January 1761. The British enter Pondicherry. They do not occupy it. They level it.\n\nThis is the fact that rewrites everything you think you know about the White Town. The buildings you are admiring today are not Dupleix's buildings. They are not even the buildings that François Martin built. The British spent three months systematically demolishing the entire city, down to the foundations. The palace, Fort Louis, the churches, the warehouses: all gone. It was not damage; it was policy. The goal was to ensure France could never recover a functioning base on the Coromandel Coast.\n\nGovernor Law de Lauriston arrived in 1765 to find rubble where a city had been. He reportedly rebuilt 200 European and 2,000 Tamil houses within five months, following the old street pattern, because the streets themselves were the city's memory. The grid survived. The walls did not. And here is the deeper irony: even that celebrated grid was not French. Jean Deloche's meticulous analysis of 279 colonial-era plans established that the orthogonal chessboard layout of the White Town was designed during the Dutch occupation of 1693 to 1699. The French recovered the city in 1699 and simply followed the plan. The names on the streets are French. The grid beneath them is Dutch.\n\nThe ochre-yellow coral-stone mansions you walk past today, their shuttered facades painted mustard and cream and pale gold, largely date from the peaceful century after 1816. They are Restoration-era buildings on a Dutch grid, in a city that remembers everyone who ever came here.\n\n**The philosopher and the poet**\n\nThe French colonial city had one extraordinary quality: it was the only territory on this coast that the British could not touch. In the early twentieth century, two great Indians chose it for that reason.\n\nThe Tamil poet Subramania Bharati arrived in 1908, fleeing British prosecution for his revolutionary journalism. He wrote his most celebrated poems in these streets, sustained by the strange safety of foreign soil.\n\nThen came Sri Aurobindo. On 4 April 1910, the philosopher and former revolutionary nationalist stepped off a ship in Pondicherry harbour. The ship was called the SS Dupleix: history's small, precise joke. He had slipped out of Calcutta in secret to escape a third sedition prosecution. French territory meant France could not hand him over. Britain watched. He stayed. He never left. He withdrew into silence, yoga, and philosophy. The Ashram he established in 1926 became a city within the city. The flowers on the samadhi in the main courtyard are replaced around the clock by pilgrims who come from across India. Stand there one morning. The silence is genuine.\n\n**The streets that survived everything**\n\nWhen Pondicherry passed to India on 16 August 1962, a remarkable thing happened: nothing happened to the street signs.\n\nRue Dupleix survived. Rue Bussy survived. Rue Lally-Tollendal survived, named for the French commander who surrendered this city in 1761, was tried for treason in Paris, and was beheaded. His street sits alongside those of his colleagues; the White Town's memory is complete, not selective. The signs are bilingual today: French name above, Tamil transliteration below, on every corner. Pondicherry is the only city in India where French colonial street names survived decolonisation intact.\n\n**How to walk it**\n\nYou have about two hours before the heat builds and the streets fill with traffic. Start at Notre-Dame des Anges on the seafront and walk south along Rue Dumas. Look at the facades: coral stone, lime plaster, shuttered windows painted in green and blue and white. The stone is local, quarried from underwater coral reefs; the craftsmanship is Tamil; the proportions are French. Nothing is purely one thing. Turn west on Rue Dupleix. The Romain Rolland Library, founded in 1827, holds 400,000 volumes and the memory of a city that read in three languages. Bharathi Park occupies the space where Mughal envoys once approached the Governor's Palace. The Aayi Mandapam at its centre, four classical columns under a dome, honours a Tamil courtesan named Aayi who demolished her own house to build a water tank for the city, and whom Napoleon III thought worthy of a permanent Greco-Roman monument. European columns, Indian story.\n\nCome back at dusk. The low granite parapet along the seafront will be full of people: the whole city comes to breathe here at the end of the day. The light goes gold on the ochre walls. The Bay of Bengal darkens. A priest at Notre-Dame des Anges locks the side gate. Someone is playing music in a courtyard behind you. Two elderly women are sharing the steps of the Dupleix statue's base, not looking at the bronze at all, just watching the sea.\n\nThis city has been watching the sea since the Romans brought wine from Italy and left with pepper and fine cloth. It will still be watching long after you have gone.`,
    highlights: [
      "Walk Rue de la Marine first: the street closest to the sea, named not for a person but for the institution without which Pondicherry could not have survived. The Sri Aurobindo Ashram's main building faces it today.",
      "Ananda Ranga Pillai's house: Tamil courtyard plan, French colonial facade. The finest example of cross-cultural domestic architecture in the city, and the home of the man whose diary is the most intimate record of Dupleix's Pondicherry.",
      "Look at the street signs: bilingual French and Tamil, side by side. Pondicherry is the only city in India where French colonial street names survived decolonisation intact.",
    ],
    photo: "white-town.jpg",
    visitInfo: {
      hours: "Open streets; best explored 7:00–10:00 before traffic",
      entry: "Free",
      tip: "The entire quarter is walkable in 2–3 hours. Start at Notre-Dame des Anges and walk south along Rue Dumas, then cut west on Rue Dupleix. Pick up a heritage map from the tourist office or the Institut Français.",
    },
  },
  {
    id: "french-consulate",
    name: "French Consulate",
    frenchName: "Consulat de France à Pondichéry",
    category: "heritage",
    lat: 11.9364,
    lng: 79.8360,
    era: "Post-1962 (institutional continuity since 1674)",
    summary:
      "You are looking at the French Consulate, one of the rarest buildings in the world: a colonial power's active diplomatic mission in its former territory. France has been here since 1674. It never entirely left.",
    history:
      "When Pondicherry became part of India in 1962, approximately 7,000 residents chose to retain French nationality: civil servants, former military personnel, Hindu families, Catholic families, and Créole families who had lived under French law for generations. Their descendants form a Franco-Pondicherrian diaspora of around 50,000 people today, living in movement between France and Pondicherry.\n\nThe Consulate serves this community. Its most visible public duty is the French War Memorial on the Promenade, which it maintains and for which it holds the annual Armistice Day ceremony on 11 November, attended by the French Consul General and Pondicherry's political leadership. On 14 July, Bastille Day, celebrations are held at the Consulate: the French national holiday observed, as it has been for generations, on the Coromandel Coast.\n\nThe Treaty of Cession that transferred Pondicherry to India contained Article XXVIII, guaranteeing French as an official language of the territory. The Gazette de l'État de Poudouchéry, the official journal of the Union Territory government, retains its French title to this day. Pondicherry celebrates Liberation Day on 16 August, the date of the de jure transfer in 1962, not on 15 August with the rest of India. The Consulate also has a branch in Chennai covering the wider region. Visa services are handled through a third-party service provider rather than at the Consulate directly.",
    highlights: [
      "One of the few French diplomatic missions in a former French territory anywhere in the world",
      "Serves the Franco-Pondicherrian diaspora of around 50,000 people",
      "Maintains the War Memorial on Goubert Avenue and holds Armistice Day each 11 November",
      "Bastille Day (14 July) celebrations are held here every year",
      "Treaty of Cession (1962): French guaranteed as official language of the territory",
      "Pondicherry celebrates Liberation Day on 16 August, not 15 August with the rest of India",
    ],
    photo: "french-consulate.jpg",
    photoPosition: "bottom",
    visitInfo: {
      entry: "Open to French nationals and registered visitors only. Visa services are handled by a third-party provider, not at the Consulate directly. A branch office is in Chennai.",
      tip: "Visit the War Memorial on 11 November for the Armistice ceremony. If you are in Pondicherry on 14 July, Bastille Day celebrations are held at the Consulate. The current Consul General is Etienne Rolland-Piegue.",
    },
  },
  {
    id: "war-memorial",
    name: "French War Memorial",
    frenchName: "Monument aux Combattants",
    category: "monument",
    lat: 11.9319,
    lng: 79.8353,
    era: "Unveiled 1938",
    summary:
      "You are standing in front of the Monument aux Combattants, the French War Memorial on Goubert Avenue. It commemorates the Pondicherrians who died fighting for France in two World Wars. The names carved on it include soldiers from Reddiarpalayam, from the Tamil Catholic community, from families that had been French for generations. Maintained by the French Consulate, it is one of the most visible signs that the relationship between France and Pondicherry did not end in 1962.",
    history:
      "French India contributed soldiers to both World Wars on a scale that is rarely appreciated. During the First World War, thousands of men from the five French comptoirs served on the Western Front, in the Middle East, and at the Dardanelles. During the Second World War, French India rallied to de Gaulle's Free France in July 1940, under Governor Charles Baron, one of the first colonial territories in the world to do so. Pondicherrian soldiers went on to serve in North Africa, Italy, and France itself.\n\nThe memorial stands at the northern end of Goubert Avenue. Unveiled in 1938, it is maintained by the French Consulate, whose continued presence in Pondicherry is itself one of the most unusual legacies of the colonial period. Every 11 November, Armistice Day, a ceremony is held here: the French Consul General, Pondicherry's Lieutenant Governor, and veterans or their descendants gather at the monument. It is one of the few places in India where a French military commemoration is still officially observed.\n\nThe names on the memorial tell a story that formal histories often skip: Tamil soldiers, born subjects of France, who crossed the world to fight in European wars. Captain François Marius Xavier of Reddiarpalayam is among them. Victor Simonnel, who has a street in the White Town, is among them. The memorial is their permanent address in the city.",
    highlights: [
      "Unveiled 1938, maintained today by the French Consulate",
      "Commemorates WWI and WWII service, including Free France volunteers from 1940",
      "French India was among the first colonial territories to rally to de Gaulle in July 1940",
      "Annual Armistice Day ceremony on 11 November, attended by French Consul General and Pondicherry's Lieutenant Governor",
      "Names include Captain François Marius Xavier of Reddiarpalayam and Victor Simonnel, both with streets in the White Town",
    ],
    photo: "war-memorial.jpg",
    visitInfo: {
      hours: "Open 24h (outdoor monument)",
      entry: "Free",
      tip: "Come on 11 November for the Armistice ceremony. Read the names on the memorial: they are the human record of what it meant to be French and Indian at the same time.",
    },
  },
  {
    id: "customs-building",
    name: "Customs Building",
    frenchName: "La Douane",
    category: "monument",
    lat: 11.9323,
    lng: 79.8358,
    era: "Built 19th c., remodelled c.1940",
    photo: "customs-building.jpg",
    summary:
      "A circular colonial building on Goubert Avenue that has stood at the edge of Pondicherry's seafront since the nineteenth century, overseeing the goods that passed between ship and shore. Built to manage maritime trade, remodelled in the 1940s with Art Deco detailing, it now flies the Indian national flag — one of the most photographed buildings on the Promenade.",
    history:
      "**The problem of the harbour.** Pondicherry never had a natural harbour. Ships anchored offshore and goods came to land by small boat through the Coromandel surf: a slow, expensive, dangerous process that defined the economics of the entire colony. Managing what arrived, assessing it, taxing it, logging it, was the business of the Douane, the French Customs house, built on Goubert Avenue at the point where the seafront met the commercial life of the White Town.\n\n**The building.** The original structure dates from the nineteenth century, built in the classical colonial style that characterised Pondicherry's Restoration-era public buildings: high columns, large windows, thick walls against the tropical heat. Its circular or rounded form set it apart from the rectangular blocks around it, giving it an immediate visual authority on the seafront. In around 1940, the building was remodelled, its upper register acquiring the geometric detailing and streamlined ornament of Art Deco, a style that was already reaching its late phase in France but was still arriving in the colonial world. The two vocabularies sit together without contradiction: classical proportions below, Art Deco refinement above.\n\n**What it handled.** Everything that came off a ship and into Pondicherry passed through the administrative jurisdiction of this building: textiles, spices, wine, machinery, personal effects, correspondence. And everything that left, too. The tax revenue collected here funded a significant portion of the colonial administration. The building was not merely decorative. It was the commercial nervous system of the entire comptoir, sitting between the port and the city.\n\n**After 1962.** When Pondicherry passed to India, the building continued in official use. Today it operates under the Indian government, the national flag flying from its facade, its function in customs and port administration continuing in a modified form. The commerce it oversees has changed; the building has not. It remains on the Promenade exactly where the French placed it, one of the few colonial public buildings on Goubert Avenue still in active official use, and one of the most photographed stops on the seafront walk.",
    highlights: [
      "The circular form is unlike almost anything else in the White Town grid. Stand back on Goubert Avenue and look at the proportions: this was designed to be seen from the sea, before you reached the shore.",
      "Two architectural moments in one building: nineteenth-century colonial classicism in the structure, 1940s Art Deco in the upper detailing. The remodelling happened just two years before the Japanese occupation of French Indochina changed the colonial world forever.",
      "Still in official use. The Indian flag over a French colonial customs house on a seafront where the British once anchored offshore. Three sovereignties, one building, still open.",
    ],
    visitInfo: {
      hours: "Exterior visible from Goubert Avenue at all times (active government building, interior not public)",
      entry: "Free to view from outside",
      tip: "Best photographed in the morning with the light coming from the east. Walk the Promenade from here south toward Notre-Dame des Anges for the full colonial seafront sequence.",
    },
  },
  {
    id: "dupleix-statue",
    name: "Dupleix Statue",
    frenchName: "Statue de Dupleix",
    category: "monument",
    lat: 11.9257,
    lng: 79.8343,
    era: "Colonial era",
    summary:
      "He won half of India for France, then his own company fired him. Standing on the seafront of what is now an Indian Union Territory, this bronze Dupleix stands adjacent to the sea: a man whose empire never was, still commemorated in the country that outlasted him.",
    history:
      "**The ambition.** From 1742 to 1754, Dupleix ran French India on a radical idea: don't just trade, back Indian princes with French troops and pocket the territory. At his peak, he held Mughal imperial authority over all of south India from the Krishna River to Cape Comorin. Pondicherry was, on paper, the capital of the Deccan.\n\n**The betrayal.** His own bosses in Paris didn't want an empire; they wanted dividends. In 1754 the Compagnie des Indes recalled him and sent a replacement to negotiate peace with the British. Twelve years of work unravelled within months of his departure.\n\n**The ruin.** He spent his last nine years in Paris fighting for compensation, money he'd spent from his own pocket in France's service. The company stonewalled him. He died on 13 November 1763, broke, the case still open. The final settlement of his estate wasn't closed until 1789.",
    highlights: [
      "He stands adjacent to the sea, toward the ships that brought his rise and carried him home in disgrace",
      "He stands in Indian soil. The empire he almost built became someone else's, and his statue is still here.",
      "Turn around: Rue Dupleix runs west from this spot, the only figure in Pondicherry honoured both in bronze on the seafront and in the daily street grid.",
    ],
    photo: "dupleix-statue.jpg",
    photoPosition: "top",
    visitInfo: {
      hours: "Open 24h (outdoor statue, Goubert Avenue)",
      entry: "Free",
      tip: "Best light is early morning with the sun behind you from the sea side. Walk 50m south and you'll hit the Gandhi statue: two men from different centuries who each changed India's fate, sharing the same boulevard.",
    },
  },
  {
    id: "gandhi-statue",
    name: "Gandhi Statue",
    category: "monument",
    lat: 11.9325,
    lng: 79.8360,
    era: "Unveiled 26 January 1965",
    summary:
      "You are looking at the Gandhi statue on Goubert Avenue, unveiled on Republic Day, 26 January 1965, and standing on eight granite pillars that are more than 300 years old. The pillars were brought from Gingee Fort in Tamil Nadu during the French colonial era. The square around it is called Gandhi Thidal. Local legend says a tunnel runs beneath the statue all the way back to Gingee Fort. It has never been opened.",
    history:
      "The bronze statue, 13 feet tall, was sculpted by Debiprasad Roy Choudhury of the Madras School of Art and unveiled on Republic Day, 26 January 1965, three years after the de jure transfer of Pondicherry to India. It stands on Goubert Avenue facing the Old Port Pier, in what is now called Gandhi Thidal, the open square that serves as Pondicherry's main venue for cultural events and national celebrations.\n\nThe eight monolithic granite pillars surrounding the statue are older than the city itself in its French form. Brought from Gingee Fort in Tamil Nadu during the French colonial era, they predate the statue by more than three centuries. Gingee Fort was one of the great fortresses of South India, held at different times by the Marathas, the Mughals, the French, and the British. The French brought these pillars to Pondicherry; they ended up as the base of a monument to the man who ended French India.\n\nThe statue stands metres from the Dupleix statue to the north, and close to the Nehru statue. The juxtaposition is unplanned but eloquent: Dupleix tried to prevent British dominance over India through French military power. Gandhi dismantled British power through non-violent resistance. Nehru built the independent state that followed. Three men, three centuries, the same seafront.\n\nLocal legend adds one detail that no guide can verify: a tunnel beneath the statue, said to run all the way back to Gingee Fort. It remains closed off.",
    highlights: [
      "Bronze statue, 13 feet tall, sculpted by Debiprasad Roy Choudhury of the Madras School of Art. Unveiled Republic Day, 26 January 1965.",
      "The eight granite pillars are over 300 years old, brought from Gingee Fort during the French colonial era. The fort that France once held now frames the statue of the man who ended French India.",
      "The square is called Gandhi Thidal: Pondicherry's main space for cultural events and national celebrations.",
      "Faces the Old Port Pier, where ships once anchored offshore and goods came in by small boat through the surf.",
      "Local legend: a tunnel beneath the statue runs to Gingee Fort. It has never been opened.",
      "Metres away: the Dupleix statue to the north, the Nehru statue nearby. Three centuries of Indian history on one boulevard.",
    ],
    photo: "gandhi-statue.jpg",
    photoPosition: "top",
    visitInfo: {
      hours: "Open 24h",
      entry: "Free",
      tip: "Look at the pillars before you look at the statue. They are older than anything else on the Promenade and came from a fort that France once held. The statue arrived 300 years later.",
    },
  },
  {
    id: "joan-of-arc-statue",
    name: "Joan of Arc Statue",
    frenchName: "Statue de Jeanne d'Arc",
    category: "monument",
    lat: 11.9299,
    lng: 79.8350,
    era: "1920",
    summary:
      "You are looking at a white marble statue of Joan of Arc in the garden of Notre-Dame des Anges, donated in 1920 by François Gaudart, the wealthiest industrialist French India ever produced. Joan expelled the English from France in the 15th century. The English razed Pondicherry in 1761. The symbolism was deliberate.",
    history:
      "The statue was donated by François Gaudart (1844–1923), founder of the Forges et ateliers Gaudart-Sainte-Élisabeth, a metallurgical works that at its peak employed up to 4,000 Indian workers. When Gaudart sold the business in 1919 for approximately 75 million francs, it was one of the largest private transactions in the history of French India. He received the Légion d'honneur in 1914 and died in Cannes in 1923, three years after commissioning this statue.\n\nThe occasion was the canonisation of Joan of Arc by Pope Benedict XV on 16 May 1920, two years after the Armistice. Joan's image resonated in Pondicherry with a particular force. The same English whose East India Company had besieged this city four times, razed it to the ground in 1761, and systematically dismantled French power in India had been defeated in the First World War. The Virgin of Orléans who had expelled the English from France found a natural home on the Coromandel Coast.\n\nThe statue is positioned to align with the sunrise and the east-west axis of Notre-Dame des Anges, making the garden an intentional extension of the church. It is in white marble rather than local coral stone, a material choice that signals both Gaudart's wealth and his intention to build something permanent. It became the focal point of an annual gathering on Joan's feast day (30 May). Under Gaullist Governor Charles Baron during the Second World War, that gathering became an explicit act of resistance and a rallying point for French India's Free France movement.\n\nThe garden is still alive with the French community. On most mornings, retired Franco-Pondicherrians of French origin gather here to play pétanque beneath the statue. Joan of Arc looks on. It is one of the most quietly French scenes in Pondicherry.",
    highlights: [
      "White marble, not local coral stone: Gaudart commissioned something built to last.",
      "Canonised 16 May 1920: the occasion for the gift. Joan expelled the English from France; the English razed Pondicherry in 1761.",
      "Aligned with the sunrise axis of Notre-Dame des Anges. The garden is an extension of the church.",
      "Donor François Gaudart sold his metallurgical works in 1919 for 75 million francs: the largest private fortune French India produced.",
      "Under Governor Baron in WWII, the annual Joan of Arc gathering became a Gaullist commemoration and statement of resistance.",
      "Retired Franco-Pondicherrians still play pétanque in this garden most mornings. One of the most quietly French scenes in the city.",
    ],
    photo: "joan-of-arc.jpg",
    visitInfo: {
      hours: "Visible 24h from Rue Dumas; church open daily",
      entry: "Free",
      tip: "Come in the morning: the light is behind the church facade, the alignment with the altar axis is visible, and there is a good chance you will find a game of pétanque in progress under Joan of Arc.",
    },
  },
  {
    id: "schoelcher-bust",
    name: "Victor Schoelcher Bust",
    frenchName: "Buste de Victor Schoelcher",
    category: "monument",
    lat: 11.9260,
    lng: 79.8343,
    era: "Late 19th / early 20th century",
    summary:
      "You are looking at a bust of Victor Schoelcher (1804–1893), the French politician who abolished slavery throughout the French Empire on 27 April 1848. It is one of the rarest pieces of French abolitionist commemoration in South Asia. Schoelcher is celebrated across the French Caribbean. He is less known here, but the decree he signed applied to Pondicherry too.",
    history:
      "Victor Schoelcher was the Under-Secretary of State for the Navy and Colonies in the Provisional Government of 1848 who drafted and pushed through the abolition of slavery across all French colonial territories. The decree was signed on 27 April 1848, two months after the February Revolution that toppled the July Monarchy. It applied from Martinique and Guadeloupe to Réunion, Mayotte, Senegal, and the French Indian comptoirs.\n\nIn French India, the 1848 abolition had specific significance. Chattel slavery was not the dominant labour form in the Tamil context, but the decree reinforced the legal emancipation of the lowest-caste workers bound to agricultural and domestic service under conditions approximating bondage. It also strengthened the legal status of the Tamil Catholic renonçant community, who had renounced Hindu personal law and were governed by French civil law.\n\nSchoelcher was a lifelong republican. Imprisoned by Napoleon III after the 1851 coup, he returned to public life under the Third Republic and served as a senator until his death in 1893. His name appears across the former French world: a town in Martinique, the Bibliothèque Schoelcher in Fort-de-France, busts and monuments in territories that remember what the decree meant. This bust in Pondicherry is one of the quieter memorials, but the decree it commemorates was not quiet for the people it freed.",
    highlights: [
      "Abolished slavery across the entire French Empire on 27 April 1848, including the French Indian comptoirs",
      "The decree applied to Pondicherry: it reinforced the legal standing of bound Tamil workers and the renonçant community",
      "Schoelcher was imprisoned by Napoleon III in 1851, returned under the Third Republic, served as senator until 1893",
      "His name is on a town in Martinique, the Bibliothèque Schoelcher in Fort-de-France, and monuments across the former French world",
      "One of the very few pieces of French abolitionist commemoration in South Asia",
    ],
    photo: "victor-schoelcher.jpg",
    photoPosition: "top",
    visitInfo: {
      hours: "Visible during daylight hours",
      entry: "Free",
      tip: "Schoelcher is a household name in Martinique and Guadeloupe. In Pondicherry he is almost forgotten. The contrast tells you something about how colonial memory works.",
    },
  },
  {
    id: "old-lighthouse",
    name: "Old Lighthouse",
    frenchName: "Phare de Pondichéry",
    category: "monument",
    lat: 11.9329,
    lng: 79.8358,
    era: "Built 1835–1836",
    summary:
      "Built in 1836 by colonial engineer Louis Guerre and standing 29 metres tall, the Old Lighthouse guided ships through the treacherous Coromandel surf for 143 years. Reopened to the public in June 2026 after decades closed, you can now climb to the top for a panoramic view of the Bay of Bengal and the White Town, then come down to the café that has opened inside.",
    history:
      "The Coromandel Coast presented a navigation problem that killed sailors for centuries: a flat, featureless, surf-beaten shore with shifting sandbanks, no natural harbour, and nothing visible at night. Pondicherry's commercial existence depended on ships finding the offshore anchorage safely and transferring goods by small boat through the surf. A reliable light on this shore was not a luxury.\n\nLouis Guerre, the most significant French colonial engineer of the Restoration and July Monarchy period in Pondicherry, built the lighthouse in 1835 to 1836 under Governor Saint Simon. At 29 metres, with oil lamps and reflectors visible approximately 15 miles out to sea, it gave approaching ships a navigational fix at night for the first time. The square base, thick coral-stone walls, and warm ochre render place it in the same architectural family as every other significant French building of the era.\n\nGuerre is remarkable for the range of what he built: the lighthouse in 1836 and Notre-Dame des Anges in its current form in 1851 to 1855. No other single engineer left as visible a mark on the White Town's nineteenth-century built environment. Stand at the lighthouse and look north along the Promenade: the church tower is visible from here. Same hands, same stone, same decade.\n\nThe lighthouse operated for 143 years, through two world wars, Indian independence, and the transfer of Pondicherry in 1962. It was decommissioned in 1979 when a new red-and-white striped lighthouse was built about 2 km south in Dubrayapet. For decades it stood closed to the public, a landmark on the Promenade that could only be admired from outside. In June 2026 it reopened: visitors can now climb the internal staircase to the top for a sweeping view of the Bay of Bengal and the rooftops of the White Town below. A café has opened inside the base of the building, making it a natural stop to sit and recover after the climb.",
    highlights: [
      "Built 1836 by Louis Guerre, who also designed Notre-Dame des Anges. Same engineer, same coral stone, same era.",
      "29 metres tall, visible 15 miles at sea. Operated for 143 years without interruption.",
      "Reopened June 2026: climb to the top for the best elevated view of the Bay of Bengal and the White Town grid from the Promenade.",
      "A café is now open inside the base. Come down from the climb, sit down, and look out at the sea.",
    ],
    photo: "old-lighthouse.jpg",
    photoPosition: "top",
    visitInfo: {
      hours: "Check locally for current opening hours (reopened June 2026)",
      entry: "Check locally for current entry fee",
      tip: "Climb first, café after. The view from the top is the best free elevated panorama in the White Town. The same engineer built Notre-Dame des Anges — look north from the top and you will see its twin towers directly.",
    },
  },
  {
    id: "european-cemetery",
    name: "European Cemetery",
    frenchName: "Cimetière européen",
    category: "monument",
    lat: 11.9209,
    lng: 79.8207,
    era: "c.1700 – present",
    summary:
      "You are standing at the European Cemetery on Rue Victor Simonnel, in use since around 1700 and one of the oldest colonial burial grounds in South India. Governors, engineers, MEP missionaries, merchants, and three centuries of Franco-Pondicherrian families lie here. The tombstones are a primary historical source: they confirm dates, relationships, and careers that paper archives scattered across Paris, Aix-en-Provence, and Pondicherry can lose.",
    history:
      "The European Cemetery on Rue Victor Simonnel is, as one observer put it, the 'silent directory' of French India: a place where tombstone inscriptions confirm dates, relationships, and careers that paper archives scattered across Aix-en-Provence, Paris, and Pondicherry can lose. It has been receiving the French colonial dead since approximately 1700.\n\nThe oldest graves, in coral stone with simple Latin or French inscriptions, record the first generation of French colonial builders: Compagnie des Indes agents, MEP missionaries, and the early renonçant families. Tropical disease killed Europeans within months or years; governors' wives, children, and junior officials who did not survive their first monsoon fill this section. Many of the oldest stones have deteriorated severely, damaged by humidity, coastal salt air, and the neglect of the British occupation years when maintenance lapsed.\n\nThe nineteenth century is the best-represented period. The wealthier merchants and senior officials of the long peaceful century (1816 to 1954) built elaborate funerary monuments: neo-classical marble sarcophagi, neo-Gothic iron-railed enclosures, obelisks, and draped urns. The funerary vocabulary is entirely French, wholly distinct from Tamil burial practice. It is a physical expression of the same social division that produced the canal separating White Town from Black Town.\n\nA second cemetery, attached to the Cathedral of the Immaculate Conception ('Samba Koil') on Rue Dumas, holds episcopal remains (300 years of bishops) and the graves of Indian and French MEP fathers.",
    highlights: [
      "Active since c.1700: governors, engineers, MEP missionaries, merchants, and Franco-Pondicherrian families.",
      "Neo-classical and neo-Gothic funerary monuments of the 19th century: marble sarcophagi, obelisks, iron-railed enclosures.",
      "Primary source: tombstone inscriptions verify dates and careers lost from paper archives.",
      "Separate bishops' cemetery at the Cathedral ('Samba Koil') on Rue Dumas holds 300 years of episcopal remains.",
      "Rue Victor Simonnel is itself named for a colonial official killed at Verdun in WWI.",
    ],
    photo: "european-cemetery.jpg",
    visitInfo: {
      hours: "Daylight hours",
      entry: "Free",
      tip: "A quiet site, largely off the tourist circuit. Look for the coral-stone graves of the early colonial period alongside the grander 19th-century marble monuments.",
    },
  },
  {
    id: "french-streets",
    name: "Walking Tour of White Town",
    frenchName: "Promenade en Ville Blanche",
    category: "monument",
    lat: 11.9345,
    lng: 79.8328,
    era: "Colonial era (17th–20th c.)",
    photo: "walking-tour.jpg",
    summary:
      "A two-kilometre loop through the only French colonial town in India that survived decolonisation intact. Orange research institutes, a seafront church where Mass is said in three languages, a statue of the man who almost made France master of the subcontinent, and a poet's park at its heart. Allow two hours. Bring water. Start early.",
    history:
      "**Where to begin.** Start at the Institut Français de Pondichéry on Rue Dumas, the large orange building that announces itself before you can read the sign. That colour is deliberate: French institutional architecture had a habit of stating its presence in warm, saturated ochre, and this building, one of the few active French research centres in India, is a reminder that French Pondicherry did not end with decolonisation. It continued as scholarship. The Institut publishes the finest heritage map of White Town; ask at the reception before you set off.\n\n**The seafront and its monuments.** Walk east to Goubert Avenue, the promenade that faces the Bay of Bengal. The French War Memorial stands here, tended still by the French Consulate, dedicated to the residents of French India who died for France in the First World War: Tamil soldiers who fought at Verdun and Gallipoli under a tricolour they may never have seen before they sailed. Across the road, the Mahatma Gandhi Statue stands within a ring of granite pillars, a white structure facing the sea, on the same avenue where French governors once processed in ceremony. A short walk south, the statue of Joseph François Dupleix faces the water: the man who governed Pondicherry from 1742 to 1754 and nearly made France the dominant power in India. He was recalled by his own company, died broke in Paris, still fighting his creditors. His statue outlasted the empire he built.\n\n**Joan of Arc, in the tropics.** Between the seafront and Notre-Dame des Anges, a small garden holds a marble Joan of Arc, armoured, carrying a battle standard, donated by French politicians and businessmen in April 1923. She expelled the English from France. The British had razed this very city to the ground in 1761. The choice of subject was not accidental.\n\n**Le Café, at any hour.** On the promenade, Le Café is the oldest French cafe in Pondicherry, open twenty-four hours a day, a fact which becomes useful if you arrive before dawn to walk the seafront as the fishermen haul in their nets. Sit facing the sea, order coffee, and watch the bay go from black to grey to gold. By the time your cup is empty, the city will have woken up around you.\n\n**The church of three languages.** Notre-Dame des Anges, whose twin cream towers you can see from the promenade, has stood on this seafront site since 1687, rebuilt four times, and consecrated in its present form in 1855. It is the only church in Pondicherry where Mass is celebrated in Tamil, English, and French, the three languages of the city's three centuries. Twenty-eight stained-glass windows were shipped from France and installed in a building made of local coral stone. Morning Mass begins at 5:30am. The gates close at 8:00pm. The marble Joan of Arc in the garden outside faces east, toward the rising sun, toward the sea that brought everyone here.\n\n**The scholars who stayed.** Walk back into the grid and you find the intellectual institutions that are, arguably, the most enduring thing France left in Pondicherry. The École française d'Extrême-Orient, known universally as EFEO, founded in Hanoi in 1900 and present in Pondicherry since 1955, is dedicated to the study of Asian civilisations. Its scholars have documented temples, inscriptions, and manuscripts across India, Southeast Asia, and East Asia. UNESCO has recognised its work on Indian art, architecture, and literature. This is not a colonial archive gathering dust; it is an ongoing centre of living scholarship. The Alliance Française de Pondichéry, a short walk away, runs language courses and cultural programmes that have been the city's French cultural hub for decades. These are not monuments to a departed empire. They are working institutions.\n\n**The oldest church in the quarter.** The Immaculate Conception Cathedral, known locally as Samba Kovil (Tamil for Saint's Church), is one of the oldest churches in Pondicherry. Its plainer, more austere character reflects the earlier French presence: before the stained glass and the twin towers, before the grand civic ambitions of the nineteenth century. The walls carry more history than the signage admits. Walk past slowly.\n\n**The man who wrote the constitution.** The B.R. Ambedkar Mani Mandabam stands as a tribute to Dr. B.R. Ambedkar, the jurist, economist, and social reformer who drafted the Constitution of India. It is fitting that a city whose identity rests on the coexistence of the French, the Tamil, and the Indian should dedicate a building to the man who gave India its constitutional framework for equality. He would have understood this city.\n\n**The Lycée.** The Lycée Français International de Pondichéry educates children from the age of three to eighteen in the French national curriculum, the only such school in South India. French families, Tamil families, and international residents send their children here. The school is a living reminder that French Pondicherry is not purely a historical subject. It is a present one.\n\n**The park that was Napoleon's square.** Bharathi Park is the ceremonial heart of White Town: the open square surrounded by Raj Nivas to the north (the Lieutenant Governor's official residence, once the palace of the French Governor), the Legislative Assembly, the Secretariat, and the Puducherry Museum. At its centre stands the Aayi Mandapam, four Greco-Roman columns under a domed roof, built under Napoleon III to honour a Tamil woman named Aayi who demolished her own house to provide water for the city, centuries before the French arrived. European stone, Indian legend. The park is open from 6:00am to 8:00pm. Entry is free. Sit on a bench in the morning and watch the city go through its routines: joggers, vendors, schoolchildren, retirees reading newspapers in the shade of mango trees.\n\n**The museum that rewards slowness.** The Puducherry Museum, at the north-east corner of Bharathi Park, holds 81 Chola bronze sculptures of international calibre, Roman pottery imported from Italy two thousand years ago, Franco-Tamil colonial furniture, and a vehicle that the poet Subramania Bharathi is said to have loved. It costs ten rupees to enter and rewards ninety minutes of unhurried attention. Open 10:00am to 5:00pm. The bronze gallery alone is worth the walk.\n\n**After the tour.** The streets of White Town are at their best before 10am: soft light, cool air, shutters just opening, the smell of jasmine over coral-stone walls. When the heat builds, the quarter's deep verandahs and tall-ceilinged heritage cafes offer shade and strong coffee. Take any random turn off the main route and you will find beauty in every direction. Nowhere else in India does a town like this survive so intact, so alive, and so quietly magnificent.",
    highlights: [
      "The Institut Français de Pondichéry on Rue Dumas: the orange building is your starting point. Pick up their heritage map at the reception before you set off, it is the best guide to the grid.",
      "Dupleix and Gandhi share the same promenade: colonial ambition and the independence that ended it, neither erasing the other. Stand between them and face the sea.",
      "Notre-Dame des Anges: the only church in Pondicherry where Mass is celebrated in Tamil, English, and French. Arrive early and you may catch the 5:30am service before the tourists wake up.",
      "The Aayi Mandapam at the centre of Bharathi Park: four European columns over an Indian legend. Read the plaque slowly. The story is better than the architecture.",
      "The Puducherry Museum: ten rupees, 81 Chola bronzes, Roman pottery from Italy, and one vehicle that Subramania Bharathi loved. The least-visited world-class museum in South India.",
    ],
    visitInfo: {
      hours: "Streets open 24h; best walked 6:00–10:00 AM. Notre-Dame des Anges: 5:30 AM–8:00 PM. Bharathi Park: 6:00 AM–8:00 PM. Puducherry Museum: 10:00 AM–5:00 PM",
      entry: "Free (Puducherry Museum: ₹10 adults, ₹5 children)",
      tip: "Start at the Institut Français on Rue Dumas and walk clockwise toward the sea. Allow two hours for the monuments and add ninety minutes if you enter the Puducherry Museum. Le Café on the promenade is open twenty-four hours and makes a good breakfast stop before the heat builds.",
    },
  },
  {
    id: "golconde",
    name: "Golconde",
    category: "monument",
    lat: 11.9374,
    lng: 79.8352,
    era: "Completed 1942",
    photo: "golconde.jpg",
    summary:
      "India's first reinforced, cast-in-place concrete building, completed in 1942 by a Japanese-American architect who arrived as a site supervisor and left as a disciple of Sri Aurobindo. No mechanical cooling. The sea breeze does the work. Golconde is a private ashram residence and one of the most significant buildings in modern architectural history.",
    history:
      "**The architect and his apprentice.** Antonin Raymond was a Czech-American architect who had come to Japan in 1919 as Frank Lloyd Wright's project architect for the Imperial Hotel in Tokyo. He stayed, founded his own practice, and took on a young Japanese-American assistant named George Nakashima. While working for Raymond, Nakashima traveled Japan extensively and learned about traditional construction. In 1936, Raymond sent him to Pondicherry for three years to supervise the Golconde dormitory for the Sri Aurobindo Ashram. Raymond had conceived the initial design. Nakashima would have to build it.\n\n**The building no one else could have built.** Golconde is India's first reinforced, cast-in-place concrete building. But the structural first is not the whole story. Nakashima, working on the ground in a tropical coastal city he had never seen, altered Raymond's design to match the climate. He added a precast barrel-vaulted roof and plenum to insulate from the sun. He oriented the structure north to south to catch the breeze off the Bay of Bengal. He specified adjustable concrete louvered walls, ventilating breezeways running through the building's cross-section, and horizontally slatted sliding teak doors. The result is a building that has required no mechanical cooling since it was completed. It breathes. The modernist vocabulary of straight lines and poured concrete meets the practical intelligence of a sailor's shelter.\n\n**The team that built it.** Nakashima worked with ashram devotees and residents, a mix of skilled and unskilled workers, most with no prior construction experience. The building was made by hand over several years. Devotees melted down their own donated brass utensils to cast the custom hardware for the doors. Nothing was shipped in that could be made here. Czech architect Francois Sammer also worked alongside Nakashima throughout the project.\n\n**What the Ashram did to him.** While supervising construction, Nakashima became so absorbed in the philosophy and daily life of the Ashram that he became a disciple of Sri Aurobindo. He was given the Sanskrit name Sundarananda, meaning one who delights in beauty. Here he practised Integral Yoga, Sri Aurobindo's philosophy of selflessness and dedicated action. The effect on his subsequent work was permanent. The furniture Nakashima designed for Golconde, the teak sliding walls he crafted, the precision of every construction detail, all of it reflects what he came to understand as Karma Yoga: work as spiritual practice, beauty as a form of devotion. He went on to become one of the most celebrated furniture makers of the twentieth century, but Pondicherry is where that life began.\n\n**The building today.** Golconde is still in active use as a private residence for disciples of the Sri Aurobindo Ashram. It is not open to the public. In 2010, vir.mueller architects published a monograph on the building, drawing on previously unpublished photographs, construction drawings, and archival letters and journals. In 2023, the Nakashima Foundation hosted an exhibition titled Golconde: The Introduction of Modernism in India, allowing visitors to experience the building virtually and learn the story of its making. The building itself remains what it always was: a sanctuary on the coastal edge of the Bay of Bengal, still breathing through its louvered walls, still requiring nothing more than the wind.",
    highlights: [
      "No mechanical cooling, completed 1942. Nakashima's louvered walls, ventilating breezeways, and north-south orientation catch the Bay of Bengal wind and carry it through the building. A climate solution that took the rest of the world another fifty years to name sustainable architecture.",
      "Devotees melted down their own donated brass utensils to cast the building's custom door hardware. The building was made by the people who would live in it, with what they had.",
      "Nakashima came as a site supervisor and left as Sundarananda, a disciple of Sri Aurobindo. The name means one who delights in beauty. It is the thread running through everything he made for the rest of his life.",
    ],
    visitInfo: {
      hours: "Not open to the public (active private residence for Sri Aurobindo Ashram disciples)",
      entry: "The exterior can be glimpsed from Rue de la Marine",
      tip: "The vir.mueller architects monograph (2010) and the Nakashima Foundation's 2023 exhibition are the fullest accounts of the building for those who cannot enter. The Sri Aurobindo Ashram main building, a short walk south, is open to visitors.",
    },
  },
  {
    id: "romain-rolland-library",
    name: "Romain Rolland Library",
    frenchName: "Bibliothèque Romain Rolland",
    category: "heritage",
    lat: 11.9342,
    lng: 79.8351,
    era: "Founded 1827",
    summary:
      "Welcome to the Romain Rolland Library, founded in 1827 as the Bibliothèque Publique de Pondichéry, one of the oldest public libraries in India. It holds around 400,000 items in French, English, and Tamil, including manuscripts. It was renamed in 1966 to honour Romain Rolland, the French Nobel laureate who corresponded with Gandhi and Tagore and never visited Pondicherry. His name is on a street here too.",
    history:
      "The Bibliothèque Publique de Pondichéry was founded in 1827 during the governorship of Comte Dupuy, part of the same Restoration-era investment in civilian institutions that also produced the French College. In a comptoir that had been razed to the ground twice in living memory, a public library was an assertion of permanence: this was not a garrison, it was a city.\n\nFor nearly 140 years it carried the name Bibliothèque Publique. In 1966, during the centenary celebrations of the birth of Romain Rolland (1866–1944), it was renamed in his honour. Rolland was a French writer, Nobel laureate in Literature (1915), and one of the most significant French voices of engagement with Indian thought. He corresponded extensively with Gandhi and Tagore, wrote biographies of both, and became a symbol of the intellectual connection between France and India. He never came to Pondicherry, but his name is now on both a street and the city's principal library.\n\nToday the library holds around 400,000 items: books, journals, magazines, Braille materials, and French and English manuscripts. It circulates around 200,000 items per year, making it one of the most actively used heritage libraries in South India. It is open to the public and free to enter.",
    highlights: [
      "Founded 1827 by Governor Dupuy: one of the oldest public libraries in India.",
      "Around 400,000 items including French and English manuscripts. Annual circulation: 200,000.",
      "Renamed in 1966 for Romain Rolland, French Nobel laureate who corresponded with Gandhi and Tagore.",
      "Rolland never visited Pondicherry. His name is also on one of the White Town's main streets.",
      "Free to enter. One of the most actively used heritage libraries in South India.",
    ],
    photo: "romain-rolland-library.jpg",
    visitInfo: {
      hours: "Check locally for current opening hours",
      entry: "Free",
      tip: "The French and Tamil manuscript collection is the rarest part of the holdings. Ask at the desk if you want to see materials from the colonial period.",
    },
  },
  {
    id: "hotel-de-ville",
    name: "La Mairie (Town Hall)",
    frenchName: "Hôtel de Ville de Pondichéry",
    category: "heritage",
    lat: 11.9314,
    lng: 79.8353,
    era: "Built 1870–1871",
    summary:
      "You are looking at La Mairie de Pondichéry, the Town Hall built in 1870 on Goubert Avenue facing the sea. Its white neoclassical facade, columns, and carved wooden details made it the most prominent symbol of French municipal authority on the Coromandel Coast. Part of the original building collapsed in 2014 after heavy rain. Restoration work has been underway since.",
    history:
      "Built in 1870 to 1871 on Goubert Avenue, the Hôtel de Ville was the institutional centre of French Pondicherry's municipal life. Its white neoclassical facade, colonnaded front, and carved wooden interior placed it firmly in the tradition of French civic architecture: a building that said, visibly, that this was a city with a government, a council chamber, and a claim to permanence.\n\nThe building housed the municipal council, the registration offices, and the administrative apparatus of the French comptoir for nearly a century. After the de jure transfer of Pondicherry to India in 1962, it continued in use, hosting the Pondicherry Legislative Assembly in the 1960s before the Assembly moved to Rue Victor Simonnel.\n\nIn October 2014, a large section of the original structure collapsed following heavy monsoon rains, a combination of age, deferred maintenance, and the particular vulnerability of coral-stone buildings to prolonged saturation. The administration moved to annexe buildings. Reconstruction and restoration work has been underway since, aiming to return the building to something approaching its original form.\n\nThe Pondicherry Municipality's day-to-day administration now operates from No. 1 Dumas Street, a short walk from the seafront. The Town Hall itself, when restored, remains one of the most architecturally significant colonial civic buildings in South India.",
    highlights: [
      "Built 1870 on Goubert Avenue, facing the sea: the most prominent symbol of French municipal authority in Pondicherry.",
      "White neoclassical facade, columns, and carved wooden details in the tradition of French civic architecture.",
      "Housed the municipal council, registration offices, and briefly the Pondicherry Legislative Assembly in the 1960s.",
      "Part of the original structure collapsed in 2014 after heavy monsoon rains. Restoration has been underway since.",
      "The Pondicherry Municipality now operates from No. 1 Dumas Street.",
    ],
    photo: "hotel-de-ville.jpg",
    visitInfo: {
      hours: "Exterior visible from Goubert Avenue at all times. Interior access subject to restoration status.",
      entry: "Free to view from outside",
      tip: "Check the current state of restoration before visiting the interior. The seafront facade is the main visual draw.",
    },
  },
];

export function getSite(id: string): Site | undefined {
  return sites.find((s) => s.id === id);
}
