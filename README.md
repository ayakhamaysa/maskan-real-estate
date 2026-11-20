# MASKAN — Dubai Real Estate Map (TypeScript)

A bilingual English / Arabic website for homes in Dubai. Price pins on an interactive map stay in sync with the listing cards, with filters, sorting, saved homes, a side-by-side comparison of up to 3 homes (with price per sq ft), WhatsApp and call buttons, and light / dark mode.

**Live:** https://maskan-real-estate.vercel.app

## Built with
React 19 · **TypeScript (strict)** · Vite · Tailwind CSS v4 · React Leaflet + OpenStreetMap · Framer Motion

## TypeScript
The project was migrated from JavaScript to TypeScript in strict mode.
- `src/types.ts` holds the data model: `Home`, `Filters`, `Deal`, `Feature`, `Lang`.
- Area and property-type keys are derived from the data (`keyof typeof areas`), so the types never drift from the content.
- The Arabic UI texts are typed against the English ones (`UiText`): a missing or misspelled key fails the build.
- `featuresAr` is a `Record<Feature, string>`: every feature must have an Arabic name.
- Values read from `localStorage` are validated before use.
- `npm run build` type-checks first, so a type error never reaches production.

## Run it
```bash
npm install
npm run dev        # local development
npm run typecheck  # TypeScript check only
npm run build      # type-check + production build
```

Concept project · Designed & built by [One Click](https://www.instagram.com/oneclick.ps)
