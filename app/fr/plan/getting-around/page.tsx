import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { transportArticles } from "@/data/transport";
import { transportArticlesFr } from "@/data/fr/transport";
import { practicalTopicsFr } from "@/data/fr/practical";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";

export const metadata: Metadata = {
  title: "Se déplacer à Pondichéry en auto, à vélo et en bus",
  description: "Apprenez à circuler à Pondichéry en auto-rickshaw, à vélo, en scooter ou en taxi, et quand la marche suffit.",
  alternates: {
    canonical: "/fr/plan/getting-around",
    languages: {
      en: "/plan/getting-around",
      fr: "/fr/plan/getting-around",
      "x-default": "/plan/getting-around",
    },
  },
};

const idsInOrder = transportArticles.filter(a => a.category === "local").map(a => a.id);
const articles = idsInOrder
  .map(id => {
    const en = transportArticles.find(a => a.id === id);
    const fr = transportArticlesFr.find(a => a.id === id);
    return en && fr ? { en, fr } : null;
  })
  .filter((x): x is NonNullable<typeof x> => Boolean(x));

const walkabilityFaq = practicalTopicsFr.find(t => t.id === "getting-around")?.faq ?? [];
const faqEntries = [...walkabilityFaq, ...articles.flatMap(({ fr }) => fr.faq ?? [])];

export default function GettingAroundPageFr() {
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
      <LanguageToggle enHref="/plan/getting-around" frHref="/fr/plan/getting-around" current="fr" />
      <Link href="/fr/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Préparer</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Se déplacer</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Se déplacer en ville
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        Le quartier français est compact : il tient presque entièrement dans une marche de 20 minutes. Pour Auroville, les plages au sud de la ville, ou toute excursion à la journée, il vous faut un véhicule. Voici ce qui fonctionne.
      </p>

      {articles.map(({ en, fr }, i) => (
        <div key={en.id} style={{ marginBottom: 48, paddingBottom: i < articles.length - 1 ? 48 : 0, borderBottom: i < articles.length - 1 ? "1px solid #e8ddd4" : "none" }}>
          {en.photo && (
            <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
              <Image src={`/transport/${en.photo}`} alt={fr.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          )}
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 8 }}>{fr.title}</h2>
          <p style={{ fontSize: "1rem", color: "#6b6560", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>{fr.teaser}</p>
          <ArticleBody text={fr.body} />
          {fr.faq && fr.faq.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
                Questions fréquentes
              </h3>
              {fr.faq.map((item, fi) => (
                <div key={fi} style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
                  <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {walkabilityFaq.length > 0 && (
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
            À pied
          </h2>
          {walkabilityFaq.map((item, fi) => (
            <div key={fi} style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
              <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
            </div>
          ))}
        </div>
      )}

      <AppBanner />
    </div>
  );
}
