"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const nav = [
  { label: "History", href: "/history" },
  { label: "Discover", href: "/discover" },
  { label: "Auroville", href: "/discover/auroville" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Hotels", href: "/hotels" },
  { label: "Festivals", href: "/festivals" },
  { label: "Plan", href: "/plan" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #e8ddd4", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/logo.png" alt="" width={36} height={36} style={{ flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 22, fontWeight: 700, color: "#1c1917", letterSpacing: "-0.02em" }}>
            Pondy<span style={{ color: "#d4711a" }}>.</span>Guide
          </span>
        </Link>
        <nav className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: active ? "#d4711a" : "#44403c",
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: active ? "2px solid #d4711a" : "2px solid transparent",
                  display: "inline-block",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
