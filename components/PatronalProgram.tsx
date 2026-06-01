import { ProgramDay } from "@/data/programs";

interface PatronalProgramProps {
  days: ProgramDay[];
}

const dayColors = [
  { bg: "bg-marian-600", border: "border-marian-500", badge: "bg-marian-700" },
  { bg: "bg-golden-600", border: "border-golden-500", badge: "bg-golden-700" },
  { bg: "bg-andean-500", border: "border-andean-400", badge: "bg-andean-600" },
  { bg: "bg-church-600", border: "border-church-500", badge: "bg-church-700" },
];

export default function PatronalProgram({ days }: PatronalProgramProps) {
  const whatsappText = encodeURIComponent(
    "¡Comparto el programa de Fiestas Patronales de la Iglesia Virgen del Carmen y San José de Llagos!"
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {days.map((day, idx) => {
          const colors = dayColors[idx % dayColors.length];
          return (
            <div
              key={day.day}
              className={`rounded-2xl overflow-hidden shadow-lg border ${colors.border} bg-white`}
            >
              {/* Day header */}
              <div className={`${colors.bg} text-white px-6 py-4`}>
                <p className="text-xs font-semibold tracking-widest uppercase opacity-80 mb-1">
                  {day.day}
                </p>
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {day.title}
                </h3>
                <p className="text-sm opacity-80 mt-1">📅 {day.date}</p>
              </div>

              {/* Activities */}
              <div className="p-5 space-y-3">
                {day.activities.map((activity, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <span
                      className={`${colors.badge} text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5 shrink-0`}
                    >
                      {activity.time}
                    </span>
                    <p className="text-gray-700 text-sm font-medium leading-snug">
                      {activity.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* WhatsApp share button */}
      <div className="text-center">
        <a
          href={`https://wa.me/?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-colors shadow-md"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Compartir por WhatsApp
        </a>
      </div>
    </div>
  );
}
