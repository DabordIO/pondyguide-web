import Link from "next/link";
import type { Metadata } from "next";
import { practicalTopics } from "@/data/practical";
import { practicalTopicsFr } from "@/data/fr/practical";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Guide pratique de Pondichéry pour les primo-visiteurs",
  description: "Conseils sur la devise, les cartes SIM, les vêtements, l'eau, le pourboire et les erreurs courantes des visiteurs à Pondichéry.",
  alternates: {
    languages: {
      en: "/plan/practical",
      fr: "/fr/plan/practical",
      "x-default": "/plan/practical",
    },
  },
};

const SECTION_LABELS: Record<string, string> = {
  transport: "Transport",
  service: "Services & argent",
  tips: "Conseils & étiquette",
};

const SECTION_ORDER = ["transport", "service", "tips"];

export default function PracticalPageFr() {
  const bySectionArr = SECTION_ORDER.map(sec => ({
    sec,
    items: practicalTopics
      .filter(t => t.section === sec)
      .map(en => {
        const fr = practicalTopicsFr.find(t => t.id === en.id);
        return fr ? { en, fr } : null;
      })
      .filter((x): x is NonNullable<typeof x> => Boolean(x)),
  })).filter(g => g.items.length > 0);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/plan/practical" frHref="/fr/plan/practical" current="fr" />
      <Link href="/fr/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Préparer</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Pratique</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Informations pratiques
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        L'essentiel : quoi emporter, à quoi s'attendre, et ce qui prend le plus de visiteurs au dépourvu.
      </p>

      {bySectionArr.map(({ sec, items }) => (
        <div key={sec} style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
            {SECTION_LABELS[sec]}
          </h2>
          {items.map(({ en, fr }, i) => (
            <div key={en.id} style={{ marginBottom: i < items.length - 1 ? 36 : 0 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{fr.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "#6b6560", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>{fr.summary}</p>
              <ArticleBody text={fr.body} />
            </div>
          ))}
        </div>
      ))}

      <AppBanner />
    </div>
  );
}
