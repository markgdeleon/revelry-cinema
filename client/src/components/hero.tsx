import { Link } from "wouter";
import heroImage from "@assets/Stills_1.1.1_1.13.1_1760764423350.jpg";

const films = [
  { title: "Lila.exe", year: "Coming Soon", slug: "lila-exe" },
  { title: "The Handy Man", year: "Coming Soon", slug: "the-handy-man" },
  { title: "Red Light Teachers", year: "2025", slug: "red-light-teachers" },
  { title: "Revelry", year: "2024", slug: "revelry" },
  { title: "The Master Chief", year: "2023", slug: "the-master-chief" },
  { title: "Summer Jazz", year: "2022", slug: "summer-jazz" },
  { title: "Anita", year: "2021", slug: "anita" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 px-8 sm:px-12 lg:px-16 pt-56 md:pt-64 lg:pt-72 pb-32 w-full">
        <div className="space-y-1">
          {films.map((film, index) => (
            <Link 
              key={index}
              href={`/films/${film.slug}`}
            >
              <div 
                className="flex items-baseline gap-4 group cursor-pointer"
                data-testid={`film-${index}`}
              >
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight group-hover:opacity-70 transition-opacity">
                  {film.title}
                </h2>
                <span className="text-white/60 text-lg sm:text-xl md:text-2xl">
                  {film.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
