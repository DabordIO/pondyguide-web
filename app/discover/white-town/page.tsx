import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { streets } from "@/data/streets";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "White Town Streets — Pondicherry",
  description: "The French Quarter street grid — 43 streets named after governors, admirals, and the men who built and fought over French India.",
};

const NS = streets.filter(s => s.axis === "N-S");
const EW = streets.filter(s => s.axis === "E-W");

export default function WhiteTownPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/discover" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Discover</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>White Town</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        The Streets of the French Quarter
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        The French Quarter street grid was designed in the 1690s and has barely changed since. Every street carries a name from French India's history — governors, admirals, soldiers, scholars. Most of the names survived decolonisation in 1962.
      </p>

      <StreetSection title="North–South Streets" subtitle="Running parallel to the coastline" items={NS} />
      <StreetSection title="East–West Streets" subtitle="Connecting the seafront to the canal" items={EW} />
    </div>
  );
}

function StreetSection({ title, subtitle, items }: { title: string; subtitle: string; items: typeof streets }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 4, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>{title}</h2>
      <p style={{ fontSize: 13, color: "#6b6560", marginBottom: 24 }}>{subtitle}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {items.map(s => (
          <Link key={s.id} href={`/discover/white-town/${s.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {s.photo && (
              <div style={{ position: "relative", width: "100%", height: 140 }}>
                <Image src={`/streets/${s.photo}`} alt={s.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            )}
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 4 }}>{s.name}</p>
              <p style={{ fontSize: 12, color: "#d4711a", marginBottom: 6 }}>Named after {s.namedAfter}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(s.summary, 100)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
