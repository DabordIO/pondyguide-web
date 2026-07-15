export type NavItem = { label: string; href: string };

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

// Mirrors the sections actually published on the Tamil homepage (app/ta/page.tsx) —
// items without a Tamil translation yet (Discover overview, Auroville, Festivals, Plan) are omitted.
export const navTa: NavItem[] = [
  { label: "வாழ்க்கை வரலாறுகள்", href: "/ta/history/lives-and-legacies" },
  { label: "வெள்ளை நகர் தெருக்கள்", href: "/ta/discover/white-town" },
  { label: "தளங்களும் சின்னங்களும்", href: "/ta/discover/landmarks" },
  { label: "உணவகங்கள்", href: "/ta/restaurants" },
  { label: "ஹோட்டல்கள்", href: "/ta/hotels" },
];

export function isTamil(pathname: string): boolean {
  return pathname === "/ta" || pathname.startsWith("/ta/");
}
