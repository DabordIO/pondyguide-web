import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { healthcareArticles } from "@/data/healthcare";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";

export const metadata: Metadata = {
  title: "Healthcare in Pondicherry",
  description: "JIPMER is one of India's premier medical institutes. Private clinics are plentiful. What to know before you need it.",
};

const CATEGORY_LABELS: Record<string, string> = {
  emergency: "Public hospitals",
  private: "Private Clinics",
  pharmacy: "Pharmacies",
};

const CATEGORY_ORDER = ["emergency", "private", "pharmacy"];

export default function HealthcarePage() {
  const byCategory = CATEGORY_ORDER.map(cat => ({
    cat,
    items: healthcareArticles.filter(a => a.category === cat),
  })).filter(g => g.items.length > 0);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Plan</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Emergency</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Emergency in Pondicherry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        Pondicherry is better served medically than most Indian towns its size. JIPMER — Jawaharlal Institute of Postgraduate Medical Education and Research — is one of the top public hospitals in the country and provides free emergency care around the clock.
      </p>

      {byCategory.map(({ cat, items }) => (
        <div key={cat} style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
            {CATEGORY_LABELS[cat]}
          </h2>
          {items.map((a, i) => (
            <div key={a.id} style={{ marginBottom: i < items.length - 1 ? 36 : 0 }}>
              {a.photo && (
                <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
                  <Image src={`/healthcare/${a.photo}`} alt={a.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
              )}
              <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{a.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "#6b6560", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>{a.teaser}</p>
              <ArticleBody text={a.body} />
            </div>
          ))}
        </div>
      ))}

      <AppBanner />
    </div>
  );
}
