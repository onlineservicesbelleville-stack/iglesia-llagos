import type { Metadata } from "next";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Noticias, comunicados y anuncios de la Iglesia Virgen del Carmen y San José de Llagos, Chimborazo, Ecuador.",
};

export default function NoticiasPage() {
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
            ✝ Mantente informado ✝
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Noticias
          </h1>
          <div className="gold-divider mb-6" />
          <p className="text-blue-100 text-xl">
            Actividades, celebraciones y comunicados de nuestra comunidad
          </p>
        </div>
      </section>

      {/* News grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4">
          {newsItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">📢</span>
              <p className="text-marian-600 text-xl font-semibold">
                Próximamente nuevas noticias
              </p>
              <p className="text-gray-500 mt-2">
                Sigue nuestras redes sociales para estar al día.
              </p>
            </div>
          )}

          <div className="mt-16 bg-marian-600 rounded-2xl p-8 text-white text-center">
            <span className="text-4xl block mb-3">📣</span>
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Mantente conectado con la comunidad
            </h3>
            <p className="text-blue-100 text-sm mb-5 max-w-md mx-auto">
              Sigue nuestras redes sociales y revisa esta sección regularmente
              para conocer los anuncios, invitaciones y comunicados de la
              iglesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-6 py-3 rounded-full text-sm transition-all"
              >
                📘 Seguir en Facebook
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-marian-700 font-bold px-6 py-3 rounded-full text-sm transition-all"
              >
                📱 WhatsApp comunitario
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
