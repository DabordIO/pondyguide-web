import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { streets } from "@/data/streets";
import { streetsTa } from "@/data/ta/streets";
import { streetsFr } from "@/data/fr/streets";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export async function generateStaticParams() {
  return streetsTa.map(s => ({ slug: s.id }));
}

export const dynamicParams = false;

function findEntry(slug: string) {
  const ta = streetsTa.find(s => s.id === slug);
  const en = streets.find(s => s.id === slug);
  if (!ta || !en) return null;
  return { ta, en };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { ta, en } = entry;
  const hasFr = streetsFr.some(s => s.id === slug);
  return {
    title: ta.metaTitle ?? `${en.name} — வெள்ளை நகர், புதுச்சேரி`,
    description: ta.metaDescription ?? ta.summary,
    openGraph: en.photo ? { images: [`/streets/${en.photo}`] } : undefined,
    alternates: {
      languages: {
        en: `/discover/white-town/${slug}`,
        ta: `/ta/discover/white-town/${slug}`,
        ...(hasFr ? { fr: `/fr/discover/white-town/${slug}` } : {}),
        "x-default": `/discover/white-town/${slug}`,
      },
    },
  };
}

export default async function StreetPageTa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { ta, en } = entry;
  const hasFr = streetsFr.some(s => s.id === slug);

  const idx = streetsTa.findIndex(s => s.id === slug);
  const prev = idx > 0 ? streetsTa[idx - 1] : null;
  const prevEn = prev ? streets.find(s => s.id === prev.id) : null;
  const next = idx < streetsTa.length - 1 ? streetsTa[idx + 1] : null;
  const nextEn = next ? streets.find(s => s.id === next.id) : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/discover/white-town/${slug}`} taHref={`/ta/discover/white-town/${slug}`} frHref={hasFr ? `/fr/discover/white-town/${slug}` : undefined} current="ta" />
      <Link href="/ta/discover/white-town" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← வெள்ளை நகர் தெருக்கள்</Link>

      {en.photo && (
        <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/streets/${en.photo}`} alt={en.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>
        {en.axis === "N-S" ? "வடக்கு–தெற்குத் தெரு" : "கிழக்கு–மேற்குத் தெரு"}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 8, lineHeight: 1.2 }}>
        {en.name}
      </h1>
      {en.altName && <p style={{ fontSize: 14, color: "#6b6560", marginBottom: 8 }}>மற்றொரு பெயர்: {en.altName}</p>}
      <p style={{ fontSize: 14, color: "#d4711a", marginBottom: 24 }}>பெயர் தந்தவர்: {en.namedAfter}{en.dates ? ` (${en.dates})` : ""}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {ta.summary}
      </p>

      <ArticleBody text={ta.history} />

      {ta.notable.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>இந்தத் தெருவில் குறிப்பிடத்தக்கவை</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {ta.notable.map((n, i) => <li key={i} style={{ fontSize: 14, color: "#292524", marginBottom: 6, lineHeight: 1.6 }}>{n}</li>)}
          </ul>
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev && prevEn ? <Link href={`/ta/discover/white-town/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prevEn.name}</Link> : <span />}
        {next && nextEn ? <Link href={`/ta/discover/white-town/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{nextEn.name} →</Link> : <span />}
      </div>
    </div>
  );
}
