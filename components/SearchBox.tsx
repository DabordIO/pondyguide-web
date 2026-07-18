"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocale } from "@/lib/nav";
import type { SearchEntry } from "@/lib/searchIndex";

const PLACEHOLDER = { en: "Search the guide…", fr: "Rechercher dans le guide…", ta: "தேடுங்கள்…" };
const NO_RESULTS = { en: "No results", fr: "Aucun résultat", ta: "முடிவுகள் இல்லை" };
const HINT = { en: "Type to search hotels, restaurants, streets, history and more", fr: "Tapez pour rechercher hôtels, restaurants, rues, histoire et plus", ta: "தேட தட்டச்சு செய்யவும்" };

function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function score(entryTitle: string, query: string): number {
  const t = normalize(entryTitle);
  const q = normalize(query);
  if (!q) return 0;
  const idx = t.indexOf(q);
  if (idx === -1) return -1;
  if (idx === 0) return 100 - t.length * 0.1;
  return 50 - idx - t.length * 0.05;
}

export default function SearchBox() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocale(pathname);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open || index) return;
    fetch(`/api/search/${locale}`)
      .then(r => r.json())
      .then((data: SearchEntry[]) => setIndex(data))
      .catch(() => setIndex([]));
  }, [open, index, locale]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      setQuery("");
      setActiveIdx(0);
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(o => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    if (!index || !query.trim()) return [];
    return index
      .map(entry => ({ entry, s: score(entry.title, query) }))
      .filter(x => x.s >= 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 20)
      .map(x => x.entry);
  }, [index, query]);

  useEffect(() => setActiveIdx(0), [results.length, query]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={PLACEHOLDER[locale]}
        style={{
          display: "flex", alignItems: "center", gap: 6, background: "none", border: "1px solid #e8ddd4",
          borderRadius: 8, padding: "7px 12px", cursor: "pointer", color: "#6b6560", fontSize: 13,
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="search-trigger-label">{PLACEHOLDER[locale]}</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(28,25,23,0.5)", zIndex: 200,
            display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "12vh 20px 20px",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: 14, width: "100%", maxWidth: 560,
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)", overflow: "hidden", maxHeight: "70vh", display: "flex", flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 18px", borderBottom: "1px solid #e8ddd4" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={PLACEHOLDER[locale]}
                onKeyDown={e => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, results.length - 1)); }
                  if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)); }
                  if (e.key === "Enter" && results[activeIdx]) { go(results[activeIdx].href); }
                }}
                style={{ flex: 1, border: "none", outline: "none", fontSize: 16, color: "#1c1917", background: "transparent" }}
              />
            </div>

            <div style={{ overflowY: "auto", padding: results.length ? "8px" : "32px 18px" }}>
              {!query.trim() && (
                <p style={{ fontSize: 13, color: "#a8a29e", textAlign: "center" }}>{HINT[locale]}</p>
              )}
              {query.trim() && results.length === 0 && (
                <p style={{ fontSize: 13, color: "#a8a29e", textAlign: "center" }}>{NO_RESULTS[locale]}</p>
              )}
              {results.map((r, i) => (
                <button
                  key={r.href}
                  onClick={() => go(r.href)}
                  onMouseEnter={() => setActiveIdx(i)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, width: "100%",
                    textAlign: "left", padding: "10px 12px", borderRadius: 8, border: "none", cursor: "pointer",
                    background: i === activeIdx ? "#f8f8f6" : "transparent",
                  }}
                >
                  <span style={{ fontSize: 14, color: "#1c1917", fontWeight: 500 }}>{r.title}</span>
                  <span style={{ fontSize: 11, color: "#d4711a", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", flexShrink: 0 }}>{r.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
