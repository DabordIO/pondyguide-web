"use client";

import { useEffect, useState } from "react";

export type ConsentStatus = "accepted" | "declined";

const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-changed";

export function getStoredConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export function clearStoredConsent() {
  sessionStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function setStoredConsent(value: ConsentStatus) {
  sessionStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export { CHANGE_EVENT as COOKIE_CONSENT_CHANGE_EVENT };

export default function CookieConsent() {
  const [status, setStatus] = useState<ConsentStatus | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStatus(getStoredConsent());
    setReady(true);

    function handleChange() {
      setStatus(getStoredConsent());
    }
    window.addEventListener(CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(CHANGE_EVENT, handleChange);
  }, []);

  if (!ready || status !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 1000,
        maxWidth: 640,
        margin: "0 auto",
        background: "#ffffff",
        border: "1px solid #e8ddd4",
        borderRadius: 14,
        padding: "18px 20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.14)",
      }}
    >
      <p style={{ fontSize: 14, color: "#1c1917", lineHeight: 1.55, marginBottom: 14 }}>
        We don&apos;t use cookies for advertising. We only use cookies to understand site traffic and improve Pondy
        Guide. You can change your choice at any time.
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
        <button
          onClick={() => setStoredConsent("declined")}
          style={{
            padding: "8px 16px",
            fontSize: 13,
            fontWeight: 600,
            borderRadius: 8,
            border: "1px solid #e8ddd4",
            background: "#ffffff",
            color: "#1c1917",
            cursor: "pointer",
          }}
        >
          Decline
        </button>
        <button
          onClick={() => setStoredConsent("accepted")}
          style={{
            padding: "8px 16px",
            fontSize: 13,
            fontWeight: 600,
            borderRadius: 8,
            border: "none",
            background: "#d4711a",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
