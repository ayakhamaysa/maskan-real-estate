import { useEffect, useState } from "react";

// The ♥ saved homes, remembered in this browser
export function useSaved() {
  // number[] = a list of home ids
  const [saved, setSaved] = useState<number[]>(() => {
    try {
      // ?? "[]": if nothing is stored yet, start from an empty list
      const list: unknown = JSON.parse(localStorage.getItem("saved") ?? "[]");
      // keep it only if it really is a list of numbers
      return Array.isArray(list) ? list.filter((x): x is number => typeof x === "number") : [];
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

  const toggleSaved = (id: number) => setSaved(saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id]);
  return { saved, toggleSaved };
}
