import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { restaurants, type Restaurant } from "@/data/restaurants";
import { restaurantGuides } from "@/data/restaurantGuides";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Restaurants in Pondicherry",
  description: "Where to eat in Pondicherry: colonial garden cafés, seafood tables, and South Indian classics. Honest recommendations with no fluff.",
};

const PRICE = { budget: "₹", mid: "₹₹", upscale: "₹₹₹" };

function RestaurantCard({ r }: { r: Restaurant }) {
  return (
    <Link href={`/restaurants/${r.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
      {r.photo && (
        <div style={{ position: "relative", width: "100%", height: 180 }}>
          <Image src={`/restaurants/${r.photo}`} alt={r.name} fill style={{ objectFit: "cover", objectPosition: r.photoPosition ?? "center" }} />
        </div>
      )}
      <div style={{ padding: "20px 20px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, lineHeight: 1.3 }}>{r.name}</p>
          <span style={{ fontSize: 13, color: "#6b6560", marginLeft: 8, flexShrink: 0 }}>{PRICE[r.priceRange]}</span>
        </div>
        <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{truncate(r.summary, 110)}</p>
        <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Read more →</p>
      </div>
    </Link>
  );
}

function GuideCard({ title, slug }: { title: string; slug: string }) {
  return (
    <Link href={`/restaurants/guides/${slug}`} style={{ textDecoration: "none", background: "#1c1917", border: "1px solid #1c1917", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", padding: "24px 20px", minHeight: 180 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 10 }}>Our Guide</p>
      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#fff", fontSize: 18, lineHeight: 1.35, marginBottom: 12 }}>{title}</p>
      <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600 }}>Read the full guide →</p>
    </Link>
  );
}

export default function RestaurantsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Eat</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Restaurants in Pondicherry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        Pondicherry punches above its weight for food. French-influenced cafés, fresh seafood, Tamil homecooked thalis, and enough coffee to keep you going through the afternoon heat.
      </p>

      {restaurantGuides.map(guide => {
        const group = restaurants.filter(r => guide.restaurantIds.includes(r.id));
        if (!group.length) return null;
        return (
          <div key={guide.id} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
              {guide.title}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {group.map(r => <RestaurantCard key={r.id} r={r} />)}
              {guide.intro && <GuideCard title={guide.title} slug={guide.slug} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
