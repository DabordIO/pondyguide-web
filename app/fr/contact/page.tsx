import type { Metadata } from "next";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Contactez Pondy Guide",
  description: "Contactez l'équipe de Pondy Guide pour toute question, suggestion ou correction concernant le site et ses recherches.",
  alternates: {
    canonical: "/fr/contact",
    languages: {
      en: "/contact",
      ta: "/ta/contact",
      fr: "/fr/contact",
      "x-default": "/contact",
    },
  },
};

export default function ContactPageFr() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/contact" taHref="/ta/contact" frHref="/fr/contact" current="fr" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Contact</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 32, lineHeight: 1.2 }}>
        Écrivez-nous
      </h1>
      <div style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524" }}>
        <p style={{ marginBottom: "1.25rem" }}>
          Merci de votre visite. Pondy Guide est un projet personnel, une tentative sincère d'offrir aux visiteurs le récit le plus documenté et le plus honnête du Pondichéry d'hier et du Puducherry d'aujourd'hui.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          Nous avons mené des recherches approfondies grâce à de nombreux articles universitaires, thèses et ouvrages, dont la plupart ne sont pas disponibles en ligne. L'histoire n'est pas un domaine figé. Nous progressons à mesure que nous découvrons. Nous avons cependant délibérément évité certaines controverses et quelques sujets encore débattus. Notre objectif a été de présenter des récits clairs, accessibles à tous. Ni simplification excessive, ni complexité inutile.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          Si vous remarquez une erreur factuelle quelque part sur le site, sachez qu'elle est tout à fait involontaire, et nous serions très heureux d'en être informés.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          Si vous souhaitez suggérer un nouvel article, simplement partager une réflexion, ou nous adresser un mot d'encouragement, nous serions ravis de vous lire.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          Nous recevons de temps à autre des messages de particuliers ou d'agences proposant de promouvoir ce site contre rémunération. Nous apprécions l'intention, mais ce type d'arrangement ne nous intéresse pas. Ce qui compte vraiment pour nous est bien plus simple : si vous avez trouvé ici quelque chose d'utile ou d'intéressant, en parler à un ami est la meilleure chose que vous puissiez faire pour ce projet.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          Écrivez-nous à{" "}
          <a href="mailto:hello@pondyguide.com" style={{ color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>
            hello@pondyguide.com
          </a>
        </p>
      </div>
    </div>
  );
}
