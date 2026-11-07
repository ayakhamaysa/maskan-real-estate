import { useEffect, useState } from "react";

// The ♥ saved homes, remembered in this browser
export function useSaved() {
  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("saved")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("saved", JSON.stringify(saved));
    } catch {
      // private mode: just don't remember
    }
  }, [saved]);

  const toggleSaved = (id) => setSaved(saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id]);
  return { saved, toggleSaved };
}
