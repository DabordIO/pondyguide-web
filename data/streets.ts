export type StreetAxis = "N-S" | "E-W";

export interface Street {
  id: string;
  name: string;
  photo?: string;
  altName?: string;   // explicit override; otherwise derived by getStreetAltName()
  axis: StreetAxis;
  namedAfter: string;
  dates?: string;
  lat: number;
  lng: number;
  summary: string;
  history: string;
  notable: string[];
  metaTitle?: string;
  metaDescription?: string;
}

// N-S streets run parallel to the coast (sea on the right when heading south)
// E-W streets connect the seafront to the canal
// Coordinates sourced from OpenStreetMap (Overpass/Nominatim); estimates noted.

export const streets: Street[] = [
  // ── NORTH-SOUTH STREETS (parallel to coast) ──────────────────────────────

  {
    id: "rue-de-la-marine",
    metaTitle: "Rue de la Marine, Seafront Street of White Town",
    metaDescription: "The street closest to the sea, named for the marine itself. Before there was a harbour, every governor, soldier, and bale of cotton arrived through surf.",
    photo: "rue-de-la-marine.jpg",
    name: "Rue de la Marine",
    axis: "N-S",
    namedAfter: "The French Navy & Merchant Marine",
    lat: 11.9362,
    lng: 79.8356,
    summary:
      "Welcome to Rue de la Marine, the street closest to the sea, named not for any person but for the sea itself. Without the marine, there was no Pondicherry. No harbour existed here. Every soldier, governor, and bale of cotton arrived through crashing surf by small boat.",
    history:
      "You're standing on the most maritime street in a city that paradoxically never had a harbour. The Coromandel coast is a sailor's nightmare: flat, featureless, deadly surf, shifting sandbanks. Ships anchored offshore and everything (soldiers, governors, dispatches from Paris, bales of cotton) came to shore by small boat through breaking waves.\n\nWhen the French navy abandoned this coast, Pondicherry starved. When [Suffren](/history/lives-and-legacies/suffren)'s squadron left in 1783, French India was finished. When the British fleet blockaded the city in 1760–61, the population starved within months. This street's name acknowledges a structural truth: the sea decided everything here.\n\nAnd yet France is still here. The [French Consulate](/history/institutions/consulate-general) sits on this very street, right on the beach, one of the only French diplomatic missions in a former French territory anywhere in the world. The sea brought France to Pondicherry. France never quite left.",
    notable: [
      "The French Consulate is on this street, right on the beach. France's last institutional foothold, on the most maritime address in the city.",
      "The Sri Aurobindo Ashram's main building also faces this street. Sri Aurobindo arrived by sea in 1910 on a ship named the SS Dupleix. He never left either.",
      "No harbour ever existed here. Every governor who ruled French India arrived on this coastline by small boat through the surf. Some left the same way, in disgrace.",
    ],
  },
  {
    id: "rue-dumas",
    metaTitle: "Rue Dumas, Colonial Avenue of White Town Pondicherry",
    metaDescription: "Named after the Governor-General who built the palace and improved the harbour. Notre-Dame des Anges and the Joan of Arc statue stand here.",
    photo: "rue-dumas.jpg",
    name: "Rue Dumas",
    axis: "N-S",
    namedAfter: "Pierre Benoît Dumas, Governor-General 1735–1741",
    dates: "1696–1745",
    lat: 11.9299,
    lng: 79.8337,
    summary:
      "Welcome to Rue Dumas, named after the Governor-General who built the palace, secured a second harbour, and handed Pondicherry to Dupleix in better condition than he found it. On your right: Notre-Dame des Anges, the oldest church in French Pondicherry. In the garden between the church and the sea: a white marble Joan of Arc. France had a patron saint even here.",
    history:
      "You are walking on a street named after a man who governed French India from 1735 to 1741, the quiet years between the founding era of [François Martin](/history/lives-and-legacies/francois-martin) and the imperial gamble of [Dupleix](/history/lives-and-legacies/dupleix). Pierre Benoît Dumas (1696–1745) was the consolidator: he strengthened the city's fortifications, cultivated the Nawab of the Carnatic, and in 1739 persuaded the Nawab of Tanjore to cede Karikal, giving France a second coastal settlement with a better natural harbour and access to the rice-rich Tanjore delta. Then he left the city to Dupleix. Everything that followed was built on what Dumas had secured.\n\nHis most visible legacy is the Governor's Palace: he initiated what is now Lok Nivas in 1738. But step off the street for a moment. The church ahead of you, [Notre-Dame des Anges](/discover/landmarks/notre-dame), has stood on this site since 1687, though the current building dates from 1855. Every governor who ever lived in Pondicherry would have walked past it. Now go find the garden between the church and the sea. Standing there is a white marble Joan of Arc, installed in April 1923, three years after Joan was canonised. France, a republic, named streets after her. France, a colonial power, sent her statue to India. Go figure.\n\nThe [Alliance Française](/history/institutions/alliance-francaise) is also on this street: French language courses and cultural events in the same block as a 17th-century church and an Orléanist saint. This is the most French street in Pondicherry.",
    notable: [
      "Look for the Joan of Arc statue, not inside the church but in the garden between Notre-Dame des Anges and the seafront. She arrived April 1923. Find her.",
      "Notre-Dame des Anges has stood on this site since 1687, before Dupleix, before the Dutch occupation, before almost everything. The current facade dates from 1855.",
      "The Alliance Française is on this street. Ask them what courses they run; some are free or low-cost for visitors.",
      "Dumas initiated Lok Nivas (then called Raj Nivas) in 1738. The palace still stands one block west, in the park.",
    ],
  },
  {
    id: "rue-suffren",
    metaTitle: "Rue Suffren, Admiral's Street in White Town Pondicherry",
    metaDescription: "Named for the admiral who fought five battles against the British off Pondicherry in 1782 and 1783 without suffering a defeat.",
    photo: "rue-suffren.jpg",
    name: "Rue Suffren",
    axis: "N-S",
    namedAfter: "Vice-Admiral Pierre André de Suffren de Saint Tropez",
    dates: "1729–1788",
    lat: 11.9273,
    lng: 79.8330,
    summary:
      "Welcome to Rue Suffren, named after the admiral whose fleet passed just offshore in 1782 and 1783, fighting five battles against the British without losing once. He was the last Frenchman who might have changed the outcome in India. He got very close.",
    history:
      "You are walking on a street named after a sailor. Look east. The sea is right there. In 1782 and 1783, Rear Admiral [Pierre André de Suffren de Saint Tropez](/history/lives-and-legacies/suffren) (1729–1788) fought five naval engagements along this coast against British Admiral Sir Edward Hughes: Sadras, Providien, Negapatam, Trincomalee, Cuddalore. Five battles, zero defeats. And yet French India still fell.\n\nSuffren arrived with a mission that was already nearly impossible: twenty years after Dupleix's recall, the French protectorate had collapsed, Pondicherry had been razed and rebuilt, and the British controlled the land. His job was to disrupt British sea control during the War of American Independence, not to reconquer India, but to make Britain's position uncomfortable enough to force concessions at the peace table. He coordinated with [Hyder Ali](/history/lives-and-legacies/hyder-ali) and then [Tipu Sultan](/history/lives-and-legacies/tipu-sultan), reviving the Franco-Indian alliance that [Dupleix](/history/lives-and-legacies/dupleix) had invented. At sea he was ferocious, aggressive, and technically brilliant.\n\nThen the Treaty of Paris (1783) closed the war while Suffren was preparing his next move. He sailed home. He died in Paris five years later, aged 58, without receiving the marshal's baton the navy owed him. The sea he sailed past is still here. He almost changed everything.",
    notable: [
      "Five battles: Sadras, Providien, Negapatam, Trincomalee, Cuddalore. Look them up. Suffren won every engagement without ever defeating Hughes decisively enough to matter.",
      "He allied with Hyder Ali and Tipu Sultan, the same Franco-Indian strategy Dupleix invented thirty years earlier, tried again at sea.",
      "The Sacred Heart Basilica is nearby on Mahatma Gandhi Road; its twin spires are visible from this street. Built 1902–1907, it is a UNESCO-listed heritage site.",
      "Suffren died in 1788 without the marshal's baton he had earned. France was good at not rewarding the right people.",
    ],
  },
  {
    id: "rue-romain-rolland",
    metaTitle: "Rue Romain Rolland, Nobel Laureate Street in White Town",
    metaDescription: "The only White Town street named after someone who never visited Pondicherry, honouring the French Nobel laureate and friend of Gandhi.",
    photo: "rue-romain-rolland.jpg",
    name: "Rue Romain Rolland",
    axis: "N-S",
    namedAfter: "Romain Rolland, French writer and Nobel laureate",
    dates: "1866–1944",
    lat: 11.9285,
    lng: 79.8336,
    summary:
      "Welcome to Rue Romain Rolland, the only street in the White Town named after someone who never set foot in Pondicherry. Romain Rolland won the Nobel Prize in 1915, corresponded with Gandhi, and wrote about Ramakrishna. He represents an idea: that France and India had something to say to each other beyond conquest.",
    history:
      "You are walking on a street named after a man who never came here. [Romain Rolland](/history/lives-and-legacies/romain-rolland) (1866–1944), French novelist, Nobel laureate, pacifist, is the odd one out in this grid of governors, admirals, and company directors. He earned his place not by governing anything but by building a bridge between French and Indian thought at a moment when that bridge mattered politically.\n\nHe corresponded with Mahatma Gandhi, promoted Rabindranath Tagore's work to French readers, and wrote celebrated biographies of Ramakrishna and Vivekananda. His Vie de Ramakrishna (1929) introduced the Bengali saint to a European audience of millions. During the independence movement, Rolland was a consistent voice in France for Indian self-determination, a French intellectual who saw in Indian spiritual thought something Europe had misplaced.\n\nWhen Pondicherry renamed its streets after the transfer of 1962, the choice of Rolland was deliberate. You could keep a street named after a pacifist intellectual who loved India more easily than you could defend one named after a general. And the street he inherited already had the right spirit: the Saint Joseph of Cluny sisters, a French Catholic missionary congregation, had long been running a school and a hospital here. France as teacher, France as healer. Rolland would have approved.",
    notable: [
      "Saint Joseph of Cluny Primary School is on this street, a French missionary institution still educating children in Pondicherry today.",
      "Saint Joseph of Cluny Hospital is also here. The Sisters of Cluny, founded by Anne-Marie Javouhey in 1820, brought healthcare across French colonial territories.",
      "Rolland corresponded with Gandhi and translated Tagore for French readers, at a time when most French intellectuals weren't paying attention.",
      "He is the only person in this street grid who never held a rank, a governorship, or a commission. The anomaly is the point.",
    ],
  },
  {
    id: "rue-francois-martin",
    metaTitle: "Rue François Martin, Founder's Street in White Town",
    metaDescription: "Named after the founder of French Pondicherry, who stayed with six men in 1674 when others abandoned the settlement.",
    photo: "rue-françois-martin.jpg",
    name: "Rue François Martin",
    axis: "N-S",
    namedAfter: "François Martin, founder of French Pondicherry",
    dates: "c.1634–1706",
    lat: 11.9369,
    lng: 79.8347,
    summary:
      "Welcome to Rue François Martin, named after the man who founded French Pondicherry. He left France in 1665 and never went back. When everyone else evacuated in 1674, he stayed with six men and refused to give up the site. That decision is why this street exists.",
    history:
      "You are walking on a street named after a man who held this city with six soldiers and pure stubbornness. [François Martin](/history/lives-and-legacies/francois-martin) (c.1634–1706), born in Paris, the son of a merchant, joined the French East India Company as a junior factor. He worked his way up the Coromandel Coast and in 1673 negotiated the cession of the Pondicherry site from Chirkhan Loudy, the Bijapuri governor of Valgondapouram. He had his foot in the door.\n\nThen in September 1674, French forces evacuated after the fall of San Thomé, the Portuguese settlement that is now a neighbourhood of Chennai, 150 km north of here. Every senior officer left. Martin stayed with six men on a site the Dutch would have occupied the moment it was empty. That refusal is the true founding moment of French India. Not the treaty, not any order from Paris. One man who decided not to leave.\n\nThe Dutch caught up with him anyway. They captured Pondicherry in 1693 and took him prisoner to Batavia. He survived, found refuge at Chandernagor, and returned in 1699 after the Treaty of Ryswick. He died in office on 30 December 1706 and was buried in Fort Saint-Louis, the fort he had built. He never returned to France. He is buried in the city he refused to abandon.",
    notable: [
      "Lok Nivas, the Lieutenant Governor's official residence, faces this street from the south. Martin built the city. Others governed it. The palace went up thirty years after his death.",
      "The grid you are standing on is Dutch, not French. Jean Deloche's research established that the orthogonal layout was designed during the Dutch occupation of 1693–1699. Martin returned from Batavia and built his city on a Dutch plan. The street names are French. The geometry is not.",
      "Martin's three-volume Mémoires (1665–1696) are the most important single primary source for early French India. He wrote them while governing. The man held a city and kept a diary.",
      "He never went home. He is buried in the city he refused to abandon in 1674. Fort Saint-Louis no longer stands, but the grid he laid out still does. You are walking on it.",
    ],
  },
  {
    id: "rue-saint-louis",
    metaTitle: "Rue Saint Louis, Royal Street of White Town Pondicherry",
    metaDescription: "Named after King Louis IX of France, with the Pondicherry Museum located on this historic White Town street.",
    photo: "rue-saint-louis.jpg",
    name: "Rue Saint Louis",
    axis: "N-S",
    namedAfter: "Saint Louis (Louis IX of France)",
    dates: "1214–1270",
    lat: 11.9365,
    lng: 79.8354,
    summary:
      "Welcome to Rue Saint Louis, named after King Louis IX of France, who died on Crusade in 1270 and became a saint in 1297. He never came anywhere near India. His name is here because French colonial cities everywhere carried Catholic royal dedications in their street grids, their forts, and their churches. The Pondicherry Museum is on this street.",
    history:
      "You are walking on a street named after a medieval king who died in Tunis, crusading, seven centuries ago. Saint Louis, Louis IX of France, is the patron saint of the French royal house, and his name travelled wherever France went. Streets, hospitals, forts, churches: Saint-Louis is one of the most repeated French place names in the world, from Senegal to Louisiana to this street in Tamil Nadu.\n\nFort Saint-Louis was François Martin's original fortification on this site. That fort no longer exists, razed by the British in 1761. The name survived in the street grid. In a city where every other street name commemorates a specific person with a specific connection to French India, this one commemorates an idea: that France's presence here was part of a longer Catholic royal history reaching back to the Crusades.\n\nThe [Pondicherry Museum](/discover/landmarks/museum) is on this street today, in a repurposed colonial administrative building. Its collection includes some of the finest Chola and Pallava bronzes in South India, Roman pottery from [Arikamedu](/discover/explore/daytrip-arikamedu), and Franco-Tamil furniture from the White Town's domestic interiors. A medieval French saint on the outside. Two thousand years of Indian history on the inside.",
    notable: [
      "The Pondicherry Museum is at the top of this street. Entry ₹10. Allow 90 minutes. The bronze gallery alone is worth it.",
      "Fort Saint-Louis, the original French fortification built by François Martin, stood near this site. The British demolished it in 1761. The name stayed in the street.",
      "Saint Louis died in Tunis in 1270 on his second Crusade. He never reached his destination. His name is on a street in India. History has a sense of humour.",
      "Look at the street signs: French above, Tamil below. Saint Louis in Tamil phonetics. The king who wanted Jerusalem ended up in Pondicherry.",
    ],
  },
  {
    id: "rue-desbassayns",
    metaTitle: "Rue Desbassayns, Lycée Français Street in White Town",
    metaDescription: "Named after the administrator who founded the French College in 1826, now the Lycée Français de Pondichéry.",
    photo: "rue-desbassyns-de-richemont.jpg",
    name: "Rue Desbassayns de Richemont",
    axis: "E-W",
    namedAfter: "Vicomte de Richemont, colonial administrator",
    dates: "Restoration era",
    lat: 11.9381,
    lng: 79.8348,
    summary:
      "Welcome to Rue Desbassayns de Richemont, named after the Restoration administrator who founded the French College in 1826. That college, now the Lycée Français de Pondichéry, is the oldest French educational institution outside France. This street marks the western boundary of the White Town, where the French quarter meets the canal.",
    history:
      "You are walking on a street named after a man who built schools, not forts. The Vicomte Desbassayns de Richemont administered Pondicherry during the Restoration, the period after France definitively recovered the city in 1816. The wars were over. The protectorate dream was buried. What France had left in India was a small, peaceful trading town, and the question was what to do with it.\n\nThe answer was institutions. In 1826, de Richemont founded the Collège Royal, which became the [Lycée Français de Pondichéry](/history/institutions/lycee-francais), still operating today as the oldest French educational establishment outside metropolitan France. The same decade saw the botanical garden (1826), the Law School (1838), the lighthouse (1836). France was investing in civilian infrastructure rather than military ambition.\n\nThe school mattered most to the renonçants: Tamil Catholics who had formally renounced Hindu personal law to be governed by the French civil code. Their children needed a French education to function in French India's legal and administrative world. The college gave them one. Walk to the canal from here and you are at the boundary the French drew between the White Town and the Indian town. The school stood on this edge deliberately.",
    notable: [
      "The Lycée Français de Pondichéry, founded 1826, is the oldest French educational institution outside France. It still functions today. Look for it near this street.",
      "This street runs close to the canal that separated the White Town (French quarter) from the Black Town (Indian quarter). You are at the edge of two worlds.",
      "The renonçants, Tamil Catholics governed by French civil law rather than Hindu personal law, were the primary community this school served. A French education was a legal and social necessity for them.",
      "De Richemont's era (post-1816) is when Pondicherry stopped trying to be an empire and started trying to be a good city. The school is the monument to that change.",
    ],
  },
  {
    id: "rue-law-de-lauriston",
    metaTitle: "Rue Law de Lauriston, Rebuilder of Pondicherry Street",
    metaDescription: "Named after the governor who surrendered to Robert Clive, returned years later, and rebuilt Pondicherry from ruins in five months.",
    photo: "rue-law-de-lauriston.jpg",
    name: "Rue Law de Lauriston",
    axis: "E-W",
    namedAfter: "Jean Law de Lauriston, Governor-General of French India",
    dates: "1719–1797",
    lat: 11.9359,
    lng: 79.8348,
    summary:
      "Welcome to Rue Law de Lauriston. The man whose name is on this street surrendered to Robert Clive in 1752, then came back as Governor-General and rebuilt Pondicherry from rubble in five months. He served twice. Lawspet, a neighbourhood of Pondicherry, is also named after him. The city you are walking through is largely his work.",
    history:
      "You are walking on a street named after one of the most remarkable comeback stories in French India. [Jean Law de Lauriston](/history/lives-and-legacies/law-de-lauriston) (1719–1797), nephew of the financier John Law whose Mississippi Bubble had rocked France in 1720, was the officer forced to surrender on the island of Srirangam on 12 June 1752, encircled by [Robert Clive](/history/lives-and-legacies/robert-clive). On the same day, Chanda Sahib, the French-backed Nawab of the Carnatic, was beheaded fifty kilometres away. Dupleix's entire Carnatic strategy collapsed in an afternoon.\n\nMost careers do not recover from that. Law de Lauriston's did. After France recovered Pondicherry by treaty in 1765, he was appointed Governor-General and set about an extraordinary reconstruction. The British had razed the city systematically after its 1761 surrender: the palace, the fort, the churches, the warehouses, down to the foundations. Three months of deliberate destruction. Law de Lauriston reversed it in five: approximately 200 European and 2,000 Tamil houses raised on the original street pattern. Then he served a second term as Governor-General, 1767 to 1777, during which he secured the acquisition of Yanam for France through negotiations. He also wrote Mémoires on affairs of the Mughal Empire.\n\nHis son Jacques became a general under Napoleon. The neighbourhood of Lawspet bears his name. The White Town grid you are admiring is the grid he rebuilt. He lost a campaign and rebuilt a city. Not many people do both.",
    notable: [
      "Lawspet, a neighbourhood of Pondicherry, is named after him. He left his mark on the city's map twice: in the street grid he rebuilt, and in the neighbourhood name that survives today.",
      "He surrendered to Robert Clive at Srirangam in 1752. The same man rebuilt Pondicherry from foundations up in five months, starting 1765. The arc of that career is extraordinary.",
      "He served two terms as Governor-General: 1765–1766 and 1767–1777. The second term secured Yanam for France. He kept finding ways to be useful.",
      "His son Jacques Law de Lauriston became a general under Napoleon. The family that lost the Carnatic produced a Napoleonic field commander one generation later.",
    ],
  },

  // ── EAST-WEST STREETS (connecting seafront to canal) ─────────────────────

  {
    id: "rue-lally-tollendal",
    metaTitle: "Rue Lally-Tollendal, Tragic Commander Street in White Town",
    metaDescription: "Named after the commander who surrendered Pondicherry in 1761, was executed in Paris in 1766, and later officially rehabilitated.",
    photo: "generic.jpg",
    name: "Rue Lally-Tollendal",
    axis: "E-W",
    namedAfter: "Thomas Arthur de Lally-Tollendal, last French military governor",
    dates: "1702–1766",
    lat: 11.9387,
    lng: 79.8348,
    summary:
      "Welcome to Rue Lally-Tollendal, named after the commander who surrendered Pondicherry in January 1761, was brought back to France in chains, tried for treason, and beheaded in Paris on 9 May 1766. Voltaire campaigned for his innocence. The Paris Parlement agreed, twelve years after the execution. France named a street after him anyway.",
    history:
      "You are walking on a street named after a man France killed. [Thomas Arthur de Lally-Tollendal](/history/lives-and-legacies/lally) (1702–1766) came from the Irish Jacobite diaspora: his father had followed James II into French exile after 1688, and Lally grew up French in name, Irish in blood. He distinguished himself at the Battle of Fontenoy in 1745 and arrived in India in April 1758 with a mandate to reverse French decline after Dupleix's recall.\n\nThe mission was close to impossible before he started. British sea power had consolidated. Robert Clive had won Plassey. The money and ships from Paris never arrived in sufficient numbers. Lally compounded the structural problems with decisions that historians have never forgiven: most critically, he recalled [Bussy](/history/lives-and-legacies/charles-de-bussy) from Hyderabad, dissolving the French protectorate in the Deccan to concentrate forces in the Carnatic. Bussy had held that position for eight years with a few thousand men. The moment he left, it collapsed. The siege of Madras failed (December 1758 to February 1759). The defeat at Wandiwash came on 22 January 1760. Pondicherry fell in January 1761 after a five-month siege.\n\nLally returned to France expecting to answer questions. Instead he was arrested. The civilian community of Pondicherry, whom he had treated badly during the siege, had provided testimony against him. On 9 May 1766 he was beheaded in Paris. Voltaire read the trial record and concluded it was judicial murder. He published Fragments sur l'Inde in 1773. In 1778 the Paris Parlement annulled the conviction. Lally's son spent his life on the rehabilitation campaign. The street named after him sits alongside those of Dupleix and Bussy, his colleagues and contemporaries. The White Town kept everyone.",
    notable: [
      "His most criticised decision: recalling Bussy from Hyderabad in 1758. Bussy had held the Deccan protectorate for eight years. It collapsed within months of his departure. Lally never had an answer for this.",
      "He was beheaded in Paris on 9 May 1766. Voltaire called it judicial murder and said so publicly. The Parlement agreed in 1778. Lally did not live to hear it.",
      "His street runs east-west across the grid that Law de Lauriston rebuilt after the siege Lally lost. Every morning the sun rises over the street named after the man who surrendered this city.",
      "Lally's son, Trophime-Gérard de Lally-Tollendal, spent decades rehabilitating his father's name. He succeeded. He also became a moderate voice during the French Revolution, opposed to the Terror.",
    ],
  },
  {
    id: "rue-de-la-compagnie",
    metaTitle: "Rue de la Compagnie, French East India Company Street",
    metaDescription: "Named after the Compagnie des Indes, the trading company that founded French Pondicherry and shaped its first century.",
    photo: "rue-de-la-compagnie.jpg",
    name: "Rue de la Compagnie",
    axis: "N-S",
    namedAfter: "Compagnie des Indes (French East India Company)",
    dates: "Founded 1664",
    lat: 11.9365,
    lng: 79.8330,
    summary:
      "Welcome to Rue de la Compagnie, named after the Compagnie des Indes, the French East India Company founded in 1664. Before there were governors and generals, there was a trading company. It created this city, sustained it for a century, and in 1754 made the decision that ended French India's best chance of becoming something larger.",
    history:
      "You are walking on a street named not after a person but after a corporation. The Compagnie des Indes Orientales was founded by Jean-Baptiste Colbert in 1664 as a state-backed monopoly: France's answer to the Dutch and English trading companies that were accumulating wealth and territory across Asia while France watched. In 1666 the Mughal emperor Aurangzeb granted it trading rights, and the Company set up its first Indian establishment at Surat. Southern operations from Pondicherry began in 1673: cotton and textiles were the main trade items, flowing out of this coast to Europe for the next eighty years. It financed [François Martin](/history/lives-and-legacies/francois-martin)'s settlement here and sustained the colony through wars, occupations, and sieges for a century.\n\nThe tension at the heart of French India was always the tension between the Company's shareholders and the governors on the ground. The Company wanted cotton, spices, and dividends. [Dupleix](/history/lives-and-legacies/dupleix) wanted territorial sovereignty and a revenue base independent of trade. For twelve years he built a protectorate across the Carnatic and Deccan, placing French-backed princes on thrones and collecting grants of territory in return. At its peak in 1750, Pondicherry was constitutionally the capital of the Deccan.\n\nIn 1754 the Company made its decision: recall Dupleix, send Godeheu to negotiate peace, return to commerce. It was rational from a shareholder perspective and catastrophic from every other one. The British drew no equivalent restraint on themselves. In 1769, unable to sustain profitable ventures through decades of war, the Compagnie was absorbed by the French crown. France then governed its Indian comptoirs directly, but the moment was gone. This street remembers the institution that built the city and chose not to keep the empire.",
    notable: [
      "The only street in the grid named for an institution rather than a person. Before Dupleix and Suffren and Bussy, there was a balance sheet. This street acknowledges that.",
      "The Company recalled Dupleix in 1754. The British, under Clive, drew no equivalent restraint on themselves. That asymmetry is why you are in an Indian Union Territory and not in French India.",
      "Colbert founded the Compagnie in 1664. The French crown absorbed it in 1769. In 105 years it created Pondicherry, sustained it, and outlived its own usefulness. France then governed directly, but too late.",
      "The Company's logic was commercial. Dupleix's logic was imperial. They were irreconcilable. The Company won the argument and lost the empire.",
    ],
  },
  {
    id: "rue-dumont-durville",
    metaTitle: "Rue Dumont d'Urville, Explorer's Street in White Town",
    metaDescription: "Named after the French naval explorer of Antarctica. The historic Cercle de Pondichéry stands on this White Town street.",
    photo: "generic.jpg",
    name: "Rue Dumont d'Urville",
    axis: "E-W",
    namedAfter: "Jules Dumont d'Urville, French naval explorer",
    dates: "1790–1842",
    lat: 11.9358,
    lng: 79.8330,
    summary:
      "Welcome to Rue Dumont d'Urville, named after the French naval explorer who mapped Antarctica, named a continent for his wife, and died in one of France's first railway disasters. He never came to Pondicherry. His street is here because French colonial cities named streets after French naval heroes. The Cercle de Pondichéry, the White Town's historic social club, is on this street.",
    history:
      "You are walking on a street named after a man who went as far from here as it is possible to go. Jules Sébastien César Dumont d'Urville (1790–1842) commanded two voyages of exploration: one through the Pacific (1826–1829) and one to Antarctica (1837–1840), during which he landed on the ice shelf, planted the French flag, and named the territory Adélie Land after his wife Adèle. He returned a hero. Two years later he died in the Versailles railway disaster of 8 May 1842, one of the earliest and deadliest train crashes in French history.\n\nHe had no connection to Pondicherry. His name is on this street because French colonial towns systematically named streets after naval figures: it embedded metropolitan institutional pride in the urban fabric and connected local civic life to a global network of French achievement. D'Urville's voyages placed Pondicherry, symbolically, in a world that stretched from the Coromandel Coast to the South Pole.\n\nThe Cercle de Pondichéry, the historic social club of the White Town's French and renonçant elite, is on this street. Card games, billiards, newspapers from France, dinner parties: the Cercle was where colonial Pondicherry came to feel Parisian for an evening. Two very different kinds of French ambition on the same street: the explorer who reached Antarctica and the club that never wanted to leave home.",
    notable: [
      "Adélie Land in Antarctica is named after his wife Adèle. He named it during his 1837–1840 voyage. Adélie penguins are also named after her, indirectly. One woman's name is now on a continent and a species.",
      "He died in the Versailles railway disaster of 8 May 1842. One of France's first major train crashes. He survived Antarctica and died on the Paris-Versailles line.",
      "The Cercle de Pondichéry is on this street: the historic social club of the White Town. If it is open, go in. The building alone is worth it.",
      "D'Urville had no connection to Pondicherry. His presence in the street grid represents France as a global naval power rather than France as a local colonial administrator.",
    ],
  },
  {
    id: "rue-dupleix",
    metaTitle: "Jawaharlal Nehru Street, Former Rue Dupleix White Town",
    metaDescription: "The main east-west axis of White Town, carrying the legacy of Dupleix and the India that later absorbed French Pondicherry.",
    photo: "rue-dupleix.jpg",
    name: "Jawaharlal Nehru Street",
    altName: "ex-Dupleix Street",
    axis: "E-W",
    namedAfter: "Joseph François Dupleix, Governor-General 1742–1754",
    dates: "1697–1763",
    lat: 11.9353,
    lng: 79.8339,
    summary:
      "You are on Jawaharlal Nehru Street, the main east-west axis of the White Town and the busiest shopping street in Pondicherry. The French name was Rue Dupleix, and older Pondicherrians sometimes still call it that. It carries the weight of two histories: the French governor who nearly made this city the capital of an empire, and the Indian prime minister who built the country that absorbed it.",
    history:
      "You are walking on a street with two names, and both matter. The official name is Jawaharlal Nehru Street. The old French name was Rue Dupleix, and you may still hear older residents use it. Between them they tell you most of what you need to know about Pondicherry.\n\n[Joseph François Dupleix](/history/lives-and-legacies/dupleix) arrived as Governor-General in January 1742 and for twelve years ran the most ambitious European project in eighteenth-century India: a protectorate over the Carnatic and Deccan, backing Indian succession candidates with French troops, French-trained sepoys, and French political recognition. At its peak in 1750, Pondicherry was the constitutional capital of the Deccan. His own company fired him in October 1754. He died in Paris on 13 November 1763, broke, on the same day the Treaty of Paris formally ended French territorial ambitions in India.\n\nToday this street is Pondicherry's commercial main artery: textile shops, jewellers, sari stores, pharmacies, restaurants, street food. The man who wanted territorial sovereignty over south India has his memory on a shopping street. Walk east to the seafront and you find three statues on the Promenade: Dupleix, Gandhi, Nehru. Colonial ambition, independence, and the republic that followed. The same boulevard. Nobody planned it that way. It happened anyway.",
    notable: [
      "This is Pondicherry's main shopping street. Textiles, jewellery, saris, pharmacies, street food. If you need anything, you will find it here.",
      "The Promenade at the eastern end of this street has three statues: Dupleix, Gandhi, and Nehru. The man who tried to keep India French, the man who made Britain leave, and the man who built the republic that absorbed Pondicherry. Walk there.",
      "At his peak in 1750, Dupleix held Mughal imperial authority over all of south India from the Krishna River to Cape Comorin. The grant was made in Pondicherry, in the palace one block north of this street.",
      "Older Pondicherrians sometimes still call this Dupleix Street. The name changed; the memory didn't.",
    ],
  },
  {
    id: "rue-mahe-de-la-bourdonnais",
    metaTitle: "Rue Mahé de La Bourdonnais, Madras Victory Street",
    metaDescription: "Named after the commander who captured Madras in 1746, the greatest French military victory in India, before it was traded back.",
    photo: "rue-mahe-de-labourdonnais.jpg",
    name: "Rue Mahé de La Bourdonnais",
    axis: "N-S",
    namedAfter: "Bertrand-François Mahé de La Bourdonnais, naval commander",
    dates: "1699–1753",
    lat: 11.9319,
    lng: 79.8344,
    summary:
      "Welcome to Rue Mahé de La Bourdonnais, named after the naval commander who captured Madras in 1746, the greatest French military victory in India. France then traded Madras back to the British in exchange for Louisbourg, in Canada. The largest island of the Seychelles, the Malabar town of Mahé, and this street all bear his name. The victory survives in geography. India did not speak French.",
    history:
      "You are walking on a street named after a man whose victory France gave away. [Bertrand-François Mahé de La Bourdonnais](/history/lives-and-legacies/la-bourdonnais) (1699–1753) was born in Saint-Malo, the Breton port that produced generations of sailors and corsairs. As Governor of Île de France (Mauritius) and Île Bourbon (Réunion), he assembled largely from his own resources the naval squadron that changed the course of Indian history.\n\nIn September 1746, he bombarded Madras and defeated the British garrison. Fort St George fell. The British East India Company's most important settlement on the Coromandel Coast was in French hands. Indian rulers watching the contest took notice. With Madras and Pondicherry together, France would have controlled the entire southern Coromandel seaboard. The history of South India might have been written in French.\n\nIt was not. La Bourdonnais offered the British lenient surrender terms, and Dupleix disputed this furiously. But the larger decision was made in Paris, not Pondicherry. The Treaty of Aix-la-Chapelle (1748), which ended the War of Austrian Succession, returned Madras to Britain in exchange for Louisbourg, a fortress in Cape Breton, Canada. France chose Canada. South India stayed British.\n\nLa Bourdonnais returned to France and was imprisoned in the Bastille, caught in the fallout from his dispute with Dupleix. Acquitted in 1748, his health broken, he died aged 54 in 1753 still writing his memoirs. His name now appears on the Malabar town of Mahé, on the largest island of the Seychelles, and on this street. The victory is in the geography. India speaks Tamil and English.",
    notable: [
      "Mahé (Mayyazhi), the French comptoir on the Malabar Coast in Kerala, is named after him. It is still part of the Union Territory of Pondicherry today, 1,400 km from here.",
      "The largest island of the Seychelles is called Mahé. He named his way across the Indian Ocean. Three places on different continents bear his name.",
      "France traded Madras back to Britain in 1748, in exchange for Louisbourg in Canada. France chose Canada. If they had kept Madras, the whole of South India might be speaking French today.",
      "He was imprisoned in the Bastille on his return to France. Acquitted. Health broken. Dead at 54. The man who delivered France its greatest Indian victory was destroyed by it.",
    ],
  },
  {
    id: "rue-capitaine-marius",
    metaTitle: "Rue Capitaine Marius, French Indian Officer Street",
    metaDescription: "Named after a Tamil officer of the French Colonial Infantry from Reddiarpalayam, identified through the pedestal of his statue.",
    photo: "generic.jpg",
    name: "Rue Capitaine Marius",
    axis: "N-S",
    namedAfter: "Captain François Marius Xavier, Tamil officer of the French Colonial Infantry from Reddiarpalayam",
    lat: 11.9309,
    lng: 79.8312,
    summary:
      "Welcome to Rue Capitaine Marius, named after a Tamil officer of the French Colonial Infantry who was born just down the road in Reddiarpalayam. For decades, historians could not identify him. Then someone read the pedestal of his statue very carefully.",
    history:
      "Captain François Marius Xavier was born in Reddiarpalayam, the neighbourhood immediately south of the White Town. In his day it was known as 'Little Saigon': so many people from Reddiarpalayam had enlisted in the French Colonial Infantry or entered the administration of French Indochina that the name stuck. Xavier was one of them. He rose to the rank of Captain and died in French service.\n\nHis name is carved on the French War Memorial on Beach Road, alongside every other soldier from Pondicherry killed in France's wars. It also appears on a memorial board inside the Pondicherry Municipality building. A statue of him stands off Villianur Main Road in Reddiarpalayam, his home neighbourhood, with his name on the pedestal: hard to read, but decipherable with patience.\n\nFor a long time, the street name 'Capitaine Marius' seemed like a dead end. No file, no regiment number, no date of death in the written record. It was a post by the Comptoirs de l'Inde association that finally connected the statue to the street name and gave the captain back his full name and his story. The White Town remembered him. Reddiarpalayam remembered him. The historians just had to catch up.",
    notable: [
      "His full name: Captain François Marius Xavier, born in Reddiarpalayam, south of the White Town.",
      "Reddiarpalayam was called 'Little Saigon' because so many of its men served in French Indochina. Xavier was one of them.",
      "His name is carved on the French War Memorial on Beach Road. Look for it when you visit the Promenade.",
      "A statue of him stands in Reddiarpalayam, off Villianur Main Road. His name is on the pedestal, hard to read but there.",
      "For years historians could not identify him. A post by the Comptoirs de l'Inde association finally cracked it.",
    ],
  },
  {
    id: "rue-bussy",
    metaTitle: "Rue Bussy, Dupleix's Lieutenant Street in White Town",
    metaDescription: "Named after Dupleix's most gifted lieutenant, who ruled Hyderabad for France, was captured at Wandiwash, and returned decades later.",
    photo: "rue-bussy.webp",
    name: "Rue Bussy",
    axis: "E-W",
    namedAfter: "Charles Joseph Patissier, Marquis de Bussy-Castelnau, Dupleix's lieutenant and later Governor-General",
    dates: "1718–1785",
    lat: 11.9279,
    lng: 79.8327,
    summary:
      "Welcome to Rue Bussy, named after Dupleix's most gifted lieutenant: the man who spent eight years running the French protectorate at Hyderabad with a handful of troops, was captured at Wandiwash, returned to Europe, and then came back twenty-one years later to fight the British again as Governor-General. He died in this city in 1785. One man, two completely different French Indian careers.",
    history:
      "Charles Joseph Patissier, Marquis de Bussy-Castelnau (1718-1785) was [Dupleix](/history/lives-and-legacies/dupleix)'s right hand in the Deccan. From 1750 to 1758, he maintained a small French force at the court of the Nizam of Hyderabad, making French bayonets the indispensable support of local power. In 1753 he extracted the Northern Circars, four coastal districts, from the Nizam as territorial grants: France's largest claimed revenue base in India. He did it with never more than a few thousand men.\n\nWhen Lally ordered him south to concentrate forces in the Carnatic in 1758, Bussy objected. He was right: the moment he left Hyderabad, the French position there collapsed. He was captured at Wandiwash on 22 January 1760 alongside Lally's broken army, spent years as a British prisoner, and eventually returned to France.\n\nThen came Act Two. In 1781, twenty-one years after Wandiwash, [Bussy](/history/lives-and-legacies/charles-de-bussy) returned to Pondicherry as Governor-General. He was not done. His two years in command were spent in continuous warfare against the British, part of the same conflict that brought Suffren's fleet to fight offshore. A shaky peace was established in 1783. Bussy did not leave. He stayed in Pondicherry and died here on 7 January 1785, in the city he had twice served and once helped make the centre of France's most ambitious Indian enterprise.",
    notable: [
      "His full name: Charles Joseph Patissier, Marquis de Bussy-Castelnau. He served French India twice, thirty years apart.",
      "Eight years at Hyderabad with a few thousand men. He extracted the Northern Circars from the Nizam in 1753: four coastal districts France claimed as its own.",
      "Captured at Wandiwash, 22 January 1760. Released in Europe. Most men would have stayed. Bussy came back.",
      "He returned as Governor-General in 1781, twenty-one years after Wandiwash, and spent two more years fighting the British.",
      "He died in Pondicherry on 7 January 1785. The city was the beginning and the end of his story.",
    ],
  },
  {
    id: "rue-victor-simonnel",
    metaTitle: "Rue Victor Simonnel, Verdun Hero Street in White Town",
    metaDescription: "One of White Town's busiest streets, named after a Pondicherry soldier killed at Verdun in 1917, with hospitals and the Lycée Français.",
    photo: "rue-victor-simonel.png",
    name: "Rue Victor Simonnel",
    axis: "N-S",
    namedAfter: "Victor Simonnel, soldier from Pondicherry killed at Verdun in the First World War",
    lat: 11.9313,
    lng: 79.8335,
    summary:
      "Welcome to Rue Victor Simonnel, one of the busiest streets in the White Town. It runs north to south from Ananda Rangapillai Street to Rue Bussy, and along the way you pass the General Hospital, the Maternity Hospital, the Legislative Assembly, St. John's Church, and the Lycée Français. The European Cemetery is here too. Victor Simonnel was a soldier from Pondicherry killed at Verdun in 1916. His street did not stay quiet.",
    history:
      "Rue Victor Simonnel may be named after a soldier of the First World War, but it has become one of the most institutionally dense streets in the city. The Pondicherry General Hospital and the Maternity Hospital draw patients and families from across the territory every day, and the pavement around them is lined with tea stalls and small shops: the informal economy that surrounds any major public hospital anywhere in India. In the middle of the street sits the Pondicherry Legislative Assembly, the seat of the Union Territory's government. St. John's Church, belonging to the Church of South India, stands nearby. The Lycée Français, the French school that has educated generations of the Franco-Pondicherrian community, is on this same street.\n\nAt the northern end, the European Cemetery has stood since around 1700. It is what one observer called the 'silent directory' of French India: where the paper archives were scattered across Aix-en-Provence, Paris, and Pondicherry, the tombstones stayed put. Governors, engineers, missionaries, merchants, and soldiers are buried here. The oldest graves, in coral stone, hold the first generation of French colonial builders. The nineteenth-century tombs are the most elaborate: marble sarcophagi, neo-Gothic iron railings, obelisks. The 1761 British destruction of Pondicherry interrupted the cemetery's maintenance, and the oldest stones show it.\n\n[Victor Simonnel](/history/lives-and-legacies/victor-simonel) was a Pondicherrian who died at Verdun. His name is carved on the French War Memorial on Beach Road. A separate bishops' cemetery at the Cathedral on Rue Dumas holds three hundred years of MEP clergy.",
    notable: [
      "Pondicherry General Hospital and Maternity Hospital are on this street. The pavement around them fills every morning with patients, families, and tea stalls.",
      "The Pondicherry Legislative Assembly is here: the seat of the Union Territory's elected government.",
      "The Lycée Français on this street has educated the Franco-Pondicherrian community for generations. It is still a functioning French school.",
      "St. John's Church (Church of South India) is also on this street: a reminder that not all of Pondicherry's Christian heritage is Catholic or French.",
      "The European Cemetery: active since around 1700. Three centuries of French colonial society buried in one walled enclosure. The 'silent directory' of French India.",
      "Victor Simonnel was killed at Verdun in the First World War. His name is also on the War Memorial on Beach Road.",
    ],
  },
  {
    id: "marine-street",
    metaTitle: "Marine Street, Ashram Street of White Town Pondicherry",
    metaDescription: "Named after the French navy that connected Pondicherry to France. The Sri Aurobindo Ashram stands on this historic street.",
    photo: "generic.jpg",
    name: "Marine Street",
    altName: "Rue de la Marine",
    axis: "N-S",
    namedAfter: "La Marine, the French navy: the institution that sustained Pondicherry's connection with France across three centuries of ocean",
    lat: 11.9365,
    lng: 79.8350,
    summary:
      "Welcome to Marine Street, named after the French navy that sustained Pondicherry's connection with France across three centuries of ocean. The Sri Aurobindo Ashram, the largest spiritual community in the White Town and one of the most significant in all of India, is on this street.",
    history:
      "The name Marine runs through the White Town's street grid as a reminder that French Pondicherry lived by the sea. There was no natural harbour on the Coromandel Coast; every soldier, official, and cargo that arrived here came through the surf by small boat. The navy was not optional. The name on this street honours that dependence.\n\nThe building you see is part of the [Sri Aurobindo Ashram](/discover/landmarks/ashram), formally established on 24 November 1926. [Sri Aurobindo](/history/lives-and-legacies/sri-aurobindo) arrived in Pondicherry on 4 April 1910, having fled British India after his acquittal in the Alipore Conspiracy case. He chose French territory deliberately: the British could not pursue him across the colonial frontier. French authorities, under an informal understanding, did not act against him.\n\nHe spent the next forty years here, developing what he called Integral Yoga: not a withdrawal from the world but a transformation of human consciousness toward what he described as a supramental awareness. He worked with [Mirra Alfassa](/history/lives-and-legacies/mirra-alfassa), a Paris-born artist known as The Mother, who co-founded the Ashram with him in 1926 and ran it until her death in 1973.\n\nFrom 24 November 1926, Sri Aurobindo did not leave his quarters. He communicated through letters, guided thousands of disciples in an enormous correspondence, and worked on Savitri, the epic poem he considered his central work. He died on 5 December 1950. His samadhi in the main Ashram courtyard draws hundreds of thousands of visitors every year.\n\nThe Ashram is the largest single institutional presence in the White Town. It owns significant property, operates schools, a library and workshops, and runs Le Café on the Promenade. Its presence shaped modern Pondicherry as profoundly as any French governor.",
    notable: [
      "Sri Aurobindo arrived in Pondicherry on 4 April 1910, fleeing British India. He chose French territory deliberately: the British could not extradite him across the colonial frontier.",
      "The Ashram was formally established on 24 November 1926. Sri Aurobindo went into seclusion that day and did not leave his quarters until his death on 5 December 1950.",
      "Mirra Alfassa, The Mother, was born in Paris in 1878. She co-founded the Ashram, ran it from 1926 until her death in 1973 at the age of 95.",
      "Sri Aurobindo's samadhi (tomb) is in the main Ashram courtyard. It receives hundreds of thousands of visitors every year.",
      "Sri Aurobindo ranked 11th out of 250 in the Indian Civil Service written examination. He deliberately failed the horse-riding practical to avoid the posting. He ended up founding a spiritual community in French India instead.",
    ],
  },
  {
    id: "st-gilles-street",
    metaTitle: "St. Gilles Street, Colonial Homes in White Town",
    metaDescription: "A quiet White Town street lined with trees, colonial houses, shuttered facades, and walled gardens.",
    photo: "generic.jpg",
    name: "St. Gilles Street",
    altName: "Rue Saint-Gilles",
    axis: "E-W",
    namedAfter: "Saint Aegidius (Saint Gilles, c.640-710 AD), Provençal hermit and one of the Fourteen Holy Helpers of medieval Catholic tradition",
    lat: 11.9371,
    lng: 79.8343,
    summary:
      "Welcome to St. Gilles Street, named after Saint Aegidius, the Provençal hermit who became one of the most popular saints of medieval France. This is one of the quieter corners of the White Town: lined with trees and beautiful colonial houses, their shuttered facades and walled gardens the kind of scene that makes Pondicherry unlike any other city in India.",
    history:
      "Saint Gilles (Saint Aegidius, c.640-710 AD) was a hermit who settled in the forests of Provence and became one of the Fourteen Holy Helpers, the group of Catholic saints invoked against various calamities. His cult spread across France and beyond. In Pondicherry, as in every French colonial town, Catholic saints' names were woven into the street grid alongside the governors and admirals, reflecting the Church's role as the second great institution of the comptoir after the trading company itself.\n\nThis street is not one of the grand commemorative axes of the White Town. It has no statue, no famous institution, no battlefield name. What it has is what the best streets in this part of Pondicherry often have: shade, quiet, and architecture. The colonial houses here follow the Franco-Tamil tradition: high compound walls in Pondicherry ochre and yellow, arched gateways, high-ceilinged rooms designed for the Coromandel heat, internal courtyards with wells. The trees along the street close overhead. In a city that is often crowded and loud, this is somewhere to slow down.",
    notable: [
      "Named after Saint Aegidius (Saint Gilles, c.640-710 AD), a Provençal hermit and one of the Fourteen Holy Helpers of medieval Catholic tradition.",
      "In a grid named mostly after admirals and governors, Saint Gilles is a reminder that the Catholic Church was the other great institution of French India. Saints and soldiers share the same street map.",
      "The houses here are Franco-Tamil architecture: ochre compound walls, arched gateways, high-ceilinged rooms built for the heat. Look for the shuttered windows and internal courtyards.",
      "One of the quietest streets in the White Town. No statue, no grand institution. Trees, shade, and three hundred years of colonial architecture.",
    ],
  },
  {
    id: "bazar-saint-laurent",
    metaTitle: "Bazar Saint Laurent Street, Market Street of White Town",
    metaDescription: "A colourful former market street running parallel to Rue Bussy, named after Saint Laurent, the Roman deacon martyred in 258 AD.",
    photo: "generic.jpg",
    name: "Bazar Saint Laurent Street",
    altName: "Rue Bazar Saint-Laurent",
    axis: "E-W",
    namedAfter: "Saint Lawrence (Saint Laurent, 225-258 AD), Christian martyr; 'Bazar' indicates this was a market street",
    lat: 11.9276,
    lng: 79.8331,
    summary:
      "Welcome to Bazar Saint Laurent Street, one of the most colourful streets in the White Town. 'Bazar' tells you what this street was: a market, the commercial layer of the colonial city running parallel to the grand commemorative axis of Rue Bussy just to the north. Saint Laurent was a deacon martyred in Rome in 258 AD. He was burned on a gridiron. His last words, reportedly, were: turn me over, I am done on this side.",
    history:
      "Saint Lawrence (Saint Laurent in French, 225-258 AD) was a deacon of the early Christian church in Rome, executed during the persecution of the Emperor Valerian. The manner of his death, burned alive on a gridiron, made him one of the most venerated martyrs of the Western church and, according to legend, one of the most stoical: he reportedly told his executioners to turn him over because he was done on one side. He became the patron saint of cooks, among others.\n\nIn Pondicherry, his name was given to a bazar street: the market layer of the White Town grid, running parallel to Rue Bussy. The word bazar in the colonial city meant exactly what it means today: a commercial street, a place of trade, colour, and noise. While the grand E-W axes of the White Town carried the names of governors and admirals, the market streets carried the names of saints, a reminder that the Church and the Company built this city together and that French colonial urbanism wove Catholic devotion into the street grid as naturally as it wove military commemoration.\n\nThe Grand Bazaar was the commercial heart of old Pondicherry: Ananda Rangapillai's house faced it, and his diary records the gossip, prices, and anxieties of a market that connected the European quarter to the Tamil trading world west of the canal. Today Bazar Saint Laurent is one of the most visually rewarding streets in the White Town: the buildings are painted in the bright yellows, greens, and pinks that make this part of Pondicherry look like nowhere else in India. Worth a slow walk.",
    notable: [
      "Saint Laurent was burned on a gridiron in Rome in 258 AD. He reportedly told his executioners to turn him over because he was done on one side. He is the patron saint of cooks.",
      "The word 'bazar' tells you what this street was: a market. Commerce, colour, and noise, running parallel to the grand military axis of Rue Bussy just to the north.",
      "The Grand Bazaar was the commercial heart of Pondicherry. Ananda Rangapillai's house faced it. His diary records the prices, gossip, and anxieties of a market that connected the White Town to the Tamil quarter.",
      "The buildings on this street are painted in bright yellows, greens, and pinks. One of the most colourful walks in the White Town.",
      "In a grid named mostly after soldiers and governors, Saint Laurent is a reminder that the Catholic Church was the other great institution of French India. Saints and admirals share the same map.",
    ],
  },
  {
    id: "caserne-street",
    metaTitle: "Caserne Street, French Barracks Street in White Town",
    metaDescription: "Named after the military barracks that housed the soldiers of French India through sieges, occupations, and two centuries of empire.",
    photo: "rue-de-la-caserne.jpg",
    name: "Caserne Street",
    altName: "Rue de la Caserne",
    axis: "E-W",
    namedAfter: "La Caserne (the barracks), the military garrison of French colonial Pondicherry",
    lat: 11.9310,
    lng: 79.8353,
    summary:
      "Welcome to Caserne Street. Caserne is French for barracks. This small street is named after the military garrison that housed the soldiers of French India through four British sieges, three occupations, and two centuries of imperial ambition. The men who held Pondicherry, and the men who surrendered it, were quartered here.",
    history:
      "Rue de la Caserne was one of the original streets of the White Town grid, named after the barracks of the French colonial garrison. The garrison was the physical foundation of the French presence in India: without soldiers, there was no comptoir, no governor, no trading empire. The barracks housed the European infantry, the artillerymen who manned the fort's guns, and the officers who commanded the Indian sepoys trained in European military discipline.\n\nThe garrison's record in Pondicherry was one of remarkable resistance and repeated defeat. The city was besieged and taken by the British in 1748, returned under the Treaty of Aix-la-Chapelle. Besieged again in 1760-1761, surrendered in January 1761 after fourteen months, then razed to the ground. Taken again in 1778 after ten weeks of resistance under Bellecombe, returned in 1783. Taken once more in 1793 during the French Revolutionary Wars. Each time, the men of the Caserne held as long as they could and then marched out under terms.\n\nThe barracks that gave the street its name are long gone, replaced by the colonial houses and quiet lanes of the modern White Town. But the name remains: a small street between La Bourdonnais and Surcouf, carrying the memory of the garrison that was the armed argument for French India's existence.",
    notable: [
      "Caserne means barracks. This street is named after the military garrison that was the armed foundation of French colonial Pondicherry.",
      "Rue de la Caserne was one of the original streets of the White Town grid, named in the early colonial period alongside Rue de la Marine and Rue Dumas.",
      "The garrison defended Pondicherry through four British sieges: 1748, 1761, 1778, and 1793. They held as long as they could each time, and surrendered when they had to.",
      "After the 1761 siege, the British systematically demolished the barracks along with the rest of the White Town. What was rebuilt was never quite the same.",
      "A small street with a large military history. The barracks are gone. The name stayed.",
    ],
  },
  {
    id: "st-ange-street",
    metaTitle: "Rue Saint Ange, Crossroads Street of White Town",
    metaDescription: "A street linking the cathedral, the Tamil quarter, and White Town, named after the Carmelite martyr Saint Ange.",
    photo: "generic.jpg",
    name: "Rue Saint Ange",
    axis: "E-W",
    namedAfter: "Saint Ange (Angelo of Jerusalem, c.1185-1225), Carmelite priest and martyr killed in Licata, Sicily",
    dates: "c.1185–1225",
    lat: 11.9327,
    lng: 79.8325,
    summary:
      "Welcome to Rue Saint Ange, a street that crosses boundaries. It runs from the Cathedral in the old town, cuts through the Tamil quarter past Ambour Salai and Gingee Salai, and enters the White Town. The saint it is named after was a Carmelite monk born in Jerusalem, ordained in Rome, sent to Sicily, and killed by five sword blows from an incestuous nobleman whose mistress he had converted. He died in 1225. The street that bears his name still crosses worlds.",
    history:
      "Saint Ange was born in Jerusalem, probably into a Jewish family that had converted to Christianity. At eighteen he entered the Carmelite order on Mount Carmel, the mountain in Palestine sanctified by the Prophet Elijah and the founding place of the Carmelite tradition. He was ordained a priest, sent to Rome to defend his order's interests and secure confirmation of its Rule, and then dispatched to Sicily to preach among the Cathars.\n\nOn a day he was preaching at the church of Saint Jacques in Licata, Sicily, around 1225, he was killed: five sword blows from a local lord whose mistress he had converted to a more penitent life. The lord was described as incestuous. The motive was personal rather than doctrinal. He died a martyr, the Church declared, because he was killed for speaking Christian truth to a powerful man who did not want to hear it.\n\nLater hagiography improved the story considerably: stopping the Jordan river, encountering Christ in person, and other extraordinary episodes were added in the Carmelite breviary. Veneration is not always the friend of historical precision. The honest record is simpler and in some ways more striking: a Carmelite from Jerusalem, killed in a Sicilian church in 1225 by a man who objected to his preaching.\n\nThe street named after him is itself a kind of boundary crossing: starting at the Cathedral, it cuts through the Tamil quarter, crosses Ambour Salai and Gingee Salai, and arrives in the White Town. For three hundred years, this was one of the routes between the French city and the Indian city that surrounded it.",
    notable: [
      "Saint Ange was born in Jerusalem, became a Carmelite on Mount Carmel at eighteen, was ordained in Rome, and was killed in Sicily around 1225. Three continents, one life.",
      "He was killed by five sword blows from a local lord whose mistress he had converted. The Church counted this as martyrdom. The lord presumably disagreed.",
      "Later hagiography added miracles: stopping the Jordan, meeting Christ in person. One of his fellow Carmelites felt the true story was not quite spectacular enough. It was.",
      "The street runs from the Cathedral through the Tamil quarter and into the White Town: a boundary-crossing street, connecting two cities that always lived side by side.",
      "Ambour Salai and Gingee Salai, the Tamil streets this road crosses, are named after towns in the Tamil interior. Saint Ange connects Jerusalem, Sicily, and the Tamil Nadu hinterland in one short walk.",
    ],
  },
  {
    id: "surcouf-street",
    metaTitle: "Surcouf Street, Privateer Street Leading to the Beach",
    metaDescription: "Named after Robert Surcouf, the French privateer who attacked British East India Company shipping in the Indian Ocean.",
    photo: "rue-surcouf.jpg",
    name: "Surcouf Street",
    altName: "Rue Surcouf",
    axis: "E-W",
    namedAfter: "Robert Surcouf (1773-1827), French privateer from Saint-Malo who raided British East India Company shipping in the Indian Ocean",
    dates: "1773–1827",
    lat: 11.9299,
    lng: 79.8336,
    summary:
      "Welcome to Surcouf Street, named after Robert Surcouf, the French privateer from Saint-Malo who terrorised British East India Company shipping in the Indian Ocean during the Napoleonic Wars. He never set foot in Pondicherry, but he sailed these waters. The street that carries his name leads you straight to the beach, past guesthouses and restaurants that make it one of the most pleasant corners of the White Town.",
    history:
      "Robert Surcouf (1773-1827) was born in Saint-Malo, the Breton port that produced more privateers than anywhere else in France. He went to sea at thirteen and by his mid-twenties was commanding his own vessels in the Indian Ocean, preying on British merchant shipping under letters of marque from the French government. His base was the Île de France (now Mauritius), his hunting ground the Bay of Bengal and the sea lanes between India and Europe.\n\nHis most celebrated action came in October 1800, when he captured the Kent, a heavily armed British East India Company vessel of 38 guns carrying 437 men. Surcouf's corvette La Confiance mounted 18 guns and carried 200. He took her anyway, in a boarding action that became famous across France. When a captured British officer reportedly told him that the French fight for money while the English fight for honour, Surcouf replied: each man fights for what he lacks most.\n\nHe retired from privateering in 1807 and returned to Saint-Malo, where he became a successful merchant and shipowner. He died in 1827, celebrated as the King of Corsairs. He never came to Pondicherry, but he sailed the same waters that lapped this shore, raided the same Company whose trading empire this city once challenged, and earned a street in a French colonial town that understood exactly what he represented.\n\nToday this is one of the most pleasant streets in the White Town: a short run lined with guesthouses and restaurants, leading you east toward the beach and the Promenade.",
    notable: [
      "Robert Surcouf was born in Saint-Malo in 1773, went to sea at thirteen, and became France's most celebrated privateer in the Indian Ocean.",
      "His most famous capture: the Kent, a British East India Company vessel of 38 guns and 437 men, taken by his 18-gun corvette in 1800. He boarded her with 200 men.",
      "When a captured British officer said the French fight for money and the English for honour, Surcouf replied: each man fights for what he lacks most.",
      "He never came to Pondicherry. His street is here because he sailed the same waters, raided the same Company, and embodied the French maritime spirit the White Town celebrated.",
      "The street leads east to the beach. Follow it to the end for the Promenade and the Bay of Bengal.",
    ],
  },
  {
    id: "rue-de-leveche",
    metaTitle: "Rue de l'Évêché, Bishop's Lane in White Town",
    metaDescription: "One of White Town's smallest streets, named after the Catholic bishopric established by MEP missionaries in the 1670s.",
    photo: "rue-de-leveche.jpg",
    name: "Rue de l'Évêché",
    altName: "Bishop's Lane",
    axis: "E-W",
    namedAfter: "The Évêché (bishop's palace), seat of the Catholic Diocese of Pondicherry",
    lat: 11.9292,
    lng: 79.8334,
    summary:
      "Welcome to Rue de l'Évêché, one of the smallest streets in the White Town. Évêché means bishop's palace in French. This short lane takes its name from the Catholic bishopric of Pondicherry, whose roots go back to the MEP missionaries who arrived here in the 1670s, almost as early as the French themselves.",
    history:
      "The Missions Étrangères de Paris established the Catholic mission in Pondicherry from the early years of the French settlement, arriving in 1674 alongside the first French traders. For three centuries the MEP maintained the Church's presence in French India: building churches, running schools, burying the dead in the cathedral cemetery on Rue Dumas, and in time establishing the episcopal hierarchy that this street commemorates.\n\nThe Apostolic Vicariate of Pondicherry was created in 1776, giving the territory its own bishop. It was elevated to a full diocese in 1886. The évêché, the bishop's palace and administrative seat, gave its name to this lane, which sits between the canal and Rue Victor Simonnel in the quieter western edge of the White Town grid.\n\nIt is a small street. Not every street in a colonial city is named after a battle or a governor. Some are named for the institutions that held the fabric of daily life together: the company, the church, the bishop's house at the end of a quiet lane.",
    notable: [
      "Évêché means bishop's palace. The street is named after the seat of the Catholic Diocese of Pondicherry.",
      "The MEP (Missions Étrangères de Paris) arrived in Pondicherry in 1674, the same year as the first French settlement. The Church and the Company built this city together.",
      "The Apostolic Vicariate of Pondicherry was created in 1776. The diocese was elevated in 1886. Three hundred years of Catholic episcopal history in one small street name.",
      "One of the smallest streets in the White Town, tucked between the canal and Rue Victor Simonnel. The name is bigger than the street.",
    ],
  },
  {
    id: "rue-baslieu",
    metaTitle: "Rue Baslieu, Charity Legacy Street in White Town",
    metaDescription: "Named after a wealthy settler who left his fortune to Pondicherry's poor children and widows, only for the Company to go bankrupt.",
    photo: "rue-baslieu.jpg",
    name: "Rue Baslieu",
    axis: "N-S",
    namedAfter: "Baslieu, wealthy settler who bequeathed his fortune to the poor children and widows of Pondicherry",
    lat: 11.9292,
    lng: 79.8326,
    summary:
      "Welcome to Rue Baslieu, named after a wealthy settler who died just before the Seven Years War with no children and a plan. He left his entire fortune to the poor children and widows of Pondicherry. The money went to the Compagnie des Indes for safekeeping. The Company went bankrupt. The beneficiaries waited fifteen years.",
    history:
      "Baslieu was a wealthy French settler in Pondicherry who died around 1755, just before the Seven Years War that would destroy the city he had lived in. He had no children. He decided his fortune should go to the poor children and widows of Pondicherry: a private act of philanthropy in a colonial town where no public welfare system existed.\n\nHe placed the money with the Compagnie des Indes, the French East India Company that ran the colony and seemed, at the time, the safest institution in French India. It was not. The Company suspended payments in 1764 and was absorbed by the French crown in 1769. Baslieu's legacy was caught inside a bankrupt institution. The poor children and widows he had intended it for waited more than fifteen years before the money finally reached them.\n\nBy then, Pondicherry itself had been razed to the ground by the British in 1761, rebuilt, besieged again in 1778, and returned to France in 1783. The city that Baslieu had known no longer existed. His money, slowly working its way through the wreckage of the Company's finances, arrived in a very different Pondicherry than the one he had meant it for.",
    notable: [
      "Baslieu died around 1755 with no children and left his entire fortune to the poor children and widows of Pondicherry. The street is his memorial.",
      "He deposited the money with the Compagnie des Indes for safekeeping. The Company suspended payments in 1764 and was absorbed by the French crown in 1769.",
      "The beneficiaries waited more than fifteen years. By the time the money arrived, the city had been razed, rebuilt, besieged again, and returned to France.",
      "No public welfare system existed in colonial Pondicherry. Baslieu's bequest was one private man's attempt to fill that gap.",
    ],
  },
  {
    id: "ananda-rangapillai",
    metaTitle: "Ananda Rangapillai Street, Dubash of French India",
    metaDescription: "Named after the chief broker of the Compagnie des Indes, whose famous Tamil diary survives in twelve volumes.",
    photo: "rue-ananda-rangapillai.jpg",
    name: "Ananda Rangapillai Street",
    axis: "E-W",
    namedAfter: "Ananda Ranga Pillai (1709-1761), dubash to Dupleix and author of the most important Indian diary of the French colonial period",
    dates: "1709–1761",
    lat: 11.9345,
    lng: 79.8325,
    summary:
      "Welcome to Ananda Rangapillai Street, named after the man who ran French India from the inside. He was not French. He was the dubash, the chief broker and interpreter of the Compagnie des Indes, the Indian without whom the French colonial machine would not have turned. He also kept a diary. Twelve volumes, in Tamil. His house, built in 1735, is still on this street.",
    history:
      "The word dubash means 'two languages' in Tamil, but the role was far more than translation. [Ananda Ranga Pillai](/history/lives-and-legacies/ananda-ranga-pillai) (1709-1761) was the essential human interface between the French and the Indian commercial and political world: he managed networks, extended credit, negotiated with local officials, gathered intelligence, and served as Dupleix's eyes and ears in the Tamil community. He served under four Governor-Generals and during Dupleix's tenure was made Diwan, councillor and chief of the Indians. He was wealthy, well-connected, and absolutely indispensable.\n\nHe was also writing everything down. His private diary, kept in Tamil and running to twelve published volumes, is the single most important Indian primary source for the French colonial period. He wrote with no European audience in mind, which means he wrote with a candour that no official document could match. When [Dupleix](/history/lives-and-legacies/dupleix) vented his fury at [La Bourdonnais](/history/lives-and-legacies/la-bourdonnais) after the capture of Madras in 1746, Pillai recorded it in direct speech. When tension gripped the bazaar before a battle, Pillai captured it. The diary covers 1736 to 1761: the entire arc of French India from its peak to its collapse.\n\nHis assessment of Dupleix's predecessors is the most-quoted passage in the historiography of French India. Of Lenoir: he enriched the earth, planted trees, enjoyed the fruit. Of Dumas: he simply devoured the produce. Of Dupleix's time: a tempest devoured the garden.\n\nPillai died in 1761, the year Pondicherry fell to the British. He witnessed everything. His diary was not translated until 1904 to 1928, when the Government of Madras published it in English. His house, a fine example of Franco-Tamil architecture built in 1735, still stands on this street.",
    notable: [
      "His house is still here. Built in 1735, it is one of the very few eighteenth-century buildings surviving in modern Pondicherry. Franco-Tamil architecture: look for it.",
      "The dubash was the essential interface between France and India. Without Pillai, the French colonial machine could not have functioned. He was not a servant. He was a partner.",
      "His diary runs to twelve volumes in Tamil. It is the only sustained Indian account of the French colonial period written from the inside.",
      "The gardener quote: Lenoir enriched the soil. Dumas ate the fruit. Under Dupleix, a tempest devoured the garden. Pillai wrote this about the men whose orders he carried out.",
      "He recorded Dupleix's private fury at La Bourdonnais after the capture of Madras in 1746: candid words no official document preserved. We know what Dupleix said in private because Pillai wrote it down in Tamil.",
      "He died in 1761, the same year Pondicherry fell. He witnessed the entire arc: the peak, the wars, the siege, the end.",
    ],
  },
  {
    id: "rue-dupuy",
    metaTitle: "Rue Dupuy, Restorer of French Pondicherry Street",
    metaDescription: "Named after Governor André Julien Dupuy, who restored French sovereignty in 1816 and rebuilt the city after British occupation.",
    photo: "rue-dupuy.jpg",
    name: "Rue Dupuy",
    axis: "E-W",
    namedAfter: "André Julien, Comte Dupuy, Governor-General of Pondicherry 1816-1825",
    dates: "1816–1825",
    lat: 11.9376,
    lng: 79.8344,
    summary:
      "Welcome to Rue Dupuy, named after the Governor who gave French Pondicherry a second beginning. André Julien, Comte Dupuy arrived in 1816 to restore French sovereignty after a generation of British occupation. He found a ruined city and a deprived population. He started clearing the rubble and laying out the boulevards that still define the outer town today.",
    history:
      "André Julien, Comte Dupuy governed Pondicherry from 1816 to 1825, arriving on behalf of Louis XVIII to make the Treaty of Paris of 1814 real: to raise the French flag, re-establish French law, and begin rebuilding a city that had been destroyed, returned, destroyed again, and left to decay.\n\nWhat he found was grim. The British had systematically demolished Pondicherry's fortifications in 1793, leaving rubble where the old city walls had stood. The population was poor and deprived. Dupuy saw in those ruins an opportunity. He began clearing them and laying out the boulevards that now form the outer ring of the modern town, transforming the demolition line of the old fortifications into new streets. The urban form of outer Pondicherry today comes from that decision.\n\nHis legal contribution was equally lasting. Dupuy applied uniform legal codes across all the French Indian settlements, replacing the patchwork of customs and precedents that had accumulated over two centuries. The legal distinctiveness that would make Pondicherry different from the surrounding territory, and attractive to renonçants and French citizens alike, was codified under his administration.\n\nHistorians remember him as generous but weak: a good man in a hard situation, rebuilding a city with limited resources and limited support from Paris. He left in 1825 with the boulevards begun, the law codified, and the French flag over a city that was, at least, recognisably French again.",
    notable: [
      "Dupuy arrived in 1816 to restore French sovereignty after a generation of British occupation. The Treaty of Paris 1814 had returned France's Indian settlements; his job was to make it real.",
      "He found Pondicherry poor, deprived, and half-ruined. The British had demolished the fortifications in 1793, leaving rubble where the old walls had stood.",
      "The boulevards of modern Pondicherry were his idea: he cleared the ruins of the fortifications and laid out new streets on the demolition line. The outer ring of the town came from that decision.",
      "He applied uniform legal codes across all French Indian settlements, replacing two centuries of accumulated custom. The legal character that still makes Pondicherry distinctive was codified under his administration.",
      "Historians called him generous but weak: a good man trying to rebuild a ruined city with insufficient resources and limited support from Paris.",
    ],
  },
  {
    id: "rue-bellecombe",
    metaTitle: "Rue Bellecombe, Siege Commander Street in White Town",
    metaDescription: "Named after the governor who defended Pondicherry for ten weeks during the 1778 British siege linked to the American War of Independence.",
    photo: "rue-bellecombe.jpg",
    name: "Rue Bellecombe",
    axis: "E-W",
    namedAfter: "Guillaume Léonard de Bellecombe, Governor-General of Pondicherry 1777-1778",
    lat: 11.9393,
    lng: 79.8340,
    summary:
      "Welcome to Rue Bellecombe, named after the Governor-General who held Pondicherry against a British siege for ten weeks in 1778 before surrendering. The siege was a side-effect of a war being fought on the other side of the world: the American War of Independence had pulled France and Britain back into conflict, and Pondicherry paid the price.",
    history:
      "Guillaume Léonard de Bellecombe arrived as Governor-General in 1777, just as France was being drawn into the American War of Independence on the side of the colonists. When France and Britain went to war in 1778, the British moved quickly to neutralise French India. Pondicherry was besieged. Bellecombe held the city for ten weeks before the military position became untenable. He surrendered. It was the third time in the 18th century that the British had taken Pondicherry by siege: 1748, 1761, and now 1778.\n\nThe pattern was becoming grimly familiar. Each time France and Britain went to war in Europe or America, the consequences arrived on the Coromandel Coast. Bellecombe's ten-week resistance was not enough to change the outcome, but it was enough to earn him a street. The city was returned to France in 1783 under the Treaty of Paris that ended the American war, the same treaty that confirmed American independence. Pondicherry's fate was being decided in rooms far from Pondicherry.",
    notable: [
      "Bellecombe was Governor-General for just one year: 1777 to 1778. He spent most of it under siege.",
      "The 1778 siege was a consequence of the American War of Independence. France allied with the American colonists; Britain retaliated in India.",
      "This was the third British siege of Pondicherry in the 18th century: 1748, 1761, and 1778. The city was returned to France each time.",
      "The Treaty of Paris 1783, which ended the American War and confirmed US independence, also gave Pondicherry back to France.",
    ],
  },
  {
    id: "avenue-goubert",
    metaTitle: "Avenue Goubert, Beach Road of White Town Pondicherry",
    metaDescription: "Pondicherry's famous 1.5 km promenade, lined with the Gandhi statue, Dupleix statue, French War Memorial, Old Lighthouse, and Raj Nivas.",
    photo: "generic.jpg",
    name: "Avenue Goubert",
    altName: "Beach Road",
    axis: "N-S",
    namedAfter: "Édouard Goubert (1894-1974), mayor of Pondicherry and the man who ended French India",
    dates: "1894–1974",
    lat: 11.9306,
    lng: 79.8356,
    summary:
      "Welcome to Avenue Goubert, the promenade by the sea. Locals call it Beach Road, or simply the Promenade. It runs 1.5 km along the Bay of Bengal and is the most photographed street in Pondicherry. The Dupleix statue, the Gandhi statue, the Nehru statue, the French War Memorial, the Old Lighthouse, and Raj Nivas are all here. The avenue is named after Édouard Goubert, the politician who in 1954 ended French India. The most French boulevard in the city is named after the man who gave it to India.",
    history:
      "The Coromandel Coast gave French Pondicherry its worst problem: there is no natural harbour. This is a treacherous lee shore, heavy with surf and sand bars. Ships anchored offshore for three centuries and goods were transferred by small boat in conditions that regularly cost lives. The French built a pier, which gave some protection but never resolved the fundamental problem. It eventually collapsed. So the promenade became the face of the city instead: the boulevard where the colonial administration placed its most important monuments, where citizens promenaded in the French manner, and where the White Town's ordered grid met the open sea.\n\nWalking south along Goubert Avenue from the northern end is to walk through three centuries in fifteen minutes. The French War Memorial comes first: it commemorates the Pondicherrians who died fighting for France in the First and Second World Wars. The French Consulate maintains it and holds an Armistice Day ceremony here every 11 November. Then the Dupleix statue: bronze, high pedestal, facing the sea toward France and disgrace. Further along, the Gandhi statue, claimed to be among the tallest bronze Gandhi statues in the world. Then the Nehru statue. The Old Lighthouse, mid-nineteenth century and no longer active, still stands on the seafront. Le Café, run by the Sri Aurobindo Ashram, occupies a prime position overlooking the Bay. At the southern end, Raj Nivas, the official residence of the Lieutenant Governor, was built in 1738 by Governor Dumas as the French Governor's residence. It has been in continuous official use since then.\n\nThe avenue is named after [Édouard Goubert](/history/lives-and-legacies/edouard-goubert) (1894-1974), the physician and political boss who dominated Pondicherry in the decade before the transfer. In October 1948 his party won 102 of 102 seats in the municipal elections: a fraud so blatant that India used it to repudiate the agreed referendum framework. No plebiscite on Pondicherry's future was ever held. Then, in March 1954, Goubert switched sides and declared for India. His defection broke the pro-French faction. The de facto transfer followed on 1 November 1954. The most French-feeling boulevard in the city is named after the man who gave it to India.",
    notable: [
      "The French built a pier to manage the surf, but it eventually collapsed. Ships anchored offshore for three centuries. The promenade is the face the city turned to the sea instead.",
      "French War Memorial at the northern end, maintained by the French Consulate. An Armistice Day ceremony is held here every 11 November. The names of Pondicherrian soldiers killed in both World Wars are carved on it.",
      "Three statues along the promenade: Dupleix faces the sea toward France. Gandhi stands nearby. Nehru was added more recently. The man who tried to make France the dominant power in India, and the two men who removed the British: same boulevard.",
      "Raj Nivas at the southern end was built in 1738 by Governor Dumas as the French Governor's residence. It is now the home of the Lieutenant Governor of the Union Territory.",
      "Le Café, run by the Sri Aurobindo Ashram, looks out over the Bay of Bengal. One of the best places in Pondicherry to sit and do nothing.",
      "Named after Édouard Goubert (1894-1974): he won 102 of 102 municipal seats in 1948 by fraud, then defected to India in 1954 and ended French India. The most French boulevard in the city bears his name.",
    ],
  },
  {
    id: "labourdonnais-street",
    metaTitle: "Labourdonnais Street, 1746 Madras Victory in White Town",
    metaDescription: "Named after the admiral who captured Madras in 1746, France's greatest military achievement in India, before being imprisoned in France.",
    photo: "rue-labourdonnais.jpg",
    name: "Labourdonnais Street",
    altName: "Rue Labourdonnais",
    axis: "N-S",
    namedAfter: "Bertrand-François Mahé de La Bourdonnais, naval commander who captured Madras in 1746",
    dates: "1699–1753",
    lat: 11.9265,
    lng: 79.8326,
    summary:
      "Welcome to Labourdonnais Street, named after the admiral from Saint-Malo who captured Madras for France in September 1746, the single greatest French military achievement in India. France then traded it back to Britain in exchange for a fortress in Canada. The man who delivered the victory was imprisoned on his return to France. He died four years later, his memoirs still unfinished.",
    history:
      "[Bertrand-François Mahé de La Bourdonnais](/history/lives-and-legacies/la-bourdonnais) (1699–1753) grew up in Saint-Malo, assembled a naval squadron largely from his own resources as Governor of Mauritius and Réunion, sailed to the Coromandel Coast in 1746, drove off the British fleet, and took Madras. Fort St George fell. The most important British settlement on this coast was in French hands. Every Indian ruler watching the Franco-British contest took notice. It was the moment France came closest to deciding the future of South Asia.\n\nWhat followed destroyed the man and the victory together. La Bourdonnais had promised the British garrison lenient terms: a ransom, civilian parole, a French withdrawal before the northeast monsoon closed the anchorage. [Dupleix](/history/lives-and-legacies/dupleix) wanted to keep Madras permanently. The quarrel between them was furious and public. La Bourdonnais sailed home. The Treaty of Aix-la-Chapelle (1748) returned Madras to Britain anyway, traded for Louisbourg in Canada. The largest decision was made in Paris, not on this coast.\n\nOn his return, La Bourdonnais found enemies waiting. He was imprisoned in the Bastille in late 1746 on charges connected to the Madras dispute. Two years of imprisonment destroyed his health. He was acquitted in 1748, spent his remaining years writing his memoirs, a vigorous defence of his conduct, and died in Paris in 1753, aged fifty-four, unrecognised and uncompensated. His name is on a street here, and on the town of Mahé on the Kerala coast, and on the largest island of the Seychelles.",
    notable: [
      "He captured Madras in September 1746, the greatest French military victory in India. France gave it back two years later for a Canadian fortress.",
      "He was imprisoned in the Bastille on return. Acquitted 1748. His health never recovered. He died aged fifty-four, memoirs unfinished.",
      "His name is also on Mahé (Mayyazhi) on the Kerala coast, still part of the Union Territory of Pondicherry today. And on the largest island of the Seychelles.",
      "The man who delivered France its only realistic chance at Indian dominance was destroyed by it. The street that carries his name is five minutes from the sea he sailed.",
    ],
  },
  {
    id: "rue-aurobindo",
    metaTitle: "Sri Aurobindo Street, Philosopher's Street in White Town",
    metaDescription: "Named after the philosopher and revolutionary who arrived in Pondicherry in 1910 and built a major spiritual tradition here.",
    photo: "generic.jpg",
    name: "Sri Aurobindo Street",
    altName: "Rue Sri Aurobindo",
    axis: "E-W",
    namedAfter: "Sri Aurobindo Ghose (1872–1950), philosopher, yogi, and nationalist who lived in Pondicherry from 1910 until his death",
    dates: "1872–1950",
    lat: 11.9379,
    lng: 79.8325,
    summary:
      "Welcome to Sri Aurobindo Street, named after the philosopher, yogi, and former revolutionary nationalist who arrived in Pondicherry in 1910 as a fugitive from British India and never left. He spent the next forty years in the city building one of the twentieth century's most significant spiritual traditions. French territory was his sanctuary. He is buried in the Ashram he founded, a short walk from here.",
    history:
      "[Sri Aurobindo Ghose](/history/lives-and-legacies/sri-aurobindo) arrived in Pondicherry on 4 April 1910, having slipped out of Calcutta to avoid a third sedition prosecution by the British colonial government. French territory offered something British India could not: immunity. Under the Franco-British extradition conventions, France was not obliged to hand him over for political offences. British intelligence watched from across the canal. He stayed.\n\nHe had been, in his Calcutta years, one of the most radical voices in the Indian independence movement: editor of the newspaper Yugantar, accused conspirator in the Alipore Bomb Case, and a man who openly argued for complete independence rather than the moderate reforms the Congress leadership was seeking. His year in Alipore prison in 1908, while awaiting trial, changed him. He described visions of Krishna in the faces of his warders and judges. By the time he was acquitted, his political project had been overtaken by a spiritual one.\n\nIn Pondicherry he developed what he called Integral Yoga: not a withdrawal from the world but a transformation of consciousness aimed at what he described as a supramental awareness. With [Mirra Alfassa](/history/lives-and-legacies/mirra-alfassa), the French artist who became his co-founder and the Mother of the Ashram, he established the [Sri Aurobindo Ashram](/discover/landmarks/ashram) formally on 24 November 1926. From that date he went into strict seclusion, never leaving his quarters again. He guided thousands of disciples through correspondence, wrote the philosophical masterwork The Life Divine, and worked on Savitri, the epic poem he considered his central creative achievement. He died on 5 December 1950. His samadhi in the Ashram courtyard receives flowers around the clock.",
    notable: [
      "He arrived 4 April 1910 on the SS Dupleix, the ship named after the man who nearly made India French. He came to escape the British. He never left.",
      "French territory gave him something no part of British India could: immunity from extradition. The same legal shelter that protected him also sheltered Subramania Bharati two years earlier.",
      "He ranked 11th out of 250 in the ICS written examination. He then deliberately failed the horse-riding practical to avoid the posting. He ended up founding a spiritual community instead.",
      "The Ashram is the largest institutional presence in the White Town. It owns property on this street and many others, runs schools, workshops, and Le Café on the Promenade.",
    ],
  },
  {
    id: "mission-street",
    metaTitle: "Mission Street, Catholic Mission Street of White Town",
    metaDescription: "Named after the French Catholic missionaries who arrived in 1674 and helped shape the city alongside the trading company.",
    photo: "generic.jpg",
    name: "Mission Street",
    altName: "Rue de la Mission",
    axis: "E-W",
    namedAfter: "The French Catholic missionaries of the Missions Étrangères de Paris, who established the Church in Pondicherry from 1674",
    lat: 11.9326,
    lng: 79.8311,
    summary:
      "Welcome to Mission Street, named after the French Catholic missionaries who arrived in Pondicherry in 1674, the same year as the first French traders. The Church and the Company built this city together. Mission Street is the reminder that one of them came to sell cloth and the other came to save souls, and that neither could have done it without the other.",
    history:
      "The Missions Étrangères de Paris, founded in 1658 to train secular priests for mission work in Asia, established their presence in Pondicherry in 1674 alongside the Compagnie des Indes. The MEP missionaries built the city's earliest churches, ran schools, buried the dead, and served the spiritual needs of both the European community and the growing Tamil Catholic population. For three centuries, the diocese of Pondicherry was one of the oldest and most continuously active Catholic missions in India.\n\nThe street that carries their name runs through the part of the city where the institutional overlap between the French colonial administration and the Catholic mission was most visible: schools, hospitals, convents, and the infrastructure of a community that understood its presence here as both permanent and providential. The missionaries did not leave with the French administration in 1962. The Apostolic Vicariate of Pondicherry became a full diocese in 1886. The MEP continued to maintain a presence. The cathedral on Rue Dumas, the churches on the Promenade, and the schools that still educate Pondicherrian children are their lasting institutional legacy.\n\nThe street name is among the most direct in the White Town grid: not a governor's name or an admiral's, but the name of the institution itself. The mission was the point. Everything else was logistics.",
    notable: [
      "The MEP arrived in 1674, the same year as the French settlement. They never left. The diocese they founded still operates today.",
      "The Cathedral of the Immaculate Conception ('Samba Koil') on Rue Dumas holds the bishops' cemetery: 300 years of MEP clergy buried in one walled enclosure.",
      "In a grid named mostly after soldiers and administrators, Mission Street names the other institution that built this city: the Church.",
      "The MEP trained secular priests for Asia from its founding in 1658. Pondicherry was one of their oldest and most durable commitments.",
    ],
  },
  {
    id: "petit-canal-street",
    metaTitle: "Petit Canal Street, Boundary Canal of White Town",
    metaDescription: "Named after the smaller canal that marked the edges of the division between White Town and the Tamil quarter.",
    photo: "rue-petit-canal.jpg",
    name: "Petit Canal Street",
    altName: "Rue du Petit Canal",
    axis: "E-W",
    namedAfter: "The Petit Canal, the drainage and stormwater channel that historically marked the boundary between the colonial White Town and the Tamil Black Town",
    lat: 11.9317,
    lng: 79.8303,
    summary:
      "Welcome to Petit Canal Street. The canal this street is named after was not a waterway in the Venetian sense: it was a drainage channel, a stormwater ditch, and above all a boundary line. The Grand Canal to the west separated the White Town from the Tamil quarter. The Petit Canal was its smaller tributary, marking the edges of that division in both directions. Today the canal system is partly covered, partly landscaped, and entirely worth understanding.",
    history:
      "Pondicherry was built on a flat coastal plain with no natural gradient to carry rainwater to the sea. The French colonial administration engineered a canal system that served two purposes simultaneously: stormwater drainage and social segregation. The Grand Canal, running north-south, was the principal line: to its east lay the White Town, the French quarter of ordered streets and colonial institutions; to its west lay the Black Town, the Tamil quarter of temples, bazaars, and the Indian population that provided the labour, trade, and craft on which the entire colony depended.\n\nThe Petit Canal was the smaller drainage channel running roughly east-west, a tributary of the Grand Canal system. Its name simply distinguished it from the Grand Canal: the small drain, against the large one. But in Pondicherry's colonial geography, size was not the point. The canal network as a whole was the physical infrastructure of segregation: it marked where the French city ended and the Indian city began, and it made that boundary visible and difficult to cross casually.\n\nAfter 1962, as the city grew and the legal distinctions between communities dissolved, the canal became primarily a civic engineering problem. Parts were covered, parts landscaped, parts converted into storm drains. The street that carries the Petit Canal's name now runs through an area that sits between the Tamil and French quarters, a reminder of the boundary the canal once marked. Wall art installations along parts of the canal today make it one of the more photographed stretches of the city for a very different reason than it was built.",
    notable: [
      "The canal system served two purposes: stormwater drainage and colonial segregation. The Grand Canal was the main dividing line between White Town and Black Town.",
      "The Petit Canal was the smaller tributary, running roughly east-west. Its name is purely descriptive: the small drain, against the grand one.",
      "Wall art installations along the canal today make it one of the more photographed stretches in Pondicherry. The French colonialists who designed it for segregation would not recognise the use.",
      "After 1962 parts of the canal were covered or landscaped. The boundary it once marked still shapes the city's geography even where the water is no longer visible.",
    ],
  },
  {
    id: "laporte-street",
    metaTitle: "Laporte Street, Equality Campaigner of French India",
    metaDescription: "Named after Ponnoutamby Laporte, the Tamil advocate who fought for equal rights between Indian and European French citizens.",
    photo: "generic.jpg",
    name: "Laporte Street",
    altName: "Rue Laporte",
    axis: "E-W",
    namedAfter: "Ponnoutamby Laporte (Ponnu Thambi Pillai), Tamil advocate and politician who fought for legal equality between Indian and European French citizens",
    lat: 11.9309,
    lng: 79.8301,
    summary:
      "Welcome to Laporte Street, named after Ponnoutamby Laporte, the Tamil advocate who spent his career fighting for equality between Indian and European French citizens in the comptoir. He led what contemporaries called the French Party: Tamil subjects who wanted the rights of French citizenship, not independence from France. His victories changed the legal status of hundreds of families.",
    history:
      "Ponnoutamby Laporte, known also as Ponnu Thambi Pillai, was a nineteenth-century Tamil lawyer and political figure who operated within the framework of French law rather than against it. Where the Indian nationalist movement elsewhere was building toward independence from European rule, Laporte's project was different: he wanted the full rights of French citizenship for Indians within the French system, an end to the legal distinctions that placed Indian subjects of France in a subordinate category to their European fellow-citizens.\n\nThe legal category at stake was that of the renonçant: a Tamil or Indian resident of French Pondicherry who formally renounced Hindu or Muslim personal law and submitted to the French civil code. Renonçants gained access to French courts, could enter the French administrative and professional class, and had a different legal standing than the sujet ordinaire governed by customary Indian law. Laporte fought to extend and clarify these rights, enabling Indians to escape caste-based discrimination through formal legal renunciation and achieve full French citizenship equality.\n\nHis political vehicle was what his contemporaries called the Parti Français, a faction of the Franco-Pondicherrian community that was committed to the continuation of French sovereignty but demanded that sovereignty deliver on its promises of legal equality. This was a different argument from the pro-merger movement that would eventually transfer Pondicherry to India in 1962, and a different argument from the pro-French resistance that blocked that transfer for a decade. It was a claim internal to French law: if France governed here, France should govern equally.",
    notable: [
      "Laporte led what contemporaries called the 'French Party': Tamil citizens who wanted full equality within French law, not independence from France.",
      "He fought against caste-based discrimination in the French legal system, enabling Indians to renounce their personal status and achieve full French citizenship rights.",
      "The renonçant system was one of French India's most distinctive legal institutions. Laporte's work shaped who could access it and what it meant.",
      "His street runs in the mixed quarter between the White Town and the Tamil neighbourhoods: the boundary zone where his legal work mattered most.",
    ],
  },
  {
    id: "chanda-sahib-street",
    metaTitle: "Chanda Sahib Street, French Ally of the Carnatic",
    metaDescription: "Named after the Nawab backed by Dupleix, whose execution on 12 June 1752 marked the end of French dominance in South India.",
    photo: "generic.jpg",
    name: "Chanda Sahib Street",
    altName: "Rue Chanda Sahib",
    axis: "E-W",
    namedAfter: "Chanda Sahib (died 1752), Nawab of the Carnatic and principal Indian ally of Dupleix in the Carnatic Wars",
    lat: 11.9275,
    lng: 79.8300,
    summary:
      "Welcome to Chanda Sahib Street, named after the man Dupleix chose to be Nawab of the Carnatic. He was proclaimed Nawab at Ambur in 1749, held the position for three years against British-backed resistance, and was beheaded on 12 June 1752 on the same afternoon the last French field force in the Carnatic surrendered at Srirangam. Two events, one afternoon, the end of French dominance in South India.",
    history:
      "[Chanda Sahib](/history/lives-and-legacies/chanda-sahib), born Husayn Dost Khan, was son-in-law to the Nawab of the Carnatic and had served as his Dewan and military commander. He spent seven years as a Maratha prisoner after the invasion of 1740, returning in 1748 to find Dupleix actively searching for a credible Indian claimant with Mughal legitimacy and deep Carnatic connections. The timing was exact. At the Battle of Ambur on 3 August 1749, a combined French and allied force killed the incumbent Nawab and Chanda Sahib was proclaimed his successor. He rewarded the French generously: territory, military command, and formal recognition of French sovereignty over their Pondicherry settlements.\n\nThe British-backed rival, Muhammad Ali, retreated to the rock fortress of Trichinopoly and held. Robert Clive's seizure of Arcot in 1751 diverted Chanda Sahib's forces from the critical siege, and the campaigns of 1751 and 1752 went steadily against the French alliance. On 12 June 1752, on the island of Srirangam, the French commander [Law de Lauriston](/history/lives-and-legacies/law-de-lauriston) was encircled by [Clive](/history/lives-and-legacies/robert-clive) and forced to surrender his entire force. On the same afternoon, Chanda Sahib was captured by soldiers of the Tanjore army and beheaded. [Dupleix](/history/lives-and-legacies/dupleix)'s protectorate over the Carnatic collapsed in a single afternoon.\n\nHis street is in the quarter between the old French and Tamil cities, fitting for a man who lived at the intersection of French strategic calculation and Indian political legitimacy. Without a credible Indian claimant, Dupleix's strategy could not have worked. Chanda Sahib was not merely an instrument: he was the essential Indian face of an empire France was trying to build through the choices of Indian rulers.",
    notable: [
      "Beheaded 12 June 1752, the same afternoon Law de Lauriston surrendered at Srirangam. Two events, one afternoon, the definitive end of French dominance in the Carnatic.",
      "He spent seven years as a Maratha prisoner before returning to ally with Dupleix. His release coincided exactly with Dupleix's moment of maximum strategic need.",
      "At Ambur, 3 August 1749: the incumbent Nawab was killed and Chanda Sahib proclaimed. The French detachment's firepower and discipline were decisive. It was convincing proof of what European-trained troops could do.",
      "Muhammad Ali, the British-backed rival, held Trichinopoly throughout. The siege of that fortress was the strategic centre of the Carnatic Wars. It never fell.",
    ],
  },
  {
    id: "hyder-ali-street",
    metaTitle: "Hyder Ali Street, Mysore Sultan of White Town",
    metaDescription: "A small White Town street honouring the self-made ruler of Mysore, whose alliance became central to French plans in South India.",
    photo: "generic.jpg",
    name: "Hyder Ali Street",
    altName: "Rue Hyder Ali",
    axis: "N-S",
    namedAfter: "Hyder Ali (c.1720–1782), de facto ruler of Mysore and France's most significant Indian ally after the fall of Pondicherry",
    dates: "c.1720–1782",
    lat: 11.9253,
    lng: 79.8301,
    summary:
      "Welcome to Hyder Ali Street, a small street named after the self-made Sultan of Mysore who twice humiliated British forces in the field and became the cornerstone of every French strategic plan for South India after Pondicherry fell in 1761. He had no title by birth, no formal education, and no court connections. He watched the Carnatic Wars from across Mysore's eastern border, grasped what European-trained troops could do, and built an army to match.",
    history:
      "[Hyder Ali](/history/lives-and-legacies/hyder-ali) was born around 1720 near Kolar in Karnataka, the son of a rocket artillery commander in Mysorean service. By 1761, the year Pondicherry fell to the British, he had manoeuvred his way to effective control of Mysore, retaining the Wodeyar kings as ceremonial sovereigns while holding all real power. His timing was deliberate: the dispersal of French soldiers from the fallen city gave him trained European military men to absorb into his own forces.\n\nHe built an army of approximately 90,000 troops, 50,000 trained on European lines, with a rocket corps that no other Indian power could match. France recognised his strategic value immediately. From 1771, a secret French military mission operated under his command at Seringapatam. When the Second Anglo-Mysore War opened in 1780, he invaded the Carnatic at the head of 90,000 men and in September annihilated a British column at the Battle of Pollilur so completely that the defeat shocked British India. Hyder Ali at his peak was the most dangerous adversary Britain had faced in India since Dupleix's alliance had collapsed thirty years earlier.\n\nHe died on 7 December 1782 of a lumbar abscess, at the moment of maximum French strategic engagement with Mysore. The admiral [Suffren](/history/lives-and-legacies/suffren) was fighting British warships off this very coast at the time. His son [Tipu Sultan](/history/lives-and-legacies/tipu-sultan) inherited the throne, the army, and the alliance. This street is small. The man it commemorates was not.",
    notable: [
      "A small street for a large figure. Hyder Ali had no title by birth, no formal education, and no court connections. He built the most formidable Indian army of his generation from observation and will.",
      "He absorbed French soldiers dispersed from the fallen Pondicherry in 1761 and built a rocket corps of over 1,000 men. The technology later inspired Congreve's rockets, used across the Napoleonic Wars.",
      "The Battle of Pollilur, September 1780: he annihilated a British column so completely that the shock reverberated through British India. It was the worst British defeat in the subcontinent since Plassey.",
      "He died in 1782, fighting. His last French officer wrote: 'This great man held our nation in esteem.' Tipu Sultan continued everything he had started.",
    ],
  },
  {
    id: "tip-sahib-street",
    metaTitle: "Tip Sahib Street, Tipu Sultan Street in White Town",
    metaDescription: "Named after Tipu Sultan, France's strongest Indian ally, who corresponded with Napoleon and died at Seringapatam in 1799.",
    photo: "generic.jpg",
    name: "Tip Sahib Street",
    altName: "Rue Tipu Sultan",
    axis: "E-W",
    namedAfter: "Tipu Sultan (1751–1799), Sultan of Mysore and France's most ideologically committed Indian ally",
    dates: "1751–1799",
    lat: 11.9270,
    lng: 79.8283,
    summary:
      "Welcome to Tip Sahib Street, named after Tipu Sultan, the Tiger of Mysore, the last Indian ruler to pose a genuinely existential threat to British power in South Asia. He was also France's most ideologically committed ally: a man who established a Jacobin Club at his palace, planted a Liberty Tree in his garden, corresponded with Napoleon, and was found dead in his armour at the Water Gate of Seringapatam on 4 May 1799.",
    history:
      "[Tipu Sultan](/history/lives-and-legacies/tipu-sultan), born Fateh Ali Sahab Tipu in 1751, inherited from his father [Hyder Ali](/history/lives-and-legacies/hyder-ali) not only the Kingdom of Mysore but a strategic framework: systematic resistance to British expansion through alliance with France. What Tipu added was ideological intensity. He did not merely ally with France as a military partner. He aligned himself with France as a revolutionary ideal.\n\nHis military innovations were formidable. He expanded his father's iron-cased rocket corps from 1,200 to nearly 5,000 men, organised in specialist brigades with wheeled launchers capable of firing multiple rockets simultaneously at ranges of up to two kilometres. When British forces captured Seringapatam in 1799, they found 600 launchers, 700 serviceable rockets, and 9,000 empty tubes. The technology directly inspired William Congreve's development of the rocket systems used throughout the Napoleonic Wars.\n\nHis French alliance reached its most striking expression in 1794 when he established the Jacobin Club of Mysore at Seringapatam, planted a Liberty Tree in his palace garden, and began styling himself Citoyen Tipoo. His embassy to Versailles in 1787 had asked Louis XVI for a formal offensive-defensive alliance. His correspondence with Napoleon from Egypt in 1798 sought the same. Napoleon was interested: Talleyrand's report of February 1798 had proposed sending a force of 15,000 men from Suez to India to join Tipu Sultan and drive away the English. Nelson destroyed the French fleet at the Nile in August 1798 and ended that calculation.\n\nThe Fourth Anglo-Mysore War opened in 1799. Seringapatam was stormed on 4 May. Tipu was found dead near the Water Gate, still in armour. He had refused the opportunity to escape.",
    notable: [
      "He styled himself Citoyen Tipoo and established a Jacobin Club at Seringapatam in 1794. A Sultan planting a Liberty Tree in a palace garden is one of the most extraordinary images in the history of French-Indian alliance.",
      "His rocket corps: 5,000 men with iron-cased rockets at ranges of 2 km. The technology captured at Seringapatam in 1799 directly inspired Congreve's rockets, used across Europe in the Napoleonic Wars.",
      "Napoleon and Talleyrand planned a 15,000-man force from Suez to link up with him in 1798. Nelson destroyed the French fleet at the Nile in August before it could sail. Tipu died the following year.",
      "Found dead in armour at the Water Gate of Seringapatam, 4 May 1799. He had refused to escape. His reported last words: better to live one day as a tiger than a thousand years as a sheep.",
    ],
  },
  {
    id: "cardinal-de-beausset-street",
    metaTitle: "Cardinal de Beausset Street, French Cardinal of Pondicherry",
    metaDescription: "Named after Louis-François de Bausset-Roquefort, born in Pondicherry in 1748 and later admitted to the Académie française.",
    photo: "generic.jpg",
    name: "Cardinal de Beausset Street",
    altName: "Rue Cardinal de Beausset",
    axis: "E-W",
    namedAfter: "Louis-François de Bausset-Roquefort (1748–1824), Cardinal, Bishop, historian and member of the Académie française, born in Pondicherry",
    dates: "1748–1824",
    lat: 11.9267,
    lng: 79.8268,
    summary:
      "Welcome to Cardinal de Beausset Street, named after the one significant French intellectual figure born in Pondicherry who made his career entirely in France. Louis-François de Bausset-Roquefort was born here in 1748 while his father served in the French administration, studied in Paris, became Bishop of Alais, survived the Revolution, was admitted to the Académie française in 1816, and died in 1824. His street is near the Sacred Heart Basilica, in the neighbourhood behind the Basilica.",
    history:
      "Louis-François de Bausset-Roquefort was born in Pondicherry on 14 December 1748, the son of a French colonial official. He left as a child, studied at Saint-Sulpice in Paris, was ordained a priest, and began a clerical and literary career that would take him from the Ancien Régime through the Revolution to the Restoration, surviving each transition with the institutional flexibility of a man who understood that the Church endured where governments did not.\n\nHe served as Bishop of Alais, as a canon of Saint-Denis, and as a member of the Council of the University of France under Napoleon. His literary reputation rested on his biographies of French religious figures: celebrated lives of Archbishop Fénelon and Bishop Bossuet that were widely read across educated France in the early nineteenth century. The Académie française elected him in 1816, under the Bourbon Restoration, recognising him as a historian of the Church and a writer of classical clarity.\n\nHe died in Paris on 21 June 1824. His Pondicherry birth is the thinnest possible thread connecting him to this city: he left as a child and had no subsequent connection to French India. But in a colonial town that named streets after governors, admirals, and saints, finding room for a bishop-historian who happened to be born here is a particular kind of civic generosity. His street runs behind the Sacred Heart Basilica, the most architecturally ambitious Catholic building in Pondicherry, built in 1902 to 1907, eighty years after his death.",
    notable: [
      "Born in Pondicherry on 14 December 1748. Left as a child. Admitted to the Académie française in 1816. One of the very few significant French intellectual figures with a Pondicherry birth.",
      "His biographies of Archbishop Fénelon and Bishop Bossuet were widely read across educated France. Clear, scholarly, and entirely European in subject and audience.",
      "He survived the Revolution, the Consulate, the Empire, and the Restoration, adapting to each. A Bishop under the Ancien Régime, a university councillor under Napoleon, an Académicien under the Bourbons.",
      "His street runs behind the Sacred Heart Basilica, built in 1902: the most ambitious Catholic building in Pondicherry, constructed eighty years after his death.",
    ],
  },
  {
    id: "bharathi-street",
    metaTitle: "Bharathi Street, Tamil Poet's Street in White Town",
    metaDescription: "Named after Subramania Bharati, who lived in Pondicherry from 1908 to 1919 and wrote some of modern Tamil's finest poetry.",
    photo: "generic.jpg",
    name: "Bharathi Street",
    altName: "Rue Bharathi",
    axis: "N-S",
    namedAfter: "Subramania Bharati (1882–1921), Tamil poet and nationalist who lived in Pondicherry from 1908 to 1919",
    dates: "1882–1921",
    lat: 11.9273,
    lng: 79.8262,
    summary:
      "Welcome to Bharathi Street, named after Subramania Bharati, the greatest Tamil poet of the modern era, who lived in Pondicherry from 1908 to 1919 as a fugitive from British India and wrote some of the finest poetry in the Tamil language in a small house near the seafront. French territory protected him. He used the time well.",
    history:
      "[Subramania Bharati](/history/lives-and-legacies/subramania-bharati) arrived in Pondicherry in 1908, having calculated that arrest for his revolutionary journalism in Madras was imminent. French territory offered what British India could not: immunity from extradition for political offences. He took a house on Eswaran Koil Street and began writing at extraordinary pace.\n\nThe Pondicherry years were the most productive of his life. Panchali Sabatham (1912), an epic poem retelling the Mahabharata episode of Draupadi's vow and reinterpreted as an allegory of India's subjugation and coming liberation, was immediately celebrated as a masterwork. Kuyil Pattu, his lyric sequence, brought formal innovation to Tamil literary tradition. Kannan Pattu, his devotional songs to Krishna, are still sung across Tamil-speaking communities worldwide. He lived in poverty, supported by journalism and friends' charity, but wrote without stopping.\n\nHe and [Sri Aurobindo](/history/lives-and-legacies/sri-aurobindo) lived close to each other in the White Town during these years. The two men, both political exiles turning inward, met occasionally. Bharati translated some of Aurobindo's English writings into Tamil. The city was sheltering two of the most significant Indian cultural figures of the early twentieth century at the same time, on the same small streets, under the same French flag.\n\nHe returned to British India in 1919, was briefly arrested, and died in Madras in September 1921, aged thirty-eight. His birthday, 11 December, is observed across Tamil Nadu as Tamil Poet Day. His house on Eswaran Koil Street is maintained as a heritage site. [Bharathi Park](/discover/landmarks/bharathi-park), the central garden of the White Town, bears his name.",
    notable: [
      "He lived in Pondicherry from 1908 to 1919. The same French legal protection that sheltered Sri Aurobindo two years later sheltered Bharati first.",
      "Panchali Sabatham (1912): the Mahabharata episode of Draupadi's vow, reinterpreted as an allegory of colonial India. Immediately celebrated as a masterwork. Read in Tamil schools to this day.",
      "He and Sri Aurobindo were neighbours in the White Town during these years. Bharati translated some of Aurobindo's English writings into Tamil.",
      "He died aged thirty-eight, in 1921, of injuries from a temple elephant he had befriended at the Parthasarathy Temple in Madras. His birthday is Tamil Poet Day across Tamil Nadu.",
    ],
  },
  {
    id: "voc-street",
    metaTitle: "VOC Street, Shipping Pioneer of White Town Pondicherry",
    metaDescription: "Named after V.O. Chidambaram Pillai, who founded India's first indigenous shipping company in 1906 and challenged British monopoly.",
    photo: "generic.jpg",
    name: "VOC Street",
    altName: "V.O.C. Street",
    axis: "E-W",
    namedAfter: "Valliappan Olaganathan Chidambaram Pillai (1872–1936), freedom fighter, lawyer, and founder of the first indigenous Indian shipping company",
    dates: "1872–1936",
    lat: 11.9276,
    lng: 79.8265,
    summary:
      "Welcome to VOC Street, named after V.O. Chidambaram Pillai, known universally as VOC, the Tamil lawyer and independence activist who founded the first indigenous Indian shipping company in 1906 to break the British India Steam Navigation Company's monopoly on Indian coastal trade. He was charged with sedition, sentenced to life imprisonment, and had his barrister's licence revoked. He is known by the epithet Kappalottiya Tamizhan: the Tamil helmsman.",
    history:
      "Valliappan Olaganathan Chidambaram Pillai was born on 5 September 1872 in Ottapidaram, Tamil Nadu, trained as a lawyer, and became one of the earliest and most radical voices in the southern Indian independence movement. His central contribution was not oratory or organisation in the usual sense but a direct economic challenge to British commercial dominance: in 1906 he founded the Swadeshi Steam Navigation Company to compete with the British India Steam Navigation Company on the Tuticorin-Colombo route, the first time an indigenous Indian company had launched a shipping service on British India's coastal waters.\n\nThe company operated two ships. The British response was commercial pressure coordinated with the colonial administration, which imposed penalties on agents who handled the Swadeshi vessels, progressively destroying the company's viability. VOC was simultaneously active in the labour movement, organising dock workers at Tuticorin in strikes that the colonial government classified as sedition. He was arrested in 1908, tried, and sentenced to forty years' rigorous imprisonment, later commuted. His barrister's licence was revoked. He served six years before release.\n\nTuticorin Port Trust, one of India's thirteen major ports, is named after him. He is remembered across Tamil Nadu as Kappalottiya Tamizhan, the Tamil helmsman: the man who tried to take back the sea lanes that British commercial power had made exclusively its own. His street is in the western part of the city, in the Tamil quarter, appropriate for a figure who operated entirely outside the French colonial world that the White Town commemorates.",
    notable: [
      "Founded the Swadeshi Steam Navigation Company in 1906: the first indigenous Indian shipping service, running between Tuticorin and Colombo in direct competition with the British India Steam Navigation Company.",
      "Sentenced to forty years' rigorous imprisonment for sedition in 1908. Barrister's licence revoked. Served six years before release. He had challenged British commercial power; the response was total.",
      "Tuticorin Port Trust, one of India's thirteen major ports, is named after him. His epithet: Kappalottiya Tamizhan, the Tamil helmsman.",
      "His street is in the Tamil quarter, outside the French colonial grid that names streets after governors and admirals. He operated in a different world from Dupleix and Suffren, and fought a different kind of war.",
    ],
  },
  {
    id: "nainiappa-pillai-street",
    metaTitle: "Nainiappa Pillai Street, First Great Dubash of Pondicherry",
    metaDescription: "Named after the early eighteenth-century broker who made French Pondicherry commercially viable and whose family shaped French India.",
    photo: "generic.jpg",
    name: "Nainiappa Pillai Street",
    altName: "Rue Nainiappa Pillai",
    axis: "N-S",
    namedAfter: "Nainiappa Pillai (died 1716), chief broker of the French East India Company in Pondicherry, whose story led directly to his nephew Ananda Ranga Pillai",
    lat: 11.9279,
    lng: 79.8282,
    summary:
      "Welcome to Nainiappa Pillai Street, named after the first great Tamil broker of French Pondicherry, the dubash who made the colony commercially viable in the early eighteenth century, was arrested by the governor he served, died in prison in 1716, and whose son traveled to France to demand justice from the Regent of the Duke of Orléans, and got it. His story is the beginning of the Pillai family's extraordinary involvement in French India.",
    history:
      "Nainiappa Pillai was appointed chief broker and courtier for the French East India Company in Pondicherry in 1708, following the death of his predecessor. His role was the same as the later dubash: commercial intermediary, credit broker, intelligence gatherer, and essential human interface between the European administration and the Tamil trading world. Under his leadership he convinced wealthy Tamil merchants to relocate their businesses from Madras to Pondicherry, growing the colony's trade significantly. He was the most powerful Indian figure in the settlement.\n\nIn 1716, he fell out with Governor Guillaume-André de Hébert. He was accused of embezzlement, arrested on 19 February 1716, and died shortly afterwards in prison, whether from harsh treatment, illness, or neglect, the record does not clearly say. His death was the result of the same structural vulnerability that made the dubash position dangerous: indispensable to the French administration in commerce, but entirely subject to it in law.\n\nWhat followed was remarkable. Nainiappa's son Guruvappa Pillai, fearing the governor's further wrath, fled to Madras, then traveled to France by way of England to plead his father's case directly to Philippe II, Duke of Orléans, the Regent of France. He was received. The Duke ordered Governor Hébert to be removed from office and sent back to France under arrest. Guruvappa converted to Catholicism, with the Duke as his godfather, was admitted to the Order of Saint Michael as a chevalier, and was named Head of the French Indians at Pondicherry. A Tamil merchant's son had traveled to France and unseated a French governor.\n\nHis nephew was [Ananda Ranga Pillai](/history/lives-and-legacies/ananda-ranga-pillai), who would become [Dupleix](/history/lives-and-legacies/dupleix)'s dubash and keep the diary that is the most important Indian account of French India. The street that bears Nainiappa's name sits beside the street that bears his nephew's.",
    notable: [
      "He died in prison in 1716, arrested by the governor he had served. His son then traveled from Pondicherry to France to plead his case to the Regent of France. The Regent believed him and unseated the governor.",
      "Guruvappa Pillai's journey: Pondicherry to Madras to England to France. He was received by the Duke of Orléans, converted to Catholicism with the Duke as godfather, and returned to Pondicherry as Head of the French Indians.",
      "The removal of Governor Hébert at the demand of a Tamil merchant's son is one of the most extraordinary episodes in the history of French India.",
      "His nephew was Ananda Ranga Pillai, the dubash and diarist. The Pillai family's engagement with French power began with Nainiappa's rise and his son's quest for justice, and continued through Ananda Ranga's twenty-five years at Dupleix's side.",
    ],
  },
];

export function getStreet(id: string): Street | undefined {
  return streets.find((s) => s.id === id);
}

/**
 * Returns the bilingual second name for a street.
 * "Rue X" → "X Street", "Avenue X" → "X Avenue".
 * Special cases use the explicit altName field.
 */
export function getStreetAltName(street: Street): string | null {
  if (street.altName) return street.altName;
  const n = street.name;
  if (n.startsWith("Rue de l'") || n.startsWith("Rue de l’")) {
    return n.replace(/^Rue de l['']/, "") + " Street";
  }
  if (n.startsWith("Rue de la ")) return n.replace("Rue de la ", "") + " Street";
  if (n.startsWith("Rue de "))    return n.replace("Rue de ", "")   + " Street";
  if (n.startsWith("Rue "))       return n.replace("Rue ", "")      + " Street";
  if (n.startsWith("Avenue "))    return n.replace("Avenue ", "")   + " Avenue";
  return null;
}
