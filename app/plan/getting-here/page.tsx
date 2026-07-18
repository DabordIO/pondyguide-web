import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { transportArticles } from "@/data/transport";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";

export const metadata: Metadata = {
  title: "Getting to Pondicherry from Chennai and Beyond",
  description: "Compare routes from Chennai and Bangalore by bus, train and the scenic East Coast Road, without a direct flight.",
  alternates: {
    canonical: "/plan/getting-here",
    languages: {
      en: "/plan/getting-here",
      fr: "/fr/plan/getting-here",
      "x-default": "/plan/getting-here",
    },
  },
};

const articles = transportArticles.filter(a => a.category === "arriving");
const faqEntries = articles.flatMap(a => a.faq ?? []);

export default function GettingHerePage() {
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
      <LanguageToggle enHref="/plan/getting-here" frHref="/fr/plan/getting-here" current="en" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Plan", href: "/plan" }, { label: "Getting Here", href: "/plan/getting-here" }]} />
      <Link href="/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Plan</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Getting Here</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Reaching Pondicherry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        There is no direct international flight to Pondicherry. The nearest major airport is Chennai. From there, bus or train south along the Coromandel coast takes 3 to 4 hours.
      </p>

      {articles.map((a, i) => (
        <div key={a.id} style={{ marginBottom: 48, paddingBottom: i < articles.length - 1 ? 48 : 0, borderBottom: i < articles.length - 1 ? "1px solid #e8ddd4" : "none" }}>
          {a.photo && (
            <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
              <Image src={`/transport/${a.photo}`} alt={a.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          )}
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 8 }}>{a.title}</h2>
          <p style={{ fontSize: "1rem", color: "#6b6560", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>{a.teaser}</p>
          <ArticleBody text={a.body} />
          {a.faq && a.faq.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
                Frequently Asked Questions
              </h3>
              {a.faq.map((item, fi) => (
                <div key={fi} style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
                  <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <AppBanner />
    </div>
  );
}
