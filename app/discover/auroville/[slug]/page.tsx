import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { aurovilleArticles } from "@/data/auroville";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import Link from "next/link";

export async function generateStaticParams() {
  return aurovilleArticles.map(a => ({ slug: a.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = aurovilleArticles.find(a => a.id === slug);
  if (!a) return {};
  return {
    title: `${a.title} — Auroville`,
    description: a.teaser,
    openGraph: a.photo ? { images: [`/auroville/${a.photo}`] } : undefined,
  };
}

const HAS_AUROVILLE = /auroville/i;

function displayH1(title: string) {
  return HAS_AUROVILLE.test(title) ? title : `${title}, Auroville`;
}

export default async function AurovilleArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = aurovilleArticles.find(a => a.id === slug);
  if (!article) notFound();

  const idx = aurovilleArticles.findIndex(a => a.id === slug);
  const prev = idx > 0 ? aurovilleArticles[idx - 1] : null;
  const next = idx < aurovilleArticles.length - 1 ? aurovilleArticles[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/discover/auroville" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Auroville</Link>

      {article.photo ? (
        <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/auroville/${article.photo}`} alt={article.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      ) : (
        <div style={{ width: "100%", height: 8, borderRadius: 4, background: article.gradient, margin: "24px 0 28px" }} />
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>Auroville</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        {displayH1(article.title)}
      </h1>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {article.teaser}
      </p>

      <ArticleBody text={article.body} />
      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/discover/auroville/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/discover/auroville/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
