import lilaHeroImage from "@assets/nadine lustre_1760766907028.webp";
import handyManHeroImage from "@assets/Still_2025-03-05_213435_1.1.2_1760767492927.jpg";
import redLightTeachersHeroImage from "@assets/Still_2024-11-24_133853_1.1.10_1760767953179.jpg";
import revelryPlaceholder from "@assets/generated_images/revelry_film_placeholder_image.png";
import masterChiefHeroImage from "@assets/master-chief-still.jpg";
import summerJazzPlaceholder from "@assets/generated_images/summer_jazz_film_placeholder.png";
import anitaPlaceholder from "@assets/generated_images/anita_film_placeholder_image.png";
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
    slug: "the-handy-man",
    title: "The Handy Man",
    year: "Coming Soon",
    releaseDate: "TBA",
    director: "Chris Soriano",
    writer: "Chris Soriano",
    starring: ["Chris Soriano", "Jaime Gray"],
    synopsis: "A broken man and a determined woman fight over a crumbling italian villa and end up restoring each other instead.",
    heroImage: handyManHeroImage,
    status: "coming-soon",
    executiveProducer: "Hillary Soriano",
    producer: "Mark De Leon",
    finePrint: "Includes an individual producer credit. The project itself was produced outside of Revelry Cinema.",
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
    year: "Coming Soon",
    releaseDate: "TBA",
    director: "Mark De Leon",
    writer: "Mark De Leon",
    starring: [],
    synopsis: "",
    heroImage: revelryPlaceholder,
    status: "library",
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
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "",
    heroImage: summerJazzPlaceholder,
    status: "library",
  },
  {
    slug: "anita",
    title: "Anita",
    year: "2021",
    releaseDate: "2021",
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "",
    heroImage: anitaPlaceholder,
    status: "library",
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
