import {
  PLATE_ATRIUM,
  PLATE_CONCRETE,
  PLATE_COURTYARD,
  PLATE_FACADE,
  PLATE_MATERIALS,
} from "./platesA";
import {
  PLATE_EXPERIENCE,
  PLATE_HORIZON,
  PLATE_PORTFOLIO,
  PLATE_STUDIO,
} from "./platesB";

export const PLATES = {
  courtyard: PLATE_COURTYARD,
  concrete: PLATE_CONCRETE,
  atrium: PLATE_ATRIUM,
  facade: PLATE_FACADE,
  materials: PLATE_MATERIALS,
  experience: PLATE_EXPERIENCE,
  portfolio: PLATE_PORTFOLIO,
  horizon: PLATE_HORIZON,
  studio: PLATE_STUDIO,
} as const;

/* Yeni üretilmiş yüksek çözünürlüklü (1600px) mimari görseller.
   İç sayfalarda bulanık küçük plakalar yerine bu net görseller kullanılır. */
export const HD_PAGES = {
  corporateStudio: "/images/pages/corporate-studio-clean.jpg",
  servicesPavilion: "/images/pages/services-pavilion.jpg",
  engineeringStructure: "/images/pages/engineering-structure.jpg",
  projectsCourtyard: "/images/pages/projects-courtyard.jpg",
  contactColonnade: "/images/pages/contact-colonnade.jpg",
  typologyCommercial: "/images/pages/typology-commercial.jpg",
  typologyMixed: "/images/pages/typology-mixed.jpg",
} as const;
