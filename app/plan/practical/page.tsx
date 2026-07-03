import Link from "next/link";
import type { Metadata } from "next";
import { practicalTopics } from "@/data/practical";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";

export const metadata: Metadata = {
  title: "Practical Guide to Pondicherry",
  description: "Currency, SIM cards, dress code, water, tipping, and the things visitors consistently get wrong in Pondicherry.",
};

const SECTION_LABELS: Record<string, string> = {
  transport: "Transport",
  service: "Services & Money",
  tips: "Tips & Etiquette",
};

const SECTION_ORDER = ["transport", "service", "tips"];

export default function PracticalPage() {
  const bySectionArr = SECTION_ORDER.map(sec => ({
    sec,
    items: practicalTopics.filter(t => t.section === sec),
  })).filter(g => g.items.length > 0);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/plan" style={{ fontSize: 13, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← Plan</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", margin: "20px 0 12px" }}>Practical</p>
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
            </div>
          ))}
        </div>
      ))}

      <AppBanner />
    </div>
  );
}
