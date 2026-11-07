import { areas } from "../data/homes";
import { ui, maxPrices } from "../data/ui";
import { shortPrice } from "../format";

// The shared filter inputs (used in the hero search and in the results bar)
// filters = { deal, area, beds, maxPrice }
export default function FilterFields({ lang, filters, setFilters, dark = false }) {
  const t = ui[lang];
  const field = `rounded-full px-4 py-2.5 text-sm outline-none cursor-pointer ${
    dark ? "bg-white/10 text-white border border-white/20 [&>option]:text-black" : "bg-card border border-ink/15"
  }`;
  const set = (key) => (e) => setFilters({ ...filters, [key]: e.target.value });

  return (
    <>
      {/* Rent / Buy switch */}
      <div className={`flex rounded-full p-1 ${dark ? "bg-white/10" : "bg-sand"}`}>
        {["rent", "sale"].map((deal) => (
          <button
            key={deal}
            type="button"
            onClick={() => setFilters({ ...filters, deal, maxPrice: "" })}
            aria-pressed={filters.deal === deal}
            className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-colors ${
              filters.deal === deal ? "bg-clay-deep text-white" : dark ? "text-white/80" : "text-muted"
            }`}
          >
            {t[deal]}
          </button>
        ))}
      </div>

      <select value={filters.area} onChange={set("area")} aria-label={t.anyArea} className={field}>
        <option value="">{t.anyArea}</option>
        {Object.entries(areas).map(([key, name]) => (
          <option key={key} value={key}>
            {name[lang]}
          </option>
        ))}
      </select>

      <select value={filters.beds} onChange={set("beds")} aria-label={t.anyBeds} className={field}>
        <option value="">{t.anyBeds}</option>
        <option value="0">{t.studio}</option>
        {[1, 2, 3, 4].map((n) => (
          <option key={n} value={n}>
            {t.bedsPlus(n)}
          </option>
        ))}
      </select>

      <select value={filters.maxPrice} onChange={set("maxPrice")} aria-label={t.anyPrice} className={field}>
        <option value="">{t.anyPrice}</option>
        {maxPrices[filters.deal].map((p) => (
          <option key={p} value={p}>
            {t.upTo(shortPrice(p))}
          </option>
        ))}
      </select>
    </>
  );
}
