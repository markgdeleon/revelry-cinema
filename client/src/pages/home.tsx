import { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getFilmBySlug } from "@/lib/films-data";
import { Link } from "wouter";

const filmOrder = [
  "lila-exe",
  "revelry", 
  "anita",
  "summer-jazz",
  "as-one",
  "red-light-teachers",
  "the-master-chief",
];

export default function Home() {
  const orderedFilms = filmOrder
    .map(slug => getFilmBySlug(slug))
    .filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const slideHeight = container.clientHeight;
      const newIndex = Math.round(scrollTop / slideHeight);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < orderedFilms.length) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, orderedFilms.length]);

  const currentFilm = orderedFilms[currentIndex];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Mobile: Full-screen snap carousel */}
      <div className="md:hidden fixed inset-0 bg-black">
        {/* Scrollable image container */}
        <div 
          ref={scrollContainerRef}
          className="h-full w-full overflow-y-auto snap-y snap-mandatory hide-scrollbar"
        >
          {orderedFilms.map((film, index) => (
            <Link href={`/film/${film!.slug}`} key={film!.slug} className="block">
              <div 
                className="h-screen w-full snap-start snap-always relative"
                data-testid={`mobile-slide-${film!.slug}`}
              >
                <img 
                  src={film!.heroImage} 
                  alt={film!.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {/* Fixed film info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-12 pointer-events-none">
          <Link href={`/film/${currentFilm!.slug}`} className="pointer-events-auto">
            <h2 
              className="text-4xl font-bold text-white mb-1"
              data-testid="mobile-current-title"
            >
              {currentFilm!.title}
            </h2>
            <p className="text-white/70 text-lg">
              {currentFilm!.year}
            </p>
          </Link>
        </div>

        {/* Position indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <span className="text-white/80 text-sm font-medium">{currentIndex + 1}</span>
          <div className="w-px h-8 bg-white/30 relative">
            <div 
              className="absolute top-0 left-0 w-full bg-white transition-all duration-300"
              style={{ height: `${((currentIndex + 1) / orderedFilms.length) * 100}%` }}
            />
          </div>
          <span className="text-white/50 text-sm">{orderedFilms.length}</span>
        </div>
      </div>

      {/* Desktop: Original stacked sections */}
      <main className="relative hidden md:block">
        {orderedFilms.map((film, index) => (
          <Link href={`/film/${film!.slug}`} key={film!.slug} className="block">
            <section 
              className={`relative w-full overflow-hidden cursor-pointer group ${
                index === 0 ? 'min-h-screen' : 'h-[80vh]'
              }`}
              data-testid={`hero-section-${film!.slug}`}
            >
              <img 
                src={film!.heroImage} 
                alt={film!.title}
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] scale-[1.35] transition-transform duration-700 group-hover:scale-[1.40]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              
              {/* Desktop: overlay text */}
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
                {film!.slug === "lila-exe" && (
                  <p className="text-white/40 text-sm mt-2" data-testid="text-coming-soon">
                    Coming Soon
                  </p>
                )}
              </div>
            </section>
          </Link>
        ))}
        
        <Footer />
      </main>
    </div>
  );
}
