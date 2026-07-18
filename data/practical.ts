export type PracticalSection = "transport" | "service" | "tips";

export interface PracticalTopic {
  id: string;
  section: PracticalSection;
  title: string;
  summary: string;
  body: string;
  photo?: string;
  photoPosition?: string;
  faq?: { question: string; answer: string }[];
}

export const practicalTopics: PracticalTopic[] = [
  // ── TRANSPORT ──────────────────────────────────────────────────────────────

  {
    id: "getting-to-pondicherry",
    section: "transport",
    title: "Getting to Pondicherry",
    summary:
      "Pondicherry is 3 hours from Chennai by road or rail. There is no meaningful direct air connection: fly into Chennai, then take a bus or train south.",
    body: `**By bus from Chennai**

The state bus from Chennai CMBT bus station to Pondicherry takes around four hours and costs approximately 190 rupees. It is basic: no air conditioning, five-seat rows, open windows. Buy your ticket from the conductor on board. The bus drops at Pondicherry's state terminal, which is a 30 to 45 minute walk from the White Town (or a 10-minute auto-rickshaw ride).

Private buses run on the same route with more comfort: air conditioning, better seats, and sometimes sleeper berths for overnight services. Book through Abhibus, Redbus, or the 12Go platform. Always verify pick-up and drop-off locations: private buses rarely use the state terminal.

**By train**

Puducherry Railway Station is in the city centre, about 15 minutes on foot from the White Town or five minutes by auto-rickshaw. Direct train connections link Pondicherry to Chennai, Mangalore, and a handful of south Indian cities. Book 60 days in advance through 12Go or IRCTC: tickets sell out fast on popular routes.

**By taxi**

A private taxi from Chennai takes about three hours and is the most flexible option if you are travelling with luggage or arriving late. From Bengaluru: six hours. From Coimbatore: seven hours. From Mysore: eight hours. Book through 12Go or arrange in advance through your accommodation.

**By air**

Fly into Chennai International Airport, which connects to all major Indian cities and a number of international destinations (Dubai, Kuala Lumpur, Colombo). Pondicherry has a small airport with very limited scheduled services: do not rely on it.

**More detail**

For a full breakdown of routes, prices, and booking platforms for each option, see our complete guide to [getting to Pondicherry](/plan/getting-here).`,
  },
  {
    id: "getting-around",
    section: "transport",
    title: "Getting around Pondicherry",
    summary:
      "The White Town and French Quarter are compact and best explored on foot. Auto-rickshaws cover everything else. Shared autos run fixed routes at very low fares.",
    body: `**On foot**

The French Quarter is small enough to walk across in 20 minutes. Almost everything in the White Town (cafés, heritage streets, the promenade, temples, sites) is within a 10 to 15 minute walk of any point in the grid. Walking is the right way to explore it. Go early in the morning: by 7am the light is superb and the streets are nearly empty.

**By auto-rickshaw**

Auto-rickshaws are the main form of transport between the White Town and other parts of Pondicherry (the train station, the bus terminal, the Tamil Quarter). Hail one on the street and agree on a price before getting in. For short distances within the central area, 50 to 100 rupees is typical.

**By shared auto**

Shared auto-rickshaws operate like informal minibuses: flag one down, state your destination, and pay on arrival if the driver is going that way. Fares are very low. The shared auto from Bussy Street to Mission Street junction, for example, costs around 50 rupees for two people with luggage.

**By bicycle**

Many guesthouses and hotels rent bicycles, which is an excellent way to explore the White Town and ride down to the lighthouse or along the promenade. The terrain is entirely flat. A bicycle is also the ideal way to reach Auroville's outer areas.

**By scooter**

Several rental agencies near the White Town rent scooters and motorbikes by the day. Rates typically run between 300 and 500 rupees per day, plus fuel. You will need a valid licence and some confidence in Indian traffic conditions.

**By Uber**

Uber operates in Pondicherry. You will need an Indian SIM card or eSIM to use it.

**More detail**

For fares, routes, and booking apps for auto-rickshaws, bicycles, and scooters, see our complete guide to [getting around Pondicherry](/plan/getting-around).`,
    faq: [
      { question: "Is Pondicherry walkable?", answer: "Yes. The historic White Town area is compact and very pleasant to explore on foot. Most colonial buildings, cafés, boutiques, churches, and the seaside promenade are located within walking distance of one another. Walking is often the best way to enjoy the architecture and atmosphere. However, for beaches outside the center, [Auroville](/discover/auroville), or nearby villages, a scooter, bicycle, auto-rickshaw, or taxi is more convenient." },
    ],
  },

  // ── SERVICE ────────────────────────────────────────────────────────────────

  {
    id: "tourist-information",
    section: "service",
    title: "Tourist Info",
    photo: "tourist-info.jpg",
    photoPosition: "center",
    summary:
      "Pondicherry is one of India's most relaxed holiday destinations. Its blend of French colonial architecture, Tamil heritage, seaside promenades and café culture creates an atmosphere unlike anywhere else in the country.",
    body: `Pondicherry is one of India's most relaxed holiday destinations. Its blend of French colonial architecture, tree-lined boulevards, Tamil heritage, seaside promenades and café culture creates an atmosphere unlike anywhere else in the country. Although the city is easy to explore, knowing a few local customs and practical tips will help you enjoy your visit while avoiding unnecessary inconvenience.

**Maps and guides**

The Institut Français de Pondichéry produces the best heritage map of the White Town's street system, available at a small number of bookshops and cultural institutions in the French Quarter.

**Guided tours**

Walking tours of the French Quarter with lunch are available through Get Your Guide and local operators. Market visits with cooking classes and full-day tours from Chennai are also bookable. A guided tour is particularly worthwhile on a first visit: the street names and building histories are dense enough that a human explanation adds considerably to the experience.

**The French Consulate**

For French nationals and registered visitors, the [French Consulate](/history/institutions/consulate-general) is on the seafront on [Goubert Avenue](/discover/white-town/avenue-goubert). It handles consular services but not general tourist enquiries. Visa services for Indian nationals applying for French visas are handled through a third-party provider, not the consulate directly. The consulate also has a branch in Chennai.

**Money and Payments**

Carrying a large amount of cash is rarely necessary. Most hotels, restaurants, supermarkets, cafés, fuel stations and shops accept UPI payments as well as debit and credit cards. Small roadside vendors, beach snack stalls and a few local markets may still prefer cash, so it is advisable to keep 500 to 1,000 rupees in small denominations for minor purchases.

ATMs are widely available throughout the city, especially around Mission Street, Jawaharlal Nehru Street, Anna Salai, Heritage Town and the bus stand. During long weekends and festival holidays, some ATMs may temporarily run out of cash, so withdrawing money before major holidays is a sensible precaution.

Unlike many tourist destinations, bargaining is uncommon in fixed-price stores and branded outlets. Negotiation is acceptable only in some street markets and souvenir stalls, but should always be done politely.

**Staying Safe**

Pondicherry is generally considered one of the safer cities for tourists. Families, couples and solo travellers usually find the atmosphere relaxed and welcoming. Nevertheless, basic precautions apply just as they would anywhere else.

Avoid leaving mobile phones, wallets or handbags unattended on the beach or while dining outdoors. Keep valuables secure, especially in crowded markets and during festivals. If riding a scooter, never leave helmets or bags hanging from the vehicle when parked.

The Beach Promenade remains lively until late evening, but quieter beaches outside the city become isolated after sunset. If visiting beaches such as Paradise Beach, Serenity Beach or Auroville Beach, return before it gets too late unless you are in a group.

Women travelling alone generally report positive experiences in Pondicherry. Dressing modestly outside beach areas, avoiding deserted roads late at night and using authorised taxis or auto-rickshaws after dark are sensible precautions.

**Beach Safety**

The sea along Pondicherry's coastline can appear calm, but underwater currents are often stronger than they seem. The Rock Beach promenade is protected by large granite boulders and is not suitable for swimming.

Swimming is safer only at designated beaches where local authorities permit it, such as Paradise Beach and parts of Serenity Beach, and even there visitors should follow warning flags and lifeguard instructions.

Avoid entering the sea during rough weather, heavy rain or after cyclone warnings. Never underestimate rip currents, particularly during the northeast monsoon season.

Children should always remain under adult supervision near the water.

**Food and Dining**

Pondicherry offers everything from authentic Tamil meals to French bakeries, seafood restaurants, cafés and international cuisine.

Seafood is usually freshest during the main fishing season, although availability may vary depending on weather conditions. If you have food allergies, inform the restaurant before ordering. Vegetarian and vegan options are widely available throughout the city.

Weekend evenings can be extremely busy at popular restaurants, especially in White Town. Reservations are recommended during holidays and long weekends.

Alcohol may only be consumed inside licensed establishments or private premises. Drinking alcohol on public roads, beaches or the promenade is prohibited and may attract penalties.

**Local Customs and Etiquette**

Pondicherry has a unique cultural identity where Tamil traditions blend with French heritage. Visitors are welcomed warmly, and respectful behaviour is appreciated everywhere.

When entering temples, footwear must always be removed. Photography inside temples may be restricted, so observe signboards before taking pictures.

Near the [Sri Aurobindo Ashram](/discover/landmarks/ashram), visitors are expected to maintain silence. Loud conversations, music and unnecessary photography should be avoided. Many people visit the Ashram for meditation and reflection rather than sightseeing.

Churches should also be visited respectfully. During prayer services, visitors should remain quiet and avoid interrupting worshippers.

Public displays of affection that may be acceptable in some countries can attract unwanted attention in conservative areas.

**Photography**

Photography is one of the highlights of any visit to Pondicherry. White Town, the Promenade, colourful colonial buildings, churches and beaches provide excellent opportunities for memorable pictures.

However, always seek permission before photographing local residents, fishermen at work, street vendors or children. Respect privacy and avoid obstructing roads or entrances while taking photographs.

Some museums, religious buildings and government offices may prohibit photography or charge a camera fee.

Drone photography is regulated under Indian aviation rules. Flying drones near government buildings, military establishments or restricted areas is prohibited without the necessary permissions.

**Shopping**

Shopping in Pondicherry ranges from handicrafts and handmade paper products to pottery, incense, textiles, leather goods and locally made chocolates.

Government-run handicraft stores and established boutiques generally have fixed prices. Small roadside stalls may allow limited bargaining, but aggressive negotiation is neither expected nor appreciated.

If purchasing expensive handicrafts or artwork, request a proper invoice.

**Families and Senior Citizens**

Pondicherry is particularly suitable for family holidays because most attractions are close together and easy to access.

Parents should carry hats, drinking water and sunscreen for children, especially during afternoon sightseeing. Elderly visitors may find the early morning and evening hours more comfortable for walking along the promenade or exploring White Town.

Many cafés and restaurants provide child-friendly menus, while parks and open spaces offer pleasant places for families to relax.

**Accessibility**

Several modern hotels, shopping centres and restaurants provide ramps and lifts for visitors with reduced mobility. However, older heritage buildings and some narrow streets in White Town may have uneven pavements or steps.

Visitors using wheelchairs should check accessibility directly with hotels and attractions before visiting.

**Festivals and Busy Periods**

Pondicherry becomes particularly busy during New Year celebrations, Christmas, long weekends and major public holidays. Hotel occupancy increases significantly during these periods, and restaurant waiting times become longer.

The city also celebrates Tamil festivals with enthusiasm, and local processions may temporarily affect traffic around temples.

If you prefer quieter sightseeing, plan visits to popular attractions early in the morning.

**Responsible Tourism**

Pondicherry's charm depends on visitors helping preserve its heritage and natural beauty.

Avoid littering beaches or public spaces. Dispose of waste only in designated bins. Do not climb onto heritage monuments or the granite sea wall along the promenade, as this can be dangerous.

Support local artisans by purchasing genuine handmade products instead of mass-produced souvenirs. Respect residential neighbourhoods by keeping noise levels low, especially during early mornings and late evenings.

Wildlife, including birds along the coast, should be observed without disturbance.

**Useful Travel Tips**

• Most attractions are within a short distance of each other, making walking one of the best ways to experience White Town.

• Traffic is generally lighter than in most major Indian cities, but weekends and holidays can become congested around the Promenade and Mission Street.

• Public toilets are available at several tourist locations, shopping areas and major public spaces, although carrying tissues and hand sanitiser is advisable.

• Mobile network coverage is generally reliable throughout the city.

• Carry sunscreen, sunglasses and a reusable water bottle when sightseeing.

• Comfortable footwear makes exploring the heritage streets much more enjoyable.

• Sunrise and sunset along the Bay of Bengal are among Pondicherry's highlights. Arriving a little early ensures the best experience.

A little preparation goes a long way in Pondicherry. Respect local customs, take care around the sea, stay hydrated, and slow down enough to enjoy the city's unique blend of history, spirituality and coastal charm. With its welcoming atmosphere and leisurely pace, Pondicherry rewards visitors who explore it thoughtfully rather than hurriedly.`,
    faq: [
      { question: "Is Pondicherry safe for families?", answer: "Yes. It is widely regarded as one of the safest destinations in South India for family holidays." },
      { question: "Can I use UPI everywhere?", answer: "Most businesses accept UPI, although carrying a small amount of cash is recommended for minor purchases." },
      { question: "Is bargaining expected?", answer: "Only at some street markets. Fixed-price stores do not negotiate." },
      { question: "Can I drink alcohol on the beach?", answer: "No. Alcohol consumption in public places, including beaches and the promenade, is prohibited." },
      { question: "Are beaches open at night?", answer: "Public access is generally available, but swimming after dark is unsafe and not recommended." },
      { question: "Can I photograph everything?", answer: "Most outdoor locations are open for photography, but always respect restrictions inside religious places, museums and government premises." },
      { question: "Is Pondicherry safe for solo travelers?", answer: "Pondicherry is generally considered safe for solo travelers, including women. The main tourist areas are active throughout the day, and White Town is usually well frequented. As in any destination, it is wise to avoid isolated areas late at night, keep valuables secure, and use trusted transport services. Following normal travel precautions is usually sufficient for a comfortable visit." },
    ],
  },
  {
    id: "healthcare-emergency",
    section: "service",
    title: "Healthcare and emergencies",
    summary:
      "Pondicherry has good hospital facilities by South Indian standards. JIPMER is one of the best public hospitals in India. Carry bottled water, sunscreen, and insect repellent from day one.",
    body: `**Hospitals**

Pondicherry General Hospital is on Rue Victor Simonnel, in the centre of town. JIPMER (Jawaharlal Institute of Postgraduate Medical Education and Research) is a major government teaching hospital south of the centre and one of the best public hospitals in South India. Private hospitals include the Pondicherry Institute of Medical Sciences (PIMS).

**Pharmacy**

Several pharmacies operate in the central area. Most close by 9pm; check locally for current 24-hour options. Nehru Street has a good concentration of pharmacies for basic supplies.

**Private doctors**

Private medical consultations are available across the city. Your hotel can direct you to the nearest clinic. Consultation fees are significantly lower than in Western countries.

**Emergency numbers**

Police: 100
Ambulance: 108
Fire: 101
General emergency: 112

**General safety**

Pondicherry is a safe city for visitors. Standard city precautions apply: be aware of your belongings in crowded markets, use negotiated fares for rickshaws, and carry a copy of your passport rather than the original. Streets in the White Town are largely quiet after 10pm; avoid walking alone late at night in unfamiliar areas.

**More detail**

For a full list of hospitals, private clinics, and pharmacies, see our complete guide to [healthcare in Pondicherry](/plan/healthcare).`,
  },
  {
    id: "sun-water-health",
    section: "service",
    photo: "sun-water-health.webp",
    title: "Sun & Health",
    summary:
      "Drink only bottled or filtered water. The sun is intense year-round. Insects carry dengue during the monsoon months, so repellent is important after dusk.",
    body: `**Water**

Never drink tap water in Pondicherry. Use sealed bottled water or boiled and filtered water at all times. At street food stalls and small local restaurants, avoid drinks served with ice: the ice is rarely made from filtered water. In tourist-facing cafés and good restaurants, ice is generally safe, but ask if you are unsure.

**Heat**

Even in the cooler months of December and January, midday temperatures in direct sun are significant. From March through June the heat is intense: avoid going out between 11am and 4pm if you can help it. Schedule temple visits and White Town walks for early morning (before 9am) or late afternoon (after 4pm). Carry water, wear a hat, and reapply sunscreen every two hours.

**Insects and dengue**

Pondicherry sits in a region where dengue fever is a known risk, particularly from July through November during and after the monsoon. Apply insect repellent (DEET-based or equivalent) before going out in the evenings. Loose long-sleeved clothing at dusk helps considerably. If you develop a sudden high fever after returning from your trip, mention your travel history to a doctor.

**Stomach**

If you are not accustomed to very spicy food, take the first couple of days gently with street food. South Indian cuisine in Pondicherry is excellent but can be hotter than the menu description suggests. Carry oral rehydration salts (ORS) as a precaution: they are sold in any pharmacy and are useful for rehydrating quickly after a hot day.`,
  },

  // ── TIPS ──────────────────────────────────────────────────────────────────

  {
    id: "when-to-visit",
    section: "tips",
    photo: "when-to-visit.jpg",
    title: "When to visit",
    summary:
      "October to March is the dry season and the best time to visit. The monsoon (July to October) brings heavy rain and some closures but also lower prices and a different kind of beauty.",
    body: `**October to March (recommended)**

The dry season is the main visitor period. Temperatures run from the mid-twenties in December and January to the mid-thirties by March. Book accommodation well in advance, especially on weekends, when domestic visitors from Chennai fill the hotels. The annual farm festival at the Botanical Gardens takes place on the second weekend of February, with free entry and an evening fireworks display.

**April to June (hot season)**

April through June is very hot, with temperatures regularly reaching 38 to 40 degrees Celsius. This is the quietest period for tourism. If you travel during this window, keep mornings and evenings for outdoor activity and rest during the afternoon hours.

**July to October (monsoon)**

Heavy rainfall arrives from July, driven by the southwest monsoon, and Pondicherry also receives the northeast monsoon in October and November. Some restaurants, cafés, and guesthouses reduce hours or close. Prices are lower and advance booking is less critical. The coast can be dramatic in a storm, and the colours of the French Quarter buildings are sharper in the rain.

**Weekdays vs weekends**

Pondicherry is a favourite weekend destination for Chennai residents, which means the French Quarter cafés and streets are noticeably busier on Saturdays and Sundays. If you can arrive on a weekday, the atmosphere is calmer and tables are easier to find.`,
    faq: [
      { question: "What is the best time of year to visit Pondicherry?", answer: "The most pleasant season is from November to February, when temperatures are cooler and humidity is lower. This period is ideal for walking tours, beach visits, and exploring [Auroville](/discover/auroville). March to June can be very hot, while October and November may experience occasional rainfall from the northeast monsoon. Travelers looking for comfortable weather generally prefer the winter months." },
    ],
  },
  {
    id: "dress-and-comfort",
    section: "tips",
    photo: "dress-and-comfort.jpg",
    title: "Dress Code",
    summary:
      "Light cotton or linen clothing suits the climate year-round. Temples and the ashram require covered shoulders and knees. The best hours for walking are before 9am and after 4pm.",
    body: `**Clothing for the climate**

Pondicherry is warm throughout the year. Light cotton or linen in loose fits is the most practical choice: synthetics trap heat and feel uncomfortable quickly. Pack a layer for air-conditioned restaurants and taxis, which can be very cold by contrast. Evenings call for light long-sleeved clothing, as much to ward off insects as for warmth.

**Temple and ashram dress code**

At all Hindu temples, cover shoulders and knees: this applies to men as well as women. Shorts and sleeveless tops are not acceptable at religious sites. Most temples also ask you to remove your shoes before entering; leave them at the entrance or in the designated area. At [Sri Aurobindo Ashram](/discover/landmarks/ashram), modest and respectful clothing is required: no shorts, no bare shoulders.

**Shoes**

Comfortable, easy-to-remove shoes are a practical asset. You will take your shoes off repeatedly at temples, at some restaurants and homes, and at the ashram. Sandals or slip-ons work well. The White Town's streets are largely flat but some of the older lanes have uneven surfaces: proper footwear matters.

**Timing your walks**

The best light in the French Quarter falls between 6am and 9am. The streets are quiet, the air is cooler, and the bougainvillea against the yellow and ochre facades is at its most vivid. The late afternoon, from about 4pm to dusk, is the second-best window. Midday sun in summer is fierce: do not underestimate it.`,
  },
  {
    id: "opening-hours",
    section: "tips",
    photo: "opening-hours.png",
    title: "Opening Hours",
    summary:
      "Plan around specific closing times: the last ferry to Paradise Beach leaves at 4pm and the Auroville Visitor Centre closes at 5:30pm. The ashram follows a strict daily schedule.",
    body: `**Sri Aurobindo Ashram**

The ashram is open from 8am to noon and from 2pm to 6pm most days. Switch your phone to silent before entering. Remove your shoes at the entrance. Maintain silence near the samadhi, the central meditation space. Photography is not appropriate inside the ashram buildings.

**Auroville**

Private vehicles are not permitted inside the main Auroville area for casual visitors. Park at the Visitor Centre and walk or take the shuttle from there. The Visitor Centre is open from 9am to 5:30pm daily. Viewings of the [Matrimandir](/discover/auroville/the-matrimandir) (the golden meditation sphere at the heart of Auroville) require a pass collected in person from the Visitor Centre: passes cannot be booked online. Arrive early as numbers are limited. More information at auroville.org.

**Chunnambar Boat House and Paradise Beach**

The last public ferry from Chunnambar Boat House to Paradise Beach departs at 4pm. If you miss it, there is no other way to reach the beach. Allow time for the return journey as well: the last boat back leaves the beach at 5pm. Check current schedules at the boat house on arrival as timings occasionally vary by season.

**Pondicherry Museum**

Open from 10am to 5pm, closed on Mondays. Photography is not allowed inside. The archaeological and French colonial collections are worth an hour of your time — see our [full guide to the museum](/discover/landmarks/museum) for what's on display.

**Botanical Garden**

Open from 10am to 5pm, closed on Tuesdays. The garden is small but pleasant in the early morning. The aquarium within the garden complex keeps separate hours. Read more in our [guide to the Botanical Garden](/discover/landmarks/botanical-garden).

**Auroville Lighthouse**

Open to visitors until 5pm. The lighthouse offers the best elevated views of the Coromandel Coast in the area. Allow 30 minutes for the visit.`,
  },
  {
    id: "practical-tips",
    section: "tips",
    photo: "practical-tips.png",
    title: "Good to Know",
    summary:
      "Currency, bargaining, temples, photography, tipping, language, Union Territory status, and the Sunday market.",
    body: `**Currency**

The Indian rupee (INR) is the only currency accepted. ATMs are available throughout the White Town and central Pondicherry. Cards are accepted in most tourist-facing restaurants and hotels in the French Quarter. Carry cash for markets, auto-rickshaws, temples, and smaller restaurants: card payment is not universal. UPI payment via QR code is increasingly common in local shops.

**Union Territory status**

Pondicherry is a Union Territory of India, not part of Tamil Nadu, and this has a practical consequence for visitors: alcohol, perfume, and cigarettes are subject to lower taxes here than in the surrounding state. Beer, wine, and spirits are more openly available in restaurants and shops. Good-quality French perfumes from the local boutiques are noticeably cheaper than in Tamil Nadu or most of mainland India.

**Bargaining**

Expected in markets and when negotiating auto-rickshaw fares. In shops and restaurants with posted prices, the price is fixed. At the Sunday market and street stalls, bargaining is standard: start at about half what you expect to pay and settle somewhere in between.

**Swimming**

Do not swim at the Promenade (Rock Beach) or the main seafront. The currents along the Pondicherry coast are strong and the surf can be deceptive. Paradise Beach at Chunnambar is calmer but still requires caution: swim only in designated areas and pay attention to local warnings.

**Temples**

All Hindu temples require you to remove shoes before entering. Most request that shoulders and knees are covered. Some temples restrict entry to non-Hindus in the inner sanctum; signs at the entrance will tell you. A small donation in the collection box is customary.

**Photography**

The French Quarter is beautiful to photograph and nobody will object to pictures of buildings and streets. Inside temples, photography rules vary: look for signs or ask before raising your camera. The Puducherry Museum does not allow photography inside.

**Tipping**

Not expected in small local restaurants or at street food stalls. In tourist-facing cafés and restaurants, 10% is appreciated but not mandatory. Round up auto-rickshaw fares if the driver was helpful.

**Language**

Tamil is the local language. French remains in use in some institutional contexts but is not widely spoken on the street. English is widely understood in the French Quarter and in most tourist-facing businesses.

**Sunday market**

The Sunday market on Mahatma Gandhi Street runs from around 10am through the afternoon. Second-hand furniture, vintage electronics, clothes, tools, and street food. Very crowded, entirely local, and worth a visit.`,
    faq: [
      { question: "How many days are enough for Pondicherry?", answer: "Two to three days are enough to see the main attractions, including White Town, the promenade, local cafés, markets, and [Auroville](/discover/auroville). A longer stay of four to five days allows time for nearby beaches, cultural activities, French language classes, cycling, yoga, and more relaxed exploration. Many visitors find that a long weekend offers a good balance between sightseeing and leisure." },
      { question: "Can I use international credit cards in Pondicherry?", answer: "Yes. Most hotels, restaurants, cafés, and larger shops in White Town and major tourist areas accept international credit and debit cards. However, smaller local stores, markets, auto-rickshaws, and some guesthouses may prefer cash or Indian digital payment methods. It is a good idea to carry a moderate amount of Indian rupees for small purchases, local transport, and places that do not accept cards." },
      { question: "What are the alcohol rules in Pondicherry?", answer: "Pondicherry is known for having lower alcohol taxes than many Indian states, which makes alcoholic beverages relatively inexpensive. Alcohol can be purchased from licensed shops and served in authorized restaurants and bars. Public drinking is not permitted, and travelers should respect local regulations regarding age limits and consumption. If you plan to take alcohol outside the union territory, the destination state's rules will apply." },
      { question: "Can I transport alcohol purchased in Pondicherry?", answer: "Alcohol purchased in Pondicherry can generally be carried for personal consumption, but the quantity allowed varies according to the regulations of the state you are entering. Neighboring states may impose limits, and excess quantities can be confiscated during inspections. Travelers should keep purchase receipts and avoid carrying large amounts. For the most reliable information, check the current excise rules of your destination state before traveling." },
    ],
  },
];

export function getPracticalTopic(id: string): PracticalTopic | undefined {
  return practicalTopics.find((t) => t.id === id);
}

export function getPracticalSection(section: PracticalSection): PracticalTopic[] {
  return practicalTopics.filter((t) => t.section === section);
}
