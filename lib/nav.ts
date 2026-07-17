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
// Short single-line labels for the compact top nav — the fuller phrasing is kept
// on the homepage section headings and footer, which have more room.
export const navTa: NavItem[] = [
  { label: "வரலாறு", href: "/ta/history" },
  { label: "ஆளுமைகள்", href: "/ta/history/lives-and-legacies" },
  { label: "ஹோட்டல்கள்", href: "/ta/hotels" },
  { label: "தெருக்கள்", href: "/ta/discover/white-town" },
  { label: "உணவகங்கள்", href: "/ta/restaurants" },
  { label: "இடங்கள்", href: "/ta/discover/landmarks" },
];

// Mirrors the sections actually published on the French homepage (app/fr/page.tsx), in the
// same order — items without a French translation yet (Discover, Hotels, Restaurants, Auroville,
// Festivals, Plan) are omitted.
export const navFr: NavItem[] = [
  { label: "Histoire", href: "/fr/history" },
  { label: "Vies et héritages", href: "/fr/history/lives-and-legacies" },
  { label: "Institutions françaises", href: "/fr/history/institutions" },
  { label: "Rues", href: "/fr/discover/white-town" },
  { label: "Monuments", href: "/fr/discover/landmarks" },
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
