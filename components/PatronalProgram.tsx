"use client";

import { useState } from "react";
import { ProgramDay, ActivityCategory, categoryFilters } from "@/data/programs";
import ProgramDayCard from "@/components/ProgramDayCard";
import WhatsAppShareButton from "@/components/WhatsAppShareButton";

interface PatronalProgramProps {
  days: ProgramDay[];
}

export default function PatronalProgram({ days }: PatronalProgramProps) {
  const [activeCategory, setActiveCategory] = useState<"todo" | ActivityCategory>("todo");

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categoryFilters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveCategory(filter.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
              activeCategory === filter.key
                ? "bg-marian-600 text-white border-marian-600 shadow-md"
                : "bg-white text-marian-600 border-marian-200 hover:bg-marian-50"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Day cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {days.map((day) => (
          <ProgramDayCard key={day.day} day={day} activeCategory={activeCategory} />
        ))}
      </div>

      {/* WhatsApp share button */}
      <div className="text-center">
        <WhatsAppShareButton text="¡Comparto el programa de las Fiestas Patronales Llagos 2026 en honor a la Santísima Virgen del Carmen y San José de Llagos!" />
      </div>
    </div>
  );
}
