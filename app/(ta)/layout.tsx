import type { Metadata } from "next";
import "../globals.css";
import { inter, playfair } from "@/lib/fonts";
import { localeMetadata } from "@/lib/metadata";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = localeMetadata.ta;

export default function TaRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ta" className={`${inter.variable} ${playfair.variable}`}>
      <AppShell>{children}</AppShell>
    </html>
  );
}
