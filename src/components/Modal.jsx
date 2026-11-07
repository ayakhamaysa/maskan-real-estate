import { useEffect } from "react";
import { motion } from "framer-motion";

// A window on top of the page. Closes with the × button, the Esc key, or a click outside.
export default function Modal({ onClose, closeLabel, children, wide = false }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // stop the page behind from scrolling
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[2000] bg-black/60 grid place-items-center p-3" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className={`relative bg-paper rounded-3xl w-full ${wide ? "max-w-4xl" : "max-w-2xl"} max-h-[90vh] overflow-y-auto`}
      >
        <button onClick={onClose} aria-label={closeLabel} className="absolute top-3 end-3 z-10 w-9 h-9 rounded-full bg-card shadow text-xl">
          ×
        </button>
        {children}
      </motion.div>
    </div>
  );
}
