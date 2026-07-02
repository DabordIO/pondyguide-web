export type ExploreCategory = "walk" | "daytrip" | "activity" | "theme";

export interface ExploreArticle {
  id: string;
  category: ExploreCategory;
  title: string;
  cardTitle?: string;
  teaser: string;
  duration?: string;
  body: string;
  photo?: string;
  highlights?: string[];
  visitInfo?: { hours?: string; entry?: string; tip?: string };
}

export const exploreArticles: ExploreArticle[] = [
  // ── WALKS ─────────────────────────────────────────────────────────────────

  {
    id: "walk-white-town",
    category: "walk",
    title: "Walking the White Town",
    cardTitle: "White Town Walk",
    teaser:
      "A self-guided walk through the French Quarter: colonial streets, heritage buildings, temples, and the seafront promenade. The best two hours you will spend in Pondicherry.",
    duration: "2 to 3 hours",
    photo: "walking-tour-1.jpg",
    body: `The French Quarter of Pondicherry is one of the few places in India where you can walk down a street of colonial buildings with their original names still on the signs: [Rue Dupleix](/discover/white-town/rue-dupleix), [Rue Bussy](/discover/white-town/rue-bussy), [Rue de la Bourdonnais](/discover/white-town/labourdonnais-street). The street grid was designed in the 1690s and has not changed since. The names survived decolonisation intact in 1962. Every name on the grid is a chapter in the story of French India.

**Where to start**

Begin at the Romain Rolland Library on the main cross-street of the French Quarter. The library was founded in 1827 and renamed in 1966 for the French Nobel laureate who corresponded with Gandhi. It is one of the oldest public libraries in India and a quiet way to enter the neighbourhood.

**The streets**

Walk south down [Rue Romain Rolland](/discover/white-town/rue-romain-rolland) toward the seafront. Turn onto [Rue Dupleix](/discover/white-town/rue-dupleix) and walk its length: the buildings here are among the best-preserved in the White Town, with painted facades, shuttered windows, and bougainvillea over the balconies. This is the street the Instagram photographs come from.\n\nAt the eastern end of Rue Dupleix, you reach [Goubert Avenue](/discover/white-town/avenue-goubert) and the seafront. Walk north along the promenade toward the Gandhi statue (13 feet of bronze on eight monolithic granite pillars from Gingee Fort, unveiled Republic Day 1965) and the [War Memorial](/discover/landmarks/war-memorial) (1938), where the names of Pondicherry's dead from two world wars are recorded in stone.

**The temple**

Turn west from the promenade down any of the cross-streets and you will find the Manakula Vinayagar Temple in the middle of the grid. Over 800 years old and dedicated to Ganesh, it is an extraordinary contrast to the colonial architecture around it: painted towers, gold pillars, marble floors, and a constant flow of worshippers. Entry is free; shoes must be left at the entrance.

**The promenade**

Return to Goubert Avenue at the end of the walk. Le Café, the [Sri Aurobindo Ashram](/discover/landmarks/ashram)'s beachfront café, is the right place to sit with a coffee and watch the light change on the water. The Bay of Bengal faces east: sunrises here are worth the early alarm.`,
  },

  // ── ACTIVITIES ────────────────────────────────────────────────────────────

  {
    id: "activity-sunday-market",
    category: "activity",
    title: "The Sunday Market",
    cardTitle: "Sunday Market",
    teaser:
      "Every Sunday on Mahatma Gandhi Street: second-hand furniture, vintage electronics, handmade clothes, tools, and street food. One of the most local experiences in Pondicherry.",
    duration: "1 to 2 hours",
    photo: "sunday-market.jpg",
    body: `The Sunday market on Mahatma Gandhi Street is not aimed at tourists and that is what makes it interesting. It runs from around 10am through the early afternoon and covers the full range of what a city produces and discards: second-hand furniture, vintage Walkmans and Nokia phones, handmade clothes, gardening tools, brass fittings, old textiles, trinkets, and a very good selection of street food.\n\nThe crowd is almost entirely local. Families from the Tamil Quarter, retired residents looking for something specific, young people browsing without much intention. On a given Sunday the market will contain a few things genuinely worth buying alongside a great deal that is not. The process of working out which is which is most of the point.\n\nBargaining is expected. Sellers will quote a higher price and expect a lower counter-offer; meeting in the middle is the standard outcome. Starting at roughly half the asking price is a reasonable position.\n\nThe street food stalls that set up around the market are worth investigating: samosas, fresh coconut, chaat, and seasonal fruit at prices significantly below the French Quarter cafés. Come on an empty stomach.`,
  },
  {
    id: "activity-botanical-gardens",
    category: "activity",
    title: "Pondicherry Botanical Gardens",
    cardTitle: "Botanical Garden",
    teaser:
      "Founded in 1826 by the French to study the plants of the region. Over 1,500 species on an oval site with a miniature railway, greenhouses, and an aquarium. Best visited on a weekday.",
    duration: "1 to 2 hours",
    photo: "botanical-garden.jpg",
    body: `The Pondicherry Botanical Gardens were established in 1826 during the administration of Governor Dupuy, part of the same Restoration-era civic investment that also produced the Romain Rolland Library and the French College. The purpose was scientific: to collect, study, and classify the plants and fauna of the Coromandel Coast and the Western Ghats.\n\nThe garden is oval in shape with around 1,500 species of trees and plants laid out on grassy lawns with shaded walking paths, pruned flower beds, glasshouses, and a small aquarium. A miniature railway runs a route that passes through a cave and tunnel, which makes it popular with children.\n\nEntry is 50 rupees for foreign visitors and 20 rupees for Indian nationals. Opening hours are approximately 10am to 5pm daily.\n\nThe gardens are quiet on weekday mornings and crowded on weekends and public holidays. The annual farm festival on the second weekend of February brings in large numbers: free entry, cultural events, and an evening fireworks display over the lawns.`,
  },
  {
    id: "activity-beach-lighthouse-walk",
    category: "walk",
    title: "The Lighthouse and Fishing Village Walk",
    photo: "new-lighthouse.png",
    teaser:
      "From the promenade south through a working fishing village to the new lighthouse. Fabric warehouses with traditional looms, the old lighthouse on its circular base, and a 360-degree view from the top for 5 rupees.",
    duration: "1 to 2 hours",
    body: `The promenade on [Goubert Avenue](/discover/white-town/avenue-goubert) is the obvious starting point. Walk south from the Gandhi statue, past the Schoelcher bust on Port Road, toward the old lighthouse built by French engineer Louis Guerre in 1835. The old lighthouse is now a landmark rather than a working light (it was decommissioned in 1979) but its proportions are elegant: 29 metres tall on a circular white base, visible for 15 miles at sea in its working days.\n\n**Two routes, one clear recommendation**\n\nThere are two ways to reach the new lighthouse. The direct route goes past the cricket stadium. The other takes you through a small fishing village and is longer — but for many people it turns out to be one of their favourite walks in all of Pondicherry.\n\nLeaving the busy modern road behind, you enter a world of small square houses and narrow alleyways leading off in all directions. To either side of the dusty street, brightly coloured saris swing on washing lines while children cycle past. Goats wander everywhere, nibbling at anything within reach.\n\nAs you go deeper into the village, the contrast with the upmarket cafes and bakeries of the French Quarter becomes striking. The lanes eventually open onto fabric warehouses lining the street, traditional wooden looms visible through open doors. Watch women pull and feed large bolts of cloth through their looms, working in patterns that have not changed much in a century. The occasional sound of a mobile phone alert is the only reminder that this is still the 21st century.\n\nFrom the fabric warehouses it is a short two-minute walk to the lighthouse entrance.\n\n**The lighthouse**\n\nThe new lighthouse in Dubrayapet (2km south of the White Town) is a black and white striped tower built in the 1970s. It began guiding ships safely around the coast in 1979, when the old light was retired. Remove your shoes before entering — this is required before you climb.\n\nThere is no lift. The spiral staircase of 250 steps is worth the effort, and worth pausing on: look up or down as you climb and the stairs form an eye-pleasing geometric spiral. At the top, a 360-degree viewing deck takes in the whole of Pondicherry, the Bay of Bengal, and the low flat country stretching west. Entry is 5 rupees, plus 25 rupees if you carry a camera.\n\nOpening hours: Tuesday to Sunday, 10am to 1pm and 3pm to 6pm. Closed Mondays. Occasional maintenance closures.\n\n**Note on swimming:** The beach along the Pondicherry promenade is not safe for swimming. The current is strong, warning signs are posted, and lifeguards are present. Auroville Beach, 30km north, is the nearest safe swimming beach.`,
  },

  // ── DAY TRIPS ─────────────────────────────────────────────────────────────

  {
    id: "daytrip-ousteri",
    category: "daytrip",
    title: "Ousteri Lake",
    cardTitle: "Ousteri Lake",
    photo: "ousteri-lake.jpg",
    teaser:
      "The largest natural freshwater lake in the Pondicherry region, five kilometres west of town. A Ramsar wetland with over 170 recorded bird species, flamingoes, painted storks, and spot-billed pelicans among them.",
    duration: "Half day",
    body: `Ousteri (also spelled Oussudu) is a shallow freshwater lake covering around 40 square kilometres on the western edge of the Pondicherry Union Territory, straddling the border with Tamil Nadu. The lake and its surrounding wetlands were declared a Ramsar site, an internationally important wetland, in 2002, and the area falls under a wildlife protection order that restricts development on the shoreline.

**The birds**

More than 170 bird species have been recorded at Ousteri, making it one of the most significant bird habitats in the Pondicherry region. The winter months (November through February) bring migrant species from Central Asia and the Himalayas: flamingoes are present in numbers during peak season, alongside painted storks, spot-billed pelicans, lesser whistling ducks, purple herons, and a range of waders. Resident species including kingfishers, cormorants, and egrets are visible year-round.

Early morning visits give the best sightings: bring binoculars if you have them. The best positions are along the eastern bund road, from which the open water stretches west.

**Boating**

The NTR Boating Park on the eastern shore operates pedal boats and row boats for lake access. Hours are generally 9am to 5pm; boats can be hired for modest fees. The boat trip across part of the lake gives a closer view of water birds than the shore positions.

**Getting there**

Ousteri is approximately five kilometres west of Pondicherry town centre, a 15-minute auto-rickshaw or scooter ride. Take the Ousteri Lake Road from the Heritage Town. Entry to the boating park is a nominal fee. The outer bund roads are freely accessible.`,
  },

  {
    id: "daytrip-gingee",
    category: "daytrip",
    title: "Gingee Fort",
    cardTitle: "Gingee Fort",
    photo: "gingee-fort.jpg",
    teaser:
      "Seventy kilometres west of Pondicherry, one of the most formidable fortresses in South India: three granite hills connected by walls and bastions, called the Troy of the East by the British.",
    duration: "Full day",
    body: `Gingee (pronounced Senji) is one of the most impressive fortresses in South India and one of the least visited given its scale. Located 70 kilometres west of Pondicherry, about 1.5 hours by road, the fort complex covers three separate granite hills connected by massive walls, bastions, and moats spanning approximately 11 square kilometres.

**History**

Built by the Nayaks of Gingee in the 15th century on foundations that may be older, the fort passed through successive hands without ever falling easily. Shivaji captured it in 1677 and found it so impressive that he called it the most impregnable fortress in India. The Mughals besieged it for eight years and finally took it in 1698 only through negotiation rather than force. The French held it briefly in the 18th century, followed by the British, who named it the Troy of the East, a phrase that has stayed with it since.

**What to see**

Rajagiri is the tallest of the three hills at 160 metres, with the most substantial ruins on the summit: a granary, a palace, a temple, a chakra (drilling stone), an elephant tank, and an audience hall perched at the edge of the cliff. The climb takes 45 to 60 minutes on steep rock steps and is demanding in the heat of the day.

Krishnagiri hill is lower and contains the main gateway complex, the 1,000-pillared audience hall, a tank, and a small museum at its base. The inner enclosure of the fort on this hill is the most photogenic section.

Chandrayandurg connects the two main hills and contains water cisterns and defensive walls.

**Getting there**

Self-driven scooter or car is the most practical option: the road from Pondicherry via Tindivanam is straightforward. Buses run from the Pondicherry main bus stand to Gingee (change at Villupuram or Tindivanam). Journey time by bus is around two hours.

**Timings and entry**

Archaeological Survey of India site: open daily, 9am to 5:30pm. Entry fee approximately 40 rupees for Indian nationals, 600 rupees for foreign visitors. Allow a full day if you intend to climb Rajagiri.`,
  },

  {
    id: "daytrip-arikamedu",
    category: "daytrip",
    title: "Arikamedu",
    cardTitle: "Arikamedu",
    photo: "arikamedu.jpg",
    teaser:
      "Four kilometres south of the French Quarter, an ancient port where Roman traders exchanged Mediterranean goods for Indian cotton and gems. Roman amphorae, Arretine pottery, and a gemstone engraved with the Emperor Augustus were excavated here.",
    duration: "Half day",
    body: `**Built:** Occupied from about the 2nd century BCE to the 8th century CE

Four kilometres south of the French Quarter lies one of the most important archaeological sites in India. At first glance, Arikamedu is underwhelming. There are no towering ruins, no grand temples, and little to suggest that this quiet stretch beside the Ariyankuppam River was once an international port. Yet beneath these low mounds archaeologists uncovered unmistakable evidence that ships from the Roman world were trading here two thousand years ago.

Italian tableware made in Arezzo. Roman wine amphorae. Mediterranean glass. An engraved gemstone depicting the Emperor Augustus. These were not local imitations but objects that had travelled thousands of kilometres across the Red Sea and the Indian Ocean, arriving on the Tamil coast within decades of Rome opening direct maritime trade with India.

## The Ancient Port

Arikamedu flourished as a trading settlement from about the 2nd century BCE until the 8th century CE. Its greatest prosperity came during the first centuries BCE and CE, when merchants from the Mediterranean exchanged wine, olive oil, fine pottery, and luxury goods for South Indian cotton textiles, beads, precious stones, pearls, and spices.

Excavations have revealed far more than imported Roman goods. Archaeologists identified dyeing vats where fine cotton cloth was coloured for export, workshops producing the celebrated Indo-Pacific glass beads that were traded across Asia and the Mediterranean, and evidence of a bustling settlement of craftsmen, traders, and sailors. The northern part of the site appears to have contained large communal structures associated with the harbour, while the southern sector was devoted to industrial activity.

Ancient Tamil literature supports the archaeological evidence. Sangam poems describe *yavanas*, foreign merchants generally understood to be Greeks and Romans, arriving with wine and departing with pepper and fine textiles. The Roman writer Pliny the Elder famously complained that Rome was losing vast quantities of gold each year to India's luxury trade. Arikamedu provides some of the clearest archaeological evidence that this commerce was real.

The settlement is widely identified with **Poduke**, the trading port described in the *Periplus of the Erythraean Sea* and later by the geographer Ptolemy.

## Excavating Arikamedu

Although local discoveries had attracted attention earlier, Arikamedu entered world archaeology in 1945 when Sir Mortimer Wheeler excavated the site and identified it as a major Indo-Roman trading station. His discoveries of Roman amphorae and Arretine pottery transformed understanding of ancient maritime trade between the Mediterranean and India.

Further excavations by the French archaeologist Jean-Marie Casal between 1947 and 1950 added significantly to the picture while Puducherry was still under French administration. Between 1989 and 1992, the American archaeologist Vimala Begley re-examined the site and demonstrated that Arikamedu's history extended far beyond the Roman trading period. Rather than a settlement occupied for only a couple of centuries, it had remained active for more than six hundred years, from the 2nd century BCE until about the 8th century CE.

Many of the finest discoveries, including Arretine pottery bearing the stamps of Italian potters, Roman amphorae, glassware, beads, coins, terracotta objects, and sculptures, are now displayed in the [Pondicherry Museum](/discover/landmarks/museum). Some artefacts recovered during the French excavations are held in museums in France.

## Visiting Today

Arikamedu is best appreciated with a little imagination. What survives above ground is modest: low earthworks, scattered brick remains, and the foundations of a substantial brick warehouse overlooking the river. This was once a working port where cargo was unloaded, textiles dyed, beads manufactured, and merchants from distant cultures conducted business.

There are few visitor facilities and only limited interpretation on site, making a visit to the [Pondicherry Museum](/discover/landmarks/museum) highly recommended before coming here. Seeing the Roman pottery, amphorae, beads, and glassware first helps bring the landscape into focus.

The site lies about four kilometres south of the French Quarter near Ariyankuppam and can be reached by auto-rickshaw in about twenty minutes. Entry is free, and the cooler months from October to March offer the most comfortable conditions for exploring. An early morning visit is particularly rewarding, when the river is quiet and it is easier to imagine the harbour that connected the Tamil coast with the Roman world two thousand years ago.`,
    highlights: [
      "The site itself has no panels or infrastructure. Visit the Pondicherry Museum first to see the finds, including Arretine pottery with its Italian potters' stamps.",
      "Look for the low mound near the Ariyankuppam River estuary and the remains of the brick warehouse. This was a working port for over 600 years.",
      "The site may be the 'Poduke' described in the Periplus of the Erythraean Sea and by Ptolemy, possibly derived from Tamil 'Potikai', meaning 'meeting place'.",
    ],
    visitInfo: {
      hours: "Accessible at all times (ASI-protected, unmanaged)",
      entry: "Free",
      tip: "4 km south on the coast road toward Ariyankuppam. No signage or facilities on site. Visit the Pondicherry Museum first: the Arikamedu finds there make the site itself far easier to read.",
    },
  },

  {
    id: "daytrip-pichavaram",
    category: "daytrip",
    title: "Pichavaram Mangrove Forest",
    cardTitle: "Pichavaram",
    teaser:
      "One of India's largest mangrove forests, 65 kilometres north of Pondicherry. A boat through narrow waterways between the roots, with herons overhead and crabs below. One of the quietest and most unusual half-days you can spend near Pondicherry.",
    duration: "Half day",
    body: `Pichavaram lies approximately 65 kilometres north of Pondicherry, near the temple town of Chidambaram in Cuddalore district. It is one of the largest mangrove forests in India, covering around 1,100 hectares of tidal wetland between two estuaries: the Vellar to the north and the Coleroon to the south.\n\nThe forest is a dense network of waterways, islands, and channels threading between the aerial roots of the mangroves. From a boat, the canopy closes overhead and the noise of the coast disappears. The water is shallow and tidal, brackish and generally calm. The overall effect is unlike anything else near Pondicherry.\n\n**Getting there and getting on the water**\n\nBoats are operated by the Tamil Nadu Tourism Development Corporation (TTDC) from a boat house at the edge of the forest. Both motor boats and rowing boats are available; the rowing boats are quieter and the better choice for bird watching. The boat house also has a basic cafeteria.\n\nThe drive from Pondicherry takes around 90 minutes via the East Coast Road (ECR) and Chidambaram. Most visitors combine Pichavaram with a visit to the Nataraja Temple at Chidambaram, one of the most important Shiva temples in Tamil Nadu.\n\n**The birds**\n\nPichavaram is a significant bird habitat. Herons, egrets, kingfishers, cormorants, spoonbills, and painted storks are regularly sighted. The best time for bird watching is early morning, before the motor boats arrive in numbers.\n\n**When to go**\n\nThe forest is accessible year-round but most pleasant between October and February, when the heat is manageable and migrant birds are present. Avoid peak summer months (April and May). Early morning visits give the best light and the quietest conditions on the water.\n\n**Practical information**\n\nBoat house hours: generally 7am to 5pm. Timings can vary; check with your accommodation before setting out. The site is managed by TTDC and entry fees apply per boat. Facilities on site are basic.`,
    visitInfo: {
      hours: "Approximately 7am to 5pm (verify locally)",
      entry: "Per boat; rates vary by boat type",
      tip: "Go early. Rowing boats are quieter than motor boats and better for the birds. Combine with the Nataraja Temple at Chidambaram on the same day.",
    },
  },

  {
    id: "daytrip-auroville",
    category: "daytrip",
    title: "Day trip: Auroville",
    cardTitle: "Auroville",
    photo: "auroville.jpg",
    teaser:
      "30km north of Pondicherry: the experimental township founded in 1968 by Mirra Alfassa as a city belonging to no nation. The golden Matrimandir dome is the visual centre. Allow half a day minimum.",
    duration: "Half to full day",
    body: `Auroville was founded on 28 February 1968 by [Mirra Alfassa](/history/lives-and-legacies/mirra-alfassa), known as The Mother, as a city intended to belong to no single nation and to embody human unity in practice. Around 50,000 people attended the inauguration ceremony; delegates from 124 countries symbolically poured soil from their home nations into a marble urn at the centre of the site.\n\nToday Auroville is a functioning community of around 3,500 residents from 60 countries, living and working across a forested plateau north of Pondicherry. It has farms, schools, workshops, guesthouses, restaurants, and a software industry. It is governed by a board under the auspices of UNESCO.\n\n**The Matrimandir**

The golden dome of the Matrimandir is the architectural and spiritual centre of Auroville. Access to the interior is strictly managed: you must register in advance at the Visitor Centre to enter the meditation chamber inside. Day visitors can view the dome from the designated outer viewing point without advance registration.\n\nThe interior chamber houses a large crystal ball lit by a single beam of sunlight tracked through the day. It is designed exclusively for silent meditation. Photography inside is not permitted.

**Getting there**

Auroville is approximately 30km north of Pondicherry town, about a 30 to 40 minute drive. Auto-rickshaw or hired scooter are the most practical options from the White Town. Some guesthouses can arrange a driver for a half-day trip combining Auroville with the beaches north of town.

**Auroville Beach**

The beach near Auroville is the closest safe swimming beach to Pondicherry, with calmer water than the rocky promenade in town. Several restaurants and cafés operate nearby. If you are combining the Matrimandir visit with a beach afternoon, budget a full day.`,
  },
  {
    id: "daytrip-mahabalipuram",
    category: "daytrip",
    title: "Day trip: Mahabalipuram",
    cardTitle: "Mahabalipuram",
    photo: "mahabalipuram.jpg",
    teaser:
      "UNESCO-listed Pallava monuments carved from granite in the 7th century: cave temples, bas-reliefs, and a Shore Temple standing in the surf. Accessible by bus from the Pondicherry main depot.",
    duration: "Full day",
    body: `Mahabalipuram (Mamallapuram) is a UNESCO World Heritage Site on the Coromandel Coast, around 90km north of Pondicherry. It was the principal port of the Pallava dynasty, which controlled much of South India between the 4th and 9th centuries, and the monuments there are some of the finest examples of early medieval South Indian stone carving in existence.\n\n**What to see**

The Shore Temple stands on a low platform at the water's edge, built in the early 8th century and now partially eroded by a thousand years of sea spray. Its proportions are precise and its location extraordinary: a granite temple in the surf.\n\nThe Descent of the Ganges (Arjuna's Penance) is a bas-relief carving covering the face of a natural granite cliff: the largest open-air relief sculpture in the world, depicting an event from the Mahabharata with elephants, gods, humans, and animals carved at life size into the rock surface.\n\nThe Pancha Rathas (Five Chariots) are a series of monolithic carved structures cut from single pieces of rock in the shapes of different temple styles. They were never finished and never used as temples: they are exercises in architectural form.\n\n**Getting there**

Buses run from Pondicherry main bus depot north toward Chennai, passing the Mahabalipuram junction. Confirm with the conductor before boarding. Journey time is approximately two hours. Alternatively, hire a private driver for a more comfortable day trip: some tours from Chennai combine Mahabalipuram and the Kanchipuram temples.`,
  },

  // ── THEMES ────────────────────────────────────────────────────────────────

  {
    id: "theme-temples",
    category: "walk",
    title: "Temples of the Tamil Quarter",
    teaser:
      "The city's older history lies just across the canal, in the streets traditionally known as the Tamil Quarter. Here, temples, markets, and family houses reveal a settlement that long predates the arrival of the French East India Company in 1674.",
    duration: "2 to 3 hours",
    body: `For many visitors, the French Quarter defines Puducherry. Yet the city's older history lies just across the canal, in the streets traditionally known as the Tamil Quarter, now recognised as Heritage Town. Here, temples, markets, and family houses reveal a settlement that long predates the arrival of the French East India Company in 1674.

The canal, today called the Grand Canal, became the dividing line between two urban worlds. To the east lay the planned colonial town of broad avenues and European public buildings. To the west, Tamil neighbourhoods continued to develop around temples, markets, and artisan communities. The result is one of the most distinctive urban landscapes in India, where two traditions evolved side by side while remaining closely connected.

Exploring the temples of the Tamil Quarter offers a glimpse into the religious and cultural life that has shaped Puducherry for centuries.

**Manakula Vinayagar Temple**

Although it stands within today's French Quarter, Manakula Vinayagar Temple belongs historically to the older Tamil settlement. The temple was already established when the French founded Pondicherry in 1674 and remained on its historic site despite repeated eighteenth-century attempts by the colonial administration to relocate it.

Dedicated to Vinayagar, the Tamil form of Ganesha, the temple is among Puducherry's most visited places of worship. Its gold-plated gopuram, colourful sculptures, painted ceilings, and richly decorated halls make it one of the city's most impressive temple interiors. Daily pujas are held throughout the day, with the morning and evening ceremonies attracting the largest gatherings of devotees.

Many visitors remember the temple elephant, Lakshmi, who welcomed devotees for more than three decades by gently blessing them with her trunk. Following her death in 2022, she remains a cherished part of the temple's recent history.

**Sri Varadaraja Perumal Temple**

A short walk into the Tamil Quarter stands Sri Varadaraja Perumal Temple, one of Puducherry's principal Vaishnavite temples. Dedicated to Vishnu as Varadaraja Perumal, the temple is of medieval origin and continues to serve as an active centre of worship. Unlike the more visited Manakula Vinayagar Temple, it offers a quieter experience, allowing visitors to appreciate its traditional Dravidian architecture and the rhythms of daily temple life.

**Vedapureeswarar Temple**

Dedicated to Shiva, Vedapureeswarar Temple is among Puducherry's most important Shaivite shrines. The present temple dates to the eighteenth century, following the destruction of an earlier temple during the colonial conflicts of the 1740s. Rebuilt by the local community, it remains an active place of worship and an important reminder of the resilience of Puducherry's religious traditions during a turbulent period of its history.

**Siddhivinayakar Temple**

Often called Elai Pillaiyar Koil, or the "Temple of the Poor", Siddhivinayakar Temple is one of the oldest neighbourhood shrines in Heritage Town. Dating to the early eighteenth century, it is dedicated to Vinayagar and has served generations of local residents. Modest in scale compared with Manakula Vinayagar Temple, it offers a glimpse of everyday devotional life away from the city's busiest tourist sites. Its nineteenth-century gopuram rises above the surrounding streets, while the quiet inner courtyard provides a welcome contrast to the bustle outside.

**Worth the Short Journey: Sri Gokilambal Thirukameshwara Temple, Villianur**

About eight kilometres west of the city centre stands Sri Gokilambal Thirukameshwara Temple, one of the oldest and most important temples in the Puducherry region. With origins in the Chola period, the temple is dedicated to Shiva as Thirukameshwara and to Goddess Gokilambal. Its spacious temple tank, towering gopuram, and broad courtyards make it one of the finest examples of Dravidian temple architecture in the Union Territory.

The temple is especially renowned for its [annual car festival](/festivals/villianur-car-festival), during which the massive wooden chariot is drawn through the streets of Villianur by thousands of devotees. Visitors seeking a deeper understanding of Puducherry's religious heritage will find the short journey well worthwhile, offering a perspective that extends beyond the colonial city to the region's much older Tamil past.

**Visiting the Temples**

Visitors are welcome at all these temples, provided they observe local customs. Shoes must be removed before entering the temple precincts, and modest clothing covering the shoulders and knees is expected. Photography policies vary between temples and may also differ within individual parts of a temple, so it is always best to look for signs or ask permission.

The innermost sanctum is generally reserved for Hindu worshippers, but visitors of all faiths are welcome in the outer halls and courtyards, where they can observe the architecture, rituals, and devotional life with respect.`,
  },
];

export function getExploreArticle(id: string): ExploreArticle | undefined {
  return exploreArticles.find((a) => a.id === id);
}

export function getExploreByCategory(category: ExploreCategory): ExploreArticle[] {
  return exploreArticles.filter((a) => a.category === category);
}
