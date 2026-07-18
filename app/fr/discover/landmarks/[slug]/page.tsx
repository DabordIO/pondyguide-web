import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { sites } from "@/data/sites";
import { sitesFr } from "@/data/fr/sites";
import { sitesTa } from "@/data/ta/sites";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export async function generateStaticParams() {
  return sitesFr.map(s => ({ slug: s.id }));
}

export const dynamicParams = false;

function findEntry(slug: string) {
  const fr = sitesFr.find(s => s.id === slug);
  const en = sites.find(s => s.id === slug);
  if (!fr || !en) return null;
  const hasTa = sitesTa.some(s => s.id === slug);
  return { fr, en, hasTa };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { fr, en } = entry;
  return {
    title: fr.metaTitle ?? `${fr.name} — Pondichéry`,
    description: fr.metaDescription ?? fr.summary,
    openGraph: en.photo ? { images: [`/sites/${en.photo}`] } : undefined,
    alternates: {
      canonical: `/fr/discover/landmarks/${slug}`,
      languages: {
        en: `/discover/landmarks/${slug}`,
        fr: `/fr/discover/landmarks/${slug}`,
        "x-default": `/discover/landmarks/${slug}`,
      },
    },
  };
}

export default async function LandmarkPageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { fr, en, hasTa } = entry;

  const idx = sitesFr.findIndex(s => s.id === slug);
  const prev = idx > 0 ? sitesFr[idx - 1] : null;
  const next = idx < sitesFr.length - 1 ? sitesFr[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/discover/landmarks/${slug}`} taHref={hasTa ? `/ta/discover/landmarks/${slug}` : undefined} frHref={`/fr/discover/landmarks/${slug}`} current="fr" />
      <Link href="/fr/discover/landmarks" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Monuments</Link>

      {en.photo && (
        <div style={{ position: "relative", width: "100%", height: 320, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/sites/${en.photo}`} alt={fr.name} fill style={{ objectFit: "cover", objectPosition: en.photoPosition ?? "center" }} />
        </div>
      )}

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 8px", lineHeight: 1.2 }}>
        {fr.name}
      </h1>
      <p style={{ fontSize: 13, color: "#6b6560", marginBottom: 24 }}>Époque : {fr.era}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {fr.summary}
      </p>

      <ArticleBody text={fr.history} />

      {fr.highlights.length > 0 && (
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
        {prev ? <Link href={`/fr/discover/landmarks/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/fr/discover/landmarks/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
