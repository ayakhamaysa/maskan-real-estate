import { agency } from "./data/homes";
import { ui } from "./data/ui";

// WhatsApp (with a ready message about this home) and phone call links
export function contactLinks(home, lang) {
  return {
    whatsapp: `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(ui[lang].whatsappText(home))}`,
    call: `tel:+${agency.whatsapp}`,
  };
}
