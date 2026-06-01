import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virgen del Carmen",
  description:
    "Devoción a la Virgen del Carmen en Llagos, Chimborazo. Patrona y protectora espiritual de nuestra comunidad.",
};

const virtudes = [
  { icon: "💙", title: "Madre protectora", desc: "Intercede por todos los fieles que acuden a ella con fe y amor." },
  { icon: "🕊️", title: "Guía espiritual", desc: "Conduce a sus devotos por el camino de la virtud y la paz interior." },
  { icon: "🌿", title: "Refugio en la tribulación", desc: "Consuela a quienes sufren y fortalece a los débiles de espíritu." },
  { icon: "✨", title: "Reina del Carmelo", desc: "Coronada de gloria, intercede ante su Hijo por toda la humanidad." },
];

export default function VirgenDelCarmenPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-32 bg-marian-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/virgen.jpg"
            alt="Virgen del Carmen"
            fill
            className="object-cover object-top opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-marian-800/80 to-marian-700/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
            ✝ Devoción mariana ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Virgen del Carmen
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl">
            Madre, protectora y guía espiritual de nuestra comunidad de Llagos
          </p>
        </div>
      </section>

      {/* Imagen y descripción */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-golden-500">
                <Image
                  src="/images/virgen.jpg"
                  alt="Imagen de la Virgen del Carmen de Llagos"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-marian-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                Patrona de Llagos
              </div>
            </div>

            <div>
              <h2
                className="text-3xl font-bold text-marian-600 mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Presencia de amor y fe
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  La Virgen del Carmen ocupa un lugar especial en el corazón de
                  los fieles de Llagos. Su presencia acompaña a las familias,
                  protege a los devotos y fortalece la fe de quienes acuden a
                  ella con amor, gratitud y esperanza.
                </p>
                <p>
                  Cada año, durante las fiestas patronales, la comunidad entera
                  se reúne para honrarla con misas solemnes, procesiones,
                  novenas y actos de fe. La devoción a la Virgen del Carmen en
                  Llagos es un lazo espiritual que une a las familias de la
                  comunidad, a los migrantes que viven lejos y a las generaciones
                  que han conservado esta tradición con profundo amor.
                </p>
                <p>
                  Su imagen, vestida con el escapulario carmelitano y sosteniendo
                  al Niño Jesús, es el símbolo más querido de Llagos. Ante ella
                  se depositan las esperanzas, los agradecimientos y las promesas
                  de toda una comunidad de fe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtudes */}
      <section className="py-20 bg-gradient-to-br from-marian-700 to-marian-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
              ✝ Su presencia en nuestra vida ✝
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Madre y protectora
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {virtudes.map((v) => (
              <div
                key={v.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white text-center hover:bg-white/20 transition-all"
              >
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-bold text-lg mb-2 text-golden-300">
                  {v.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oración */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center border-t-4 border-golden-500">
            <span className="text-5xl block mb-4">🙏</span>
            <h2
              className="text-3xl font-bold text-marian-600 mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Oración a la Virgen del Carmen
            </h2>
            <div className="gold-divider mb-8" />
            <blockquote
              className="text-marian-700 text-xl leading-relaxed italic"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;Virgen Santísima del Carmen, madre y protectora nuestra,
              acompaña a cada familia de Llagos, guía nuestros pasos, fortalece
              nuestra fe y cúbrenos con tu bendito manto. Amén.&rdquo;
            </blockquote>
            <div className="mt-8 text-golden-600 text-3xl">✝ ✝ ✝</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-marian-600 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Únete a la novena y las celebraciones
          </h3>
          <p className="text-blue-100 mb-8">
            Participa en los actos de fe que honran a la Virgen del Carmen cada
            año en Llagos.
          </p>
          <Link
            href="/fiestas-patronales"
            className="inline-flex items-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105"
          >
            Ver programa de celebraciones →
          </Link>
        </div>
      </section>
    </>
  );
}
