import { agency } from "./data/homes";

// 145000 → "145K", 1450000 → "1.45M" (short, for the map pins)
export function shortPrice(price) {
  if (price >= 1000000) return `${+(price / 1000000).toFixed(2)}M`;
  return `${Math.round(price / 1000)}K`;
}

// 145000 → "AED 145,000" or "145,000 د.إ"
export function fullPrice(price, lang) {
  const number = price.toLocaleString("en-US");
  return lang === "ar" ? `${number} ${agency.currency.ar}` : `${agency.currency.en} ${number}`;
}

// "1 bed / 2 beds" in English, "غرفة / غرفتين / 3 غرف" in Arabic
export function countLabel(n, kind, lang) {
  if (lang === "en") {
    const word = kind === "beds" ? "bed" : "bath";
    return `${n} ${n === 1 ? word : word + "s"}`;
  }
  const words = kind === "beds" ? ["غرفة", "غرفتين", "غرف"] : ["حمام", "حمامين", "حمامات"];
  if (n === 1) return words[0]; // غرفة
  if (n === 2) return words[1]; // غرفتين
  return `${n} ${words[2]}`; // 3 غرف
}
