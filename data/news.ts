export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image?: string;
  slug: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Invitación a la Novena de la Virgen del Carmen",
    date: "5 de julio de 2025",
    category: "Celebraciones",
    summary:
      "La comunidad de Llagos se une en oración durante nueve días previos a la fiesta patronal. Se invita a todos los fieles a participar de este tiempo de gracia y devoción mariana.",
    image: "/images/virgen.jpg",
    slug: "novena-virgen-del-carmen",
  },
  {
    id: "2",
    title: "Programa oficial de Fiestas Patronales 2025",
    date: "1 de julio de 2025",
    category: "Fiestas Patronales",
    summary:
      "Conoce el programa completo de actividades religiosas, culturales y comunitarias en honor a la Virgen del Carmen y San José de Llagos.",
    image: "/images/ft2.jpg",
    slug: "programa-fiestas-patronales-2025",
  },
  {
    id: "3",
    title: "Comunicado a la comunidad",
    date: "20 de junio de 2025",
    category: "Comunicados",
    summary:
      "La comisión organizadora de las fiestas patronales hace un llamado a todos los priostes, colaboradores y familias para coordinar los detalles de la celebración.",
    slug: "comunicado-comunidad",
  },
  {
    id: "4",
    title: "Agradecimiento a priostes y colaboradores",
    date: "20 de julio de 2024",
    category: "Agradecimientos",
    summary:
      "La Iglesia de Llagos expresa su profunda gratitud a todos los priostes, familias y colaboradores que hicieron posible las fiestas patronales del año pasado.",
    image: "/images/LLAGOS.jpg",
    slug: "agradecimiento-priostes",
  },
];
