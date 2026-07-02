export interface ViatorExperience {
  id: string;
  title: string;
  category: "guided" | "hands-on";
  duration: string;
  price: string;
  gradient: string;
  photo?: string;
  teaser: string;
  viatorUrl: string;
}

export const experiences: ViatorExperience[] = [
  // ── Guided Experiences ────────────────────────────────────────────────────
  {
    id: "french-quarters-walk",
    title: "French Quarters Walk",
    category: "guided",
    duration: "2 hours",
    price: "from $26",
    gradient: "linear-gradient(135deg, #92400e 0%, #b45309 100%)",
    photo: "french-quarters-walk.jpg",
    teaser: "Stroll the most beautiful colonial streetscape in India with a local guide who knows every courtyard, every plaque, and every story behind the yellow walls.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Pondicherry-heritage-walking-tour-of-French-quarters/d22690-18983P159",
  },
  {
    id: "city-bike-tour",
    title: "City Bike Tour",
    category: "guided",
    duration: "2 hours",
    price: "from $20",
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
    photo: "city-bike-tour.jpg",
    teaser: "Pedal through the French, Tamil, and Muslim quarters on a vintage-style bicycle, the fastest way to feel like a local in a city built for slow travel.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Pondy-Cycle-Tour/d22690-8207P5",
  },
  {
    id: "full-day-city-tour",
    title: "Full Day City Tour",
    category: "guided",
    duration: "7–8 hours",
    price: "from $47",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #3b82f6 100%)",
    photo: "full-day-city-tour.jpg",
    teaser: "From the Ashram to Auroville, with refreshments included: the definitive guided day for first-time visitors who want to understand what makes this city unlike anywhere else.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Guided-City-Tour-with-complimentary-refreshments/d22690-125365P1",
  },
  {
    id: "pichavaram-mangrove",
    title: "Pichavaram Mangrove & Nataraja Temple",
    category: "guided",
    duration: "Day trip",
    price: "from $251",
    gradient: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
    photo: "pichavaram-mangrove.jpg",
    teaser: "Glide by boat through one of the world's largest mangrove forests, then visit the 10th-century Nataraja Temple at Chidambaram: a day trip with no equivalent.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Day-Trip-to-Pichavaram-Mangrove-Forest-and-Thillai-Nataraja-Temple-in-Chidambaram-from-Pondicherry-with-lunch/d22690-50182P509",
  },
  {
    id: "mahabalipuram-day-trip",
    title: "Mahabalipuram Day Trip",
    category: "guided",
    duration: "Day trip",
    price: "from $100",
    gradient: "linear-gradient(135deg, #78350f 0%, #d97706 100%)",
    photo: "mahabalipuram-tour.jpg",
    teaser: "UNESCO World Heritage rock-cut temples carved by the Pallava kings in the 7th century, two hours up the coast, with guide, car, and lunch included.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Mahabalipuram-tour-from-Pondicherry-with-guide-car-and-lunch/d22690-18983P195",
  },

  {
    id: "kayaking-backwaters",
    title: "Kayaking in the Backwaters",
    category: "guided",
    duration: "1 hour",
    price: "from $10",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)",
    photo: "kayaking-backwaters.jpg",
    teaser: "Paddle through Pondicherry's quiet backwater channels, mangrove-lined, birdlife-rich, and nothing like the coast road. The most peaceful hour you'll spend here.",
    viatorUrl: "https://www.getyourguide.com/pondichery-l32421/kayak-dans-les-backwaters-de-pondichery-t770965/",
  },
  {
    id: "arikamedu-roman-trail",
    title: "Arikamedu Roman Trail",
    category: "guided",
    duration: "2.5 hours",
    price: "from $29",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)",
    photo: "arikamedu-roman-trail.jpg",
    teaser: "Two thousand years ago, Roman ships anchored at this site and traded wine for pepper. A walking guide brings the archaeology to life in a way no sign ever could.",
    viatorUrl: "https://www.getyourguide.com/pondichery-l32421/sur-les-traces-de-rome-a-pondichery-une-promenade-a-arikamedu-t1045609/",
  },

  // ── Hands-On Pondicherry ──────────────────────────────────────────────────
  {
    id: "cooking-class",
    title: "Indian Cooking Class",
    category: "hands-on",
    duration: "4 hours",
    price: "from $28",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #ea580c 100%)",
    photo: "cooking-class.jpg",
    teaser: "Learn to cook traditional South Indian dishes from scratch in a hands-on class, the most-reviewed experience in Pondicherry, rated 4.9 by 69 travellers.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Indian-Cooking-Class-in-Pondicherry/d22690-8207P1",
  },
  {
    id: "kolam-class",
    title: "Kolam Art Class",
    category: "hands-on",
    duration: "1.5 hours",
    price: "from $10",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)",
    photo: "kolam-class.jpg",
    teaser: "Every Tamil doorstep begins the day with kolam, intricate geometric patterns drawn in rice flour. Learn the tradition, the meaning, and the technique firsthand.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Kolam-Class-in-Pondicherry/d22690-8207P3",
  },
  {
    id: "pottery-workshop",
    title: "Pottery Workshop",
    category: "hands-on",
    duration: "1 hour",
    price: "from $20",
    gradient: "linear-gradient(135deg, #78350f 0%, #b45309 100%)",
    photo: "pottery-workshop.jpg",
    teaser: "Shape clay on the wheel at the SITA Cultural Centre: a meditative hour that leaves you with a handmade piece and a new respect for craft.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Hands-On-Pottery-Workshop-at-Sita-Cultural-Center/d22690-8207P7",
  },
  {
    id: "mehendi-class",
    title: "Mehendi Art Class",
    category: "hands-on",
    duration: "1.5 hours",
    price: "from $12",
    gradient: "linear-gradient(135deg, #831843 0%, #db2777 100%)",
    photo: "mehendi-class.jpg",
    teaser: "Henna art has decorated hands at weddings and festivals for centuries. Make your own natural paste, learn the history, and leave with elaborate patterns on your skin.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Mehendi-class/d22690-8207P4",
  },
  {
    id: "creole-cooking",
    title: "French-Creole Cooking",
    category: "hands-on",
    duration: "3 hours",
    price: "from $99",
    gradient: "linear-gradient(135deg, #1c1917 0%, #57534e 100%)",
    photo: "creole-cooking.jpg",
    teaser: "Cook with Anita's family and taste the cuisine that exists nowhere else on earth, a fusion of French, Vietnamese, Creole, and Tamil flavours born in Pondicherry's unique history.",
    viatorUrl: "https://www.viator.com/tours/Pondicherry/Explore-South-Indian-Food-in-a-Private-In-Home-Dining-Experience-in-Alwarpet-Chennai/d22690-7626P80",
  },
  {
    id: "street-food-tour",
    title: "Street Food Tour & Tasting",
    category: "hands-on",
    duration: "2 hours",
    price: "from $32",
    gradient: "linear-gradient(135deg, #713f12 0%, #ca8a04 100%)",
    photo: "street-food-tour.jpg",
    teaser: "Pondicherry's street food is a world of its own: banana-leaf meals, Tamil snacks, Indo-French pastries. A guide who knows every stall takes you through it all.",
    viatorUrl: "https://www.getyourguide.com/pondichery-l32421/saveurs-de-pondichery-visite-guidee-et-degustation-de-street-food-t1130490/",
  },
  {
    id: "saree-draping-workshop",
    title: "Saree Draping Workshop",
    category: "hands-on",
    duration: "1.5 hours",
    price: "from $9",
    gradient: "linear-gradient(135deg, #4a044e 0%, #a21caf 100%)",
    photo: "saree-draping-workshop.jpg",
    teaser: "Learn to drape a saree the right way: the history behind each style, the stories tied to the cloth, and how to carry yourself with the grace it deserves.",
    viatorUrl: "https://www.getyourguide.com/auroville-l123545/pondichery-atelier-de-drapage-du-sari-t925379/",
  },
];

export const guidedExperiences = experiences.filter((e) => e.category === "guided");
export const handsOnExperiences = experiences.filter((e) => e.category === "hands-on");
