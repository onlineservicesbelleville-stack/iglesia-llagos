export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

export const galleryCategories = [
  "Todos",
  "Iglesia",
  "Virgen del Carmen",
  "Fiestas Patronales",
  "Procesiones",
  "Comunidad",
  "Paisajes de Llagos",
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/ft2.jpg",
    alt: "Iglesia de Llagos iluminada de noche",
    category: "Iglesia",
    title: "Nuestra Iglesia de noche",
  },
  {
    id: "2",
    src: "/images/virgen.jpg",
    alt: "Imagen de la Virgen del Carmen",
    category: "Virgen del Carmen",
    title: "Virgen del Carmen",
  },
  {
    id: "3",
    src: "/images/LLAGOS.jpg",
    alt: "Vista panorámica de Llagos",
    category: "Paisajes de Llagos",
    title: "Panorámica de Llagos",
  },
  {
    id: "4",
    src: "/images/fot1.jpg",
    alt: "Paisaje andino de Llagos",
    category: "Paisajes de Llagos",
    title: "Paisaje andino",
  },
  {
    id: "5",
    src: "/images/ft2.jpg",
    alt: "Plaza central de Llagos durante las fiestas",
    category: "Fiestas Patronales",
    title: "Fiestas patronales",
  },
  {
    id: "6",
    src: "/images/LLAGOS.jpg",
    alt: "Comunidad de Llagos reunida",
    category: "Comunidad",
    title: "Comunidad de Llagos",
  },
];
