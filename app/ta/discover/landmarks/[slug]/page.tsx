import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { sites } from "@/data/sites";
import { sitesTa } from "@/data/ta/sites";
import { sitesFr } from "@/data/fr/sites";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export async function generateStaticParams() {
  return sitesTa.map(s => ({ slug: s.id }));
}

export const dynamicParams = false;

function findEntry(slug: string) {
  const ta = sitesTa.find(s => s.id === slug);
  const en = sites.find(s => s.id === slug);
  if (!ta || !en) return null;
  return { ta, en };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { ta, en } = entry;
  const hasFr = sitesFr.some(s => s.id === slug);
  return {
    title: ta.metaTitle ?? `${ta.name} — புதுச்சேரி`,
    description: ta.metaDescription ?? ta.summary,
    openGraph: en.photo ? { images: [`/sites/${en.photo}`] } : undefined,
    alternates: {
      languages: {
        en: `/discover/landmarks/${slug}`,
        ta: `/ta/discover/landmarks/${slug}`,
        ...(hasFr ? { fr: `/fr/discover/landmarks/${slug}` } : {}),
        "x-default": `/discover/landmarks/${slug}`,
      },
    },
  };
}

export default async function LandmarkPageTa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { ta, en } = entry;
  const hasFr = sitesFr.some(s => s.id === slug);

  const idx = sitesTa.findIndex(s => s.id === slug);
  const prev = idx > 0 ? sitesTa[idx - 1] : null;
  const next = idx < sitesTa.length - 1 ? sitesTa[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/discover/landmarks/${slug}`} taHref={`/ta/discover/landmarks/${slug}`} frHref={hasFr ? `/fr/discover/landmarks/${slug}` : undefined} current="ta" />
      <Link href="/ta/discover/landmarks" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← சின்னங்கள்</Link>

      {en.photo && (
        <div style={{ position: "relative", width: "100%", height: 320, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/sites/${en.photo}`} alt={ta.name} fill style={{ objectFit: "cover", objectPosition: en.photoPosition ?? "center" }} />
        </div>
      )}

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 8px", lineHeight: 1.2 }}>
        {ta.name}
      </h1>
      {en.frenchName && <p style={{ fontSize: 13, color: "#6b6560", marginBottom: 4 }}>பிரெஞ்சு: {en.frenchName}</p>}
      <p style={{ fontSize: 13, color: "#6b6560", marginBottom: 24 }}>கட்டப்பட்ட காலம்: {ta.era}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {ta.summary}
      </p>

      <ArticleBody text={ta.history} />

      {ta.highlights.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>கவனிக்க வேண்டியவை</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {ta.highlights.map((h, i) => <li key={i} style={{ fontSize: 14, color: "#292524", marginBottom: 8, lineHeight: 1.65 }}>{h}</li>)}
          </ul>
        </div>
      )}

      {ta.visitInfo && (
        <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
          {ta.visitInfo.hours && <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>நேரம்: </strong>{ta.visitInfo.hours}</p>}
          {ta.visitInfo.entry && <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>நுழைவு: </strong>{ta.visitInfo.entry}</p>}
          {ta.visitInfo.tip && <p style={{ fontSize: 14, color: "#292524" }}><strong style={{ color: "#1c1917" }}>குறிப்பு: </strong>{ta.visitInfo.tip}</p>}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/ta/discover/landmarks/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/ta/discover/landmarks/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
