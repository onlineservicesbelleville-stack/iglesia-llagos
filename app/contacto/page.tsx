import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a la Iglesia San José de Llagos, Chimborazo, Ecuador. Facebook, WhatsApp, correo electrónico y más.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-32 bg-marian-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ft2.jpg"
            alt="Iglesia de Llagos"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-marian-700/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
            ✝ Estamos para servirte ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Contacto
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl">
            Comunícate con nosotros, estamos felices de atenderte
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Mapa / comunidad info */}
      <section className="py-16 bg-marian-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Llagos, Chunchi, Chimborazo, Ecuador
          </h3>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Enclavada en las montañas de Chimborazo, Llagos es una comunidad de
            fe y tradición andina que te recibe con los brazos abiertos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="bg-white/15 rounded-full px-5 py-2">
              📍 Cantón Chunchi
            </span>
            <span className="bg-white/15 rounded-full px-5 py-2">
              🏔️ Provincia de Chimborazo
            </span>
            <span className="bg-white/15 rounded-full px-5 py-2">
              🇪🇨 Ecuador
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
