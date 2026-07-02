// Coordinates are approximate — verify on Google Maps before shipping.

export type HotelCategory = "luxury" | "heritage" | "mid" | "budget" | "hostel";
export type PriceRange = "budget" | "mid" | "upscale" | "luxury";
export type HotelCollection =
  | "french-heritage"
  | "boutique"
  | "family"
  | "backpacker"
  | "coastal-wellness";

export const COLLECTION_LABELS: Record<HotelCollection, string> = {
  "french-heritage": "French Heritage Collection",
  boutique: "Boutique Collection",
  family: "Family Collection",
  backpacker: "Backpacker & Digital Nomad",
  "coastal-wellness": "Coastal Escapes & Wellness",
};

export interface Hotel {
  id: string;
  name: string;
  collection: HotelCollection;
  category: HotelCategory;
  priceRange: PriceRange;
  lat: number;
  lng: number;
  photo?: string;
  tagline: string;
  vibe: string;
  whyLoveIt: string;
  exploreNearby: string;
  bestFor: string[];
  notFor: string[];
  ourTip: string;
}

export const hotels: Hotel[] = [
  // ── French Heritage Collection ─────────────────────────────────────────────

  {
    id: "palais-de-mahe",
    name: "Palais de Mahe",
    collection: "french-heritage",
    category: "luxury",
    priceRange: "luxury",
    lat: 11.9352,
    lng: 79.8332,
    photo: "palais-de-mahe.jpg",
    tagline: "The benchmark luxury address in White Town.",
    vibe:
      "If Pondicherry could be distilled into a single hotel, this would be a strong contender. Hidden behind an elegant mustard-yellow façade on a quiet street in White Town, Palais de Mahe captures the romance of the old French colony without ever feeling like a museum. Sunlight spills across its graceful colonnades, polished wooden shutters frame peaceful courtyards, and every corner invites you to slow your pace. With only a handful of rooms, the atmosphere is intimate, refined and wonderfully unhurried. It is the kind of place where breakfast lingers into late morning and afternoon swims become part of your daily ritual.\n\nThe street itself is part of the experience. Rue Law de Lauriston is one of the most painted and photographed streets in Pondicherry, with its row of ochre and mustard facades, overhanging bougainvillea and carved doorways belonging to a particular idea of the tropics that the city has somehow managed to keep.",
    whyLoveIt:
      "The beautiful courtyard pool sits at the heart of the hotel, surrounded by colonial arcades that remain cool even on warm tropical afternoons. Later, climb to the rooftop restaurant for fresh seafood, South Indian flavours and one of the most atmospheric dinners in White Town.",
    exploreNearby:
      "Walk out the front door and within minutes you are on Goubert Avenue, watching fishermen prepare their boats while the Bay of Bengal glows in the morning light. Continue on foot to the Sri Aurobindo Ashram, browse the independent boutiques along Rue Suffren and end the afternoon with coffee in one of White Town's leafy cafés. Everything that defines historic Pondicherry is comfortably explored without ever needing a car.\n\nTurn left from the hotel and five minutes on foot brings you to Manakula Vinayagar Temple, one of the oldest temples in Pondicherry, predating the French settlement, its vivid gopuram rising from the colonial streetscape like an unexpected punctuation mark. The morning prayers draw local families, flower sellers and devotees, and a painted temple elephant, if you arrive early enough. It is a reminder that the city's identity was never exclusively European.\n\nTwo streets north, the Institut Français de Pondichéry occupies one of the finest colonial buildings still in active institutional use in India. A working French research centre whose archive holds maps, manuscripts and botanical drawings spanning three centuries, it is open to visitors and worth a quiet afternoon. The building alone justifies the detour.\n\nThe Bibliothèque Romain Rolland, named after the French Nobel laureate and friend of Gandhi, stands nearby. One of India's oldest French-language libraries, its reading rooms are among the most peaceful spaces in White Town, and one of those places where time moves at a different speed than the city outside.",
    bestFor: [
      "First-time visitors",
      "Couples seeking a romantic escape",
      "Heritage lovers",
      "Food enthusiasts",
    ],
    notFor: ["Travellers looking for a large beach resort"],
    ourTip:
      "Walk to Manakula Vinayagar Temple at 7am when the elephant blesses devotees at the entrance: it is five minutes from the hotel and one of the most vivid starts to a Pondicherry morning.",
  },

  {
    id: "maison-perumal",
    name: "Maison Perumal",
    collection: "french-heritage",
    category: "luxury",
    priceRange: "luxury",
    lat: 11.9330,
    lng: 79.8315,
    photo: "maison-perumal.jpg",
    tagline: "Pondicherry's Tamil soul in a restored merchant's mansion.",
    vibe:
      "Maison Perumal tells a different story of Pondicherry. While White Town celebrates its French heritage, this beautifully restored mansion introduces you to the city's Tamil soul. Traditional courtyards, carved teak doors and cool stone floors create an atmosphere that feels authentic rather than theatrical. The pace here is gentle and deeply personal. Instead of feeling like a guest in a hotel, you feel as though you have been welcomed into an elegant family home where every detail reflects generations of craftsmanship.\n\nThe Tamil quarter predates the French settlement by centuries. The merchant families, Chettiars, Mudaliars, weavers trading with Southeast Asia long before European ships arrived, built these havelis in a tradition of courtyard architecture that absorbed influences from Chettinad, Madurai and the coastal trade routes. Staying at Maison Perumal is an introduction to that older, deeper identity.",
    whyLoveIt:
      "Dining is part of the experience. The restaurant celebrates Pondicherry's unique Franco-Tamil culinary heritage, bringing together local seafood, traditional recipes and subtle French influences. If you enjoy discovering a destination through its food, few hotels offer a richer introduction.",
    exploreNearby:
      "Wake early and wander through Heritage Town while shopkeepers prepare for the day and temple bells echo through the streets. Within a pleasant walk you reach White Town, the Promenade, colourful markets and some of Pondicherry's finest artisan boutiques. It is one of the best locations for travellers who want to experience both sides of the city.\n\nThe morning market along Rue Nehru runs from first light. Flower sellers arrange marigold and jasmine garlands destined for the day's first temple offerings, vendors weigh out dried spices from painted mounds, and the smell of camphor and coconut oil carries through the street before the heat arrives. It is Pondicherry at its most unfiltered and most alive.\n\nThe Varadaraja Perumal Temple, a short walk from the hotel, is among the oldest Vishnu temples in the Tamil quarter. Its festival processions, accompanied by nadaswaram and percussion, draw the entire neighbourhood. Ask at the hotel when the next one falls.\n\nThe old canal that historically separated the French and Tamil quarters runs nearby. Today it is a quiet tree-lined boulevard, but the boundary it marked shaped everything, the architecture, the cuisine, the daily rhythms, for 250 years. From Maison Perumal you stand exactly at that old frontier, equally placed for both halves of the city.",
    bestFor: [
      "Cultural travellers",
      "Food lovers",
      "Architecture enthusiasts",
      "Couples",
    ],
    notFor: ["Visitors looking for resort facilities or extensive leisure amenities"],
    ourTip:
      "Cross into White Town in the early evening when the light on the French facades is at its most golden, then return through the Tamil quarter as the temple bells begin for evening prayers: you get both cities in one walk.",
  },

  {
    id: "le-dupleix",
    name: "Le Dupleix",
    collection: "french-heritage",
    category: "luxury",
    priceRange: "upscale",
    lat: 11.9358,
    lng: 79.8338,
    photo: "le-dupleix.jpg",
    tagline: "Sleep inside the city's colonial history.",
    vibe:
      "Few hotels wear Pondicherry's history as gracefully as Le Dupleix. Once the residence of a French mayor, this heritage property blends centuries-old architecture with contemporary comfort while preserving its unmistakable colonial character. Thick walls keep the interiors cool, polished timber furniture recalls another era, and the quiet courtyard offers welcome relief after a day exploring the lively streets outside. Staying here feels less like checking into a hotel and more like stepping into a chapter of Pondicherry's remarkable past.\n\nThe name itself carries weight. Governor Joseph François Dupleix was the most ambitious Frenchman in 18th-century India, a strategist who, had events gone differently, might have made French rather than English the subcontinent's colonial legacy. He was ultimately recalled in failure, but the city he shaped still follows his grid, still bears the buildings he commissioned, still carries his name on a street corner. There is something quietly extraordinary about sleeping in a building that belongs to that story.",
    whyLoveIt:
      "The heritage architecture is the hotel's greatest luxury. Rather than extravagant facilities, Le Dupleix offers the rare pleasure of sleeping within one of White Town's historic buildings while enjoying modern comforts and attentive hospitality.",
    exploreNearby:
      "The hotel places you just moments from Notre Dame des Anges Church, the Promenade and the cafés that have made White Town famous. Spend the morning visiting art galleries, browse local design stores during the afternoon and return in time for an evening stroll beside the sea as the promenade closes to traffic.\n\nThe Monument aux Morts stands a short walk from the hotel on Boulevard François Martin, a dignified French war memorial shaded by frangipani trees, commemorating the soldiers from Pondicherry who died in the First World War fighting alongside France. There are few memorials like it in India, and it repays a moment of attention.\n\nThe Raj Nivas, official residence of Pondicherry's Lieutenant Governor, occupies one of the grandest colonial compounds in White Town. Its facade along Rue de la Marine represents French institutional architecture at its most assured. The exterior is visible from the street and regularly surprises visitors who stumble upon it without expecting anything quite so imposing.\n\nThe Dupleix Statue still stands in the old quarter, the Governor in bronze, surveying the city he built. It is a strange and affecting thing to stand before it, in a city that could so easily have become something entirely different.\n\nA little further, the Église de Notre Dame de la Conception Immaculée is one of the oldest churches in Pondicherry. Worth visiting early in the morning when the light comes through its windows at an angle and the congregation is thin enough to feel the full quiet of the interior.",
    bestFor: [
      "History lovers",
      "Couples",
      "Returning visitors to Pondicherry",
      "Travellers who enjoy boutique hotels with character",
    ],
    notFor: ["Families seeking resort-style facilities"],
    ourTip:
      "Stand in front of the Dupleix Statue on the street that bears his name and read the plaque: it puts the hotel, the architecture around you, and the city's unlikely history into focus in about three minutes.",
  },

  {
    id: "la-villa",
    name: "La Villa",
    collection: "french-heritage",
    category: "luxury",
    priceRange: "luxury",
    lat: 11.9348,
    lng: 79.8325,
    photo: "la-villa.jpg",
    tagline: "A discreet luxury retreat behind heritage walls.",
    vibe:
      "Discreet, elegant and effortlessly stylish, La Villa feels like a secret that experienced travellers quietly recommend to one another. Behind its heritage walls lies a beautifully restored boutique retreat where contemporary design blends seamlessly with French colonial architecture. Soft lighting, tropical gardens and carefully curated interiors create an atmosphere that is both luxurious and remarkably peaceful. Every space has been designed to make you slow down, switch off and savour the quieter side of White Town.\n\nPart of what makes La Villa remarkable is what it is not. It does not announce itself. There is no sign designed to catch passing tourists, no lobby that spills onto the pavement. That discretion is intentional and reflects something broader about the way White Town's finest restored properties have chosen to present themselves: beautifully, quietly, without performance.",
    whyLoveIt:
      "The swimming pool is one of the finest in White Town. Sheltered by lush greenery and elegant architecture, it feels wonderfully private, making it the perfect place to escape the afternoon heat before enjoying dinner under the stars.",
    exploreNearby:
      "Within a short stroll you can browse independent art galleries, discover charming cafés tucked into restored colonial villas and reach the seafront in time for sunrise. White Town reveals its greatest charm when explored on foot, and La Villa places it all within easy reach.\n\nThe Sri Aurobindo Ashram meditation hall is a short walk away. It receives visitors of every background and asks only for quiet. The samadhi at its centre, where Sri Aurobindo and the Mother rest beneath a constant offering of flowers, is one of the most genuinely serene spaces in Pondicherry. Morning and evening meditation sessions are open to all.\n\nAlong Rue Suffren, several workshops still produce hand-blocked textiles using carved wooden blocks that have been in use for generations. The craft has continued with remarkable consistency, largely undisturbed by the boutique economy that has grown up around it. The pieces make for the most honest souvenirs in the city.\n\nThe Alliance Française de Pondichéry maintains a cultural programme that would be respectable in a French provincial town: cinema, concerts, photography exhibitions, readings. The schedule is posted outside their building. An evening event here gives a genuine taste of the French cultural life the city has quietly maintained long after the Tricolour came down.",
    bestFor: [
      "Honeymoons",
      "Romantic weekends",
      "Boutique hotel enthusiasts",
      "Travellers celebrating a special occasion",
    ],
    notFor: ["Visitors travelling with young children who prefer larger resorts"],
    ourTip:
      "Check the Alliance Française programme on Rue Suffren when you arrive: a cinema evening or concert there, unplanned, tends to become the best memory of the trip.",
  },

  {
    id: "the-promenade",
    name: "The Promenade",
    collection: "french-heritage",
    category: "luxury",
    priceRange: "luxury",
    lat: 11.9343,
    lng: 79.8358,
    photo: "the-promenade.jpg",
    tagline: "Front-row seats to Pondicherry's favourite daily ritual.",
    vibe:
      "If waking to the sound of the Bay of Bengal is your idea of the perfect holiday, The Promenade delivers one of Pondicherry's most enviable addresses. Sitting directly opposite the famous seafront boulevard, it combines contemporary comfort with front-row views of the city's daily rhythm. Sunrise walkers, evening musicians and families gathering by the sea become part of the backdrop throughout your stay. It is vibrant without being overwhelming and perfectly captures Pondicherry's relaxed coastal lifestyle.\n\nWhat makes Goubert Avenue extraordinary is not its width or its architecture but its ritual. Every evening after six o'clock, the boulevard closes to vehicles. Pondicherry takes ownership of its seafront in a way that almost no Indian city has managed to preserve. Families spread across the steps, vendors appear with cut fruit and sugarcane juice, young couples claim the stone benches, and the Bay of Bengal provides the backdrop. The Promenade hotel gives you front-row access to this daily ceremony from your own window.",
    whyLoveIt:
      "Its greatest luxury is location. Few hotels allow you to step straight onto the Promenade, enjoy uninterrupted sea views and still remain only a few minutes' walk from White Town's restaurants, cafés and heritage landmarks.",
    exploreNearby:
      "Begin your morning with a walk along Goubert Avenue before visiting the Gandhi Statue and the old lighthouse. Spend the afternoon exploring White Town's boutiques and galleries, then return as the promenade comes alive after sunset when locals and visitors gather to enjoy the cool evening breeze.\n\nLe Café, the seaside café operated by the Sri Aurobindo Ashram at the northern end of the Promenade, serves some of the finest coffee and croissants in the city at prices that belong to a more reasonable era. The veranda tables facing the sea are among the most sought-after seats in Pondicherry: arrive before nine in the morning or accept standing room.\n\nThe old Lighthouse at the southern end of the boulevard is one of the oldest on the Coromandel Coast. No longer operational, its silhouette is one of the most recognisable in the city. The stretch of rocky coast between it and the hotel, Rock Beach, is where Pondicherry feels most like itself at dawn, when the light is low and the fishermen's boats are still in the water.\n\nThe French War Memorial stands directly on Goubert Avenue, white and composed among bougainvillea, easy to walk past without stopping. The inscription repays attention.\n\nSlightly north along the boulevard, the Statue of Jeanne d'Arc stands in permanent vigil above an Indian ocean. A French national heroine, here, it is one of the stranger and more affecting details of White Town, and it says more about Pondicherry's particular identity than most official monuments combined.",
    bestFor: [
      "First-time visitors",
      "Sea lovers",
      "Couples",
      "Travellers who enjoy being in the heart of the action",
    ],
    notFor: ["Visitors seeking complete seclusion or a resort atmosphere"],
    ourTip:
      "Set an alarm for 6am, walk fifty metres to Goubert Avenue and turn north toward Le Café. Order coffee and a croissant on the veranda. By 7am you will already have had the best hour of your day.",
  },

  // ── Boutique Collection ────────────────────────────────────────────────────

  {
    id: "villa-shanti",
    name: "Villa Shanti",
    collection: "boutique",
    category: "heritage",
    priceRange: "upscale",
    lat: 11.9355,
    lng: 79.8328,
    photo: "villa-shanti.jpg",
    tagline: "Sophisticated hospitality on the best street in White Town.",
    vibe:
      "Some hotels impress the moment you arrive. Villa Shanti quietly grows on you. Hidden behind an elegant heritage façade, it combines French colonial architecture with clean contemporary design, creating spaces that feel effortlessly calm. White walls, warm timber, soft lighting and leafy courtyards make the bustle of White Town seem wonderfully distant. It is sophisticated without being formal, making every guest feel immediately at home.\n\nThe hotel sits on Rue Suffren, which has become the living room of White Town, the street where the city's finest design boutiques, gallery spaces and café culture have quietly concentrated over the past two decades. You are not simply near the best of White Town. You are already in it.",
    whyLoveIt:
      "The hotel's celebrated restaurant has become a destination in its own right. Whether you settle into the tranquil courtyard for breakfast or linger over dinner beneath softly glowing lanterns, every meal becomes part of the Pondicherry experience. It is equally popular with visitors and discerning locals, which says everything about its reputation.",
    exploreNearby:
      "Step outside and lose yourself among White Town's quiet streets, where colourful colonial villas hide independent galleries, design boutiques and charming cafés. The Promenade, the Sri Aurobindo Ashram and the city's best shopping are all within an easy stroll, allowing you to experience Pondicherry exactly as it should be explored: slowly and on foot.\n\nThe Focus on Bookshop, just along Rue Suffren, is one of those small, serious independent bookshops that tells you exactly what kind of city this is. Its selection covers Indian history, French literature, Aurobindo's philosophy and English fiction, and the owner knows every shelf. Worth an unscheduled half-hour.\n\nRue Romain Rolland, the parallel street one block north, has some of the most striking private residences in White Town, terracotta, ochre and pale blue facades maintained with a consistency you will not find elsewhere in India. Architecture walkers lose hours here without noticing.\n\nThe Sri Aurobindo Ashram is moments away on Rue de la Marine. The samadhi courtyard receives visitors of every background and asks only for quiet. Friday evenings along Rue Suffren are worth staying in for: some of White Town's galleries hold their openings then, and walking the street becomes a private view of Pondicherry's art scene.",
    bestFor: [
      "Couples",
      "Food lovers",
      "Boutique hotel enthusiasts",
      "Weekend escapes",
    ],
    notFor: ["Travellers looking for resort-style facilities"],
    ourTip:
      "Dinner at the restaurant on a Tuesday or Wednesday is quieter than weekends and allows the kitchen to show what it can really do: book a day in advance.",
  },

  {
    id: "villa-helena",
    name: "Villa Helena",
    collection: "boutique",
    category: "heritage",
    priceRange: "mid",
    lat: 11.9350,
    lng: 79.8325,
    photo: "villa-helena.jpg",
    tagline: "The charm of a private colonial home, perfectly preserved.",
    vibe:
      "Villa Helena feels wonderfully personal. Occupying a lovingly restored colonial home, it offers the charm of a private residence rather than a conventional hotel. Elegant verandas, antique furniture and peaceful courtyards invite long conversations over coffee while flowering bougainvillea softens every view. It is one of those rare places where silence becomes part of the luxury.\n\nThe verandas deserve a word of their own. White Town has largely lost its veranda culture to renovation or neglect. Villa Helena has kept it. A morning on the first-floor veranda watching the street come to life below, with the vegetable cart, the flower seller, the neighbourhood cat conducting its inspection, is one of those pleasures that no itinerary can plan for but that most guests remember as the defining image of their stay.",
    whyLoveIt:
      "Breakfast beneath the shaded courtyard is a daily ritual guests remember long after they return home. Fresh fruit, warm pastries and excellent coffee set the tone for leisurely mornings before White Town begins to stir.",
    exploreNearby:
      "Everything that makes White Town memorable lies just beyond the front gate. Wander towards the Promenade at sunrise, browse nearby bookstores and galleries during the afternoon, then return through quiet residential streets where the city's French heritage is beautifully preserved.\n\nThe Sri Aurobindo Ashram Dining Hall, a five-minute walk away, serves simple, extraordinary vegetarian meals to all visitors, guests, pilgrims and passing travellers alike, at prices that seem impossible. It opens early and closes when the food runs out. Arriving at the right moment feels like a small local accomplishment, and the meal is always the best-value breakfast in White Town.\n\nThe Bibliothèque Romain Rolland, named after the French Nobel laureate who corresponded with Gandhi and Tagore, holds one of the oldest collections of French-language literature in India. The reading rooms are cool, quiet and largely empty of tourists. If you have a book to read, there is no more peaceful place in Pondicherry to read it.\n\nWander in any direction for ten minutes and you encounter one of White Town's constant pleasures: a crumbling colonial doorway with its carved frame still intact, a courtyard glimpsed through a wrought-iron gate, a staircase leading somewhere private and beautiful. The neighbourhood rewards slow walking and genuine curiosity in a way that more visited cities rarely do.",
    bestFor: [
      "Couples",
      "Slow travellers",
      "Heritage lovers",
      "Readers and writers",
    ],
    notFor: ["Families seeking extensive leisure facilities"],
    ourTip:
      "Ask the owner which kolam pattern on the nearest doorstep belongs to which family: the stories behind them are older and more interesting than they appear.",
  },

  {
    id: "gratitude-heritage",
    name: "Gratitude Heritage",
    collection: "boutique",
    category: "heritage",
    priceRange: "mid",
    lat: 11.9345,
    lng: 79.8330,
    photo: "gratitude-heritage.jpg",
    tagline: "Warmth, character and genuine Pondicherry hospitality.",
    vibe:
      "Gratitude Heritage captures something increasingly rare: simplicity with character. The restored heritage house has retained its original proportions and architectural details while embracing understated comfort. The atmosphere is warm, welcoming and refreshingly unpretentious. Every room feels individual, every corridor tells a story and every returning guest seems to become part of the extended family.\n\nSmall heritage properties in Pondicherry have a quality that larger hotels cannot manufacture: because the walls are old and the proportions are those of a family home rather than a commercial block, the rhythms of the stay slow to match the building. You find yourself sleeping more deeply, waking more gently and caring less about the day's programme than you expected to. Gratitude Heritage is one of the better examples of this effect.",
    whyLoveIt:
      "The intimate scale of the property creates a genuinely personal stay. Staff happily share restaurant recommendations, hidden cafés and walking routes that most guidebooks overlook, giving visitors the feeling of discovering Pondicherry through local eyes.",
    exploreNearby:
      "Walk a few minutes and you reach some of White Town's most photogenic streets, where ochre façades, blue shutters and flowering balconies seem designed for unhurried exploration. Continue towards the seafront or pause at one of the neighbourhood bakeries before the morning crowds arrive.\n\nRue Dumas and Rue Romain Rolland, running parallel to the Promenade, have managed to resist the pressures that have altered similar streets elsewhere in India. Their teak shutters, carved doorways and morning kolam patterns drawn fresh each day are the visual identity of Pondicherry that every photograph tries to capture. Here you are living in the middle of it.\n\nSeveral neighbourhood bakeries, many connected to Auroville families, open before the city is fully awake and produce croissants, sourdough and pain au chocolat of a quality that would be unremarkable in Paris and is quietly astonishing in South India. Arriving before eight puts you ahead of both the heat and the queue.\n\nThe Government Museum, a short walk away on Rue Saint-Louis, houses a collection that rewards an unhurried hour. Among its exhibits are Roman-era artifacts excavated at Arikamedu, glass beads, pottery fragments, amphora shards, proving that Roman merchant ships were trading pepper and textiles on this coast two thousand years ago. The museum is rarely crowded, which only adds to the experience.",
    bestFor: [
      "Heritage enthusiasts",
      "Solo travellers",
      "Couples",
      "Guests seeking authentic hospitality",
    ],
    notFor: ["Visitors wanting luxury resort amenities"],
    ourTip:
      "The Government Museum on Rue Saint-Louis opens at 10am and is almost always empty: go on your first morning before you've formed opinions about the city, and it will reframe everything you see afterward.",
  },

  {
    id: "dune-de-lorient",
    name: "Dune de L'Orient",
    collection: "boutique",
    category: "heritage",
    priceRange: "upscale",
    lat: 11.9340,
    lng: 79.8335,
    photo: "dune-de-lorient.jpg",
    tagline: "Franco-Tamil Creole cuisine in a restored heritage building.",
    vibe:
      "French elegance meets tropical Pondicherry at Dune de L'Orient. The beautifully restored heritage building balances period architecture with relaxed coastal living, creating spaces that feel both refined and inviting. Colourful courtyards, graceful archways and quiet corners encourage guests to disconnect from busy schedules and settle into Pondicherry's slower rhythm.",
    whyLoveIt:
      "Its acclaimed restaurant celebrates the city's unique Creole heritage through dishes that blend French techniques with South Indian ingredients. Dining here is more than a meal. It is an introduction to one of India's most fascinating culinary traditions.\n\nThe Franco-Pondicherry Creole culinary tradition is genuinely unlike anything elsewhere in India. It emerged over three centuries from the encounter between French settler cooking, Tamil Brahmin kitchen practices, and the techniques of smaller communities who arrived in Pondicherry under French administration. The result, curries prepared with French method, stews carrying tamarind, South Indian spices in classical sauces, has no exact parallel anywhere and deserves to be eaten with that history in mind.",
    exploreNearby:
      "Within minutes you can reach the Promenade, Notre Dame des Anges Church and several of White Town's finest cafés. Spend an afternoon exploring the neighbourhood's hidden lanes, where art galleries, artisan shops and restored villas reveal themselves around almost every corner.\n\nNotre Dame des Anges, visible from the hotel, was completed in 1855. Its façade of oyster-shell lime plaster glows pink and gold in the evening light in a way that no photograph quite captures. The interior is cool and high-ceilinged, light falling in long angled shafts during the morning hours. Worth entering at least once, regardless of faith or interest in church architecture: it is simply one of the most beautiful interiors in the city.\n\nThe lanes running behind the church lead past several private art galleries showing work by Pondicherry-based painters. The exhibitions rotate regularly, admission is always free, and on a good week the quality rivals anything you would find in a Chennai or Bengaluru gallery.\n\nThe Église de Jésus, a Jesuit church a short walk further, is older and quieter than Notre Dame, one of the least visited colonial churches in White Town and, for exactly that reason, one of the most affecting to sit in for a few minutes.",
    bestFor: [
      "Food lovers",
      "Couples",
      "First-time visitors",
      "Heritage travellers",
    ],
    notFor: ["Visitors wanting large recreational facilities"],
    ourTip:
      "Walk to Notre Dame des Anges at 7am before the sun has risen high enough to bleach the façade: the oyster-lime plaster glows in the early light in a way that photographs cannot capture.",
  },

  {
    id: "petit-palais",
    name: "Petit Palais",
    collection: "boutique",
    category: "mid",
    priceRange: "mid",
    lat: 11.9345,
    lng: 79.8330,
    photo: "petit-palais.jpg",
    tagline: "Contemporary comfort with a rooftop view over White Town.",
    vibe:
      "Petit Palais brings together French-inspired elegance and contemporary comfort in a way that feels effortlessly relaxed. Bright interiors, tasteful décor and intimate public spaces create a boutique atmosphere that is welcoming rather than extravagant. It is easy to understand why so many guests extend their stay after discovering how comfortable life becomes here.\n\nWhat is quietly unusual about Petit Palais is the elevation. Most of White Town is experienced at street level or from a first-floor veranda. The rooftop pool changes that perspective entirely: suddenly you see the tiled rooflines, the water towers, the distant glint of the Bay of Bengal and the strange orderliness of the French grid from above. It reframes the city.",
    whyLoveIt:
      "The rooftop swimming pool offers a welcome retreat after exploring Pondicherry's sun-drenched streets. Watching the rooftops of White Town while cooling off in the afternoon is one of those simple pleasures that quickly becomes part of your daily routine.",
    exploreNearby:
      "From here, White Town unfolds naturally. Begin with breakfast in a nearby café, wander through the French Quarter's leafy streets, visit the museums and galleries, then finish your day watching the sunset colour the Bay of Bengal along the Promenade. Few hotels place so much within such easy walking distance.\n\nThe Botanical Garden, established by the French administration in 1826 and one of the oldest in India, has specimen trees, tamarind, rain tree and Indian tulip, that have grown for nearly two centuries and create a canopy that makes the garden feel genuinely ancient. On weekday mornings it is largely empty and becomes the most peaceful walk in Pondicherry.\n\nThe Government Museum on Rue Saint-Louis is the most historically serious institution in White Town after the Ashram. Its ground floor holds Roman-era artifacts from Arikamedu: beads, pottery, amphora fragments from a time when Roman merchants were trading pepper on this coast. The upper floor has French colonial furniture, administrative maps and period objects that bring the settlement years into sharp focus. Rarely crowded, and consistently underrated.\n\nBharati Park, adjoining the museum, is a formal garden laid out in the French tradition. Shaded, tended and used mainly by local families and morning walkers, it is one of those spaces that visitors who stay long enough discover and never quite leave. The bronze statue of Subramania Bharathi at the entrance, the Tamil poet and independence activist who spent years in Pondicherry specifically because it was beyond British jurisdiction, is worth pausing at before you walk in.",
    bestFor: [
      "Couples",
      "First-time visitors",
      "Travellers who enjoy boutique comfort",
      "Friends exploring Pondicherry together",
    ],
    notFor: ["Guests looking for a secluded beach resort"],
    ourTip:
      "The rooftop is best at dusk, not midday: wait until the Bay of Bengal is visible as a silver line on the horizon and the tiled rooflines of White Town are catching the last of the light.",
  },

  // ── Family Collection ──────────────────────────────────────────────────────

  {
    id: "accord-puducherry",
    name: "Accord Puducherry",
    collection: "family",
    category: "luxury",
    priceRange: "upscale",
    lat: 11.9280,
    lng: 79.8290,
    photo: "accord-puducherry.jpg",
    tagline: "Full-service comfort for families exploring Pondicherry.",
    vibe:
      "Some trips are all about discovery. Others are about finding a place where everyone can simply relax after a busy day. Accord Puducherry strikes that balance beautifully. Contemporary, spacious and refreshingly uncomplicated, it offers all the comforts of a full-service hotel while remaining close enough to the city's heritage districts to keep sightseeing easy. Bright interiors, generous public spaces and attentive service create an atmosphere where families, business travellers and weekend visitors all feel equally at home.",
    whyLoveIt:
      "Its generous swimming pool and family-friendly facilities make it easy to recharge between adventures. Whether the children want another swim before dinner or you're ready to unwind with a spa treatment, the hotel gives everyone room to enjoy the holiday at their own pace.",
    exploreNearby:
      "A short drive brings you to White Town, where colourful colonial streets, cafés and the Promenade await. On the way back, stop at the Botanical Garden for an easy afternoon stroll or explore one of Pondicherry's lively local markets to discover sweets, spices and handmade souvenirs.\n\nThe Botanical Garden, established by the French administration in 1826, is one of the oldest in India. Its specimen trees, rain trees, tamarinds and cannon ball trees, have grown for nearly two centuries and create a natural canopy that keeps the garden surprisingly cool in the afternoon heat. The grounds are open and grassy, which matters when you are travelling with children who have been in the car or a museum all morning.\n\nEight kilometres south of Pondicherry, the Chunnambar Boat House is the best short excursion for families with young children. Motorboats cross to Paradise Beach, a strip of fine sand accessible only by water that manages to feel genuinely remote despite being twenty minutes from town. The crossing itself is most of the pleasure.\n\nThe Auroville Visitor Centre, fifteen minutes from Pondicherry, offers a well-organised introduction to one of the world's most unusual communities, three thousand residents from sixty countries living in a planned township built around the Matrimandir, a golden meditation sphere unlike any building in India. The surrounding forest, the craft shops and Auroville's own ice cream counter make it family-friendly; the ideas behind it are genuinely interesting for older children.",
    bestFor: [
      "Families",
      "Multi-generation holidays",
      "Business travellers extending their stay",
      "Visitors travelling by car",
    ],
    notFor: ["Travellers seeking a heritage boutique experience"],
    ourTip:
      "Book the Chunnambar boat trip to Paradise Beach for your first full day: it lands children in the water early, resets everyone's expectations, and makes the rest of the trip feel like a bonus.",
  },

  {
    id: "the-residency-towers",
    name: "The Residency Towers",
    collection: "family",
    category: "luxury",
    priceRange: "luxury",
    lat: 11.9325,
    lng: 79.8310,
    photo: "the-residency-towers.jpg",
    tagline: "The reliable, polished choice for families and groups.",
    vibe:
      "The Residency Towers blends contemporary elegance with the confidence of an established city hotel. Large, comfortable rooms, polished interiors and attentive hospitality create a reassuring sense of familiarity, while the atmosphere remains relaxed enough for a leisurely holiday. Whether you're visiting Pondicherry for two nights or a full week, it quickly becomes an easy place to settle into.",
    whyLoveIt:
      "The rooftop swimming pool offers a refreshing escape after exploring Pondicherry in the tropical heat. Add excellent dining options and spacious rooms, and you have a hotel that comfortably balances relaxation with convenience.",
    exploreNearby:
      "You're only a few minutes from White Town, making it easy to spend your mornings exploring museums, churches and seaside cafés before returning for an afternoon swim. If you enjoy shopping, nearby boutiques and local handicraft stores offer plenty of opportunities to discover Pondicherry's creative side.\n\nThe Sacred Heart Basilica, a short drive from the hotel, was built in 1908 in the Gothic style and contains a set of French-manufactured stained glass windows that are among the finest in India. The panels were designed in France and shipped to Pondicherry; the light through them on a bright morning turns the interior into something genuinely extraordinary. Even children who have no patience for churches tend to stop and look.\n\nThe Pondicherry Museum on Rue Saint-Louis houses a collection that rewards an hour, particularly its French-period room, with colonial furniture, administrative maps and everyday objects from the settlement years that bring the era into focus more vividly than a history book. The Roman-era artifacts from nearby Arikamedu, including beads and amphora fragments from two-thousand-year-old trade routes, are among the most unexpected exhibits in any museum in South India.\n\nThe best time to take children to Goubert Avenue is early morning, before the day heats up. The Promenade is still car-free from the previous evening, the fishermen are returning with the catch, and the stretch of seafront between the Gandhi Statue and the old Lighthouse feels like it belongs entirely to the people who are there.",
    bestFor: [
      "Families",
      "Couples wanting modern comfort",
      "Domestic holidaymakers",
      "Visitors staying several nights",
    ],
    notFor: ["Guests looking for a colonial heritage hotel"],
    ourTip:
      "The Sacred Heart Basilica is ten minutes by auto-rickshaw and takes twenty minutes to walk around properly: the French stained glass windows in the morning light are the most beautiful single sight in Pondicherry.",
  },

  {
    id: "shenbaga-hotel",
    name: "Shenbaga Hotel & Convention Centre",
    collection: "family",
    category: "mid",
    priceRange: "mid",
    lat: 11.9320,
    lng: 79.8320,
    photo: "shenbaga-hotel.jpg",
    tagline: "Pondicherry's dependable all-rounder for families.",
    vibe:
      "Reliable, welcoming and surprisingly relaxed, Shenbaga has earned its reputation as one of Pondicherry's dependable all-rounders. It combines generous rooms with friendly service and a lively atmosphere that reflects the city's growing popularity with families and weekend travellers. Rather than trying to impress with grandeur, it focuses on making every stay comfortable and uncomplicated.",
    whyLoveIt:
      "The rooftop pool provides welcome relief after a day spent exploring Pondicherry's colourful streets. Families appreciate having space to unwind before heading out again for an evening on the Promenade or dinner in White Town.",
    exploreNearby:
      "From here you can easily reach Bharati Park, the French War Memorial and the cafés of White Town. If you're travelling with children, the nearby parks and open spaces offer a pleasant break between sightseeing stops.\n\nBharati Park is a formal garden laid out in the French tradition, shaded and tended, with the bronze statue of Subramania Bharathi at its entrance, the Tamil poet and independence activist who spent years in Pondicherry specifically because it lay beyond British jurisdiction. The park is used mostly by local families and morning walkers and remains pleasantly uncrowded even on weekends.\n\nThe Manakula Vinayagar Temple, a short drive away in White Town, has been the most consistently loved stop for children visiting Pondicherry for as long as anyone can remember. The temple elephant blesses visitors at the entrance, taking a coin from an outstretched hand and touching the top of the head with its trunk. The gopuram above is freshly painted and vivid, the courtyard is busy in the best possible way, and the whole experience takes about twenty minutes at exactly the right pace.\n\nThe French War Memorial on Boulevard François Martin commemorates the soldiers from Pondicherry who died in the First World War fighting alongside France, a detail of the city's history that surprises most first-time visitors. The monument is small, white and dignified, standing under frangipani trees a short walk from the seafront.",
    bestFor: [
      "Families",
      "Weekend breaks",
      "Groups of friends",
      "Visitors seeking good value with full hotel facilities",
    ],
    notFor: ["Travellers looking for an intimate boutique stay"],
    ourTip:
      "Take children to Manakula Vinayagar Temple on the first morning: the elephant greeting is the experience they will describe to everyone back home, and it sets a tone of genuine wonder for the rest of the trip.",
  },

  {
    id: "anandha-inn",
    name: "Anandha Inn",
    collection: "family",
    category: "mid",
    priceRange: "mid",
    lat: 11.9335,
    lng: 79.8310,
    photo: "anandha-inn.jpg",
    tagline: "A welcoming central base with decades of experience.",
    vibe:
      "Anandha Inn has been welcoming visitors to Pondicherry for many years, and that experience shows. Spacious public areas, comfortable rooms and a relaxed atmosphere make it particularly appealing for families who want a dependable base rather than an elaborate resort. It feels familiar from the moment you arrive, allowing you to focus less on logistics and more on enjoying your holiday.",
    whyLoveIt:
      "Its central location makes sightseeing wonderfully straightforward. You can spend the morning exploring White Town, return for lunch or a swim, then head back out without feeling as though you're constantly crossing the city.",
    exploreNearby:
      "Within a short drive you can reach the Promenade, the Sri Aurobindo Ashram, museums, cafés and Pondicherry's lively shopping streets. If you're travelling with children, the city's famous ice cream parlours make an excellent afternoon reward after a morning of sightseeing.\n\nPondicherry takes its ice cream seriously. The Auroville community produces ice cream from its own dairy, the vanilla is genuinely remarkable, the seasonal fruit flavours change through the year, and several outlets in the city carry it alongside homemade gelato. Finding the right one becomes a project that children take on with considerable commitment.\n\nThe Manakula Vinayagar Temple in White Town is the most reliable stop for visitors with children. The temple elephant blesses devotees and curious visitors alike at the entrance each morning, and the experience, the sound, the colour, the extraordinary friendliness of the crowd, is one of those Pondicherry moments that stays with young travellers long after the trip is over.\n\nFor older children interested in history, the Auroville Visitor Centre fifteen minutes from town is an unexpectedly engaging half-day. The Matrimandir, a giant golden sphere at the centre of an intentional community of three thousand people from sixty countries, does not look like anything else on earth. The story behind it, the Mother, Sri Aurobindo's vision, the 1968 inauguration, holds attention in a way that few historical sites do.",
    bestFor: [
      "Families",
      "First-time visitors",
      "Domestic tourists",
      "Guests wanting a central base",
    ],
    notFor: ["Travellers seeking boutique heritage accommodation"],
    ourTip:
      "The Auroville ice cream counter is open most afternoons: the vanilla made from Auroville's own dairy is always worth the detour, and the flavours change with the season.",
  },

  {
    id: "hotel-atithi",
    name: "Hotel Atithi",
    collection: "family",
    category: "mid",
    priceRange: "mid",
    lat: 11.9310,
    lng: 79.8300,
    photo: "hotel-atithi.jpg",
    tagline: "Modern city hotel with a rooftop pool and genuine warmth.",
    vibe:
      "Hotel Atithi combines the practicality of a modern city hotel with the easygoing character that defines Pondicherry itself. Bright, comfortable interiors and warm hospitality create an atmosphere that feels welcoming rather than formal. It is a place where sightseeing starts early, afternoons are spent relaxing by the pool and evenings often end with a leisurely walk beside the sea.",
    whyLoveIt:
      "The rooftop swimming pool is a favourite gathering place after a warm day exploring the city. Families appreciate the extra space, while couples enjoy watching the evening light settle over Pondicherry before dinner.",
    exploreNearby:
      "The hotel provides convenient access to White Town, the Promenade and several excellent South Indian restaurants loved by locals. Venture a little further and you'll discover lively markets where everyday Pondicherry unfolds far from the postcard views of the French Quarter.\n\nMission Street and Nehru Street are the main shopping streets of the Tamil quarter, where Pondicherry's everyday commerce happens with very little concession to tourists: silk and cotton by the metre, fresh jasmine and marigold, brass puja items, handmade sweets sold by weight, and the particular organised chaos of a South Indian market in full flow. An hour here resets your sense of what the city actually is beneath the boutique surface of White Town.\n\nThe morning fish market near Rock Beach operates from first light until the stock is gone. It is not for everyone, but for families who want to show children something genuinely unlike anything back home: tuna, kingfish, lobster and squid arriving directly from the boats, it is the most vivid thirty minutes in Pondicherry.\n\nSerenity Beach, twenty minutes north of the city, is calmer and less crowded than the Promenade. The stretch of coast there is used by local surf schools and kite surfers, and on a good morning it has the particular clarity of a beach that has not yet been discovered by everyone.",
    bestFor: [
      "Families",
      "Road trips across Tamil Nadu",
      "Couples wanting good value",
      "Visitors planning several days of sightseeing",
    ],
    notFor: ["Guests looking for a secluded luxury retreat"],
    ourTip:
      "The fish market near Rock Beach runs from dawn until the stock is gone: arriving at 6.30am with children who have never seen a working market is one of those unplanned travel memories that lasts.",
  },

  // ── Backpacker & Digital Nomad ─────────────────────────────────────────────

  {
    id: "zostel-pondicherry",
    name: "Zostel Pondicherry",
    collection: "backpacker",
    category: "hostel",
    priceRange: "budget",
    lat: 11.9750,
    lng: 79.7920,
    photo: "zostel-pondicherry.jpg",
    tagline: "The social heart of Pondicherry's backpacker scene.",
    vibe:
      "Every city has one place where conversations begin before breakfast and friendships are still being made long after sunset. In Pondicherry, Zostel has earned that reputation. Bright communal spaces, a relaxed atmosphere and travellers arriving from every corner of the world create an energy that is impossible to manufacture. Whether you're travelling solo or arriving with friends, it never takes long before someone is suggesting a cycle ride through White Town or an evening by the sea.",
    whyLoveIt:
      "The generous common areas are the heart of the hostel. They invite people to slow down, swap travel stories, plan day trips to Auroville or simply spend an afternoon working remotely with good coffee and reliable Wi-Fi. Many guests arrive alone and leave with new travelling companions.",
    exploreNearby:
      "Rent a bicycle and discover Pondicherry the way locals do. White Town, Rock Beach, the cafés along Mission Street and the lively evening Promenade are all within easy reach. If you're staying a few days, it's the perfect base for venturing further to Auroville or Serenity Beach.\n\nThe French grid of White Town was designed for human-scale movement long before that phrase became fashionable. A bicycle and two hours will take you further into the city's character than a full day of organised sightseeing. Lanes that look identical on a map reveal themselves to be completely different in atmosphere, and getting pleasantly lost is practically built into the experience.\n\nRock Beach, a short cycle from most of White Town, is where Pondicherry's morning rituals happen at their most honest, fishermen sorting the overnight catch, elderly men doing their constitutionals, a chai stall opening its shutters before dawn has fully arrived. It is the Promenade's quieter, less curated sibling and many regular visitors prefer it for that reason.\n\nCross the old canal into the Tamil quarter and the city changes entirely. Narrower streets, temple gopurams breaking the roofline, the smell of jasmine and incense in place of café coffee. Both halves of Pondicherry reward knowing, and the bicycle gets you between them in minutes.",
    bestFor: [
      "Solo travellers",
      "Digital nomads",
      "Budget-conscious explorers",
      "First-time backpackers",
    ],
    notFor: ["Travellers seeking privacy or luxury facilities"],
    ourTip:
      "Hire a bicycle on your first morning, cross the canal into the Tamil quarter before 8am and follow your nose: the best Pondicherry moments come to people who are moving slowly enough to be surprised.",
  },

  {
    id: "micasa-hostels",
    name: "Micasa Hostels",
    collection: "backpacker",
    category: "hostel",
    priceRange: "budget",
    lat: 11.9340,
    lng: 79.8320,
    photo: "micasa-hostels.jpg",
    tagline: "A welcoming community for longer stays and remote work.",
    vibe:
      "Micasa feels more like a welcoming home than a traditional hostel. The atmosphere is friendly without being noisy, making it easy to strike up conversations while still finding a quiet corner to read, work or simply enjoy the slower rhythm that draws so many people to Pondicherry. Colourful interiors and thoughtful communal spaces create an easy balance between social life and personal space.",
    whyLoveIt:
      "The relaxed community atmosphere makes it particularly appealing for longer stays. Digital nomads appreciate the comfortable workspaces, while travellers often gather in the evenings to exchange recommendations before heading out together to explore White Town's cafés and restaurants.",
    exploreNearby:
      "Start the day with breakfast in one of the nearby bakeries before wandering through the French Quarter's peaceful streets. As evening approaches, make your way towards the Promenade, where musicians, street performers and families transform the seafront into Pondicherry's favourite meeting place.\n\nSeveral bakeries in the neighbourhood are connected to Auroville families. They open early, they run out of croissants before mid-morning, and the coffee is remarkable. Finding your preferred one is a small but genuine pleasure of a longer stay, and one of those things that turns a hostel into a neighbourhood routine.\n\nAfter six in the evening, Goubert Avenue closes to vehicles. What follows is one of the most civilised social rituals in any Indian city: families, couples, ice cream sellers, the occasional classical musician, and the sound of the Bay of Bengal while the light drains from the sky. Walking it as part of a group that has formed naturally over two days in a hostel is one of those experiences that makes you extend your trip.\n\nThe Alliance Française holds cultural events throughout the year, cinema evenings, concerts, photography exhibitions, that draw Pondicherry's French-influenced community alongside the wider city. The notice board outside their building on Rue Suffren is worth checking on arrival. These are the evenings that end late and well.",
    bestFor: [
      "Long-stay travellers",
      "Remote workers",
      "Solo visitors",
      "Travellers looking for a relaxed community",
    ],
    notFor: ["Guests expecting hotel-style services"],
    ourTip:
      "Check the Alliance Française notice board on Rue Suffren on the day you arrive: a film screening or an open-mic evening there, stumbled upon rather than planned, is often the highlight of the week.",
  },

  {
    id: "time-travellers-hostel",
    name: "Time Travellers Hostel",
    collection: "backpacker",
    category: "hostel",
    priceRange: "budget",
    lat: 11.9345,
    lng: 79.8325,
    photo: "time-travellers-hostel.jpg",
    tagline: "Creative, informal and ready for wherever the day takes you.",
    vibe:
      "There is a youthful optimism about Time Travellers Hostel that perfectly matches Pondicherry itself. The atmosphere is informal, creative and wonderfully unpretentious. Maps are spread across tables, conversations drift from surfing to spirituality, and every new arrival seems to add another story to the evening. It is the kind of place where tomorrow's plans rarely stay the same for very long.",
    whyLoveIt:
      "Its welcoming communal spaces make meeting fellow travellers feel completely natural. Whether you're planning a scooter trip along the coast or searching for someone to join a heritage walk, chances are you'll find willing companions before the day is over.",
    exploreNearby:
      "Spend the morning exploring White Town before hiring a scooter to discover quieter beaches north of the city. Return in the evening for dinner at one of Pondicherry's casual cafés, where conversations often continue long after the plates have been cleared.\n\nPondicherry is almost perfectly scaled for a scooter. White Town and the Promenade take twenty minutes to circle at a sensible pace. Serenity Beach is thirty minutes north along a coast road flat enough to make the ride the destination. Auroville is fifteen minutes inland, three thousand people from sixty countries living around a golden meditation sphere, which sounds implausible but turns out to be completely real and worth half a day even if you arrive sceptical. Mahabalipuram is two hours if you are feeling ambitious.\n\nSerenity Beach has a genuine surf scene, modest but serious. Schools teach beginners through the season roughly from October to March, and the beach itself, wider, less visited, with actual swimming rather than the rocky Promenade, is the best in the region for anyone planning to spend time in the water.\n\nPondicherry has an unusual density of meditation, yoga and philosophy that draws a particular kind of traveller and tends to convert a different kind entirely. The Ashram holds open sessions; Auroville has its own practices; and sitting on the Promenade at dawn, when the city is quiet and the Bay of Bengal is simply doing its thing, produces a version of the same effect without any institutional involvement.",
    bestFor: [
      "Backpackers",
      "Solo adventurers",
      "Friends travelling together",
      "Budget explorers",
    ],
    notFor: ["Visitors looking for luxury accommodation"],
    ourTip:
      "Scooter to Serenity Beach before 7am, park at the casuarina grove and walk north along the shore: you will have it almost entirely to yourself for the first hour.",
  },

  {
    id: "hotel-coramandal-heritage",
    name: "Hotel Coramandal Heritage",
    collection: "backpacker",
    category: "budget",
    priceRange: "budget",
    lat: 11.9350,
    lng: 79.8330,
    photo: "hotel-coramandal-heritage.jpg",
    tagline: "Heritage character at a budget that makes sense.",
    vibe:
      "Hotel Coramandal Heritage offers something many budget travellers quietly appreciate: character. Rather than feeling anonymous, the property reflects Pondicherry's architectural heritage while providing comfortable accommodation at an accessible price. Its peaceful atmosphere makes it particularly attractive for travellers who want the charm of a heritage stay without stretching their budget.",
    whyLoveIt:
      "Its heritage setting allows you to experience the ambience of old Pondicherry while remaining comfortably within budget. It is an appealing choice for travellers who value atmosphere as much as affordability.",
    exploreNearby:
      "Walk through White Town's beautifully preserved streets before discovering the nearby cafés, art galleries and independent bookstores that give the neighbourhood its distinctive personality. Early mornings are especially rewarding, when the streets remain quiet and the colonial architecture catches the soft coastal light.\n\nThe best hour in White Town is the first. The Ashram's fresh flower offerings are being arranged, kolam patterns are still being drawn on doorsteps, and the low morning light makes the ochre and yellow facades glow rather than bleach. Photographers who commit to this hour tend to regard it as the defining session of their stay.\n\nKasha Ki Aasha, a rooftop café tucked into a restored colonial villa a short walk away, serves some of the best coffee in Pondicherry from a terrace that looks over the tiled rooflines of White Town. Le Café on the Promenade, operated by the Aurobindo Ashram, offers croissants and fresh coffee at prices that seem to belong to a different economic reality. Working out a morning routine between the two takes approximately two days and becomes non-negotiable by day three.\n\nThe Focus on Bookshop on Rue Suffren is a serious independent bookshop with a well-chosen selection in English and French, Indian history, philosophy, Tamil literature in translation, and whatever fiction the owner is currently reading. Spending an hour there and then reading what you found in the nearest café courtyard is the quietest and most genuinely Pondicherry afternoon on offer.",
    bestFor: [
      "Budget travellers",
      "Heritage enthusiasts",
      "Couples travelling economically",
      "Slow explorers",
    ],
    notFor: ["Guests seeking extensive resort facilities"],
    ourTip:
      "Kasha Ki Aasha rooftop café opens at 8am: go early enough and the view over White Town's tiled rooflines, with coffee arriving at the right moment, is worth more than any museum.",
  },

  {
    id: "villa-krish",
    name: "Villa Krish",
    collection: "backpacker",
    category: "budget",
    priceRange: "budget",
    lat: 11.9338,
    lng: 79.8318,
    photo: "villa-krish.jpg",
    tagline: "Between boutique hotel and guesthouse, in the right location.",
    vibe:
      "Villa Krish occupies a happy middle ground between boutique hotel and affordable guesthouse. Friendly, comfortable and well positioned, it offers a relaxed base for travellers who expect more personality than a standard budget hotel but prefer a quieter atmosphere than a busy hostel. It is the sort of place that encourages you to spend your days exploring rather than staying indoors.",
    whyLoveIt:
      "Its central location makes it remarkably easy to experience the best of Pondicherry on foot. After a full day discovering cafés, museums and hidden streets, returning to the calm comfort of Villa Krish feels wonderfully uncomplicated.",
    exploreNearby:
      "Within a leisurely walk you can reach the Promenade, the Sri Aurobindo Ashram and many of White Town's most photographed streets. Pause for fresh pastries at a neighbourhood bakery, browse artisan boutiques or simply wander without a destination. Pondicherry often rewards those who leave room for surprise.\n\nPondicherry's most rewarding experiences are not at any particular destination but in the intervals between them. The courtyard glimpsed through a half-open gate, the kolam pattern that only makes sense when you're standing directly above it, the conversation that starts when a local asks where you're from and keeps going for an hour. None of this can be planned. It requires walking without a fixed destination and leaving space for the city to interrupt you.\n\nAlong Rue Suffren and the surrounding lanes, a generation of designers, weavers and ceramicists have established workshops and small shops selling things you will not find in Delhi or Mumbai. The prices reflect genuine craft. Choosing something takes longer than clicking a link, but the object arrives home carrying a different weight.\n\nEvery evening after six, the Promenade closes to traffic. It sounds like a minor administrative detail until you are actually standing on Goubert Avenue with the sea breeze arriving from the east and the whole city gathered around you, and then it seems like the most important planning decision anyone has made in Tamil Nadu.",
    bestFor: [
      "Independent travellers",
      "Couples on a budget",
      "Weekend visitors",
      "Travellers who explore on foot",
    ],
    notFor: ["Visitors wanting a lively hostel atmosphere"],
    ourTip:
      "Pondicherry's best moments are unplanned: leave one morning entirely without an itinerary and let the streets decide. The city has a gift for interrupting people who are paying attention.",
  },

  // ── Coastal Escapes & Wellness ─────────────────────────────────────────────

  {
    id: "le-pondy",
    name: "Le Pondy",
    collection: "coastal-wellness",
    category: "luxury",
    priceRange: "luxury",
    lat: 11.9050,
    lng: 79.8380,
    photo: "le-pondy.jpg",
    tagline: "Between lagoon and sea, where the holiday truly begins.",
    vibe:
      "There comes a point during every Pondicherry holiday when the city begins to fade behind you and the coastline takes over. Le Pondy captures that transition beautifully. Set between the Bay of Bengal and a peaceful lagoon, the resort feels wonderfully removed from everyday life while remaining only a short drive from White Town. Palm trees sway above quiet pathways, villas open onto gardens or water, and the slower rhythm of the coast quickly becomes your own. This is a place where nobody seems to be in a hurry.\n\nThe light at the lagoon changes entirely through the day. Early morning brings a pale stillness, the water so flat it reflects the sky with mirror precision. By afternoon the palm shadows are long across the gardens. By evening the lagoon turns the colour of old copper. The resort is oriented to make all of this visible from wherever you happen to be sitting.",
    whyLoveIt:
      "Its unique setting between sea and lagoon gives Le Pondy a character few resorts can match. Spend the morning walking along the beach, cool off in the expansive pool during the afternoon, then watch the changing colours of the lagoon as the sun begins to set. Every part of the property invites you to spend more time outdoors.",
    exploreNearby:
      "Paradise Beach is only a short boat ride away and remains one of the most beautiful stretches of sand in the region. Venture back towards White Town for an evening of cafés and heritage streets, then return to the calm of the resort before the city falls asleep.\n\nThe boat crossing to Paradise Beach takes twenty minutes and is as much of the experience as the beach itself. The channel opens onto a long strip of fine sand with no road access, which means no vendors, no cars, no crowds. A swim, the sound of the Bay of Bengal, and the return crossing before the afternoon heat peaks: a day that requires very little planning.",
    bestFor: [
      "Couples",
      "Beach holidays",
      "Relaxing long weekends",
      "Honeymoon escapes",
    ],
    notFor: ["Travellers wanting to stay within walking distance of White Town"],
    ourTip:
      "The boat to Paradise Beach takes twenty minutes and the beach has no road access, so go on a weekday morning, before the weekend boats fill up, and you will have a long stretch of sand almost to yourselves.",
  },

  {
    id: "radisson-resort",
    name: "Radisson Resort Pondicherry Bay",
    collection: "coastal-wellness",
    category: "luxury",
    priceRange: "luxury",
    lat: 11.9200,
    lng: 79.8400,
    photo: "radisson-resort.jpg",
    tagline: "Contemporary tropical comfort on Pondicherry Bay.",
    vibe:
      "Modern comfort meets tropical serenity at Radisson Resort Pondicherry Bay. Wide open spaces, contemporary architecture and landscaped gardens create an atmosphere that feels polished without becoming formal. Families settle happily around the pool, couples linger over long breakfasts and the pace naturally slows from the moment you arrive. It is a resort designed for travellers who want the reassurance of an international brand without losing sight of Pondicherry's coastal charm.",
    whyLoveIt:
      "The expansive swimming pool is the natural gathering place throughout the day, offering plenty of space to relax between sightseeing excursions. The resort's wellness facilities and generous landscaped grounds make it easy to alternate between exploring the city and simply enjoying the hotel itself.",
    exploreNearby:
      "Spend a morning discovering White Town before returning for an afternoon beside the pool. If time allows, continue north towards Auroville or Serenity Beach, where quieter stretches of coastline reveal a different side of Pondicherry far from the busiest tourist routes.\n\nThe East Coast Road heading north from Pondicherry is one of the most pleasant drives in South India, lined with casuarina trees, passing through small fishing hamlets where boats are drawn up on the sand and the catch is sorted on palm-leaf mats in the early morning shade. Serenity Beach arrives after thirty minutes: broader and quieter than the city Promenade, with a small surf scene and the kind of beach restaurant where the fish was in the ocean two hours before you ordered it.\n\nAuroville is fifteen minutes from the resort, and arriving from this direction, through the community's own reforested land, considerably cooler than the surrounding plain, gives a better first impression of it than arriving from the city side. The Visitor Centre explains the project well, and the Matrimandir viewing area rewards the short walk through the forest.",
    bestFor: [
      "Families",
      "Couples",
      "Visitors arriving by car",
      "Travellers combining relaxation with sightseeing",
    ],
    notFor: ["Guests looking for a historic heritage property"],
    ourTip:
      "Ask at reception about surf conditions at Serenity Beach before you go: the drive takes thirty minutes and if the waves are right it is the best sports experience in the Pondicherry area.",
  },

  {
    id: "club-mahindra",
    name: "Club Mahindra Puducherry",
    collection: "coastal-wellness",
    category: "luxury",
    priceRange: "upscale",
    lat: 11.9150,
    lng: 79.8390,
    photo: "club-mahindra.jpg",
    tagline: "Spacious resort living at the coastal edge of the city.",
    vibe:
      "Club Mahindra is built around the simple pleasure of spending time together. Spacious grounds, tropical gardens and a relaxed holiday atmosphere encourage guests to slow down and enjoy the company of family and friends. Days unfold naturally between the pool, the beach and leisurely meals, making it easy to forget both the clock and the outside world. It is less about rushing from attraction to attraction and more about making memories at an easy pace.",
    whyLoveIt:
      "The resort offers enough space that every generation can enjoy the holiday differently. Children gravitate towards the outdoor activities while adults appreciate the quieter corners where a book, a sea breeze and an unhurried afternoon are more than enough.",
    exploreNearby:
      "When you're ready to venture beyond the resort, White Town is close enough for a day of heritage walks, shopping and café hopping before returning to the coast. The nearby beaches are ideal for early morning walks when fishing boats head out across the Bay of Bengal and the shoreline belongs almost entirely to locals.\n\nThe casuarina trees along this stretch of coast are among the oldest and tallest in the region. Their sound when the sea breeze moves through them, a dry, whispered rush entirely unlike anything else, is the specific soundtrack of Pondicherry's coastal edge. Many guests report it as the thing they remember most clearly months after they return home.\n\nThe fishing boats go out before dawn and come back as the light arrives. From the beach at that hour, with the sky changing colour over the Bay of Bengal and the boats growing larger as they approach, it is one of those scenes that reminds you why you chose to travel somewhere rather than simply go somewhere.",
    bestFor: [
      "Family holidays",
      "Multi-generation travel",
      "Relaxed resort stays",
      "Visitors staying several nights",
    ],
    notFor: ["Travellers who prefer boutique hotels"],
    ourTip:
      "Walk to the beach at 5.30am, before the resort wakes up: the fishing boats returning in the early light, with the casuarinas behind you and the Bay of Bengal ahead, is one of those mornings that makes the early alarm entirely worth it.",
  },

  {
    id: "ocean-spray",
    name: "Ocean Spray",
    collection: "coastal-wellness",
    category: "mid",
    priceRange: "mid",
    lat: 11.9100,
    lng: 79.8370,
    photo: "ocean-spray.jpg",
    tagline: "A lagoon retreat where mornings arrive slowly and beautifully.",
    vibe:
      "Ocean Spray offers a side of Pondicherry that many visitors never discover. Built around a broad lagoon and surrounded by lush greenery, the resort feels more like a tropical retreat than a city hotel. Water reflects the changing light throughout the day, pathways weave through landscaped gardens and the atmosphere encourages you to leave your phone behind for a while. It is peaceful in the best possible way.",
    whyLoveIt:
      "The resort's lagoon setting creates an experience unlike anywhere else in Pondicherry. Instead of looking out onto busy streets, many guests wake to still water, birdsong and wide open views that immediately slow the pace of the day. It is an ideal setting for travellers seeking space as much as comfort.",
    exploreNearby:
      "Take time to explore the quieter northern coastline where small fishing villages, uncrowded beaches and roadside seafood restaurants reveal a more authentic rhythm of coastal life. Auroville is also within easy reach, making it easy to combine relaxation with one of the region's most fascinating communities.\n\nThe lagoon is a draw for egrets, herons and kingfishers through the year, and in season migratory waders use the still water as a stopover point on routes that span continents. Guests who walk the perimeter at first light encounter a different resort from the daytime one, quieter, more elemental, the waterbirds going about their work with complete indifference to the hotel around them.\n\nOn certain mornings between November and February, a thin mist settles on the lagoon surface and holds until the sun burns it off around seven. Watching it clear from a waterside table over the first coffee of the day is one of those accidental pleasures that a good setting delivers without any effort from anyone.",
    bestFor: [
      "Wellness breaks",
      "Couples",
      "Nature lovers",
      "Visitors looking beyond White Town",
    ],
    notFor: ["Travellers who want to explore the city entirely on foot"],
    ourTip:
      "The lagoon mist clears around 7am on cool-season mornings: being at the water's edge with a coffee as it lifts is a Pondicherry experience that no guidebook mentions.",
  },

  {
    id: "dune-eco-village",
    name: "Dune Eco Village & Spa",
    collection: "coastal-wellness",
    category: "luxury",
    priceRange: "upscale",
    lat: 11.9820,
    lng: 79.8280,
    photo: "dune-eco-village.jpg",
    tagline: "Where art, nature and a gentler way of travelling meet.",
    vibe:
      "Few places capture Pondicherry's creative spirit quite like Dune Eco Village & Spa. Built around sustainability, art and nature, it feels less like a conventional resort and more like a small community where every cottage tells its own story. Sculptures emerge from tropical gardens, pathways disappear beneath towering trees and the soundtrack is provided by birds rather than traffic. Staying here is not simply about accommodation. It is about embracing a different way of travelling.",
    whyLoveIt:
      "The holistic spa and eco-conscious philosophy make Dune unlike any other property in the region. Yoga sessions, wellness treatments, locally inspired cuisine and beautifully designed cottages encourage guests to reconnect with nature while enjoying genuine comfort. It is a place where slowing down feels entirely natural.",
    exploreNearby:
      "Serenity Beach is only minutes away and offers some of the best sunrise walks along the coast. Continue to nearby Auroville to discover artisan workshops, sustainable cafés and the famous Matrimandir viewing area before returning to the peaceful surroundings of the resort.\n\nFrom Dune, Serenity Beach is a five-minute walk through casuarina trees. At dawn, before the surf school sets up and the first swimmers arrive, the beach belongs entirely to the fishermen, their boats and the kind of silence that is full of sound, wind, water, birds, but contains no human noise at all. Starting the day there sets a tone that is difficult to improve on.\n\nThe road to Auroville from Dune passes through forest that the community planted over fifty years on what was bare, eroded laterite land. It is now dense enough to have its own microclimate, noticeably cooler, quiet in a way that feels intentional, the red-earth paths between the trees one of the most peaceful walks in the region.\n\nThroughout Dune's grounds, sculptures and ceramic installations appear at the end of pathways or half-hidden among tropical planting. Guests discover them gradually over the course of a stay rather than all at once. It gives the property a quality that borrows from both garden and gallery without settling into either, and makes a second morning walk through the grounds feel different from the first.",
    bestFor: [
      "Wellness travellers",
      "Creative souls",
      "Nature lovers",
      "Couples seeking something different",
    ],
    notFor: ["Visitors wanting to stay in the centre of White Town"],
    ourTip:
      "Follow the red-earth path through the casuarinas from the resort to Serenity Beach at dawn: five minutes on foot, and you arrive at one of the quietest beaches in the region before anyone else is there.",
  },
];

export const COLLECTION_ORDER: HotelCollection[] = [
  "french-heritage",
  "boutique",
  "coastal-wellness",
  "family",
  "backpacker",
];

export function getHotelsByCollection(collection: HotelCollection): Hotel[] {
  return hotels.filter((h) => h.collection === collection);
}

export function getHotel(id: string): Hotel | undefined {
  return hotels.find((h) => h.id === id);
}
