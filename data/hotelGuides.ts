export interface HotelGuide {
  id: string;
  slug: string;
  title: string;
  hotelIds: string[];
  metaTitle?: string;
  metaDescription?: string;
  intro?: string;
  whyHeading?: string;
  whyBody?: string;
  bestFor?: Record<string, string>;
  blurbs?: Record<string, string>;
  quickPicks?: { situation: string; recommendation: string }[];
  faq?: { question: string; answer: string }[];
}

export const hotelGuides: HotelGuide[] = [
  {
    id: "french-heritage",
    slug: "best-heritage-hotels-pondicherry",
    title: "Best Heritage Hotels in Pondicherry",
    metaTitle: "5 Best Heritage Hotels in Pondicherry",
    metaDescription: "Five of White Town's best heritage hotels, from restored French mansions to a 130-year-old Tamil merchant's house, with what each one does best.",
    hotelIds: [
      "palais-de-mahe",
      "maison-perumal",
      "le-dupleix",
      "la-villa",
      "the-promenade",
    ],
    intro:
      "White Town's biggest advantage over almost anywhere else in India is that its finest colonial buildings aren't sealed off in a museum, they're hotels you can actually sleep in.\n\nFive properties define this category, and each restores a different piece of Pondicherry's layered past: a mayor's mustard-yellow residence, a French administrator's colonial home, a 130-year-old Tamil merchant's mansion, a discreet boutique retreat, and a seafront address with the best claim to the city's most famous daily ritual, the evening promenade.\n\nThey're not interchangeable. Some are built for romance, some for history, one puts you in the Tamil Quarter rather than the French one entirely. This guide breaks down what each does best so you can match the hotel to the trip rather than just picking the first name that comes up.",
    whyHeading: "Why Pondicherry's heritage hotels are worth the splurge",
    whyBody:
      "Restoring a 200-year-old colonial building for hotel use is slow, expensive work, and it shows in how few of these properties there actually are. Most started as private residences: a mayor's house, a merchant's mansion, a colonial official's home, and the restorations have generally kept the thick lime-plastered walls, high ceilings and shaded courtyards that made these buildings livable in the tropical heat long before air conditioning existed.\n\nThat history is the actual product. A room at one of these hotels isn't just accommodation, it's the closest most visitors get to understanding what daily life inside French Pondicherry, or the Tamil Quarter beside it, actually felt like. The restaurants attached to nearly all of them extend that same idea to food, serving Franco-Tamil and Creole cooking that exists nowhere else in India.",
    bestFor: {
      "palais-de-mahe": "The single best all-round luxury address in White Town",
      "maison-perumal": "Experiencing Pondicherry's Tamil Quarter, not just its French side",
      "le-dupleix": "History lovers who want to sleep inside a real piece of it",
      "la-villa": "A romantic, discreet escape behind heritage walls",
      "the-promenade": "Waking up to the sea and being steps from everything",
    },
    blurbs: {
      "palais-de-mahe":
        "Palais de Mahe is the benchmark for what a White Town heritage stay should feel like. Behind its mustard-yellow façade on Rue de Bussy, colonial arcades wrap a courtyard pool that stays cool even in the height of the afternoon, and the pace of the place, breakfast that drifts into late morning, a swim before lunch, dinner upstairs at Mahe Bar, never feels rushed.\n\nIt's the property CGH Earth is best known for in Pondicherry, and it shows in the details: Franco-Tamil and South Indian cooking at the rooftop restaurant, refined cocktails at the bar, and a location that puts nearly every major White Town landmark within a ten-minute walk.",
      "maison-perumal":
        "Where the other heritage hotels on this list sit inside French White Town, Maison Perumal sits in the Tamil Quarter, and that distinction is the whole point of staying here. The 130-year-old Chettiar mansion, with its carved teak doors and Athangudi-inspired floors, tells an older story of Pondicherry than the colonial one most visitors see first.\n\nThe restaurant alone justifies a visit even if you stay elsewhere: Franco-Tamil Creole cooking that blends local seafood with French technique, in a courtyard that feels more like a family home than a hotel dining room. Wake early for the flower and spice market on Jawaharlal Nehru Street, a few minutes' walk away.",
      "le-dupleix":
        "Le Dupleix is less a hotel than an opportunity to sleep inside a specific piece of Pondicherry's history. The building was once the home of a French mayor, and its name commemorates the governor whose imperial ambitions briefly made this city the effective capital of the Deccan. Thick masonry walls and a peaceful central courtyard give it a residential, unshowy character that larger heritage properties don't have.\n\nIts location does a lot of the work: Notre Dame des Anges, Raj Nivas, and the bronze Dupleix statue are all a short walk away, so a stay here doubles as a self-guided history lesson without ever feeling like homework.",
      "la-villa":
        "La Villa is the discreet option on this list, the kind of address that reveals itself only once you're through the gate. Behind high heritage walls, a secluded pool sits framed by tropical planting, and the restaurant of the same name, one of White Town's most respected, serves seasonal Franco-Tamil and European cooking to guests and outside diners alike.\n\nThere's little signage and no grand entrance, which is exactly the appeal for travellers who want a romantic, unhurried stay without the bustle of a bigger property. The Sri Aurobindo Ashram and Alliance Française are both a few minutes' walk away.",
      "the-promenade":
        "No hotel on this list puts you closer to the sea than The Promenade. It sits directly opposite Goubert Avenue, so the daily rhythm of Pondicherry's seafront, fishermen at dawn, walkers through the day, the whole city out for the evening ritual after the road closes to traffic, happens right outside the door.\n\nIt's also the most central choice here: White Town's cafés, galleries and colonial landmarks are all within easy walking distance, and Le Café, the Ashram-run waterfront institution, sits right at the promenade's northern end for an easy first coffee.",
    },
    quickPicks: [
      { situation: "A romantic, discreet stay", recommendation: "La Villa" },
      { situation: "History lovers who want more than a plaque", recommendation: "Le Dupleix" },
      { situation: "Seeing Pondicherry's Tamil side, not just French", recommendation: "Maison Perumal" },
      { situation: "Waking up steps from the sea", recommendation: "The Promenade" },
      { situation: "The single best all-rounder in White Town", recommendation: "Palais de Mahe" },
      { situation: "First time in Pondicherry, want it all in one stay", recommendation: "Palais de Mahe or The Promenade" },
    ],
    faq: [
      { question: "What is the best heritage hotel in Pondicherry?", answer: "It depends on what you want from White Town. Palais de Mahe is the most complete luxury experience, while Le Dupleix suits travellers who want a smaller, history-focused stay." },
      { question: "Are Pondicherry's heritage hotels expensive?", answer: "Most sit in the upscale to luxury range, reflecting the cost of restoring colonial-era buildings. Le Dupleix is generally the most accessible of the five." },
      { question: "Is it worth staying in the Tamil Quarter instead of White Town?", answer: "Maison Perumal is the one property here outside White Town, and it offers a genuinely different, less touristed side of the city. Most first-time visitors are still better served by a White Town base." },
      { question: "Do these hotels have their own restaurants?", answer: "Yes, and in several cases the restaurant is a destination in its own right, particularly at Palais de Mahe, La Villa and Maison Perumal." },
      { question: "What is the best area to stay in Pondicherry?", answer: "For first-time visitors, White Town is usually the best choice because it offers easy access to the promenade, restaurants, cafés, heritage buildings, and shopping streets. Travelers seeking a quieter atmosphere often prefer Auroville or beachside resorts north of the city. Families may choose residential areas with larger hotels and parking facilities. The ideal location depends on whether you prioritize sightseeing, nightlife, beaches, or relaxation." },
    ],
  },

  {
    id: "boutique",
    slug: "best-boutique-hotels-pondicherry",
    title: "Best Boutique Hotels in Pondicherry",
    metaTitle: "5 Best Boutique Hotels in Pondicherry",
    metaDescription: "Five of Pondicherry's best boutique hotels, from a design-led rooftop to a Creole dining destination, with what each one does best.",
    hotelIds: [
      "villa-shanti",
      "villa-helena",
      "gratitude-heritage",
      "dune-de-lorient",
      "petit-palais",
    ],
    intro:
      "Not every good stay in Pondicherry needs a grand colonial façade and a full-service spa. White Town's boutique hotels prove the opposite case: five smaller, more personal properties where the character comes from restored architecture and genuine hospitality rather than scale.\n\nEach one does something different. One sits on White Town's most interesting street. One is built around its own restaurant. One offers the best rooftop view in the neighbourhood. This guide breaks down what each does best, so you can pick based on what you actually want from the stay rather than just star ratings.",
    whyHeading: "What makes a Pondicherry boutique hotel different from a heritage one",
    whyBody:
      "Pondicherry's grander heritage hotels tend to be larger operations, often professionally managed by hospitality groups, with the scale and polish that comes with it. The boutique category is smaller by design: former private homes with a handful of rooms, run with a level of personal attention that only works at that size.\n\nThe trade-off is worth understanding before you book. You give up some facilities, a hotel with six rooms isn't going to match one with thirty for amenities, but you gain a kind of hospitality and architectural intimacy that larger properties can't replicate. Several of these hotels are also known as much for their restaurants as their rooms, which is unusual outside White Town's most established addresses.",
    bestFor: {
      "villa-shanti": "Being right in the middle of White Town's best street",
      "villa-helena": "A quiet, personal stay with real veranda culture",
      "gratitude-heritage": "Warm, personal hospitality on a still-modest budget",
      "dune-de-lorient": "Franco-Tamil Creole dining as much as the room",
      "petit-palais": "Rooftop views across White Town's tiled roofs",
    },
    blurbs: {
      "villa-shanti":
        "Villa Shanti's biggest asset is its address. Rue Suffren has quietly become White Town's most interesting street, lined with the galleries, design boutiques and cafés that define the neighbourhood's creative side, and the hotel sits right in the middle of it, behind a heritage façade that gives no hint of the contemporary design inside.\n\nThe hotel's restaurant, sharing ownership with La Villa, is a genuine destination in its own right rather than a convenience for guests, built around seasonal Franco-Tamil cooking and one of the city's best wine lists. Rue Romain Rolland, one of White Town's finest streets for architecture, runs parallel one block north.",
      "villa-helena":
        "Villa Helena trades scale for intimacy. It's a private colonial home rather than a hotel in any conventional sense, and its verandas, a part of White Town's architecture that most buildings have lost to redevelopment, are still very much in use: mornings here are spent watching the neighbourhood wake up from a first-floor balcony rather than checking an itinerary.\n\nIt's also one of the quieter bases on this list, walking distance from the Bibliothèque Romain Rolland and Bharati Park rather than sitting in the thick of White Town's busiest streets, which suits travellers who want heritage character without constant foot traffic outside.",
      "gratitude-heritage":
        "Gratitude Heritage does with warmth what other properties do with scale. The restored heritage house keeps its original proportions and quiet domestic feel, and the hospitality here leans personal rather than polished: staff who give real restaurant and gallery recommendations rather than reciting a script, and a level of familiarity that has many guests on first-name terms with the team by the end of their stay.\n\nIt sits within easy reach of Rue Dumas and Rue Romain Rolland, two of White Town's most architecturally consistent streets, and a short walk from the Puducherry Museum, making it a good match for travellers who want heritage character without heritage-hotel prices.",
      "dune-de-lorient":
        "Dune de L'Orient's restaurant is arguably the reason to book here. It's one of the clearest introductions to Pondicherry's Franco-Tamil Creole cuisine in the city, built on recipes that blend French technique with Tamil ingredients and coastal produce, and dining here doubles as a crash course in the culinary tradition itself.\n\nThe rooms match that same balance of period architecture and comfort, set around colourful courtyards a short walk from Notre Dame des Anges and the independent galleries clustered behind it. It's an easy match for food-focused travellers who don't want to choose between a good hotel and a good meal.",
      "petit-palais":
        "Petit Palais offers something none of the other boutique properties on this list can: a rooftop that puts the whole of White Town's ordered French grid on display, tiled roofs, church towers, and a thin silver line of the Bay of Bengal on the horizon. It's a different, elevated way of understanding a city most visitors only ever see from street level.\n\nThe rooftop pool makes that view something you return to throughout the day rather than admire once, and the hotel's location, close to the Botanical Garden, the Puducherry Museum and Bharati Park, keeps most of White Town's cultural sights within an easy walk.",
    },
    quickPicks: [
      { situation: "Being on White Town's best street", recommendation: "Villa Shanti" },
      { situation: "A quiet, personal heritage stay", recommendation: "Villa Helena" },
      { situation: "Warm hospitality on a smaller budget", recommendation: "Gratitude Heritage" },
      { situation: "Food-focused travellers", recommendation: "Dune de L'Orient" },
      { situation: "The best view in White Town", recommendation: "Petit Palais" },
      { situation: "First time in White Town, want it central", recommendation: "Villa Shanti or Petit Palais" },
    ],
    faq: [
      { question: "What's the difference between a heritage hotel and a boutique hotel in Pondicherry?", answer: "The line is blurry, but generally the larger heritage hotels are more polished, professionally managed luxury properties, while these boutique options are smaller and more personal, often run with the intimacy of a private home." },
      { question: "Which boutique hotel is best for food lovers?", answer: "Dune de L'Orient and Villa Shanti both have restaurants considered destinations in their own right, not just hotel dining rooms." },
      { question: "Are these hotels within walking distance of White Town's main sights?", answer: "Yes, all five sit inside or immediately beside White Town, within easy walking distance of the Promenade, the Sri Aurobindo Ashram and the main heritage streets." },
      { question: "Which is the most budget-friendly option?", answer: "Gratitude Heritage generally offers heritage character at a more accessible price point than the others on this list." },
    ],
  },

  {
    id: "family",
    slug: "best-family-hotels-pondicherry",
    title: "Best Family Hotels in Pondicherry",
    metaTitle: "5 Best Family Hotels in Pondicherry",
    metaDescription: "Five family-friendly hotels in Pondicherry with real pools, space to spread out, and easy access to White Town, Auroville and the coast.",
    hotelIds: [
      "accord-puducherry",
      "the-residency-towers",
      "shenbaga-hotel",
      "anandha-inn",
      "hotel-atithi",
    ],
    intro:
      "A restored 19th-century mansion with three rooms is a wonderful place for a honeymoon and a genuinely difficult place to manage with children, extended family, or a week's worth of luggage. These five hotels solve for that instead: space, pools, parking and full-service facilities, without giving up easy access to White Town and the coast.\n\nEach one leans into a slightly different strength, one is built for arriving by car, another for a longer stay, another has been a dependable local institution for decades. This guide breaks down which fits your trip best.",
    whyHeading: "Why families do better outside White Town's heritage hotels",
    whyBody:
      "White Town's restored colonial mansions are romantic, but most weren't built with children, multiple generations, or a week of luggage in mind: narrow staircases, a handful of rooms, and courtyards designed for quiet rather than activity. The five hotels on this list solve a different problem, comfortable, spacious, full-service stays that make a multi-day Pondicherry trip easier to manage.\n\nThat doesn't mean giving up on the city's character entirely. Each of these hotels sits close enough to White Town, the Promenade or Auroville to make day trips easy, while offering a pool, parking and room to spread out that the boutique heritage properties generally can't match.",
    bestFor: {
      "accord-puducherry": "Full-service comfort if you're arriving by car",
      "the-residency-towers": "Polished contemporary comfort for longer stays",
      "shenbaga-hotel": "A dependable all-rounder that's been doing this for decades",
      "anandha-inn": "A central, no-fuss base for first-time visitors",
      "hotel-atithi": "Road trips and easy access to the Tamil Quarter's markets",
    },
    blurbs: {
      "accord-puducherry":
        "Accord Puducherry is built for the part of the trip that isn't about sightseeing. After White Town's narrow streets, temple crowds and seaside promenade, a spacious, air-conditioned hotel with a generous pool and easy parking stops feeling like a compromise and starts feeling like good planning.\n\nIt's also one of the better bases for combining a Pondicherry stay with day trips: the Botanical Garden, the Chunnambar boat ride to Paradise Beach, and Auroville's Visitor Centre are all within comfortable reach, making it a practical choice for families travelling by car.",
      "the-residency-towers":
        "The Residency Towers does the fundamentals well rather than chasing colonial atmosphere: spacious rooms, efficient service, and a rooftop pool that's genuinely useful after a day of sightseeing in the heat. It suits families and couples who want reliable comfort more than heritage character.\n\nIts location keeps White Town, the Promenade and the Tamil Quarter all within easy reach, and it sits close to the Basilica of the Sacred Heart and the Puducherry Museum, two of the city's stronger cultural stops for a morning with children in tow.",
      "shenbaga-hotel":
        "Shenbaga has been one of Pondicherry's dependable full-service hotels for decades, and it earns that reputation through consistency rather than spectacle. It doesn't try to compete with White Town's heritage mansions, it focuses on comfortable rooms and service that simply works, which matters more than atmosphere on a family trip with a full itinerary.\n\nIts location outside the restored colonial core also means you experience a more everyday side of Pondicherry, with Bharati Park, the Manakula Vinayagar Temple and the French War Memorial all a short drive or walk away.",
      "anandha-inn":
        "Anandha Inn's main strength is straightforward: decades of experience welcoming families and a location that makes the rest of the trip easy to plan around. It sits just beyond White Town's heritage core, close enough for easy access but connected to Pondicherry's everyday rhythm of markets, temples and neighbourhood cafés.\n\nIt's also a sensible base for a half-day Auroville excursion, with the Visitor Centre and the shaded walk to the Matrimandir viewing point an easy trip away, and Pondicherry's well-regarded Auroville-made ice cream a short drive in the other direction.",
      "hotel-atithi":
        "Hotel Atithi is a good match for families or groups road-tripping through Tamil Nadu, offering comfortable rooms and a rooftop pool without unnecessary formality. Its location near Mission Street and Nehru Street, the city's real commercial heart rather than its restored tourist core, gives a more grounded sense of everyday Pondicherry.\n\nFor early risers, the nearby morning fish market and a drive north to Serenity Beach make for a memorable, unscripted start to the day, well outside the usual White Town itinerary.",
    },
    quickPicks: [
      { situation: "Arriving by car, want full facilities", recommendation: "Accord Puducherry" },
      { situation: "Longer stays, contemporary comfort", recommendation: "The Residency Towers" },
      { situation: "Good value with decades of reliability", recommendation: "Shenbaga Hotel & Convention Centre" },
      { situation: "First-time visitors wanting a central, easy base", recommendation: "Anandha Inn" },
      { situation: "Road-tripping Tamil Nadu with the family", recommendation: "Hotel Atithi" },
    ],
    faq: [
      { question: "Are these hotels within walking distance of White Town?", answer: "Most are a short drive rather than a walk, which is the trade-off for the extra space and facilities families typically need. Anandha Inn and Hotel Atithi are closest to the heritage core." },
      { question: "Do these hotels have pools?", answer: "Yes, all five have swimming pools, generally rooftop, which matters a lot given Pondicherry's heat." },
      { question: "Which is best for combining Pondicherry with Auroville?", answer: "Accord Puducherry and Anandha Inn are both well positioned for an Auroville day trip alongside city sightseeing." },
      { question: "Are these hotels more affordable than White Town's heritage properties?", answer: "Generally yes. This category prioritises space and facilities over restored colonial architecture, which usually means a lower price point than the heritage hotels." },
      { question: "Do I need to book accommodation in advance?", answer: "Advance booking is strongly recommended during weekends, Indian public holidays, school vacations, and the cooler months from November to February. White Town properties are especially popular and can fill up quickly. During quieter periods, last-minute bookings may still be available. Reserving ahead gives you a wider choice of hotels, guesthouses, and heritage stays, and often provides better prices than booking on arrival." },
    ],
  },

  {
    id: "backpacker",
    slug: "best-hostels-pondicherry",
    title: "Best Hostels in Pondicherry for Backpackers",
    metaTitle: "5 Best Hostels in Pondicherry for Backpackers",
    metaDescription: "Five of Pondicherry's best hostels and budget stays, from the social heart of the backpacker scene to quiet long-stay rooms.",
    hotelIds: [
      "zostel-pondicherry",
      "micasa-hostels",
      "time-travellers-hostel",
      "hotel-coramandal-heritage",
      "villa-krish",
    ],
    intro:
      "Pondicherry's backpacker scene has grown up quietly alongside its heritage hotels, and it has its own character: bicycles instead of taxis, scooter trips up the coast to Auroville, and hostels where a solo trip rarely stays solo for long.\n\nThese five properties cover the range, from the most social hostel in the city to quieter budget stays for travellers who want privacy without heritage-hotel prices. This guide breaks down which suits your trip, whether that's meeting people, working remotely, or just finding a clean, cheap room to sleep in between exploring.",
    whyHeading: "Why Pondicherry works so well for backpackers",
    whyBody:
      "Pondicherry is compact enough to cover by bicycle, relaxed enough that nobody seems to be in a hurry, and close enough to Auroville and the northern beaches that a hostel here doubles as a base for the wider region rather than just the city itself. That combination has built a genuine backpacker scene around White Town and its edges, distinct from the heritage-hotel crowd in the centre.\n\nThe five stays on this list split into two groups: social, dorm-based hostels built around meeting other travellers, and quieter budget stays for people who want their own room without paying heritage-hotel prices. Neither is better, it depends on what kind of trip you're having.",
    bestFor: {
      "zostel-pondicherry": "The most social hostel in the backpacker scene",
      "micasa-hostels": "Quiet, long-stay comfort for remote workers",
      "time-travellers-hostel": "Spontaneous plans and an easy road-trip base",
      "hotel-coramandal-heritage": "Heritage character at an actual budget price",
      "villa-krish": "A quiet, independent stay between hostel and hotel",
    },
    blurbs: {
      "zostel-pondicherry":
        "Zostel is the social centre of Pondicherry's backpacker scene, the kind of hostel where breakfast conversations turn into afternoon café crawls and someone always has a recommendation for a beach, restaurant or Auroville event you hadn't heard about. Generous communal spaces and reliable Wi-Fi make it equally workable for digital nomads settling in for a while.\n\nIt sits a little outside the White Town core, which suits its bicycle-first approach to the city: White Town, Rock Beach and the evening Promenade are all easy rides away, with longer trips north reaching Serenity Beach and Auroville along the East Coast Road.",
      "micasa-hostels":
        "Micasa trades constant activity for something quieter: a hostel that feels more like a home gradually gaining new residents than a place people pass through. It particularly suits long-stay travellers and remote workers, with comfortable workspaces and a community that builds slowly rather than all at once.\n\nIt's well placed for exploring White Town's bakeries and the evening Promenade on foot, and it's an easy walk to the Alliance Française on Rue Suffren, whose film screenings and exhibitions are a good way to meet the city's creative crowd.",
      "time-travellers-hostel":
        "Time Travellers has the loose, spontaneous energy of the best backpacker hostels, where plans made over breakfast get abandoned by lunch for something better. It works particularly well as a base for exploring beyond the city: hiring a scooter for the coast road north, a day trip to Auroville, or even the longer run out to Mahabalipuram.\n\nThe atmosphere is informal and creative rather than polished, and it's an easy match for solo travellers and small groups who'd rather let the day unfold than lock in an itinerary.",
      "hotel-coramandal-heritage":
        "Hotel Coramandal Heritage is the rare property that offers real White Town character at a genuinely accessible price. High ceilings and traditional proportions give it the atmosphere of one of the neighbourhood's older heritage stays, without the price tag that usually comes with a restored colonial building.\n\nIts location puts you inside White Town's best early-morning walking, past the Sri Aurobindo Ashram and Focus Bookshop on Rue Suffren, before the streets fill up and the heat sets in, which is reason enough to book here even without factoring in the budget-friendly rate.",
      "villa-krish":
        "Villa Krish sits in the gap between a boutique hotel and a hostel: more personality than a standard budget hotel, more privacy than a busy dorm-based stay. Simple, comfortable rooms and a warm but unintrusive welcome suit couples and independent travellers who want to spend their days outside rather than in a common room.\n\nIt's within easy walking distance of the Promenade, the Sri Aurobindo Ashram and the artisan studios along Rue Suffren, making it a workable base for travellers who want to explore White Town entirely on foot.",
    },
    quickPicks: [
      { situation: "The most social, easiest to meet people", recommendation: "Zostel Pondicherry" },
      { situation: "Long stays and remote work", recommendation: "Micasa Hostels" },
      { situation: "Spontaneous trips and scooter road trips", recommendation: "Time Travellers Hostel" },
      { situation: "Heritage character on a real budget", recommendation: "Hotel Coramandal Heritage" },
      { situation: "A quiet, independent budget stay", recommendation: "Villa Krish" },
    ],
    faq: [
      { question: "What's the difference between these hostels and Pondicherry's budget hotels?", answer: "Zostel, Micasa and Time Travellers are dorm-and-social-space hostels built around meeting other travellers. Hotel Coramandal Heritage and Villa Krish are quieter, private-room budget stays for travellers who still want their own space." },
      { question: "Which hostel is best for remote work?", answer: "Micasa Hostels is the most geared towards longer, work-focused stays, with reliable Wi-Fi and dedicated workspace." },
      { question: "Are any of these within walking distance of White Town?", answer: "Hotel Coramandal Heritage and Villa Krish both sit inside or immediately next to White Town. The three hostels are a short bicycle or scooter ride away rather than a walk." },
      { question: "Is Pondicherry a good base for backpackers exploring further afield?", answer: "Yes. Serenity Beach, Auroville and even Mahabalipuram are all realistic day trips or scooter rides from any of these five, which is part of why the backpacker scene has grown up around this end of the city." },
    ],
  },

  {
    id: "coastal-wellness",
    slug: "best-beach-resorts-near-pondicherry",
    title: "Best Beach Resorts Near Pondicherry",
    metaTitle: "5 Best Beach Resorts Near Pondicherry",
    metaDescription: "Five of the best beach, lagoon and wellness resorts near Pondicherry, from a family-scaled resort to a sustainability-focused eco village.",
    hotelIds: [
      "le-pondy",
      "radisson-resort",
      "club-mahindra",
      "ocean-spray",
      "dune-eco-village",
    ],
    intro:
      "Pondicherry isn't only White Town's colonial streets. South and north of the city, the coastline opens up into lagoons, casuarina groves and quieter beaches, and five resorts and retreats make the most of that setting, each with a different idea of what a coastal break should feel like.\n\nSome are built for family space, others for genuine seclusion, and one leans fully into art and sustainability rather than a conventional resort experience. This guide breaks down which fits your trip, and whether it's worth pairing with a few days in White Town.",
    whyHeading: "Why leave White Town for the coast at all",
    whyBody:
      "White Town rewards walking and slow exploration, but it's still a dense, historic town centre, and after a few days of colonial streets and café-hopping, many visitors want the opposite: open space, a proper pool, and a stretch of coastline that isn't shared with a promenade full of evening walkers. That's what this category of hotel is for.\n\nEach of the five works a slightly different version of that idea, a lagoon-side resort, an international beach property, a family-scaled resort, a quieter wellness retreat, and an art-and-sustainability-focused eco village. None of them are a substitute for a White Town stay, but paired with one, they round out a Pondicherry trip properly.",
    bestFor: {
      "le-pondy": "Between the sea and the lagoon, and properly removed from the city",
      "radisson-resort": "International-brand reliability with easy Auroville access",
      "club-mahindra": "The most spacious resort for a multi-generation family trip",
      "ocean-spray": "A quiet lagoon retreat for slowing all the way down",
      "dune-eco-village": "Art, nature and sustainability rather than a standard resort",
    },
    blurbs: {
      "le-pondy":
        "Le Pondy marks the point where a Pondicherry trip stops being about cafés and colonial streets and starts being about the coast. Set between the Bay of Bengal and the tranquil Chunnambar backwaters, it's built for slowing down: villas opening onto gardens, private pools or the lagoon, and a boat ride to Paradise Beach that's as much a part of the experience as the beach itself.\n\nIt's a genuine escape rather than a convenient base, so it suits couples and honeymooners more than travellers who want to keep exploring White Town day to day. The changing light across the lagoon, pale and still at dawn, warm and copper by evening, is reason enough on its own.",
      "radisson-resort":
        "Radisson Resort Pondicherry Bay offers what an international brand generally offers: broad lawns, contemporary architecture, and the reassurance of consistent standards, in a setting that still feels distinctly coastal rather than corporate. It suits families and couples who want resort space without giving up easy access to sightseeing.\n\nIts location works well for combining relaxation with day trips: White Town, Serenity Beach and Auroville, including the Matrimandir viewing area, are all a manageable drive away, making it one of the more practical bases on this list for visitors arriving by car.",
      "club-mahindra":
        "Club Mahindra Puducherry is built around space, wide lawns, tropical gardens and enough room that every generation on a family trip can find their own pace, whether that's the pool, the gardens, or a quiet veranda. It's less about ticking off Pondicherry's sights and more about a proper, unhurried family holiday on the coast.\n\nThe stretch of coastline here still belongs largely to local fishing communities, and watching boats head out before sunrise and return with the morning's catch is one of the more grounding things to do without leaving the resort.",
      "ocean-spray":
        "Ocean Spray is the quietest property on this list, built around an expansive lagoon rather than the open sea, with a pace that reveals itself gradually rather than all at once. It's a strong match for travellers who want genuine wellness downtime, watching the water change from silver to deep blue to copper over the course of a day, rather than a resort packed with activities.\n\nIts birdlife alone is worth the stay for nature-minded guests, with egrets, kingfishers and cormorants regular visitors to the lagoon, particularly in the quieter hours of early morning and late afternoon.",
      "dune-eco-village":
        "Dune Eco Village & Spa is less a resort than a small, sustainability-minded community, where every cottage has its own character and sculptures and reclaimed architectural fragments turn up along paths without warning. It's the clear choice for travellers who want art, nature and a genuinely different way of travelling rather than a standard beach stay.\n\nIt sits close to Serenity Beach for an early walk and on the road towards Auroville's remarkable reforested land, making it a natural base for combining wellness with the region's most unusual community just up the coast.",
    },
    quickPicks: [
      { situation: "A romantic, fully-removed coastal escape", recommendation: "Le Pondy" },
      { situation: "International-brand comfort with easy Auroville access", recommendation: "Radisson Resort Pondicherry Bay" },
      { situation: "Multi-generation family holidays", recommendation: "Club Mahindra Puducherry" },
      { situation: "Genuine wellness downtime", recommendation: "Ocean Spray" },
      { situation: "Art, nature and sustainability", recommendation: "Dune Eco Village & Spa" },
    ],
    faq: [
      { question: "How far are these resorts from White Town?", answer: "All five sit outside central Pondicherry, generally a 20 to 40 minute drive, which is the trade-off for direct access to the coast and lagoons." },
      { question: "Which of these is best for a honeymoon?", answer: "Le Pondy is the most romantic and secluded option, set between the sea and the Chunnambar backwaters." },
      { question: "Are any of these good for combining a coastal stay with visiting Auroville?", answer: "Yes, Radisson Resort Pondicherry Bay and Dune Eco Village & Spa are both well positioned for an Auroville day trip alongside beach time." },
      { question: "Is it worth staying at the coast instead of White Town?", answer: "It depends on the trip. If heritage streets and cafés are the priority, stay in White Town. If you want beach time, wellness, or a genuine break from sightseeing, these five are a better fit, ideally as a few days added on to a White Town stay rather than instead of one." },
      { question: "Should I stay in White Town or near the beach?", answer: "White Town is ideal for visitors interested in French architecture, cafés, walking tours, and cultural attractions. Beachside accommodations offer a more relaxed resort atmosphere with easier access to swimming and seaside activities. If your stay is short, White Town usually provides better access to the main attractions. For a longer holiday focused on relaxation, a beach resort may be more suitable." },
    ],
  },
];

export function getHotelGuide(slug: string): HotelGuide | undefined {
  return hotelGuides.find((g) => g.slug === slug);
}
