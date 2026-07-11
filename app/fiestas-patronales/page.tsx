import type { Metadata } from "next";
import FiestasHero from "@/components/FiestasHero";
import InvitationSection from "@/components/InvitationSection";
import QueenMessageSection from "@/components/QueenMessageSection";
import NovenaSection from "@/components/NovenaSection";
import PatronalProgram from "@/components/PatronalProgram";
import FiestasGallery from "@/components/FiestasGallery";
import WhatsAppShareButton from "@/components/WhatsAppShareButton";
import BackToTopButton from "@/components/BackToTopButton";
import { patronalProgram2026, closingNotes } from "@/data/programs";

export const metadata: Metadata = {
  title: "Fiestas Patronales Llagos 2026",
  description:
    "Programa oficial de las Fiestas Patronales Llagos 2026 en honor a la Santísima Virgen del Carmen y San José de Llagos. Del 15 al 19 de julio, por los LXXXI años de parroquialización.",
};

export default function FiestasPatronalesPage() {
  return (
    <>
      <div id="top" />
      <FiestasHero />

      <InvitationSection />

      <QueenMessageSection />

      <NovenaSection />

      {/* Programa completo */}
      <section id="programa" className="py-20 bg-cream-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-golden-600 text-sm font-semibold tracking-widest uppercase mb-3">
              ✝ Programa oficial ✝
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-marian-600 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Programa de Fiestas Patronales 2026
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Del 15 al 19 de julio de 2026 · Filtra las actividades por categoría
            </p>
          </div>
          <PatronalProgram days={patronalProgram2026} />
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-golden-600 text-sm font-semibold tracking-widest uppercase mb-3">
              📸 Momentos de la fiesta ✝
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-marian-600 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Galería Fiestas Patronales 2026
            </h2>
            <div className="gold-divider" />
          </div>
          <FiestasGallery />
        </div>
      </section>

      {/* Agradecimientos generales */}
      <section className="py-16 bg-marian-700">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
              ✝ Con gratitud ✝
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Agradecimientos generales
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {closingNotes.map((note) => (
              <div
                key={note.title}
                className="bg-marian-800/60 border border-golden-500/30 rounded-2xl p-6"
              >
                <h3 className="text-golden-400 font-bold text-base mb-2">
                  {note.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compartir */}
      <section className="py-16 bg-cream-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3
            className="text-2xl font-bold text-marian-600 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            «Llagos vive sus fiestas»
          </h3>
          <p className="text-gray-600 mb-8">
            Comparte esta página con tus familiares y amigos para que no se
            pierdan las Fiestas Patronales Llagos 2026.
          </p>
          <WhatsAppShareButton text="¡Mira el programa completo de las Fiestas Patronales Llagos 2026 en honor a la Santísima Virgen del Carmen y San José de Llagos!" />
        </div>
      </section>

      <BackToTopButton />
    </>
  );
}
