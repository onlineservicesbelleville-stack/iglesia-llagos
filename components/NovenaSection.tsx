import Image from "next/image";
import { novenaSection } from "@/data/programs";

export default function NovenaSection() {
  return (
    <section id="novena" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-12">
          <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-andean-400">
            <Image
              src={novenaSection.image}
              alt={novenaSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-andean-600 text-sm font-semibold tracking-widest uppercase mb-3">
              🙏 Preparación espiritual ✝
            </p>
            <h2
              className="text-3xl font-bold text-marian-600 mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {novenaSection.title}
            </h2>
            <div className="gold-divider mb-6 mx-0" />
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {novenaSection.description}
            </p>
            <div className="bg-cream-100 border border-golden-300 rounded-2xl p-5">
              <p className="text-golden-700 font-semibold text-sm mb-1">
                ✝ Nota de agradecimiento
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {novenaSection.note}
              </p>
            </div>
          </div>
        </div>

        {/* Actividades de novena destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {novenaSection.activities.map((activity) => (
            <div
              key={`${activity.date}-${activity.time}`}
              className="bg-marian-50 border border-marian-200 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-marian-600 font-bold text-sm uppercase tracking-wide mb-2">
                📅 {activity.date}
              </p>
              <div className="flex items-start gap-3">
                <span className="bg-marian-600 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                  {activity.time}
                </span>
                <div>
                  <p className="text-marian-700 font-semibold leading-snug">
                    {activity.title}
                  </p>
                  {activity.description && (
                    <p className="text-gray-600 text-sm mt-1">
                      {activity.description}
                    </p>
                  )}
                  {activity.sponsor && (
                    <p className="text-golden-700 text-sm mt-2 font-medium">
                      {activity.sponsor}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
