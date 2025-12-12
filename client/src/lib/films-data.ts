import lilaHeroImage from "@assets/day_3_1.1.5_1765492533895.jpg";
import redLightTeachersHeroImage from "@assets/Still_2024-11-24_133853_1.1.10_1760767953179.jpg";
import revelryHeroImage from "@assets/alley_1.1.4_1765518661874.JPG";
import revelryMobileHeroImage from "@assets/Stills_1.1.1_1.13.1_1765516206668.jpg";
import masterChiefHeroImage from "@assets/TMC_STILLS_POWERGRADE_1.326.1_1765515464282.jpg";
import summerJazzHeroImage from "@assets/kiss_sample_1.1.1_1765488776588.png";
import summerJazzMobileHeroImage from "@assets/Still_2025-01-15_231323_1.20.1_1765518408790.jpg";
import anitaHeroImage from "@assets/Anita_4.14.2_1765515604005.jpg";
import asOneHeroImage from "@assets/Screenshot_2025-12-11_at_12.57.16_PM_1765486643825.png";

export interface Film {
  slug: string;
  title: string;
  year: string;
  releaseDate: string;
  director: string;
  writer: string;
  starring: string[];
  synopsis: string;
  heroImage: string;
  mobileHeroImage?: string;
  status: "coming-soon" | "now-available" | "library";
  finePrint?: string;
  executiveProducer?: string;
  producer?: string;
  trailerUrl?: string;
  previewUrl?: string;
  directorOfPhotography?: string;
  streamingOn?: string[];
}

export const films: Film[] = [
  {
    slug: "lila-exe",
    title: "Lila.exe",
    year: "Coming Soon",
    releaseDate: "TBA",
    director: "Mark De Leon",
    writer: "Mark De Leon",
    starring: ["George Hu", "Zoe Tran Wofford"],
    synopsis: "After her twin sister's death, a U.S Navy medical officer helps a biotech giant birth a human avatar seeded with her sister's voice. When courts move to seize and erase the being now known as Lila, Emma must decide if saving a life she helped create means breaking every oath she swore.",
    heroImage: lilaHeroImage,
    status: "coming-soon",
  },
  {
    slug: "red-light-teachers",
    title: "Red Light Teachers",
    year: "2025",
    releaseDate: "September 3, 2025",
    director: "Chris Soriano",
    writer: "Chris Soriano",
    starring: ["Drea Castro", "Chris Soriano", "Rhandy Torres"],
    synopsis: "A desperate immigrant forced into the world of underground strip clubs crosses paths with a disillusioned drama teacher, both rediscover the meaning of dignity, art, and second chances.",
    heroImage: redLightTeachersHeroImage,
    status: "coming-soon",
    executiveProducer: "Hillary Soriano",
    producer: "Mark De Leon",
    finePrint: "Includes an individual producer credit. The project itself was produced outside of Revelry Cinema.",
    previewUrl: "https://www.youtube.com/watch?v=GVdNcXw_Nm8",
  },
  {
    slug: "revelry",
    title: "Revelry",
    year: "",
    releaseDate: "TBA",
    director: "Mark De Leon",
    writer: "Mark De Leon, Kenan Eames",
    starring: ["Kenan Eames", "Riley Elyse", "Sammy Cantu", "Roann Mesina"],
    synopsis: "In the face of loss and adversity, a Filipino Navy veteran's life takes an unexpected turn when a dream reunites him with his grandmother's spirit.",
    heroImage: revelryHeroImage,
    mobileHeroImage: revelryMobileHeroImage,
    status: "library",
    previewUrl: "https://www.youtube.com/watch?v=sQqm9Yxk_Yg",
  },
  {
    slug: "the-master-chief",
    title: "The Master Chief",
    year: "2023",
    releaseDate: "2023",
    director: "Chris Soriano",
    writer: "",
    starring: ["Chris Soriano", "Georgina Tolentino"],
    synopsis: "",
    heroImage: masterChiefHeroImage,
    status: "now-available",
    executiveProducer: "Hillary Soriano",
    producer: "Mark De Leon",
    finePrint: "Includes an individual producer credit. The project itself was produced outside of Revelry Cinema.",
    trailerUrl: "https://www.youtube.com/watch?v=mvfyV2md2J8",
    streamingOn: ["Amazon Prime", "Apple TV"],
  },
  {
    slug: "summer-jazz",
    title: "Summer Jazz",
    year: "2022",
    releaseDate: "2022",
    director: "Mark De Leon",
    writer: "Mark De Leon",
    starring: ["Roann Mesina", "Shannon Timberlake"],
    synopsis: "When a night of friendship, desire, and resentment erupts into violence, a young woman trapped inside her own imagination must face the truth before silence becomes fatal.",
    heroImage: summerJazzHeroImage,
    mobileHeroImage: summerJazzMobileHeroImage,
    status: "library",
    previewUrl: "https://vimeo.com/1021491462",
  },
  {
    slug: "anita",
    title: "Anita",
    year: "2021",
    releaseDate: "2021",
    director: "Mark De Leon",
    writer: "Mark De Leon",
    starring: ["Riley Elyse", "Katrina Nicole"],
    synopsis: "A desperate scientist attempts to save his dying daughter by overwriting her consciousness into a young girl that sets off a chain of events leaving both girls fighting for their lives and futures.",
    heroImage: anitaHeroImage,
    status: "library",
    trailerUrl: "https://www.youtube.com/watch?v=FYVV0cvHGe8",
  },
  {
    slug: "as-one",
    title: "As One",
    year: "2021",
    releaseDate: "2021",
    director: "Gabriel Mayorquin",
    writer: "Gabriel Mayorquin",
    starring: ["Bobby Slaski", "Xander Bailey", "Addison Turner"],
    synopsis: "",
    heroImage: asOneHeroImage,
    status: "library",
    directorOfPhotography: "Mark De Leon",
    finePrint: "Includes an individual filmmaker credit. The project itself was produced outside of Revelry Cinema.",
    trailerUrl: "https://www.youtube.com/watch?v=x7_0WYtdsa0",
  },
];

export const getFilmBySlug = (slug: string): Film | undefined => {
  return films.find((film) => film.slug === slug);
};

export const getFilmsByStatus = (status: Film["status"]): Film[] => {
  return films.filter((film) => film.status === status);
};

export const getFeaturedFilm = (): Film => {
  return films[0];
};
