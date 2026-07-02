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

        <div style={{ borderTop: "1px solid #e7e5e4", margin: "2rem 0" }} />

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: "0.75rem" }}>Restaurants</p>
        <p style={{ marginBottom: "1.25rem" }}>
          Our choice of restaurants reflects what we, as locals, believe is a good place to go to enjoy quality time. It is also a recognition of their chefs' effort to do their best for patrons they would like to host again, not the hurried weekend visitor. We believe the 38 restaurants we have chosen are compatible for locals as well as visitors from India and abroad.
        </p>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: "0.75rem" }}>Hotels</p>
        <p style={{ marginBottom: "1.25rem" }}>
          Curating a hotel list was the hardest part of this project, next only to writing the history articles. Why? Because our set goal was not to provide a full list of all hotels but to give a signal to visitors of which places they could book in confidence. Further, we decided to limit that list to just 25 of them and, as we have not personally stayed in any of them, things became even harder. So the best route was to compile a list through word of mouth and check for ourselves when we visited friends who stayed there.
        </p>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: "0.75rem" }}>A note on independence</p>
        <p style={{ marginBottom: "1.25rem" }}>
          None of the selected restaurants or hotels were contacted earlier, nor have we any sort of paid partnership with any of them. If you are the managing staff of one of these selected places and wish to have your establishment removed, please reach out. As we believe our authority relies on independent writing, please avoid asking to change how we described your establishment. On the other hand, if you would like to change the photo we have used, please send us one in landscape view in any format but not more than 1 MB.
        </p>
      </div>
      <AppBanner />
    </div>
  );
}
