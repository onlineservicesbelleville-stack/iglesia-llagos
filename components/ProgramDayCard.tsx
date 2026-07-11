import Image from "next/image";
import { ProgramDay, ActivityCategory } from "@/data/programs";
import ActivityTimeline from "@/components/ActivityTimeline";

interface ProgramDayCardProps {
  day: ProgramDay;
  activeCategory: "todo" | ActivityCategory;
}

export default function ProgramDayCard({ day, activeCategory }: ProgramDayCardProps) {
  const visibleSections = day.sections
    .map((section) => ({
      ...section,
      activities:
        activeCategory === "todo"
          ? section.activities
          : section.activities.filter((a) => a.category === activeCategory),
    }))
    .filter((section) => section.activities.length > 0);

  if (visibleSections.length === 0) return null;

  return (
    <article className="rounded-3xl overflow-hidden shadow-xl border border-cream-200 bg-white">
      {/* Day header */}
      <div className="relative h-56 md:h-64">
        <Image
          src={day.image}
          alt={`${day.day} - Fiestas Patronales Llagos 2026`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-marian-900/90 via-marian-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-golden-400 text-xs font-bold tracking-widest uppercase mb-1">
            {day.date}
          </p>
          <h3
            className="text-white text-2xl md:text-3xl font-bold leading-snug"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {day.day}
          </h3>
          <p className="text-blue-100 text-sm md:text-base mt-1">{day.title}</p>
        </div>
      </div>

      {/* Sections */}
      <div className="divide-y divide-cream-200">
        {visibleSections.map((section, idx) => (
          <div key={idx} className="p-6">
            {section.title && (
              <h4
                className="text-marian-600 font-bold text-lg mb-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {section.title}
              </h4>
            )}
            {section.subtitle && (
              <p className="text-golden-600 text-sm italic mb-3">
                {section.subtitle}
              </p>
            )}
            {section.image && (
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4 border-2 border-golden-300">
                <Image
                  src={section.image}
                  alt={section.title || `${day.day} programa`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            {section.note && (
              <p className="bg-cream-100 border border-golden-200 rounded-xl px-4 py-3 text-sm text-gray-600 mb-4">
                🎺 {section.note}
              </p>
            )}
            <ActivityTimeline activities={section.activities} />
          </div>
        ))}
      </div>
    </article>
  );
}
