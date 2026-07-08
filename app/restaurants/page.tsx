import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { restaurants } from "@/data/restaurants";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Restaurants in Pondicherry",
  description: "Where to eat in Pondicherry — from colonial garden cafés to seafood tables and South Indian classics. Honest recommendations with no fluff.",
};

const PRICE = { budget: "₹", mid: "₹₹", upscale: "₹₹₹" };

export default function RestaurantsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Eat</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Restaurants in Pondicherry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 48 }}>
        Pondicherry punches above its weight for food. French-influenced cafés, fresh seafood, Tamil homecooked thalis — and enough coffee to keep you going through the afternoon heat.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {restaurants.map(r => (
          <Link key={r.id} href={`/restaurants/${r.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
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
        ))}
      </div>
    </div>
  );
}
