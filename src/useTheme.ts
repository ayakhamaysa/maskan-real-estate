import { useEffect, useState } from "react";
import type { Theme } from "./types";

// Light / dark mode. First visit follows the device setting, then remembers the choice.
export function useTheme() {
  // useState<Theme>: the theme can only ever be "light" or "dark"
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("theme");
      // the browser storage can hold any text, so we check it before trusting it
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // private mode
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    // data-theme="dark" on <html> switches all the colors in index.css
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // private mode: just don't remember
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return { theme, toggleTheme };
}
