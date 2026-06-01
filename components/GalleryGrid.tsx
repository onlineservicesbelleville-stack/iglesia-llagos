"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryImage, galleryCategories } from "@/data/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-marian-600 text-white shadow-md"
                : "bg-white text-marian-600 border border-marian-200 hover:bg-marian-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((img) => (
          <button
            key={img.id}
            onClick={() => setLightbox(img)}
            className="relative aspect-square overflow-hidden rounded-xl group shadow-md hover:shadow-xl transition-all"
            aria-label={`Ver imagen: ${img.title}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-marian-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm font-semibold">{img.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              className="object-contain w-full h-full max-h-[80vh] rounded-xl"
            />
            <p className="text-white text-center mt-3 font-medium">
              {lightbox.title}
            </p>
            <button
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full text-xl font-bold flex items-center justify-center transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar imagen"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
