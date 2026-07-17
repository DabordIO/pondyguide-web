import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { streets } from "@/data/streets";
import { streetsFr } from "@/data/fr/streets";
import { streetsTa } from "@/data/ta/streets";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export async function generateStaticParams() {
  return streetsFr.map(s => ({ slug: s.id }));
}

export const dynamicParams = false;

function findEntry(slug: string) {
  const fr = streetsFr.find(s => s.id === slug);
  const en = streets.find(s => s.id === slug);
  if (!fr || !en) return null;
  const hasTa = streetsTa.some(s => s.id === slug);
  return { fr, en, hasTa };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { fr, en } = entry;
  return {
    title: fr.metaTitle ?? `${en.altName ?? en.name} — Quartier français, Pondichéry`,
    description: fr.metaDescription ?? fr.summary,
    openGraph: en.photo ? { images: [`/streets/${en.photo}`] } : undefined,
    alternates: {
      languages: {
        en: `/discover/white-town/${slug}`,
        fr: `/fr/discover/white-town/${slug}`,
        "x-default": `/discover/white-town/${slug}`,
      },
    },
  };
}

export default async function StreetPageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { fr, en, hasTa } = entry;

  const idx = streetsFr.findIndex(s => s.id === slug);
  const prev = idx > 0 ? streetsFr[idx - 1] : null;
  const prevEn = prev ? streets.find(s => s.id === prev.id) : null;
  const next = idx < streetsFr.length - 1 ? streetsFr[idx + 1] : null;
  const nextEn = next ? streets.find(s => s.id === next.id) : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/discover/white-town/${slug}`} taHref={hasTa ? `/ta/discover/white-town/${slug}` : undefined} frHref={`/fr/discover/white-town/${slug}`} current="fr" />
      <Link href="/fr/discover/white-town" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Les rues du quartier français</Link>

      {en.photo && (
        <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/streets/${en.photo}`} alt={en.altName ?? en.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>
        {en.axis === "N-S" ? "Rue nord-sud" : "Rue est-ouest"}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 8, lineHeight: 1.2 }}>
        {en.altName ?? en.name}
      </h1>
      <p style={{ fontSize: 14, color: "#d4711a", marginBottom: 24 }}>Nommée d'après : {en.namedAfter}{en.dates ? ` (${en.dates})` : ""}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {fr.summary}
      </p>

      <ArticleBody text={fr.history} />

      {fr.notable.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>À retenir sur cette rue</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {fr.notable.map((n, i) => <li key={i} style={{ fontSize: 14, color: "#292524", marginBottom: 6, lineHeight: 1.6 }}>{n}</li>)}
          </ul>
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev && prevEn ? <Link href={`/fr/discover/white-town/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prevEn.altName ?? prevEn.name}</Link> : <span />}
        {next && nextEn ? <Link href={`/fr/discover/white-town/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{nextEn.altName ?? nextEn.name} →</Link> : <span />}
      </div>
    </div>
  );
}
