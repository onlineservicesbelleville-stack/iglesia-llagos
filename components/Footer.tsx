import Link from "next/link";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: "/historia", label: "Historia" },
  { href: "/virgen-del-carmen", label: "Virgen del Carmen" },
  { href: "/san-jose", label: "San José" },
  { href: "/horarios", label: "Horarios de Misa" },
  { href: "/fiestas-patronales", label: "Fiestas Patronales" },
  { href: "/galeria", label: "Galería" },
  { href: "/noticias", label: "Noticias" },
  { href: "/donaciones", label: "Donaciones" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marian-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-golden-500 text-3xl">✝</span>
              <div>
                <p className="font-bold text-lg leading-tight">
                  Iglesia Virgen del Carmen
                </p>
                <p className="text-golden-400 text-sm">y San José de Llagos</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              {siteConfig.location}
            </p>
            <p className="text-golden-400 text-sm mt-3 italic">
              &ldquo;{siteConfig.phrase}&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-golden-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Páginas
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-golden-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-golden-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <div className="space-y-2 text-sm text-blue-200">
              <p>📍 {siteConfig.location}</p>
              <p>📘 Facebook: {siteConfig.contact.facebook}</p>
              <p>📱 WhatsApp: {siteConfig.contact.whatsapp}</p>
              <p>✉️ Email: {siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-marian-700 mt-10 pt-6 text-center">
          <p className="text-blue-300 text-sm">
            © {year} Iglesia Virgen del Carmen y San José de Llagos. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
