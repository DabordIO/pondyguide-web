import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { streets } from "@/data/streets";
import { streetsTa } from "@/data/ta/streets";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export async function generateStaticParams() {
  return streets.map(s => ({ slug: s.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = streets.find(s => s.id === slug);
  if (!s) return {};
  const hasTa = streetsTa.some(t => t.id === slug);
  return {
    title: s.metaTitle ?? `${s.name} — White Town, Pondicherry`,
    description: s.metaDescription ?? s.summary,
    openGraph: s.photo ? { images: [`/streets/${s.photo}`] } : undefined,
    alternates: {
      languages: {
        en: `/discover/white-town/${slug}`,
        ta: hasTa ? `/ta/discover/white-town/${slug}` : undefined,
        "x-default": `/discover/white-town/${slug}`,
      },
    },
  };
}

const HAS_CITY = /pondicherry|puducherry|white town/i;

function displayH1(name: string) {
  return HAS_CITY.test(name) ? name : `${name}, White Town, Pondicherry`;
}

export default async function StreetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const street = streets.find(s => s.id === slug);
  if (!street) notFound();

  const idx = streets.findIndex(s => s.id === slug);
  const prev = idx > 0 ? streets[idx - 1] : null;
  const next = idx < streets.length - 1 ? streets[idx + 1] : null;
  const hasTa = streetsTa.some(t => t.id === slug);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/discover/white-town/${slug}`} taHref={hasTa ? `/ta/discover/white-town/${slug}` : undefined} current="en" />
      <Link href="/discover/white-town" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← White Town Streets</Link>

      {street.photo && (
        <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/streets/${street.photo}`} alt={street.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>
        {street.axis === "N-S" ? "North–South Street" : "East–West Street"}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 8, lineHeight: 1.2 }}>
        {displayH1(street.name)}
      </h1>
      {street.altName && <p style={{ fontSize: 14, color: "#6b6560", marginBottom: 8 }}>Also known as: {street.altName}</p>}
      <p style={{ fontSize: 14, color: "#d4711a", marginBottom: 24 }}>Named after: {street.namedAfter}{street.dates ? ` (${street.dates})` : ""}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {street.summary}
      </p>

      <ArticleBody text={street.history} />

      {street.notable.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Notable on this street</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {street.notable.map((n, i) => <li key={i} style={{ fontSize: 14, color: "#292524", marginBottom: 6, lineHeight: 1.6 }}>{n}</li>)}
          </ul>
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/discover/white-town/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/discover/white-town/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
