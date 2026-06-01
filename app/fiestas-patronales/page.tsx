import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PatronalProgram from "@/components/PatronalProgram";
import { patronalProgram, patronalDescription, patronalInvitation } from "@/data/programs";

export const metadata: Metadata = {
  title: "Fiestas Patronales",
  description:
    "Programa de las Fiestas Patronales de la Iglesia Virgen del Carmen y San José de Llagos. Celebración anual de fe, tradición y comunidad.",
};

export default function FiestasPatronalesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ft2.jpg"
            alt="Iglesia de Llagos en las fiestas patronales"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-marian-900/85 via-marian-800/75 to-marian-700/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
            ✝ Celebración anual ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Fiestas Patronales
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl">
            Celebramos con fe, alegría y tradición en honor a la Virgen del
            Carmen y San José
          </p>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
            <div>
              <p className="text-golden-600 text-sm font-semibold tracking-widest uppercase mb-3">
                ✝ Tradición viva ✝
              </p>
              <h2
                className="text-3xl font-bold text-marian-600 mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Una celebración que une generaciones
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {patronalDescription}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🙏", label: "Novena y misas" },
                  { icon: "🎶", label: "Música y cultura" },
                  { icon: "🚶", label: "Procesiones" },
                  { icon: "🤝", label: "Encuentro familiar" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm border border-cream-200"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-marian-600 font-semibold text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-golden-500">
              <Image
                src="/images/virgen.jpg"
                alt="Virgen del Carmen de Llagos"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-golden-600 text-sm font-semibold tracking-widest uppercase mb-3">
              ✝ Programa oficial ✝
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-marian-600 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Programa de Fiestas Patronales 2025
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              * Este programa es referencial. Las actividades pueden ajustarse
              según la organización del comité de fiestas.
            </p>
          </div>
          <PatronalProgram days={patronalProgram} />
        </div>
      </section>

      {/* Invitación */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/LLAGOS.jpg"
            alt="Vista de Llagos"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-marian-900/90 to-marian-800/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-4">
            ✝ Invitación a la comunidad ✝
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Todos están invitados
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-blue-100 text-xl leading-relaxed mb-10">
            {patronalInvitation}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105"
            >
              Contáctanos para más info
            </Link>
            <Link
              href="/donaciones"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-marian-700 font-bold px-8 py-4 rounded-full text-base transition-all"
            >
              Apoyar las fiestas
            </Link>
          </div>
        </div>
      </section>

      {/* Galería previa */}
      <section className="py-16 bg-cream-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3
            className="text-2xl font-bold text-marian-600 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Revive las celebraciones anteriores
          </h3>
          <p className="text-gray-600 mb-8">
            Visita nuestra galería para ver imágenes de las fiestas patronales
            de años anteriores.
          </p>
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 bg-marian-600 hover:bg-marian-700 text-white font-bold px-8 py-4 rounded-full text-base transition-all"
          >
            Ver galería →
          </Link>
        </div>
      </section>
    </>
  );
}
