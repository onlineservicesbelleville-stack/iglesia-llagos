import Image from "next/image";
import { queenMessageSection } from "@/data/programs";

export default function QueenMessageSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-lavender-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-lavender-600 text-sm font-semibold tracking-widest uppercase mb-3">
              👑 Mensaje de la soberana ✝
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-marian-600 mb-6 leading-snug"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {queenMessageSection.title}
            </h2>
            <div className="gold-divider mb-6 mx-0" />
            <div className="space-y-4 mb-6">
              {queenMessageSection.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <p
              className="text-golden-600 text-2xl font-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {queenMessageSection.closingPhrase}
            </p>
          </div>
          <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-lavender-300">
            <Image
              src={queenMessageSection.image}
              alt={queenMessageSection.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
