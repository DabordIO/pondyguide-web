import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { streets } from "@/data/streets";
import { streetsTa } from "@/data/ta/streets";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "வெள்ளை நகர் தெருக்கள்: புதுச்சேரியின் பிரெஞ்சு பகுதி",
  description: "பிரெஞ்சு பகுதியின் 40 தெருக்களையும், அவற்றின் பெயர்களுக்குப் பின்னால் உள்ள ஆளுநர்கள், கடற்படைத் தளபதிகள், வீரர்களையும் அறியுங்கள்.",
  alternates: {
    languages: {
      en: "/discover/white-town",
      ta: "/ta/discover/white-town",
      "x-default": "/discover/white-town",
    },
  },
};

function mergedStreets() {
  return streetsTa
    .map(ta => {
      const en = streets.find(s => s.id === ta.id);
      return en ? { ta, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
}

const merged = mergedStreets();
const NS = merged.filter(m => m.en.axis === "N-S");
const EW = merged.filter(m => m.en.axis === "E-W");

export default function WhiteTownPageTa() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/ta" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← முகப்பு</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>வெள்ளை நகர்</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        பிரெஞ்சு பகுதியின் தெருக்கள்
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        பிரெஞ்சு பகுதியின் தெரு வலையமைப்பு 1690களில் வடிவமைக்கப்பட்டது; அன்றிலிருந்து அது கிட்டத்தட்ட மாறவில்லை. ஒவ்வொரு தெருவும் பிரெஞ்சு இந்தியாவின் வரலாற்றிலிருந்து ஒரு பெயரைச் சுமக்கிறது: ஆளுநர்கள், கடற்படைத் தளபதிகள், வீரர்கள், அறிஞர்கள். பெரும்பாலான பெயர்கள் 1962 இணைப்பையும் தாண்டி உயிர் பிழைத்தன.
      </p>

      <StreetSection title="வடக்கு–தெற்குத் தெருக்கள்" subtitle="கடற்கரைக்கு இணையாக ஓடுபவை" items={NS} />
      <StreetSection title="கிழக்கு–மேற்குத் தெருக்கள்" subtitle="கடற்கரையை கால்வாயுடன் இணைப்பவை" items={EW} />
    </div>
  );
}

function StreetSection({ title, subtitle, items }: { title: string; subtitle: string; items: ReturnType<typeof mergedStreets> }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 4, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>{title}</h2>
      <p style={{ fontSize: 13, color: "#6b6560", marginBottom: 24 }}>{subtitle}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {items.map(({ ta, en }) => (
          <Link key={ta.id} href={`/ta/discover/white-town/${ta.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {en.photo && (
              <div style={{ position: "relative", width: "100%", height: 140 }}>
                <Image src={`/streets/${en.photo}`} alt={en.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            )}
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 4 }}>{en.name}</p>
              <p style={{ fontSize: 12, color: "#d4711a", marginBottom: 6 }}>பெயர் தந்தவர்: {en.namedAfter}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(ta.summary, 100)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
