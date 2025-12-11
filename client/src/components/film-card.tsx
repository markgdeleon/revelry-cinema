import { Link } from "wouter";

interface FilmCardProps {
  slug: string;
  title: string;
  year: string;
  image: string;
  status?: "coming-soon" | "now-available" | "library";
  releaseDate?: string;
}

export function FilmCard({ slug, title, year, image, status, releaseDate }: FilmCardProps) {
  return (
    <Link href={`/film/${slug}`}>
      <div 
        className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] cursor-pointer"
        data-testid={`card-film-${slug}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {slug === "lila-exe" && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded">
                Coming Soon
              </span>
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg leading-tight" data-testid={`text-film-title-${slug}`}>
              {title}
            </h3>
            <p className="text-white/60 text-sm mt-1">{year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
