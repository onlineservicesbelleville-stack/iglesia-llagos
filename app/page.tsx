import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/data/news";
import { siteConfig } from "@/data/site";

const quickCards = [
  {
    icon: "⛪",
    title: "Horarios de Misa",
    description:
      "Domingos a las 10:00 a.m. y fechas especiales según el calendario parroquial. Únete a nuestra comunidad en oración.",
    href: "/horarios",
    btnLabel: "Ver horarios",
  },
  {
    icon: "🎉",
    title: "Fiestas Patronales",
    description:
      "Celebraciones anuales en honor a la Virgen del Carmen y San José. Días de fe, procesiones y encuentro comunitario.",
    href: "/fiestas-patronales",
    btnLabel: "Ver programa",
  },
  {
    icon: "📷",
    title: "Galería de Fotos",
    description:
      "Recorre en imágenes nuestra iglesia, las fiestas patronales, la Virgen del Carmen y los paisajes de Llagos.",
    href: "/galeria",
    btnLabel: "Ver galería",
  },
  {
    icon: "🙏",
    title: "Donaciones",
    description:
      "Tu apoyo nos ayuda a conservar la iglesia y fortalecer las celebraciones religiosas y comunitarias.",
    href: "/donaciones",
    btnLabel: "Apoyar",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        image="/images/fot1.jpg"
        title="Fe, tradición y comunidad"
        subtitle="Desde Llagos, Chimborazo, Ecuador, compartimos nuestra devoción, nuestras fiestas patronales y la vida espiritual de nuestra comunidad bajo la protección de la Virgen del Carmen y San José."
        primaryBtn={{ label: "Ver fiestas patronales", href: "/fiestas-patronales" }}
        secondaryBtn={{ label: "Conocer nuestra historia", href: "/historia" }}
      />

      {/* Bienvenida */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-golden-600 text-sm font-semibold tracking-widest uppercase mb-3">
            ✝ Bienvenidos ✝
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-marian-600 mb-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Iglesia San José de Llagos
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestra iglesia representa el corazón espiritual de Llagos. Aquí se
            reúnen familias, devotos, priostes, migrantes y visitantes para
            celebrar la fe, conservar la tradición y fortalecer los lazos de
            comunidad. Bajo la protección de la Virgen del Carmen y San José,
            mantenemos viva una devoción que une generaciones.
          </p>
        </div>
      </section>

      {/* Quick cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Explora nuestra comunidad"
            subtitle="Todo lo que necesitas saber sobre la vida espiritual y comunitaria de Llagos"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Virgen del Carmen highlight */}
      <section className="py-20 bg-gradient-to-br from-marian-700 via-marian-600 to-marian-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-white text-8xl">✝</div>
          <div className="absolute bottom-10 right-10 text-white text-8xl">✝</div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-golden-500">
                <Image
                  src="/images/virgen.jpg"
                  alt="Virgen del Carmen de Llagos"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-golden-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-4xl">✝</span>
              </div>
            </div>
            <div className="text-white">
              <p className="text-golden-400 text-sm font-semibold tracking-widest uppercase mb-3">
                ✝ Devoción mariana ✝
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Virgen del Carmen
              </h2>
              <p className="text-golden-300 text-lg italic mb-6">
                Madre, protectora y guía espiritual de nuestra comunidad
              </p>
              <p className="text-blue-100 leading-relaxed mb-6 text-lg">
                La Virgen del Carmen ocupa un lugar especial en el corazón de
                los fieles de Llagos. Su presencia acompaña a las familias,
                protege a los devotos y fortalece la fe de quienes acuden a
                ella con amor, gratitud y esperanza.
              </p>
              <blockquote className="border-l-4 border-golden-500 pl-5 mb-8 italic text-blue-100 text-sm leading-relaxed">
                &ldquo;Virgen Santísima del Carmen, madre y protectora nuestra,
                acompaña a cada familia de Llagos, guía nuestros pasos,
                fortalece nuestra fe y cúbrenos con tu bendito manto. Amén.&rdquo;
              </blockquote>
              <Link
                href="/virgen-del-carmen"
                className="inline-flex items-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-7 py-3.5 rounded-full text-base transition-all hover:scale-105"
              >
                Ver novena y celebraciones →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* San José highlight */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-golden-600 text-sm font-semibold tracking-widest uppercase mb-3">
                ✝ Patrono y protector ✝
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-marian-600 mb-4 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                San José
              </h2>
              <p className="text-golden-600 text-lg italic mb-6">
                Protector de las familias, guía de los hogares y ejemplo de fe
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                San José nos enseña el valor del trabajo honesto, la humildad,
                el silencio lleno de fe y el amor por la familia. Como protector
                del hogar de Jesús y María, inspira a nuestra comunidad a vivir
                con responsabilidad, unión y confianza en Dios.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "🏠", label: "Protector del hogar" },
                  { icon: "⚒️", label: "Ejemplo de trabajo" },
                  { icon: "🙏", label: "Guía espiritual" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-xl p-4 text-center shadow-sm border border-cream-200"
                  >
                    <span className="text-3xl block mb-2">{item.icon}</span>
                    <p className="text-xs text-marian-600 font-semibold">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/san-jose"
                className="inline-flex items-center gap-2 bg-marian-600 hover:bg-marian-700 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all"
              >
                Conocer más sobre San José →
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-marian-600 rounded-3xl p-8 text-center text-white shadow-2xl">
                <span className="text-8xl block mb-4">⚒️</span>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  San José de Llagos
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Patrono de las familias, los trabajadores y la comunidad. Su
                  ejemplo de fe silenciosa y trabajo honrado guía cada hogar de
                  Llagos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias recientes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Noticias recientes"
            subtitle="Mantente informado sobre las actividades, celebraciones y comunicados de nuestra comunidad"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {newsItems.slice(0, 4).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 border-2 border-marian-600 text-marian-600 hover:bg-marian-600 hover:text-white font-bold px-8 py-3.5 rounded-full text-base transition-all"
            >
              Ver todas las noticias →
            </Link>
          </div>
        </div>
      </section>

      {/* Llamado a la comunidad */}
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
            ✝ Llagos, tierra de fe ✝
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Unidos en fe, tradición y comunidad
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-blue-100 text-xl leading-relaxed mb-10">
            La Iglesia de Llagos te invita a ser parte de nuestra comunidad.
            Celebremos juntos la fe, las tradiciones y los lazos que nos unen
            como pueblo bajo la protección de la Virgen del Carmen y San José.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fiestas-patronales"
              className="inline-flex items-center justify-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105"
            >
              Ver fiestas patronales
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-marian-700 font-bold px-8 py-4 rounded-full text-base transition-all"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
