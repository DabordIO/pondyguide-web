export type TransportCategory = "arriving" | "local";

export interface TransportArticle {
  id: string;
  title: string;
  cardTitle?: string;
  category: TransportCategory;
  teaser: string;
  body: string;
  photo?: string; // image filename under /public/transport/
  faq?: { question: string; answer: string }[];
}

export const transportArticles: TransportArticle[] = [
  // ── ARRIVING ───────────────────────────────────────────────────────────────

  {
    id: "bus-to-pondicherry",
    title: "Reaching Pondy by Bus",
    cardTitle: "By Bus",
    category: "arriving",
    teaser:
      "Frequent connections from Chennai every 15–20 minutes on the scenic East Coast Road, and overnight services from Bangalore arriving early morning. The bus is how most visitors get here.",
    photo: "bus-ecr-coast.jpg",
    body: `**From Chennai**

Chennai to Pondicherry covers 150 kilometres by the East Coast Road (ECR), which skirts the Bay of Bengal for much of its length. Both the ECR and the inland National Highway 45 take between 3.5 and 4.5 hours. ECR is the more scenic option.

State-run buses (TNSTC, SETC, PRTC) cost 130 to 190 rupees and depart from CMBT (Koyambedu) from 2:30am with a new service every 15 to 20 minutes. They are basic, with no air conditioning, and some divert off the ECR to avoid tolls, adding an hour to the trip. Ask the conductor before boarding.

Private AC coaches (Fresh Bus, NueGo) take around 3.5 hours and cost 230 to 1,200 rupees. Book through RedBus or MakeMyTrip. Many pick up at Adyar or Thiruvanmiyur rather than CMBT, so confirm the stop before booking.

From Chennai Airport, take the metro from Meenambakkam to CMBT (₹50, change at Alandur), then board directly.

**From Bangalore**

Buses follow NH 77 through Hosur, Krishnagiri, Tiruvannamalai, and Tindivanam: 315 kilometres, six to eight hours. The route passes within sight of Tiruvannamalai's Arunachala and Gingee Fort.

Most services are overnight, departing 8pm–11:30pm from Madiwala, Shanti Nagar, or Majestic bus stand, arriving at Pondicherry's New Bus Stand in the early morning. Private operators Kallada Travels, Sharma Transports, and KPN Travels run sleeper and seater services (500–1,200 rupees). KSRTC and SETC are reliable state alternatives at the lower end.

Book in advance via RedBus or MakeMyTrip. On arrival, use Namma Yatri to book an auto-rickshaw from the bus stand rather than haggling at the gate.`,
  },

  {
    id: "private-taxi",
    title: "By private taxi",
    cardTitle: "By Taxi",
    category: "arriving",
    teaser:
      "A pre-booked taxi from Chennai, especially from the airport, is the most comfortable door-to-door option",
    photo: "private-taxi.jpg",
    body: `**When a taxi makes sense**

A private taxi is the right call when you are travelling with luggage, arriving late at night, or splitting the cost across a group of two to four people. There is no connection to change, no schedule to chase, and the driver waits for you in arrivals.

**Booking platforms**

Savaari Car Rentals offers pre-booked outstation cabs with fares typically starting at 9 to 13 rupees per kilometre. MakeMyTrip covers a range of vehicle types from compact hatchbacks to SUVs. Uber Intercity allows on-demand or scheduled bookings with a fixed rate starting at approximately 2,300 rupees for the Chennai to Pondicherry run. Gozo Cabs is well regarded for reliable one-way drop bookings.

**From Chennai Airport**

Official pre-paid taxis are available at fixed tariffs in the arrivals hall. For Pondicherry, expect to pay 2,500 rupees or more at the airport rank. An Uber Intercity booking made through the app before landing typically costs less and avoids the queue.

**Travel times from other cities**

From Bangalore: approximately six hours. From Coimbatore: seven hours. From Mysore: eight hours.`,
  },

  {
    id: "train",
    title: "Train to Pondicherry",
    cardTitle: "By Train",
    category: "arriving",
    teaser:
      "Puducherry station is five minutes from the White Town by auto-rickshaw. Direct trains run from Chennai and Bangalore; other cities connect via Villupuram Junction.",
    photo: "puducherry-railway-station.jpg",
    body: `**The station**

Puducherry Railway Station (station code PDY) sits in the centre of town, about 15 minutes on foot from the White Town or five minutes by auto-rickshaw. It is a modest station without the facilities of a major junction, but arriving here places you closer to most accommodation than any other mode of transport.

**From Chennai**

The MS PDY Express is a daily direct service from Chennai Egmore to Puducherry, taking approximately four to four and a half hours. Fares vary by class: unreserved second class is under 100 rupees; sleeper class runs around 200 to 300 rupees; air-conditioned classes are higher. Book 60 days in advance through IRCTC (irctc.co.in) or 12Go, as reserved-class seats fill quickly on Fridays and Sundays.

**From Bangalore**

The Yesvantpur-Puducherry Weekly Express runs once a week, taking approximately 10 to 11 hours. It is an easy overnight journey. Confirm the current day of operation at time of booking, as schedules are revised seasonally.

**Via Villupuram Junction**

If your origin city has no direct service to Puducherry, travel to Villupuram Junction (VM), a major rail hub 37 kilometres from Pondicherry. From Villupuram you can take a connecting local train to PDY (45 to 55 minutes), a local bus, or a taxi for a one-hour drive. Villupuram has far more connections from cities across South India and is a reliable fallback.`,
    faq: [
      { question: "Is there a train to Pondicherry?", answer: "Yes. Pondicherry has a railway station connected to major cities such as Chennai, Villupuram, Bengaluru, and parts of southern India. Train availability depends on the route and day of travel, so advance booking is recommended, especially during weekends and holidays. For some itineraries, travelers may need to change trains at Villupuram Junction, which is the main rail connection point for the region. Once you arrive, see [getting around Pondicherry](/plan/getting-around) for the last stretch into White Town." },
    ],
  },

  {
    id: "by-air",
    title: "Flying to Pondicherry",
    cardTitle: "By Plane",
    category: "arriving",
    teaser:
      "Pondicherry has a small domestic airport with very limited services. For most visitors, the practical choice is to fly into Chennai and continue by bus or train.",
    photo: "chennai-airport-arrivals.jpg",
    body: `**Pondicherry Airport**

Pondicherry Airport (IATA: PNY) handles a small number of domestic flights, primarily from Bangalore and Hyderabad. Services are limited and subject to seasonal changes and cancellations. If you want to check whether a direct connection suits your dates, search IndiGo directly at indigo.in; aggregator websites are sometimes slow to reflect schedule changes on this route.

**The recommended approach**

Most visitors fly into Chennai International Airport (MAA), which has connections to all major Indian cities and international destinations including Dubai, Singapore, Kuala Lumpur, and Colombo. From Chennai, Pondicherry is 3.5 to 4 hours by bus or 4 to 4.5 hours by train. Both options are frequent, reliable, and inexpensive.

From Chennai Airport, the metro from Meenambakkam station (directly outside the terminal, Rs 50, change at Alandur) takes you to CMBT, where buses to Pondicherry depart every 15 to 20 minutes throughout the day. A pre-booked taxi from the airport takes around three hours and costs from 2,500 rupees.`,
    faq: [
      { question: "Can I fly to Pondicherry?", answer: "Yes. Pondicherry has a small domestic airport with limited flights, mainly from Bengaluru and occasionally other Indian cities. Most international travelers arrive via Chennai International Airport, which offers many more connections. From Chennai, Pondicherry can be reached by road in about 3 to 4 hours. Flight schedules to Pondicherry may change seasonally, so it is advisable to check current availability before booking. Once you land, see [getting around Pondicherry](/plan/getting-around) for onward transport." },
    ],
  },

  {
    id: "road-trip-ecr",
    title: "Road trip on the East Coast Road",
    cardTitle: "By Car",
    category: "arriving",
    teaser:
      "The 150-kilometre coastal drive from Chennai to Pondicherry along the Bay of Bengal is one of the great day journeys in South India.",
    photo: "ecr-road.jpg",
    body: `**The road**

The East Coast Road (ECR) runs south from Chennai along the Coromandel Coast, hugging the Bay of Bengal for much of its length before reaching Pondicherry. The drive covers approximately 150 kilometres and takes around three hours in normal traffic. The road passes fishing villages, open beach stretches, and buildings still bearing visible marks from the 2004 tsunami. It is best driven during daylight: avoid the ECR at night, when the road is poorly lit and coastal traffic is unpredictable.

**Stops worth making**

Mahabalipuram (Mamallapuram), about 60 kilometres south of Chennai, is home to the Shore Temple and the UNESCO-listed rock-cut sculptures of the Pallava period. It makes a natural break in the journey and can easily extend a morning drive into a full day. South of Mahabalipuram the coastline becomes quieter, with open beach access at several points before the road reaches Pondicherry.

**The alternative inland route**

National Highway 45 runs from Chennai through Tindivanam and is around 10 kilometres longer than the ECR but has a better road surface on some sections. It is the practical choice if you are prioritising arrival time over scenery.

**From other cities**

From Tiruchirappalli, the drive is approximately 175 kilometres and takes four to four and a half hours. Pre-booked taxis from Tiruchirappalli airport are a sensible option for visitors arriving on regional flights. From Mysore, the drive runs through Bangalore and takes around eight hours.`,
    faq: [
      { question: "What is the easiest way to reach Pondicherry from Chennai?", answer: "Yes, reaching Pondicherry from Chennai is relatively easy. The most popular option is by road using the scenic East Coast Road (ECR). Travelers can choose private taxis, rental cars, or frequent government and private buses. The journey usually takes 3 to 4 hours depending on traffic. This route is favored for its coastal views and convenient departure points from Chennai city and the airport." },
    ],
  },

  {
    id: "carpooling",
    title: "Pondy by Carpooling",
    cardTitle: "By Carpool",
    category: "arriving",
    photo: "carpooling.jpg",
    teaser:
      "The cheapest way to get from Chennai to Pondicherry, and the most sociable. A shared seat on BlaBlaCar or a local shared cab costs 300 to 400 rupees and takes two and a half to three and a half hours.",
    body: `**BlaBlaCar**

The most practical platform for booking a shared car to Pondicherry is BlaBlaCar, which operates across India and has a consistent supply of drivers making the Chennai run. A verified seat typically costs 300 to 400 rupees for the two and a half to three and a half hour journey, depending on traffic and exact drop-off point. Drivers usually depart from central Chennai or the airport area; confirm the pickup location when booking.

**Shared cab operators**

Local operators run shared Tata Sumos, Innovas, and sedans between Chennai and Pondicherry, most departing from near Koyambedu bus stand or the airport. Gmr Travels and Easy Call Taxi are among the well-known operators. Seats in these shared cabs typically cost in the same range as BlaBlaCar. The vehicles fill before departure, so arrive at the agreed meeting point on time.

**From Auroville and the northern townships**

If you are heading to the Auroville area rather than Pondicherry itself, community-focused shared transport services, including STS shuttles, run between Chennai and the Auroville region. These carry multiple passengers and cost 1,500 to 2,000 rupees per car, divided among those on board. Book in advance through Auroville's visitor services.

**Why it makes sense**

A private taxi from Chennai costs 2,000 to 2,500 rupees for the whole car. A BlaBlaCar seat costs a fraction of that and is often more reliable than negotiating at the airport. You share the road, the tolls, and occasionally a conversation. The journey takes roughly the same time either way. The main limitation is flexibility: carpools run on the driver's schedule, not yours.`,
  },

  // ── LOCAL ──────────────────────────────────────────────────────────────────

  {
    id: "auto-rickshaw",
    title: "Auto-rickshaws in Pondicherry",
    cardTitle: "Auto-rickshaws",
    category: "local",
    teaser:
      "Meters are not used. Agree the price before you get in, use street names not tourist labels, and carry small notes: change has a way of disappearing.",
    photo: "auto-rickshaw-white-town.jpg",
    body: `**How pricing works**

Auto-rickshaw meters exist in Pondicherry but are rarely used. Every journey is negotiated. Fares depend on distance, time of day, and how much of a first-time visitor you appear to be. Use the following as a working guide for standard, non-festival days:

Short trips within the White Town (1 to 2 km): 50 to 100 rupees.
Between the White Town and the bus stand or railway station (2 to 3 km): 80 to 150 rupees.
Longer cross-town trips (4 to 7 km): 120 to 250 rupees.
White Town to Auroville (9 to 10 km): 250 to 500 rupees.

On festival weekends, New Year's Eve, and public holidays, fares run noticeably higher.

**Before you get in**

Agree on the price before you board. This is not optional. State your destination by its street name or a specific landmark rather than by tourist shorthand: asking for "the French Quarter" or "the Promenade" signals someone who may not know the actual distance. Showing the destination on a map, with the route visible, tends to reduce inflated opening quotes considerably.

Once you have agreed, state it clearly: "Rue Dumas, 80 rupees?" and wait for a nod.

**Full-day hire**

Hiring an auto-rickshaw for the day to reach Chunnambar Boat House, Auroville, or the outer beaches is a reasonable alternative to renting a scooter. Settle the complete itinerary, the total price, and the number of hours before you set off. Never leave pricing open-ended on a full-day hire.

**Small change**

Carry a supply of 20, 50, and 100-rupee notes. If you hand a driver a 500-rupee note for an 80-rupee fare, he will frequently announce that change is unavailable. Carry small notes and the problem does not arise.

**Booking by app**

Namma Yatri is the most reliable open-mobility auto-booking app in South India, connecting directly to drivers with transparent, zero-commission pricing. Rapido offers bike taxis for solo travellers at a lower fare. Uber operates auto-rickshaw hailing with a locked-in digital price at the major transit hubs.`,
  },

  {
    id: "bicycles-and-scooters",
    title: "Bicycles and scooters",
    cardTitle: "Bikes & Scooters",
    category: "local",
    teaser:
      "Two wheels are the best way to explore Pondicherry. Bicycles suit the flat White Town; scooters open up Auroville and the outer beaches. Always rent a yellow-plate vehicle.",
    photo: "bicycle-rue-dumas.jpg",
    body: `**Bicycles**

Pondicherry is entirely flat, and the White Town's grid layout makes cycling almost effortless. A bicycle lets you glide past colonial facades, stop at a café without worrying about parking, and cover the whole of the French Quarter in under an hour.

Standard bicycles rent for 80 to 150 rupees per day; geared or mountain bikes cost 150 to 250 rupees. A refundable deposit of 500 to 1,000 rupees plus a copy of a government ID (Aadhaar or passport) is standard at most rental points.

Rental points cluster around Mission Street and MG Road, with more near the Botanical Garden and along Goubert Avenue; most have bikes ready to go on the spot. A few heritage cultural centres in White Town also rent out vintage-style bicycles, though some now focus more on their own guided morning cycling tours than walk-in day rentals, so it is worth checking what is actually available before turning up. Many boutique guesthouses in the White Town offer bicycles free of charge to guests: ask when you check in.

**Scooters and motorbikes**

A scooter opens up Auroville, the outer beaches (Eden Beach, Paradise Beach at Chunnambar), and the stretch of coast north toward Mahabalipuram. The Honda Activa and Suzuki Access are the standard rental vehicles; Royal Enfield Classic 350s are available if you want something with more character on the open road.

Rates per day: mopeds and small scooters, 200 to 300 rupees; standard scooters, 350 to 500 rupees, rising to 600 or more on peak long weekends; Royal Enfield 350, 800 to 1,200 rupees.

**The yellow-plate rule**

This is the most important thing to know before renting a scooter in Pondicherry. Only rent vehicles with yellow-on-black commercial licence plates. Private white plates are not legally authorised for rental use. If traffic police stop you on a private-plated rental, the vehicle can be impounded on the spot and you face fines for unauthorised commercial usage. Many informal shops will try to hand you a private-plate scooter; decline and walk away.

The Royal Brothers app remains the most reliable and fully legal option, guaranteeing registered commercial vehicles with insurance and multiple pickup points across Pondicherry. Onn Bikes has scaled back its local presence in favour of larger cities, but independent garages on Mission Street cover much of that gap. For physical shops, the highest concentration of legitimate rental garages is on Mission Street, Nehru Street, and near the railway station. If you are staying close to Auroville, shops on Auroville Main Road near Kuilapalayam specialise in rugged mopeds and electric scooters suited to the unpaved forest tracks inside the township.

**Before you ride**

Photograph the vehicle's existing scratches and check the tyres, brakes, and lights before leaving the rental shop. Agree on the current fuel level: most rentals are handed over nearly empty. Your first stop is a petrol station. The Indian Oil station near the New Bus Stand and the HP pump on SV Patel Salai are both convenient. Carry your rental agreement and driver's licence, particularly on the road between Pondicherry (a Union Territory) and the surrounding Tamil Nadu state, where Auroville sits: there is an active police checkpoint at the border and officers are notably strict with tourists there. Helmets are legally required for both rider and passenger once you leave the town centre for Auroville or the outer beaches, so ask the rental shop for two helmets if you are riding as a pair.`,
    faq: [
      { question: "How can I rent a bike in Pondicherry?", answer: "Bike and scooter rentals are widely available in White Town, near the bus stand, and around major tourist areas. You will generally need a valid driving license and an identity document. Daily rental rates vary according to the vehicle type and season. Before accepting the bike, check the brakes, lights, fuel level, and any existing scratches, and confirm whether insurance is included in the rental agreement. A scooter is especially useful for reaching [Auroville](/discover/auroville)." },
    ],
  },
];

export function getTransportArticle(id: string): TransportArticle | undefined {
  return transportArticles.find((a) => a.id === id);
}

export function getTransportByCategory(
  category: TransportCategory
): TransportArticle[] {
  return transportArticles.filter((a) => a.category === category);
}
