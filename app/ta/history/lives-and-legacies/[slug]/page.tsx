import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { figures } from "@/data/figures";
import { figuresTa } from "@/data/ta/figures";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import JsonLd from "@/components/JsonLd";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export async function generateStaticParams() {
  return figuresTa.map(f => ({ slug: f.id }));
}

export const dynamicParams = false;

function findEntry(slug: string) {
  const ta = figuresTa.find(f => f.id === slug);
  const en = figures.find(f => f.id === slug);
  if (!ta || !en) return null;
  return { ta, en };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { ta } = entry;
  return {
    title: ta.metaTitle ?? ta.name,
    description: ta.metaDescription ?? ta.teaser,
    openGraph: entry.en.photo ? { images: [`/figures/${entry.en.photo}`] } : undefined,
  };
}

export default async function FigurePageTa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { ta, en } = entry;

  const idx = figuresTa.findIndex(f => f.id === slug);
  const prev = idx > 0 ? figuresTa[idx - 1] : null;
  const next = idx < figuresTa.length - 1 ? figuresTa[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/history/lives-and-legacies/${slug}`} taHref={`/ta/history/lives-and-legacies/${slug}`} current="ta" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: en.name,
          description: en.role,
          image: en.photo ? `https://www.pondyguide.com/figures/${en.photo}` : undefined,
          url: `https://www.pondyguide.com/ta/history/lives-and-legacies/${en.id}`,
        }}
      />
      <Link href="/ta/history/lives-and-legacies" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← வாழ்க்கை வரலாறுகள்</Link>

      {en.photo && (
        <div style={{ display: "flex", gap: 24, margin: "24px 0 28px", alignItems: "flex-start" }}>
          <div style={{ position: "relative", width: 160, height: 200, flexShrink: 0, borderRadius: 10, overflow: "hidden", border: "1px solid #e8ddd4" }}>
            <Image src={`/figures/${en.photo}`} alt={ta.name} fill style={{ objectFit: "cover", objectPosition: en.photoZoom ? `center ${en.photoZoom}%` : "center top" }} />
          </div>
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 4px" }}>
        {en.dates}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 6, lineHeight: 1.2 }}>
        {ta.name}
      </h1>
      <p style={{ fontSize: 15, color: "#6b6560", marginBottom: 24 }}>{en.role}</p>

      {ta.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {ta.teaser}
        </p>
      )}

      <ArticleBody text={ta.body} />
      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/ta/history/lives-and-legacies/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/ta/history/lives-and-legacies/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
