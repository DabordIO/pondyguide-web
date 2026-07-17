import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { institutionArticles } from "@/data/institutions";
import { institutionArticlesTa } from "@/data/ta/institutions";
import { institutionArticlesFr } from "@/data/fr/institutions";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import JsonLd from "@/components/JsonLd";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return institutionArticlesTa.map(a => ({ slug: a.id }));
}

export const dynamicParams = false;

const HAS_CITY = /pondicherry|pondich[ée]ry|puducherry|புதுச்சேரி/i;

function displayH1(title: string) {
  return HAS_CITY.test(title) ? title : `${title}, புதுச்சேரி`;
}

function findEntry(slug: string) {
  const ta = institutionArticlesTa.find(a => a.id === slug);
  const en = institutionArticles.find(a => a.id === slug);
  if (!ta || !en) return null;
  return { ta, en };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { ta, en } = entry;
  const hasFr = institutionArticlesFr.some(a => a.id === slug);
  return {
    title: ta.metaTitle ?? `${ta.title} — Pondicherry`,
    description: ta.metaDescription ?? ta.teaser,
    openGraph: en.photo ? { images: [`/${en.photoFolder ?? "history"}/${en.photo}`] } : undefined,
    alternates: {
      languages: {
        en: `/history/institutions/${slug}`,
        ta: `/ta/history/institutions/${slug}`,
        ...(hasFr ? { fr: `/fr/history/institutions/${slug}` } : {}),
        "x-default": `/history/institutions/${slug}`,
      },
    },
  };
}

export default async function InstitutionPageTa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { ta, en } = entry;
  const hasFr = institutionArticlesFr.some(a => a.id === slug);

  const idx = institutionArticlesTa.findIndex(a => a.id === slug);
  const prev = idx > 0 ? institutionArticlesTa[idx - 1] : null;
  const next = idx < institutionArticlesTa.length - 1 ? institutionArticlesTa[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/history/institutions/${slug}`} taHref={`/ta/history/institutions/${slug}`} frHref={hasFr ? `/fr/history/institutions/${slug}` : undefined} current="ta" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: ta.title,
          description: ta.teaser,
          image: en.photo ? `https://www.pondyguide.com/${en.photoFolder ?? "history"}/${en.photo}` : undefined,
          url: `https://www.pondyguide.com/ta/history/institutions/${ta.id}`,
          author: { "@type": "Organization", name: "Pondy Guide" },
          publisher: { "@type": "Organization", name: "Pondy Guide" },
        }}
      />
      <Link href="/ta/history" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← வரலாறு</Link>

      {en.photo && (
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/${en.photoFolder ?? "history"}/${en.photo}`} alt={ta.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 8px" }}>
        French நிறுவனம்
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        {displayH1(ta.title)}
      </h1>

      {ta.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {ta.teaser}
        </p>
      )}

      <ArticleBody text={ta.body} />
      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/ta/history/institutions/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/ta/history/institutions/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
