export interface AurovilleArticle {
  id: string;
  title: string;
  cardTitle?: string;
  teaser: string;
  body: string;
  gradient: string;
  photo?: string;
  metaTitle?: string;
  metaDescription?: string;
  faq?: { question: string; answer: string }[];
}

export const aurovilleArticles: AurovilleArticle[] = [
  {
    id: "what-is-auroville",
    metaTitle: "What Is Auroville? The 1968 Experiment in Human Unity",
    metaDescription: "Founded in 1968, Auroville is home to about 3,400 residents from over 60 countries and remains an ongoing experiment in human unity.",
    title: "What is Auroville?",
    cardTitle: "The Vision",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
    photo: "auroville-vision.webp",
    teaser:
      "Founded in 1968 as an experiment in human unity, Auroville is home to around 3,400 people from more than 60 countries. It is not a tourist attraction, a spiritual retreat, or a commune. It is something harder to define.",
    body: `**The founding**

On 28 February 1968, a ceremony took place on a plateau of eroded land about 12 kilometres north of Pondicherry. Representatives of 124 nations and the States and Union Territories of India placed soil from their homelands into a marble-clad urn at the centre of the site.

[Mirra Alfassa](/history/lives-and-legacies/mirra-alfassa), known as The Mother, sent a message that was read aloud: "Auroville wants to be a universal town where men and women of all countries are able to live in peace and progressive harmony, above all creeds, all politics and all nationalities."

More than half a century later, that statement remains Auroville's founding charter.

**Not a spiritual retreat**

Many visitors arrive expecting an ashram or a religious community centred on the teachings of Sri Aurobindo. Auroville grew from the vision of [Sri Aurobindo](/history/lives-and-legacies/sri-aurobindo) and The Mother, but it has no official religion, no required belief system, and no prescribed form of worship.

The Matrimandir, at the centre of the township, is intended for silent individual concentration rather than prayer or religious ceremonies. Residents include architects, engineers, artists, farmers, teachers, scientists and entrepreneurs from many parts of the world, united by a shared commitment to the experiment rather than a common faith.

**How it works**

Auroville is administered by the Auroville Foundation, a statutory body established under the Auroville Foundation Act, 1988, passed by the Parliament of India. UNESCO has passed a series of resolutions supporting Auroville since its founding, but it does not govern the township.

Today, Auroville has around 3,400 permanent residents representing more than 60 nationalities, though the number shifts as people join or leave. Many residents receive community maintenance or earn incomes through Auroville's farms, schools, workshops, research organisations and commercial units, while contributing to the township's shared services.

**The land**

When the first residents arrived in the late 1960s, much of the surrounding plateau had been stripped of its original vegetation by centuries of fuel collection, grazing and erosion.

Over the following decades, residents and volunteers planted more than two million trees, restored large areas of Tropical Dry Evergreen Forest, built check dams, and introduced rainwater harvesting to slow erosion and improve groundwater recharge.

Many of the shaded roads and forests that visitors experience today did not exist when Auroville was founded. Ecological restoration remains one of the township's defining achievements.

**Why visit**

Auroville is best experienced slowly. The Matrimandir is its best-known landmark, but it is only one part of a township spread across about 20 square kilometres of forests, farms, workshops and residential communities.

Spend time beyond the Visitors' Centre. Walk or cycle the forest roads, visit a workshop, eat at the Solar Kitchen. A conversation with someone who arrived twenty years ago and never left will tell you more about what Auroville actually is than any exhibition. These encounters are not arranged. They happen at lunch, on the forest roads, at a café table. That is how the place works.`,
  },

  {
    id: "the-matrimandir",
    metaTitle: "The Matrimandir, Auroville's Golden Meditation Sphere",
    metaDescription: "The Matrimandir is Auroville's golden sphere, built over 37 years as a place for silent concentration rather than religious worship.",
    title: "The Matrimandir",
    gradient: "linear-gradient(135deg, #78350f 0%, #d97706 100%)",
    photo: "matrimandir.jpg",
    teaser:
      "The golden sphere at the heart of Auroville is not a temple. It is a place for silent concentration, built over 37 years, housing one of the world's most unusual meditation chambers.",
    body: `**What it is**

The Matrimandir, Sanskrit for Temple of the Mother, stands at the geographical and spiritual centre of Auroville. The golden sphere, 36 metres in diameter and covered in 1,415 gold-tinted discs that catch the light differently through the day, took 37 years to complete.

Despite its name, it belongs to no religion. There are no deities, no rituals, no incense and no organised ceremonies. It was conceived solely as a place for silent individual concentration, open to people of every culture and belief.

**The inner chamber**

Visitors enter in silence and ascend through softly lit, curving white passageways before the chamber opens. The shift in atmosphere is immediate.

The space itself is pristine white marble, air-conditioned and still. At its centre sits a crystal globe 70 centimetres in diameter, considered the largest optically perfect glass sphere in the world at the time of its installation. A heliostat on the exterior dome tracks the sun and redirects a single beam of natural light down through the crystal, illuminating the otherwise still, white room. The beam shifts subtly through the day and across seasons.

Around the main space are twelve meditation rooms, each dedicated to a quality: sincerity, humility, gratitude, perseverance, receptivity, progress, courage, goodness, generosity, equality, peace, and unity.

Photography is strictly prohibited. The chamber holds around 24 people at a time. Silence is assumed, not merely requested.

**The viewing point**

The viewing point is free and requires no advance booking. Collect a pass at the Visitors' Centre after a short introductory presentation, then walk ten minutes along shaded paths to a raised platform overlooking the sphere and the gardens below. Electric shuttles are available for visitors with limited mobility.

**Entering the inner chamber**

Same-day access is not possible. The online booking portal is open daily from 7am to 12pm IST and is closed entirely on Tuesdays. Request your slot at least three to seven days in advance: daily numbers are strictly limited and fill quickly during the November to February peak season.

On your booked day, arrive at the Visitors' Centre by 8am. Wear modest clothing with shoulders and knees covered, and remove your shoes before entering. Cameras and mobile phones must be left in lockers at the entrance. Children under ten are not admitted to the inner chamber.

**The gardens**

Twelve themed gardens encircle the Matrimandir, each corresponding to one of the twelve qualities. A large Banyan tree stands near the open-air amphitheatre at the centre of the Peace Area. Walking the paths through the gardens is itself a reason to come: this is the quietest space in the Pondicherry region.`,
    faq: [
      { question: "How do I visit the Matrimandir?", answer: "Visitors must first go to the Auroville Visitors' Centre. A free viewing point can usually be accessed the same day, while entry into the inner chamber requires advance booking and is subject to availability. Silence and respectful behavior are expected. Photography is restricted in certain areas. It is advisable to reserve your visit a few days ahead, especially during weekends and holiday periods." },
      { question: "Do I need a pass to visit the Matrimandir?", answer: "A pass is not required for the general visitor area and viewing point, but it is required for entry into the inner chamber of the Matrimandir. Passes must be obtained through the official booking process at the Visitors' Centre and are limited in number. Because demand can be high, especially during weekends and holidays, it is wise to arrange the pass before your planned visit." },
      { question: "Can children enter the Matrimandir inner chamber?", answer: "Access for children is restricted. The inner chamber is intended for silent meditation, and children under ten are not admitted. Older children may be allowed depending on current regulations and their ability to remain quiet throughout the visit. Families should check the latest rules at the Visitors' Centre before planning entry into the chamber, as policies can change." },
    ],
  },

  {
    id: "sustainable-living",
    metaTitle: "Sustainable Living in Auroville Since 1968",
    metaDescription: "Auroville has reforested a barren plateau, developed compressed earth architecture, and pioneered solar cooking on a large scale.",
    title: "Sustainable Living",
    gradient: "linear-gradient(135deg, #064e3b 0%, #16a34a 100%)",
    photo: "sustainable-living.jpg",
    teaser:
      "Since 1968, Auroville has reforested a barren plateau, pioneered solar cooking for a thousand meals a day, and developed compressed earth architecture now taught across dozens of countries. A working model, not a showcase.",
    body: `Auroville is frequently cited as one of the world's most significant experiments in sustainable living, and not without reason. What began as a practical necessity in the late 1960s, building a community on barren land with no infrastructure, became a working model that has influenced ecological, architectural and energy projects across India and internationally.

**Reforesting a barren landscape**

When Auroville was founded in 1968, the plateau north of Pondicherry had been stripped of most of its tree cover by centuries of fuel collection and grazing, leaving exposed red earth that washed away with each monsoon.

Beginning in the early 1970s, residents launched a sustained reforestation programme. By planting around two million trees and restoring native vegetation from more than 1,000 plant species, they rebuilt large areas of Tropical Dry Evergreen Forest, one of the rarest ecosystems in India.

The results extended beyond the trees. Richer soils, improved biodiversity and cooler local temperatures allowed wildlife to return: dozens of bird species, jackals, civet cats and porcupines now inhabit the Green Belt. Groundwater recharge has improved measurably, though regional urban growth continues to put pressure on local aquifers. The reforestation remains one of Auroville's defining achievements and is still actively maintained.

**Organic farming**

Several community farms produce organic fruits, vegetables, grains, dairy products and herbs for the township's cafés, community kitchens and residents. Farmers combine organic cultivation with biodynamic practices, composting, seed conservation and natural pest management, adapting their methods to Tamil Nadu's hot, seasonally dry climate.

Some farms welcome visitors for guided tours, workshops or short volunteer experiences.

**Renewable energy and the Solar Kitchen**

Rooftop solar panels, biogas systems, solar water heaters and small wind installations are distributed throughout the township. Auroville has been recognised as an early pioneer in decentralised renewable energy for semi-rural environments.

Its best-known installation is the Solar Kitchen, the township's main communal dining hall. Capable of serving up to a thousand meals per sitting, it is partly powered by a 15-metre parabolic solar concentrator that tracks the sun and generates steam for cooking. A hybrid backup keeps it running during cloudy weather, making it one of India's earliest large-scale demonstrations of solar thermal cooking.

**Earth architecture**

Many buildings in Auroville use Compressed Stabilised Earth Blocks (CSEB), made from the region's iron-rich laterite soil. These require far less energy to produce than fired bricks and provide good thermal comfort in the tropical climate. Their warm reddish colour has become an architectural signature of the township.

Research and training in earth construction is led by the Auroville Earth Institute, which has trained thousands of architects, engineers and builders from dozens of countries. The Visitors' Centre and the Solar Kitchen both demonstrate these techniques.

**Water conservation**

The region receives heavy monsoon rains followed by long dry seasons. Residents have built an extensive network of earthen bunds, check dams, recharge ponds and rainwater harvesting systems to capture rainfall, slow erosion and allow water to recharge underground aquifers.

Each monsoon, residents monitor whether the check dams are holding, whether the bunds are intact, whether groundwater levels are responding. Water is treated as a collective responsibility here in a way that is unusual anywhere in South India. The work is ongoing and unfinished, which is also true of Auroville itself.

**Visiting**

The Visitors' Centre provides information on ecological projects. Several farms, forests and research centres organise guided tours and workshops by prior arrangement. Whether walking the forest trails, examining earth-built structures or eating at the Solar Kitchen, the experience makes clear that sustainability here is not an attraction. It is part of everyday life.`,
  },

  {
    id: "arts-crafts",
    metaTitle: "Auroville Arts & Crafts, Handmade Paper to Ceramics",
    metaDescription: "Auroville's workshops produce handmade paper, natural incense, ceramics, ethical fashion, and a remarkable sound garden for visitors.",
    title: "Arts & Crafts",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)",
    photo: "pottery.jpg",
    teaser:
      "Auroville's workshops produce handmade paper, natural incense, ceramics, ethical fashion and one of India's most unusual sound gardens. Most are open to visitors; many sell directly from the workshop.",
    body: `**Handmade paper**

One of Auroville's oldest enterprises, Auroville Papers crafts sheets by hand from recycled cotton textile waste and agricultural fibres. Visitors can watch the full process, from pulping and pressing to drying and finishing, and browse notebooks, sketchbooks, greeting cards and decorative papers embedded with flowers and leaves. The workshop and shop are open to visitors.

**Natural incense**

Auroville has built an international reputation for natural incense. AuroMira and Auroshikha both produce incense sticks, essential oils and fragrances using plant resins, aromatic woods, herbs and essential oils rather than synthetic alternatives. The hand-rolling and blending techniques that go into these products are a meaningful contrast to mass-produced incense. Some production units welcome visitors.

**Ceramics**

The hub of ceramic activity in Auroville is the Dana Community, a cluster of studios tucked into a secluded part of the township. Two operations work side by side, Flame Pottery and Mandala Pottery, sharing clay supplies and kiln access. Production spans wheel-thrown and slab-built pieces fired in wood-burning kilns, ranging from everyday tableware and incense holders to sculptural work that ships to Europe and beyond. The workspace walls are covered in tribal paintings, which makes the visit worth making for the atmosphere alone.

Other ceramic studios across the township organise short workshops in wheel throwing and hand-building for visitors; schedules vary, so check availability before arriving.

**Svaram**

Svaram is one of Auroville's most memorable places. Part workshop, part instrument maker and part interactive sound garden, it designs and builds original acoustic instruments: giant chimes, metallophones, resonant sculptures, monochords, sound tables and therapeutic instruments used in music education, meditation and sound therapy.

The outdoor Sound Garden invites visitors to play the instruments freely, creating layered sounds among trees and landscaped paths. Children and adults are equally at home here. No appointment is needed; unhurried exploration is the point.

**Sustainable fashion and textiles**

Upasana is an award-winning ethical fashion studio that works with local artisans and rural communities using organic cotton, natural fibres and plant-based dyes. Its collections have received international recognition for combining contemporary design with responsible production. Across the township, visitors will also find handwoven scarves, cotton garments, silk textiles, bags and home furnishings.

**More crafts**

Jewellery, candles, leather accessories, natural soaps, herbal cosmetics and decorative objects are produced in small studios throughout Auroville. Because quantities are limited, shopping here feels closer to visiting an artist's studio than browsing a conventional store.

**Where to shop**

The Visitors' Centre boutiques bring together products from dozens of enterprises under one roof and are the easiest starting point. For a wider selection, explore shops near the Matrimandir and individual workshop stores where products are sold directly by the makers. Prices are fixed. Purchasing from these enterprises supports local artisans and community projects directly.`,
  },

  {
    id: "food-cafes",
    metaTitle: "Auroville Food & Cafés, Pizza, Pastries & Organic Farms",
    metaDescription: "Auroville offers French pastries, solar-cooked community meals, wood-fired pizza, and organic farm cafés in a multicultural setting.",
    title: "Food & Cafés",
    cardTitle: "Food & Cafés",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #b45309 100%)",
    photo: "solar-kitchen.webp",
    teaser:
      "French pastries, solar-cooked community meals, wood-fired Neapolitan pizza and organic farm cafés. Auroville's food scene is multicultural, unhurried and largely vegetarian.",
    body: `**Bread & Chocolate**

One of the most popular cafés in Auroville. The bread, croissants, pastries, quiches and cakes are baked fresh each morning; good coffee and shaded garden seating make it one of the township's busiest gathering places. Popular items sell out before lunchtime, so arriving early is worthwhile, particularly during weekends and holiday periods.

**Auroville Bakery**

Near the Visitors' Centre, Auroville Bakery has served residents and travellers for decades. Naturally fermented sourdough, rye and wholegrain loaves are prepared using locally sourced ingredients. Fresh pastries and cookies are available in the mornings. It is also a good stop for picnic supplies before cycling the forest roads.

**Solar Kitchen**

More than a restaurant, the Solar Kitchen is one of Auroville's most distinctive institutions. Designed as the township's communal dining hall, it serves affordable vegetarian meals to residents, volunteers and visitors together in a large, informal setting that gives a genuine sense of everyday life in Auroville.

The building takes its name from the solar thermal system at its core: a large parabolic concentrator tracks the sun and generates steam for much of the kitchen's cooking energy. Lunch is the main meal, typically South Indian dishes alongside international vegetarian options.

**Tanto**

Hidden among the trees, Tanto has a near-cult following for its wood-fired Neapolitan-style pizzas. Crisp, lightly charred crusts with fresh toppings and good ingredients: widely considered among the best in the region. Seating is limited and the place fills quickly, so arriving before the peak lunch hour saves a long wait.

**Naturellement Garden Café**

A quieter option in a shaded tropical garden. The menu draws from Mediterranean cooking: salads, homemade pasta, grilled vegetables, soups and seasonal specials using organic produce from Auroville farms, with fresh juices, herbal drinks and homemade desserts alongside. Good for a leisurely lunch after visiting the Matrimandir or nearby workshops.

**Well Café and smaller spots**

Several smaller cafés throughout the township specialise in wholesome vegetarian food, fresh smoothies, herbal teas and vegan options. Well Café is popular with cyclists and long-term visitors for healthy breakfasts and light lunches. Menus across most of Auroville shift with the seasons depending on what local farms are producing, so each visit is slightly different.

**What to expect**

Most cafés in Auroville are vegetarian, with vegan and gluten-free options widely available. Prices run slightly higher than in central Pondicherry, reflecting organic ingredients and small-scale production, but remain good value by international standards. Cards are accepted in most larger places; carrying some cash is useful for smaller spots. During the Christmas and New Year period, popular cafés fill quickly at breakfast and lunch.

The settings are part of the experience: shaded gardens, birdsong instead of traffic, meals at an unhurried pace. Whether eating sourdough at breakfast, sharing a wood-fired pizza under the trees or lunching at the Solar Kitchen alongside residents from forty countries, the food here reflects the same values as Auroville itself.`,
  },

  {
    id: "how-to-visit",
    metaTitle: "How to Visit Auroville, Passes, Scooters & Best Season",
    metaDescription: "Auroville covers 20 sq km. The Matrimandir requires a pass, scooters offer the most flexibility, and November to February is ideal.",
    title: "How to Visit",
    gradient: "linear-gradient(135deg, #374151 0%, #6b7280 100%)",
    photo: "going-to-auroville.jpg",
    teaser:
      "Auroville covers 20 square kilometres. The Matrimandir requires a pass from the Visitors' Centre. A scooter gives the most flexibility. November to February is the most comfortable time to visit.",
    body: `**Getting there**

Auroville lies about 10 to 12 kilometres north of central Puducherry, a 20 to 30-minute drive.

Scooter: the most popular option for independent travellers, and the most rewarding. Rental shops are found around Mission Street, Nehru Street and the White Town. The road north takes you through fishing villages, past stands of casuarina beside the sea, and into the green canopy that begins where Auroville's forests start. The transition from Puducherry to Auroville is visible the moment the tree cover closes over the road. Carry your licence and rental agreement; helmets are compulsory and spot checks occur on this route.

Auto-rickshaw: convenient if you prefer not to drive. Hiring an auto for several hours, with the driver waiting or returning at a fixed time, is more practical than paying two separate fares. Many drivers know the township well and can suggest which areas to visit depending on how much time you have.

Taxi: bookable through Namma Yatri, local operators or your accommodation. Uber operates in Puducherry but coverage on this route can be limited. A good choice during the hotter months or for families.

Local bus: inexpensive buses run from Puducherry bus stand toward Auroville via the East Coast Road. Stops are along the main road, from where the Visitors' Centre is a short walk or auto ride.

Bicycle: enjoyable during the cooler months. The journey takes 45 to 60 minutes. Roads are flat and traffic eases considerably past the town boundary. Bicycles can also be rented inside the township for exploring the forest roads.

**Start at the Visitors' Centre**

All first-time visitors should begin here. The Visitors' Centre has exhibitions on Auroville's history and vision, boutiques selling locally made crafts and clothing, cafés, public toilets and parking for cars and scooters.

Matrimandir viewing passes are collected here, free of charge, after a short introductory presentation. Private vehicles cannot go beyond this point into the Peace Area: visitors walk the shaded paths or take the electric shuttle.

A common mistake: many first-time visitors assume they can walk directly to the Matrimandir from the main road. All access goes through the Visitors' Centre.

**Visiting the Matrimandir**

Viewing point: free pass from the Visitors' Centre, no advance booking required. A ten-minute walk leads to a raised platform overlooking the sphere and gardens.

Inner Chamber: advance online reservation required. Places fill quickly during weekends and holiday periods. The booking portal is open daily from 7am to 12pm IST and is closed on Tuesdays; request your slot at least three to seven days ahead. Photography, mobile phones and conversations are not permitted inside. Remove your shoes before entering. Children under ten are not admitted.

**Getting around**

Auroville covers about 20 square kilometres. The Matrimandir is only one part of the township; cafés, workshops, farms and guesthouses are spread across several districts connected by quiet forest roads. A scooter or bicycle gives the most flexibility. Walking is pleasant around the Visitors' Centre and Matrimandir but is not practical for exploring further afield.

**Best time to visit**

November to February is the most comfortable period, with lower temperatures and humidity. March to June can be very hot; early morning visits are far more pleasant. The monsoon, typically October to December, brings heavy showers that leave the forests a deep, vivid green.

**Practical tips**

Wear light, modest clothing and comfortable shoes. Bring a refillable water bottle, sunscreen and a hat. Mobile coverage is generally good throughout the township; Wi-Fi is available in most cafés and guesthouses. Cards are accepted in larger establishments; carry cash for auto-rickshaws and smaller spots.

**Staying overnight**

Spending a night or two gives a very different sense of Auroville than a day trip from Puducherry. The township has a range of guesthouses, from simple eco-lodges to comfortable boutique stays, many set in forest gardens. Overnight visitors can attend morning yoga, workshops and early Matrimandir sessions. Book well in advance during the Christmas and New Year peak.

**Suggested half-day**

Visitors' Centre and Matrimandir viewing point. Browse the craft boutiques. Coffee and pastries at one of the cafés nearby.

**Suggested full day**

Morning at the Matrimandir. Lunch at the Solar Kitchen. Afternoon at Svaram or artisan workshops. Explore forest roads by scooter or bicycle. Finish with shopping for handmade crafts and organic products.

**A note on conduct**

Auroville is a working international community. Visitors are warmly welcomed: keep noise low near the Matrimandir and residential areas, ask before photographing people, and allow yourself time to move slowly. The quieter the visit, the more it gives back.`,
    faq: [
      { question: "How do I get to Auroville from Pondicherry?", answer: "Auroville is located about 10 to 12 km north of central Pondicherry. The easiest way to reach it is by scooter, taxi, auto-rickshaw, or local bus. Travel time is usually 20 to 30 minutes depending on traffic. Many visitors combine Auroville with nearby beaches and cafés. If you are using a rental scooter, follow the East Coast Road and the clearly marked Auroville signs. See [getting around Pondicherry](/plan/getting-around) for rental details." },
      { question: "How much time should I plan for an Auroville visit?", answer: "For a first visit, half a day is usually sufficient to see the Visitors' Centre, the Matrimandir viewing area, a few community spaces, and some cafés or shops. If you wish to attend workshops, explore the forested areas, or spend time in the inner chamber of the Matrimandir, you should plan a full day. Auroville is spread over a large area, so moving between locations takes time." },
      { question: "What should I wear when visiting Auroville and the Matrimandir?", answer: "Comfortable and modest clothing is recommended. Light cotton clothes are ideal because of the warm climate. Visitors should avoid very revealing outfits, especially when entering meditation or community spaces. Footwear may need to be removed in certain areas. A hat, sunglasses, and water bottle are useful for walking around Auroville, as the site covers a large area with outdoor paths." },
    ],
  },
];
