import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { hotels, COLLECTION_LABELS, COLLECTION_ORDER, getHotelsByCollection } from "@/data/hotels";

export const metadata: Metadata = {
  title: "Hotels in Pondicherry",
  description: "Where to stay in Pondicherry — heritage mansions, boutique guesthouses, family-friendly hotels, and coastal escapes. Honest recommendations.",
};

export default function HotelsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>Stay</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Hotels in Pondicherry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#78716c", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        Where you stay shapes the whole experience. A heritage mansion in White Town puts you inside the history. A coastal resort keeps you close to the sea. Here is how to choose.
      </p>

      {COLLECTION_ORDER.map(collection => {
        const group = getHotelsByCollection(collection);
        if (!group.length) return null;
        return (
          <div key={collection} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
              {COLLECTION_LABELS[collection]}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {group.map(h => (
                <Link key={h.id} href={`/hotels/${h.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
                  {h.photo && (
                    <div style={{ position: "relative", width: "100%", height: 180 }}>
                      <Image src={`/hotels/${h.photo}`} alt={h.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                    </div>
                  )}
                  <div style={{ padding: "20px 20px 16px" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 6 }}>{h.name}</p>
                    <p style={{ fontSize: 13, color: "#78716c", lineHeight: 1.6 }}>{h.tagline}</p>
                    <p style={{ fontSize: 12, color: "#b45309", fontWeight: 600, marginTop: 12 }}>Read more →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
