import Image from "next/image";

export default function AppBanner() {
  return (
    <div style={{ background: "#1c1917", borderRadius: 16, padding: "28px 32px", margin: "48px 0 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Image src="/logo.png" alt="Pondy Guide" width={56} height={56} style={{ flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 6 }}>The Pondy App</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
            Take this guide with you
          </p>
          <p style={{ fontSize: 14, color: "#a8a29e", lineHeight: 1.6 }}>
            Offline maps, street-level history, restaurant picks, and hotel guides: everything on this site, in your pocket.
          </p>
        </div>
      </div>
      <a
        href="https://pondyguide.com/app"
        style={{ background: "#b45309", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}
      >
        Open the App →
      </a>
    </div>
  );
}
