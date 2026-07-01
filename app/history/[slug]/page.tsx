import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { historyArticles } from "@/data/history";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import Link from "next/link";

export async function generateStaticParams() {
  return historyArticles.map(a => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = historyArticles.find(a => a.id === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.teaser,
  };
}

export default async function HistoryArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = historyArticles.find(a => a.id === slug);
  if (!article) notFound();

  const idx = historyArticles.findIndex(a => a.id === slug);
  const prev = idx > 0 ? historyArticles[idx - 1] : null;
  const next = idx < historyArticles.length - 1 ? historyArticles[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/history" style={{ fontSize: 13, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← History</Link>

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 16px", lineHeight: 1.2 }}>
        {article.title}
      </h1>

      {article.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#78716c", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {article.teaser}
        </p>
      )}

      <ArticleBody text={article.body} />

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/history/${prev.id}`} style={{ fontSize: 14, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/history/${next.id}`} style={{ fontSize: 14, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
