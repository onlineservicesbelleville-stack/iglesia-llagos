import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  primaryBtn?: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
  overlay?: "dark" | "marian";
}

export default function Hero({
  image,
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  overlay = "marian",
}: HeroProps) {
  const overlayClass =
    overlay === "marian"
      ? "from-marian-900/85 via-marian-800/60 to-marian-700/40"
      : "from-black/75 via-black/50 to-black/30";

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt="Imagen heroica"
        fill
        className="object-cover object-top"
        priority
        sizes="100vw"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${overlayClass}`}
      />

      {/* Decorative top gold bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-golden-600 via-golden-400 to-golden-600" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-golden-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          ✝ Llagos, Chimborazo, Ecuador ✝
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animate-delay-200"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-400">
          {subtitle}
        </p>

        {(primaryBtn || secondaryBtn) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-600">
            {primaryBtn && (
              <Link
                href={primaryBtn.href}
                className="inline-flex items-center justify-center gap-2 bg-golden-500 hover:bg-golden-600 text-marian-900 font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg"
              >
                {primaryBtn.label}
              </Link>
            )}
            {secondaryBtn && (
              <Link
                href={secondaryBtn.href}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-marian-700 font-bold px-8 py-4 rounded-full text-base transition-all"
              >
                {secondaryBtn.label}
              </Link>
            )}
          </div>
        )}
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
