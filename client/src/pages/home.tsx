import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getFilmBySlug } from "@/lib/films-data";
import { Link } from "wouter";

// Custom order as specified
const filmOrder = [
  "lila-exe",
  "revelry", 
  "anita",
  "as-one",
  "red-light-teachers",
  "the-handy-man",
  "the-master-chief",
  "summer-jazz",
];

export default function Home() {
  const orderedFilms = filmOrder
    .map(slug => getFilmBySlug(slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main>
        {orderedFilms.map((film, index) => (
          <Link href={`/film/${film!.slug}`} key={film!.slug}>
            <section 
              className={`relative w-full overflow-hidden cursor-pointer group ${
                index === 0 ? 'h-screen' : 'h-[80vh]'
              }`}
              data-testid={`hero-section-${film!.slug}`}
            >
              <img 
                src={film!.heroImage} 
                alt={film!.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                <h2 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 transition-transform duration-300 group-hover:translate-x-2"
                  data-testid={`text-title-${film!.slug}`}
                >
                  {film!.title}
                </h2>
                <p className="text-white/60 text-lg md:text-xl" data-testid={`text-director-${film!.slug}`}>
                  Directed by {film!.director}
                </p>
              </div>
            </section>
          </Link>
        ))}
      </main>
      
      <Footer />
    </div>
  );
}
