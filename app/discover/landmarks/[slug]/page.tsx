import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { sites, CATEGORY_LABELS, CATEGORY_COLORS } from "@/data/sites";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import Link from "next/link";

export async function generateStaticParams() {
  return sites.map(s => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = sites.find(s => s.id === slug);
  if (!s) return {};
  return {
    title: `${s.name} — Pondicherry`,
    description: s.summary,
    openGraph: s.photo ? { images: [`/sites/${s.photo}`] } : undefined,
  };
}

const HAS_CITY = /pondicherry|puducherry/i;

function displayH1(name: string) {
  return HAS_CITY.test(name) ? name : `${name}, Pondicherry`;
}

export default async function LandmarkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = sites.find(s => s.id === slug);
  if (!site) notFound();

  const idx = sites.findIndex(s => s.id === slug);
  const prev = idx > 0 ? sites[idx - 1] : null;
  const next = idx < sites.length - 1 ? sites[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/discover/landmarks" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Landmarks</Link>

      {site.photo && (
        <div style={{ position: "relative", width: "100%", height: 320, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/sites/${site.photo}`} alt={site.name} fill style={{ objectFit: "cover", objectPosition: site.photoPosition ?? "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: CATEGORY_COLORS[site.category], margin: "20px 0 6px" }}>
        {CATEGORY_LABELS[site.category]}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 8, lineHeight: 1.2 }}>
        {displayH1(site.name)}
      </h1>
      {site.frenchName && <p style={{ fontSize: 13, color: "#6b6560", marginBottom: 4 }}>French: {site.frenchName}</p>}
      <p style={{ fontSize: 13, color: "#6b6560", marginBottom: 24 }}>Built: {site.era}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {site.summary}
      </p>

      <ArticleBody text={site.history} />

      {site.highlights.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>What to look for</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {site.highlights.map((h, i) => <li key={i} style={{ fontSize: 14, color: "#292524", marginBottom: 8, lineHeight: 1.65 }}>{h}</li>)}
          </ul>
        </div>
      )}

      {site.visitInfo && (
        <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
          {site.visitInfo.hours && <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Hours: </strong>{site.visitInfo.hours}</p>}
          {site.visitInfo.entry && <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Entry: </strong>{site.visitInfo.entry}</p>}
          {site.visitInfo.tip && <p style={{ fontSize: 14, color: "#292524" }}><strong style={{ color: "#1c1917" }}>Tip: </strong>{site.visitInfo.tip}</p>}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/discover/landmarks/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/discover/landmarks/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
