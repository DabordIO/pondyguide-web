import Link from "next/link";
import type { Metadata } from "next";
import { festivals } from "@/data/festivals";

export const metadata: Metadata = {
  title: "Festivals in Pondicherry",
  description: "A month-by-month guide to Pondicherry's festivals — Tamil, French, Hindu, Christian, and the extraordinary celebrations entirely unique to this town.",
};

const MONTH_LABELS: Record<string, string> = {
  jan: "January", feb: "February", mar: "March", apr: "April",
  may: "May", jun: "June", jul: "July", aug: "August",
  sep: "September", oct: "October", nov: "November", dec: "December",
};

const MONTH_ORDER = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

export default function FestivalsPage() {
  const byMonth: Record<string, typeof festivals> = {};
  for (const f of festivals) {
    if (!byMonth[f.month]) byMonth[f.month] = [];
    byMonth[f.month].push(f);
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>Calendar</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Festivals in Pondicherry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#78716c", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        Pondicherry celebrates constantly — Tamil temple festivals, French commemorations, Auroville gatherings, and events that exist nowhere else on earth.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 64 }}>
        {MONTH_ORDER.map(m => (
          <Link key={m} href={`/festivals/${m}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", display: "block" }}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, fontSize: 18, color: "#1c1917", marginBottom: 4 }}>{MONTH_LABELS[m]}</p>
            <p style={{ fontSize: 13, color: "#b45309" }}>{byMonth[m]?.length ?? 0} festival{(byMonth[m]?.length ?? 0) !== 1 ? "s" : ""}</p>
          </Link>
        ))}
      </div>

      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>All Festivals</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {MONTH_ORDER.flatMap(m => byMonth[m] ?? []).map(f => (
          <Link key={f.id} href={`/festivals/${f.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, padding: "20px", display: "block" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", marginBottom: 6 }}>{MONTH_LABELS[f.month]}</p>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{f.title}</p>
            <p style={{ fontSize: 13, color: "#78716c", lineHeight: 1.6 }}>{f.teaser.slice(0, 100)}…</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
