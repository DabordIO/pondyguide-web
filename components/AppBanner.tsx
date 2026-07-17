"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLocale } from "@/lib/nav";

const COPY = {
  en: {
    label: "The Pondy App",
    heading: "Take this guide with you",
    description: "Offline maps, street-level history, restaurant picks, and hotel guides: everything on this site, in your pocket.",
    cta: "Open the App →",
  },
  ta: {
    label: "செயலி",
    heading: "இந்த வழிகாட்டியை உங்களுடன் எடுத்துச் செல்லுங்கள்",
    description: "ஆஃப்லைன் வரைபடங்கள், தெரு வழி வரலாறு, உணவக பரிந்துரைகள், ஹோட்டல் வழிகாட்டிகள் — இந்த தளத்தில் உள்ள அனைத்தும் உங்கள் பையில்.",
    cta: "செயலியைத் திற →",
  },
  fr: {
    label: "L'application",
    heading: "Emportez ce guide avec vous",
    description: "Cartes hors ligne, histoire rue par rue, sélection de restaurants et guides d'hôtels : tout ce site, dans votre poche.",
    cta: "Ouvrir l'appli →",
  },
};

const APP_HREF = { en: "https://pondyguide.com/app", ta: "https://pondyguide.com/ta/app", fr: "https://pondyguide.com/fr/app" };

export default function AppBanner() {
  const locale = getLocale(usePathname());
  const copy = COPY[locale];

  return (
    <div style={{ background: "#1c1917", borderRadius: 16, padding: "28px 32px", margin: "48px 0 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Image src="/app-icon.png" alt="Pondy App" width={56} height={56} style={{ flexShrink: 0, borderRadius: 12 }} />
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 6 }}>{copy.label}</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
            {copy.heading}
          </p>
          <p style={{ fontSize: 14, color: "#a8a29e", lineHeight: 1.6 }}>
            {copy.description}
          </p>
        </div>
      </div>
      <a
        href={APP_HREF[locale]}
        style={{ background: "#d4711a", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}
      >
        {copy.cta}
      </a>
    </div>
  );
}
