import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "பாண்டி செயலி — இன்னும் சில நாட்களில்",
  description: "இந்த வழிகாட்டியின் ஆஃப்லைன் துணையான பாண்டி செயலி, இன்னும் சில நாட்களில் வெளியிடப்படும்.",
  alternates: {
    languages: {
      en: "/app",
      ta: "/ta/app",
      fr: "/fr/app",
      "x-default": "/app",
    },
  },
};

export default function AppComingSoonPageTa() {
  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "80px 24px 96px", textAlign: "center" }}>
      <Image src="/app-icon.png" alt="Pondy App" width={96} height={96} style={{ borderRadius: 20, margin: "0 auto 32px" }} />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>
        பாண்டி செயலி
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 20, lineHeight: 1.2 }}>
        இன்னும் சில நாட்களில் வருகிறது
      </h1>
      <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524", marginBottom: 12 }}>
        பாண்டி செயலியின் இறுதிக்கட்ட பணிகளை நாங்கள் முடித்து வருகிறோம். ஆஃப்லைன் வரைபடங்கள், தெரு வாரியான வரலாற்றுத் தகவல்கள், உணவகத் தேர்வுகள், ஹோட்டல் வழிகாட்டிகள் என இந்த தளத்தில் உள்ள அனைத்தும் உங்கள் பையில் கிடைக்கும்.
      </p>
      <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#6b6560" }}>
        இன்னும் சில நாட்களில் மீண்டும் பார்க்கவும், அல்லது செயலி வெளியான உடனே அறிவிக்க{" "}
        <a href="mailto:hello@pondyguide.com" style={{ color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>
          எங்களுக்கு எழுதவும்
        </a>
        .
      </p>
    </div>
  );
}
