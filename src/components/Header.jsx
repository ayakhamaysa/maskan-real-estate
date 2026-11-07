import { agency } from "../data/homes";
import { ui } from "../data/ui";

export default function Header({ lang, onToggle, theme, onToggleTheme, savedCount, onShowSaved }) {
  const t = ui[lang];
  return (
    <header className="sticky top-0 z-[1000] bg-paper/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center gap-4">
        <a href="#top" className="flex items-center gap-2">
          {/* House and key from the logo */}
          <img src="/logo-icon.png" alt="" width="40" height="40" className="w-10 h-10" />
          <span className="font-serif text-xl tracking-wide" dir="ltr">
            {agency.name}
          </span>
        </a>
        <button onClick={onShowSaved} className="ms-auto text-sm flex items-center gap-1.5 hover:text-clay-deep">
          ♥ <span className="hidden sm:inline">{t.saved}</span> <span className="bg-clay-deep text-white rounded-full text-xs px-2 py-0.5">{savedCount}</span>
        </button>
        {/* Light / dark mode */}
        <button
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
          className="w-9 h-9 rounded-full border border-ink/20 hover:border-ink grid place-items-center"
        >
          {/* Line icons in the text color: white on dark mode, dark on light mode */}
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          )}
        </button>
        <button onClick={onToggle} className="text-sm border border-ink/20 rounded-full px-4 py-1.5 hover:border-ink">
          {t.switchTo}
        </button>
      </div>
    </header>
  );
}
