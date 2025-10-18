import weddingImg from "@assets/generated_images/Wedding_event_portfolio_sample_7c0ce777.png";
import corporateImg from "@assets/generated_images/Corporate_video_production_sample_b411da17.png";
import musicImg from "@assets/generated_images/Music_video_production_sample_545b74ba.png";
import fashionImg from "@assets/generated_images/Fashion_photography_portfolio_sample_ff1bd352.png";
import heroImg from "@assets/generated_images/Cinematic_film_production_hero_background_ac1e8d0b.png";
import landscapeImg from "@assets/generated_images/Landscape_photography_portfolio_sample_e6e431c1.png";

interface Film {
  id: number;
  title: string;
  year: number;
  image: string;
}

const films: Film[] = [
  { id: 1, title: "Golden Hour", year: 2025, image: weddingImg },
  { id: 2, title: "The Last Conversation", year: 2024, image: corporateImg },
  { id: 3, title: "Echoes", year: 2025, image: musicImg },
  { id: 4, title: "In Motion", year: 2024, image: fashionImg },
  { id: 5, title: "Threshold", year: 2025, image: heroImg },
  { id: 6, title: "Horizons", year: 2024, image: landscapeImg },
];

export function WorkGrid() {
  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {films.map((film) => (
            <div
              key={film.id}
              className="group"
              data-testid={`film-item-${film.id}`}
            >
              <div className="aspect-[2/3] bg-card rounded overflow-hidden mb-3">
                <img 
                  src={film.image} 
                  alt={film.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium mb-0.5">
                {film.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {film.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
