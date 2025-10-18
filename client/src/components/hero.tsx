import heroImage from "@assets/generated_images/Cinematic_film_production_hero_background_ac1e8d0b.png";

const films = [
  { title: "Golden Hour", year: "2025" },
  { title: "The Last Conversation", year: "2024" },
  { title: "Echoes", year: "2025" },
  { title: "In Motion", year: "2024" },
  { title: "Threshold", year: "2025" },
  { title: "Horizons", year: "2024" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 px-8 sm:px-12 lg:px-16 pt-24 md:pt-28 pb-32 w-full">
        <div className="space-y-1">
          {films.map((film, index) => (
            <div 
              key={index}
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
