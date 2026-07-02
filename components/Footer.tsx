import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1c1917", color: "#a8a29e", marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40 }}>
        <div>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
            Pondy<span style={{ color: "#f97316" }}>.</span>Guide
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>
            The definitive guide to Puducherry's history, heritage, and everything worth knowing.
          </p>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>Explore</p>
          {[["History", "/history"], ["Discover", "/discover"], ["Festivals", "/festivals"], ["Arts", "/arts"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ display: "block", fontSize: 13, color: "#a8a29e", textDecoration: "none", marginBottom: 8 }}>{label}</Link>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>Plan</p>
          {[["Restaurants", "/restaurants"], ["Hotels", "/hotels"], ["Getting Here", "/plan/getting-here"], ["Practical", "/plan/practical"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ display: "block", fontSize: 13, color: "#a8a29e", textDecoration: "none", marginBottom: 8 }}>{label}</Link>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>The App</p>
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>Take the full guide offline. Maps, history, and recommendations in your pocket.</p>
          <Link href="/app" style={{ display: "inline-block", background: "#f97316", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 16px", borderRadius: 8, textDecoration: "none" }}>
            Get the Pondy App
          </Link>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 12, color: "#78716c" }}>© {new Date().getFullYear()} Pondy Guide. All rights reserved.</p>
        <div style={{ display: "flex", gap: 24 }}>
          {[["About", "/about"], ["Contact", "/contact"], ["Sitemap", "/sitemap"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: 12, color: "#a8a29e", textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
