import Image from "next/image";
import { invitationSection } from "@/data/programs";

export default function InvitationSection() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-golden-500 order-2 lg:order-1">
            <Image
              src={invitationSection.image}
              alt="Invitación a las Fiestas Patronales Llagos 2026"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-golden-600 text-sm font-semibold tracking-widest uppercase mb-3">
              ✝ Palabras de bienvenida ✝
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-marian-600 mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {invitationSection.title}
            </h2>
            <div className="gold-divider mb-6 lg:mx-0 mx-auto" />
            <div className="space-y-4 mb-8">
              {invitationSection.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <p
              className="text-marian-600 text-lg md:text-xl font-semibold italic border-l-4 border-golden-500 pl-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {invitationSection.closingPhrase}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
