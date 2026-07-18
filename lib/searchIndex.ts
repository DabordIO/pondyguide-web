import { historyArticles } from "@/data/history";
import { historyArticlesFr } from "@/data/fr/history";
import { historyArticlesTa } from "@/data/ta/history";
import { institutionArticles } from "@/data/institutions";
import { institutionArticlesFr } from "@/data/fr/institutions";
import { institutionArticlesTa } from "@/data/ta/institutions";
import { figures } from "@/data/figures";
import { figuresFr } from "@/data/fr/figures";
import { figuresTa } from "@/data/ta/figures";
import { streets } from "@/data/streets";
import { streetsFr } from "@/data/fr/streets";
import { streetsTa } from "@/data/ta/streets";
import { sites } from "@/data/sites";
import { sitesFr } from "@/data/fr/sites";
import { sitesTa } from "@/data/ta/sites";
import { hotels } from "@/data/hotels";
import { hotelsFr } from "@/data/fr/hotels";
import { hotelGuides } from "@/data/hotelGuides";
import { hotelGuidesFr } from "@/data/fr/hotelGuides";
import { hotelGuidesTa } from "@/data/ta/hotelGuides";
import { restaurants } from "@/data/restaurants";
import { restaurantsFr } from "@/data/fr/restaurants";
import { restaurantGuides } from "@/data/restaurantGuides";
import { restaurantGuidesFr } from "@/data/fr/restaurantGuides";
import { restaurantGuidesTa } from "@/data/ta/restaurantGuides";
import { aurovilleArticles } from "@/data/auroville";
import { aurovilleArticlesFr } from "@/data/fr/auroville";
import { festivals } from "@/data/festivals";
import { festivalsFr } from "@/data/fr/festivals";
import { exploreArticles } from "@/data/explore";
import { exploreArticlesFr } from "@/data/fr/explore";

export type SearchLocale = "en" | "fr" | "ta";

export interface SearchEntry {
  title: string;
  href: string;
  category: string;
}

const CATEGORY_LABELS: Record<SearchLocale, Record<string, string>> = {
  en: {
    history: "History",
    institution: "French Institution",
    figure: "Lives & Legacies",
    street: "White Town Street",
    landmark: "Landmark",
    hotel: "Hotel",
    hotelGuide: "Hotel Guide",
    restaurant: "Restaurant",
    restaurantGuide: "Restaurant Guide",
    auroville: "Auroville",
    festival: "Festival",
    explore: "Discover & Explore",
  },
  fr: {
    history: "Histoire",
    institution: "Institution française",
    figure: "Vies et héritages",
    street: "Rue de White Town",
    landmark: "Monument",
    hotel: "Hôtel",
    hotelGuide: "Guide hôtels",
    restaurant: "Restaurant",
    restaurantGuide: "Guide restaurants",
    auroville: "Auroville",
    festival: "Fête",
    explore: "Découvrir",
  },
  ta: {
    history: "வரலாறு",
    institution: "பிரெஞ்சு நிறுவனம்",
    figure: "ஆளுமைகள்",
    street: "வெள்ளையர் தெருக்கள்",
    landmark: "இடங்கள்",
    hotel: "ஹோட்டல்",
    hotelGuide: "ஹோட்டல் வழிகாட்டி",
    restaurant: "உணவகம்",
    restaurantGuide: "உணவக வழிகாட்டி",
    auroville: "ஆரோவில்",
    festival: "விழா",
    explore: "கண்டறியுங்கள்",
  },
};

function buildEn(): SearchEntry[] {
  const c = CATEGORY_LABELS.en;
  return [
    ...historyArticles.map(a => ({ title: a.title, href: `/history/${a.id}`, category: c.history })),
    ...institutionArticles.map(a => ({ title: a.title, href: `/history/institutions/${a.id}`, category: c.institution })),
    ...figures.map(f => ({ title: f.name, href: `/history/lives-and-legacies/${f.id}`, category: c.figure })),
    ...streets.map(s => ({ title: s.altName ?? s.name, href: `/discover/white-town/${s.id}`, category: c.street })),
    ...sites.map(s => ({ title: s.name, href: `/discover/landmarks/${s.id}`, category: c.landmark })),
    ...hotels.map(h => ({ title: h.name, href: `/hotels/${h.id}`, category: c.hotel })),
    ...hotelGuides.filter(g => g.intro).map(g => ({ title: g.title, href: `/hotels/guides/${g.slug}`, category: c.hotelGuide })),
    ...restaurants.map(r => ({ title: r.name, href: `/restaurants/${r.id}`, category: c.restaurant })),
    ...restaurantGuides.filter(g => g.intro).map(g => ({ title: g.title, href: `/restaurants/guides/${g.slug}`, category: c.restaurantGuide })),
    ...aurovilleArticles.map(a => ({ title: a.title, href: `/discover/auroville/${a.id}`, category: c.auroville })),
    ...festivals.map(f => ({ title: f.title, href: `/festivals/${f.id}`, category: c.festival })),
    ...exploreArticles.map(a => ({ title: a.title, href: `/discover/explore/${a.id}`, category: c.explore })),
  ];
}

function buildFr(): SearchEntry[] {
  const c = CATEGORY_LABELS.fr;
  return [
    ...historyArticlesFr.map(a => ({ title: a.title, href: `/fr/history/${a.id}`, category: c.history })),
    ...institutionArticlesFr.map(a => ({ title: a.title, href: `/fr/history/institutions/${a.id}`, category: c.institution })),
    ...figuresFr.map(f => ({ title: f.name, href: `/fr/history/lives-and-legacies/${f.id}`, category: c.figure })),
    ...streetsFr.map(s => {
      const en = streets.find(x => x.id === s.id);
      return { title: en?.altName ?? en?.name ?? s.id, href: `/fr/discover/white-town/${s.id}`, category: c.street };
    }),
    ...sitesFr.map(s => ({ title: s.name, href: `/fr/discover/landmarks/${s.id}`, category: c.landmark })),
    ...hotelsFr.map(h => ({ title: h.name, href: `/fr/hotels/${h.id}`, category: c.hotel })),
    ...hotelGuidesFr.filter(g => g.intro).map(g => {
      const en = hotelGuides.find(x => x.id === g.id);
      return en ? { title: g.title, href: `/fr/hotels/guides/${en.slug}`, category: c.hotelGuide } : null;
    }).filter((x): x is SearchEntry => Boolean(x)),
    ...restaurantsFr.map(r => ({ title: r.name, href: `/fr/restaurants/${r.id}`, category: c.restaurant })),
    ...restaurantGuidesFr.filter(g => g.intro).map(g => {
      const en = restaurantGuides.find(x => x.id === g.id);
      return en ? { title: g.title, href: `/fr/restaurants/guides/${en.slug}`, category: c.restaurantGuide } : null;
    }).filter((x): x is SearchEntry => Boolean(x)),
    ...aurovilleArticlesFr.map(a => ({ title: a.title, href: `/fr/discover/auroville/${a.id}`, category: c.auroville })),
    ...festivalsFr.map(f => ({ title: f.title, href: `/fr/festivals/${f.id}`, category: c.festival })),
    ...exploreArticlesFr.map(a => ({ title: a.title, href: `/fr/discover/explore/${a.id}`, category: c.explore })),
  ];
}

function buildTa(): SearchEntry[] {
  const c = CATEGORY_LABELS.ta;
  return [
    ...historyArticlesTa.map(a => ({ title: a.title, href: `/ta/history/${a.id}`, category: c.history })),
    ...institutionArticlesTa.map(a => ({ title: a.title, href: `/ta/history/institutions/${a.id}`, category: c.institution })),
    ...figuresTa.map(f => ({ title: f.name, href: `/ta/history/lives-and-legacies/${f.id}`, category: c.figure })),
    ...streetsTa.map(s => {
      const en = streets.find(x => x.id === s.id);
      return { title: en?.altName ?? en?.name ?? s.id, href: `/ta/discover/white-town/${s.id}`, category: c.street };
    }),
    ...sitesTa.map(s => ({ title: s.name, href: `/ta/discover/landmarks/${s.id}`, category: c.landmark })),
    ...hotelGuidesTa.map(g => {
      const en = hotelGuides.find(x => x.id === g.id);
      return en ? { title: g.title, href: `/ta/hotels/guides/${en.slug}`, category: c.hotelGuide } : null;
    }).filter((x): x is SearchEntry => Boolean(x)),
    ...restaurantGuidesTa.map(g => {
      const en = restaurantGuides.find(x => x.id === g.id);
      return en ? { title: g.title, href: `/ta/restaurants/guides/${en.slug}`, category: c.restaurantGuide } : null;
    }).filter((x): x is SearchEntry => Boolean(x)),
  ];
}

export function getSearchIndex(locale: SearchLocale): SearchEntry[] {
  if (locale === "fr") return buildFr();
  if (locale === "ta") return buildTa();
  return buildEn();
}
