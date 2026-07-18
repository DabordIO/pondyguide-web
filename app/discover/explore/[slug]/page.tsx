import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { exploreArticles } from "@/data/explore";
import { exploreArticlesFr } from "@/data/fr/explore";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export async function generateStaticParams() {
  return exploreArticles.map(a => ({ slug: a.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = exploreArticles.find(a => a.id === slug);
  if (!a) return {};
  const hasFr = exploreArticlesFr.some(x => x.id === slug);
  return {
    title: a.metaTitle ?? `${a.title} — Pondicherry`,
    description: a.metaDescription ?? a.teaser,
    openGraph: a.photo ? { images: [`/explore/${a.photo}`] } : undefined,
    alternates: {
      canonical: `/discover/explore/${slug}`,
      languages: {
        en: `/discover/explore/${slug}`,
        ...(hasFr ? { fr: `/fr/discover/explore/${slug}` } : {}),
        "x-default": `/discover/explore/${slug}`,
      },
    },
  };
}

const HAS_CITY = /pondicherry|puducherry/i;

function displayH1(title: string) {
  return HAS_CITY.test(title) ? title : `${title}, Pondicherry`;
}

export default async function ExploreArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = exploreArticles.find(a => a.id === slug);
  if (!article) notFound();
  const hasFr = exploreArticlesFr.some(x => x.id === slug);

  const idx = exploreArticles.findIndex(a => a.id === slug);
  const prev = idx > 0 ? exploreArticles[idx - 1] : null;
  const next = idx < exploreArticles.length - 1 ? exploreArticles[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/discover/explore/${slug}`} frHref={hasFr ? `/fr/discover/explore/${slug}` : undefined} current="en" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Walks, Trips & Experiences", href: "/discover/explore" }, { label: article.title, href: `/discover/explore/${slug}` }]} />
      <Link href="/discover/explore" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Things to Do</Link>

      {article.photo && (
        <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/explore/${article.photo}`} alt={article.title} fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      {article.duration && (
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>
          {article.duration}
        </p>
      )}
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        {displayH1(article.title)}
      </h1>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {article.teaser}
      </p>

      <ArticleBody text={article.body} />

      {article.highlights && article.highlights.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>What to look for</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {article.highlights.map((h, i) => <li key={i} style={{ fontSize: 14, color: "#292524", marginBottom: 8, lineHeight: 1.65 }}>{h}</li>)}
          </ul>
        </div>
      )}

      {article.visitInfo && (
        <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
          {article.visitInfo.hours && <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Hours: </strong>{article.visitInfo.hours}</p>}
          {article.visitInfo.entry && <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Entry: </strong>{article.visitInfo.entry}</p>}
          {article.visitInfo.tip && <p style={{ fontSize: 14, color: "#292524" }}><strong style={{ color: "#1c1917" }}>Tip: </strong>{article.visitInfo.tip}</p>}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/discover/explore/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.cardTitle ?? prev.title}</Link> : <span />}
        {next ? <Link href={`/discover/explore/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.cardTitle ?? next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
