export type FestivalCategory =
  | "spiritual"
  | "hindu"
  | "christian"
  | "muslim"
  | "french"
  | "civic"
  | "arts";

export type FestivalMonth =
  | "jan" | "feb" | "mar" | "apr" | "may" | "jun"
  | "jul" | "aug" | "sep" | "oct" | "nov" | "dec";

export interface Festival {
  id: string;
  title: string;
  category: FestivalCategory;
  month: FestivalMonth;
  when: string;
  calendarNote?: string;
  teaser: string;
  body: string;
  website?: string;
  photo?: string;
  photoPosition?: string;
  photoAspectRatio?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const festivals: Festival[] = [
  {
    id: "christmas",
    metaTitle: "Christmas in Pondicherry, French and Tamil Traditions",
    metaDescription: "Christmas in Pondicherry blends French pastry culture, Tamil Catholic traditions, and celebrations in three grand colonial churches.",
    title: "Christmas",
    category: "christian",
    month: "dec",
    when: "December 25, with the Mission Street market running through most of December",
    teaser:
      "Christmas in Pondicherry is unlike anywhere else in India: French pastry culture, Tamil Catholic tradition, and three grand colonial churches combine in a way that is entirely particular to this city.",
    photo: "christmas-pondicherry.jpg",
    body:
      "**The churches**\n\nThree churches define Christmas in Pondicherry. The Immaculate Conception Cathedral on Mission Street is the oldest: founded in 1688 and rebuilt in its current Baroque form in 1791. The Basilica of the Sacred Heart of Jesus on South Boulevard, built in neo-Gothic style in 1908, holds a grand midnight mass on Christmas Eve. [Notre-Dame des Anges](/discover/landmarks/notre-dame), completed in 1855 on the seafront, is the most photographed church in the city. All three hold midnight masses on December 24. At midnight precisely, the lights throughout each building go dark and candles are lit across the congregation. Arrive early for seats.\n\n**Mission Street**\n\nFrom early December, the pavement opposite the Immaculate Conception Cathedral becomes an outdoor Christmas market. Vendors set up stalls selling handcrafted paper stars, tinsel, clay Nativity sets, and oversized decorative lanterns. The paper stars are hung outside Christian homes across Pondicherry through the season, representing the star of Bethlehem. Items are sourced from local artisans and from craftspeople in Cuddalore. At dusk, when the stall lights come on and the stars begin to glow at street junctions, Mission Street is worth a slow walk.\n\n**The bakeries**\n\nPondicherry's French pastry culture asserts itself at Christmas with particular energy. Artisanal chocolate Easter eggs (filled with fresh cream and white chocolate), hot cross buns, marzipan bunnies, French meringues, coconut plum cake, and cardamom cookies appear in patisseries across the White Town. Bread and Chocolate on Rue Suffren is reliable. Grand Bakery and Bon Bakes produce their own seasonal ranges. Come in the morning for the best selection.\n\n**Events**\n\nThe Arboretum at ECR (East Coast Road) typically holds its annual Marché de Noël in mid-December, with local designers, food producers, and artisans. The Peace Garden near Auroville hosts a family-friendly two-day Christmas event in late December, with live music, workshops, and food. For a quieter observance, Auroville holds small community gatherings through the season. Check the [Alliance Française de Pondichéry](/history/institutions/alliance-francaise) and local event listings for the current year's programme.",
  },

  {
    id: "new-year",
    metaTitle: "New Year in Pondicherry, Beach Road and White Town",
    metaDescription: "Pondicherry's New Year brings beachfront crowds, White Town music, and December's cool sea breeze for a relaxed celebration.",
    title: "New Year",
    category: "civic",
    month: "dec",
    when: "December 31 into January 1",
    photo: "happy-new-year.jpg",
    photoPosition: "center 25%",
    teaser:
      "Pondicherry's New Year is, by Indian city standards, unusually calm: beachfront crowds along the Promenade, music drifting through the White Town, and December's cool dry air making it the most comfortable night of the year to be outside.",
    body:
      "**The night**\n\nOn December 31, Pondicherry gathers at two places: the Promenade Beach and the lanes of the White Town. December is the coolest and driest month on the Coromandel Coast, which makes New Year's Eve genuinely pleasant outdoors. The sea is close, the air is clear, and the informal tradition of counting down at the water's edge has been established for decades. Hotels and bars along Rue Dumas and Rue Suffren host ticketed parties. The pavements of the French Quarter fill with music and people drifting between them.\n\n**Eating well**\n\nThe French Quarter's restaurants offer special New Year menus, mixing French culinary technique with Tamil coastal ingredients in the way that is particular to this city. Book well in advance. Many good tables are gone weeks before December 31. For something more casual, the street food along Beach Road and around Gandhi Thidal is ample and excellent late into the night.\n\n**The morning after**\n\nJanuary 1 in Pondicherry is slow and beautiful. A walk along the Promenade at dawn, when the fishing boats are coming in and the city is still quiet, is one of the best free things the city offers at any time of year. The International Yoga Festival begins four days later (January 4 to 7), if your resolutions run in that direction.",
  },

  {
    id: "yoga-festival",
    metaTitle: "International Yoga Festival, Puducherry Since 1993",
    metaDescription: "Since 1993, Puducherry has hosted a four-day yoga gathering with masters, scholars, and practitioners at the Old Port Convention Centre.",
    title: "International Yoga Festival",
    category: "spiritual",
    month: "jan",
    when: "January 4 to 7, annually",
    teaser:
      "Since 1993, the Government of Puducherry has organized a four-day gathering of yoga masters, scholars, and practitioners at the Convention Centre on the Old Port premises. Free board and lodging for registered delegates. Open to everyone.",
    body:
      "**What happens**\n\nThe International Yoga Festival is Pondicherry's opening event of the cultural year. Since 1993, the Government of Puducherry has organized it at the Convention Centre, Old Port Premises, drawing yoga masters, Ayurvedic scholars, and practitioners from across India and abroad. January 4 is registration day; the official inauguration and a cultural programme follow in the evening. January 5, 6, and 7 are filled with discourses, workshops, lecture demonstrations, bhajans, guided meditation, and Yogasana competitions for men and women across age groups.\n\n**The Yogasana competitions**\n\nThe competitions are the theatrical centrepiece of the festival. Participants from across India demonstrate asana sequences, judged on precision, control, and form. The Champion of the Meet is announced on the morning of January 7, followed by the prize distribution and valedictory ceremony that evening. Watching the competitions requires no special ticket beyond festival registration.\n\n**Yogic food and the Aurobindo connection**\n\nThe festival serves Yogic food throughout: a diet based on Ayurvedic principles, vegetarian, carefully prepared. Pondicherry is not an arbitrary host. [Sri Aurobindo](/history/lives-and-legacies/sri-aurobindo), one of the most significant philosopher-yogis of the 20th century, chose this city for his life's work and spent forty years here developing Integral Yoga. The ashram he founded on [Marine Street](/discover/white-town/marine-street) remains the largest single institution in the White Town.\n\n**Registration and practical details**\n\nRegistered delegates receive free board and lodging during the festival. Observers arrange their own accommodation. Registration is available online in advance and by spot registration at the venue on January 4. Participants should appear in person at the Convention Centre on that day to confirm registration and collect the kit, which contains the day-by-day timetable. Contact the Tourism Department of Puducherry at pondytourism@gmail.com or call +91 413 2358570.",
    website: "pondytourism@gmail.com",
    photo: "yoga-festival.jpg",
  },

  {
    id: "pongal",
    metaTitle: "Pongal in Pondicherry, Four Days of Tamil Harvest Traditions",
    metaDescription: "Pongal fills Pondicherry with fresh-boiled rice, decorated cattle, kolams, and the communal cry of Pongalo Pongal across four days.",
    title: "Pongal",
    category: "hindu",
    month: "jan",
    when: "January 13 to 16 each year (Thai Pongal, the main day, is always January 14)",
    calendarNote:
      "Pongal is fixed to the Tamil solar calendar: the sun's entry into Makaram (Capricorn) determines the date. Thai Pongal falls on January 14 in most years. Unlike most Hindu festivals, Pongal does not follow the lunar calendar and its Gregorian date is stable.",
    teaser:
      "The most important Tamil festival of the year: four days in mid-January, rooted in the harvest cycle, celebrated in courtyards and on doorsteps across Pondicherry with fresh-boiled rice, garlanded cattle, and the communal shout of Pongalo Pongal.",
    body:
      "**Four days**\n\nPongal unfolds across four consecutive days in mid-January. Bhogi (January 13) opens with dawn bonfires: families burn old possessions and clean their homes, making way for the new. Thai Pongal (January 14) is the central day. Fresh rice is cooked outdoors in a decorated clay pot; when the milk boils over the rim, the family shouts 'Pongalo Pongal,' welcoming abundance for the year. The pot and its contents are offered to the sun before anyone eats. Mattu Pongal (January 15) honours the cattle: bullocks are bathed, their horns painted in bright colours and fitted with bells, and they are led through the streets to music. Kanum Pongal (January 16) is for family visits and picnics; the Promenade Beach is unusually crowded.\n\n**The food**\n\nTwo dishes define the festival. Sakkarai Pongal is a sweet preparation: newly harvested rice cooked with jaggery, ghee, and cashews. Ven Pongal is savoury: rice with split moong dal, cracked pepper, cumin, and curry leaves. Both are prepared in the decorated pot, outdoors in sunlight. Freshly cut sugarcane is distributed. Many small restaurants in Pondicherry serve a Pongal thali on January 14.\n\n**Why the date is stable**\n\nPongal marks the sun's entry into the zodiac sign of Makaram (Capricorn), the beginning of Uttarayan, the sun's northward journey. This is a solar event, tied to the Tamil solar calendar, not the lunar. Thai Pongal is always January 14. This distinguishes Pongal from festivals like Diwali or Ganesha Chaturthi, which follow the lunisolar calendar and shift by several weeks from year to year.\n\n**In Pondicherry**\n\nPongal in Pondicherry is a neighbourhood festival: not a parade or a public spectacle, but something lived in courtyards and family kitchens. The Tamil quarter west of the canal and the residential streets of the White Town both observe it. Walk through the streets on the morning of January 14 and you will smell the fresh rice cooking and see the kolam designs drawn in rice powder on the pavements outside homes.",
    photo: "pongal.jpg",
  },

  {
    id: "republic-day",
    metaTitle: "Republic Day in Pondicherry, Parade on Goubert Avenue",
    metaDescription: "Republic Day features flag-hoisting, military and school parades, gallantry awards, and tricolour illuminations along the seafront.",
    title: "Republic Day",
    category: "civic",
    month: "jan",
    when: "January 26 each year",
    teaser:
      "India's Republic Day is marked in Pondicherry with a formal flag-hoisting ceremony on Goubert Avenue, a military and school parade, gallantry awards, and tricolour illuminations along the seafront through the night.",
    body:
      "**The ceremony**\n\nOn January 26, the Lieutenant Governor of Puducherry hoists the national flag at Beach Road (Goubert Avenue) and takes the salute at a formal parade. Police contingents, armed services units, and columns of school children march along the scenic seafront. Gallantry Awards, the President's Medal for meritorious service, and state honours are presented publicly during the ceremony. The citations are read aloud. This is a formal civic occasion, conducted with seriousness.\n\n**The illuminations**\n\nFrom the evening of January 25 through January 26, government buildings, the Gandhi Statue, the [French War Memorial](/discover/landmarks/war-memorial), and landmarks along the seafront are lit with tricolour lighting. A walk along the Promenade at dusk on Republic Day, from the War Memorial to the Lighthouse and back, is worth the effort. The seafront looks different with the buildings lit up.\n\n**Pondicherry University and JIPMER**\n\nBeyond the main ceremony, institutions like Pondicherry University and JIPMER (Jawaharlal Institute of Postgraduate Medical Education and Research) hold their own flag-hoisting ceremonies, student marches, and cultural programmes on January 26. If you are near either campus, the events there are often more intimate than the main parade.",
    photo: "republic-day.jpg",
    photoPosition: "center 60%",
  },

  {
    id: "mothers-birthday",
    metaTitle: "The Mother's Birth Anniversary at Sri Aurobindo Ashram",
    metaDescription: "The Ashram marks Mirra Alfassa's birthday with silent meditations, collective readings, and the rare opening of her private room.",
    title: "The Mother's Birth Anniversary",
    category: "spiritual",
    month: "feb",
    when: "February 21 each year",
    teaser:
      "The Sri Aurobindo Ashram marks the birthday of Mirra Alfassa, known as The Mother, with silent meditations at the Samadhi, collective readings, and the rare opening of her private room to visitors.",
    body:
      "**Who the Mother was**\n\nMirra Alfassa was born in Paris on February 21, 1878. She arrived in Pondicherry in 1914, and from 1926 until her death on November 17, 1973, she co-founded and ran the [Sri Aurobindo Ashram](/discover/landmarks/ashram) with [Sri Aurobindo](/history/lives-and-legacies/sri-aurobindo). After his death in 1950, she guided the community alone for another twenty-three years, running its schools, workshops, and correspondence, directing its daily practice of Integral Yoga, and conceiving the international township of [Auroville](/discover/auroville/what-is-auroville), which was inaugurated in 1968. She was 95 when she died.\n\n**The celebration at the Ashram**\n\nFebruary 21 is one of the most significant days in the ashram's calendar. The Samadhi, the white marble shrine in the central courtyard where both Sri Aurobindo and the Mother are interred, draws a continuous stream of meditators from before dawn. Collective readings from her writings accompany the silent prayers throughout the day. The Mother's personal room, normally closed to visitors, is opened on her birthday.\n\n**At Auroville**\n\nThe international township 10 km north of Pondicherry holds a dawn meditation at the Matrimandir Amphitheatre. The amphitheatre is decorated with fresh flowers. A few Aurovilians still in the community met the Mother during her final years; their presence at these gatherings is something rare and not announced.\n\n**Planning your visit**\n\nFebruary 21 draws large numbers of devotees and spiritual tourists. Book accommodation several weeks in advance. Dress modestly at the ashram: shoulders and knees covered. The ashram website (sriaurobindoashram.org) publishes its programme for the day.",
    website: "sriaurobindoashram.org",
    photo: "mothers-birthday-color.jpg",
    photoPosition: "center 30%",
  },

  {
    id: "masi-magam",
    metaTitle: "Masi Magam in Pondicherry, Temple Processions to the Sea",
    metaDescription: "Dozens of temple deities are carried through Pondicherry to Vaithikuppam Beach for a ceremonial bath in the Bay of Bengal.",
    title: "Masi Magam",
    category: "hindu",
    month: "feb",
    when: "Tamil month of Masi, during the Makam (Magha) nakshatra. Usually falls in late February or early March.",
    calendarNote:
      "The date follows the Tamil lunisolar calendar. The month of Masi runs approximately February 13 to March 13. Masi Magam occurs when the moon occupies the Makam (Magha) nakshatra within Masi, typically on the full moon day. The exact Gregorian date shifts each year. Confirm the current year's date with the Tamil panchangam or at pondytourism.com.",
    teaser:
      "On Masi Magam, the deities of dozens of temples across Pondicherry are carried in long street processions to Vaithikuppam Beach for a ceremonial bath in the sea. Thousands of devotees follow them into the water.",
    body:
      "**What happens**\n\nOn the day of Masi Magam, temple priests carry the principal deities out of their sanctuaries in palanquins and process through the streets to the sea at Vaithikuppam Beach, north of Pondicherry town. The processions move slowly, with nagaswaram (classical wind instrument) and temple drums audible for hours before the deities arrive. Devotees line the streets to offer prayers as the palanquins pass. At the beach, the idols receive the Theerthavari, a ceremonial bath in the sea. Devotees then take their own dip in the waves alongside the deities, believing the waters are sanctified and wash away accumulated sins, including ancestral ones.\n\n**Why this day**\n\nMasi Magam falls when the moon occupies the Makam (Magha) nakshatra during the Tamil month of Masi. Makam is the birth star of kings and ancestors, and the alignment with the full moon is considered one of the most powerful of the year. The Tamil tradition holds that on this day, divine beings descend to earth and blessings are unusually accessible. It is also believed that whoever bathes in the sea during Masi Magam receives salvation.\n\n**The spectacle**\n\nMasi Magam in Pondicherry draws temples from across the Union Territory and neighbouring Tamil Nadu districts. By the time the processions converge on the beach, the shore is packed. The event is colourful, loud, and genuinely extraordinary. It is one of the largest religious gatherings in the region and one of the most visually immersive things you can witness in Pondicherry.\n\n**Finding the date**\n\nThe Gregorian date changes each year. For the current year's date, check the Tamil panchangam or contact Pondicherry Tourism at pondytourism@gmail.com.",
    website: "pondytourism@gmail.com",
    photo: "masi-magam.jpg",
    photoPosition: "top",
  },

  {
    id: "auroville-day",
    metaTitle: "Auroville Day, Silent Dawn Gathering at the Matrimandir",
    metaDescription: "Auroville marks its founding with a 4:45 AM silent gathering at the Matrimandir Amphitheatre, without phones, bags, or cameras.",
    title: "Auroville Day",
    category: "spiritual",
    month: "feb",
    when: "February 28 each year",
    teaser:
      "Auroville marks its founding anniversary with a silent dawn gathering at the Matrimandir Amphitheatre at 4:45 AM. Phones, bags, and cameras are prohibited. It is not a celebration in any ordinary sense.",
    body:
      "**The founding**\n\nOn February 28, 1968, several thousand young people from 124 countries gathered on a stretch of eroded red plateau 10 km north of Pondicherry. Each carried a handful of earth from their homeland in a small clay urn. The urns were poured into a central marble urn, which still stands at the heart of Auroville today. That was the beginning: a city designed for human unity, outside any creed or nationality, dedicated to the ideals that the Mother had set out and that [Sri Aurobindo](/history/lives-and-legacies/sri-aurobindo) had worked toward for decades. The plateau has since become a forest.\n\n**The anniversary**\n\nEvery February 28, Auroville marks this moment. The central event is a silent gathering at the Matrimandir Amphitheatre at 4:45 AM, before sunrise. Recordings of the Mother's voice are played. Flowers are arranged. Aurovilians and guests sit together in silence as dawn comes. It is not a performance or ceremony in the conventional sense. For those who come with the right disposition, it is extraordinary.\n\n**Practical rules**\n\nCellphones, bags, and cameras are strictly prohibited inside the Amphitheatre and the Park of Unity. You must leave them at a designated custody facility before entering. The community enforces this absolutely. Plan accordingly.\n\n**How to attend**\n\nAuroville is 10 km north of Pondicherry. The township has its own guesthouses. For the anniversary programme and visitor guidelines, see auroville.org.",
    website: "auroville.org",
    photo: "auroville-day.jpg",
  },

  {
    id: "heritage-festival",
    metaTitle: "Pondicherry Heritage Festival, Walks, Talks and Kayaking",
    metaDescription: "A month of heritage walks, kayaking, architectural sketching, conservation talks, and school events focused on Pondicherry's history.",
    title: "Pondicherry Heritage Festival",
    category: "arts",
    month: "mar",
    when: "Late February through early April each year. Duration and programme vary.",
    teaser:
      "A month-long series of heritage walks, kayaking trips, architectural sketch meets, conservation talks, and school competitions organized by the civic groups that defend Pondicherry's built fabric. The most serious introduction to what makes this city unusual.",
    body:
      "**What it is**\n\nThe Pondicherry Heritage Festival is not a single event but an extended programme organized annually by PondyCAN (Pondicherry Citizens Action Network), People for Pondicherry's Heritage, and INTACH (Indian National Trust for Art and Cultural Heritage, Pondicherry chapter). It runs from late February through early April, using the coolest months of the year to bring residents and visitors into direct contact with the city's built and natural heritage.\n\n**The programme**\n\nGuided architectural walks move through the French and Tamil quarters: a local expert points out 18th-century compound walls, carved door frames, Indo-French verandas, and the Dutch-laid street grid that the French preserved for two and a half centuries. Outdoor activities include guided kayaking, mangrove boat rides, and cycling trails to coastal wetlands. Archaeological excursions run to [Arikamedu](/discover/explore/daytrip-arikamedu), the ancient Indo-Roman trading port just south of the city, active between the 3rd century BC and the 4th century AD. Community sketch meets for artists are held at sites like the Ayi Mandapam. Conservation talks take place at the French Institute of Pondicherry (IFP) on subjects from climate science to heritage law and urban planning.\n\n**Why it matters**\n\nPondicherry's built fabric is under sustained development pressure. The heritage festival is simultaneously a celebration and an argument: that the city's architecture, its street grid, its trees, and its coastal ecology are worth protecting. The conservation talks are often vigorous and occasionally contentious. Attending them gives you a more honest picture of the city than any hotel brochure.\n\n**How to follow it**\n\nCheck the Pondicherry Heritage Festival website and the Pondicherry Heritage Instagram page for the current year's programme. The [Alliance Française de Pondichéry](/history/institutions/alliance-francaise) and the French Institute of Pondicherry (IFP) are key venues. Most events are free or very low cost.",
    website: "pondicherryheritage.org",
    photo: "heritage-festival.png",
  },

  {
    id: "easter",
    metaTitle: "Easter in Pondicherry, Midnight Masses and French Pastries",
    metaDescription: "Easter brings midnight masses, a Way of the Cross procession, handmade chocolate eggs, marzipan bunnies, and French meringues.",
    title: "Easter",
    category: "christian",
    month: "apr",
    when: "First Sunday after the full moon following the spring equinox of March 21. Easter 2026 falls on April 5. Easter 2027 falls on March 28.",
    calendarNote:
      "Easter follows the Western Christian computus: it is the first Sunday after the paschal full moon (the first ecclesiastical full moon on or after March 21). The date moves between March 22 and April 25. This is not the Julian calendar: the Eastern Orthodox Easter uses a different calculation and falls on a different date.",
    teaser:
      "Easter in Pondicherry is the most French-inflected Christian festival in India: midnight masses in three grand colonial churches, a 'Way of the Cross' procession through the streets, and the city's bakeries producing handmade chocolate eggs, marzipan bunnies, and French meringues for the season.",
    body:
      "**Holy Week**\n\nEaster in Pondicherry begins formally with Palm Sunday, one week before Easter, and builds through Holy Week. Good Friday is observed with solemn readings from the Gospels, individual fasting, and prayers in the churches. On Holy Saturday evening, the Easter Vigil begins. At midnight, every light in the building goes dark and candles are lit throughout the congregation, representing the resurrection of Christ. The visual effect, inside these large colonial churches, is striking.\n\n**The churches**\n\nThree churches are central to Easter in Pondicherry. The Immaculate Conception Cathedral on Mission Street is the oldest and most central: founded in 1688 and rebuilt in its current Baroque form in 1791. On Easter Sunday morning, a procession called the Way of the Cross moves through the streets around the Cathedral. The Basilica of the Sacred Heart of Jesus on South Boulevard (1908, neo-Gothic) holds a grand midnight mass. [Notre-Dame des Anges](/discover/landmarks/notre-dame) on the seafront, completed in 1855, is the most photographed church in the city. All three hold Easter Vigil masses on Holy Saturday night. Arrive early for seats.\n\n**The bakeries**\n\nThis is where Pondicherry's French heritage makes itself felt most directly. In the days around Easter, the city's patisseries produce handmade chocolate Easter eggs (here filled with fresh cream and white chocolate), hot cross buns, marzipan bunnies, French meringues, and marshmallows. Bread and Chocolate on Rue Suffren is reliable. Grand Bakery and Bon Bakes produce their own seasonal ranges. Many visitors come for the bakeries alone, which is entirely understandable.\n\n**The dates**\n\nEaster 2026 is April 5. Good Friday 2026 is April 3. Palm Sunday is March 29, 2026. Easter 2027 is March 28.",
    photo: "easter.jpg",
    photoPosition: "top",
  },

  {
    id: "tamil-new-year",
    metaTitle: "Tamil New Year in Pondicherry, Puthandu Traditions",
    metaDescription: "Tamil New Year begins with an auspicious tray of mangoes, bananas, jackfruit, flowers, and a mirror viewed at dawn on April 14.",
    title: "Tamil New Year (Puthandu)",
    category: "hindu",
    month: "apr",
    when: "April 13 or April 14 each year",
    calendarNote:
      "Puthandu is fixed to the Tamil solar calendar: it marks the sun's entry into Mesha (Aries), the first sign of the Tamil zodiac. Because this is a solar event, the Gregorian date remains stable at April 13 or 14. It is not determined by the lunar calendar.",
    teaser:
      "The Tamil New Year begins not with fireworks but with a tray of mangoes, bananas, jackfruit, flowers, and a mirror: the first thing you are supposed to see on the morning of April 14 is this auspicious arrangement, which is believed to bring wealth and prosperity for the year ahead.",
    body:
      "**The solar new year**\n\nPuthandu, also called Varushapirappu, marks the beginning of the Tamil year at the moment the sun enters Mesha (Aries), the first sign of the Tamil solar zodiac. This happens on April 13 or April 14 in the Gregorian calendar. The same solar event is celebrated as Baisakhi in Punjab and as Vishu in Kerala, each with distinct local customs. Because Puthandu is anchored to the sun's position in the sky, its Gregorian date is as stable as any Western calendar date. This distinguishes it from Hindu festivals like Diwali or Ganesha Chaturthi, which follow the lunisolar calendar and shift by weeks from year to year.\n\n**The auspicious tray**\n\nThe central ritual of Puthandu morning is Kani Paarthal: the first thing you see upon waking must be a specially arranged tray. Families lay out three fruits (mango, banana, jackfruit), silver or gold jewellery, betel leaves and areca nut, fresh flowers, and a mirror. Looking at this tray as the first act of the year is believed to bring wealth, health, and prosperity in the months ahead. In Pondicherry, this private domestic ritual plays out in homes across the Tamil quarter and among Tamil families throughout the city.\n\n**Mangai Pachadi**\n\nThe family feast in the evening is the social centrepiece of Puthandu. The essential dish is Mangai Pachadi: raw mango cooked with jaggery, neem flowers, and tamarind. It is deliberately complex in flavour, combining sour, sweet, bitter, and salty in one mouthful. Tamil tradition holds that this mixture encodes the whole range of experience the new year will bring.\n\n**Further reading**\n\nThe Wikipedia article on Puthandu (en.wikipedia.org/wiki/Puthandu) is a thorough introduction to the festival's customs across Tamil Nadu and its diaspora.",
    website: "en.wikipedia.org/wiki/Puthandu",
    photo: "tamil-new-year.jpg",
  },

  {
    id: "eid-ul-fitr",
    metaTitle: "Eid-ul-Fitr in Pondicherry, Prayers, Feasts and Shopping",
    metaDescription: "Eid-ul-Fitr marks the end of Ramadan with mosque prayers, family feasts, Nehru Street shopping, and special Iftar spreads.",
    title: "Eid-ul-Fitr (Ramzan)",
    category: "muslim",
    month: "mar",
    when: "End of Ramadan, 1 Shawwal in the Islamic calendar. The date shifts approximately 11 days earlier each Gregorian year.",
    calendarNote:
      "Eid-ul-Fitr follows the Islamic lunar calendar, which is shorter than the Gregorian year by 10 to 12 days. The festival moves through all seasons over a 33-year cycle. For the current year's confirmed date, the sighting of the crescent moon determines the exact day, announced the evening before.",
    teaser:
      "Eid-ul-Fitr marks the end of Ramadan with community prayers at Pondicherry's mosques, family feasts, festive shopping on Nehru Street, and special Iftar spreads at local restaurants.",
    body:
      "**The day**\n\nEid-ul-Fitr, locally called Ramzan, is the festival that closes Ramadan, the month of fasting. On the morning of Eid, thousands of worshippers gather in their finest clothes at Pondicherry's prominent mosques: the Eid Ka Mosque in Nellithope, the Big Qubda Mosque, and the Mira Mosque on Mullah Street. Prayers are communal, conducted outdoors when the congregation overflows. After prayers, the day is given to family visits, feasting, and the exchange of gifts.\n\n**Food and markets**\n\nDuring Ramadan and on Eid, local restaurants and small eateries run special Iftar spreads and Ramzan menus: haleem, biryani, tandoori items, dates, and sweets. Commercial streets like Nehru Street see a surge of activity before Eid, with apparel shops running extended festive sales. The festive atmosphere in the streets around the mosques on Eid morning is warm and welcoming.\n\n**The date**\n\nThe Islamic lunar calendar is about 11 days shorter than the Gregorian year. Eid falls progressively earlier each year, cycling through all seasons over roughly 33 years. The exact date is confirmed by the sighting of the new crescent moon, announced the evening before. No printed calendar date is final until that sighting is confirmed.",
    photo: "eid.avif",
  },

  {
    id: "villianur-car-festival",
    metaTitle: "Villianur Temple Car Festival, 15-Metre Chariot Procession",
    metaDescription: "Thousands pull a 15-metre flower-decorated temple car through Villianur on the Vaikasi full moon, joined by the Lieutenant Governor.",
    title: "Villianur Temple Car Festival",
    category: "hindu",
    month: "may",
    when: "Full moon of the Tamil month of Vaikasi, typically late May to early June. The exact Gregorian date shifts each year.",
    calendarNote:
      "The car festival falls on the ninth day of the ten-day Brahmotsavam festival, timed to the full moon of Vaikasi (the second Tamil solar month, approximately mid-May to mid-June). The exact Gregorian date varies. Confirm with Pondicherry Tourism or the temple.",
    teaser:
      "Ten kilometres from Pondicherry town, on the full moon of the Tamil month of Vaikasi, thousands of devotees and visitors pull a 15-metre flower-decorated chariot through the streets of Villianur. Under French rule, the Governor joined the procession. The Lieutenant Governor still does.",
    body:
      "**The temple**\n\nThe Sri Gokilambal Thirukameshwara Temple at Villianur, 10 km from Pondicherry town, was established during the Chola period in the 12th century. Its presiding deities are Lord Kameswarar and his consort, Goddess Kokilambal. The temple is one of the most significant in the region and one of the most ancient still in active worship.\n\n**The chariot procession**\n\nEvery year, after a ten-day festival (Brahmotsavam), the two deities are installed inside a 15-metre decorated chariot and drawn through the streets of Villianur by thousands of devotees pulling thick ropes. The procession commences when a priest beats a drum. Pumpkins and coconuts are offered to the deities. Devotees distribute curd, buttermilk, and sundal (spiced chickpeas) to the enormous crowd following the chariot. Touching the rope is considered auspicious. The procession takes several hours.\n\n**The Governor's tradition**\n\nUnder French colonial rule, the Governor of Pondicherry formally participated in pulling the chariot rope every year, a tradition established in recognition of the temple's importance in local civic life. After the French departed, the Lieutenant Governor of Puducherry continued this custom. The inauguration by the head of the Union Territory is still part of every year's festival.\n\n**Communal character**\n\nThe Villianur Car Festival draws people of all faiths and communities. It is widely noted as a festival that transcends religious and caste boundaries: participants include Hindus, Christians, and Muslims from across Pondicherry. The distribution of food to the crowd by devotees is considered a mark of piety.\n\n**Access**\n\nVillianur is 10 to 15 minutes by road from the Pondicherry Railway Station and airport. For the current year's date, contact Pondicherry Tourism at pondytourism@gmail.com.",
    website: "pondytourism@gmail.com",
    photo: "villianur-car-festival.jpg",
  },

  {
    id: "fete-de-la-musique",
    metaTitle: "Fête de la Musique in Pondicherry, Free Citywide Concerts",
    metaDescription: "On the longest day of the year, jazz, rock, classical music, and street performances fill Pondicherry through Alliance Française events.",
    title: "Fête de la Musique",
    category: "french",
    month: "jun",
    when: "June 21 each year (Summer Solstice)",
    teaser:
      "On the longest day of the year, Pondicherry transforms into a giant stage. Free concerts, street performances, jazz, rock, and classical music spill across the city, organized through the Alliance Française de Pondichéry.",
    body:
      "**The event**\n\nFête de la Musique, or World Music Day, is celebrated on June 21 in cities across the world. Pondicherry is one of very few Indian cities where it has taken hold with genuine enthusiasm, organized each year by the [Alliance Française de Pondichéry](/history/institutions/alliance-francaise). The premise is simple and democratic: music in public spaces, free of charge, for everyone.\n\n**What to expect**\n\nThe [Alliance Française](/history/institutions/alliance-francaise) hosts a week of music-related events leading up to June 21, including live concerts, musical poetry performances, and indie showcases at their premises on Suffren Street. On the day itself, stages appear across the city. Amateur and professional artists perform side by side: jazz, classical Carnatic music, rock, folk, and fusion. The southern end of the beach promenade near Children's Park is one of the most popular spots, with bands setting up as the sun goes down.\n\n**A French tradition in a French city**\n\nFête de la Musique was created in France in 1982. Pondicherry, as a former French territory with a functioning Consulate, an Alliance Française, and a Franco-Tamil community that has maintained cultural ties across generations, takes the occasion seriously. It is one of the few days in the year when French heritage in the city is felt through sound rather than architecture.\n\n**Practical note**\n\nJune 21 falls during the early monsoon season on the Coromandel Coast. Humidity is high and an evening shower is possible. Events typically move indoors if needed. The Alliance Française schedule for the week is worth checking in advance.",
    photo: "fete-de-la-musique.png",
    photoPosition: "top",
    photoAspectRatio: "4/3",
  },

  {
    id: "midnight-tribe",
    metaTitle: "Midnight Tribe Festival, EDM and Techno on Paradise Beach",
    metaDescription: "Two days of live bands, EDM, techno, beach camping, water sports, floating stages, and seafood at Sandunes Paradise Beach.",
    title: "Midnight Tribe Festival",
    category: "arts",
    month: "sep",
    when: "Early September, two days. Confirm current year's dates with the organizers.",
    photo: "midnight-tribe.jpg",
    calendarNote:
      "Dates vary slightly year to year. Check The Midnight Tribe's social channels or Sandunes Paradise Beach Resort for the current edition's schedule and ticket release.",
    teaser:
      "Two days of live bands, EDM, and techno on the sand at Sandunes Paradise Beach, with floating stages, beachside camping, water sports, and seafood under the stars.",
    body:
      "**What it is**\n\nThe Midnight Tribe Festival is Pondicherry's most immersive beach music event: a two-day camping and concert festival held at Sandunes Paradise Beach Resort, roughly 8 km north of the city centre. Produced by The Midnight Tribe, the festival brings together live bands, DJs, and electronic artists in a format that blurs the line between concert, beach party, and weekend getaway.\n\n**Day one: the sundowner**\n\nThe first day begins in the late afternoon as the heat eases. Sunset DJ sessions open the programme, with sets running across multiple stages including floating platforms on the water. Audio-visual installations accompany the music as night falls. The vibe is unhurried: people arrive gradually, find their spot on the sand, and settle in.\n\n**Day two: into the early hours**\n\nThe second night is the main event. Live bands, hip-hop acts, and high-energy techno and EDM sets run deep into the early morning. The floating stage comes into its own after dark, when the lights reflect off the water. The crowd is a mix of Pondicherry regulars, visitors from Chennai and Bangalore, and a contingent of expats from Auroville.\n\n**Beyond the music**\n\nBeachside camping is available for those staying both nights. Water sports run during daylight hours. Food stalls offer fresh seafood and coastal snacks throughout. Tickets have historically started around INR 199 for general access before taxes, making it one of the more accessible festival experiences on this stretch of the coast.\n\n**Getting there**\n\nSandunes Paradise Beach Resort is accessible by auto-rickshaw or taxi from Pondicherry town in around 20 minutes. The resort sits on a quieter stretch of coastline north of the city, away from the urban promenade.",
  },

  {
    id: "bastille-day",
    metaTitle: "Bastille Day in Pondicherry, Torchlight Parade and Fireworks",
    metaDescription: "Bastille Day includes wreath-laying, both national anthems, a White Town torchlight parade, and fireworks over the Promenade.",
    title: "Bastille Day",
    category: "french",
    month: "jul",
    when: "July 14 each year",
    photo: "bastille-day.jpg",
    teaser:
      "France's national day is celebrated in Pondicherry with wreath-laying at the French War Memorial, both national anthems at the Consulate General, a torchlight parade through the White Town, and fireworks over the Promenade.",
    body:
      "**The morning**\n\nBastille Day begins at the [French War Memorial](/discover/landmarks/war-memorial) on [Goubert Avenue](/discover/white-town/avenue-goubert). French government officials, the Consul General, local dignitaries, and veterans gather to lay wreaths and pay tribute to the soldiers from this region who died in the First World War. The memorial is maintained by the French Consulate and tended year-round. The wreath-laying is formal, brief, and genuinely felt.\n\n**The Consulate and the anthems**\n\nInside the [Consulate General of France](/history/institutions/consulate-general), both the Marseillaise and Jana Gana Mana are played. One territory's national day, celebrated in a city that is now part of another country, by an institution that has remained here across seventy years of Indian sovereignty. The juxtaposition is entirely deliberate. Pondicherry's relationship with France did not end in 1954 or 1962; it continues, through the Consulate, through the [Alliance Française](/history/institutions/alliance-francaise), through the [Lycée Français](/history/institutions/lycee-francais), and through the thousands of Franco-Tamil families with French citizenship.\n\n**The evening**\n\nAs dusk falls, the White Town comes alive. French and French-influenced restaurants along Rue Dumas and Rue Suffren run special menus. The crowds move toward the Promenade for the fireworks, which illuminate the Consulate General building and the seafront. A torchlight procession with participants carrying red, white, and blue lanterns moves through the streets of the French Quarter. The event is open to everyone.\n\n**A practical note**\n\nJuly 14 in Pondicherry falls during the southwest monsoon season. Humidity is high and rain is possible. Carry something light for the weather. The fireworks are worth it.",
  },

  {
    id: "manifest-dance-film",
    metaTitle: "Manifest Dance-Film Festival, Auroville and White Town",
    metaDescription: "An international dance-film festival with shorts, features, workshops, Q&As, and outdoor screenings across Auroville and White Town.",
    title: "Manifest Dance-Film Festival",
    category: "arts",
    month: "aug",
    when: "Early August, typically August 1 to 3. Confirm the current year's dates at manifestdancefilm.com.",
    teaser:
      "South Asia's leading international dance-film festival, held at the Auroville bioregion and the Alliance Française de Pondichéry: short films, features, student works, and mobile phone productions from across the world, with Q&As, workshops, and outdoor screenings across three days.",
    body:
      "**What it is**\n\nThe Manifest Dance-Film Festival is one of the most distinctive events in the Pondicherry calendar: an international festival dedicated to the relationship between body movement and cinema. Organized by AuroApaar, the festival accepts short films, feature-length works, student submissions, and mobile phone productions that explore dance as a cinematic subject. Selected films screen at venues in the Auroville bioregion and at the [Alliance Française de Pondichéry](/history/institutions/alliance-francaise).\n\n**The programme**\n\nOver three days, selected films from across the world are screened. Filmmakers participate in live Q&A sessions with audiences. Workshops on dance-film technique accompany the main programme. The selection spans animation, documentary, and experimental fiction, with the requirement that body movement be a central cinematic concern rather than merely recorded performance.\n\n**Who it is for**\n\nNo specialist background in dance or film is required. The selected works tend to be short, formally inventive, and genuinely surprising. Several screenings are held outdoors in the Auroville landscape at night, which is an unusual setting even by international festival standards.\n\n**Information and submissions**\n\nFor screening schedules and attendance, check the festival's FilmFreeway page. Filmmakers wishing to submit for future editions should write to manifest@auroapaar.org. Previous-year submission codes offer discounts: MDFF for returning submitters, student applicants need proof of current enrolment.",
    website: "manifest@auroapaar.org",
    photo: "manifest-dance-festival.png",
  },

  {
    id: "veerampattinam-festival",
    metaTitle: "Veerampattinam Car Festival 2026, 450-Year-Old Goddess Festival",
    metaDescription: "Veerampattinam Car Festival 2026 is on August 14. The fishing village celebrates its 450-year-old Aadi festival with fish curry feasts, temple rituals, and a chariot procession.",
    title: "Veerampattinam Car Festival",
    category: "hindu",
    month: "aug",
    when: "Fifth Friday of the Tamil month of Aadi. In 2026, this falls on August 14.",
    calendarNote:
      "The Tamil month of Aadi begins when the sun enters Cancer (Karkataka), typically around July 17 in the Gregorian calendar. The fifth Friday of Aadi follows from there. In 2026, Aadi begins July 17; the five Fridays are July 17, July 24, July 31, August 7, and August 14. The exact Gregorian date shifts by a day or two each year.",
    teaser:
      "Seven kilometres from Pondicherry, the fishing village of Veerampattinam celebrates a 450-year-old goddess festival on the fifth Friday of Aadi. Families cook fish curry on mud stoves at the temple gates. The Lieutenant Governor inaugurates the chariot procession.",
    body:
      "**The village and the goddess**\n\nVeerampattinam is the largest coastal village in Pondicherry, seven kilometres south of the city on the road to Cuddalore. Its Sri Sengazhuneer Amman Temple is dedicated to Amman, the goddess, associated here with the protection of fishing communities at sea. Local families have worshipped her for over four centuries, and the annual car festival is the most important event in their collective life.\n\n**The origin**\n\nLegend places the temple's founding more than 450 years ago. A fisherman named Veera Raghava found a log in the Sengazhuneer canal. When his wife tried to chop it, blood flowed from the wood. The couple performed puja and the goddess appeared in a dream, identifying herself and asking to be installed as an idol on the log. A second strand of history explains the festival's current form: during the French colonial period, when fishermen from Veerampattinam helped the French resist a British incursion on the coast, the French Governor agreed, as an act of gratitude, to inaugurate the annual car festival. The Lieutenant Governor of Puducherry continues that tradition to this day.\n\n**The six Fridays**\n\nThe observance runs across six consecutive Fridays of Aadi, not just the final day. On the earlier Fridays, devotees perform padayatra, a foot pilgrimage to the temple, and paal kudam, carrying pots of milk as an offering to the goddess. These build toward the fifth Friday, when the chariot procession itself takes place.\n\n**The day**\n\nDevotees begin arriving before dawn. Women in silk sarees set up mud stoves along the road from Mudaliarpet to Veerampattinam and cook fish curry and rice, which they offer to the deity on plantain leaves. Families whose kula deivam (ancestral deity) is Sengazhuneer Amman come from across Pondicherry and Tamil Nadu. A government public holiday is declared. Free food and buttermilk (annadhanam) are served in shelters along the road throughout the day. The Lieutenant Governor arrives to hold the temple car rope before releasing it to the crowd, inaugurating the procession.\n\n**Dates in 2026 and after**\n\nIn 2026, the fifth Friday of Aadi falls on August 14. For subsequent years, calculate from the Tamil month of Aadi (starting approximately July 17) and count the fifth Friday.",
    photo: "veerampattinam-car-festival.jpg",
  },

  {
    id: "fete-de-pondichery",
    metaTitle: "Fête de Pondichéry, Music, Lights and Liberation History",
    metaDescription: "Three days of music, illuminated buildings, street food, and dancing celebrate Independence Day and Pondicherry's liberation history.",
    title: "Fête de Pondichéry",
    category: "civic",
    month: "aug",
    when: "August 15, 16, and 17 each year",
    teaser:
      "Three days of music, illuminated buildings, street food, and dancing mark Pondicherry's double celebration of Indian Independence Day and its own particular history of liberation from French rule.",
    body:
      "**The three days**\n\nThe Fête de Pondichéry runs from August 15 to 17 each year, combining Indian Independence Day with Pondicherry's own layered liberation story. August 15 is India's Independence Day. August 16 is De Jure Day, marking the legal transfer of Pondicherry from French to Indian administration on August 16, 1962. August 17 extends the celebration. The focal point is Gandhi Thidal on Beach Road, where concerts, folk dances, food stalls, and illuminations are concentrated.\n\n**A complicated history**\n\nThe transfer of Pondicherry from France to India was not a straightforward colonial liberation. France administered Pondicherry under a democratic government with universal suffrage, while British India was still a colonial possession. The French departed peacefully on November 1, 1954, the de facto handover. The formal legal ratification did not come until August 16, 1962, when the Treaty of Cession was signed in Paris. Many Pondicherrians hold both dates: November 1 as the day the flag was lowered, August 16 as the day the papers were signed. The Consulate General of France remains open in the city; the relationship between Pondicherry and France continues in a different form.\n\n**The festivities**\n\nGovernment buildings, the seafront, and the colonial facades of the White Town are illuminated and decorated through all three days. On August 15, the Chief Minister hoists the national flag at the Swadeshi Bharathiar Illam (Legislative Assembly), followed by police parade and student contingents. Cultural performances, folk dances mixing Tamil and Western traditions, and food stalls serving local and fusion Tamil-French street food fill the evenings.",
    photo: "fete-de-pondichery.jpg",
  },

  {
    id: "sri-aurobindo-birthday",
    metaTitle: "Sri Aurobindo's Birthday, Darshan Day on 15 August",
    metaDescription: "One of the Ashram's four Darshan Days, with queues from dawn to view Sri Aurobindo's room and meditate at the marble Samadhi.",
    title: "Sri Aurobindo's Birthday",
    category: "spiritual",
    month: "aug",
    when: "August 15 each year (one of the four annual Darshan Days at the Sri Aurobindo Ashram)",
    teaser:
      "Sri Aurobindo was born on August 15, 1872. His birthday coincides with Indian Independence Day. At the Sri Aurobindo Ashram, it is one of four annual Darshan Days: devotees queue from before dawn for a token to view his room and meditate at the white marble Samadhi.",
    body:
      "**The coincidence**\n\nSri Aurobindo was born on August 15, 1872, in Calcutta. He had been a revolutionary organizer against British rule before his trial and acquittal in the 1908 Alipore Conspiracy Case, after which he fled to French Pondicherry. He spent forty years in Pondicherry writing, developing Integral Yoga, and corresponding with thousands of disciples, most of whom he never saw. He noticed that the date India became independent matched his own birthday and took the coincidence as significant.\n\n**Darshan Day**\n\nAugust 15 is one of four annual Darshan Days at the Sri Aurobindo Ashram (the others are November 17, February 21, and April 24). On Darshan Days, the [Sri Aurobindo Ashram](/discover/landmarks/ashram) distributes tokens from before dawn allowing devotees to view the room where Sri Aurobindo lived and worked for forty years. The Samadhi, the white marble shrine in the ashram courtyard where he and the Mother are interred, draws hundreds of meditators from before sunrise. The atmosphere is one of intense collective silence. Darshan is conducted without noise. Dress modestly, shoulders and knees covered.\n\n**Crowds**\n\nBecause August 15 is also a national holiday, Pondicherry receives large numbers of both spiritual pilgrims and general tourists simultaneously. The ashram manages the flow carefully, but queues for Darshan tokens begin well before dawn. Arrive early if you intend to participate in the morning meditation.\n\n**At Auroville**\n\nAuroville marks the day with a Dawn Fire gathering at the Matrimandir Amphitheatre before sunrise. Phones and cameras are not permitted inside the Park of Unity. See auroville.org for timing.",
    website: "sriaurobindoashram.org",
    photo: "sri-aurobindo-birthday-color.jpg",
    photoPosition: "center 30%",
  },

  {
    id: "vinayaka-chaturthi",
    metaTitle: "Vinayaka Chaturthi in Pondicherry, Ganesha by the Sea",
    metaDescription: "The festival centres on Sri Manakula Vinayagar Temple and ends with a large procession carrying clay Ganesha idols to the sea.",
    title: "Vinayaka Chaturthi (Ganesha Festival)",
    category: "hindu",
    month: "aug",
    when: "Fourth day of the bright fortnight of Bhadrapada in the Hindu lunisolar calendar. In 2026, approximately August 19.",
    calendarNote:
      "Ganesha Chaturthi follows the Hindu lunisolar calendar (Bhadrapada Shukla Chaturthi). The date shifts each year in Gregorian terms, typically falling between late August and mid-September. For the exact date, consult the Tamil panchangam.",
    teaser:
      "Pondicherry's Ganesha festival centres on the ancient Sri Manakula Vinayagar Temple, where Ganesha has been worshipped since before the French arrived. Over several days, elaborate clay idols appear at community pandals across the city, and the festival ends with a large procession to the sea.",
    body:
      "**The temple**\n\nThe Sri Manakula Vinayagar Temple on Manakula Vinayagar Street, a few metres from the sea in the heart of the White Town, is one of the oldest places of worship in Pondicherry. Ganesha has been honoured here since at least the 16th century. Through two and a half centuries of French rule, the temple was never closed or moved, and it remains the centre of the city's Ganesha devotion. On the day of Chaturthi, the temple opens for a special abhishekam at 4 AM. The deity is adorned in golden armour. Queues form the night before.\n\n**The pandals**\n\nIn the weeks before Chaturthi, neighbourhoods across Pondicherry install elaborate clay Ganesha idols in temporary pandals (open pavilions). The best of these are genuinely creative: crafted from paper, clay, and in recent years from plantable seed material that can be buried rather than immersed in the sea. Markets on Ambalathadayar Madam Street and at Saram fill with traditional clay idols, jaggery offerings, and modaks (sweet dumplings, traditionally Ganesha's favourite).\n\n**The immersion**\n\nThe multi-day festival ends with a procession carrying the community idols to Pondicherry Beach for immersion in the sea. The procession is long, loud, and colourful: trucks carrying large idols, music, dancing, and crowds stretching for kilometres. The immersion marks the god's departure.\n\n**Dates**\n\nGanesha Chaturthi in 2026 falls on approximately August 19. Confirm on the Tamil panchangam or with Pondicherry Tourism at pondytourism@gmail.com.",
    website: "pondytourism@gmail.com",
    photo: "vinayaka-chaturthi.jpg",
  },

  {
    id: "ayudha-puja",
    metaTitle: "Ayudha Puja in Pondicherry, Tools, Vehicles and Books",
    metaDescription: "Ayudha Puja sees vehicles garlanded, workshops decorated, and students placing books before Saraswathi in homes across the city.",
    title: "Ayudha Puja and Saraswathi Puja",
    category: "hindu",
    month: "oct",
    when: "Ninth day of Navaratri, in Ashwin (September or October). In 2026, approximately October 9.",
    calendarNote:
      "Ayudha Puja falls on Mahanavami, the ninth day of Navaratri in the Hindu lunisolar calendar. Navaratri begins on Ashwin Shukla Pratipada. In 2026, Navaratri runs approximately October 1 to 10, with Ayudha Puja on October 9. These dates shift each year.",
    teaser:
      "On Ayudha Puja, Pondicherry gives thanks for the tools, machines, and instruments that sustain daily life. Auto-rickshaws are garlanded with marigolds and marked with vermilion. Workshops and offices are decorated. Students place their books at Saraswathi's altar.",
    body:
      "**The festival**\n\nAyudha Puja, 'worship of the implements,' is celebrated on the ninth day of Navaratri. People across South India clean their workplaces, decorate their tools, and offer prayers of gratitude for the instruments that sustain their livelihoods. In Pondicherry, this means auto-rickshaws and motorbikes garlanded with marigolds and marked with vermilion at dawn. Workshop machinery draped with banana leaves. Fishing boats brought ashore, cleaned, and decorated. The machines are not incidental to the ritual: they are its subject.\n\n**Saraswathi Puja**\n\nAyudha Puja coincides with Saraswathi Puja, honouring the goddess of knowledge, arts, and learning. Students and teachers place their books, notebooks, and musical instruments at temporary altars in schools, colleges, and homes. The books are not opened until the following morning, Vijayadasami, when they are retrieved and the new academic season formally begins. Pondicherry's schools and colleges hold Saraswathi Puja ceremonies that visitors are generally welcome to observe.\n\n**What you see on the street**\n\nThe most immediate sign of Ayudha Puja in any South Indian city is the decorated vehicle. Every auto-rickshaw you pass is freshly washed, garlanded, and marked with a red tilak. Drivers perform a brief puja in front of their vehicles in the morning. Buses, trucks, and delivery motorbikes follow the same pattern. Taxis may be briefly unavailable while their owners complete the morning prayers.\n\n**Dates in 2026**\n\nNavaratri 2026 runs approximately October 1 to 10. Ayudha Puja is October 9. Vijayadasami (Dussehra) is October 10. These dates follow the lunisolar calendar and vary each year.",
    photo: "ayudha-puja.jpg",
    photoPosition: "center 25%",
  },

  {
    id: "deepavali",
    metaTitle: "Deepavali in Pondicherry, 4 AM Firecrackers and Lamps",
    metaDescription: "Families wake at 4 AM for oil baths, new clothes, and pre-dawn firecrackers before lamps illuminate White Town in the evening.",
    title: "Deepavali",
    category: "hindu",
    month: "oct",
    when: "New moon of Kartik in the Hindu lunisolar calendar. In 2026, approximately October 20.",
    calendarNote:
      "Diwali falls on Kartik Amavasya (the new moon night of the month of Kartik) in the Hindu lunisolar calendar. The Gregorian date shifts each year, typically between mid-October and mid-November. For the current year's date, consult the Tamil panchangam or bonjourpondicherry.in.",
    teaser:
      "Deepavali in Pondicherry follows Tamil custom: families rise at 4 AM, bathe, put on new clothes, and set off firecrackers before sunrise. By evening, oil lamps line the colonial doorsteps of the White Town and the sea reflects the light.",
    body:
      "**How Pondicherry celebrates**\n\nDeenavali in Pondicherry follows Tamil Nadu custom rather than the North Indian version familiar from films and photographs. The celebration begins before dawn: families rise early, bathe with sesame oil (a purification ritual), dress in new clothes, and light firecrackers in the street outside their homes. This happens before sunrise. By the time the rest of India is waking up, the Tamil quarter has already been through its most intense hour of the festival.\n\n**Temple visits**\n\nAfter the early morning rituals, families visit the Sri Manakula Vinayagar Temple and other neighbourhood temples for prayers and blessings. The Varadaraja Perumal Temple and Vedapuri Eeswaran Temple also see large gatherings. Lines form quickly in the morning.\n\n**The White Town at night**\n\nBy evening, the French Quarter adds its own quality to the festival. The ochre and cream facades of Rue Dumas and Rue Suffren are lit with oil lamps and string lights. Heritage guesthouses and cafes serve Deepavali thalis alongside their regular menus. Promenade Beach is busy. For those who want to avoid the noise of the firecrackers, Auroville, a short drive north, has a quieter observance.\n\n**The sweets**\n\nSweet shops fill with laddus, barfis, jalebis, and Mysore pak. Pondicherry's patisseries produce chocolate modaks and spiced almond biscotti alongside traditional Tamil sweets. Walking through the markets on Nehru Street on Deepavali morning is worth doing for the sweets alone.\n\n**Dates and calendar**\n\nDeenavali 2026 falls on approximately October 20. For the exact date and the Pondicherry festival programme, check events.bonjourpondicherry.in.",
    website: "bonjourpondicherry.in",
    photo: "deepavali.jpg",
    photoPosition: "center 25%",
  },

  {
    id: "liberation-day",
    metaTitle: "Liberation Day in Pondicherry, 1 November 1954",
    metaDescription: "Marking the lowering of the French tricolour and the raising of the Indian flag, with public holidays, parades, and civic ceremonies.",
    title: "Liberation Day",
    category: "civic",
    month: "nov",
    when: "November 1 each year",
    teaser:
      "On November 1, 1954, the French tricolour was lowered over Pondicherry and the Indian flag raised for the first time. Liberation Day marks the de facto end of French rule with a public holiday, civic parades, and a moment to reckon with what exactly was liberated, and what was lost.",
    body:
      "**The transfer**\n\nFrance and India negotiated the handover of Pondicherry and the other French Establishments (Karikal, Mahé, and Yanam) over several years of careful diplomacy. The de facto handover happened on November 1, 1954: French forces departed, Indian forces arrived, and Pondicherry became part of the Indian Union in practice. The formal legal treaty, however, required ratification by the French National Assembly and did not come until August 16, 1962. Pondicherry therefore observes two liberation dates: November 1 for the physical transfer, August 16 for the legal one.\n\n**The ambivalence**\n\nIt would be wrong to describe the French departure as straightforwardly joyful. France had administered Pondicherry under a democratic government with full French citizenship for its residents and free schooling in French. A substantial Franco-Tamil community left for France after the transfer. Others stayed. The [Consulate General of France](/history/institutions/consulate-general) remains open in the city today; the [Alliance Française](/history/institutions/alliance-francaise) and the [Lycée Français](/history/institutions/lycee-francais) continue operating. [Bastille Day](/festivals/bastille-day) is still celebrated with fireworks on the seafront. The relationship between Pondicherry and France changed in 1954 and 1962; it did not end.\n\n**The observance**\n\nLiberation Day is a public holiday in Puducherry. The government marks it with civic parades, exhibitions of photographs and documents from the 1954 transfer, and ceremonies at public squares honouring the freedom fighters and activists who campaigned for merger with India. The [French War Memorial](/discover/landmarks/war-memorial) on [Goubert Avenue](/discover/white-town/avenue-goubert), which commemorates an earlier conflict, stands nearby.",
    photo: "liberation-day.jpg",
    photoPosition: "center 25%",
  },

  {
    id: "karthigai-deepam",
    metaTitle: "Karthigai Deepam in Pondicherry, Rows of Clay Oil Lamps",
    metaDescription: "Homes across Pondicherry glow with agal vilakku, creating a soft pre-electric light through the Tamil quarter and White Town.",
    title: "Karthigai Deepam",
    category: "hindu",
    month: "nov",
    when: "Full moon of the Tamil month of Karthigai, when the moon occupies the Krittika (Pleiades) nakshatra. Typically late November to mid-December.",
    calendarNote:
      "Karthigai Deepam requires the conjunction of the Tamil solar month of Karthigai AND the moon's occupation of the Krittika nakshatra on the full moon day. The Tamil month of Karthigai runs approximately from mid-November to mid-December. The exact date shifts each year. Confirm with the Tamil panchangam.",
    teaser:
      "On the night of Karthigai Deepam, homes across Pondicherry are lined with rows of agal vilakku, small clay oil lamps. The streets of the Tamil quarter and the White Town glow with a soft, pre-electric light that is entirely unlike Diwali.",
    body:
      "**The mythology**\n\nKarthigai Deepam is rooted in one of the oldest stories in South Indian tradition: the moment Lord Shiva appeared as an infinite column of fire to resolve an argument between Vishnu and Brahma about who was superior. Neither god could find the beginning or end of Shiva's flame, proving his supremacy. Shiva then manifested as the sacred hill at Thiruvannamalai, 100 kilometres west of Pondicherry. Every year on Karthigai Deepam night, a great beacon fire is lit on Arunachala Hill and is visible for kilometres in every direction. Many devotees in Pondicherry travel to Thiruvannamalai for the festival; others observe it at home.\n\n**The lamps**\n\nIn Pondicherry, Karthigai Deepam is primarily a domestic festival. Families light rows of agal vilakku (small clay lamps) along compound walls, balcony railings, and doorsteps after sunset. The specific lamp forms have traditional names: the Lakshmi Vilakku (a lamp shaped as a woman with folded hands), the Kuthu Vilakku (a tall brass standing lamp in the shape of a five-petal flower), and the Gajalakshmi Vilakku (an elephant lamp). The effect across the Tamil quarter and the White Town on Karthigai Deepam night is genuinely beautiful: quieter and older than Diwali, entirely without firecrackers.\n\n**The food**\n\nThe festival's traditional sweet is Pori Urundai, balls of puffed rice bound with jaggery. Sweet Pongal and appam are also prepared. Families observe a partial fast during the day, breaking it after sunset when the lamps are lit.\n\n**Finding the date**\n\nThe exact Gregorian date shifts each year with the nakshatra and full moon alignment. For the current year's date, check the Tamil panchangam or contact Pondicherry Tourism at pondytourism@gmail.com.",
    website: "pondytourism@gmail.com",
    photo: "karthigai-deepam.jpg",
    photoPosition: "center 25%",
  },

];

export function getFestival(id: string): Festival | undefined {
  return festivals.find((f) => f.id === id);
}

export function getFestivalsByMonth(month: FestivalMonth): Festival[] {
  return festivals.filter((f) => f.month === month);
}

export function getFestivalsByCategory(category: FestivalCategory): Festival[] {
  return festivals.filter((f) => f.category === category);
}
