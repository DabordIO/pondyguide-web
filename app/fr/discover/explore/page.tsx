import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { exploreArticles } from "@/data/explore";
import { exploreArticlesFr } from "@/data/fr/explore";
import { truncate } from "@/lib/truncate";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Que faire à Pondichéry, balades et excursions",
  description: "Balades, ateliers et excursions autour de Pondichéry, des ruines romaines d'Arikamedu aux mangroves de Pichavaram.",
  alternates: {
    canonical: "/fr/discover/explore",
    languages: {
      en: "/discover/explore",
      fr: "/fr/discover/explore",
      "x-default": "/discover/explore",
    },
  },
};

const CATEGORY_LABELS: Record<string, string> = {
  walk: "Balades",
  daytrip: "Excursions",
  activity: "Activités",
  theme: "Guides thématiques",
};

const CATEGORY_ORDER = ["walk", "daytrip", "activity", "theme"];

export default function ExplorePageFr() {
  const byCategory = CATEGORY_ORDER.map(cat => ({
    cat,
    items: exploreArticles.filter(a => a.category === cat),
  })).filter(g => g.items.length > 0);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/discover/explore" frHref="/fr/discover/explore" current="fr" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>À faire</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Balades, excursions et expériences
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        Pondichéry est une bonne base pour explorer la côte sud du Tamil Nadu. La ville elle-même récompense une visite au rythme lent. Au-delà, les excursions méritent véritablement l'effort.
      </p>

      {byCategory.map(({ cat, items }) => (
        <div key={cat} style={{ marginBottom: 52 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
            {CATEGORY_LABELS[cat]}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {items.map(a => {
              const fr = exploreArticlesFr.find(x => x.id === a.id);
              if (!fr) return null;
              return (
                <Link key={a.id} href={`/fr/discover/explore/${a.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
                  {a.photo && (
                    <div style={{ position: "relative", width: "100%", height: 160 }}>
                      <Image src={`/explore/${a.photo}`} alt={fr.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                    </div>
                  )}
                  <div style={{ padding: "14px 16px 16px" }}>
                    {fr.duration && <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 6 }}>{fr.duration}</p>}
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{fr.cardTitle ?? fr.title}</p>
                    <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(fr.teaser, 110)}</p>
                    <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>Lire la suite →</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
