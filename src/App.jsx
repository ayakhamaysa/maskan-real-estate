import { useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { homes } from "./data/homes";
import { ui } from "./data/ui";
import { useLanguage } from "./useLanguage";
import { useSaved } from "./useSaved";
import { useTheme } from "./useTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FilterFields from "./components/FilterFields";
import HomeCard from "./components/HomeCard";
import MapView from "./components/MapView";
import HomeDetail from "./components/HomeDetail";
import { CompareBar, CompareModal } from "./components/Compare";
import Footer from "./components/Footer";

export default function App() {
  const { lang, toggle } = useLanguage();
  const t = ui[lang];
  const { saved, toggleSaved } = useSaved();
  const { theme, toggleTheme } = useTheme();

  const [filters, setFilters] = useState({ deal: "rent", area: "", beds: "", maxPrice: "" });
  const [sort, setSort] = useState("recommended");
  const [onlySaved, setOnlySaved] = useState(false);
  const [mobileView, setMobileView] = useState("list"); // "list" or "map" on phones
  const [hoveredId, setHoveredId] = useState(null); // card or pin under the mouse
  const [openHome, setOpenHome] = useState(null); // home shown in the detail window
  const [compareIds, setCompareIds] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [note, setNote] = useState(""); // small message, e.g. "up to 3 homes"

  // The homes that match the filters, in the chosen order
  const results = useMemo(() => {
    const list = homes.filter(
      (h) =>
        h.deal === filters.deal &&
        (!filters.area || h.area === filters.area) &&
        (filters.beds === "" || (filters.beds === "0" ? h.beds === 0 : h.beds >= Number(filters.beds))) &&
        (!filters.maxPrice || h.price <= Number(filters.maxPrice)) &&
        (!onlySaved || saved.includes(h.id))
    );
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "size") list.sort((a, b) => b.size - a.size);
    return list;
  }, [filters, sort, onlySaved, saved]);

  function toggleCompare(id) {
    if (compareIds.includes(id)) return setCompareIds(compareIds.filter((x) => x !== id));
    if (compareIds.length >= 3) {
      setNote(t.compareMax);
      setTimeout(() => setNote(""), 2500);
      return;
    }
    setCompareIds([...compareIds, id]);
  }

  const goToResults = () => document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  const picked = homes.filter((h) => compareIds.includes(h.id));

  return (
    // reducedMotion="user": no animations for visitors who turned motion off
    <MotionConfig reducedMotion="user">
      <Header
        lang={lang}
        onToggle={toggle}
        theme={theme}
        onToggleTheme={toggleTheme}
        savedCount={saved.length}
        onShowSaved={() => {
          setOnlySaved(true);
          goToResults();
        }}
      />
      <Hero lang={lang} filters={filters} setFilters={setFilters} onSearch={goToResults} />

      <main id="results" className="scroll-mt-16">
        {/* Filters bar */}
        <div className="sticky top-16 z-[900] bg-paper/95 backdrop-blur border-b border-ink/10">
          {/* Phones: one row that slides sideways. Big screens: wraps normally */}
          <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-2 overflow-x-auto lg:flex-wrap [scrollbar-width:none] [&>*]:shrink-0">
            <FilterFields lang={lang} filters={filters} setFilters={setFilters} />
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort" className="rounded-full px-4 py-2.5 text-sm bg-card border border-ink/15">
              {Object.entries(t.sort).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setOnlySaved(!onlySaved)}
              aria-pressed={onlySaved}
              className={`rounded-full px-4 py-2.5 text-sm border ${onlySaved ? "bg-clay-deep text-white border-clay-deep" : "bg-card border-ink/15"}`}
            >
              ♥ {t.onlySaved}
            </button>
            <p className="ms-auto text-sm text-muted">{t.results(results.length)}</p>
          </div>
        </div>

        {/* List and map side by side (on phones: one at a time) */}
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className={`px-5 py-6 ${mobileView === "map" ? "hidden lg:block" : ""}`}>
            {/* Title for screen readers (the cards below use h3) */}
            <h2 className="sr-only">{t.results(results.length)}</h2>
            {results.length === 0 ? (
              <p className="text-muted bg-sand rounded-2xl p-6">{t.noResults}</p>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                {results.map((home) => (
                  <HomeCard
                    key={home.id}
                    home={home}
                    lang={lang}
                    active={hoveredId === home.id}
                    saved={saved.includes(home.id)}
                    comparing={compareIds.includes(home.id)}
                    onHover={setHoveredId}
                    onOpen={setOpenHome}
                    onSave={toggleSaved}
                    onCompare={toggleCompare}
                  />
                ))}
              </div>
            )}
          </div>

          {/* The map stays in place while the list scrolls */}
          <div className={`lg:sticky lg:top-[8.5rem] h-[calc(100svh-8.5rem)] ${mobileView === "list" ? "hidden lg:block" : ""}`}>
            <MapView homes={results} lang={lang} activeId={hoveredId} onHover={setHoveredId} onOpen={setOpenHome} shownOn={mobileView} />
          </div>
        </div>
      </main>

      <Footer lang={lang} />

      {/* Phones: switch between the list and the map */}
      <button
        onClick={() => setMobileView(mobileView === "list" ? "map" : "list")}
        className={`lg:hidden fixed start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-[1400] always-dark rounded-full px-6 py-3 text-sm font-semibold shadow-xl ${
          picked.length ? "bottom-24" : "bottom-5"
        }`}
      >
        {mobileView === "list" ? `🗺 ${t.map}` : `☰ ${t.list}`}
      </button>

      {note && <p className="fixed top-20 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-[2500] always-dark text-sm rounded-full px-5 py-2">{note}</p>}

      <CompareBar picked={picked} lang={lang} onOpen={() => setCompareOpen(true)} onClear={() => setCompareIds([])} />
      {compareOpen && <CompareModal picked={picked} lang={lang} onClose={() => setCompareOpen(false)} />}
      {openHome && <HomeDetail home={openHome} lang={lang} saved={saved.includes(openHome.id)} onSave={toggleSaved} onClose={() => setOpenHome(null)} />}
    </MotionConfig>
  );
}
