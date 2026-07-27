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
  { label: "Plan Your Visit", href: "/plan" },
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

// Trimmed to the core sections to keep the top nav from getting crowded — Vies et
// heritages, Institutions francaises, Rues and Monuments are still on the homepage
// and linked from the footer, just not repeated in the top nav.
export const navFr: NavItem[] = [
  { label: "Histoire", href: "/fr/history" },
  { label: "Hôtels", href: "/fr/hotels" },
  { label: "Restaurants", href: "/fr/restaurants" },
  { label: "Auroville", href: "/fr/discover/auroville" },
  { label: "Fêtes", href: "/fr/festivals" },
  { label: "Avant de partir", href: "/fr/plan" },
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
