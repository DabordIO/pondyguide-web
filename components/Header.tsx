import Link from "next/link";
import MobileNav from "./MobileNav";

const nav = [
  { label: "History", href: "/history" },
  { label: "Discover", href: "/discover" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Hotels", href: "/hotels" },
  { label: "Festivals", href: "/festivals" },
  { label: "Plan", href: "/plan" },
];

export default function Header() {
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #e8ddd4", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 22, fontWeight: 700, color: "#1c1917", letterSpacing: "-0.02em" }}>
            Pondy<span style={{ color: "#b45309" }}>.</span>Guide
          </span>
        </Link>
        <nav className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} style={{ fontSize: 14, fontWeight: 600, color: "#44403c", textDecoration: "none", padding: "8px 0", display: "inline-block" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
