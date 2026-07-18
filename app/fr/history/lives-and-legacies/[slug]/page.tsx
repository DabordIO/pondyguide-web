import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { figures } from "@/data/figures";
import { figuresFr } from "@/data/fr/figures";
import { figuresTa } from "@/data/ta/figures";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import JsonLd from "@/components/JsonLd";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export async function generateStaticParams() {
  return figuresFr.map(f => ({ slug: f.id }));
}

export const dynamicParams = false;

function findEntry(slug: string) {
  const fr = figuresFr.find(f => f.id === slug);
  const en = figures.find(f => f.id === slug);
  if (!fr || !en) return null;
  return { fr, en };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { fr } = entry;
  const hasTa = figuresTa.some(f => f.id === slug);
  return {
    title: fr.metaTitle ?? fr.name,
    description: fr.metaDescription ?? fr.teaser,
    openGraph: entry.en.photo ? { images: [`/figures/${entry.en.photo}`] } : undefined,
    alternates: {
      canonical: `/fr/history/lives-and-legacies/${slug}`,
      languages: {
        en: `/history/lives-and-legacies/${slug}`,
        ta: hasTa ? `/ta/history/lives-and-legacies/${slug}` : undefined,
        fr: `/fr/history/lives-and-legacies/${slug}`,
        "x-default": `/history/lives-and-legacies/${slug}`,
      },
    },
  };
}

export default async function FigurePageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { fr, en } = entry;

  const idx = figuresFr.findIndex(f => f.id === slug);
  const prev = idx > 0 ? figuresFr[idx - 1] : null;
  const next = idx < figuresFr.length - 1 ? figuresFr[idx + 1] : null;

  const hasTa = figuresTa.some(f => f.id === slug);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle
        enHref={`/history/lives-and-legacies/${slug}`}
        taHref={hasTa ? `/ta/history/lives-and-legacies/${slug}` : undefined}
        frHref={`/fr/history/lives-and-legacies/${slug}`}
        current="fr"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: en.name,
          description: en.role,
          image: en.photo ? `https://www.pondyguide.com/figures/${en.photo}` : undefined,
          url: `https://www.pondyguide.com/fr/history/lives-and-legacies/${en.id}`,
        }}
      />
      <Link href="/fr/history/lives-and-legacies" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Vies & Héritages</Link>

      {en.photo && (
        <div style={{ display: "flex", gap: 24, margin: "24px 0 28px", alignItems: "flex-start" }}>
          <div style={{ position: "relative", width: 160, height: 200, flexShrink: 0, borderRadius: 10, overflow: "hidden", border: "1px solid #e8ddd4" }}>
            <Image src={`/figures/${en.photo}`} alt={fr.name} fill style={{ objectFit: "cover", objectPosition: en.photoZoom ? `center ${en.photoZoom}%` : "center top" }} />
          </div>
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 4px" }}>
        {fr.dates}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 6, lineHeight: 1.2 }}>
        {fr.name}
      </h1>
      <p style={{ fontSize: 15, color: "#6b6560", marginBottom: 24 }}>{fr.role}</p>

      {fr.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {fr.teaser}
        </p>
      )}

      <ArticleBody text={fr.body} />
      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/fr/history/lives-and-legacies/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/fr/history/lives-and-legacies/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
