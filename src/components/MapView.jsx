import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { ui } from "../data/ui";
import { shortPrice } from "../format";
import { contactLinks } from "../contact";

// A price pin instead of the default blue marker
function pinIcon(home, active) {
  return L.divIcon({
    className: "pin-wrap",
    html: `<div class="pin ${active ? "active" : ""}">${shortPrice(home.price)}</div>`,
    iconSize: [0, 0],
  });
}

// When the filters change (or the map appears on a phone), zoom to show all the homes in the list
function FitToHomes({ homes, shownOn }) {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize(); // the map was hidden on phones, so measure its size again
    if (homes.length === 0) return;
    const bounds = L.latLngBounds(homes.map((h) => [h.lat, h.lng]));
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 14 });
  }, [homes, map, shownOn]);
  return null;
}

export default function MapView({ homes, lang, activeId, onHover, onOpen, shownOn }) {
  const t = ui[lang];
  return (
    // dir="ltr": the map library works left to right, even on the Arabic page
    <div dir="ltr" className="w-full h-full">
      <MapContainer center={[25.15, 55.24]} zoom={11} scrollWheelZoom={false} className="w-full h-full">
        {/* OpenStreetMap: free, no key needed, just keep the credit line */}
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <FitToHomes homes={homes} shownOn={shownOn} />

        {homes.map((home) => (
          <Marker
            key={home.id}
            position={[home.lat, home.lng]}
            icon={pinIcon(home, home.id === activeId)}
            zIndexOffset={home.id === activeId ? 1000 : 0}
            eventHandlers={{ mouseover: () => onHover(home.id), mouseout: () => onHover(null) }}
          >
            <Popup>
              <div dir={lang === "ar" ? "rtl" : "ltr"} className="w-48">
                <img src={home.image} alt="" className="w-full h-24 object-cover rounded-lg" />
                <p className="font-semibold mt-2 text-[#15191f]">{lang === "ar" ? home.titleAr : home.title}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => onOpen(home)} className="flex-1 bg-[#15191f] text-white rounded-full py-1.5 text-xs">
                    {t.view}
                  </button>
                  <a href={contactLinks(home, lang).whatsapp} target="_blank" className="flex-1 text-center bg-[#25d366] !text-white rounded-full py-1.5 text-xs">
                    WhatsApp
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
