"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLocale } from "@/lib/nav";

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>{title}</p>
      {links.map(([label, href]) => (
        <Link key={href} href={href} style={{ display: "block", fontSize: 13, color: "#a8a29e", textDecoration: "none", marginBottom: 8 }}>{label}</Link>
      ))}
    </div>
  );
}

export default function Footer() {
  const locale = getLocale(usePathname());
  const ta = locale === "ta";
  const fr = locale === "fr";

  return (
    <footer style={{ background: "#1c1917", color: "#a8a29e", marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 32px" }} className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
        <div className="md:flex-shrink-0">
          <Image src="/pondy-seal.png" alt="" width={112} height={112} />
        </div>
        <div className="grid gap-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", flex: 1 }}>
          <div>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Pondy<span style={{ color: "#f97316" }}>.</span>Guide
            </p>
            <p style={{ fontSize: 14, color: "#fff", lineHeight: 1.7 }}>
              {ta
                ? "புதுச்சேரியின் வரலாறு, பாரம்பரியம் மற்றும் அறிந்து கொள்ள வேண்டிய அனைத்தையும் உள்ளடக்கிய முழுமையான வழிகாட்டி."
                : fr
                ? "Le guide de référence sur l'histoire, le patrimoine et tout ce qu'il faut savoir sur Pondichéry."
                : "The definitive guide to Puducherry's history, heritage, and everything worth knowing."}
            </p>
          </div>

          {ta ? (
            <FooterColumn
              title="ஆராயுங்கள்"
              links={[
                ["வரலாறு", "/ta/history"],
                ["வாழ்க்கை வரலாறுகள்", "/ta/history/lives-and-legacies"],
                ["French நிறுவனங்கள்", "/ta/history/institutions"],
                ["வெள்ளை நகர் தெருக்கள்", "/ta/discover/white-town"],
                ["வரலாற்றுச் சின்னங்களும் முக்கிய இடங்களும்", "/ta/discover/landmarks"],
              ]}
            />
          ) : fr ? (
            <FooterColumn
              title="Explorer"
              links={[
                ["Histoire", "/fr/history"],
                ["Vies et héritages", "/fr/history/lives-and-legacies"],
                ["Institutions françaises", "/fr/history/institutions"],
                ["Rues du quartier français", "/fr/discover/white-town"],
                ["Monuments et sites historiques", "/fr/discover/landmarks"],
              ]}
            />
          ) : (
            <FooterColumn
              title="Explore"
              links={[
                ["History", "/history"],
                ["Legacies", "/history/lives-and-legacies"],
                ["French Institutions", "/history/institutions"],
                ["White Town Streets", "/discover/white-town"],
                ["Landmarks", "/discover/landmarks"],
              ]}
            />
          )}

          {ta && (
            <FooterColumn
              title="மேலும்"
              links={[
                ["About", "/ta/about"],
                ["Contact", "/ta/contact"],
                ["Sitemap", "/ta/sitemap"],
              ]}
            />
          )}
          {fr && (
            <FooterColumn
              title="Plus"
              links={[
                ["Conseils pratiques", "/fr/plan/practical"],
                ["À propos", "/fr/about"],
                ["Contact", "/fr/contact"],
                ["Plan du site", "/fr/sitemap"],
              ]}
            />
          )}
          {!ta && !fr && (
            <FooterColumn
              title="More"
              links={[
                ["Practical Tips", "/plan/practical"],
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Sitemap", "/sitemap"],
              ]}
            />
          )}

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>{ta ? "செயலி" : fr ? "L'appli Pondy" : "The Pondy App"}</p>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
              {ta
                ? "முழு வழிகாட்டியையும் இணைய இணைப்பு இல்லாமலேயே உங்களுடன் எடுத்துச் செல்லுங்கள். வரைபடங்கள், வரலாற்றுத் தகவல்கள் மற்றும் பரிந்துரைகள் அனைத்தும் உங்கள் கையில்."
                : fr
                ? "Emportez le guide complet hors ligne. Cartes, histoire et recommandations dans votre poche."
                : "Take the full guide offline. Maps, history, and recommendations in your pocket."}
            </p>
            <Link href={ta ? "/ta/app" : fr ? "/fr/app" : "/app"} style={{ display: "inline-block", background: "#d4711a", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 16px", borderRadius: 8, textDecoration: "none" }}>
              {ta ? "Pondy App-ஐப் பெறுங்கள்" : fr ? "Obtenir l'appli Pondy" : "Get the Pondy App"}
            </Link>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 12, color: "#a8a29e" }}>
          {ta
            ? `© ${new Date().getFullYear()} பாண்டி வழிகாட்டி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`
            : fr
            ? `© ${new Date().getFullYear()} Pondy Guide. Tous droits réservés.`
            : `© ${new Date().getFullYear()} Pondy Guide. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
