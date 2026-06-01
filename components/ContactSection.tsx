"use client";

import { siteConfig } from "@/data/site";

export default function ContactSection() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <p className="text-golden-600 text-sm font-semibold tracking-widest uppercase mb-2">
              ✝ Estamos aquí para ti ✝
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-marian-600 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Contacto
            </h2>
            <div className="gold-divider mb-8" style={{ margin: "0 0 2rem 0" }} />

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="font-semibold text-marian-700">Ubicación</p>
                  <p className="text-gray-600 text-sm">{siteConfig.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📘</span>
                <div>
                  <p className="font-semibold text-marian-700">Facebook</p>
                  <p className="text-gray-600 text-sm">{siteConfig.contact.facebook}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📱</span>
                <div>
                  <p className="font-semibold text-marian-700">WhatsApp</p>
                  <p className="text-gray-600 text-sm">{siteConfig.contact.whatsapp}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">✉️</span>
                <div>
                  <p className="font-semibold text-marian-700">Correo electrónico</p>
                  <p className="text-gray-600 text-sm">{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-marian-100 rounded-2xl h-48 flex items-center justify-center border border-marian-200">
              <div className="text-center text-marian-500">
                <p className="text-3xl mb-2">🗺️</p>
                <p className="text-sm font-medium">Mapa — próximamente</p>
                <p className="text-xs text-marian-400">
                  Llagos, Chunchi, Chimborazo
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-cream-200">
            <h3
              className="text-xl font-bold text-marian-600 mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Envíanos un mensaje
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-marian-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-marian-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Ej. Información sobre fiestas patronales"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-marian-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-marian-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-marian-600 hover:bg-marian-700 text-white font-bold py-3.5 rounded-full transition-colors"
              >
                Enviar mensaje
              </button>
              <p className="text-xs text-gray-400 text-center">
                * Formulario en desarrollo. Contáctanos por WhatsApp o Facebook
                para respuesta inmediata.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
