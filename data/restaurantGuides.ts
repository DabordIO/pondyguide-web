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
  quickPicks?: { situation: string; recommendation: string }[];
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
    quickPicks: [
      { situation: "A romantic dinner", recommendation: "La Villa" },
      { situation: "A heritage French Quarter atmosphere", recommendation: "Café des Arts" },
      { situation: "An authentic Creole experience", recommendation: "Chez Pushpa or Carte Blanche" },
      { situation: "Contemporary, modern flavours", recommendation: "Coromandel Café" },
      { situation: "A chef's tasting menu", recommendation: "Rasa Table" },
      { situation: "A refined evening meal", recommendation: "Villa Shanti or Les Saveurs" },
      { situation: "A quiet, peaceful retreat", recommendation: "Villa Helena" },
      { situation: "Combining sightseeing with a meal", recommendation: "1 Rue Suffren" },
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
    metaTitle: "13 Best Cafés & Bakeries in Pondicherry",
    metaDescription: "Thirteen of Pondicherry's best cafés and bakeries, from heritage courtyards to sea-view coffee stops, with what each one does best.",
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
      "gelateria-montecatini",
      "cherrypond",
    ],
    intro:
      "Some of the best memories you'll make in Pondicherry won't be over a lavish dinner. They'll begin with a cup of coffee.\n\nPerhaps it's breakfast in a leafy courtyard tucked away in the French Quarter. Maybe it's a flaky croissant after an early morning walk along the Promenade, a lazy afternoon with cake and conversation, or an evening gelato before heading back to your hotel. Pondicherry has a café culture that's as much about slowing down as it is about eating well.\n\nThe city's cafés reflect its personality. French-inspired bakeries sit alongside old-school Indian coffee houses, contemporary brunch spots share streets with neighbourhood favourites, and artisan desserts are never far away. Some are destinations in themselves, while others are the perfect excuse to pause between exploring heritage streets, galleries and beaches.\n\nThis guide brings together thirteen of the best cafés and bakeries in Pondicherry. Rather than ranking them from first to last, we've highlighted what each place is known for and who it's best suited to. If one catches your eye, follow the link through to our dedicated guide for more detail, including location, opening hours and practical tips.",
    whyHeading: "Why Pondicherry has one of India's best café cultures",
    whyBody:
      "Pondicherry has always been a city that encourages people to linger.\n\nIts wide boulevards, colonial architecture and slower pace of life make cafés feel like a natural extension of the streets rather than simply places to grab a quick drink. The city's French heritage has influenced everything from bakery traditions to café culture, while local tastes have shaped menus that comfortably blend European favourites with South Indian classics.\n\nThe result is a café scene that's remarkably diverse. You can start the day with traditional filter coffee, enjoy freshly baked pastries for breakfast, settle into a stylish café for a long lunch, or finish the evening with handcrafted gelato, all within a short walk of one another.\n\nWhether you're travelling solo, working remotely for a few hours, meeting friends or simply escaping the afternoon heat, there's a café in Pondicherry to match the mood.",
    bestFor: {
      "cafe-des-arts": "Breakfast and coffee in a French Quarter courtyard",
      "bread-and-chocolate": "Artisan bakery and a proper breakfast",
      "coromandel-cafe": "Elegant brunch and long lunches",
      "le-cafe": "Coffee with a sea view",
      "the-french-loaf": "Quick, good-value pastries and bread",
      "baker-street": "Fresh bread and the city's best éclairs",
      "botanist-lounge": "Botanical interiors and creative cocktails",
      "new-banana-cafe": "Rooftop galettes and a cult-favourite chicken pie",
      "eat-my-cake": "Cheesecake and rooftop calm",
      "indian-kaffe-express": "Budget-friendly Indian snacks and Western breakfast",
      "le-pondichery": "Oceanfront coffee and pastries",
      "gelateria-montecatini": "Italian-style gelato on the promenade",
      "cherrypond": "Garden café and cocktail bar",
    },
    blurbs: {
      "cafe-des-arts":
        "There are cafés that serve coffee, and then there are cafés that become part of a city's identity. Café des Arts belongs in the second category, tucked inside a restored mansion in the heart of the French Quarter.\n\nIt's the kind of place where a quick coffee stop turns into an hour, then two. Come for breakfast before the streets get busy, or drop in mid-afternoon when the courtyard settles into its slowest, most pleasant rhythm.",
      "bread-and-chocolate":
        "If your ideal morning starts with fresh bread, good pastries and strong coffee, Bread & Chocolate belongs on the list. It combines a bakery, chocolatier, gelato counter and rooftop dining space under one roof, which is part of why it's become one of Pondicherry's busiest all-day cafés.\n\nPopular items sell out before lunchtime, so arriving early is worth it, especially on weekends. The rooftop seating is the better choice when it's available.",
      "coromandel-cafe":
        "Coromandel Café blends an elegant garden setting with an all-day menu that works equally well for brunch, a long lunch, or an afternoon coffee between sightseeing stops.\n\nIt's polished without feeling formal, which makes it one of the easiest recommendations in White Town when you want a proper sit-down meal rather than a quick bite.",
      "le-cafe":
        "Le Café sits directly on Goubert Avenue, facing the Bay of Bengal, and its main appeal is exactly what the location promises: one of the simplest, most well-situated places to sit by the sea in Pondicherry. Run in association with the Sri Aurobindo Ashram, it isn't trying to be a destination restaurant.\n\nCome for coffee and a light bite rather than a full meal, and time your visit for the golden hour before sunset if you can.",
      "the-french-loaf":
        "The French Loaf is a reliable bakery and café on Suffren Street, and one of White Town's best-value stops for fresh pastries, bread, coffee and light snacks. It's part of a larger bakery chain, but it hasn't lost the qualities that make a good neighbourhood bakery worth returning to.\n\nIt's an easy choice for an inexpensive breakfast, a quick lunch, or an afternoon coffee when you don't want to pay White Town's usual prices.",
      "baker-street":
        "Baker Street has been a fixture of White Town's café scene for years, occupying a prominent corner on Rue Bussy. It blends the atmosphere of a neighbourhood boulangerie with an approachable café menu: fresh breads, sandwiches, quiches, and a pastry counter lined with éclairs and croissants.\n\nThe chicken and olive sandwich is the house classic, and the éclairs are among the city's best, often selling out before lunchtime. Prices remain reasonable given the quality of the baking.",
      "botanist-lounge":
        "The Botanist Lounge occupies a beautifully restored space within La Maison Rose, with preserved botanical specimens, rattan furniture and warm lighting that make the interiors an attraction in their own right. It works equally well for a leisurely afternoon coffee or sunset cocktails.\n\nThe vegan mango ice cream has become something of a signature, and the cocktail programme is one of the more inventive in White Town. It's one of the few cafés where lunch naturally drifts into evening drinks.",
      "new-banana-cafe":
        "New Banana Café occupies an unassuming rooftop on Cazy Street and has built its reputation quietly, mostly through word of mouth. The menu leans towards Continental comfort food with a French touch: galettes, quiches, and a chicken pie that has developed something of a cult following.\n\nMuch of the charm comes from Senthil, the owner, who is often personally involved in welcoming guests. Prices are some of the most reasonable in White Town.",
      "eat-my-cake":
        "Eat My Cake occupies a quiet rooftop on Rue Labourdonnais and has earned its reputation through consistently excellent baking. It began as a social enterprise training and employing local women, and has grown into one of Puducherry's most rewarding stops for coffee and dessert.\n\nThe cheesecakes are among the finest in the city, rich but never cloying, and vegan and gluten-free options are clearly labelled, which is still relatively rare in Puducherry's café scene.",
      "indian-kaffe-express":
        "The Indian Kaffe Express fills a useful niche on Dumas Street: affordable, straightforward food in a clean, welcoming setting, at a time when many nearby cafés lean upscale and Franco-European. The menu mixes masala chai, filter coffee, waffles, pancakes and Indian snacks.\n\nIt won't be the most memorable meal of your trip, but it's a dependable, good-value stop between sightseeing, especially with families.",
      "le-pondichery":
        "Le Pondichéry is the casual café inside The Promenade Hotel, and it occupies one of the best waterfront tables in the city. Tables look directly onto Rock Beach and the Bay of Bengal, so you can have coffee while watching fishermen and morning walkers along the promenade.\n\nThe menu is intentionally simple: espresso, filter coffee, pastries and light bites. Prices are reasonable considering the view, and it works especially well as an early breakfast stop before the promenade gets busy.",
      "gelateria-montecatini":
        "Gelateria Montecatini Terme serves Italian-style gelato within easy reach of the promenade, with the ocean on one side and the French Quarter just behind. It's the kind of place that fits naturally into an evening stroll rather than requiring a special trip.\n\nThere's nothing complicated about the appeal here: good gelato, a good location, and an easy stop to end a day of walking.",
      "cherrypond":
        "Cherrypond Garden Café & Bar occupies a leafy courtyard on one of White Town's more attractive streets, offering a break from the busier stretches nearby. The garden setting suits everything from a morning coffee to sunset drinks beneath the trees.\n\nThe menu blends café staples with a well-considered drinks list, and the atmosphere shifts naturally through the day without ever losing its relaxed character.",
    },
    quickPicks: [
      { situation: "Your first morning in Pondicherry", recommendation: "Café des Arts" },
      { situation: "A proper baked breakfast", recommendation: "Bread & Chocolate" },
      { situation: "A long, relaxed brunch", recommendation: "Coromandel Café" },
      { situation: "Coffee by the sea", recommendation: "Le Café or Le Pondichéry" },
      { situation: "A quick, good-value pastry stop", recommendation: "The French Loaf or Baker Street" },
      { situation: "Cakes and desserts", recommendation: "Eat My Cake" },
      { situation: "Authentic gelato", recommendation: "Gelateria Montecatini Terme" },
      { situation: "A quiet garden setting", recommendation: "Cherrypond Garden Café & Bar" },
      { situation: "Cocktails alongside your coffee", recommendation: "The Botanist Lounge" },
      { situation: "Budget-friendly and family-easy", recommendation: "Indian Kaffe Express or New Banana Café" },
    ],
    faq: [
      { question: "Which is the most famous café in Pondicherry?", answer: "Café des Arts is one of the city's best-known cafés, particularly among visitors exploring the French Quarter. Its heritage setting and relaxed atmosphere have made it a Pondicherry favourite." },
      { question: "Where can I get the best breakfast in Pondicherry?", answer: "Several cafés on this list are popular for breakfast, with Bread & Chocolate, Coromandel Café and Café des Arts among the best-known choices." },
      { question: "Are there good bakeries in Pondicherry?", answer: "Yes. Pondicherry has a strong bakery tradition influenced by its French heritage, ranging from artisan bakeries to neighbourhood favourites serving fresh bread, pastries and cakes." },
      { question: "Which café is best for sea views?", answer: "Le Café and Le Pondichéry are the two cafés where you can enjoy coffee right by the waterfront, making either a popular stop during a walk along the Promenade." },
      { question: "Is Pondicherry good for café hopping?", answer: "Yes. Many of the city's best cafés and bakeries are within walking distance of one another, especially around the French Quarter, making it easy to explore several in a single day." },
    ],
  },
  {
    id: "indian-tamil",
    slug: "best-indian-and-tamil-restaurants",
    title: "Best Indian & Tamil Restaurants in Pondicherry",
    metaTitle: "6 Best Indian & Tamil Restaurants in Pondicherry",
    metaDescription: "Six of Pondicherry's best Indian and Tamil restaurants, from everyday filter-coffee spots to heritage Franco-Tamil dining, with what each does best.",
    restaurantIds: [
      "indian-coffee-house",
      "maison-perumal",
      "oh-pondi",
      "great-indian-cuisine",
      "podouke-heritage",
      "surguru-spot",
    ],
    intro:
      "French cafés may have put Pondicherry on the culinary map, but to understand the city, you have to sit down for a proper South Indian meal.\n\nThe aromas of freshly ground spices, the comforting simplicity of a well-made dosa, the satisfying spread of a traditional Tamil meal served on a banana leaf, and the unmistakable richness of regional curries tell a story that predates colonial boulevards by centuries. While the French Quarter attracts much of the attention, some of Pondicherry's most memorable meals are found in restaurants that celebrate the flavours of Tamil Nadu and the wider Indian subcontinent.\n\nThese are the places where breakfast begins early, filter coffee is taken seriously, recipes are rooted in tradition, and hospitality often feels as important as the food itself.\n\nThis guide brings together six restaurants that showcase different sides of Indian dining in Pondicherry. Some specialise in classic South Indian favourites, others present regional cuisine in a more refined setting, but each offers a distinctly local experience. Rather than ranking them from first to last, we've highlighted what each restaurant is best known for so you can choose the one that suits your appetite and your itinerary. Each listing links to our dedicated restaurant guide for practical information, location details and planning tips.",
    whyHeading: "Why Pondicherry's Indian food deserves equal attention",
    whyBody:
      "It's easy to arrive in Pondicherry expecting croissants, cafés and French cuisine. And while those experiences are undoubtedly part of the city's charm, they tell only one chapter of its story.\n\nLong before French influences arrived, this stretch of the Coromandel Coast had developed its own rich culinary traditions shaped by Tamil culture, local agriculture and generations of family cooking. Even today, the rhythm of daily life is reflected in the food: bustling breakfast spots serving idli and dosa at sunrise, generous vegetarian meals at lunchtime, and comforting regional dishes enjoyed with family in the evening.\n\nWhat makes Pondicherry particularly rewarding for food lovers is the way these traditions exist alongside its colonial legacy. You don't have to choose between French and Indian cuisine. You can enjoy both, often on the same street.\n\nWhether you're searching for an authentic South Indian breakfast, a traditional vegetarian meal or a restaurant that celebrates local heritage, these six restaurants offer an excellent introduction to the city's Indian culinary identity.",
    bestFor: {
      "indian-coffee-house": "Traditional South Indian breakfast and filter coffee",
      "maison-perumal": "Heritage Franco-Tamil dining",
      "oh-pondi": "Casual, everyday Tamil favourites",
      "great-indian-cuisine": "North and South Indian variety",
      "podouke-heritage": "Local heritage dining at exceptional value",
      "surguru-spot": "Everyday Tamil vegetarian meals",
    },
    blurbs: {
      "indian-coffee-house":
        "Few restaurants evoke nostalgia quite like Indian Coffee House. Part of a long-running, worker-owned network found across India, it offers an experience that's refreshingly unpretentious and deeply rooted in everyday life.\n\nIt's the sort of place where mornings begin with crisp dosas, soft idlis and a strong cup of filter coffee served without ceremony but with reassuring consistency. For visitors wanting to experience the city's everyday dining culture rather than its tourist trail, this is an excellent place to start.",
      "maison-perumal":
        "Maison Perumal occupies a unique place in Pondicherry's dining scene. Set within a beautifully restored 130-year-old Chettiar mansion, it brings together French colonial elegance and Tamil culinary tradition through Franco-Tamil cooking rooted in the Renonçant community, the Franco-Indian Catholic families whose kitchens evolved at the crossroads of both cultures.\n\nRather than presenting Tamil cuisine as a backdrop, the restaurant treats it as the main event, refined through French technique but never diluted. It's an excellent choice if you're looking for a meal that feels both distinctly local and thoughtfully curated.",
      "oh-pondi":
        "Relaxed, welcoming and rooted in local flavours, Oh Pondi! offers a straightforward introduction to Tamil cuisine without unnecessary fuss.\n\nIts appeal lies in its accessibility. Whether you're stopping for lunch after exploring the city or looking for a dependable dinner that showcases familiar South Indian favourites, it provides an easygoing experience that suits families, solo travellers and first-time visitors alike.",
      "great-indian-cuisine":
        "As the name suggests, The Great Indian Cuisine celebrates the diversity of Indian cooking rather than focusing on a single regional tradition, spanning both North and South Indian favourites on Anna Salai.\n\nThis makes it a good option for groups with different tastes or travellers keen to sample a broader cross-section of Indian flavours during one meal. Its varied menu offers flexibility without losing sight of the comforting familiarity that defines good Indian hospitality.",
      "podouke-heritage":
        "Named after Podouke, the ancient trading port identified in Greco-Roman texts and widely associated with the Puducherry region, Podouke Heritage Restaurant draws inspiration from the city's oldest culinary traditions rather than modern reinterpretations.\n\nThe emphasis here is on connecting visitors with local identity as much as local food. For travellers interested in experiencing Pondicherry beyond the French Quarter, it offers a dining experience that feels grounded in the region's own traditions and heritage, at some of the best-value prices in the city.",
      "surguru-spot":
        "For many residents, the best meals aren't necessarily the most elaborate. They're the ones enjoyed regularly, prepared with consistency and served without pretence. Surguru Spot, on Jawaharlal Nehru Street, embodies that philosophy.\n\nIt's the kind of restaurant visitors often discover after asking locals where they eat rather than where tourists go. Simple surroundings allow the focus to remain firmly on reliable South Indian vegetarian cooking, from crisp dosas to soft idlis, served with warmth and efficiency.",
    },
    quickPicks: [
      { situation: "Your first authentic South Indian breakfast", recommendation: "Indian Coffee House" },
      { situation: "A heritage Franco-Tamil dining experience", recommendation: "Maison Perumal" },
      { situation: "Discovering local history through food", recommendation: "Podouke Heritage Restaurant" },
      { situation: "A relaxed family meal", recommendation: "Oh Pondi!" },
      { situation: "Trying a wide range of Indian dishes", recommendation: "The Great Indian Cuisine" },
      { situation: "Everyday Tamil vegetarian food", recommendation: "Surguru Spot" },
    ],
    faq: [
      { question: "Where can I find authentic South Indian food in Pondicherry?", answer: "All six restaurants in this guide offer authentic Indian dining, with Indian Coffee House and Surguru Spot particularly well suited to travellers looking for classic South Indian flavours." },
      { question: "Is Pondicherry known only for French food?", answer: "Not at all. While its French heritage is one of the city's defining attractions, Pondicherry also has a rich Tamil culinary tradition that deserves equal attention. Exploring both sides of its food culture offers a much fuller picture of the city." },
      { question: "Which restaurant is best for a traditional South Indian breakfast?", answer: "Indian Coffee House is a popular choice for visitors wanting to experience classic South Indian breakfast staples in an authentic setting." },
      { question: "Where can I enjoy Indian food in a heritage setting?", answer: "Maison Perumal pairs a heritage Chettiar mansion with a Franco-Tamil menu, making it one of the city's most distinctive dining experiences." },
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
