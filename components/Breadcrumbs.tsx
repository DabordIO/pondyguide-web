import Link from "next/link";
import JsonLd from "./JsonLd";

export interface Crumb {
  label: string;
  href: string;
}

const BASE = "https://www.pondyguide.com";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: `${BASE}${item.href}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, fontSize: 12, color: "#a8a29e", marginBottom: 14 }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.href} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              {i > 0 && <span style={{ color: "#d6d3d1" }}>/</span>}
              {isLast ? (
                <span style={{ color: "#78716c" }}>{item.label}</span>
              ) : (
                <Link href={item.href} style={{ color: "#a8a29e", textDecoration: "none" }}>{item.label}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
