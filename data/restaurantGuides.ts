export interface RestaurantGuide {
  id: string;
  slug: string;
  title: string;
  restaurantIds: string[];
  metaTitle?: string;
  metaDescription?: string;
  intro?: string;
  whyHeading?: string;
  whyBody?: string;
  bestFor?: Record<string, string>;
  blurbs?: Record<string, string>;
  chooseGuide?: { heading: string; body: string }[];
  faq?: { question: string; answer: string }[];
}

export const restaurantGuides: RestaurantGuide[] = [
  {
    id: "french",
    slug: "best-french-restaurants",
    title: "Best French Restaurants in Pondicherry",
    metaTitle: "10 Best French Restaurants in Pondicherry",
    metaDescription: "Ten of Pondicherry's best French restaurants, from heritage mansions to Creole classics, with what each one does best so you can pick the right one.",
    restaurantIds: [
      "cafe-des-arts",
      "coromandel-cafe",
      "chez-pushpa",
      "la-villa",
      "villa-helena",
      "villa-shanti",
      "carte-blanche",
      "les-saveurs",
      "1-rue-suffren",
      "rasa-table",
    ],
    intro:
      "If there's one meal you shouldn't rush in Pondicherry, it's a French one.\n\nWalk through the whitewashed streets of the French Quarter and you'll notice that dining here feels different from almost anywhere else in India. Menus switch effortlessly between French classics and locally inspired dishes, colonial villas have been transformed into elegant dining rooms, and cafés spill onto quiet streets where lingering over coffee seems perfectly normal.\n\nBut not every French restaurant offers the same experience. Some are ideal for a romantic evening in a restored heritage house. Others are better for a leisurely breakfast, a relaxed lunch between sightseeing stops, or simply enjoying the atmosphere without committing to a formal fine-dining meal.\n\nThis guide brings together ten of Pondicherry's best French restaurants, each offering its own interpretation of the city's culinary heritage. Rather than ranking them from best to worst, we've highlighted what each one does particularly well so you can choose the one that matches your plans. If you'd like more detail on any restaurant, follow the links through to our dedicated guides for opening hours, location, pricing and practical tips.",
    whyHeading: "Why Pondicherry is India's French food capital",
    whyBody:
      "Pondicherry's French influence isn't something created for tourists. It's woven into the city's history.\n\nFor nearly three centuries, Pondicherry served as the capital of French India, leaving behind more than distinctive architecture and street names. The city's food culture evolved through daily interaction between French traditions and Tamil cooking, producing restaurants that feel unmistakably local rather than imported.\n\nToday, that heritage shows up in different ways. Some restaurants preserve the elegance of French dining in beautifully restored colonial buildings. Others take a more contemporary approach, combining European technique with local ingredients and flavours. Even many of the city's cafés owe their atmosphere as much to Pondicherry's French past as to modern café culture.\n\nThe result is a dining scene unlike anywhere else in India, one where French cuisine isn't just available, but part of the city's identity.",
    bestFor: {
      "cafe-des-arts": "Breakfast, coffee breaks and first-time visitors to the French Quarter",
      "coromandel-cafe": "Long lunches and relaxed upscale dining",
      "chez-pushpa": "An intimate, story-rich introduction to authentic Creole home cooking",
      "la-villa": "Special occasions and an elegant, seafood-focused dinner",
      "villa-helena": "A peaceful heritage setting away from the busier streets",
      "villa-shanti": "Patio dining and a standout signature dish",
      "carte-blanche": "Historic surroundings and the city's benchmark Creole bouillabaisse",
      "les-saveurs": "A classic, unhurried French dining experience",
      "1-rue-suffren": "A daytime café that turns into one of White Town's best evening hangouts",
      "rasa-table": "A tasting-style meal that rewards repeat visits",
    },
    blurbs: {
      "cafe-des-arts":
        "Few places capture the relaxed spirit of Pondicherry's French Quarter quite like Café des Arts. It's the sort of place where visitors often arrive intending to stop briefly for coffee and end up staying much longer, soaking in the surroundings and the slower pace of life that has become synonymous with this part of the city.\n\nWhile the menu is part of the attraction, the experience extends beyond the food. For many travellers, Café des Arts is less about ticking off a famous restaurant and more about enjoying one of Pondicherry's most recognisable café settings.",
      "coromandel-cafe":
        "Coromandel Café offers a more contemporary take on French-inspired dining while remaining firmly rooted in Pondicherry's heritage. It's an excellent choice if you're looking for a polished meal in stylish surroundings without the formality that sometimes accompanies traditional fine dining.\n\nWhether you're stopping for lunch after exploring nearby streets or planning an evening meal, it's one of the city's most consistently recommended dining destinations.",
      "chez-pushpa":
        "Chez Pushpa isn't a restaurant in the usual sense. It's a home dining experience in Ariyankuppam, just south of central Puducherry, where guests book well in advance to eat at Pushpa's own table. The cuisine is Pondicherry Creole at its most authentic: duck vadavoum, ridge gourd with prawns poriyal, and a menu that changes with the season and Pushpa's own inspiration.\n\nWhat sets the evening apart is Pushpa herself, who shares the stories behind each dish as she serves it. For travellers who want more than a meal, and are curious about the Franco-Tamil culinary tradition, few experiences in the city go deeper.",
      "la-villa":
        "La Villa occupies a meticulously restored 19th-century colonial mansion in White Town, its courtyard shaded by bougainvillea and its interiors kept deliberately understated. It has long been considered one of Puducherry's finest dining addresses, with a seafood-driven menu built around the freshest local catch.\n\nThe prawns coconut curry, served inside a fresh coconut shell, and the prawns and smoked fish fusilli are among the kitchen's strongest dishes, backed by one of the city's best wine lists. Service is unhurried by design, making La Villa a natural choice when the occasion calls for something memorable.",
      "villa-helena":
        "Villa Helena occupies a restored colonial villa where thick masonry walls and tall ceilings keep the dining room naturally cool, even as the streets outside grow warm. It is quieter than many of White Town's other heritage restaurants, and the calm carries through the whole meal.\n\nThe kitchen moves comfortably between Indo-French and international cooking, with a light touch that shows best in the smoked fish carpaccio and a classic French crème caramel to finish. It suits an unhurried breakfast as easily as an intimate dinner.",
      "villa-shanti":
        "Villa Shanti shares its ownership and culinary philosophy with La Villa, set in a restored heritage building on Suffren Street around one of White Town's loveliest shaded patios. The menu moves between refined Indian, Indo-French, and European cooking, letting good local produce carry each dish.\n\nThe prawn and pomelo salad has become the restaurant's signature for good reason, balancing sweet local prawns against the citrus bite of pomelo. Paired with one of the city's strongest wine lists, Villa Shanti is consistently ranked among Puducherry's best tables.",
      "carte-blanche":
        "Carte Blanche is the signature restaurant of Hôtel de l'Orient, set inside one of White Town's grandest 18th and 19th-century mansions. Soaring ceilings, antique furnishings, and shaded verandas make it one of the most convincing recreations of French-era Pondicherry left in the city.\n\nThe kitchen specialises in Pondicherry Creole cuisine, and the Creole bouillabaisse, a local reinterpretation of the classic Provençal seafood stew, remains the dish the restaurant is known for. Few places offer as complete an introduction to the city's Creole heritage in as fitting a setting.",
      "les-saveurs":
        "Les Saveurs is about as close as Puducherry comes to a traditional French restaurant in the classical European sense. Rather than reinventing familiar dishes, the kitchen leans on timeless technique and unhurried pacing, set inside a graceful colonial dining room on Dumas Street.\n\nSeafood and non-vegetarian mains consistently draw the strongest praise, and desserts keep the same commitment to classic French technique through to the end of the meal. It rewards visitors looking for the real thing rather than a fusion interpretation.",
      "1-rue-suffren":
        "1 Rue Suffren occupies a restored colonial building that changes personality through the day. By daylight it's a relaxed café, good for a quiet meal or an hour with a laptop. By evening, it becomes one of White Town's most popular bars without losing its easygoing character.\n\nThe cocktail programme is among the strongest in the city, and the kitchen's eclectic menu, spanning Continental, Indian, and globally inspired comfort food, suits groups with mixed tastes. Exposed brick and vintage furnishings give the space a retro feel that never tips into theme-restaurant territory.",
      "rasa-table":
        "Rasa Table operates less like a conventional restaurant and more like an intimate chef's table, tucked into a discreet space on the quiet Rue de l'Évêché. The compact dining room keeps attention on the food, with a concise menu that changes according to season and the chef's own inspiration.\n\nPortions are considered rather than showy, and the small scale of the restaurant allows for genuinely unhurried service throughout the meal. Reservations are strongly recommended, since seating is intentionally limited.",
    },
    chooseGuide: [
      { heading: "For a romantic dinner", body: "La Villa remains one of the city's standout choices for special occasions and memorable evenings." },
      { heading: "For a heritage atmosphere", body: "Café des Arts offers one of the most recognisable French Quarter settings." },
      { heading: "For an authentic Creole experience", body: "Chez Pushpa and Carte Blanche both offer a genuine introduction to Pondicherry's Creole culinary tradition, one intimate and home-cooked, the other grand and historic." },
      { heading: "For contemporary flavours", body: "Coromandel Café brings a more modern interpretation of French-inspired dining." },
      { heading: "For a tasting-menu experience", body: "Rasa Table offers a contemporary, chef-driven approach with a menu that changes by season." },
      { heading: "For a refined evening meal", body: "Villa Shanti and Les Saveurs are both excellent choices if you're looking for an upscale dining experience." },
      { heading: "For a quiet retreat", body: "Villa Helena offers one of White Town's calmest heritage settings." },
      { heading: "For combining sightseeing with a meal", body: "1 Rue Suffren is an easy option if you're exploring White Town and want somewhere that works for both lunch and drinks later." },
    ],
    faq: [
      { question: "What is the best French restaurant in Pondicherry?", answer: "That depends on the experience you're looking for. La Villa is often chosen for special occasions, while Café des Arts is a favourite for relaxed café dining in the French Quarter." },
      { question: "Is French food expensive in Pondicherry?", answer: "Not necessarily. While several French restaurants are upscale, there are also cafés and mid-range options that offer a French-inspired experience without the price tag of fine dining." },
      { question: "Do I need to book in advance?", answer: "Reservations are recommended for popular upscale restaurants, especially on weekends. Chez Pushpa and Rasa Table have limited seating and require advance booking." },
      { question: "Where are most French restaurants located?", answer: "Many of Pondicherry's best French restaurants are concentrated in and around the French Quarter (White Town), making it easy to explore several on foot." },
    ],
  },
  {
    id: "cafes-bakeries",
    slug: "best-cafes-and-bakeries",
    title: "Best Cafés & Bakeries in Pondicherry",
    restaurantIds: [
      "cafe-des-arts",
      "bread-and-chocolate",
      "coromandel-cafe",
      "le-cafe",
      "the-french-loaf",
      "baker-street",
      "botanist-lounge",
      "new-banana-cafe",
      "eat-my-cake",
      "indian-kaffe-express",
      "le-pondichery",
      "the-boho",
      "gelateria-montecatini",
      "cherrypond",
    ],
  },
  {
    id: "indian-tamil",
    slug: "best-indian-and-tamil-restaurants",
    title: "Best Indian & Tamil Restaurants in Pondicherry",
    restaurantIds: [
      "indian-coffee-house",
      "maison-perumal",
      "oh-pondi",
      "great-indian-cuisine",
      "podouke-heritage",
      "surguru-spot",
    ],
  },
  {
    id: "seafood",
    slug: "best-seafood-restaurants",
    title: "Best Seafood Restaurants in Pondicherry",
    restaurantIds: [
      "de-bluefin-seafood",
      "rendezvous",
      "bay-of-buddha",
      "1-rue-suffren",
      "the-spot",
    ],
  },
  {
    id: "international",
    slug: "best-international-restaurants",
    title: "Best International Restaurants in Pondicherry",
    restaurantIds: [
      "sola-bistro",
      "boku-ramen",
      "bay-of-buddha",
      "1-rue-suffren",
      "the-spot",
      "the-boho",
      "anthe-restaurant",
      "mira",
      "catamaran-brewing",
      "mahe-bar",
    ],
  },
];

export function getRestaurantGuide(id: string): RestaurantGuide | undefined {
  return restaurantGuides.find((g) => g.id === id);
}
