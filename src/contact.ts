import { agency } from "./data/homes";
import { ui } from "./data/ui";
import type { Home, Lang } from "./types";

// WhatsApp (with a ready message about this home) and phone call links
export function contactLinks(home: Home, lang: Lang): { whatsapp: string; call: string } {
  return {
    whatsapp: `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(ui[lang].whatsappText(home))}`,
    call: `tel:+${agency.whatsapp}`,
  };
}
