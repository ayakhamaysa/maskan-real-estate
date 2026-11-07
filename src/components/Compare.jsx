import { areas, types } from "../data/homes";
import { ui } from "../data/ui";
import { fullPrice } from "../format";
import HomePhoto from "./HomePhoto";
import Modal from "./Modal";

// The bar at the bottom while homes are picked for comparing
export function CompareBar({ picked, lang, onOpen, onClear }) {
  const t = ui[lang];
  if (picked.length === 0) return null;
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2 z-[1500] always-dark rounded-full shadow-2xl ps-3 pe-2 py-2 flex items-center gap-3">
      <div className="flex -space-x-3 rtl:space-x-reverse">
        {picked.map((h) => (
          <HomePhoto key={h.id} home={h} className="w-9 h-9 rounded-full border-2 border-[#15191f]" />
        ))}
      </div>
      <button onClick={onClear} className="text-sm text-white/70 hover:text-white">
        {t.clear}
      </button>
      <button
        onClick={onOpen}
        disabled={picked.length < 2}
        className="ms-auto bg-clay-deep rounded-full px-5 py-2 text-sm font-semibold disabled:opacity-50"
      >
        {t.compareCount(picked.length)}
      </button>
    </div>
  );
}

// The comparing table: one column for each home
export function CompareModal({ picked, lang, onClose }) {
  const t = ui[lang];
  const ar = lang === "ar";
  const rows = [
    [t.rowLabels.price, (h) => fullPrice(h.price, lang) + (h.deal === "rent" ? ` ${t.perYear}` : "")],
    [t.pricePerSqft, (h) => fullPrice(Math.round(h.price / h.size), lang)],
    [t.rowLabels.type, (h) => types[h.type][lang]],
    [t.rowLabels.area, (h) => areas[h.area][lang]],
    [t.rowLabels.beds, (h) => (h.beds === 0 ? t.studio : h.beds)],
    [t.rowLabels.baths, (h) => h.baths],
    [t.rowLabels.size, (h) => `${h.size.toLocaleString("en-US")} ${t.sqft}`],
  ];

  return (
    <Modal onClose={onClose} closeLabel={t.close} wide>
      <div className="p-6 md:p-8 overflow-x-auto">
        <h2 className="font-serif text-3xl">{t.compare}</h2>
        <table className="w-full mt-6 text-sm min-w-[520px]">
          <thead>
            <tr>
              <th />
              {picked.map((h) => (
                <th key={h.id} className="p-2 text-start align-top font-normal">
                  <HomePhoto home={h} className="w-full aspect-[4/3] rounded-xl" />
                  <p className="font-semibold mt-2">{ar ? h.titleAr : h.title}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-t border-ink/10">
                <td className="py-3 pe-3 text-muted whitespace-nowrap">{label}</td>
                {picked.map((h) => (
                  <td key={h.id} className="py-3 px-2 font-medium">
                    {value(h)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
