import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Pondy App — Coming Soon",
  description: "The Pondy App, the offline companion to this guide, is launching in a few days.",
  alternates: {
    canonical: "/app",
    languages: {
      en: "/app",
      ta: "/ta/app",
      fr: "/fr/app",
      "x-default": "/app",
    },
  },
};

export default function AppComingSoonPage() {
  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "80px 24px 96px", textAlign: "center" }}>
      <Image src="/app-icon.png" alt="Pondy App" width={96} height={96} style={{ borderRadius: 20, margin: "0 auto 32px" }} />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>
        The Pondy App
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 20, lineHeight: 1.2 }}>
        Coming in a few days
      </h1>
      <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524", marginBottom: 12 }}>
        We are putting the finishing touches on the Pondy App: offline maps, street-level history, restaurant picks, and hotel guides, everything on this site, in your pocket.
      </p>
      <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#6b6560" }}>
        Check back shortly, or{" "}
        <a href="mailto:hello@pondyguide.com" style={{ color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>
          write to us
        </a>{" "}
        to be notified the moment it launches.
      </p>
    </div>
  );
}
