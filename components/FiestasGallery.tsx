"use client";

import Image from "next/image";
import { useState } from "react";
import { fiestas2026Gallery } from "@/data/programs";

export default function FiestasGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fiestas2026Gallery.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setLightbox(idx)}
            className="relative aspect-square overflow-hidden rounded-xl group shadow-md hover:shadow-xl transition-all"
            aria-label={`Ver imagen ${idx + 1} de Fiestas Patronales Llagos 2026`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-marian-900/0 group-hover:bg-marian-900/30 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <Image
              src={fiestas2026Gallery[lightbox].src}
              alt={fiestas2026Gallery[lightbox].alt}
              width={1200}
              height={900}
              className="object-contain w-full h-full max-h-[80vh] rounded-xl mx-auto"
            />
            <button
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full text-xl font-bold flex items-center justify-center transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full text-xl font-bold flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox - 1 + fiestas2026Gallery.length) % fiestas2026Gallery.length);
              }}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full text-xl font-bold flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % fiestas2026Gallery.length);
              }}
              aria-label="Siguiente imagen"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
