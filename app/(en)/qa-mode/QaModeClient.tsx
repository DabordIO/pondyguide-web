"use client";

import { useEffect, useState } from "react";

export default function QaModeClient() {
  const [disabled, setDisabled] = useState<boolean | null>(null);

  useEffect(() => {
    setDisabled(Boolean(localStorage.getItem("va-disable")));
  }, []);

  function toggle() {
    if (localStorage.getItem("va-disable")) {
      localStorage.removeItem("va-disable");
      setDisabled(false);
    } else {
      localStorage.setItem("va-disable", "true");
      setDisabled(true);
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Analytics tracking for this browser
      </h1>
      <p style={{ fontSize: "1rem", color: "#6b6560", lineHeight: 1.7, marginBottom: 24 }}>
        {disabled === null
          ? "Checking…"
          : disabled
          ? "Tracking is currently OFF in this browser. Your visits here won't appear in Vercel Analytics."
          : "Tracking is currently ON in this browser, same as any other visitor."}
      </p>
      <button
        onClick={toggle}
        style={{
          background: "#1c1917", color: "#fff", border: "none", borderRadius: 8,
          padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer",
        }}
      >
        {disabled ? "Re-enable tracking" : "Disable tracking for this browser"}
      </button>
      <p style={{ fontSize: 13, color: "#a8a29e", marginTop: 24, lineHeight: 1.6 }}>
        This only affects this browser (stored in localStorage). Repeat on any other browser/device you use for QA. Not linked from the site and not in the sitemap.
      </p>
    </div>
  );
}
