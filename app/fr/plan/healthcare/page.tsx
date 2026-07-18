import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { healthcareArticles } from "@/data/healthcare";
import { healthcareArticlesFr } from "@/data/fr/healthcare";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Santé à Pondichéry, hôpitaux et cliniques",
  description: "De JIPMER aux cliniques privées, comprenez les options de santé de Pondichéry avant d'en avoir besoin.",
  alternates: {
    languages: {
      en: "/plan/healthcare",
      fr: "/fr/plan/healthcare",
      "x-default": "/plan/healthcare",
    },
  },
};

const CATEGORY_LABELS: Record<string, string> = {
  emergency: "Hôpitaux publics",
  private: "Cliniques privées",
  pharmacy: "Pharmacies",
};

const CATEGORY_ORDER = ["emergency", "private", "pharmacy"];

export default function HealthcarePageFr() {
  const byCategory = CATEGORY_ORDER.map(cat => ({
    cat,
    items: healthcareArticles
      .filter(a => a.category === cat)
      .map(en => {
        const fr = healthcareArticlesFr.find(a => a.id === en.id);
        return fr ? { en, fr } : null;
      })
      .filter((x): x is NonNullable<typeof x> => Boolean(x)),
  })).filter(g => g.items.length > 0);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/plan/healthcare" frHref="/fr/plan/healthcare" current="fr" />
      <Link href="/fr/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Préparer</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Urgences</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Urgences à Pondichéry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        Pondichéry est mieux desservie médicalement que la plupart des villes indiennes de sa taille. JIPMER (Jawaharlal Institute of Postgraduate Medical Education and Research) est l'un des meilleurs hôpitaux publics du pays et fournit des soins d'urgence gratuits 24h/24.
      </p>

      {byCategory.map(({ cat, items }) => (
        <div key={cat} style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
            {CATEGORY_LABELS[cat]}
          </h2>
          {items.map(({ en, fr }, i) => (
            <div key={en.id} style={{ marginBottom: i < items.length - 1 ? 36 : 0 }}>
              {en.photo && (
                <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
                  <Image src={`/healthcare/${en.photo}`} alt={fr.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
              )}
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{fr.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "#6b6560", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>{fr.teaser}</p>
              <ArticleBody text={fr.body} />
            </div>
          ))}
        </div>
      ))}

      <AppBanner />
    </div>
  );
}
