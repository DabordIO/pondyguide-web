import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { restaurants } from "@/data/restaurants";
import { restaurantsFr } from "@/data/fr/restaurants";
import AppBanner from "@/components/AppBanner";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/ArticleBody";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

function findEntry(slug: string) {
  const fr = restaurantsFr.find(r => r.id === slug);
  const en = restaurants.find(r => r.id === slug);
  if (!fr || !en) return null;
  return { fr, en };
}

export async function generateStaticParams() {
  return restaurantsFr.map(r => ({ slug: r.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { fr, en } = entry;
  return {
    title: fr.metaTitle ?? `${fr.name} — Pondichéry`,
    description: fr.metaDescription ?? fr.summary,
    openGraph: en.photo ? { images: [`/restaurants/${en.photo}`] } : undefined,
    alternates: {
      languages: {
        en: `/restaurants/${slug}`,
        fr: `/fr/restaurants/${slug}`,
        "x-default": `/restaurants/${slug}`,
      },
    },
  };
}

const PRICE = { budget: "₹ Économique", mid: "₹₹ Milieu de gamme", upscale: "₹₹₹ Haut de gamme" };

const HAS_ESTABLISHMENT_WORD = /restaurant|café|cafe|\bbar\b|bistro|brewing|brewery|gelateria|lounge|\bspot\b|cuisine|kaffe|coffee/i;
const HAS_CITY = /pondich[ée]rry|puducherry/i;

function displayH1(name: string) {
  const noun = HAS_ESTABLISHMENT_WORD.test(name) ? "" : " Restaurant";
  const city = HAS_CITY.test(name) ? "" : ", Pondichéry";
  return `${name}${noun}${city}`;
}

export default async function RestaurantPageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { fr, en } = entry;

  const idx = restaurantsFr.findIndex(r => r.id === slug);
  const prev = idx > 0 ? restaurantsFr[idx - 1] : null;
  const next = idx < restaurantsFr.length - 1 ? restaurantsFr[idx + 1] : null;

  const priceSymbol = { budget: "₹", mid: "₹₹", upscale: "₹₹₹" }[en.priceRange];

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: fr.name,
          description: fr.summary,
          image: en.photo ? `https://www.pondyguide.com/restaurants/${en.photo}` : undefined,
          url: `https://www.pondyguide.com/fr/restaurants/${en.id}`,
          priceRange: priceSymbol,
          address: {
            "@type": "PostalAddress",
            streetAddress: en.address,
            addressLocality: "Pondichéry",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: en.lat,
            longitude: en.lng,
          },
          servesCuisine: en.category,
        }}
      />
      <LanguageToggle enHref={`/restaurants/${slug}`} frHref={`/fr/restaurants/${slug}`} current="fr" />
      <Link href="/fr/restaurants" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Restaurants</Link>

      {en.photo && (
        <div style={{ position: "relative", width: "100%", height: 320, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/restaurants/${en.photo}`} alt={fr.name} fill style={{ objectFit: "cover", objectPosition: en.photoPosition ?? "center" }} />
        </div>
      )}

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 8px", lineHeight: 1.2 }}>
        {displayH1(fr.name)}
      </h1>
      <p style={{ fontSize: 14, color: "#6b6560", marginBottom: 8 }}>{PRICE[en.priceRange]}{en.address ? ` · ${en.address}` : ""}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {fr.summary}
      </p>

      <ArticleBody text={fr.description} />

      {fr.mustOrder && fr.mustOrder.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>À commander</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {fr.mustOrder.map(dish => <li key={dish} style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}>{dish}</li>)}
          </ul>
        </div>
      )}

      {fr.tip && (
        <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
          <p style={{ fontSize: 14, color: "#292524", lineHeight: 1.7 }}><strong>Conseil : </strong>{fr.tip}</p>
        </div>
      )}

      {fr.hours && <p style={{ fontSize: 14, color: "#6b6560", marginTop: 16 }}><strong style={{ color: "#1c1917" }}>Horaires : </strong>{fr.hours}</p>}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/fr/restaurants/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/fr/restaurants/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
