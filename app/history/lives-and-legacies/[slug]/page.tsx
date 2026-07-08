import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { figures } from "@/data/figures";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import Link from "next/link";

export async function generateStaticParams() {
  return figures.map(f => ({ slug: f.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = figures.find(f => f.id === slug);
  if (!f) return {};
  return {
    title: `${f.name} — Pondicherry`,
    description: f.teaser,
    openGraph: f.photo ? { images: [`/figures/${f.photo}`] } : undefined,
  };
}

const HAS_CITY = /pondicherry|puducherry/i;

function displayH1(name: string) {
  return HAS_CITY.test(name) ? name : `${name}, Pondicherry`;
}

export default async function FigurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const figure = figures.find(f => f.id === slug);
  if (!figure) notFound();

  const idx = figures.findIndex(f => f.id === slug);
  const prev = idx > 0 ? figures[idx - 1] : null;
  const next = idx < figures.length - 1 ? figures[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/history" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Lives & Legacies</Link>

      {figure.photo && (
        <div style={{ display: "flex", gap: 24, margin: "24px 0 28px", alignItems: "flex-start" }}>
          <div style={{ position: "relative", width: 160, height: 200, flexShrink: 0, borderRadius: 10, overflow: "hidden", border: "1px solid #e8ddd4" }}>
            <Image src={`/figures/${figure.photo}`} alt={figure.name} fill style={{ objectFit: "cover", objectPosition: figure.photoZoom ? `center ${figure.photoZoom}%` : "center top" }} />
          </div>
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 4px" }}>
        {figure.dates}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 6, lineHeight: 1.2 }}>
        {displayH1(figure.name)}
      </h1>
      <p style={{ fontSize: 15, color: "#6b6560", marginBottom: 24 }}>{figure.role}</p>

      {figure.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {figure.teaser}
        </p>
      )}

      <ArticleBody text={figure.body} />
      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/history/lives-and-legacies/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/history/lives-and-legacies/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
