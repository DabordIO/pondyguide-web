import type { Metadata } from "next";
import AppBanner from "@/components/AppBanner";

export const metadata: Metadata = {
  title: "About Pondy Guide",
  description: "Two friends with family roots in Pondicherry built this guide to give visitors more than the surface.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>About</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 32, lineHeight: 1.2 }}>
        Why this guide exists
      </h1>
      <div style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524" }}>
        <p style={{ marginBottom: "1.25rem" }}>
          Pondy Guide was built by two friends who share a connection to Pondicherry that goes well beyond a holiday visit. Both have family roots in the town going back generations, and both grew up with a particular attachment to its streets, its history, and the layers of life that most visitors never get the chance to see.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          The idea was simple: give people who come to Pondicherry the chance to discover something more than the surface. Not just where to eat and where to stay, but who built this place, who fought over it, who left, who stayed, and what their descendants are doing today.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          The history of Pondicherry is genuinely extraordinary, and much of it is poorly documented in the places tourists actually look. We wanted to change that in a small way.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          This guide was made with care, with a great deal of help from the historical record, and with a deep respect for a town that has meant a great deal to both of us for a very long time.
        </p>
      </div>
      <AppBanner />
    </div>
  );
}
