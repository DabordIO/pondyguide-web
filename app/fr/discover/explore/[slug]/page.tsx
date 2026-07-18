import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { exploreArticles } from "@/data/explore";
import { exploreArticlesFr } from "@/data/fr/explore";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

function findEntry(slug: string) {
  const en = exploreArticles.find(a => a.id === slug);
  const fr = exploreArticlesFr.find(a => a.id === slug);
  if (!en || !fr) return null;
  return { en, fr };
}

export async function generateStaticParams() {
  return exploreArticlesFr
    .filter(fr => exploreArticles.some(en => en.id === fr.id))
    .map(fr => ({ slug: fr.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { en, fr } = entry;
  return {
    title: fr.metaTitle ?? `${fr.title} — Pondichéry`,
    description: fr.metaDescription ?? fr.teaser,
    openGraph: en.photo ? { images: [`/explore/${en.photo}`] } : undefined,
    alternates: {
      canonical: `/fr/discover/explore/${slug}`,
      languages: {
        en: `/discover/explore/${slug}`,
        fr: `/fr/discover/explore/${slug}`,
        "x-default": `/discover/explore/${slug}`,
      },
    },
  };
}

const HAS_CITY = /pondich[ée]ry|pouduch[ée]ry/i;

function displayH1(title: string) {
  return HAS_CITY.test(title) ? title : `${title}, Pondichéry`;
}

export default async function ExploreArticlePageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { en: article, fr } = entry;

  const idx = exploreArticlesFr.findIndex(a => a.id === slug);
  const prevFr = idx > 0 ? exploreArticlesFr[idx - 1] : null;
  const nextFr = idx < exploreArticlesFr.length - 1 ? exploreArticlesFr[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/discover/explore/${slug}`} frHref={`/fr/discover/explore/${slug}`} current="fr" />
      <Link href="/fr/discover/explore" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← À faire</Link>

      {article.photo && (
        <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/explore/${article.photo}`} alt={fr.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      {fr.duration && (
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>
          {fr.duration}
        </p>
      )}
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        {displayH1(fr.title)}
      </h1>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {fr.teaser}
      </p>

      <ArticleBody text={fr.body} />

      {fr.highlights && fr.highlights.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>À observer</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {fr.highlights.map((h, i) => <li key={i} style={{ fontSize: 14, color: "#292524", marginBottom: 8, lineHeight: 1.65 }}>{h}</li>)}
          </ul>
        </div>
      )}

      {fr.visitInfo && (
        <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
          {fr.visitInfo.hours && <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Horaires : </strong>{fr.visitInfo.hours}</p>}
          {fr.visitInfo.entry && <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Entrée : </strong>{fr.visitInfo.entry}</p>}
          {fr.visitInfo.tip && <p style={{ fontSize: 14, color: "#292524" }}><strong style={{ color: "#1c1917" }}>Conseil : </strong>{fr.visitInfo.tip}</p>}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prevFr ? <Link href={`/fr/discover/explore/${prevFr.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prevFr.cardTitle ?? prevFr.title}</Link> : <span />}
        {nextFr ? <Link href={`/fr/discover/explore/${nextFr.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{nextFr.cardTitle ?? nextFr.title} →</Link> : <span />}
      </div>
    </div>
  );
}
