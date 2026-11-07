import { useState } from "react";

// The home photo. Until the photo file exists, it shows a soft colored box with a house icon.
export default function HomePhoto({ home, className = "" }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className={`grid place-items-center bg-linear-to-br from-sand to-[#d9cfc2] ${className}`}>
        <svg viewBox="0 0 64 64" className="w-12 h-12 text-clay/70" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
          <path d="M10 32 32 14l22 18v20H10Z" strokeLinejoin="round" />
          <rect x="27" y="36" width="10" height="16" />
        </svg>
      </div>
    );
  }
  return <img src={home.image} alt={home.title} loading="lazy" onError={() => setMissing(true)} className={`object-cover ${className}`} />;
}
