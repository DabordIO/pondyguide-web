export type ArtsCategory = "workshop" | "wellness" | "gallery" | "museum" | "craft";

export interface ArtsArticle {
  id: string;
  title: string;
  category: ArtsCategory;
  duration: string;
  teaser: string;
  body: string;
  address?: string;
  website?: string;
  photo?: string; // filename under /public/arts/
}

export const artsArticles: ArtsArticle[] = [
  // ── WORKSHOPS ─────────────────────────────────────────────────────────────

  {
    id: "kolam-masterclass",
    title: "Kolam Masterclass at Sita Cultural Center",
    category: "workshop",
    duration: "1 hour 30 minutes (10:00 AM or 3:00 PM slots)",
    teaser:
      "South India's best entry-point into daily craft tradition: a small-group lesson in Kolam, the geometric rice-powder patterns that Tamil women draw on their doorsteps every morning to welcome prosperity.",
    body: `South India is known for its lush scenery and standout attractions, but the most direct entry-point into this region is through its daily craft traditions. This instructive lesson introduces the sacred art of Kolam: the geometric, rice-powder-painted patterns that local women draw on the thresholds of their homes every morning to welcome prosperity.

Hosted at the Sita Cultural Center, this family-friendly workshop is led by a professional local instructor who breaks down the mathematics of dot grids and freehand colour fills. The class covers historical context alongside technique, and all materials are included: raw rice flour and the coloured powders needed for the patterns.

**Who it is for**

The class is open to both children (ages 6 and up) and adults, in groups of no more than six. The small group size is the point: the instructor works with each participant individually on the geometry of the pattern. Beginners leave with enough understanding to draw their own designs at home.

**Practical details**

Classes run at 10:00 AM and 3:00 PM. Booking is available online. The Sita Cultural Center is wheelchair-accessible and near public transport. It sits at the corner of Mission Street and Candappa Moudaliar Street, adjacent to White Town.`,
    address: "22 Kandappa Mudaliyar Street, White Town, Puducherry 605001",
    photo: "kolam-masterclass.jpg",
  },

  {
    id: "franco-tamil-cooking",
    title: "Pondicherry's Creole Cuisine",
    category: "workshop",
    duration: "Three centuries in the making",
    teaser:
      "Pondicherry's most distinctive food tradition is the result of three centuries of French and Tamil cultures sharing the same kitchen. The cuisine that emerged from that encounter exists nowhere else in India, and is quietly disappearing.",
    body: `Of all the traces that three centuries of French presence left in Pondicherry, the most surprising is culinary. The hybrid cooking tradition known as Franco-Tamil or Creole cuisine grew not from any deliberate design but from the daily friction of colonial life: Tamil cooks working in French kitchens, French administrators eating in Indian homes, and the slow accumulation of mutual adaptation over generations.

The result is a cuisine that is neither purely Tamil nor purely French, and that cannot be confused with either.

**What makes it distinct**

The clearest marker is the souring agent. Standard Tamil cooking uses tamarind or tomato. Creole cuisine uses vinegar, a French pantry staple, producing a sharper, thinner acidity that changes the character of a dish entirely. This single substitution runs through almost the entire repertoire.

The second marker is spice restraint. The cuisine uses spices, but uses them aromatically rather than for heat. Bay leaf, cinnamon, clove, anise, and poppy seed appear where Tamil food would reach for chilli. As one of the last custodians of the tradition put it: "We use lots of spices in our food, but our food is never spicy."

The third element is technique. French cooking brought to Pondicherry the use of stocks as flavour bases and the practice of slow braising on low heat, both foreign to the quick-fry style of standard Tamil cooking. Coconut milk, meanwhile, was adopted as a moderating element to thin sauces toward a French-style consistency and to temper heat without butter, which the tropical climate made impractical.

**The key dishes**

Fish Assad Curry is the signature dish of the tradition: fresh fish (typically butterfish or pomfret) cooked low and slow in coconut milk with anise, curry leaves, poppy seed paste ground fresh, and finished with lime. The poppy seed element is unusual in South Indian cooking and marks the dish as something genuinely layered.

Meen Puyabaise is the most emblematic fusion in the repertoire. The French bouillabaisse (a Marseille seafood stew) was transformed into a turmeric-tinted broth cooked in ghee instead of olive oil, preserving the French principle of slow-extracting flavour from multiple fish varieties while replacing the Provençal aromatics with Tamil ones. The name is a direct phonetic rendering: meen is fish in Tamil; puyabaise is bouillabaisse spoken with a Tamil accent.

Vadouvan is the spice blend most associated with the tradition: a slow-cooked paste of curry leaves, shallots, mustard seeds, fenugreek, cumin, and turmeric. It is one of the few cases where the culinary exchange ran from Pondicherry back to France. French haute cuisine adopted vadouvan through the colonial connection, and it now appears in Parisian restaurant menus as an "Indian" spice, rarely credited to its actual origin in the Franco-Tamil kitchen.

Yeral Vindail (prawn cooked with coconut milk and vinegar) shows a Portuguese trace in the tradition: the vindail is structurally related to Goan vindaloo, itself a hybrid of Portuguese vinha d'alhos. Vietnamese spring rolls also appear regularly at Creole meals, brought back by Pondicherry families who spent decades working in French Indochina and returned with another culinary layer folded into an already complex repertoire.

**Where the tradition lives now**

The 1954 transfer of Pondicherry to India removed the institutional base of the cuisine. The French households and the renonçant families (Tamil Catholics who had adopted French civil law and whose kitchens were the primary laboratory of the hybrid cooking) gradually dispersed. The distinctive dishes disappeared from public restaurants as mainstream Tamil and North Indian food occupied the space.

The tradition survives today primarily in private homes and in two places that offer it as a structured experience. If you want to cook it yourself, both Traveling Spoon (travelingspoon.com) and the Sita Cultural Center in White Town offer hands-on Creole cooking classes with local instructors. Either is worth an afternoon.`,
    website: "sitaculturalcenter.com/product/creole-cooking-class/",
  },

  // ── WELLNESS ──────────────────────────────────────────────────────────────

  {
    id: "uditam-yoga-retreat",
    title: "Yoga & Wellness Retreat at Uditam",
    category: "wellness",
    duration: "2.5 days (Friday morning to Sunday noon)",
    teaser:
      "A weekend retreat on the beachfront at Kuruchikuppam, rooted in Sri Aurobindo's philosophy of Integral Yoga. Morning asana sessions overlooking the Bay of Bengal, guided meditation, sound therapy, and vegetarian yogic meals, all included.",
    body: `For those looking to step away from the pace of everyday life, Uditam, the Institute of Integral Healing, offers a structured gateway into personal wellness. Operating as a dedicated initiative under the Sri Aurobindo Society, Uditam is based at Matriniketan, a restored beachfront heritage facility in Kuruchikuppam, one kilometre north of the White Town.

**The retreat**

The 2.5-day weekend programme runs from Friday morning to Sunday noon. Days are structured around early morning rooftop asana and pranayama sessions overlooking the breaking waves of the Bay of Bengal, followed by guided meditation, sound therapy, and Tratak (single-point gazing). The retreat package is fully inclusive: vegetarian yogic meals are provided throughout, and accommodation is available in single, double, or triple occupancy rooms on site.

**The philosophy**

Uditam draws on Sri Aurobindo's Integral Yoga, which does not treat the body, mind, and spirit as separate concerns to be addressed in sequence. The practice is oriented toward what Sri Aurobindo called the development of the whole person: physical, emotional, mental, and spiritual together. The beachfront setting at Matriniketan, facing open sea, makes this one of the most atmospheric yoga venues in South India.

**Regular classes**

Outside the weekend retreat, Uditam also offers regular yoga and meditation sessions in Pondicherry, including beginners' workshops, pranayama intensives, and stress management programmes. Contact the centre directly for current scheduling.`,
    address: "34 Maravadi Street, Kuruchikuppam, Puducherry 605012",
  },

  {
    id: "ashtanga-shala",
    title: "Ashtanga Shala Pondicherry",
    category: "wellness",
    duration: "2 hours per session (Mysore-style self-practice)",
    teaser:
      "A dedicated Ashtanga Mysore practice space in the heart of the White Town, open to visiting practitioners of all levels, Thursday through Saturday.",
    body: `Ashtanga Shala Pondicherry is one of the few dedicated Ashtanga practice spaces in the city: a proper shala offering Mysore-style self-practice sessions with teacher guidance, rather than a led class format.

**What is Mysore style**

In Mysore-style Ashtanga, practitioners work through their own memorised sequence at their own pace. The teacher moves through the room, offering hands-on adjustments and instruction tailored to each individual's practice. This format is traditional to the Ashtanga method as taught in Mysore, Karnataka, and it accommodates both beginners learning their first postures and experienced practitioners working through advanced series.

**The schedule**

Mysore sessions run on Wednesday, Thursday, and Friday from 7:30 AM to 9:30 AM. Saturday offers a led class from 8:00 AM to 9:30 AM, in which the teacher calls the posture sequence aloud while the group moves together. Visiting practitioners are welcome.

**Practical details**

The shala is on the second floor at 6 Eswaran Kovil Street in the White Town. Contact the shala directly to confirm current availability and drop-in arrangements before arriving.`,
    address: "2nd Floor, 6 Eswaran Kovil Street, Pondicherry 605001",
    website: "+91 94870 61007",
  },

  // ── CRAFT ─────────────────────────────────────────────────────────────────

  {
    id: "golden-bridge-pottery",
    title: "Golden Bridge Pottery",
    category: "craft",
    duration: "Studio visit: 1 hour. Professional course: 7 months (March to September)",
    teaser:
      "Founded in 1971, Golden Bridge Pottery in Mudaliarpet is the pioneer of hand-glazed, wood-fired stoneware in South India. Casual visitors cannot book wheel-throwing sessions, but the campus and its shop are worth making time for.",
    body: `Founded in 1971 by Ray Meeker and Deborah Smith, Golden Bridge Pottery in Mudaliarpet is universally recognised as the pioneer of hand-glazed, wood-fired stoneware pottery in South India. It is not a tourist attraction in the conventional sense: it is an active, professional production studio and residency, and it operates accordingly.

**For casual visitors**

Golden Bridge does not offer casual one-day wheel-throwing sessions or drop-in hobby classes. If you arrive expecting a quick turn at the wheel, you will be politely turned away. What the campus does offer is something more interesting: a working studio of genuine distinction, an outdoor space where monumental clay sculptures are crafted on site, and an on-site retail boutique stocking internationally recognised, hand-painted functional stoneware. The crockery sold here, heavy and beautifully glazed, is made nowhere else in India.

Plan a weekday visit and avoid the 12:00 PM to 1:00 PM lunch break when the gates are closed. Respect the artists' workflow.

**For serious students**

The studio runs a highly competitive 7-month intensive course from March through September, designed to train professional ceramicists from the ground up. The curriculum covers clay wedging, hand-building, wheel-throwing, glazing chemistry, and complex kiln firings. Places are limited and the application process is selective. This is not a weekend workshop.`,
    address: "Mudaliarpet, Puducherry",
  },

  {
    id: "handmade-paper-factory",
    title: "Sri Aurobindo Handmade Paper Factory",
    category: "craft",
    duration: "45 minutes",
    teaser:
      "An eco-friendly manufacturing landmark operating since the mid-20th century. The factory converts 100% cotton rag waste into premium, wood-free luxury paper. Visitors walk the factory floor and shop in the on-site boutique.",
    body: `Operating continuously since the mid-20th century, the Sri Aurobindo Handmade Paper Factory on S.V. Patel Salai is one of Pondicherry's most distinctive craft institutions. The factory converts 100% cotton rag waste into premium, wood-free luxury paper through a process that is entirely by hand. It is a working factory that welcomes visitors.

**What you see**

Visitors are permitted to walk through designated sections of the factory floor to watch the production cycle: cotton rags are pulped, the pulp is spread on wire frames, sheets are pressed and sun-dried in long outdoor rows, and finished paper is silk-screened by hand. Seeing the labour involved changes how you look at the finished product in a way that a shop alone cannot.

**The shop**

After the factory tour, the on-site retail boutique stocks hand-bound journals in a range of sizes, marbled stationery sets, paper lampshades, decorative bags, greeting cards, and writing paper. The products are genuinely distinctive: the paper has a texture and weight you will not find in commercial stock. They pack well for travel.

**Practical note**

Combine this visit with the Sri Aurobindo Ashram on Marine Street, a short walk away. Together they give a picture of the practical and spiritual dimensions of what the Ashram community has built in Pondicherry over a century.`,
    address: "S.V. Patel Salai, Puducherry",
  },

  {
    id: "craft-village-murungapakkam",
    title: "Art & Craft Village at Murungapakkam",
    category: "craft",
    duration: "2 to 3 hours",
    teaser:
      "Twenty-four open-air artisan stalls on four acres along the Chunnambar backwaters, built to preserve India's fading regional craft traditions. Entry is free. Souvenirs are GI-tagged. The Indian Coffee House is on campus.",
    body: `The Art and Craft Village at Murungapakkam was built deliberately to sustain craft traditions that have been declining across India: terracotta modelling, coconut shell carving, handloom weaving, seashell engraving, traditional painting. Sprawled across four scenic acres along the banks of the Chunnambar backwaters, the campus holds 24 open-air artisan stalls where visitors can watch craftspeople at work.

**What you will find**

Because artisan schedules rotate seasonally, the live demonstrations vary from week to week. On any visit you might observe terracotta work, complex coconut-shell carving, seashell engraving, or handloom weaving. What remains constant is the ability to buy directly from the makers: the souvenirs here are genuine, GI-tagged handicrafts, not mass-produced reproductions. The pricing reflects the actual production cost rather than a tourist markup.

The experience is entirely non-commercialised and entry is free.

**On the same campus**

The village shares its grounds with a local branch of the Indian Coffee House, one of the better places in the region for a filter coffee and a thali. The backwaters location also gives access to mangrove boat tours along the river mouth, run from the riverside at Chunnambar. If you are combining this with a boat trip, allow an extra hour.`,
    address: "Murungapakkam, near Chunnambar Backwaters, Puducherry",
  },

  {
    id: "auroville-artisan",
    title: "Auroville: Visitors' Centre & Artisan Boutiques",
    category: "craft",
    duration: "2 to 3 hours, or a full day if exploring further",
    teaser:
      "The international township 10 km north of Pondicherry has been producing exceptional handmade goods since 1968: natural incense, hand-thrown ceramics, organic textiles, and sustainable products made to unusually high standards.",
    body: `Auroville was founded in 1968 with the intention of being a city beyond national identity, creed, and commerce. Alongside its spiritual and urban-planning ambitions, the community has built a network of artisan enterprises over six decades that produce genuinely unusual goods, made with ethical supply chains before that phrase existed.

**The Visitors' Centre**

The Auroville Visitors' Centre, on the main road into the township, is the practical starting point. It offers an introductory exhibition on the township's history, a vegetarian restaurant, and the Boutique de Auroville: the main retail outlet for Auroville-made products. Handmade ceramics from Auroville Pottery, natural incense from Maroma (known internationally as one of the finest natural incense producers), organic cotton textiles, handcrafted leather goods, and natural skincare products are all available here. The quality is consistently high and the provenance is genuine.

**The artisan units**

Beyond the Visitors' Centre, the township has individual artisan units scattered across its campus. Auroville Pottery runs open studio hours. The farm shops sell fresh produce and prepared foods. Several boutiques sell clothing, jewellery, and design objects made within the township. Finding them requires some wandering, which is part of the point.

**Practical**

Auroville is 10 km north of Pondicherry, about 20 minutes by road. Motorbikes and bicycles can be rented in Pondicherry for the round trip. The Visitors' Centre is open daily. For the Matrimandir, the spiritual heart of the township, separate passes are required and must be booked through the Visitors' Centre. See auroville.org for current access arrangements.`,
    website: "auroville.org",
    address: "Auroville, Tamil Nadu 605101 (10 km north of Pondicherry)",
    photo: "matrimandir-auroville.jpg",
  },

  // ── GALLERY ───────────────────────────────────────────────────────────────

  {
    id: "tasmai-gallery-hopping",
    title: "Gallery Hopping: Tasmai & White Town Studios",
    category: "gallery",
    duration: "1 to 2 hours",
    teaser:
      "Pondicherry's contemporary visual art scene is small, serious, and housed in beautiful buildings. Tasmai in Kuruchikuppam is the anchor; the White Town galleries extend the afternoon.",
    body: `While Pondicherry is celebrated for its historical preservation, it also hosts a thriving contemporary visual art movement. The anchor of this scene is Tasmai, a Centre for Art and Culture, located in the Kuruchikuppam neighbourhood. Open daily from 10:00 AM to 8:00 PM, Tasmai functions as an independent gallery and open community forum that bridges local Tamil art with international creative movements. Its schedule rotates through solo painting exhibitions, sculptural showcases, fashion shows, and art history lectures. There is no fixed permanent collection: what you find depends on the week.

**The White Town galleries**

Using Tasmai as your starting point, spend an afternoon working through White Town's independent spaces. Aurodhan Art Gallery, Sega Art Gallery, and Pondy Art each occupy beautifully preserved French-colonial structures and rotate through collections ranging from local street photography to modern avant-garde Indian painting. The buildings are often as interesting as the work inside them: high ceilings, tiled floors, shuttered facades on narrow lanes.

**When to visit**

Gallery openings in Pondicherry tend to happen on weekend evenings. If you are in town on a Friday or Saturday, check local listings for current events. The combination of a gallery opening and the White Town streets at dusk is one of the better evenings the city offers.`,
  },

  {
    id: "alliance-francaise",
    title: "Alliance Française de Pondichéry",
    category: "gallery",
    duration: "Event dependent (usually evenings)",
    teaser:
      "One of the oldest Alliance Française branches in South Asia, the Pondichéry outpost is less a language school than a living cultural bridge between Indian and French creative communities.",
    body: `Perched near the beachfront, the Alliance Française de Pondichéry occupies a beautifully restored heritage building that functions as a dynamic community centre rather than a static institution. Its programme is event-driven: there is no fixed daily exhibition. Instead, the calendar determines what you find.

**What happens here**

On any given evening you might attend an Indo-French photography gallery opening, an outdoor rooftop screening of an independent French film with subtitles, a live jazz or classical performance, a philosophical book reading, or a lecture on architecture and urban preservation. The Alliance Française also hosts events connected to the Pondicherry Heritage Festival (February to April) and serves as a venue for the Manifest Dance-Film Festival (early August).

**The cultural bridge**

The Alliance Française de Pondichéry is one of the few institutions in the city that actively maintains the intellectual connection between France and Pondicherry. It draws an eclectic, international crowd: French expatriates, longtime Indian Francophiles, Aurovilians, and the kind of Pondicherry resident who was educated at the Lycée Français and reads both Tamil and French. The evening coffee at the outdoor terrace, before or after an event, is worth the visit alone.

**Before you go**

Check the current programme at afpondicherry.com or on the Alliance Française de Pondichéry Facebook page. Events book quickly, particularly film screenings.`,
    website: "afpondicherry.com",
    address: "Alliance Française de Pondichéry, near the seafront, Pondicherry",
    photo: "alliance-francaise-pondicherry.jpg",
  },

  // ── MUSEUM ────────────────────────────────────────────────────────────────

  {
    id: "pondicherry-museum",
    title: "Pondicherry Museum",
    category: "museum",
    duration: "1 to 2 hours",
    teaser:
      "The definitive guardian of the region's ancient trade history: Chola and Pallava granite sculptures, bronze castings made by the lost-wax process, Roman wine jars from Arikamedu, and the official carriage of Governor Dupleix.",
    body: `Tucked into the colonial quarter, the Pondicherry Museum holds the most coherent account of the region's history available in a single building. A common point of confusion for first-time visitors is the search for a 'Marble Group' collection; the museum's international reputation rests instead on its Chola and Pallava granite sculptures and its treasury of bronzes cast by the cire perdue (lost-wax) method. These are among the finest examples of South Indian sacred metalwork in any public collection.

**The ancient trade gallery**

The ground floor opens onto the evidence of Pondicherry's extraordinary antiquity as a trading hub. Roman amphorae, the standard wine-transport jars of the ancient Mediterranean, were excavated at Arikamedu, the Indo-Roman port settlement three kilometres south of modern Pondicherry. Alongside them are glass beads, pottery shards, and coins that establish active commerce between this coast and the Roman world across the 1st to 4th centuries AD. Pondicherry was not a colonial invention; it was a working port two thousand years before Dupleix arrived.

**The colonial floor**

The upper galleries transition into the French period. Rare wooden furniture, oil portraits, official documents, and ceremonial objects from the Compagnie des Indes and the subsequent colonial administration fill the rooms. The centrepiece here is the horse-drawn carriage owned by Joseph François Dupleix, Governor-General from 1742 to 1754: the man who very nearly made France the dominant power in South Asia, and who was dismissed by his own company before he could finish the attempt. The carriage is in surprisingly good condition.

**Practical**

The museum is closed on Mondays. Morning visits are quieter. The colonial quarter streets immediately outside are among the best-preserved in the White Town: allow time for a walk after the museum.`,
    address:
      "Pondicherry Museum, Saint Louis Street, White Town, Puducherry 605001",
    photo: "pondicherry-museum.jpg",
  },

  // ── LIVING ART (filed under workshop) ────────────────────────────────────

  {
    id: "urban-sketching-white-town",
    title: "Urban Sketching in the White Town",
    category: "workshop",
    duration: "Flexible (2 to 4 hours)",
    teaser:
      "The French Quarter is one of the most photogenic and sketchable heritage districts in South India. Ochre compound walls, carved Tamil doorframes, shuttered French windows, and the sea visible at the end of every east-west street.",
    body: `Pondicherry's White Town has been attracting artists and photographers for the same reason for decades: the architecture is intact, the street grid is coherent, the light from the Bay of Bengal is flat and clear in the mornings, and the walls are painted in colours that were chosen specifically to be beautiful. This is not an accident. The Franco-Tamil aesthetic that governed colonial Pondicherry valued the visual quality of the street, and the results are still here.

**For sketchers**

Urban sketching groups visit Pondicherry regularly from across India and South Asia. The best subjects are the compound walls and gateways of the larger colonial houses on Rue Dumas, Rue Suffren, and Rue de la Bourdonnais; the facades of the churches (Notre-Dame des Anges, the Immaculate Conception Cathedral); the Romain Rolland Library; and the seafront at Goubert Avenue with its War Memorial and the lighthouse in the north. The Alliance Française de Pondichéry occasionally organises community sketch meets, particularly during the Pondicherry Heritage Festival (February to April).

**For photographers**

The golden hours in Pondicherry are reliable: dawn on the Promenade when the fishing boats come in, and the hour before sunset when the ochre walls take on a deeper colour and residents begin sitting on their verandas. Rue Bussy and Bazar Saint Laurent Street are the best-maintained blocks for architectural photography. The Sunday morning market near the Tamil quarter adds activity and Tamil street life to the composition.

**Practical note**

Many guesthouses in the White Town rent bicycles. A slow cycling circuit of the French Quarter, stopping to sketch or photograph, takes two to three hours and covers the essential streets without exhausting the walker.`,
  },
];

export function getArtsArticle(id: string): ArtsArticle | undefined {
  return artsArticles.find((a) => a.id === id);
}

export function getArtsArticlesByCategory(
  category: ArtsCategory
): ArtsArticle[] {
  return artsArticles.filter((a) => a.category === category);
}
