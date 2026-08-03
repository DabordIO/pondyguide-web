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
