import { useParams, Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CarouselSection } from "@/components/carousel-section";
import { FilmCard } from "@/components/film-card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFilmBySlug, films } from "@/lib/films-data";

export default function FilmDetail() {
  const params = useParams();
  const filmSlug = params.slug as string;
  const film = getFilmBySlug(filmSlug);

  if (!film) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Film Not Found</h1>
          <Link href="/">
            <Button variant="outline" className="bg-white text-black hover:bg-white/90 border-0" data-testid="link-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Films
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherFilms = films.filter(f => f.slug !== filmSlug).slice(0, 4);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main>
        {film.heroImage ? (
          <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
            <img 
              src={film.heroImage} 
              alt={film.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-white/70 hover:text-white hover:bg-white/10 mb-6 -ml-4"
                  data-testid="link-back"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Films
                </Button>
              </Link>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white" data-testid="text-film-title">
                {film.title}
              </h1>
            </div>
          </section>
        ) : (
          <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-white/70 hover:text-white hover:bg-white/10 mb-6 -ml-4"
                  data-testid="link-back"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Films
                </Button>
              </Link>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white" data-testid="text-film-title">
                {film.title}
              </h1>
            </div>
          </section>
        )}

        <section className="px-8 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">Release Date</h3>
                <p className="text-white text-lg" data-testid="text-release-date">{film.releaseDate}</p>
              </div>
              
              <div>
                <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">Director</h3>
                <p className="text-white text-lg" data-testid="text-director">{film.director}</p>
              </div>
              
              <div>
                <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">Writer</h3>
                <p className="text-white text-lg" data-testid="text-writer">{film.writer}</p>
              </div>
              
              {film.starring.length > 0 && (
                <div>
                  <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">Starring</h3>
                  <p className="text-white text-lg" data-testid="text-starring">{film.starring.join(", ")}</p>
                </div>
              )}
            </div>
            
            {film.synopsis && (
              <div className="mb-12">
                <h3 className="text-white/50 text-sm uppercase tracking-wider mb-4">Logline</h3>
                <p className="text-white/80 text-xl leading-relaxed" data-testid="text-synopsis">
                  {film.synopsis}
                </p>
              </div>
            )}
            
            {film.finePrint && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm italic" data-testid="text-fine-print">
                  {film.finePrint}
                </p>
              </div>
            )}
          </div>
        </section>

        {otherFilms.length > 0 && (
          <CarouselSection title="More Films">
            {otherFilms.map((f) => (
              <FilmCard
                key={f.slug}
                slug={f.slug}
                title={f.title}
                year={f.year}
                image={f.heroImage}
                status={f.status}
              />
            ))}
          </CarouselSection>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
