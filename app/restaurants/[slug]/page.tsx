import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { restaurants } from "@/data/restaurants";
import AppBanner from "@/components/AppBanner";
import Link from "next/link";

export async function generateStaticParams() {
  return restaurants.map(r => ({ slug: r.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = restaurants.find(r => r.id === slug);
  if (!r) return {};
  return { title: `${r.name} — Pondicherry`, description: r.summary };
}

const PRICE = { budget: "₹ Budget", mid: "₹₹ Mid-range", upscale: "₹₹₹ Upscale" };

const HAS_ESTABLISHMENT_WORD = /restaurant|café|cafe|\bbar\b|bistro|brewing|brewery|gelateria|lounge|\bspot\b|cuisine|kaffe|coffee/i;
const HAS_CITY = /pondicherry|puducherry/i;

function displayH1(name: string) {
  const noun = HAS_ESTABLISHMENT_WORD.test(name) ? "" : " Restaurant";
  const city = HAS_CITY.test(name) ? "" : ", Pondicherry";
  return `${name}${noun}${city}`;
}

export default async function RestaurantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = restaurants.find(r => r.id === slug);
  if (!r) notFound();

  const idx = restaurants.findIndex(r => r.id === slug);
  const prev = idx > 0 ? restaurants[idx - 1] : null;
  const next = idx < restaurants.length - 1 ? restaurants[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/restaurants" style={{ fontSize: 13, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← Restaurants</Link>

      {r.photo && (
        <div style={{ position: "relative", width: "100%", height: 320, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/restaurants/${r.photo}`} alt={r.name} fill style={{ objectFit: "cover", objectPosition: r.photoPosition ?? "center" }} />
        </div>
      )}

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 8px", lineHeight: 1.2 }}>
        {displayH1(r.name)}
      </h1>
      <p style={{ fontSize: 14, color: "#6b6560", marginBottom: 8 }}>{PRICE[r.priceRange]}{r.address ? ` · ${r.address}` : ""}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {r.summary}
      </p>

      {r.description.split("\n\n").map((para, i) => (
        <p key={i} style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524", marginBottom: "1.25rem" }}>{para}</p>
      ))}

      {r.mustOrder && r.mustOrder.length > 0 && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", margin: "32px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>Must Order</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            {r.mustOrder.map(dish => <li key={dish} style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}>{dish}</li>)}
          </ul>
        </div>
      )}

      {r.tip && (
        <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", margin: "24px 0" }}>
          <p style={{ fontSize: 14, color: "#292524", lineHeight: 1.7 }}><strong>Tip: </strong>{r.tip}</p>
        </div>
      )}

      {r.hours && <p style={{ fontSize: 14, color: "#6b6560", marginTop: 16 }}><strong style={{ color: "#1c1917" }}>Hours: </strong>{r.hours}</p>}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/restaurants/${prev.id}`} style={{ fontSize: 14, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← {prev.name}</Link> : <span />}
        {next ? <Link href={`/restaurants/${next.id}`} style={{ fontSize: 14, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>{next.name} →</Link> : <span />}
      </div>
    </div>
  );
}
