import { agency } from "./data/homes";
import type { Lang } from "./types";

// 145000 → "145K", 1450000 → "1.45M" (short, for the map pins)
export function shortPrice(price: number): string {
  if (price >= 1000000) return `${+(price / 1000000).toFixed(2)}M`;
  return `${Math.round(price / 1000)}K`;
}

// 145000 → "AED 145,000" or "145,000 د.إ"
export function fullPrice(price: number, lang: Lang): string {
  const number = price.toLocaleString("en-US");
  return lang === "ar" ? `${number} ${agency.currency.ar}` : `${agency.currency.en} ${number}`;
}

// "1 bed / 2 beds" in English, "غرفة / غرفتين / 3 غرف" in Arabic
// kind can only be "beds" or "baths": a typo like "bed" is caught before the site runs
export function countLabel(n: number, kind: "beds" | "baths", lang: Lang): string {
  if (lang === "en") {
    const word = kind === "beds" ? "bed" : "bath";
    return `${n} ${n === 1 ? word : word + "s"}`;
  }
  // "as const" = a fixed list of exactly 3 words, so words[0..2] always exist
  const words = kind === "beds" ? (["غرفة", "غرفتين", "غرف"] as const) : (["حمام", "حمامين", "حمامات"] as const);
  if (n === 1) return words[0]; // غرفة
  if (n === 2) return words[1]; // غرفتين
  return `${n} ${words[2]}`; // 3 غرف
}
