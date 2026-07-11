"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/historia", label: "Historia" },
  { href: "/virgen-del-carmen", label: "Virgen del Carmen" },
  { href: "/san-jose", label: "San José" },
  { href: "/horarios", label: "Horarios" },
  { href: "/fiestas-patronales", label: "Fiestas" },
  { href: "/galeria", label: "Galería" },
  { href: "/noticias", label: "Noticias" },
  { href: "/donaciones", label: "Donaciones" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-marian-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-golden-500 text-2xl">✝</span>
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                Iglesia
              </p>
              <p className="text-golden-400 text-xs">San José de Llagos</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-golden-400 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-marian-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-marian-700"
            aria-label="Abrir menú"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="lg:hidden border-t border-marian-700 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-blue-100 hover:text-golden-400 px-4 py-2.5 text-sm font-medium hover:bg-marian-700 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
