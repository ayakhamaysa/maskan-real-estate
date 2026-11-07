import { motion } from "framer-motion";
import { ui } from "../data/ui";
import FilterFields from "./FilterFields";

export default function Hero({ lang, filters, setFilters, onSearch }) {
  const t = ui[lang];
  return (
    <section id="top" className="relative overflow-hidden always-dark">
      {/* Background photo, with a dark layer so the text is easy to read */}
      <img
        src="/homes/hero.webp"
        alt=""
        fetchPriority="high"
        onError={(e) => (e.currentTarget.style.display = "none")} // until the photo is added
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#15191f] via-[#15191f]/40 to-[#15191f]/20" />

      <div className="relative max-w-7xl mx-auto px-5 pt-28 pb-14 md:pt-40 md:pb-20">
        <motion.div initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-serif text-5xl md:text-7xl max-w-3xl leading-[1.05]">{t.heroTitle}</h1>
          <p className="text-white/80 text-lg mt-4 max-w-xl">{t.heroText}</p>
        </motion.div>

        {/* Search box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
          className="mt-10 flex flex-wrap items-center gap-3 bg-black/40 backdrop-blur-md border border-white/15 rounded-3xl p-3 w-fit max-w-full"
        >
          <FilterFields lang={lang} filters={filters} setFilters={setFilters} dark />
          <button className="bg-white text-[#15191f] font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-[#ece7df]">{t.search}</button>
        </form>
      </div>
    </section>
  );
}
