import { areas, types } from "../data/homes";
import { ui } from "../data/ui";
import { fullPrice, countLabel } from "../format";
import HomePhoto from "./HomePhoto";
import { contactLinks } from "../contact";

// One home in the list
export default function HomeCard({ home, lang, active, saved, comparing, onHover, onOpen, onSave, onCompare }) {
  const t = ui[lang];
  return (
    <article
      onMouseEnter={() => onHover(home.id)}
      onMouseLeave={() => onHover(null)}
      className={`group bg-card rounded-2xl overflow-hidden border transition-shadow ${
        active ? "border-clay shadow-lg" : "border-ink/10 hover:shadow-lg"
      }`}
    >
      <div className="relative">
        <button onClick={() => onOpen(home)} className="block w-full" aria-label={t.view}>
          <HomePhoto home={home} className="w-full aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-500" />
        </button>
        <span className="absolute top-3 start-3 bg-white/90 text-[#15191f] text-xs font-semibold rounded-full px-3 py-1">
          {t[home.deal]} · {types[home.type][lang]}
        </span>
        <button
          onClick={() => onSave(home.id)}
          aria-pressed={saved}
          aria-label={t.saved}
          className={`absolute top-3 end-3 w-9 h-9 rounded-full grid place-items-center text-lg shadow ${saved ? "bg-clay text-white" : "bg-white/90 text-[#15191f]"}`}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>

      <div className="p-4">
        <p className="font-semibold text-lg" dir="ltr" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
          {fullPrice(home.price, lang)} {home.deal === "rent" && <span className="text-sm font-normal text-muted">{t.perYear}</span>}
        </p>
        <h3 className="font-serif text-lg mt-1">{lang === "ar" ? home.titleAr : home.title}</h3>
        <p className="text-sm text-muted">{areas[home.area][lang]}</p>

        <div className="flex items-center gap-4 text-sm text-muted mt-3 border-t border-ink/10 pt-3">
          <span>{home.beds === 0 ? t.studio : countLabel(home.beds, "beds", lang)}</span>
          <span>{countLabel(home.baths, "baths", lang)}</span>
          <span>
            {home.size.toLocaleString("en-US")} {t.sqft}
          </span>
          <label className="ms-auto flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" checked={comparing} onChange={() => onCompare(home.id)} className="accent-clay w-4 h-4" />
            {t.compare}
          </label>
        </div>

        {/* Contact buttons for this home */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <a
            href={contactLinks(home, lang).whatsapp}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-[#1f9e55] text-white rounded-full py-2 text-sm font-semibold hover:bg-[#178a49]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
            </svg>
            {t.whatsapp}
          </a>
          <a
            href={contactLinks(home, lang).call}
            className="flex items-center justify-center gap-2 border border-ink/20 rounded-full py-2 text-sm font-semibold hover:border-ink"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            {t.call}
          </a>
        </div>
      </div>
    </article>
  );
}
