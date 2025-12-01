import { Navigation } from "@/components/navigation";
import { VideoHero } from "@/components/video-hero";
import { CarouselSection } from "@/components/carousel-section";
import { FilmCard } from "@/components/film-card";
import { Footer } from "@/components/footer";
import { films, getFeaturedFilm, getFilmsByStatus } from "@/lib/films-data";

export default function Home() {
  const featuredFilm = getFeaturedFilm();
  const comingSoonFilms = getFilmsByStatus("coming-soon");
  const nowAvailableFilms = getFilmsByStatus("now-available");
  const libraryFilms = getFilmsByStatus("library");

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main>
        <VideoHero
          title={featuredFilm.title}
          year={featuredFilm.year}
          slug={featuredFilm.slug}
          image={featuredFilm.heroImage}
          releaseDate={featuredFilm.status === "coming-soon" ? featuredFilm.releaseDate : undefined}
          showTrailerButton={false}
        />
        
        {comingSoonFilms.length > 0 && (
          <CarouselSection title="Coming Soon">
            {comingSoonFilms.map((film) => (
              <FilmCard
                key={film.slug}
                slug={film.slug}
                title={film.title}
                year={film.year}
                image={film.heroImage}
                status="coming-soon"
                releaseDate={film.releaseDate}
              />
            ))}
          </CarouselSection>
        )}

        {nowAvailableFilms.length > 0 && (
          <CarouselSection title="Now Available">
            {nowAvailableFilms.map((film) => (
              <FilmCard
                key={film.slug}
                slug={film.slug}
                title={film.title}
                year={film.year}
                image={film.heroImage}
                status="now-available"
              />
            ))}
          </CarouselSection>
        )}

        {libraryFilms.length > 0 && (
          <CarouselSection title="Library">
            {libraryFilms.map((film) => (
              <FilmCard
                key={film.slug}
                slug={film.slug}
                title={film.title}
                year={film.year}
                image={film.heroImage}
                status="library"
              />
            ))}
          </CarouselSection>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
