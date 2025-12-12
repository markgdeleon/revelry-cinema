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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const minSwipeDistance = 50;

  // Lock body scroll on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndY.current = null;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!touchStartY.current || !touchEndY.current || isTransitioning) return;
    
    const distance = touchStartY.current - touchEndY.current;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe && currentIndex < orderedFilms.length - 1) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => setIsTransitioning(false), 600);
    }
    if (isDownSwipe && currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 600);
    }

    touchStartY.current = null;
    touchEndY.current = null;
  };

  const currentFilm = orderedFilms[currentIndex];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Mobile: Fixed full-screen carousel with swipe gestures */}
      <div 
        className="md:hidden fixed inset-0 bg-black touch-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Stacked images - cinematic crossfade with scale */}
        {orderedFilms.map((film, index) => {
          const isActive = index === currentIndex;
          
          return (
            <div 
              key={film!.slug}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-105 z-0'
              }`}
              data-testid={`mobile-slide-${film!.slug}`}
            >
              <Link href={`/film/${film!.slug}`} className="block absolute inset-0">
                <img 
                  src={film!.mobileHeroImage || film!.heroImage} 
                  alt={film!.title}
                  className={`absolute inset-0 w-full h-full object-cover scale-[1.35] ${
                    film!.slug === 'summer-jazz' ? 'object-[45%_35%]' : 'object-[center_35%]'
                  }`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </Link>
            </div>
          );
        })}

        {/* Fixed navigation overlay - always on top */}
        <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
          <Navigation />
        </div>

        {/* Fixed film info overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 z-20 pointer-events-none">
          <Link href={`/film/${currentFilm!.slug}`} className="pointer-events-auto inline-block">
            <h2 
              className="text-4xl font-bold text-white mb-1 transition-all duration-300"
              data-testid="mobile-current-title"
            >
              {currentFilm!.title}
            </h2>
            <p className="text-white/70 text-lg">
              Directed by {currentFilm!.director}
            </p>
          </Link>
        </div>

        {/* Position indicator on right side */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-white/80 text-sm font-medium">{currentIndex + 1}</span>
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full bg-white transition-all duration-500 ease-out"
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
