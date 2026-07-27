import { NextResponse } from "next/server";
import { getSearchIndex, type SearchLocale } from "@/lib/searchIndex";

const LOCALES: SearchLocale[] = ["en", "fr", "ta"];

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export const dynamicParams = false;

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as SearchLocale)) {
    return NextResponse.json({ error: "Unknown locale" }, { status: 404 });
  }
  const index = getSearchIndex(locale as SearchLocale);
  return NextResponse.json(index, {
    headers: { "Cache-Control": "public, max-age=3600, immutable" },
  });
}
