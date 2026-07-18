import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Préparer votre voyage : transport et conseils pour Pondichéry",
  description: "Informations pratiques pour arriver, se déplacer en ville, la santé, et tout ce que les visiteurs doivent savoir avant d'arriver.",
  alternates: {
    canonical: "/fr/plan",
    languages: {
      en: "/plan",
      fr: "/fr/plan",
      "x-default": "/plan",
    },
  },
};

const sections = [
  {
    href: "/fr/plan/getting-here",
    title: "Arriver à Pondichéry",
    description: "Depuis Chennai en bus ou en train, depuis Bangalore de nuit, depuis Madurai par la route. Pas de vol direct valable, mais le trajet reste facile.",
    photo: "/transport/puducherry-railway-station.jpg",
  },
  {
    href: "/fr/plan/getting-around",
    title: "Se déplacer en ville",
    description: "Auto-rickshaws, vélos, scooters, et le taxi occasionnel. White Town se parcourt à pied. Au-delà, il vous faut des roues.",
    photo: "/transport/auto-rickshaw-white-town.jpg",
  },
  {
    href: "/fr/plan/healthcare",
    title: "Urgences",
    description: "JIPMER est l'un des instituts médicaux les plus prestigieux d'Inde. Les cliniques privées sont nombreuses. Les pharmacies se trouvent à chaque coin de rue.",
    photo: "/healthcare/public-hospital.jpg",
  },
  {
    href: "/fr/plan/practical",
    title: "Conseils pratiques",
    description: "Devise, cartes SIM, code vestimentaire, sécurité de l'eau, pourboire, et les erreurs que font régulièrement les visiteurs.",
    photo: "/transport/general-tourism-information.jpeg",
  },
];

export default function PlanPageFr() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/plan" frHref="/fr/plan" current="fr" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Préparer</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Avant de partir
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        Pondichéry est facile à parcourir une fois les bases comprises. La plupart des visiteurs rencontrent des difficultés pour les trois ou quatre mêmes raisons. Lisez ceci en premier.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
        {sections.map(s => (
          <Link key={s.href} href={s.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            <div style={{ position: "relative", width: "100%", height: 180 }}>
              <Image src={s.photo} alt={s.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "16px 18px 18px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 19, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</p>
              <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.65 }}>{s.description}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 16 }}>Lire →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
