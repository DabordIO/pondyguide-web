import Link from "next/link";

export default function LanguageToggle({ enHref, taHref, frHref, current }: { enHref: string; taHref?: string; frHref?: string; current: "en" | "ta" | "fr" }) {
  const pillBase: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    textDecoration: "none",
    padding: "5px 12px",
    borderRadius: 6,
  };
  const active: React.CSSProperties = { ...pillBase, background: "#1c1917", color: "#fff" };
  const inactive: React.CSSProperties = { ...pillBase, color: "#6b6560", border: "1px solid #e8ddd4" };

  return (
    <div style={{ position: "absolute", top: 24, right: 24, display: "flex", gap: 6, zIndex: 5 }}>
      <Link href={enHref} style={current === "en" ? active : inactive}>English</Link>
      {taHref && <Link href={taHref} style={current === "ta" ? active : inactive}>தமிழ்</Link>}
      {frHref && <Link href={frHref} style={current === "fr" ? active : inactive}>Français</Link>}
    </div>
  );
}
