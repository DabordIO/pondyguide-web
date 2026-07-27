import type { Metadata } from "next";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Contact Pondy Guide and Send Us a Message",
  description: "Contact the Pondy Guide team with questions, suggestions or corrections about the site and its research.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/contact",
      ta: "/ta/contact",
      fr: "/fr/contact",
      "x-default": "/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/contact" taHref="/ta/contact" frHref="/fr/contact" current="en" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Contact</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 32, lineHeight: 1.2 }}>
        Get in touch
      </h1>
      <div style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524" }}>
        <p style={{ marginBottom: "1.25rem" }}>
          Thank you for visiting. Pondy Guide is a personal project, a genuine attempt to give visitors the most researched, most honest account of yesterday's Pondichéry and today's Puducherry.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          We have done extensive research thanks to many scholarly articles, theses and books, most of them not available online. History is not a static field. We progress as we discover. However, we have deliberately avoided controversies and a few debated topics. Our goal has been to present crisp accounts accessible to everyone. No oversimplification. No over-obfuscation.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          If you notice a factual discrepancy anywhere on the site, kindly regard it as genuinely unintentional and we very much want to hear about it.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          If you would like to suggest a new article, or simply share a thought or give us your word of appreciation, we would be glad to receive that too.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          We do receive, from time to time, messages from individuals or agencies offering to promote this site for a fee. We appreciate the thought, but have no interest in that kind of arrangement. What does mean a great deal to us is something simpler: if you found something here that helped or interested you, telling a friend is the best thing you can do for this project.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          Write to us at{" "}
          <a href="mailto:hello@pondyguide.com" style={{ color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>
            hello@pondyguide.com
          </a>
        </p>
      </div>
    </div>
  );
}
