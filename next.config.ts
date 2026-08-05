import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/discover/white-town/rue-victor-simonnel",
        destination: "/discover/white-town/rue-victor-simonel",
        permanent: true,
      },
      {
        source: "/fr/discover/white-town/rue-victor-simonnel",
        destination: "/fr/discover/white-town/rue-victor-simonel",
        permanent: true,
      },
      {
        source: "/ta/discover/white-town/rue-victor-simonnel",
        destination: "/ta/discover/white-town/rue-victor-simonel",
        permanent: true,
      },
      {
        source: "/auroville",
        destination: "/discover/auroville",
        permanent: true,
      },
      {
        source: "/auroville/what-is-auroville",
        destination: "/discover/auroville/what-is-auroville",
        permanent: true,
      },
      {
        source: "/auroville/the-matrimandir",
        destination: "/discover/auroville/the-matrimandir",
        permanent: true,
      },
      {
        source: "/auroville/sustainable-living",
        destination: "/discover/auroville/sustainable-living",
        permanent: true,
      },
      {
        source: "/auroville/arts-crafts",
        destination: "/discover/auroville/arts-crafts",
        permanent: true,
      },
      {
        source: "/auroville/food-cafes",
        destination: "/discover/auroville/food-cafes",
        permanent: true,
      },
      {
        source: "/auroville/how-to-visit",
        destination: "/discover/auroville/how-to-visit",
        permanent: true,
      },
      {
        source: "/fr/auroville",
        destination: "/fr/discover/auroville",
        permanent: true,
      },
      {
        source: "/fr/auroville/what-is-auroville",
        destination: "/fr/discover/auroville/what-is-auroville",
        permanent: true,
      },
      {
        source: "/fr/auroville/the-matrimandir",
        destination: "/fr/discover/auroville/the-matrimandir",
        permanent: true,
      },
      {
        source: "/fr/auroville/sustainable-living",
        destination: "/fr/discover/auroville/sustainable-living",
        permanent: true,
      },
      {
        source: "/fr/auroville/arts-crafts",
        destination: "/fr/discover/auroville/arts-crafts",
        permanent: true,
      },
      {
        source: "/fr/auroville/food-cafes",
        destination: "/fr/discover/auroville/food-cafes",
        permanent: true,
      },
      {
        source: "/fr/auroville/how-to-visit",
        destination: "/fr/discover/auroville/how-to-visit",
        permanent: true,
      },
      {
        source: "/discover/arts/franco-tamil-cooking",
        destination: "/restaurants",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
