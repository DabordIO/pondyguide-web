import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: { default: "Pondy Guide — Pondicherry Travel & Heritage", template: "%s | Pondy Guide" },
  description: "The definitive guide to Pondicherry — history, heritage, restaurants, hotels, festivals, and everything you need to explore one of India's most extraordinary towns.",
  metadataBase: new URL("https://www.pondyguide.com"),
  openGraph: {
    siteName: "Pondy Guide",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.pondyguide.com/#organization",
                name: "Pondy Guide",
                url: "https://www.pondyguide.com",
                logo: "https://www.pondyguide.com/pondy-seal.png",
              },
              {
                "@type": "WebSite",
                "@id": "https://www.pondyguide.com/#website",
                name: "Pondy Guide",
                url: "https://www.pondyguide.com",
                publisher: { "@id": "https://www.pondyguide.com/#organization" },
              },
            ],
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
