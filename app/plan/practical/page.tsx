import Link from "next/link";
import type { Metadata } from "next";
import { practicalTopics } from "@/data/practical";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Practical Guide to Pondicherry for First-Time Visitors",
  description: "Advice on currency, SIM cards, clothing, water, tipping and the common mistakes visitors make in Pondicherry.",
  alternates: {
    canonical: "/plan/practical",
    languages: {
      en: "/plan/practical",
      fr: "/fr/plan/practical",
      "x-default": "/plan/practical",
    },
  },
};

const SECTION_LABELS: Record<string, string> = {
  transport: "Transport",
  service: "Services & Money",
  tips: "Tips & Etiquette",
};

const SECTION_ORDER = ["transport", "service", "tips"];

// "getting-around" FAQ lives on its dedicated page (/plan/getting-around) to avoid duplicate FAQPage schema.
const topicFaq = (t: { id: string; faq?: { question: string; answer: string }[] }) =>
  t.id === "getting-around" ? [] : (t.faq ?? []);

export default function PracticalPage() {
  const bySectionArr = SECTION_ORDER.map(sec => ({
    sec,
    items: practicalTopics.filter(t => t.section === sec),
  })).filter(g => g.items.length > 0);

  const faqEntries = practicalTopics.flatMap(topicFaq);

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
      <LanguageToggle enHref="/plan/practical" frHref="/fr/plan/practical" current="en" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Plan Your Visit", href: "/plan" }, { label: "Practical", href: "/plan/practical" }]} />
      <Link href="/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Plan</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Practical</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Practical Information
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        The essentials: what to bring, what to expect, and what catches most visitors off guard.
      </p>

      {bySectionArr.map(({ sec, items }) => (
        <div key={sec} style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
            {SECTION_LABELS[sec]}
          </h2>
          {items.map((t, i) => (
            <div key={t.id} style={{ marginBottom: i < items.length - 1 ? 36 : 0 }}>
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{t.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "#6b6560", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>{t.summary}</p>
              <ArticleBody text={t.body} />
              {topicFaq(t).length > 0 && (
                <div style={{ marginTop: 28 }}>
                  <h4 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
                    Frequently Asked Questions
                  </h4>
                  {topicFaq(t).map((item, fi) => (
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
