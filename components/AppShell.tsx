import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AnalyticsWithOptOut from "@/components/AnalyticsWithOptOut";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
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
      <AnalyticsWithOptOut />
      <GoogleAnalytics />
      <CookieConsent />
    </body>
  );
}
