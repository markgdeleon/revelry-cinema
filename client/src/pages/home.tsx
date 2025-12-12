import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getFilmBySlug } from "@/lib/films-data";
import { Link } from "wouter";

// Custom order as specified
const filmOrder = [
  "lila-exe",
  "revelry", 
  "anita",
  "summer-jazz",
  "as-one",
  "red-light-teachers",
  "the-handy-man",
  "the-master-chief",
];

export default function Home() {
  const orderedFilms = filmOrder
    .map(slug => getFilmBySlug(slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="relative">
        {orderedFilms.map((film, index) => (
          <Link href={`/film/${film!.slug}`} key={film!.slug}>
            <section 
              className={`relative w-full overflow-hidden cursor-pointer group ${
                index === 0 ? 'md:min-h-screen' : 'md:h-[80vh]'
              }`}
              data-testid={`hero-section-${film!.slug}`}
            >
              <img 
                src={film!.heroImage} 
                alt={film!.title}
                className="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full md:object-cover md:object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              
              {/* Mobile: text below image */}
              <div className="md:hidden bg-black px-4 pt-2 pb-3">
                <h2 
                  className="text-2xl font-bold text-white mb-1"
                  data-testid={`text-title-mobile-${film!.slug}`}
                >
                  {film!.title}
                </h2>
                <p className="text-white/60 text-sm">
                  Directed by {film!.director}
                </p>
                {film!.slug === "lila-exe" && (
                  <p className="text-white/40 text-xs mt-1">
                    Coming Soon
                  </p>
                )}
              </div>
              
              {/* Desktop: overlay text */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                <h2 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 transition-transform duration-300 group-hover:translate-x-2"
                  data-testid={`text-title-${film!.slug}`}
                >
                  {film!.title}
                </h2>
                <p className="text-white/60 text-lg md:text-xl" data-testid={`text-director-${film!.slug}`}>
                  Directed by {film!.director}
                </p>
                {film!.slug === "lila-exe" && (
                  <p className="text-white/40 text-sm mt-2" data-testid="text-coming-soon">
                    Coming Soon
                  </p>
                )}
              </div>
            </section>
          </Link>
        ))}
      </main>
      
      <Footer />
    </div>
  );
}
