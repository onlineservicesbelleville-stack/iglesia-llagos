import type { Metadata } from "next";
import Image from "next/image";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galería de Fotos",
  description:
    "Galería de imágenes de la Iglesia Virgen del Carmen y San José de Llagos. Iglesia, Virgen del Carmen, fiestas patronales y paisajes de Llagos.",
};

export default function GaleriaPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-32 bg-marian-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/LLAGOS.jpg"
            alt="Vista de Llagos"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-marian-700/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
            ✝ Memorias de fe ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Galería de Fotos
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl">
            Momentos de fe, celebración y comunidad en imágenes
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryGrid images={galleryImages} />

          <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-cream-200 shadow-sm">
            <span className="text-4xl block mb-3">📷</span>
            <h3
              className="text-xl font-bold text-marian-600 mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ¿Tienes fotos de nuestras celebraciones?
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-5">
              Si tienes imágenes de las fiestas patronales, procesiones o
              momentos especiales de nuestra comunidad, compártelas con nosotros.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-marian-600 hover:bg-marian-700 text-white font-bold px-7 py-3 rounded-full text-sm transition-all"
            >
              Comparte tus fotos →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
