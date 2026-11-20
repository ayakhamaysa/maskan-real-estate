// ======================================================
// The shapes of our data, in one place.
// TypeScript reads these and warns us (in VS Code, before the site runs)
// if we write a wrong key, a wrong type, or forget a field.
// ======================================================
import type { areas, types } from "./data/homes";

// The two page languages. A "union": the value can only be one of these
export type Lang = "en" | "ar";

// A text in both languages: { en: "...", ar: "..." }
export type Text = Record<Lang, string>;

// "rent" = price per year, "sale" = full price
export type Deal = "rent" | "sale";

// The keys are read straight from the data: add an area in homes.ts and it is allowed here too
export type AreaKey = keyof typeof areas; // "marina" | "downtown" | ...
export type HomeType = keyof typeof types; // "apartment" | "studio" | ...

// Every feature a home can have (each one needs an Arabic name in featuresAr)
export type Feature =
  "balcony" | "pool" | "gym" | "parking" | "furnished" | "private pool" | "beach" | "garden" | "maid room" | "kids play area" | "metro nearby" | "terrace";

// One home. An "interface" lists every field and its type
export interface Home {
  id: number;
  deal: Deal;
  type: HomeType;
  area: AreaKey;
  beds: number; // 0 = studio
  baths: number;
  size: number; // square feet
  price: number; // AED (per year when deal is "rent")
  lat: number;
  lng: number;
  image: string; // a photo in public/homes
  title: string;
  titleAr: string;
  about: string;
  aboutAr: string;
  features: Feature[]; // a list of features
}

// The search filters. "" means "any"
export interface Filters {
  deal: Deal;
  area: AreaKey | "";
  beds: string; // "" any, "0" studio, "2" = 2+ beds (it comes from a <select>, so it is text)
  maxPrice: string;
}

export type SortKey = "recommended" | "low" | "high" | "size";
export type Theme = "light" | "dark";
