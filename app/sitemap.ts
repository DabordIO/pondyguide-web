import type { MetadataRoute } from "next";
import { historyArticles } from "@/data/history";
import { historyArticlesTa } from "@/data/ta/history";
import { historyArticlesFr } from "@/data/fr/history";
import { institutionArticles } from "@/data/institutions";
import { institutionArticlesFr } from "@/data/fr/institutions";
import { figures } from "@/data/figures";
import { figuresTa } from "@/data/ta/figures";
import { figuresFr } from "@/data/fr/figures";
import { restaurants } from "@/data/restaurants";
import { restaurantGuides } from "@/data/restaurantGuides";
import { restaurantGuidesTa } from "@/data/ta/restaurantGuides";
import { hotels } from "@/data/hotels";
import { hotelGuides } from "@/data/hotelGuides";
import { hotelGuidesTa } from "@/data/ta/hotelGuides";
import { festivals } from "@/data/festivals";
import { streets } from "@/data/streets";
import { streetsTa } from "@/data/ta/streets";
import { streetsFr } from "@/data/fr/streets";
import { sites } from "@/data/sites";
import { sitesTa } from "@/data/ta/sites";
import { sitesFr } from "@/data/fr/sites";
import { aurovilleArticles } from "@/data/auroville";
import { exploreArticles } from "@/data/explore";

const BASE = "https://www.pondyguide.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, priority: 1.0 },
    { url: `${BASE}/history`, priority: 0.9 },
    { url: `${BASE}/discover`, priority: 0.9 },
    { url: `${BASE}/restaurants`, priority: 0.9 },
    { url: `${BASE}/hotels`, priority: 0.9 },
    { url: `${BASE}/festivals`, priority: 0.9 },
    { url: `${BASE}/plan`, priority: 0.8 },
    { url: `${BASE}/plan/getting-here`, priority: 0.7 },
    { url: `${BASE}/plan/getting-around`, priority: 0.7 },
    { url: `${BASE}/plan/healthcare`, priority: 0.7 },
    { url: `${BASE}/plan/practical`, priority: 0.7 },
    { url: `${BASE}/discover/white-town`, priority: 0.8 },
    { url: `${BASE}/discover/landmarks`, priority: 0.8 },
    { url: `${BASE}/discover/auroville`, priority: 0.8 },
    { url: `${BASE}/discover/explore`, priority: 0.8 },
    { url: `${BASE}/about`, priority: 0.5 },
    { url: `${BASE}/contact`, priority: 0.3 },
    { url: `${BASE}/sitemap`, priority: 0.2 },
    { url: `${BASE}/ta`, priority: 0.9 },
    { url: `${BASE}/ta/history`, priority: 0.8 },
    { url: `${BASE}/ta/history/institutions`, priority: 0.7 },
    { url: `${BASE}/ta/history/lives-and-legacies`, priority: 0.7 },
    { url: `${BASE}/ta/discover/white-town`, priority: 0.7 },
    { url: `${BASE}/ta/discover/landmarks`, priority: 0.7 },
    { url: `${BASE}/ta/restaurants`, priority: 0.7 },
    { url: `${BASE}/ta/hotels`, priority: 0.7 },
    { url: `${BASE}/ta/about`, priority: 0.4 },
    { url: `${BASE}/ta/contact`, priority: 0.3 },
    { url: `${BASE}/ta/sitemap`, priority: 0.2 },
    { url: `${BASE}/fr`, priority: 0.9 },
    { url: `${BASE}/fr/history`, priority: 0.8 },
    { url: `${BASE}/fr/history/institutions`, priority: 0.7 },
    { url: `${BASE}/fr/history/lives-and-legacies`, priority: 0.7 },
    { url: `${BASE}/fr/discover/white-town`, priority: 0.7 },
    { url: `${BASE}/fr/discover/landmarks`, priority: 0.7 },
    { url: `${BASE}/fr/about`, priority: 0.4 },
    { url: `${BASE}/fr/contact`, priority: 0.3 },
  ].map(p => ({ ...p, lastModified: new Date(), changeFrequency: "monthly" as const }));

  const historyPages = historyArticles.map(a => ({
    url: `${BASE}/history/${a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const institutionPages = institutionArticles.map(a => ({
    url: `${BASE}/history/institutions/${a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const figurePages = figures.map(f => ({
    url: `${BASE}/history/lives-and-legacies/${f.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const restaurantPages = restaurants.map(r => ({
    url: `${BASE}/restaurants/${r.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const restaurantGuidePages = restaurantGuides
    .filter(g => g.intro)
    .map(g => ({
      url: `${BASE}/restaurants/guides/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const hotelPages = hotels.map(h => ({
    url: `${BASE}/hotels/${h.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const hotelGuidePages = hotelGuides
    .filter(g => g.intro)
    .map(g => ({
      url: `${BASE}/hotels/guides/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const festivalPages = festivals.map(f => ({
    url: `${BASE}/festivals/${f.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const streetPages = streets.map(s => ({
    url: `${BASE}/discover/white-town/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const landmarkPages = sites.map(s => ({
    url: `${BASE}/discover/landmarks/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const aurovillePages = aurovilleArticles.map(a => ({
    url: `${BASE}/discover/auroville/${a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const explorePages = exploreArticles.map(a => ({
    url: `${BASE}/discover/explore/${a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const historyPagesTa = historyArticlesTa.map(a => ({
    url: `${BASE}/ta/history/${a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const figurePagesTa = figuresTa.map(f => ({
    url: `${BASE}/ta/history/lives-and-legacies/${f.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const restaurantGuidePagesTa = restaurantGuidesTa
    .filter(g => g.intro)
    .map(g => {
      const en = restaurantGuides.find(guide => guide.id === g.id);
      return en ? { url: `${BASE}/ta/restaurants/guides/${en.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 } : null;
    })
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const hotelGuidePagesTa = hotelGuidesTa
    .filter(g => g.intro)
    .map(g => {
      const en = hotelGuides.find(guide => guide.id === g.id);
      return en ? { url: `${BASE}/ta/hotels/guides/${en.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 } : null;
    })
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const streetPagesTa = streetsTa.map(s => ({
    url: `${BASE}/ta/discover/white-town/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const landmarkPagesTa = sitesTa.map(s => ({
    url: `${BASE}/ta/discover/landmarks/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const historyPagesFr = historyArticlesFr.map(a => ({
    url: `${BASE}/fr/history/${a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const institutionPagesFr = institutionArticlesFr.map(a => ({
    url: `${BASE}/fr/history/institutions/${a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const figurePagesFr = figuresFr.map(f => ({
    url: `${BASE}/fr/history/lives-and-legacies/${f.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const streetPagesFr = streetsFr.map(s => ({
    url: `${BASE}/fr/discover/white-town/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const landmarkPagesFr = sitesFr.map(s => ({
    url: `${BASE}/fr/discover/landmarks/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...historyPages,
    ...institutionPages,
    ...figurePages,
    ...restaurantPages,
    ...restaurantGuidePages,
    ...hotelPages,
    ...hotelGuidePages,
    ...festivalPages,
    ...streetPages,
    ...landmarkPages,
    ...aurovillePages,
    ...explorePages,
    ...historyPagesTa,
    ...figurePagesTa,
    ...restaurantGuidePagesTa,
    ...hotelGuidePagesTa,
    ...streetPagesTa,
    ...landmarkPagesTa,
    ...historyPagesFr,
    ...institutionPagesFr,
    ...figurePagesFr,
    ...streetPagesFr,
    ...landmarkPagesFr,
  ];
}
