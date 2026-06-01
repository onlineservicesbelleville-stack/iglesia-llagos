import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Horarios de Misa",
  description:
    "Horarios de misa y celebraciones en la Iglesia Virgen del Carmen y San José de Llagos, Chimborazo, Ecuador.",
};

export default function HorariosPage() {
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
            ✝ Vida sacramental ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Horarios de Misa
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl">
            Únete a nuestra comunidad en oración y celebración eucarística
          </p>
        </div>
      </section>

      {/* Schedules */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {siteConfig.schedules.map((schedule, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 text-center border-t-4 border-golden-500 hover:-translate-y-1"
              >
                <span className="text-5xl block mb-4">
                  {idx === 0 ? "⛪" : idx === 1 ? "📅" : "🕯️"}
                </span>
                <h3
                  className="text-xl font-bold text-marian-600 mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {schedule.day}
                </h3>
                <p className="text-3xl font-bold text-golden-600 mb-2">
                  {schedule.time}
                </p>
                <p className="text-gray-500 text-sm">{schedule.description}</p>
              </div>
            ))}
          </div>

          {/* Aviso */}
          <div className="bg-marian-600/10 border border-marian-200 rounded-2xl p-6 text-center">
            <p className="text-golden-600 text-lg mb-2">⚠️ Importante</p>
            <p className="text-marian-700 leading-relaxed">
              {siteConfig.scheduleNote}
            </p>
          </div>
        </div>
      </section>

      {/* Info adicional */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-marian-600 text-center mb-10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Celebraciones y sacramentos
          </h2>
          <div className="gold-divider mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "💧", title: "Bautizos", desc: "Por confirmar. Consultar con el párroco para programar el sacramento." },
              { icon: "💍", title: "Matrimonios", desc: "Por confirmar. Se requiere preparación previa con la comunidad parroquial." },
              { icon: "🍞", title: "Primera Comunión", desc: "Por confirmar. Coordinación con catequistas de la parroquia." },
              { icon: "✝️", title: "Confirmación", desc: "Por confirmar. Programa de catequesis parroquial disponible." },
              { icon: "🕯️", title: "Novenas", desc: "Se anuncian en la sección de noticias y redes sociales de la comunidad." },
              { icon: "📿", title: "Grupos de oración", desc: "Por confirmar. Contáctanos para información sobre grupos de fe." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-cream-50 rounded-xl border border-cream-200"
              >
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-marian-600 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-marian-700 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            ¿Tienes alguna consulta?
          </h3>
          <p className="text-blue-100 mb-8">
            Contáctanos por WhatsApp o Facebook para información actualizada
            sobre horarios y celebraciones.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105"
          >
            Contáctanos →
          </Link>
        </div>
      </section>
    </>
  );
}
