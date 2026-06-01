import type { Metadata } from "next";
import Image from "next/image";
import DonationCard from "@/components/DonationCard";
import { donationInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Donaciones",
  description:
    "Apoya a la Iglesia Virgen del Carmen y San José de Llagos con tu donación. Tu colaboración mantiene viva la misión espiritual de nuestra comunidad.",
};

export default function DonacionesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-32 bg-marian-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/virgen.jpg"
            alt="Virgen del Carmen"
            fill
            className="object-cover object-top opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-marian-700/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
            ✝ Colabora con nosotros ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {donationInfo.title}
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            {donationInfo.description}
          </p>
        </div>
      </section>

      {/* Donation methods */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-marian-600 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Formas de donar
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {donationInfo.methods.map((method) => (
              <DonationCard key={method.label} method={method} />
            ))}
          </div>

          <div className="bg-marian-600/10 border border-marian-200 rounded-2xl p-6 text-center">
            <span className="text-3xl block mb-3">🙏</span>
            <p className="text-marian-700 font-medium leading-relaxed">
              {donationInfo.note}
            </p>
          </div>
        </div>
      </section>

      {/* Why donate */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-marian-600 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ¿Por qué apoyar a nuestra iglesia?
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⛪",
                title: "Conservación de la iglesia",
                desc: "Mantener el edificio histórico que es símbolo espiritual y cultural de Llagos.",
              },
              {
                icon: "🎉",
                title: "Fiestas patronales",
                desc: "Financiar la organización de las celebraciones religiosas y culturales anuales.",
              },
              {
                icon: "🕯️",
                title: "Celebraciones litúrgicas",
                desc: "Misas solemnes, novenas, procesiones y sacramentos para toda la comunidad.",
              },
              {
                icon: "🤝",
                title: "Apoyo comunitario",
                desc: "Actividades de unión y solidaridad entre familias de Llagos dentro y fuera del país.",
              },
              {
                icon: "🎓",
                title: "Catequesis y formación",
                desc: "Formación religiosa para niños, jóvenes y adultos en valores y fe católica.",
              },
              {
                icon: "📢",
                title: "Comunicación y presencia digital",
                desc: "Mantener este sitio web y las redes sociales para conectar a la comunidad dispersa.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:shadow-md transition-all"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-marian-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gradient-to-br from-marian-700 to-marian-800 text-center">
        <div className="max-w-3xl mx-auto px-4 text-white">
          <span className="text-5xl block mb-6">✝</span>
          <blockquote
            className="text-2xl italic leading-relaxed text-blue-100"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;Cada gesto de colaboración es una semilla de fe que florece
            en la vida de toda la comunidad de Llagos.&rdquo;
          </blockquote>
          <div className="gold-divider mt-8" />
        </div>
      </section>
    </>
  );
}
