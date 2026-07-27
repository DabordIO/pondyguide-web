import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { historyArticles } from "@/data/history";
import { institutionArticles as institutions } from "@/data/institutions";
import { figures } from "@/data/figures";
import { truncate } from "@/lib/truncate";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "History of Pondicherry, From Rome to French India",
  description: "Follow Pondicherry's story from ancient trade and French rule to the wars, institutions and people who shaped the city.",
  alternates: {
    canonical: "/history",
    languages: {
      en: "/history",
      fr: "/fr/history",
      "x-default": "/history",
    },
  },
};

export default function HistoryPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "History", href: "/history" }]} />
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>History</p>
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
          The Story of Pondicherry
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 48 }}>
          Few towns in India carry as many layers as Pondicherry. Roman traders, Chola kings, Portuguese, Dutch, British, and French have all left their mark on a stretch of coastline that refused to be ordinary.
        </p>
        <Section id="the-full-story" title="The Full Story">
          <ArticleGrid items={historyArticles.map(a => ({ id: a.id, title: a.title, teaser: a.teaser ?? "", href: `/history/${a.id}`, photo: a.photo, photoFolder: a.photoFolder ?? "history" }))} />
        </Section>

        <Section id="french-institutions" title="French Institutions">
          <ArticleGrid items={institutions.map(a => ({ id: a.id, title: a.title, teaser: a.teaser, href: `/history/institutions/${a.id}`, photo: a.photo, photoFolder: a.photoFolder ?? "history" }))} />
        </Section>

        <Section id="lives-and-legacies" title="Lives & Legacies">
          <p style={{ fontSize: 14, color: "#6b6560", marginBottom: 20 }}>The governors, soldiers, scholars, and saints who shaped the town.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {figures.map(f => (
              <Link key={f.id} href={`/history/lives-and-legacies/${f.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 12, overflow: "hidden", display: "block" }}>
                {f.photo && (
                  <div style={{ position: "relative", width: "100%", height: 140 }}>
                    <Image src={`/figures/${f.photo}`} alt={f.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                  </div>
                )}
                <div style={{ padding: "12px 16px 16px" }}>
                  <p style={{ fontWeight: 700, color: "#1c1917", fontSize: 15, marginBottom: 4 }}>{f.name}</p>
                  <p style={{ fontSize: 12, color: "#d4711a" }}>{f.dates}</p>
                  <p style={{ fontSize: 13, color: "#6b6560", marginTop: 6, lineHeight: 1.5 }}>{f.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
    </div>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} style={{ marginBottom: 56, scrollMarginTop: 140 }}>
      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>{title}</h2>
      {children}
    </div>
  );
}

function ArticleGrid({ items }: { items: { id: string; title: string; teaser: string; href: string; photo?: string; photoFolder?: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
      {items.map(item => (
        <Link key={item.id} href={item.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
          {item.photo && (
            <div style={{ position: "relative", width: "100%", height: 160 }}>
              <Image src={`/${item.photoFolder}/${item.photo}`} alt={item.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          )}
          <div style={{ padding: "16px 20px 16px" }}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{item.title}</p>
            <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{truncate(item.teaser, 120)}</p>
            <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Read more →</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
