import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { streets } from "@/data/streets";
import { streetsFr } from "@/data/fr/streets";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Les rues du quartier français de Pondichéry",
  description: "Découvrez les 40 rues du quartier français et les gouverneurs, amiraux et personnalités dont elles portent le nom.",
  alternates: {
    canonical: "/fr/discover/white-town",
    languages: {
      en: "/discover/white-town",
      fr: "/fr/discover/white-town",
      "x-default": "/discover/white-town",
    },
  },
};

function mergedStreets() {
  return streetsFr
    .map(fr => {
      const en = streets.find(s => s.id === fr.id);
      return en ? { fr, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
}

const merged = mergedStreets();
const NS = merged.filter(m => m.en.axis === "N-S");
const EW = merged.filter(m => m.en.axis === "E-W");

export default function WhiteTownPageFr() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/fr" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Accueil</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Quartier français</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Les rues du quartier français
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        Le tracé des rues du quartier français fut dessiné dans les années 1690 et n'a presque pas changé depuis. Chaque rue porte un nom tiré de l'histoire de l'Inde française : gouverneurs, amiraux, soldats, érudits. La plupart des noms ont survécu même au rattachement de 1962.
      </p>

      <StreetSection title="Rues nord-sud" subtitle="Parallèles au front de mer" items={NS} />
      <StreetSection title="Rues est-ouest" subtitle="Reliant le front de mer au canal" items={EW} />
    </div>
  );
}

function StreetSection({ title, subtitle, items }: { title: string; subtitle: string; items: ReturnType<typeof mergedStreets> }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 4, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>{title}</h2>
      <p style={{ fontSize: 13, color: "#6b6560", marginBottom: 24 }}>{subtitle}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {items.map(({ fr, en }) => (
          <Link key={fr.id} href={`/fr/discover/white-town/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {en.photo && (
              <div style={{ position: "relative", width: "100%", height: 140 }}>
                <Image src={`/streets/${en.photo}`} alt={en.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            )}
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 4 }}>{en.altName ?? en.name}</p>
              <p style={{ fontSize: 12, color: "#d4711a", marginBottom: 6 }}>Nommée d'après : {en.namedAfter}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(fr.summary, 100)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
