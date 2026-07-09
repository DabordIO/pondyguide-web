import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { hotels, COLLECTION_LABELS, getHotelsByCollection, COLLECTION_ORDER } from "@/data/hotels";
import AppBanner from "@/components/AppBanner";
import Link from "next/link";

const orderedHotels = COLLECTION_ORDER.flatMap(c => getHotelsByCollection(c));

export async function generateStaticParams() {
  return hotels.map(h => ({ slug: h.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const h = hotels.find(h => h.id === slug);
  if (!h) return {};
  return {
    title: h.metaTitle ?? `${h.name} — Pondicherry`,
    description: h.metaDescription ?? h.tagline,
    openGraph: h.photo ? { images: [`/hotels/${h.photo}`] } : undefined,
  };
}

const HAS_ESTABLISHMENT_WORD = /hotel|villa|hostel|\binn\b|resort|spa|palais|guest ?house/i;
const HAS_CITY = /pondicherry|puducherry/i;

function displayH1(name: string, category: string) {
  const genericNoun = category === "hostel" ? " Hostel" : " Hotel";
  const noun = HAS_ESTABLISHMENT_WORD.test(name) ? "" : genericNoun;
  const city = HAS_CITY.test(name) ? "" : ", Pondicherry";
  return `${name}${noun}${city}`;
}

export default async function HotelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = hotels.find(h => h.id === slug);
  if (!h) notFound();

  const idx = orderedHotels.findIndex(x => x.id === slug);
  const prev = idx > 0 ? orderedHotels[idx - 1] : null;
  const next = idx < orderedHotels.length - 1 ? orderedHotels[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/hotels" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Hotels</Link>

      {h.photo && (
        <div style={{ position: "relative", width: "100%", height: 320, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/hotels/${h.photo}`} alt={h.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>
        {COLLECTION_LABELS[h.collection]}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 8, lineHeight: 1.2 }}>
        {displayH1(h.name, h.category)}
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {h.tagline}
      </p>

      <Section title="The Vibe">{h.vibe.split("\n\n").map((p, i) => <p key={i} style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524", marginBottom: "1.25rem" }}>{p}</p>)}</Section>
      <Section title="Why You'll Love It">{h.whyLoveIt.split("\n\n").map((p, i) => <p key={i} style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524", marginBottom: "1.25rem" }}>{p}</p>)}</Section>
      <Section title="Explore Nearby">{h.exploreNearby.split("\n\n").map((p, i) => <p key={i} style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524", marginBottom: "1.25rem" }}>{p}</p>)}</Section>

      <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Best For</p>
        {h.bestFor.map(item => <p key={item} style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}>✔ {item}</p>)}
        {h.notFor.map(item => <p key={item} style={{ fontSize: 14, color: "#a8a29e", marginBottom: 6 }}>✖ {item}</p>)}
      </div>

      <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderLeft: "3px solid #f97316", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 8 }}>Our Tip</p>
        <p style={{ fontSize: 14, color: "#292524", lineHeight: 1.7 }}>{h.ourTip}</p>
      </div>

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/hotels/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/hotels/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4" }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6560", marginBottom: 12 }}>{title}</p>
      {children}
    </div>
  );
}
