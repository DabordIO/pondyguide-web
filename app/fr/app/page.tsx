import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "L'application Pondy — Bientôt disponible",
  description: "L'appli Pondy, le compagnon hors ligne de ce guide, sera lancée dans quelques jours.",
  alternates: {
    languages: {
      en: "/app",
      ta: "/ta/app",
      fr: "/fr/app",
      "x-default": "/app",
    },
  },
};

export default function AppComingSoonPageFr() {
  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "80px 24px 96px", textAlign: "center" }}>
      <Image src="/app-icon.png" alt="Pondy App" width={96} height={96} style={{ borderRadius: 20, margin: "0 auto 32px" }} />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>
        L'application Pondy
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 20, lineHeight: 1.2 }}>
        Bientôt disponible
      </h1>
      <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524", marginBottom: 12 }}>
        Nous mettons la dernière touche à l'appli Pondy : cartes hors ligne, histoire rue par rue, sélection de restaurants et guides d'hôtels, tout ce site, dans votre poche.
      </p>
      <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#6b6560" }}>
        Revenez bientôt, ou{" "}
        <a href="mailto:hello@pondyguide.com" style={{ color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>
          écrivez-nous
        </a>{" "}
        pour être averti dès son lancement.
      </p>
    </div>
  );
}
