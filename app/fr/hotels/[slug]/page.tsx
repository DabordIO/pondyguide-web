import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { hotels, COLLECTION_LABELS, getHotelsByCollection, COLLECTION_ORDER } from "@/data/hotels";
import { hotelsFr, COLLECTION_LABELS_FR } from "@/data/fr/hotels";
import AppBanner from "@/components/AppBanner";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/ArticleBody";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

const orderedHotels = COLLECTION_ORDER.flatMap(c => getHotelsByCollection(c));

export async function generateStaticParams() {
  return hotelsFr.map(h => ({ slug: h.id }));
}

export const dynamicParams = false;

function findEntry(slug: string) {
  const fr = hotelsFr.find(h => h.id === slug);
  const en = hotels.find(h => h.id === slug);
  if (!fr || !en) return null;
  return { fr, en };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { fr, en } = entry;
  return {
    title: fr.metaTitle ?? `${fr.name} — Pondichéry`,
    description: fr.metaDescription ?? fr.tagline,
    openGraph: en.photo ? { images: [`/hotels/${en.photo}`] } : undefined,
    alternates: {
      canonical: `/fr/hotels/${slug}`,
      languages: {
        en: `/hotels/${slug}`,
        fr: `/fr/hotels/${slug}`,
        "x-default": `/hotels/${slug}`,
      },
    },
  };
}

const HAS_ESTABLISHMENT_WORD = /h[ôo]tel|villa|auberge|\binn\b|resort|spa|palais|maison/i;
const HAS_CITY = /pondich[ée]rry|puducherry/i;

function displayH1(name: string, category: string) {
  const genericNoun = category === "hostel" ? " Auberge" : " Hôtel";
  const noun = HAS_ESTABLISHMENT_WORD.test(name) ? "" : genericNoun;
  const city = HAS_CITY.test(name) ? "" : ", Pondichéry";
  return `${name}${noun}${city}`;
}

export default async function HotelPageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { fr, en } = entry;

  const idx = orderedHotels.findIndex(x => x.id === slug);
  const prev = idx > 0 ? orderedHotels[idx - 1] : null;
  const next = idx < orderedHotels.length - 1 ? orderedHotels[idx + 1] : null;
  const prevFr = prev ? hotelsFr.find(h => h.id === prev.id) : null;
  const nextFr = next ? hotelsFr.find(h => h.id === next.id) : null;

  const priceSymbol = { budget: "₹", mid: "₹₹", upscale: "₹₹₹", luxury: "₹₹₹₹" }[en.priceRange];

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: fr.name,
          description: fr.tagline,
          image: en.photo ? `https://www.pondyguide.com/hotels/${en.photo}` : undefined,
          url: `https://www.pondyguide.com/fr/hotels/${en.id}`,
          priceRange: priceSymbol,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pondichéry",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: en.lat,
            longitude: en.lng,
          },
        }}
      />
      <LanguageToggle enHref={`/hotels/${slug}`} frHref={`/fr/hotels/${slug}`} current="fr" />
      <Link href="/fr/hotels" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Hôtels</Link>

      {en.photo && (
        <div style={{ position: "relative", width: "100%", height: 320, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/hotels/${en.photo}`} alt={fr.name} fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>
        {COLLECTION_LABELS_FR[en.collection]}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 8, lineHeight: 1.2 }}>
        {displayH1(fr.name, en.category)}
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {fr.tagline}
      </p>

      <Section title="L'Ambiance"><ArticleBody text={fr.vibe} /></Section>
      <Section title="Pourquoi vous allez l'adorer"><ArticleBody text={fr.whyLoveIt} /></Section>
      <Section title="À découvrir aux alentours"><ArticleBody text={fr.exploreNearby} /></Section>

      <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Idéal pour</p>
        {fr.bestFor.map(item => <p key={item} style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}>✔ {item}</p>)}
        {fr.notFor.map(item => <p key={item} style={{ fontSize: 14, color: "#a8a29e", marginBottom: 6 }}>✖ {item}</p>)}
      </div>

      <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderLeft: "3px solid #f97316", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 8 }}>Notre conseil</p>
        <p style={{ fontSize: 14, color: "#292524", lineHeight: 1.7 }}>{fr.ourTip}</p>
      </div>

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prevFr ? <Link href={`/fr/hotels/${prevFr.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prevFr.name}</Link> : <span />}
        {nextFr ? <Link href={`/fr/hotels/${nextFr.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{nextFr.name} →</Link> : <span />}
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
