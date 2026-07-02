"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "History", href: "/history" },
  { label: "Discover", href: "/discover" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Hotels", href: "/hotels" },
  { label: "Festivals", href: "/festivals" },
  { label: "Plan", href: "/plan" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav-toggle">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        style={{ background: "none", border: "none", cursor: "pointer", padding: "10px", display: "flex", flexDirection: "column", gap: 5 }}
      >
        <span style={{ display: "block", width: 22, height: 2, background: "#1c1917", transition: "transform 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
        <span style={{ display: "block", width: 22, height: 2, background: "#1c1917", transition: "opacity 0.2s", opacity: open ? 0 : 1 }} />
        <span style={{ display: "block", width: 22, height: 2, background: "#1c1917", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
      </button>

      {open && (
        <div style={{ position: "absolute", top: 60, left: 0, right: 0, background: "#fff", borderBottom: "1px solid #e8ddd4", zIndex: 100, padding: "8px 0" }}>
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ display: "block", padding: "14px 24px", fontSize: 16, fontWeight: 500, color: "#1c1917", textDecoration: "none", borderBottom: "1px solid #f5f0eb" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
