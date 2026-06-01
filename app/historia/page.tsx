import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description:
    "Conoce la historia de la Iglesia Virgen del Carmen y San José de Llagos, comunidad andina de fe y tradición en Chimborazo, Ecuador.",
};

const milestones = [
  {
    icon: "🏔️",
    title: "Llagos, comunidad andina",
    text: "Enclavada en las montañas de Chimborazo, la comunidad de Llagos ha preservado su identidad andina a través de generaciones. La naturaleza, la tierra y la fe han sido los pilares de su existencia.",
  },
  {
    icon: "⛪",
    title: "La iglesia como centro espiritual",
    text: "Desde su fundación, la Iglesia de Llagos ha sido el punto de encuentro espiritual y comunitario del pueblo. Aquí se celebran bautismos, matrimonios, misas y las grandes fiestas patronales.",
  },
  {
    icon: "🕯️",
    title: "Fe transmitida de generación en generación",
    text: "La devoción a la Virgen del Carmen y a San José ha pasado de padres a hijos con devoción profunda. Esta herencia espiritual es el tesoro más valioso que los mayores han dejado al pueblo.",
  },
  {
    icon: "🌍",
    title: "Comunidad en diáspora",
    text: "Muchos hijos de Llagos viven hoy en otras ciudades y países, pero su corazón permanece unido a la fe y a las tradiciones de su tierra natal. Las fiestas patronales son su punto de reencuentro.",
  },
];

export default function HistoriaPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-32 bg-marian-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/LLAGOS.jpg"
            alt="Vista panorámica de Llagos"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
            ✝ Raíces y devoción ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Nuestra Historia
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl">
            Fe católica, identidad andina y comunidad unida en Llagos,
            Chimborazo
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2
                className="text-3xl font-bold text-marian-600 mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Corazón espiritual de un pueblo
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  Nuestra iglesia representa el corazón espiritual de Llagos.
                  En este lugar se reúnen familias, devotos, priostes, migrantes
                  y visitantes para celebrar la fe, conservar la tradición y
                  fortalecer los lazos de comunidad.
                </p>
                <p>
                  Bajo la protección de la Virgen del Carmen y San José, la
                  comunidad mantiene viva una devoción que une generaciones. La
                  fe católica no es solo una práctica religiosa en Llagos — es
                  parte profunda de la identidad y el alma del pueblo.
                </p>
                <p>
                  Las campanas de la iglesia han acompañado alegrías y dolores,
                  fiestas y duelos, la llegada de nuevas familias y la partida
                  de quienes emigraron en busca de nuevos horizontes. Pero
                  siempre, el vínculo con la fe y con Llagos permanece.
                </p>
              </div>
            </div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-golden-500">
              <Image
                src="/images/ft2.jpg"
                alt="Iglesia de Llagos iluminada de noche"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Milestones */}
          <h2
            className="text-3xl font-bold text-marian-600 text-center mb-10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Pilares de nuestra comunidad
          </h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-2xl shadow-md p-7 border border-cream-200 hover:shadow-lg transition-all"
              >
                <span className="text-4xl block mb-3">{m.icon}</span>
                <h3
                  className="text-xl font-bold text-marian-600 mb-3"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {m.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-marian-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-5xl mb-6">✝</p>
          <blockquote
            className="text-2xl md:text-3xl italic leading-relaxed text-blue-100"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;La fe de un pueblo no se hereda por la sangre, sino por el
            corazón. Y en Llagos, esa fe vive en cada familia, en cada
            celebración, en cada campana que llama a misa.&rdquo;
          </blockquote>
          <div className="gold-divider mt-8" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3
            className="text-2xl font-bold text-marian-600 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Sé parte de esta historia viva
          </h3>
          <p className="text-gray-600 mb-8">
            Únete a las fiestas patronales, las misas comunitarias y los eventos
            que mantienen viva la tradición de Llagos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fiestas-patronales"
              className="inline-flex items-center justify-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-7 py-3.5 rounded-full transition-all"
            >
              Ver fiestas patronales
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-marian-600 text-marian-600 hover:bg-marian-600 hover:text-white font-bold px-7 py-3.5 rounded-full transition-all"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
