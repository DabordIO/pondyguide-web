export interface RestaurantGuide {
  id: string;
  slug: string;
  title: string;
  restaurantIds: string[];
}

export const restaurantGuides: RestaurantGuide[] = [
  {
    id: "french",
    slug: "best-french-restaurants",
    title: "Best French Restaurants in Pondicherry",
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
