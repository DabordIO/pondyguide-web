"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getStoredConsent, COOKIE_CONSENT_CHANGE_EVENT } from "./CookieConsent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(getStoredConsent() === "accepted");

    function handleChange() {
      setEnabled(getStoredConsent() === "accepted");
    }
    window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, handleChange);
  }, []);

  if (!enabled || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}
