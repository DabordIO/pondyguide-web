import type { Metadata } from "next";

const SITE_NAME = "Pondy Guide";
const SITE_URL = "https://www.pondyguide.com";

export type SiteLocale = "en_US" | "fr_FR" | "ta_IN";

export function buildOpenGraph(opts: {
  path: string;
  image?: string;
  locale?: SiteLocale;
}): Metadata["openGraph"] {
  return {
    url: `${SITE_URL}${opts.path}`,
    siteName: SITE_NAME,
    locale: opts.locale ?? "en_US",
    type: "website",
    images: opts.image ? [opts.image] : undefined,
  };
}

const DEFAULT_OG_IMAGE = {
  url: "/sites/gandhi-statue.jpg",
  width: 1600,
  height: 1066,
  alt: "Gandhi statue on the Pondicherry promenade at sunset",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

export const localeMetadata: Record<"en" | "fr" | "ta", Metadata> = {
  en: {
    ...baseMetadata,
    title: { default: "Pondy Guide — Pondicherry Travel & Heritage", template: "%s | Pondy Guide" },
    description:
      "The definitive guide to Pondicherry — history, heritage, restaurants, hotels, festivals, and everything you need to explore one of India's most extraordinary towns.",
    openGraph: { ...baseMetadata.openGraph, locale: "en_US" },
  },
  fr: {
    ...baseMetadata,
    title: { default: "Guide de Pondichéry — en français", template: "%s | Pondy Guide" },
    description: "L'histoire, les institutions françaises et les grandes figures de Pondichéry — en français.",
    openGraph: { ...baseMetadata.openGraph, locale: "fr_FR" },
  },
  ta: {
    ...baseMetadata,
    title: { default: "புதுச்சேரி வழிகாட்டி — தமிழில்", template: "%s | Pondy Guide" },
    description: "புதுச்சேரியின் வரலாறு, உணவகங்கள் மற்றும் மேலும் பல — தமிழில்.",
    openGraph: { ...baseMetadata.openGraph, locale: "ta_IN" },
  },
};
