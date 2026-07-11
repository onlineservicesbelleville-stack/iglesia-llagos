// Programa oficial de las Fiestas Patronales Llagos 2026
// En honor a la Santísima Virgen del Carmen y San José de Llagos
// LXXXI años de parroquialización — Del 15 al 19 de julio de 2026

export type ActivityCategory =
  | "religioso"
  | "cultural"
  | "deportivo"
  | "artistico"
  | "social"
  | "taurino"
  | "comunitario";

export interface CategoryStyle {
  label: string;
  icon: string;
  bg: string;
  text: string;
  border: string;
}

export const categoryStyles: Record<ActivityCategory, CategoryStyle> = {
  religioso: {
    label: "Religioso",
    icon: "✝",
    bg: "bg-marian-50",
    text: "text-marian-700",
    border: "border-marian-200",
  },
  cultural: {
    label: "Cultural",
    icon: "🎭",
    bg: "bg-andean-50",
    text: "text-andean-600",
    border: "border-andean-100",
  },
  deportivo: {
    label: "Deportivo",
    icon: "⚽",
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
  artistico: {
    label: "Artístico",
    icon: "🎶",
    bg: "bg-lavender-50",
    text: "text-lavender-700",
    border: "border-lavender-200",
  },
  social: {
    label: "Social",
    icon: "🎉",
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
  },
  taurino: {
    label: "Taurino",
    icon: "🐂",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
  comunitario: {
    label: "Comunitario",
    icon: "🤝",
    bg: "bg-golden-200/40",
    text: "text-golden-700",
    border: "border-golden-300",
  },
};

// Filtros rápidos solicitados para el programa (Todo + categorías principales)
export const categoryFilters: { key: "todo" | ActivityCategory; label: string }[] = [
  { key: "todo", label: "Todo" },
  { key: "religioso", label: "Religioso" },
  { key: "cultural", label: "Cultural" },
  { key: "deportivo", label: "Deportivo" },
  { key: "artistico", label: "Artístico" },
  { key: "taurino", label: "Taurino" },
  { key: "comunitario", label: "Comunitario" },
];

export interface Activity {
  time: string;
  title: string;
  description?: string;
  sponsor?: string;
  category: ActivityCategory;
}

export interface ProgramSection {
  title?: string;
  subtitle?: string;
  image?: string;
  note?: string;
  activities: Activity[];
}

export interface ProgramDay {
  date: string;
  day: string;
  title: string;
  image: string;
  sections: ProgramSection[];
}

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const fiestasHero = {
  title: "Fiestas Patronales Llagos 2026",
  subtitle: "En honor a la Santísima Virgen del Carmen y San José de Llagos",
  dates: "Del 15 al 19 de julio de 2026",
  anniversary: "LXXXI años de parroquialización",
  phrase: "«Llagos vive sus fiestas»",
  phraseSecondary: "«Ven a vivir la fiesta más importante del año»",
  image: "/images/fiestas-2026/f1.jpg",
  buttons: [
    { label: "Ver programa completo", href: "#programa" },
    { label: "Ver novena", href: "#novena" },
    { label: "Ver galería", href: "#galeria" },
  ],
};

// ---------------------------------------------------------------------------
// INVITACIÓN
// ---------------------------------------------------------------------------
export const invitationSection = {
  image: "/images/fiestas-2026/f2.jpg",
  title: "Invitación",
  paragraphs: [
    "El pueblo de Llagos y los Priostes de la Santísima Virgen del Carmen expresamos un caluroso saludo a coterráneos y extranjeros en estas festividades patronales y de parroquialización.",
    "Julio, mes de la cosecha, se identifica con la ternura, grandeza, alegría y regocijo de volvernos a encontrar con nuestros seres queridos, los que regresan al regazo de su tierra amada y fecunda, cuna de gente generosa y hospitalaria, llenos de júbilo, cultura, tradición, folklore y costumbres que caracterizan al ser Lláguense.",
    "Queremos extender la más cálida invitación a compartir con nosotros este homenaje, donde se denotan aquellas melodías que rinden tributo, notas que resuenan jubilosas, prestas a celebrar un nuevo capítulo festivo para olvidarnos de las penas y realzar la alegría nuevamente.",
    "Deseándoles que la Patrona de la Sucursal del Cielo derrame muchas bendiciones en sus hogares, en el marco de la celebración de las fiestas patronales y al cumplirse los LXXXI años de aniversario de parroquialización, del 15 al 19 de julio de 2026.",
  ],
  closingPhrase:
    "«Visítanos, nuestra parroquia te espera con la calidez de su gente.»",
};

// ---------------------------------------------------------------------------
// MENSAJE DE LA REINA
// ---------------------------------------------------------------------------
export const queenMessageSection = {
  image: "/images/fiestas-2026/f3.jpg",
  title: "Camila I - Reina de la Parroquia Llagos 2026-2027",
  paragraphs: [
    "Ser su reina no significa únicamente llevar una corona; representa el compromiso de servir con humildad, respeto, dedicación y orgullo a mi querida Sucursal del Cielo.",
    "Agradezco profundamente al Comité de Fiestas por la confianza depositada en mí, y el cariño de cada una de las personas que hacen de esta tierra un lugar lleno de historia, tradición, fe y esperanza.",
    "En estas festividades en honor a la Santísima Virgen del Carmen, invito a propios y extraños a vivir cada programación con alegría, respeto y unidad, fortaleciendo nuestra cultura y el espíritu de fraternidad que nos caracteriza.",
    "Que la protección de la Patrona de Llagos ilumine vuestros hogares y derrame abundantes bendiciones sobre cada una de sus familias.",
    "Con el corazón lleno de esperanza, les deseo unas felices fiestas y los invito a celebrarlas con entusiasmo, unión y amor por nuestra querida parroquia.",
  ],
  closingPhrase: "¡Qué viva Llagos!",
};

// ---------------------------------------------------------------------------
// NOVENA
// ---------------------------------------------------------------------------
export interface NovenaActivity {
  date: string;
  time: string;
  title: string;
  description?: string;
  sponsor?: string;
}

export const novenaSection = {
  image: "/images/fiestas-2026/f4.jpg",
  title: "Novena a la Santísima Virgen del Carmen",
  description:
    "Del 06 al 14 de julio inicia en el Barrio Plaza Central, continúa en Jesús del Gran Poder y culmina en La Dolorosa.",
  note:
    "La donación de la pintura y la mano de obra para el adecentamiento de la parte exterior de nuestro templo es gracias a la Sra. María Adela Yupa. La reparación del alumbrado es gentileza de un devoto y de los usuarios del sistema de agua potable de nuestra parroquia.",
  activities: [
    {
      date: "Jueves 09 de julio",
      time: "17:00",
      title: "Santa Misa en el Barrio Jesús del Gran Poder",
      description: "Con el reverendo párroco del Cantón Chunchi.",
      sponsor: "Ofrecida por: Sr. José María Chauca",
    },
    {
      date: "Lunes 12 de julio",
      time: "14:00",
      title: "Santa Misa en la Gruta La Dolorosa",
      description: "Con el reverendo párroco del Cantón Chunchi.",
      sponsor: "Ofrecida por: Moradores del barrio",
    },
  ] as NovenaActivity[],
};

// ---------------------------------------------------------------------------
// PROGRAMA COMPLETO 2026
// ---------------------------------------------------------------------------
export const patronalProgram2026: ProgramDay[] = [
  // ------------------------------------------------------------------ MIÉRCOLES 15
  {
    date: "15 de julio de 2026",
    day: "Miércoles 15",
    title: "Llegada de la banda, serenata y coronación de la Reina",
    image: "/images/fiestas-2026/f5.jpg",
    sections: [
      {
        activities: [
          {
            time: "12:00",
            title: "Arreglos florales e iluminación de la Iglesia San José de Llagos",
            sponsor:
              "Donado por: Ings. Adelaida, Érica Narváez y la señora María Adela Yupa Cevallos",
            category: "religioso",
          },
          {
            time: "16:00",
            title: "Llegada de la Banda de pueblo \"Sonora Nacional\"",
            description:
              "De la parroquia Juan de Velasco, provincia de Chimborazo.",
            category: "comunitario",
          },
          {
            time: "16:00",
            title: "Serenata y procesión con nuestra Patrona Virgen del Carmen",
            description:
              "Por las principales calles de la parroquia, acompañada con la banda de pueblo.",
            category: "religioso",
          },
          {
            time: "17:00",
            title: "Santa Misa",
            description: "A cargo del Reverendo Párroco del Cantón Chunchi.",
            sponsor: "Ofrecida por: Sra. Narcisa Yupa",
            category: "religioso",
          },
          {
            time: "18:00",
            title: "Recepción a la banda de pueblo",
            sponsor: "Por la familia Narváez Yupa",
            category: "comunitario",
          },
        ],
      },
      {
        title: "Programa Socio Cultural",
        image: "/images/fiestas-2026/f6.jpg",
        activities: [
          {
            time: "19:00",
            title:
              "Coronación y Exaltación a Camila I, Reina de la Parroquia Llagos, periodo 2026-2027",
            description:
              "Bajo la conducción y animación de Adolfo \"El Loco Lorenzo\", Locutor de Radio Canela 94.5 FM.",
            sponsor:
              "Auspician: Sres. Fabián Buestán y Erick Dután. Sonido auspiciado por: Sres. Fabián Guallpa, Romelio Peñaloza, Jesús Velásquez y Oscar Abad. La iluminación del escenario con pantallas LED de esta noche auspician los priostes.",
            category: "social",
          },
          {
            time: "20:30",
            title: "Quema de chamizas",
            sponsor: "Donado gentilmente por el Club Barcelona",
            category: "social",
          },
          {
            time: "21:00",
            title: "Presentación de un hermoso castillo artificial",
            description: "Traído desde la provincia de Bolívar.",
            sponsor:
              "Auspician: Hermanos Richar, Alexandra Aracely y Scaleth Anahí Patiño López",
            category: "social",
          },
          {
            time: "22:30",
            title: "Presentación del grupo artístico \"Tiempo Andino\"",
            description:
              "Del cantón El Tambo, en homenaje a la Reina de la Parroquia Llagos. Este evento será transmitido por Frecuencia Latina, gracias al auspicio de los señores Luis Rosendo Dután y Blanca Portilla. En esta noche Camila I brindará unas exquisitas canelas a los presentes.",
            sponsor: "Auspicia: Sr. Henrry Vega",
            category: "artistico",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ JUEVES 16
  {
    date: "16 de julio de 2026",
    day: "Jueves 16",
    title: "Deporte, ganadería y Festival de la Música Nacional",
    image: "/images/fiestas-2026/f7.jpg",
    sections: [
      {
        note:
          "Este día la Banda de pueblo Sonora Nacional es donada gentilmente por el Sr. Mario Guallpa.",
        activities: [
          {
            time: "08:00",
            title: "Recepción a la banda de pueblo",
            sponsor: "Por la Sra. Dolores Guamán y familia",
            category: "comunitario",
          },
          {
            time: "09:00",
            title: "Santa Misa",
            description: "A cargo del Reverendo Párroco del Cantón Chunchi.",
            sponsor:
              "Ofrecida por: Sra. Adela Yupa Cevallos, el Sr. Luciano Yupa e Ingenieras Adelaida y Érica Narváez",
            category: "religioso",
          },
        ],
      },
      {
        title: "Programación Deportiva",
        activities: [
          {
            time: "09:30",
            title: "Campeonato Intercomunitario masculino y femenino",
            description:
              "Participan: Angas, Joyagshi, San Cristóbal, Tablón, Saguin, Santa Rosa y Paccha.",
            sponsor:
              "Premian indor masculino — Primer puesto: Lcdo. Edgar Naranjo, Concejal Rural. Segundo puesto: Ing. Edita Vique. Premian indor femenino — Primer puesto: Sr. Gabriel Ortiz. Segundo puesto: Sr. Juan Carlos Campoverde.",
            category: "deportivo",
          },
          {
            time: "10:00",
            title: "Exposición de los mejores ejemplares de ganado bovino",
            category: "deportivo",
          },
          {
            time: "11:00",
            title: "Carrera Atlética 5K \"Llagos 2026\"",
            description:
              "Categoría: Hombres y Mujeres, de 15 años en adelante. Partida: Río Angas. Llegada: Frente a la Iglesia San José.",
            sponsor:
              "1er Lugar: $200 + un trofeo, auspicia Sr. Fausto Pinos. 2do Lugar: $100, auspicia Niño Sebastián Cantos. 3er Lugar: $50, auspicia Sra. Yolanda Romero.",
            category: "deportivo",
          },
        ],
      },
      {
        image: "/images/fiestas-2026/f8.jpg",
        activities: [
          {
            time: "12:30",
            title: "Recepción de la banda de pueblo",
            sponsor: "Por la Sra. Zoila Landy e hijos",
            category: "comunitario",
          },
          {
            time: "14:00",
            title: "Serenata a nuestra Madre Santísima",
            category: "religioso",
          },
          {
            time: "18:00",
            title: "Recepción de la banda de pueblo",
            sponsor: "Por el Sr. Ricardo Calle y esposa",
            category: "comunitario",
          },
          {
            time: "19:00",
            title: "Santo Rosario",
            description: "A cargo de las Catequistas de la localidad.",
            category: "religioso",
          },
        ],
      },
      {
        title: "Noche Cultural - Artística",
        image: "/images/fiestas-2026/f9.jpg",
        activities: [
          {
            time: "19:00",
            title:
              "III Festival y concurso de la música nacional \"Nuestra Voz\" Llagos 2026",
            description:
              "Participan: Categoría abierta. Los participantes deberán interpretar los siguientes géneros: pasillos, pasacalles, tonadas, albazos, sanjuanitos y fox incaico. El evento contará con marco musical de \"Paúl Pangol y su conjunto\" desde la ciudad de Cuenca. El marco musical empezará los ensayos a partir de las 15h00 con los participantes inscritos.",
            sponsor:
              "Premiación — Primer puesto: Sr. Néstor Yupa ($400). Segundo puesto: Sres. Danny Yupa y Jenny Arévalo ($300). Tercer puesto: Sres. David Tacuri y Marcia Lasso ($200). Cuarto puesto: Sr. Carlos Lazo ($100). Quinto lugar: Sr. Marco Rivera ($50).",
            category: "artistico",
          },
          {
            time: "22:00",
            title: "Festejando el onomástico a nuestra Virgen del Carmen",
            description:
              "Se presenta desde el cantón Otavalo la agrupación \"Proyecto Coraza\".",
            sponsor:
              "Auspician: Sres. Julio y Luis Buri, Gabriel Dután, John Curillo, Claudio Cevallos, Rodrigo Cevallos Castillo, Víctor Chimborazo, Eydan Vega, Ramiro Guamán, Ángel Guamán, Simón y Luis Chuqui. Sonido de esta noche auspicia: Sr. Carlos Juncal y esposa.",
            category: "artistico",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ VIERNES 17
  {
    date: "17 de julio de 2026",
    day: "Viernes 17",
    title: "Alegre despertar Lláguense por los barrios de la parroquia",
    image: "/images/fiestas-2026/f10.jpg",
    sections: [
      {
        note:
          "Este día la Banda de pueblo Sonora Nacional es donada gentilmente por la familia Quizhpe Morocho.",
        activities: [
          {
            time: "04:00",
            title: "Albazo",
            sponsor:
              "Donado y organizado por las familias: Caguana Naranjo, Buestán Castillo, Yupa Castillo, Yupa Narváez, Angamarca Caguana y Patiño Bustamante",
            category: "cultural",
          },
          {
            time: "08:00",
            title: "Recepción a la banda de pueblo",
            sponsor: "Por la Sra. Rosa Naranjo Hugo y familia",
            category: "comunitario",
          },
          {
            time: "10:00",
            title: "Desfile Cívico",
            description: "Por las principales calles de la parroquia.",
            category: "comunitario",
          },
          {
            time: "12:30",
            title: "Recepción de la banda de pueblo",
            sponsor: "Por el Gobierno Parroquial de Llagos",
            category: "comunitario",
          },
          {
            time: "13:00",
            title: "Cuadrangular de vóley masculino intercantonal",
            description: "Participan: Pallatanga, Bucay, Cuenca y La Troncal.",
            sponsor:
              "Premiación — Primer puesto: Hermanos Mishirumbay Angamarca y Sra. Lorena Loja ($400). Segundo puesto: Niño Allan Hidalgo Chiqui ($300). Tercer puesto: Sr. Pedro Cevallos y niña Emily Cevallos Narváez ($200). Cuarto puesto: Sr. José Navas ($100).",
            category: "deportivo",
          },
          {
            time: "18:00",
            title: "Recepción de la banda de pueblo",
            sponsor: "Por la Sra. María Lasso",
            category: "comunitario",
          },
        ],
      },
      {
        title: "Noche Artística - Bailable",
        subtitle:
          "\"La Sucursal del Cielo se viste de Fe y Tradición\" en homenaje a la Santísima Virgen del Carmen y los 81 años de parroquialización",
        image: "/images/fiestas-2026/f11.jpg",
        activities: [
          {
            time: "20:00",
            title: "Presentación del gran show artístico bailable",
            description:
              "Maestro de Ceremonia: JC Patricio de Radio \"La Mega\" 103.3 de Cuenca.",
            category: "artistico",
          },
          {
            time: "21:00",
            title: "Juan Pablo Quilli, \"El Alma y Sentimiento del Ecuador\"",
            description: "Desde La Atenas del Ecuador.",
            sponsor:
              "Auspician: Familia Siguencia Yupa, Sr. Marco Castillo y Sra. Hortencia Cevallos",
            category: "artistico",
          },
          {
            time: "22:30",
            title: "Embálate Ecuador",
            description: "Desde la ciudad de Cuenca.",
            sponsor:
              "Auspician: Sres. Julio, Héctor, Carlos, César, Juan Fernando, Medardo, Frank, Juan Benigno Narváez, Tito Guerrero y Dany Curillo",
            category: "artistico",
          },
          {
            time: "23:30",
            title: "Lolita Echeverría, \"La Reina de la Música Fina\"",
            description:
              "Desde Quito, Luz de América. Sonido auspicia: Sr. William Narváez. El animador de esta noche auspicia: Sra. Zoila Lasso, Sr. Eduardo Guallpa y Sra. Elvia Castillo.",
            sponsor:
              "Auspician: Sras. Barbarita, Luz, Nancy, Magdalena, Alcira y Marilyn Narváez, Carmita Vega de Narváez, Kasandra, Jessica, Jasmin Guamán Narváez y Jenny Castillo Narváez",
            category: "artistico",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ SÁBADO 18
  {
    date: "18 de julio de 2026",
    day: "Sábado 18",
    title: "Alegre despertar Lláguense por los barrios de la parroquia",
    image: "/images/fiestas-2026/f12.jpg",
    sections: [
      {
        note:
          "Este día la Banda de pueblo \"Sonora Nacional\" es donada gentilmente por la familia Muruzumbay Chauca.",
        activities: [
          {
            time: "04:00",
            title: "Albazo",
            sponsor:
              "Donado y organizado por las familias: Vega Dután, Yupa Yupa, Naranjo Chiriboga, Chauca Naranjo y Dután Guamán",
            category: "cultural",
          },
          {
            time: "08:00",
            title: "Recepción a la Banda de pueblo",
            sponsor: "Por el Sr. Wilson Peñafiel y Fernanda Castillo",
            category: "comunitario",
          },
          {
            time: "09:00",
            title: "Partido de exhibición",
            description:
              "Participan: Liga Cantonal de Alausí vs Liga Cantonal de Chunchi, categoría sub 12.",
            sponsor:
              "Premiación — Primer puesto: Sr. Pedro Chicaiza y Sra. Cenaida Yupa. Segundo puesto: Psicóloga Mónica Avendaño.",
            category: "deportivo",
          },
          {
            time: "10:00",
            title: "Cuadrangular de vóley masculino",
            description: "Participan: Chunchi, Zhical, Cañar y Llagos.",
            sponsor:
              "Premiación — Primer puesto: Lcda. Jessica Reyes, concejal rural, y Sr. Alonso Tamay. Segundo puesto: Sres. Patricio Sillo y Byron Sánchez. Tercer puesto: Niñas Samantha Chimbo y Keily Vega. Cuarto puesto: Sres. Carlos Amendaño, Luis Lala y Ulpiano Narváez.",
            category: "deportivo",
          },
          {
            time: "12:30",
            title: "Recepción a la Banda de pueblo",
            sponsor: "Por la Sra. Nelly Narváez",
            category: "comunitario",
          },
        ],
      },
      {
        title: "Primera Corrida Taurina y Gran Mano a Mano",
        image: "/images/fiestas-2026/f13.jpg",
        activities: [
          {
            time: "13:00",
            title: "Desfile de caballos",
            description:
              "Desde el barrio La Dolorosa hasta la plaza de toros, acompañado por la banda de pueblo. Entrega de la Plaza Taurina por Camila I.",
            category: "taurino",
          },
          {
            time: "13:00",
            title: "Lidia de la Ganadería \"San José de Pucará\"",
            description:
              "Propiedad del Sr. Heriberto Cacuango del Cantón Alausí. Esta tarde se donarán premios económicos a los mejores toreadores, valorados en $500 dólares, donados gentilmente por parte de la familia Dután Cunin, y $500 dólares por la familia Narváez.",
            sponsor: "Auspicia: Sr. Rosendo Dután",
            category: "taurino",
          },
          {
            time: "13:00",
            title: "Lidia de la Ganadería \"Virgen de Guadalupe\"",
            description:
              "Propiedad de los hermanos Procel de la comunidad Laguna Chico. Además, se lucirán hermosas colchas donadas por: Ing. Nicol Ibarra Molina, Srtas. Mabelyn Yupa Narváez y Monserrath Narváez Angamarca, niños Carlitos y Carlita Narváez Chimborazo y Aynara Chauca Llivizaca. Primera sangría donada por la Sra. Beatriz Cevallos. Segunda sangría donada por la Sra. Norma Molina. Bajo la animación y conducción del Agrónomo Luis Calle, propietario del Sonido \"Master Flash\" de la parroquia Llagos.",
            sponsor:
              "Auspician: Sres. Milton, Kenneth, Bill, Héctor, Tlgo. Walter e Ings. Adelaida y Yulisa Narváez",
            category: "taurino",
          },
          {
            time: "18:00",
            title: "Recepción a la Banda de pueblo",
            sponsor: "Por la Sra. Tránsito Camas",
            category: "comunitario",
          },
          {
            time: "19:00",
            title: "Santa Misa",
            description: "A cargo del reverendo Párroco del cantón.",
            sponsor: "Ofrecida por: Srta. Jennifer Cantos",
            category: "religioso",
          },
        ],
      },
      {
        title: "Gran Show Artístico",
        subtitle:
          "Gran show artístico en homenaje a la Patrona de la Sucursal del Cielo \"Santísima Virgen del Carmen\" — Noche Llaguense",
        image: "/images/fiestas-2026/f14.jpg",
        activities: [
          {
            time: "20:00",
            title: "Fuegos artificiales",
            description:
              "Desde la provincia de Bolívar, cantón Chimbo, iluminarán la Sucursal del Cielo.",
            sponsor: "Auspicia: Srta. Brianna Buri Cevallos",
            category: "social",
          },
          {
            time: "20:30",
            title: "Presentación artística de la carismática \"Mary Murillo\"",
            sponsor: "Auspicia: Sr. Luis Buri",
            category: "artistico",
          },
          {
            time: "21:15",
            title: "Presentación de \"Skala\"",
            description: "Desde la Capital de los ecuatorianos.",
            sponsor:
              "Auspician: Ruperto, Rodrigo Ariolfo y Estrella Bustamante; Patricio, Henry y Juan Caguana; Fanny y Cyntia Guevara, Melina Pacheco, Walter Hugo, Antonio Montero, Mia Cevallos Caguana y Leonardo y Renata Caguana Lara",
            category: "artistico",
          },
          {
            time: "22:00",
            title: "Saul Proano y La Trinchera",
            description:
              "Por primera vez en nuestra parroquia, la voz de la balada romántica, ex fundador, vocalista y compositor del Grupo Sahiro.",
            sponsor:
              "Auspician: Sres. Luis y Junior Buri, Beatriz Cevallos y Nataly Caguana",
            category: "artistico",
          },
          {
            time: "23:00",
            title: "Trío Colonial",
            description:
              "Para cerrar la noche con broche de oro, desde la capital de los ecuatorianos, los embajadores de la música nacional. Sonido e iluminación del escenario con pantallas LED de esta noche auspicia: Familia Yupa Yupa. Bajo la conducción y animación de Sonia Fernández, Locutora de Radio Mega 103.3 FM.",
            sponsor:
              "Auspician: Sres. Carmen Naranjo Siguencia, Julio, Mercedes, Soraida, Walter, Lorena y Valeria Buri, César Chimborazo, niño Alexander Buri Faican. Conducción auspiciada por: Sres. Luis Juncal y esposa, Mayra Juncal Naranjo y Patricio Vega.",
            category: "artistico",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ DOMINGO 19
  {
    date: "19 de julio de 2026",
    day: "Domingo 19",
    title: "Alegre despertar Lláguense por los barrios de la parroquia",
    image: "/images/fiestas-2026/f15.jpg",
    sections: [
      {
        note:
          "Este día la Banda de pueblo Sonora Nacional es donada gentilmente por los Hermanos Julio, Luis y Gaspar Angamarca.",
        activities: [
          {
            time: "04:00",
            title: "Albazo",
            sponsor:
              "Donado y organizado por las familias: Buri Naranjo, Caguana Molina, Guamán Chicaiza, Llivisaca Guamán, Narváez Angamarca y Lazo Guamán",
            category: "cultural",
          },
          {
            time: "08:00",
            title: "Recepción a la banda del pueblo",
            sponsor: "Por la Sra. Tránsito Caguana",
            category: "comunitario",
          },
        ],
      },
      {
        title: "Programación Folklórico Intercultural",
        activities: [
          {
            time: "09:00",
            title: "III Festival de Danzas, concurso abierto",
            description:
              "Este día tendremos la presentación del Ballet Folclórico Internacional \"Pukaycha\".",
            sponsor:
              "Premiación — Primer puesto: Sr. Efraín Narváez y esposa ($700). Segundo puesto: Sras. Melida, Nelly, Fernanda y Carolina Buestán ($500). Tercer puesto: Sras. Carmen Lazo, Libia Chauca, Silvia y Gloria Guamán ($400). Cuarto puesto: Sres. Blanca y Erick Chauca ($300). Quinto puesto: Sra. Angelita Camas ($200). Ballet Folclórico auspician: Sres. Eulalia y Carmen Molina, Jasmany y Jhon Naranjo Molina.",
            category: "cultural",
          },
          {
            time: "12:00",
            title: "Recepción de la Banda de pueblo",
            sponsor: "Por el Sr. Gaspar Angamarca y esposa",
            category: "comunitario",
          },
        ],
      },
      {
        title: "Segunda Corrida Taurina",
        image: "/images/fiestas-2026/f16.jpg",
        activities: [
          {
            time: "12:30",
            title: "Desfile de caballos",
            description:
              "Desde el barrio La Dolorosa hasta la plaza de toros, acompañado por la banda de pueblo y del \"Fabuloso\" Angelito Naula con sus potrillos de alta escuela.",
            sponsor:
              "Auspician: Sres. Víctor Chicaiza Camas, Juan Chauca y Thalía Naranjo",
            category: "taurino",
          },
          {
            time: "13:00",
            title: "Entrega de la Plaza Taurina por Camila I, soberana de nuestra parroquia",
            category: "taurino",
          },
          {
            time: "13:00",
            title: "Lidia de la Ganadería \"Santa Rosa\"",
            description:
              "Propiedad del Sr. Patricio Sánchez desde el cantón Alausí. En esta tarde se donarán artísticas colchas y premios económicos a los mejores toreadores. Primera sangría donada por los Sres. Segundo Angamarca, Leandro Mishirumbay y Fermín Chauca. Segunda sangría donada por las Sras. Melida, Nelly, Fernanda y Carolina Buestán. Bajo la animación y conducción del Agrónomo Luis Calle, propietario del Sonido \"Master Flash\" de la parroquia Llagos.",
            sponsor:
              "Auspician: Sres. Rosa Naranjo Siguencia, Luis Chauca, Celia Dután y Srta. Doménica Yugsi. Colchas y premios donados por: Niñas Alison Astinbay Guallpa, Alejandra y Aitana Tapia, Ana Isabel y Brittany Yuliana Tamay y Srta. Estefanía Guamán Narváez, quien donará un premio económico de $80.",
            category: "taurino",
          },
        ],
      },
      {
        title: "Partido de Exhibición y Notas Finales",
        image: "/images/fiestas-2026/f17.jpg",
        activities: [
          {
            time: "18:00",
            title: "Encuentro de vóley",
            description: "Participan: Trío de María Abril vs Llagos.",
            sponsor: "Auspicia: Niño Thiago Buri",
            category: "deportivo",
          },
          {
            time: "18:00",
            title: "Recepción de la Banda de pueblo",
            sponsor: "Por la Sra. Cenaida Yupa",
            category: "comunitario",
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// NOTAS GENERALES Y AUSPICIANTES FINALES
// ---------------------------------------------------------------------------
export const closingNotes = [
  {
    title: "Organización deportiva",
    text:
      "Los programas deportivos estarán organizados por: Dr. Celso Naranjo, Ing. Paúl Caguana, Sres. Luis Benavides, Kevin Vega y Fausto Yupa.",
  },
  {
    title: "Transmisión en vivo",
    text:
      "Los eventos sociales, culturales y deportivos serán transmitidos por Frecuencia Latina, gracias al gentil auspicio de: La Cima Restaurant, Arknet, Sr. Denis Lema Loja y Priostes.",
  },
  {
    title: "Refrigerios para los grupos de danza",
    text:
      "Gracias al auspicio de: Cooperativa Riobamba, Cooperativa Chunchi, Cooperativa Fernando Daquilema y Cooperativa 26 de Septiembre.",
  },
];

// ---------------------------------------------------------------------------
// GALERÍA — imágenes oficiales de Fiestas Patronales 2026
// ---------------------------------------------------------------------------
export const fiestas2026Gallery = Array.from({ length: 17 }, (_, i) => ({
  id: `f${i + 1}`,
  src: `/images/fiestas-2026/f${i + 1}.jpg`,
  alt: `Fiestas Patronales Llagos 2026 - imagen ${i + 1}`,
}));

// ---------------------------------------------------------------------------
// Legacy exports (compatibilidad con textos generales del sitio)
// ---------------------------------------------------------------------------
export const patronalDescription = `Cada año, la comunidad de Llagos se reúne para celebrar sus fiestas patronales en honor a la Virgen del Carmen y San José. Son días de oración, novena, Santa Misa, procesiones, actividades culturales, música, encuentros familiares y unión comunitaria. Estas celebraciones mantienen viva nuestra identidad y fortalecen la fe de nuestro pueblo.`;

export const patronalInvitation = `La Iglesia San José de Llagos invita cordialmente a todos los fieles, devotos, priostes, familias, migrantes y amigos de nuestra comunidad a participar en estas celebraciones llenas de fe, gratitud y tradición. Su presencia fortalece nuestra comunidad y honra la devoción que hemos recibido de nuestros mayores.`;
