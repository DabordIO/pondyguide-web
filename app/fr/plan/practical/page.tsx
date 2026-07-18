import Link from "next/link";
import type { Metadata } from "next";
import { practicalTopics } from "@/data/practical";
import { practicalTopicsFr } from "@/data/fr/practical";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";

export const metadata: Metadata = {
  title: "Guide pratique de Pondichéry pour les primo-visiteurs",
  description: "Conseils sur la devise, les cartes SIM, les vêtements, l'eau, le pourboire et les erreurs courantes des visiteurs à Pondichéry.",
  alternates: {
    canonical: "/fr/plan/practical",
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

// La FAQ "getting-around" vit sur sa page dédiée (/fr/plan/getting-around) pour éviter un schéma FAQPage dupliqué.
const topicFaq = (t: { id: string; faq?: { question: string; answer: string }[] }) =>
  t.id === "getting-around" ? [] : (t.faq ?? []);

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

  const faqEntries = practicalTopicsFr.flatMap(topicFaq);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      {faqEntries.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqEntries.map(item => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
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
              {topicFaq(fr).length > 0 && (
                <div style={{ marginTop: 28 }}>
                  <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
                    Questions fréquentes
                  </h4>
                  {topicFaq(fr).map((item, fi) => (
                    <div key={fi} style={{ marginBottom: 16 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
                      <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      <AppBanner />
    </div>
  );
}
