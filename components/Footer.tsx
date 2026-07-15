"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { isTamil } from "@/lib/nav";

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
  const ta = isTamil(usePathname());

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
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>
              {ta
                ? "புதுச்சேரியின் வரலாறு, பாரம்பரியம் மற்றும் அறிந்து கொள்ள வேண்டிய அனைத்தையும் உள்ளடக்கிய முழுமையான வழிகாட்டி."
                : "The definitive guide to Puducherry's history, heritage, and everything worth knowing."}
            </p>
          </div>

          {ta ? (
            <FooterColumn
              title="ஆராயுங்கள்"
              links={[
                ["வாழ்க்கை வரலாறுகள்", "/ta/history/lives-and-legacies"],
                ["வெள்ளை நகர் தெருக்கள்", "/ta/discover/white-town"],
                ["தளங்களும் சின்னங்களும்", "/ta/discover/landmarks"],
              ]}
            />
          ) : (
            <FooterColumn
              title="Explore"
              links={[
                ["History", "/history"],
                ["Discover", "/discover"],
                ["Trips & Experiences", "/discover/explore"],
                ["Legacies", "/history/lives-and-legacies"],
              ]}
            />
          )}

          {ta ? (
            <FooterColumn
              title="திட்டமிடுங்கள்"
              links={[
                ["உணவகங்கள்", "/ta/restaurants"],
                ["ஹோட்டல்கள்", "/ta/hotels"],
              ]}
            />
          ) : (
            <FooterColumn
              title="Plan"
              links={[
                ["Restaurants", "/restaurants"],
                ["Hotels", "/hotels"],
                ["Getting Here", "/plan/getting-here"],
                ["Practical Tips", "/plan/practical"],
              ]}
            />
          )}

          {ta && (
            <FooterColumn
              title="மேலும்"
              links={[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Sitemap", "/sitemap"],
              ]}
            />
          )}

          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>{ta ? "செயலி" : "The App"}</p>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
              {ta
                ? "முழு வழிகாட்டியையும் ஆஃப்லைனில் எடுத்துச் செல்லுங்கள். வரைபடங்கள், வரலாறு மற்றும் பரிந்துரைகள் உங்கள் பையில்."
                : "Take the full guide offline. Maps, history, and recommendations in your pocket."}
            </p>
            <Link href="/app" style={{ display: "inline-block", background: "#d4711a", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 16px", borderRadius: 8, textDecoration: "none" }}>
              {ta ? "Pondy App-ஐப் பெறுங்கள்" : "Get the Pondy App"}
            </Link>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 12, color: "#a8a29e" }}>
          {ta
            ? `© ${new Date().getFullYear()} பாண்டி வழிகாட்டி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`
            : `© ${new Date().getFullYear()} Pondy Guide. All rights reserved.`}
        </p>
        {!ta && (
          <div style={{ display: "flex", gap: 24 }}>
            {[["About", "/about"], ["Contact", "/contact"], ["Sitemap", "/sitemap"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 12, color: "#a8a29e", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
