import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "San José",
  description:
    "Devoción a San José en Llagos, Chimborazo. Patrono de las familias, los trabajadores y la comunidad.",
};

const virtudes = [
  { icon: "🏠", title: "Protector del hogar", desc: "Como guardián del hogar sagrado de Nazaret, intercede por cada familia de Llagos." },
  { icon: "⚒️", title: "Ejemplo de trabajo", desc: "El carpintero de Nazaret nos enseña que el trabajo honrado es sagrado y digno." },
  { icon: "🤫", title: "Fe en el silencio", desc: "Su fe profunda no necesitaba palabras. Obraba con obediencia y confianza en Dios." },
  { icon: "👨‍👩‍👦", title: "Guía para padres", desc: "Modelo de paternidad responsable, amorosa y fiel a Dios para cada padre de familia." },
];

export default function SanJosePage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-32 bg-marian-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ft2.jpg"
            alt="Iglesia de Llagos"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-marian-800/80 to-marian-700/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
            ✝ Patrono y protector ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            San José
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl">
            Protector de las familias, guía de los hogares y ejemplo de fe
            silenciosa
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="bg-marian-600 rounded-3xl p-10 text-white text-center shadow-2xl">
              <span className="text-8xl block mb-6">⚒️</span>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                San José de Llagos
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Patrono de la comunidad, protector de los hogares y ejemplo de
                obediencia a Dios.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/15 rounded-xl p-3">
                  <p className="text-golden-300 font-bold text-sm">Fiesta</p>
                  <p className="text-white text-xs mt-1">19 de marzo y 1 de mayo</p>
                </div>
                <div className="bg-white/15 rounded-xl p-3">
                  <p className="text-golden-300 font-bold text-sm">Patronazgo</p>
                  <p className="text-white text-xs mt-1">Familias y trabajadores</p>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-3xl font-bold text-marian-600 mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Fe en el trabajo y la familia
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  San José nos enseña el valor del trabajo honesto, la humildad,
                  el silencio lleno de fe y el amor por la familia. Como protector
                  del hogar de Jesús y María, inspira a nuestra comunidad a vivir
                  con responsabilidad, unión y confianza en Dios.
                </p>
                <p>
                  En Llagos, la devoción a San José es parte esencial de la
                  identidad espiritual del pueblo. Cada familia que acude a la
                  iglesia en su honor reconoce en él al padre que cuida, protege
                  y guía con fidelidad y amor silencioso.
                </p>
                <p>
                  El carpintero de Nazaret es también el patrono de los
                  trabajadores, un recordatorio constante de que el trabajo
                  realizado con honestidad y dedicación es una forma de honrar
                  a Dios y servir a la comunidad.
                </p>
              </div>

              <div className="mt-8 bg-white border border-cream-200 rounded-2xl p-6 shadow-sm">
                <p
                  className="text-marian-600 italic text-lg leading-relaxed text-center"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &ldquo;San José, custodio de la Sagrada Familia, protege
                  nuestros hogares, bendice nuestro trabajo y guíanos siempre
                  por el camino de la obediencia a Dios. Amén.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtudes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-marian-600 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Virtudes que nos inspira
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {virtudes.map((v) => (
              <div
                key={v.title}
                className="bg-cream-50 rounded-2xl p-7 text-center border border-cream-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="text-5xl block mb-4">{v.icon}</span>
                <h3
                  className="font-bold text-lg text-marian-600 mb-3"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-5xl block mb-4">🙏</span>
          <h3
            className="text-2xl font-bold text-marian-600 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Celebra con nosotros en su honor
          </h3>
          <p className="text-gray-600 mb-8">
            Acompáñanos en las celebraciones patronales y vive la fe comunitaria
            de Llagos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fiestas-patronales"
              className="inline-flex items-center justify-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-7 py-3.5 rounded-full transition-all"
            >
              Ver fiestas patronales
            </Link>
            <Link
              href="/horarios"
              className="inline-flex items-center justify-center gap-2 border-2 border-marian-600 text-marian-600 hover:bg-marian-600 hover:text-white font-bold px-7 py-3.5 rounded-full transition-all"
            >
              Ver horarios de misa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
