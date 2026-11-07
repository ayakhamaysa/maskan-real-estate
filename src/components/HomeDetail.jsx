import { agency, areas, types, featuresAr } from "../data/homes";
import { ui } from "../data/ui";
import { fullPrice, countLabel } from "../format";
import HomePhoto from "./HomePhoto";
import Modal from "./Modal";

export default function HomeDetail({ home, lang, saved, onSave, onClose }) {
  const t = ui[lang];
  const ar = lang === "ar";
  const whatsapp = `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(t.whatsappText(home))}`;

  return (
    <Modal onClose={onClose} closeLabel={t.close}>
      <HomePhoto home={home} className="w-full aspect-[16/9] rounded-t-3xl" />

      <div className="p-6 md:p-8">
        <p className="text-sm text-muted">
          {t[home.deal]} · {types[home.type][lang]} · {areas[home.area][lang]}
        </p>
        <h2 className="font-serif text-3xl mt-1">{ar ? home.titleAr : home.title}</h2>
        <p className="text-2xl font-semibold mt-3" dir="ltr" style={{ textAlign: ar ? "right" : "left" }}>
          {fullPrice(home.price, lang)} {home.deal === "rent" && <span className="text-base font-normal text-muted">{t.perYear}</span>}
        </p>

        {/* Main numbers */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            [home.beds === 0 ? t.studio : home.beds, home.beds === 0 ? "" : countLabel(home.beds, "beds", lang).replace(/^\d+ /, "")],
            [home.baths, countLabel(home.baths, "baths", lang).replace(/^\d+ /, "")],
            [home.size.toLocaleString("en-US"), t.sqft],
          ].map(([value, label], i) => (
            <div key={i} className="bg-sand rounded-2xl p-4 text-center">
              <p className="text-xl font-semibold">{value}</p>
              <p className="text-xs text-muted">{label}</p>
            </div>
          ))}
        </div>

        <h3 className="font-semibold mt-7">{t.about}</h3>
        <p className="text-muted mt-1 leading-relaxed">{ar ? home.aboutAr : home.about}</p>

        <h3 className="font-semibold mt-6">{t.features}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {home.features.map((f) => (
            <span key={f} className="text-sm border border-ink/15 rounded-full px-3 py-1">
              {ar ? featuresAr[f] : f}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <a href={whatsapp} target="_blank" className="flex-1 text-center bg-[#1f9e55] text-white font-semibold rounded-full px-6 py-3">
            {t.contact}
          </a>
          <a href={`tel:+${agency.whatsapp}`} className="border border-ink/20 rounded-full px-6 py-3">
            📞 {t.call}
          </a>
          <button onClick={() => onSave(home.id)} aria-pressed={saved} className="border border-ink/20 rounded-full px-6 py-3">
            {saved ? "♥" : "♡"} {t.saved}
          </button>
        </div>
      </div>
    </Modal>
  );
}
