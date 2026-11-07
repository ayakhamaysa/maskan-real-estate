import { agency } from "../data/homes";
import { ui } from "../data/ui";

export default function Footer({ lang }) {
  return (
    <footer className="always-dark text-white/70 text-sm">
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col sm:flex-row gap-3 justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo-light.png" alt={agency.name} width="160" height="89" className="h-12 w-auto" loading="lazy" />
          <span>· {agency.city[lang]}</span>
        </div>
        <p>
          {ui[lang].madeBy}{" "}
          <a href="https://www.instagram.com/oneclick.ps" target="_blank" className="font-semibold text-white">
            One Click
          </a>
        </p>
      </div>
    </footer>
  );
}
