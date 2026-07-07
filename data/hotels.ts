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
      "If Puducherry could be distilled into a single hotel, Palais de Mahe would be a compelling candidate. Tucked behind an elegant mustard-yellow façade on Rue de Bussy in the heart of White Town, this carefully restored heritage property captures the spirit of the former French settlement without ever feeling like a period piece. Sunlight filters through graceful colonnades, polished timber shutters frame tranquil courtyards, and every space seems designed to encourage a slower pace of life. With only a limited number of rooms, the atmosphere remains intimate, refined and wonderfully unhurried. Breakfast naturally extends into late morning, afternoons invite an unhurried swim beneath the arcades, and evenings end over dinner in one of White Town's most elegant settings.\n\nThe street itself forms part of the experience. The surrounding lanes are among the most photographed in Puducherry, lined with ochre and mustard façades, flowering bougainvillea, shuttered windows and beautifully restored townhouses that have come to define the city's distinctive architectural identity. Walking back to the hotel after sunset, when the streets are quieter and the old buildings glow beneath warm light, is one of the understated pleasures of staying here.",
    whyLoveIt:
      "The beautiful courtyard pool is the heart of the property, enclosed by colonial arcades that remain pleasantly cool even during the hottest afternoons. Upstairs, the acclaimed Mahe Bar and rooftop restaurant continue the experience with refined cocktails, fresh seafood and thoughtfully prepared Franco-Tamil and South Indian cuisine. Few heritage hotels in Puducherry combine architecture, hospitality and dining with such quiet confidence.",
    exploreNearby:
      "Step outside and within minutes you are on Goubert Avenue, where fishermen prepare their boats against the backdrop of the Bay of Bengal and early walkers claim the promenade before the day warms. Continue to the Sri Aurobindo Ashram, browse the independent boutiques along Suffren Street and spend the afternoon wandering White Town's galleries, cafés and shaded avenues. The neighbourhood rewards exploration on foot, and Palais de Mahe places nearly every major landmark within easy reach.\n\nA short walk brings you to Manakula Vinayagar Temple, one of Puducherry's oldest and most revered Hindu temples, whose origins predate French rule. Its richly decorated gopuram rises unexpectedly above the colonial streets, a vivid reminder that the city's Tamil heritage has always existed alongside its French identity. Visit in the early morning to experience the temple at its liveliest, when flower sellers, devotees and the sound of temple music fill the surrounding lanes.\n\nNearby, the Institut Français de Pondichéry occupies one of White Town's most distinguished colonial buildings. Since 1955 it has been an important centre for research in ecology, Indology and the social sciences, housing remarkable collections of manuscripts, maps and historical archives. While public access is limited, the building itself remains an important landmark within the French Quarter.\n\nJust beyond stands the Bibliothèque Romain Rolland, among India's oldest public libraries with a substantial French-language collection. Named after the Nobel Prize-winning writer and close friend of Mahatma Gandhi, it remains a wonderfully quiet place to pause, browse and appreciate another layer of Puducherry's enduring cultural connections with France.",
    bestFor: [
      "First-time visitors",
      "Couples seeking a romantic escape",
      "Heritage lovers",
      "Food enthusiasts",
    ],
    notFor: ["Travellers looking for a large beach resort"],
    ourTip:
      "Leave the hotel shortly after sunrise and visit Manakula Vinayagar Temple before returning for a leisurely breakfast beneath the arcades. Experiencing one of Puducherry's oldest living traditions before settling into one of its finest heritage hotels perfectly captures the city's unique character.",
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
      "Maison Perumal tells a different story of Puducherry. While White Town reflects the city's French chapter, this beautifully restored heritage mansion introduces visitors to the older rhythms of the Tamil Quarter. Traditional courtyards, carved teak doors, Athangudi-inspired floors and deep verandas create an atmosphere that feels lived in rather than curated. The hospitality is warm and personal, giving the impression of staying in an elegant family residence where generations of craftsmanship and tradition remain very much alive.\n\nThe Tamil Quarter represents the city's original urban fabric, evolving around merchants, artisans and temple communities long before the arrival of European trading companies. The gracious homes that line its streets combine Tamil domestic architecture with influences gathered through centuries of maritime trade across the Coromandel Coast and Southeast Asia. Staying at Maison Perumal offers an introduction to this deeper history, revealing a side of Puducherry that many visitors overlook.",
    whyLoveIt:
      "Dining forms an essential part of the experience. The celebrated restaurant showcases the distinctive Franco-Tamil cuisine that evolved within Puducherry's Creole community, bringing together local seafood, Tamil culinary traditions and subtle French influences. Few hotels offer such an immersive introduction to the city's unique gastronomic heritage.",
    exploreNearby:
      "Wake early and wander through the Tamil Quarter as shopkeepers prepare for the day, flower markets open and temple bells echo through the narrow streets. Within an easy walk you can reach White Town, the Promenade, colourful neighbourhood markets and many of Puducherry's finest artisan workshops. Maison Perumal is one of the few hotels that genuinely allows visitors to experience both halves of the historic city with equal ease.\n\nThe morning market along Jawaharlal Nehru Street comes alive from first light. Flower sellers weave jasmine garlands for nearby temples, spice merchants arrange colourful displays and neighbourhood residents stop to buy fresh produce before work. It remains one of the city's most authentic daily rituals.\n\nA short distance away, Varadaraja Perumal Temple stands among the Tamil Quarter's most important Vaishnavite shrines. During festival processions the surrounding streets fill with musicians, decorated temple chariots and neighbourhood families, offering visitors a memorable glimpse into Puducherry's living religious traditions.\n\nNearby runs the canal that historically marked the boundary between the French and Tamil quarters. Although today it is simply another city street, for more than two centuries it represented the meeting point of two very different urban worlds. Standing here makes it easy to understand how Puducherry developed its distinctive blend of architecture, cuisine and culture.",
    bestFor: [
      "Cultural travellers",
      "Food lovers",
      "Architecture enthusiasts",
      "Couples",
    ],
    notFor: ["Visitors looking for resort facilities or extensive leisure amenities"],
    ourTip:
      "Cross into White Town during the golden hour before sunset, then return through the Tamil Quarter as evening prayers begin in the neighbourhood temples. Few walks illustrate Puducherry's layered identity more beautifully.",
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
      "Few hotels embody Puducherry's French heritage as convincingly as Le Dupleix. Occupying a beautifully restored colonial residence that once served as the home of a French mayor, the hotel combines period architecture with contemporary comfort while preserving the atmosphere that makes White Town so distinctive. Thick masonry walls temper the tropical heat, polished timber furniture recalls another era, and the peaceful central courtyard provides a welcome retreat after a day spent exploring the lively streets outside. It is less a conventional hotel than an opportunity to experience the rhythms of colonial Pondicherry from within one of its historic homes.\n\nUnlike some of White Town's grander heritage properties, Le Dupleix feels intimate and residential rather than ceremonial. Its scale encourages a slower pace, making it particularly appealing to travellers who value character and history over expansive facilities.\n\nThe hotel's name carries particular historical significance. Joseph François Dupleix, Governor-General of French India during the mid-18th century, was the architect of France's greatest imperial ambitions on the subcontinent. Had events unfolded differently, French rather than British influence might have come to dominate much of India. Although his political fortunes ultimately declined and he returned to France in relative disgrace, the city still bears the imprint of his administration through its orderly street plan, colonial architecture, and enduring French identity. Staying at Le Dupleix offers a tangible connection to that remarkable chapter of Indian history.",
    whyLoveIt:
      "The heritage architecture is the hotel's greatest luxury. Rather than relying on lavish facilities, Le Dupleix offers something increasingly rare: the chance to stay within an authentic colonial residence while enjoying modern comforts and attentive, understated hospitality. It is an experience shaped as much by atmosphere as by service.",
    exploreNearby:
      "The hotel places you within easy walking distance of many of White Town's defining landmarks. Notre Dame des Anges Church, the Promenade, and the cafés that have made the French Quarter famous are all just minutes away. Spend the morning exploring art galleries, browse independent design stores during the afternoon, and return in time for an evening stroll along Goubert Avenue after the seafront closes to traffic.\n\nThe Monument aux Morts stands nearby on Boulevard François Martin, a dignified war memorial commemorating the soldiers from French India who lost their lives fighting alongside France during the First World War. Shaded by mature trees and often overlooked by hurried visitors, it offers a quiet reminder of Puducherry's unique place in both Indian and French history.\n\nRaj Nivas, the official residence of the Lieutenant Governor of Puducherry, occupies one of White Town's most imposing colonial compounds. Although the building itself is not generally open to visitors, its elegant façade and expansive gardens remain among the finest surviving examples of French civic architecture in India.\n\nA short walk away stands the bronze statue of Joseph François Dupleix, one of the city's most recognisable colonial landmarks. More than simply a monument, it serves as a reminder of the extraordinary historical moment when French ambitions on the Coromandel Coast briefly rivalled those of the British Empire.\n\nA little further on, the Église de Notre Dame de la Conception Immaculée ranks among Puducherry's oldest churches. Visit early in the morning, when sunlight filters gently through the interior and the peaceful atmosphere offers a welcome contrast to the bustle outside.",
    bestFor: [
      "History lovers",
      "Couples",
      "Returning visitors to Puducherry",
      "Travellers who enjoy boutique hotels with character",
    ],
    notFor: ["Families seeking resort-style facilities"],
    ourTip:
      "Take a few minutes to visit the Dupleix statue and read the inscription beneath it before returning to the hotel. Understanding the governor whose name the property bears adds an unexpected depth to both the building and the city that surrounds it.",
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
      "Discreet, elegant and quietly luxurious, La Villa is the sort of address experienced travellers recommend to one another rather than discover by chance. Behind high heritage walls lies one of White Town's finest boutique hotels, where contemporary design has been carefully woven into a beautifully restored colonial residence. Tropical gardens, understated interiors and thoughtfully proportioned spaces create an atmosphere that feels calm from the moment you arrive. Rather than imposing luxury, the hotel achieves it through restraint, craftsmanship and exceptional attention to detail.\n\nPart of La Villa's appeal lies in its discretion. There is little to announce its presence from the street, no grand entrance competing for attention and no sense of performance. That quiet confidence reflects the best of White Town itself, where some of the city's finest heritage properties reveal their character only after you step through the front door.",
    whyLoveIt:
      "The secluded swimming pool is among the most beautiful in White Town, framed by lush planting and elegant colonial architecture that creates a remarkable sense of privacy. Together with the acclaimed restaurant, which serves refined seasonal Franco-Tamil and European cuisine, it makes La Villa as much a destination for lingering as for sightseeing.",
    exploreNearby:
      "Within a leisurely walk you can browse independent galleries, discover cafés hidden inside restored colonial villas and reach the seafront before sunrise. White Town is best explored without an itinerary, allowing its architecture, quiet streets and unexpected courtyards to reveal themselves at their own pace.\n\nThe Sri Aurobindo Ashram lies just a few minutes away. Visitors from around the world come to spend time in the meditation courtyard surrounding the flower-covered samadhi of Sri Aurobindo and Mirra Alfassa, known as the Mother. Regardless of religious belief, it remains one of Puducherry's most peaceful places.\n\nAlong nearby streets, several workshops continue the tradition of hand-block printing using carved wooden blocks that have been passed down through generations. The textiles produced here remain among the city's finest handcrafted souvenirs and reflect a living tradition that continues alongside White Town's growing design scene.\n\nThe Alliance Française de Pondichéry has been a centre of French cultural life for decades, hosting concerts, exhibitions, film screenings and literary events throughout the year. Checking its programme after arriving often rewards visitors with an unexpectedly memorable evening that reveals another side of Puducherry's enduring connection with France.",
    bestFor: [
      "Honeymoons",
      "Romantic weekends",
      "Boutique hotel enthusiasts",
      "Travellers celebrating a special occasion",
    ],
    notFor: ["Visitors travelling with young children who prefer larger resorts"],
    ourTip:
      "Look at the Alliance Française programme during your first afternoon in town. A concert, film screening or photography exhibition often becomes one of the most rewarding experiences of a stay in White Town, offering a glimpse of the city's contemporary French cultural life beyond its colonial architecture.",
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
      "If waking to the sound of the Bay of Bengal is your idea of the perfect holiday, The Promenade occupies one of Puducherry's most coveted addresses. Sitting directly opposite Goubert Avenue, the city's celebrated seaside promenade, it combines contemporary comfort with uninterrupted views of the coastline and a front-row seat to White Town's daily rhythm. Sunrise walkers, fishermen returning to shore, evening musicians and families gathering by the sea become part of the landscape throughout your stay. The atmosphere is lively without ever feeling hectic, capturing the easy, unhurried character that defines Puducherry at its best.\n\nWhat makes Goubert Avenue remarkable is not its width or its architecture but the ritual that unfolds there every evening. As traffic gives way to pedestrians, the seafront becomes the city's shared living room. Families spread across the granite embankment, vendors arrive with cut fruit, roasted peanuts and fresh sugarcane juice, children race between the statues, and the Bay of Bengal provides a constant backdrop of surf and sea breeze. Few Indian cities have preserved such a simple daily tradition with the same consistency. Staying at The Promenade means experiencing this ritual not as a visitor passing through, but as part of the neighbourhood itself.",
    whyLoveIt:
      "The hotel's greatest luxury is its location. Few properties in Puducherry allow you to step directly onto the Promenade, enjoy uninterrupted sea views, and remain within a short walk of White Town's cafés, restaurants, galleries and colonial landmarks. For travellers who prefer exploring on foot, there is no more convenient base.",
    exploreNearby:
      "Begin your morning with a walk along Goubert Avenue before visiting the Gandhi Statue and the Old Lighthouse. Spend the afternoon exploring White Town's independent boutiques, heritage buildings and art galleries, then return as the promenade comes alive after sunset, when residents and visitors gather to enjoy the cooler evening air beside the sea.\n\nLe Café, the iconic waterfront café operated by the Sri Aurobindo Ashram at the northern end of the promenade, has long been one of Puducherry's favourite meeting places. Coffee, pastries and simple café fare are served throughout the day, but the veranda overlooking the Bay of Bengal remains the real attraction. Arrive early in the morning, before the crowds build, to enjoy one of the city's finest breakfast views.\n\nThe Old Lighthouse at the southern end of Goubert Avenue is among the oldest surviving lighthouses on the Coromandel Coast. Although no longer operational, its distinctive silhouette remains one of Puducherry's defining landmarks. The rocky shoreline between the lighthouse and the hotel, known as Rock Beach, is at its most atmospheric at dawn, when the fishing boats are still visible offshore and the first light spreads across the Bay of Bengal.\n\nThe French War Memorial stands just a short walk from the hotel, its white columns rising quietly above Goubert Avenue. Unveiled in 1938, it commemorates the soldiers from French India who lost their lives fighting alongside France during the First World War. It is an elegant monument that deserves more than the passing glance it often receives.\n\nA little further north stands the statue of Jeanne d'Arc, an unexpected reminder of Puducherry's French identity. Looking out towards the Bay of Bengal, the monument honours France's national heroine and reflects the remarkable cultural connections that continue to shape White Town long after the end of French rule.",
    bestFor: [
      "First-time visitors",
      "Sea lovers",
      "Couples",
      "Travellers who enjoy being in the heart of the action",
    ],
    notFor: ["Visitors seeking complete seclusion or a resort atmosphere"],
    ourTip:
      "Set your alarm for 6 AM and walk the few steps to Goubert Avenue before the city fully awakens. Turn north towards Le Café, order a coffee and a freshly baked croissant on the veranda, and watch the sun rise over the Bay of Bengal. It is one of those simple Pondicherry experiences that visitors remember long after they have forgotten individual sights.",
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
      "Some hotels impress the moment you arrive. Villa Shanti quietly grows on you. Hidden behind an elegant heritage façade, it combines French colonial architecture with clean contemporary design, creating spaces that feel effortlessly calm. White walls, warm timber, soft lighting and leafy courtyards make the bustle of White Town seem wonderfully distant. It is sophisticated without being formal, making every guest feel immediately at home.\n\nThe hotel sits on Rue Suffren, which has quietly become the living room of White Town, the street where many of the city's finest design boutiques, independent galleries, cafés and creative spaces have naturally gathered over the past two decades. Restored colonial buildings stand beside independent shops and small hotels, giving the street an atmosphere that feels lived in rather than curated for visitors. Morning coffee becomes an excuse to linger, afternoons disappear between galleries and bookshops, and evenings unfold over long dinners and slow walks. You are not simply near the best of White Town. You are already in it.\n\nAmong Puducherry's boutique hotels, Villa Shanti occupies a particularly appealing position. It balances thoughtful contemporary design with the easy sociability of the neighbourhood around it, making it feel less like a secluded retreat and more like a natural extension of White Town itself.",
    whyLoveIt:
      "The hotel's celebrated restaurant has become a destination in its own right and remains one of the city's most consistently rewarding dining experiences. Whether you settle into the tranquil courtyard for breakfast, linger over a long lunch beneath the shade of the trees or enjoy dinner beneath softly glowing lanterns, every meal feels woven into the experience of staying here rather than simply attached to it.\n\nThe kitchen has earned its reputation through restraint rather than extravagance. Seasonal produce, local seafood and carefully judged Franco-Tamil influences allow the ingredients to speak for themselves, while the service strikes that increasingly rare balance between attentive and relaxed. The restaurant attracts as many discerning local residents as visitors, which remains one of the strongest endorsements any restaurant in Puducherry can receive.",
    exploreNearby:
      "Step outside and lose yourself among White Town's quiet streets, where colourful colonial villas conceal independent galleries, design boutiques and charming cafés behind understated façades. The Promenade, the Sri Aurobindo Ashram and many of the city's finest restaurants and shops are all within an easy stroll, allowing you to experience Puducherry exactly as it was designed to be explored: slowly and on foot.\n\nFocus Bookshop, just along Rue Suffren, is one of those small, serious independent bookshops that tells you exactly what kind of city this is. Its carefully chosen shelves range from Indian history and Tamil literature to French writing, Sri Aurobindo's philosophy and contemporary fiction, while the staff seem genuinely delighted to recommend something unexpected. It is worth an unplanned half-hour, and often much longer.\n\nRue Romain Rolland, the parallel street one block north, contains some of the finest surviving private residences in White Town. Terracotta, ochre and pale blue façades, shuttered windows, flowering courtyards and intricate wrought-iron balconies reward anyone willing to walk slowly and look beyond the obvious. It is one of the city's richest streets for lovers of architecture and one where every corner seems to reveal another beautifully restored house.\n\nThe Sri Aurobindo Ashram is only moments away on Rue de la Marine. The flower-covered samadhi of Sri Aurobindo and the Mother remains one of Puducherry's most peaceful spaces, welcoming visitors of every background who are prepared to observe its atmosphere of silence and reflection. If you happen to be staying over a Friday, spend the early evening strolling along Rue Suffren, when several galleries often launch new exhibitions and the neighbourhood's creative community gathers in a way that visitors rarely expect. It offers a glimpse of White Town as a living cultural quarter rather than simply a heritage district.",
    bestFor: [
      "Couples",
      "Food lovers",
      "Boutique hotel enthusiasts",
      "Weekend escapes",
    ],
    notFor: ["Travellers looking for resort-style facilities"],
    ourTip:
      "Reserve dinner in the courtyard on a Tuesday or Wednesday evening, when the atmosphere is quieter than at the weekend and the kitchen has a little more room to showcase its strengths. Afterwards, take an unhurried walk along Rue Suffren before returning to the hotel. By then the galleries have closed, the cafés have settled into the evening, and White Town reveals the relaxed rhythm that makes so many visitors return.",
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
      "Villa Helena feels wonderfully personal. Occupying a lovingly restored colonial home in the heart of White Town, it offers the warmth and intimacy of a private residence rather than a conventional hotel. Elegant verandas, antique furniture, high ceilings and peaceful courtyards invite long conversations over coffee, while flowering bougainvillea softens almost every view. It is one of those increasingly rare places where silence becomes part of the luxury and where the rhythm of the house encourages you to slow down almost without noticing.\n\nThe verandas deserve a word of their own. White Town has largely lost its veranda culture through redevelopment and changing lifestyles. Villa Helena has managed to preserve it. A morning spent on the first-floor veranda watching the neighbourhood come gently to life below, the vegetable cart making its rounds, flower sellers carrying fresh jasmine garlands, cyclists weaving through the quiet streets and the resident cat conducting its daily inspection, is one of those small pleasures that no itinerary can promise but that many guests remember as the defining image of their stay. It is less a hotel experience than a glimpse into the unhurried domestic life that once characterised the old French quarter.",
    whyLoveIt:
      "Breakfast beneath the shaded courtyard quickly becomes part of the daily rhythm. Fresh tropical fruit, warm pastries, excellent coffee and the quiet shelter of the old house make lingering feel entirely justified before White Town gradually begins to wake around you. It is a gentle, unhurried start to the day and one that captures the hotel's character perfectly.\n\nMore than anything, Villa Helena succeeds because it never feels anonymous. The scale of the property allows for a level of personal hospitality that larger hotels inevitably struggle to match, making guests feel less like customers and more like welcome visitors in an elegant family home.",
    exploreNearby:
      "Everything that makes White Town memorable lies just beyond the front gate. Wander towards the Promenade at sunrise, browse nearby bookshops and galleries during the afternoon, then return through quiet residential streets where Puducherry's French heritage remains beautifully preserved. This is one of the easiest parts of the city to explore entirely on foot, with almost every corner revealing another piece of its layered history.\n\nThe Bibliothèque Romain Rolland, named after the French Nobel laureate and friend of both Gandhi and Rabindranath Tagore, houses one of India's oldest collections of French-language literature. The reading rooms are cool, peaceful and refreshingly free of crowds. Even if your French extends no further than bonjour, it is worth stepping inside simply to appreciate one of the city's enduring intellectual links with France.\n\nA short stroll brings you to Bharathi Park, the green heart of White Town. Designed during the French period and centred on the elegant Aayi Mandapam, it remains one of the city's favourite gathering places. Early morning walkers, children at play and residents escaping the afternoon heat give the park an everyday charm that contrasts beautifully with the formal colonial architecture surrounding it.\n\nWander in almost any direction for ten minutes and you encounter one of White Town's constant pleasures: a weathered doorway with its original carved timber frame still intact, a flowering courtyard glimpsed through an ornate wrought-iron gate, or a broad staircase disappearing into a house that has stood for more than a century. White Town rewards slow walking and genuine curiosity in a way that few historic neighbourhoods still do. Villa Helena is perfectly placed for exactly that kind of exploration.",
    bestFor: [
      "Couples",
      "Slow travellers",
      "Heritage lovers",
      "Readers and writers",
    ],
    notFor: ["Families seeking extensive leisure facilities"],
    ourTip:
      "Rise early and spend half an hour on the veranda before heading out. Watch the neighbourhood wake, listen to bicycles and temple bells replacing the silence of dawn, and resist the temptation to hurry. Villa Helena is one of those places best appreciated at the city's own pace, not your own.",
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
    tagline: "Warmth, character and genuine Puducherry hospitality.",
    vibe:
      "Gratitude Heritage captures something increasingly rare: simplicity with character. Occupying a sensitively restored heritage house, it has retained its original proportions, architectural details and quiet domestic atmosphere while embracing understated modern comfort. The result is a place that feels warm, welcoming and refreshingly unpretentious. Every room has its own personality, every corridor hints at the building's past, and many first-time guests leave feeling as though they have discovered a place they will return to.\n\nSmall heritage properties in Puducherry possess a quality that larger hotels simply cannot manufacture. Their walls were built for family life rather than commercial hospitality, and their courtyards, verandas and generous proportions naturally slow the rhythm of a stay. You find yourself sleeping more deeply, lingering longer over breakfast and caring rather less about ticking off attractions than you expected to. Gratitude Heritage captures that feeling especially well. It is a reminder that one of the city's greatest luxuries is not extravagance but time.",
    whyLoveIt:
      "The intimate scale of the property creates a genuinely personal stay. Staff are generous with recommendations for restaurants, neighbourhood cafés, independent galleries and walking routes that rarely appear in guidebooks, making visitors feel less like tourists and more like temporary residents discovering the city through local eyes.\n\nThere is an ease to the hospitality that cannot be scripted. Conversations begin naturally, advice is offered because it is genuinely helpful rather than because it is part of a service manual, and by the end of a stay many guests know the staff by name. That sense of belonging is difficult to create and one of Gratitude Heritage's greatest strengths.",
    exploreNearby:
      "A short walk brings you to some of White Town's most photogenic streets, where ochre façades, blue shutters and flowering balconies invite slow exploration rather than hurried sightseeing. Continue towards the Promenade, pause for coffee in one of the neighbourhood's cafés or simply wander without a destination. White Town is at its most rewarding when discovered street by street.\n\nRue Dumas and Rue Romain Rolland, running parallel to the Promenade, have retained much of the architectural harmony that once characterised the old French settlement. Teak shutters, carved timber doorways, lime-washed façades and fresh kolam patterns drawn outside homes each morning create the streetscape that has become the visual signature of Puducherry. Staying here means waking up in the middle of that everyday beauty rather than merely coming to photograph it.\n\nSeveral neighbourhood bakeries, many influenced by the city's enduring French traditions and the nearby community of Auroville, begin baking before dawn. Fresh croissants, sourdough loaves and pain au chocolat emerge while the streets are still quiet, filling the neighbourhood with the unmistakable smell of butter and warm bread. Arriving before eight not only guarantees the best selection but also allows you to experience White Town before the day's visitors begin to arrive.\n\nThe Puducherry Museum, a short walk away on Saint Louis Street, rewards an unhurried visit. Among its most important exhibits are Roman amphora fragments, glass beads, ceramics and artefacts excavated at nearby Arikamedu, one of the most significant archaeological sites on India's east coast. Together they tell the story of the maritime trade that connected this coastline with the Mediterranean world nearly two thousand years ago, long before the arrival of the French. The museum is rarely crowded, allowing visitors to explore at their own pace.",
    bestFor: [
      "Heritage enthusiasts",
      "Solo travellers",
      "Couples",
      "Guests seeking authentic hospitality",
    ],
    notFor: ["Visitors wanting luxury resort amenities"],
    ourTip:
      "Visit the Puducherry Museum on your first morning before exploring the city in earnest. Seeing the story of Arikamedu and the ancient trading world first gives remarkable context to everything that follows, from the colonial streets of White Town to the fishing boats that still leave the coast each dawn.",
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
      "French elegance meets tropical Puducherry at Dune de L'Orient. Set within a beautifully restored colonial residence in the heart of White Town, the hotel balances period architecture with the easy pace of coastal living, creating spaces that feel both refined and welcoming. Colourful courtyards, graceful archways, antique details and quiet corners encourage guests to disconnect from busy schedules and settle naturally into the city's slower rhythm. It is a hotel that wears its heritage lightly, offering comfort without sacrificing the character that makes Puducherry unlike anywhere else in India.\n\nUnlike some of White Town's larger heritage properties, Dune de L'Orient feels intimate and quietly residential. The experience is shaped less by grand public spaces than by shaded verandas, leafy courtyards and the gentle sense of calm that settles over the neighbourhood once the day's visitors begin to drift away.",
    whyLoveIt:
      "Its acclaimed restaurant is one of the finest introductions to Puducherry's unique Creole culinary tradition, celebrating recipes that blend French techniques with Tamil ingredients and local coastal produce. Dining here is more than simply enjoying an excellent meal. It offers a window into a culinary tradition found nowhere else in India and one that remains central to the city's cultural identity.\n\nFranco-Pondicherry Creole cuisine evolved over more than three centuries through the meeting of French culinary traditions, Tamil home cooking and the influences of the diverse trading communities that settled in the colony. The result is a cuisine entirely its own: delicate seafood stews scented with local spices, slow-cooked meats enriched with French techniques, and sauces that balance butter, curry leaves and tamarind with remarkable ease. Few visitors leave Puducherry fully understanding its history without experiencing at least one authentic Creole meal.",
    exploreNearby:
      "Within minutes you can reach the Promenade, Notre Dame des Anges Church and many of White Town's finest cafés, galleries and independent boutiques. Spend an afternoon wandering the neighbourhood's quiet streets, where restored villas, shaded courtyards and unexpected art spaces reveal themselves around almost every corner. White Town rewards curiosity, and this is one of its most rewarding locations from which to explore on foot.\n\nNotre Dame des Anges, visible from the hotel, was completed in the mid-19th century and remains one of Puducherry's most recognisable churches. Its pale façade, finished with traditional lime plaster enriched with finely ground shell, takes on soft pink and golden tones as the light changes through the day. Inside, lofty ceilings and filtered daylight create one of the city's most peaceful interiors. Whether you come for architecture, history or simple quiet, it deserves an unhurried visit.\n\nThe streets behind the church are home to several independent galleries showcasing the work of Puducherry-based artists alongside rotating exhibitions from across South India. Most welcome visitors freely, making them rewarding places to spend an hour discovering the city's contemporary creative scene.\n\nA little further away stands the Basilica of the Sacred Heart of Jesus, one of Puducherry's finest examples of Neo-Gothic architecture. Completed in the early twentieth century, its soaring stained-glass windows and richly detailed interior contrast beautifully with the restrained elegance of the French Quarter churches. Although slightly beyond White Town, it is well worth the short walk.",
    bestFor: [
      "Food lovers",
      "Couples",
      "First-time visitors",
      "Heritage travellers",
    ],
    notFor: ["Visitors wanting large recreational facilities"],
    ourTip:
      "Walk to Notre Dame des Anges shortly after sunrise, when the streets are still quiet and the changing light brings a warm glow to the church's lime-plastered façade. Afterwards, return to the hotel for a leisurely Creole breakfast or plan your evening around dinner at the restaurant. Together, they offer one of the most authentic introductions to Puducherry's distinctive Franco-Tamil heritage.",
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
      "Petit Palais brings together French-inspired elegance and contemporary comfort in a way that feels effortlessly relaxed. Bright interiors, understated décor and intimate public spaces create a boutique atmosphere that is welcoming rather than extravagant. The rooms are calm and thoughtfully designed, encouraging guests to settle in rather than simply pass through. It is easy to understand why so many visitors extend their stay after discovering how comfortable life becomes here.\n\nWhat is quietly unusual about Petit Palais is its sense of elevation. Most visitors experience White Town from the street or, at most, from the shaded veranda of a heritage house. The rooftop changes that perspective entirely. From here, the ordered geometry of the old French grid becomes visible, tiled roofs stretch towards the horizon, church towers rise above the surrounding streets and, beyond them, the Bay of Bengal appears as a thin silver line. Seeing the city from above gives it a different rhythm and a clearer sense of how carefully the colonial town was planned. It is one of those views that quietly changes the way you understand Puducherry.",
    whyLoveIt:
      "The rooftop swimming pool is one of the hotel's greatest pleasures and provides a welcome retreat after exploring Puducherry's sun-drenched streets. Cooling off while looking across the rooftops of White Town quickly becomes part of the daily routine, particularly in the late afternoon when the light softens and the city begins to slow.\n\nUnlike many boutique hotels where the rooftop is little more than an added facility, here it becomes a genuine destination in its own right. Whether you are reading with a coffee in the morning or watching the lights appear across White Town at dusk, it is a space that encourages you to linger.",
    exploreNearby:
      "From here, White Town unfolds naturally. Begin the day with breakfast in one of the nearby cafés, wander through the French Quarter's leafy streets, visit galleries, museums and independent boutiques, then end the afternoon beside the Bay of Bengal as the Promenade fills with walkers enjoying the evening sea breeze. Few hotels place so much of the historic quarter within such comfortable walking distance.\n\nThe Botanical Garden, established by the French administration in 1826, remains one of the oldest botanical gardens in South India. Mature rain trees, tamarinds, palms and flowering tropical species create a surprisingly tranquil landscape only a short distance from the bustle of White Town. Arrive on a weekday morning and you are likely to share the pathways with little more than local walkers and gardeners tending the grounds.\n\nThe Puducherry Museum on Saint Louis Street rewards visitors willing to spend an unhurried hour inside. Its collections include Roman amphora fragments, glass beads, ceramics and other artefacts excavated at nearby Arikamedu, offering tangible evidence of the maritime trade that connected this coast with the Mediterranean world nearly two thousand years ago. Upstairs, colonial furniture, maps and historical objects trace the city's evolution under French rule. It remains one of Puducherry's most consistently overlooked cultural attractions.\n\nAdjoining the museum, Bharati Park forms the green heart of White Town. Laid out during the French period around the elegant Aayi Mandapam, it continues to serve as a gathering place for residents, morning walkers and families escaping the afternoon heat. Before entering, pause beside the statue of Subramania Bharati, the celebrated Tamil poet and nationalist who lived in French India to escape British persecution. His years in Puducherry produced some of the most influential writing of the Indian independence movement.",
    bestFor: [
      "Couples",
      "First-time visitors",
      "Travellers who enjoy boutique comfort",
      "Friends exploring Puducherry together",
    ],
    notFor: ["Guests looking for a secluded beach resort"],
    ourTip:
      "Save the rooftop for the last hour of daylight rather than the middle of the afternoon. As the sun begins to fall, the terracotta roofs of White Town glow warmly, church towers catch the last light and the Bay of Bengal becomes a silver ribbon on the horizon. It is one of the most quietly beautiful views in the city and the perfect way to end a day spent exploring on foot.",
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
      "Every stay in Puducherry reaches the same moment. The cafés and colonial streets begin to recede, the traffic thins, salt replaces the scent of coffee in the air, and the coastline quietly takes over. Le Pondy captures that transition beautifully. Set between the Bay of Bengal and the tranquil Chunnambar backwaters, the resort feels wonderfully removed from everyday life while remaining only a short drive from White Town. Palm trees sway above quiet pathways, villas open onto gardens, private pools or the lagoon, and the slower rhythm of the coast quickly becomes your own. This is a place where nobody seems to be in a hurry.\n\nThe changing light across the lagoon becomes part of the experience. Early morning brings a pale stillness, the water so calm it reflects the sky with remarkable clarity. By afternoon the palms cast long shadows across the gardens, while egrets and kingfishers move quietly through the shallows. As evening approaches, the lagoon takes on warm copper tones before fading gently into dusk. The resort is designed to make these changing moods part of everyday life, whether you are relaxing on your veranda, beside the pool or simply watching the water with a cup of coffee. It is one of the few places around Puducherry where the landscape itself quietly shapes the rhythm of your day.",
    whyLoveIt:
      "Its unique position between the Bay of Bengal and the Chunnambar backwaters gives Le Pondy a setting unlike any other resort in the region. Spend the morning walking along the beach, cool off in the expansive swimming pool during the afternoon, then watch the changing colours of the lagoon as the sun begins to set. Every part of the property encourages life outdoors, whether you are reading beneath the palms, listening to the sea breeze or enjoying the quiet that settles across the water each evening.\n\nUnlike the heritage hotels of White Town, Le Pondy is not about exploring streets or architecture. It is about giving yourself permission to slow down, spend long hours outdoors and allow the landscape to dictate the pace of the day.",
    exploreNearby:
      "Paradise Beach is only a short boat ride away and remains one of the most beautiful stretches of coastline near Puducherry. Venture back towards White Town for an afternoon of heritage streets, cafés and galleries, then return to the calm of the resort as the city begins to wind down. The contrast between the lively French Quarter and the peaceful backwaters is one of the pleasures of staying here.\n\nThe boat journey to Paradise Beach takes around twenty minutes and is as much a part of the experience as the beach itself. The narrow channel winds through mangroves before opening suddenly onto a broad sweep of pale sand facing the Bay of Bengal. With no direct road access, the beach retains a quieter atmosphere than many others along this coastline, particularly on weekday mornings before day visitors begin to arrive. A swim, the sound of the surf and the return crossing before the afternoon heat gathers make for one of the simplest and most rewarding excursions around Puducherry.\n\nIf you have time, linger for a while along the banks of the Chunnambar backwaters after returning from the beach. Fishermen prepare their nets, small boats move quietly through the channels and the wetlands attract a variety of birdlife throughout the year. It is a gentler side of the coast that many visitors overlook in their rush to reach the sea.",
    bestFor: [
      "Couples",
      "Beach holidays",
      "Relaxing long weekends",
      "Honeymoon escapes",
    ],
    notFor: ["Travellers wanting to stay within walking distance of White Town"],
    ourTip:
      "Take the first boat to Paradise Beach on a weekday morning, when the light is soft, the air is still cool and the shoreline is at its quietest. Return to the resort before the afternoon heat, spend a few hours by the lagoon, then finish the day watching the sunset reflected across the backwaters. It captures everything that makes Le Pondy such a memorable coastal escape.",
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
    tagline: "Contemporary tropical comfort on Puducherry's coast.",
    vibe:
      "Modern comfort meets tropical serenity at Radisson Resort Pondicherry Bay. Wide open spaces, contemporary architecture and landscaped gardens create an atmosphere that feels polished without becoming formal. Families settle happily around the pool, couples linger over leisurely breakfasts and the pace naturally slows from the moment you arrive. It is a resort designed for travellers who appreciate the reassurance of an international brand while still enjoying the relaxed character of Puducherry's coastline.\n\nUnlike the heritage hotels of White Town, this is a place where space becomes a luxury. Broad lawns, generous walkways and mature tropical planting create room to breathe after a day spent exploring the city's narrow colonial streets. It is equally suited to guests who intend to spend the day sightseeing and to those who are perfectly content never leaving the resort.",
    whyLoveIt:
      "The expansive swimming pool is the natural heart of the resort, offering plenty of space to unwind between excursions. Wellness facilities, landscaped gardens and comfortable outdoor spaces make it easy to alternate between discovering Puducherry and simply enjoying the hotel itself.\n\nThe location is another of the resort's strengths. Within a short drive you can explore White Town's heritage streets, spend an afternoon on the coast, visit Auroville or discover quieter beaches to the north, before returning to the comfort of the resort in time for dinner. Few properties offer such an easy balance between exploration and relaxation.",
    exploreNearby:
      "Spend a morning wandering the streets of White Town before returning for an afternoon beside the pool. If time allows, head north towards Serenity Beach and Auroville, where quieter stretches of coastline and shaded forest roads reveal a very different side of Puducherry from the lively French Quarter.\n\nThe East Coast Road is one of the most enjoyable coastal drives in South India. Casuarina groves alternate with fishing villages where colourful boats are pulled high onto the sand and the morning's catch is sorted beneath simple palm shelters. Even a short drive along this road offers a glimpse of everyday coastal life beyond the city's historic centre.\n\nSerenity Beach, around twenty minutes from the resort, has become the centre of Puducherry's small but growing surfing community. Early mornings bring local surfers and fishing boats returning to shore, while the cafés overlooking the beach serve fresh seafood and excellent coffee throughout the day. It is a more relaxed alternative to the Promenade and rewards visitors who arrive before the midday heat.\n\nA little further inland lies Auroville, the international township founded in 1968 as an experiment in human unity. Arriving from the northern approach allows you to pass through much of the community's remarkable reforestation project, where thousands of acres of once-barren land have been transformed into thriving woodland. Begin at the Visitor Centre before taking the shaded walk to the Matrimandir viewing area, one of the most distinctive modern landmarks in India.",
    bestFor: [
      "Families",
      "Couples",
      "Visitors arriving by car",
      "Travellers combining relaxation with sightseeing",
    ],
    notFor: ["Guests looking for a historic heritage property"],
    ourTip:
      "Set aside a full day for the northern coast. Leave after breakfast, drive the East Coast Road to Serenity Beach, continue on to Auroville for the afternoon, then return to the resort before sunset. It is one of the most rewarding day trips around Puducherry and showcases a side of the region that many visitors never discover.",
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
    tagline: "Spacious resort living on Puducherry's peaceful coastline.",
    vibe:
      "Club Mahindra Puducherry is built around one of the simplest pleasures of travel: having enough time and space to enjoy the people you came with. Wide lawns, tropical gardens and easy access to the coast create an atmosphere where days unfold without much planning. Children disappear towards the pool or outdoor activities, grandparents settle into shaded verandas, and long family meals naturally become the centre of the day. It is less about ticking off attractions and more about settling into a slower rhythm that makes a holiday feel like a genuine break from everyday life.\n\nUnlike the boutique hotels of White Town, the experience here is deliberately expansive. There are open spaces instead of narrow streets, sea breezes instead of traffic, and enough room that every guest can find their own pace. Some visitors spend the day exploring Puducherry, while others are perfectly content never venturing beyond the resort grounds.",
    whyLoveIt:
      "The resort is particularly well suited to families and longer stays. There is enough space for every generation to enjoy the holiday differently, whether that means outdoor activities, time by the swimming pool, quiet walks through the gardens or simply reading beneath the shade of the palms with the sound of the sea in the background.\n\nIts location also makes it easy to combine relaxation with sightseeing. White Town, the Promenade and Puducherry's cafés are within comfortable driving distance, allowing you to enjoy the city's heritage before returning each evening to a quieter stretch of coastline.",
    exploreNearby:
      "When you are ready to venture beyond the resort, White Town offers a rewarding contrast with its colonial streets, independent boutiques and cafés tucked into restored villas. Spend a morning exploring the historic quarter, then return to the coast before the afternoon heat settles in.\n\nThe beaches along this southern stretch of Puducherry remain closely tied to the fishing communities that have worked these waters for generations. Before sunrise, colourful wooden boats head out into the Bay of Bengal, returning a few hours later as the day's catch is sorted on the sand. Watching this quiet routine unfold offers a glimpse of coastal life that has changed remarkably little despite the city's growing popularity.\n\nThe casuarina groves lining this part of the shoreline are among the defining features of the landscape. When the afternoon sea breeze rises, the trees produce a soft, whispering sound unlike the rustle of broad-leafed forests. It is a soundtrack that quickly becomes associated with holidays on this coast and one that many visitors remember long after they have returned home.\n\nIf you have time, continue north towards the Chunnambar backwaters or Paradise Beach for a change of scenery. The contrast between the calm waterways, the open Bay of Bengal and the heritage streets of White Town reveals just how varied Puducherry's coastline can be within the space of a single day.",
    bestFor: [
      "Family holidays",
      "Multi-generation travel",
      "Relaxed resort stays",
      "Visitors staying several nights",
    ],
    notFor: ["Travellers who prefer intimate boutique hotels"],
    ourTip:
      "Wake before sunrise and walk down to the beach while the resort is still quiet. As the first fishing boats return across the Bay of Bengal and the sea breeze begins to stir the casuarina trees behind you, you will experience a side of Puducherry that many visitors never see. It is a peaceful, unhurried start to the day and one of the most memorable moments of a stay here.",
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
      "Ocean Spray reveals a quieter side of Puducherry that many visitors never experience. Built around an expansive lagoon and surrounded by landscaped gardens, the resort feels more like a secluded tropical retreat than a city hotel. Water catches the changing light throughout the day, pathways wind through palms and flowering trees, and the atmosphere gently encourages you to slow down. It is the sort of place where mornings stretch unhurriedly into breakfast and afternoons pass almost unnoticed beneath the shade.\n\nThe lagoon shapes everything about the stay. At first light the water lies almost perfectly still, reflecting the sky with remarkable clarity before the breeze arrives. By afternoon the gardens are alive with birdsong, while the changing light turns the water from silver to deep blue and finally to warm copper as evening approaches. Unlike the energy of White Town or the open sweep of the coast, Ocean Spray offers a quieter landscape where the pleasures are subtle and reveal themselves gradually over the course of a few days.",
    whyLoveIt:
      "The lagoon setting creates an experience unlike almost anywhere else around Puducherry. Instead of overlooking busy streets or crowded beaches, many rooms open onto calm water, tropical gardens and wide skies. Waking to birdsong and the gentle movement of the lagoon immediately sets a slower pace for the day, making the resort particularly appealing to travellers seeking space, quiet and genuine relaxation.\n\nIt is also an excellent base for those who want to combine restorative downtime with occasional excursions, allowing you to explore Puducherry at your own pace before returning each evening to a landscape that feels far removed from the city.",
    exploreNearby:
      "Take time to explore the quieter northern coastline, where fishing villages, uncrowded beaches and simple seafood restaurants reveal a more authentic rhythm of coastal life. Auroville is also within easy reach, making it easy to combine time in nature with one of India's most fascinating experimental communities.\n\nThe lagoon itself attracts a variety of birdlife throughout the year. Egrets, pond herons, kingfishers and cormorants are regular visitors, particularly during the quieter hours of the morning and late afternoon. A gentle walk around the water at first light often reveals a different side of the resort, with the gardens still, the air cool and the birds seemingly oblivious to the presence of guests.\n\nDuring the cooler months, particularly between November and February, a light mist occasionally settles over the lagoon before sunrise. It rarely lasts long, but for those fortunate enough to see it, the effect is quietly beautiful. Watching the first rays of sunlight dissolve the mist while enjoying a coffee beside the water is one of those memorable moments that no itinerary can manufacture.\n\nIf time allows, continue north towards Auroville or the beaches beyond Kottakuppam, where the coastline becomes noticeably quieter and the pace of life slows even further. The contrast between the creative energy of Auroville, the fishing villages of the Coromandel Coast and the calm of the lagoon gives this part of Puducherry a character quite different from White Town.",
    bestFor: [
      "Wellness breaks",
      "Couples",
      "Nature lovers",
      "Visitors looking beyond White Town",
    ],
    notFor: ["Travellers who want to explore the city entirely on foot"],
    ourTip:
      "Wake before sunrise and take your first coffee beside the lagoon rather than in your room. If you are visiting during the cooler months, you may find a veil of morning mist hanging over the water while the birds begin their day. It is one of the quietest and most restorative moments to be found anywhere around Puducherry.",
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
      "Few places capture Puducherry's creative spirit quite like Dune Eco Village & Spa. Built around sustainability, art and nature, it feels less like a conventional resort and more like a small community where every cottage has its own personality and every path leads somewhere unexpected. Sculptures emerge from tropical gardens, restored heritage doors become works of art, and mature trees provide a canopy where birdsong replaces the noise of traffic. Staying here is not simply about finding somewhere to sleep. It is about embracing a slower, more thoughtful way of travelling.\n\nDune has long attracted artists, writers, architects and travellers drawn to the experimental spirit that has always existed on the northern edge of Puducherry. The property shares much of that outlook. Rather than imposing itself on the landscape, it encourages guests to notice it: the changing light through the trees, the texture of old reclaimed materials, the quiet pleasure of wandering without a destination. It is one of the few places where doing very little never feels like wasted time.",
    whyLoveIt:
      "The holistic spa and eco-conscious philosophy make Dune unlike any other property in the region. Yoga sessions, wellness treatments, locally inspired cuisine and individually designed cottages encourage guests to reconnect with nature while enjoying genuine comfort. Sustainability here feels quietly integrated into daily life rather than presented as a marketing theme.\n\nEqually memorable is the sense of space. Whether you spend the afternoon reading beneath the trees, cycling through the grounds or simply listening to the breeze moving through the palms, the resort creates an atmosphere where slowing down feels entirely natural.",
    exploreNearby:
      "Serenity Beach is only a short walk away and offers one of the finest sunrise walks on the Coromandel Coast. Continue north to Auroville to explore artisan workshops, sustainable cafés and the Matrimandir viewing area before returning to the peaceful surroundings of the resort. The combination of coastline, forest and creative communities gives this part of Puducherry a character unlike anywhere else in the city.\n\nEarly each morning, Serenity Beach belongs first to the fishermen. Catamarans and fibre boats return through the surf as the day's catch is carried ashore, while surfers begin waxing their boards further down the beach. Arriving before the cafés become busy allows you to experience the coastline at its quietest, when the sound of the waves and the sea breeze are still the dominant voices.\n\nThe road towards Auroville passes through one of India's most remarkable ecological restoration projects. Beginning in the late 1960s, volunteers transformed thousands of acres of severely eroded laterite land into thriving forest. Today the shaded roads, red-earth walking trails and mature woodland create a noticeably cooler microclimate and provide an unexpected contrast to the open coastline only a few kilometres away. Even visitors with little interest in architecture often find the landscape itself reason enough to explore.\n\nBack at the resort, art reveals itself gradually rather than demanding attention. Sculptures appear unexpectedly beside pathways, ceramic installations emerge from dense planting and reclaimed architectural fragments have been thoughtfully woven into the landscape. Like a good gallery, Dune rewards wandering without a plan. A second walk through the grounds often reveals details that passed unnoticed the first time.",
    bestFor: [
      "Wellness travellers",
      "Creative souls",
      "Nature lovers",
      "Couples seeking something different",
    ],
    notFor: ["Visitors wanting to stay in the centre of White Town"],
    ourTip:
      "Wake before sunrise and stroll through the casuarina trees to Serenity Beach while the fishing boats are still returning with the morning's catch. Afterwards, spend the afternoon exploring Auroville's forested paths before returning to Dune in time for sunset beneath the trees. Few days capture the spirit of coastal Puducherry more completely.",
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
