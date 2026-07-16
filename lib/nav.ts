export type NavItem = { label: string; href: string };
export type Locale = "en" | "ta" | "fr";

export const navEn: NavItem[] = [
  { label: "History", href: "/history" },
  { label: "Legacies", href: "/history/lives-and-legacies" },
  { label: "Discover", href: "/discover" },
  { label: "Hotels", href: "/hotels" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Auroville", href: "/discover/auroville" },
  { label: "Festivals", href: "/festivals" },
  { label: "Plan", href: "/plan" },
];

// Mirrors the sections actually published on the Tamil homepage (app/ta/page.tsx), in the
// same order — items without a Tamil translation yet (Discover overview, Auroville, Festivals, Plan) are omitted.
export const navTa: NavItem[] = [
  { label: "புதுச்சேரியின் கதை", href: "/ta/history" },
  { label: "வாழ்க்கை வரலாறுகள்", href: "/ta/history/lives-and-legacies" },
  { label: "ஹோட்டல்கள்", href: "/ta/hotels" },
  { label: "வெள்ளை நகர் தெருக்கள்", href: "/ta/discover/white-town" },
  { label: "உணவகங்கள்", href: "/ta/restaurants" },
  { label: "வரலாற்றுச் சின்னங்களும் முக்கிய இடங்களும்", href: "/ta/discover/landmarks" },
];

// Mirrors the sections actually published on the French homepage (app/fr/page.tsx), in the
// same order — items without a French translation yet (Discover, Hotels, Restaurants, Auroville,
// Festivals, Plan) are omitted.
export const navFr: NavItem[] = [
  { label: "Histoire", href: "/fr/history" },
  { label: "Vies et héritages", href: "/fr/history/lives-and-legacies" },
  { label: "Institutions françaises", href: "/fr/history/institutions" },
];

export function isTamil(pathname: string): boolean {
  return pathname === "/ta" || pathname.startsWith("/ta/");
}

export function isFrench(pathname: string): boolean {
  return pathname === "/fr" || pathname.startsWith("/fr/");
}

export function getLocale(pathname: string): Locale {
  if (isTamil(pathname)) return "ta";
  if (isFrench(pathname)) return "fr";
  return "en";
}
