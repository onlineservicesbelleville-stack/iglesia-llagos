import Image from "next/image";
import { fiestasHero } from "@/data/programs";

export default function FiestasHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <Image
        src={fiestasHero.image}
        alt="Fiestas Patronales Llagos 2026"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-marian-900/85 via-marian-800/65 to-marian-900/90" />

      {/* Decorative top gold bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-golden-600 via-golden-400 to-golden-600" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-golden-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          ✝ {fiestasHero.anniversary} ✝
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight animate-fade-in-up animate-delay-200"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {fiestasHero.title}
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-3 leading-relaxed animate-fade-in-up animate-delay-400">
          {fiestasHero.subtitle}
        </p>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-golden-400/40 rounded-full px-5 py-2 mb-8 animate-fade-in-up animate-delay-400">
          <span className="text-golden-400">📅</span>
          <span className="text-white font-semibold text-sm md:text-base">
            {fiestasHero.dates}
          </span>
        </div>

        <div className="space-y-1 mb-10 animate-fade-in-up animate-delay-600">
          <p
            className="text-golden-300 text-2xl md:text-3xl font-bold italic"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {fiestasHero.phrase}
          </p>
          <p className="text-blue-100 text-base md:text-lg italic">
            {fiestasHero.phraseSecondary}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-600">
          {fiestasHero.buttons.map((btn, idx) => (
            <a
              key={btn.href}
              href={btn.href}
              className={
                idx === 0
                  ? "inline-flex items-center justify-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg"
                  : "inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-marian-700 font-bold px-8 py-4 rounded-full text-base transition-all"
              }
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
