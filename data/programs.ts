export interface Activity {
  time: string;
  title: string;
}

export interface ProgramDay {
  day: string;
  date: string;
  title: string;
  activities: Activity[];
}

export const patronalProgram: ProgramDay[] = [
  {
    day: "Día 1",
    date: "Viernes 12 de julio",
    title: "Apertura de las Fiestas Patronales",
    activities: [
      { time: "6:00 p.m.", title: "Concentración de la comunidad" },
      { time: "7:00 p.m.", title: "Santa Misa de apertura" },
      { time: "8:00 p.m.", title: "Programa cultural" },
    ],
  },
  {
    day: "Día 2",
    date: "Sábado 13 de julio",
    title: "Día de la familia y la comunidad",
    activities: [
      { time: "10:00 a.m.", title: "Juegos tradicionales" },
      { time: "12:00 p.m.", title: "Almuerzo comunitario" },
      { time: "7:00 p.m.", title: "Noche cultural" },
    ],
  },
  {
    day: "Día 3",
    date: "Domingo 14 de julio",
    title: "Celebración solemne",
    activities: [
      { time: "10:00 a.m.", title: "Santa Misa solemne" },
      { time: "11:30 a.m.", title: "Procesión principal" },
      { time: "2:00 p.m.", title: "Encuentro comunitario" },
    ],
  },
];

export const patronalDescription = `Cada año, la comunidad de Llagos se reúne para celebrar sus fiestas patronales en honor a la Virgen del Carmen y San José. Son días de oración, novena, Santa Misa, procesiones, actividades culturales, música, encuentros familiares y unión comunitaria. Estas celebraciones mantienen viva nuestra identidad y fortalecen la fe de nuestro pueblo.`;

export const patronalInvitation = `La Iglesia Virgen del Carmen y San José de Llagos invita cordialmente a todos los fieles, devotos, priostes, familias, migrantes y amigos de nuestra comunidad a participar en estas celebraciones llenas de fe, gratitud y tradición. Su presencia fortalece nuestra comunidad y honra la devoción que hemos recibido de nuestros mayores.`;
