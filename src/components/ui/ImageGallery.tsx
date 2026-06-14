import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { assetUrl } from "../../lib/assets";

export function ImageGallery({ images }: { images: string[] }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2">
        {images.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightbox(src)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-line transition hover:border-accent hover:scale-[1.02]"
          >
            <img src={assetUrl(src)} alt="" className="w-full" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top,0px))] rounded-full border border-line px-4 py-2 text-sm sm:right-6 sm:top-6"
              onClick={() => setLightbox(null)}
            >
              Close ✕
            </button>
            <motion.img
              src={assetUrl(lightbox)}
              alt=""
              className="max-h-[90vh] max-w-full rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
