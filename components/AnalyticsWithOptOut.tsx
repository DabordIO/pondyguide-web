"use client";

import { Analytics } from "@vercel/analytics/next";

export default function AnalyticsWithOptOut() {
  return (
    <Analytics
      beforeSend={(event) => {
        if (localStorage.getItem("va-disable")) {
          return null;
        }
        return event;
      }}
    />
  );
}
