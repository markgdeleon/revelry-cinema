import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface VideoHeroProps {
  title: string;
  year: string;
  slug: string;
  image: string;
  videoUrl?: string;
  releaseDate?: string;
  showTrailerButton?: boolean;
}

export function VideoHero({ 
  title, 
  year, 
  slug, 
  image, 
  videoUrl, 
  releaseDate,
  showTrailerButton = false 
}: VideoHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden" data-testid="section-hero">
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="video-hero-background"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="img-hero-background"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black" data-testid="div-hero-placeholder" />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
        <div className="max-w-3xl">
          {releaseDate && (
            <p className="text-white/70 text-sm md:text-base mb-2 uppercase tracking-wider">
              {releaseDate}
            </p>
          )}
          
          <Link href={`/film/${slug}`}>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 cursor-pointer hover:text-white/90 transition-colors"
              data-testid="text-hero-title"
            >
              {title}
            </h1>
          </Link>
          
          <div className="flex flex-wrap items-center gap-4">
            {showTrailerButton && (
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white gap-2"
                data-testid="button-play-trailer"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Trailer
              </Button>
            )}
            
            <Link href={`/film/${slug}`}>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black hover:bg-white/90 border-0"
                data-testid="button-view-film"
              >
                View Film
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
