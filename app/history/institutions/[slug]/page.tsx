import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { institutionArticles as institutions } from "@/data/institutions";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import Link from "next/link";

export async function generateStaticParams() {
  return institutions.map(a => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = institutions.find(a => a.id === slug);
  if (!item) return {};
  return { title: item.title, description: item.teaser };
}

export default async function InstitutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = institutions.find(a => a.id === slug);
  if (!item) notFound();

  const idx = institutions.findIndex(a => a.id === slug);
  const prev = idx > 0 ? institutions[idx - 1] : null;
  const next = idx < institutions.length - 1 ? institutions[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/history" style={{ fontSize: 13, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← History</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", margin: "20px 0 8px" }}>
        French Institution
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        {item.title}
      </h1>

      {item.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#78716c", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {item.teaser}
        </p>
      )}

      <ArticleBody text={item.body} />
      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/history/institutions/${prev.id}`} style={{ fontSize: 14, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/history/institutions/${next.id}`} style={{ fontSize: 14, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
