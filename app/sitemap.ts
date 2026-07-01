import type { MetadataRoute } from "next";
import { historyArticles } from "@/data/history";
import { institutionArticles } from "@/data/institutions";
import { figures } from "@/data/figures";
import { restaurants } from "@/data/restaurants";
import { hotels } from "@/data/hotels";
import { festivals } from "@/data/festivals";
import { streets } from "@/data/streets";
import { sites } from "@/data/sites";
import { aurovilleArticles } from "@/data/auroville";
import { exploreArticles } from "@/data/explore";

const BASE = "https://pondyguide.com";

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

  const hotelPages = hotels.map(h => ({
    url: `${BASE}/hotels/${h.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
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

  return [
    ...staticPages,
    ...historyPages,
    ...institutionPages,
    ...figurePages,
    ...restaurantPages,
    ...hotelPages,
    ...festivalPages,
    ...streetPages,
    ...landmarkPages,
    ...aurovillePages,
    ...explorePages,
  ];
}
