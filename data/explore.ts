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
    body: `The French Quarter of Pondicherry is one of the few places in India where you can walk down a street of colonial buildings with their original names still on the signs: Rue Dupleix, Rue Bussy, Rue de la Bourdonnais. The street grid was designed in the 1690s and has not changed since. The names survived decolonisation intact in 1962. Every name on the grid is a chapter in the story of French India.

**Where to start**

Begin at the Romain Rolland Library on the main cross-street of the French Quarter. The library was founded in 1827 and renamed in 1966 for the French Nobel laureate who corresponded with Gandhi. It is one of the oldest public libraries in India and a quiet way to enter the neighbourhood.

**The streets**

Walk south down Rue Romain Rolland toward the seafront. Turn onto Rue Dupleix and walk its length: the buildings here are among the best-preserved in the White Town, with painted facades, shuttered windows, and bougainvillea over the balconies. This is the street the Instagram photographs come from.\n\nAt the eastern end of Rue Dupleix, you reach Goubert Avenue and the seafront. Walk north along the promenade toward the Gandhi statue (13 feet of bronze on eight monolithic granite pillars from Gingee Fort, unveiled Republic Day 1965) and the War Memorial (1938), where the names of Pondicherry's dead from two world wars are recorded in stone.

**The temple**

Turn west from the promenade down any of the cross-streets and you will find the Manakula Vinayagar Temple in the middle of the grid. Over 800 years old and dedicated to Ganesh, it is an extraordinary contrast to the colonial architecture around it: painted towers, gold pillars, marble floors, and a constant flow of worshippers. Entry is free; shoes must be left at the entrance.

**The promenade**

Return to Goubert Avenue at the end of the walk. Le Café, the Sri Aurobindo Ashram's beachfront café, is the right place to sit with a coffee and watch the light change on the water. The Bay of Bengal faces east: sunrises here are worth the early alarm.`,
  },
  {
    id: "walk-manakula-vinayagar",
    category: "walk",
    title: "Manakula Vinayagar Temple",
    cardTitle: "Manakula Vinayagar",
    teaser:
      "One of the oldest continuously active Hindu temples in Puducherry, established before the French arrived in 1674. It survived every colonial attempt at relocation through sustained local resistance.",
    duration: "1 hour",
    photo: "manakula-vinayagar.jpg",
    body: `A short walk from the French Institute, Manakula Vinayagar Temple is one of the oldest continuously active Hindu temples in Puducherry. Established before the arrival of the French in 1674, it remained on its historic site as the colonial town grew around it and today stands as one of the city's most important religious and cultural landmarks.

**History**

The temple was already established when the French East India Company founded its settlement at Pondicherry in 1674. As the colonial administration developed the town according to a planned street layout, officials made several attempts during the eighteenth century to relocate the shrine. These proposals met sustained opposition from the local Hindu community, and the temple remained in its historic location. Its continued presence reflects both the strength of local religious life and the limits of colonial authority in reshaping an existing sacred landscape.

**The Shrine**

The presiding deity is Vinayagar, the Tamil name for Ganesha, worshipped here as Manakula Vinayagar. The temple's gold-plated gopuram is decorated with numerous forms of Ganesha, while the interior features painted pillars, richly ornamented ceilings, and a series of mandapams leading to the sanctum. Daily pujas are conducted throughout the day, drawing a steady stream of devotees. The morning and evening services are particularly atmospheric, with the sounds of chanting, bells, and devotional music filling the temple.

**Lakshmi**

For more than three decades, the temple elephant, Lakshmi, was one of Puducherry's most familiar and beloved figures. Standing at the entrance, she greeted generations of devotees and visitors, gently placing her trunk on their heads as a blessing. For many people, meeting Lakshmi became as memorable a part of visiting the temple as offering prayers inside the shrine.

Lakshmi died in November 2022 after decades of service to the temple. Her passing prompted an outpouring of public grief, and thousands of devotees attended her funeral rites. Although visitors no longer receive her blessing at the entrance, Lakshmi remains an enduring part of the temple's recent history and of the memories of countless residents and travellers.

**Visiting**

Entry is free and all visitors are welcome, provided they dress modestly and respect the temple's customs. The temple is generally open from about 5:45 am to 12:30 pm and from 4:00 pm to 9:30 pm, although timings may vary on festival days. The evening hours are especially rewarding, when lamps are lit and the temple takes on a warm glow of incense, prayer, and devotional music.

The temple's principal annual festival is Vinayaka Chaturthi, celebrated with special ceremonies, processions, and large gatherings of devotees from across Puducherry and neighbouring Tamil Nadu.`,
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
    category: "activity",
    title: "The Lighthouse and Fishing Village Walk",
    teaser:
      "From the promenade south through a working fishing village to the new lighthouse. Fabric warehouses with traditional looms, the old lighthouse on its circular base, and a 360-degree view from the top for 5 rupees.",
    duration: "1 to 2 hours",
    body: `The promenade on Goubert Avenue is the obvious starting point. Walk south from the Gandhi statue, past the Schoelcher bust on Port Road, toward the old lighthouse built by French engineer Louis Guerre in 1835. The old lighthouse is now a landmark rather than a working light (it was decommissioned in 1979) but its proportions are elegant: 29 metres tall on a circular white base, visible for 15 miles at sea in its working days.\n\nContinue south through the fishing village. This is the route worth taking for the walk itself, not just the destination: fabric warehouses line the lanes with traditional wooden looms visible through open doors, weavers working cloth in patterns that have not changed much in a century.\n\nThe new lighthouse in Dubrayapet (2km south of the White Town) is a red and white striped tower built in 1979 when the old light was retired. The spiral staircase of 250 steps leads to a viewing deck with a 360-degree view over the whole of Pondicherry, the Bay of Bengal, and the low flat country stretching west. Entry is 5 rupees, plus 25 rupees if you carry a camera.\n\nOpening hours: Tuesday to Sunday, 10am to 1pm and 3pm to 6pm. Closed Mondays. Occasional maintenance closures.\n\n**Note on swimming:** The beach along the Pondicherry promenade is not safe for swimming. The current is strong, warning signs are posted, and lifeguards are present. Auroville Beach, 30km north, is the nearest safe swimming beach.`,
  },

  // ── DAY TRIPS ─────────────────────────────────────────────────────────────

  {
    id: "daytrip-ousteri",
    category: "daytrip",
    title: "Ousteri Lake",
    cardTitle: "Ousteri Lake",
    photo: "ousteri-lake.jpg",
    teaser:
      "The largest natural freshwater lake in the Pondicherry region, five kilometres west of town. A Ramsar wetland with over 170 recorded bird species — flamingoes, painted storks, and spot-billed pelicans among them.",
    duration: "Half day",
    body: `Ousteri (also spelled Oussudu) is a shallow freshwater lake covering around 40 square kilometres on the western edge of the Pondicherry Union Territory, straddling the border with Tamil Nadu. The lake and its surrounding wetlands were declared a Ramsar site — internationally important wetland — in 2002, and the area falls under a wildlife protection order that restricts development on the shoreline.

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
    body: `Gingee (pronounced Senji) is one of the most impressive fortresses in South India and one of the least visited given its scale. Located 70 kilometres west of Pondicherry — about 1.5 hours by road — the fort complex covers three separate granite hills connected by massive walls, bastions, and moats spanning approximately 11 square kilometres.

**History**

Built by the Nayaks of Gingee in the 15th century on foundations that may be older, the fort passed through successive hands without ever falling easily. Shivaji captured it in 1677 and found it so impressive that he called it the most impregnable fortress in India. The Mughals besieged it for eight years and finally took it in 1698 only through negotiation rather than force. The French held it briefly in the 18th century, followed by the British, who named it the Troy of the East — a phrase that has stayed with it since.

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
      "Three kilometres south of Pondicherry, an ancient port where Roman traders exchanged Mediterranean goods for Indian cotton and gems. Roman amphorae and Arretine pottery excavated here confirmed the oldest known Indo-Roman trade route.",
    duration: "1 to 2 hours",
    body: `Arikamedu is an archaeological site on the south bank of the Ariyankuppam River, three kilometres south of central Pondicherry. It is not a dramatic ruin. There are no standing columns or ornate carvings. What it is, for those drawn to ancient history, is one of the most historically significant sites on the Indian coast — a place where the classical Mediterranean world and South India met in trade across two thousand years ago.

**The history**

The site was active as a port settlement from roughly the 2nd century BCE to the 3rd century CE. During the height of the Indo-Roman trade (1st century BCE to 1st century CE), Roman merchants came here to buy fine cotton cloth (muslin), gems, pearls, and spices, paying with gold coins, wine, olive oil packed in distinctive ceramic amphorae, and luxury goods including Italian Arretine pottery (the red-glaze tableware of Roman dining).

The Roman historian Pliny the Elder complained that Rome was haemorrhaging gold into India for luxuries: the site at Arikamedu is one of the physical confirmations that he was right.

**The excavation**

Sir Mortimer Wheeler excavated Arikamedu in 1945 and identified it as the Indo-Roman trading post described in ancient texts, including the Periplus of the Erythraean Sea. The finds go beyond the famous amphorae and Arretine tableware: excavations also recovered Roman gold, silver, and bronze coins, glass vessels with decorative inlays, semi-precious stone and glass beads, terracotta figurines, and the everyday tools of a working craftsmen's settlement. Most of these objects are now in the Pondicherry Museum on Saint Louis Street. The museum is a better place to see the material than the site itself.

**The site today**

The archaeological area sits on the river bank in the Ariyankuppam village area, about 7 km from central Pondicherry. It is a quiet, open site with low earthwork remains and information boards. There is very little shade, so an early morning visit is strongly recommended, and October to March is the most comfortable season. Entry is free. A short walk from the site brings you to the Jesuit Mission House, a colonial-era building worth a brief look if you are already in the area. Serious archaeology enthusiasts will find the visit worthwhile; casual visitors may prefer to see the finds at the museum and come here briefly for the historical context.

**Getting there**

Auto-rickshaw from central Pondicherry: 20 to 25 minutes, approximately 100 to 150 rupees one way. Tell the driver the Ariyankuppam bridge or Arikamedu archaeological site.`,
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
    body: `Auroville was founded on 28 February 1968 by Mirra Alfassa, known as The Mother, as a city intended to belong to no single nation and to embody human unity in practice. Around 50,000 people attended the inauguration ceremony; delegates from 124 countries symbolically poured soil from their home nations into a marble urn at the centre of the site.\n\nToday Auroville is a functioning community of around 3,500 residents from 60 countries, living and working across a forested plateau north of Pondicherry. It has farms, schools, workshops, guesthouses, restaurants, and a software industry. It is governed by a board under the auspices of UNESCO.\n\n**The Matrimandir**

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
    category: "theme",
    title: "Temples of the Tamil Quarter",
    teaser:
      "North of the French Quarter, in the Tamil Quarter (Heritage Town), two major temples and several smaller shrines represent a Hindu presence in Pondicherry that predates the French by centuries.",
    duration: "2 to 3 hours",
    body: `The canal that runs through Pondicherry marked the original boundary between the French White Town to the east and the Tamil Quarter (officially Heritage Town) to the west. The French built their colonial city on one side; on the other, Tamil Pondicherry continued with its own temples, markets, and social life.\n\nThe Tamil Quarter's temples are the reason to cross the canal.

**Manakula Vinayagar Temple**

Technically located within the White Town grid (the French Quarter absorbed it over the centuries), the Manakula Vinayagar Temple on Mission Street is over 800 years old and dedicated to Ganesh. It is the most visited temple in Pondicherry: painted towers, golden pillars, marble floors, and a working elephant named Lakshmi who blesses visitors at the entrance. Hours are 5:45am to 12:30pm and 4pm to 9pm. Entry is free. Remove shoes at the entrance; shoulders and knees should be covered.

**Sri Varadaraja Perumal Temple**

In the Tamil Quarter proper, the Sri Varadaraja Perumal Temple is believed to have been built in the 11th century and is dedicated to Vishnu. It is a working temple of significant antiquity, with far fewer tourists than the Manakula Vinayagar.

**Sri Vedavaneswarar Temple**

Dedicated to Shiva, this temple stands across from the new lighthouse entrance. Smaller than the two above but worth visiting if you are walking the lighthouse route.

**What to know before entering**

All temples require shoes to be removed before entering; leave them at the designated storage area (a small donation is expected). Dress conservatively: shoulders and knees covered. Photography rules vary by temple and by area within the temple: look for signs or ask. The inner sanctum of most Hindu temples is restricted to Hindu worshippers; respectful observation from the designated outer areas is welcome for all visitors.`,
  },
];

export function getExploreArticle(id: string): ExploreArticle | undefined {
  return exploreArticles.find((a) => a.id === id);
}

export function getExploreByCategory(category: ExploreCategory): ExploreArticle[] {
  return exploreArticles.filter((a) => a.category === category);
}
