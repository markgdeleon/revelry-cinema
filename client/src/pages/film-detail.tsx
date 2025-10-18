import { useParams, Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const filmsData = {
  "lila-exe": {
    title: "Lila.exe",
    year: "Coming Soon",
    releaseDate: "TBA",
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "Coming Soon",
    heroImage: "",
    posters: []
  },
  "the-handy-man": {
    title: "The Handy Man",
    year: "Coming Soon",
    releaseDate: "TBA",
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "Coming Soon",
    heroImage: "",
    posters: []
  },
  "red-light-teachers": {
    title: "Red Light Teachers",
    year: "2025",
    releaseDate: "2025",
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "",
    heroImage: "",
    posters: []
  },
  "revelry": {
    title: "Revelry",
    year: "2024",
    releaseDate: "2024",
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "",
    heroImage: "",
    posters: []
  },
  "the-master-chief": {
    title: "The Master Chief",
    year: "2023",
    releaseDate: "2023",
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "",
    heroImage: "",
    posters: []
  },
  "summer-jazz": {
    title: "Summer Jazz",
    year: "2022",
    releaseDate: "2022",
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "",
    heroImage: "",
    posters: []
  },
  "anita": {
    title: "Anita",
    year: "2021",
    releaseDate: "2021",
    director: "Kyle Tims",
    writer: "Kyle Tims",
    starring: [],
    synopsis: "",
    heroImage: "",
    posters: []
  }
};

export default function FilmDetail() {
  const params = useParams();
  const filmSlug = params.slug as string;
  const film = filmsData[filmSlug as keyof typeof filmsData];

  if (!film) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium mb-4">Film Not Found</h1>
          <Link href="/">
            <Button variant="outline" data-testid="link-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-48 md:pt-56 lg:pt-64">
        {film.heroImage && (
          <div className="w-full aspect-video bg-muted">
            <img 
              src={film.heroImage} 
              alt={film.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 relative z-50">
          <Button 
            variant="ghost" 
            className="mb-8 -ml-4 relative z-50"
            data-testid="button-back"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Films
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-12" data-testid="text-film-title">
                {film.title}
              </h1>
            </div>

            <div className="space-y-8">
              <div>
                <h6 className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Release Date</h6>
                <h3 className="text-2xl font-medium" data-testid="text-release-date">{film.releaseDate}</h3>
              </div>

              <div>
                <h6 className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Directed by</h6>
                <h3 className="text-2xl font-medium" data-testid="text-director">{film.director}</h3>
              </div>

              {film.writer && (
                <div>
                  <h6 className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Written by</h6>
                  <h3 className="text-2xl font-medium" data-testid="text-writer">{film.writer}</h3>
                </div>
              )}

              {film.starring && film.starring.length > 0 && (
                <div>
                  <h6 className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Starring</h6>
                  <div className="space-y-1">
                    {film.starring.map((actor, index) => (
                      <h3 key={index} className="text-2xl font-medium">{actor}</h3>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {film.synopsis && (
            <div className="mb-16">
              <h6 className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Synopsis</h6>
              <p className="text-xl leading-relaxed max-w-3xl" data-testid="text-synopsis">
                {film.synopsis}
              </p>
            </div>
          )}

          {film.posters && film.posters.length > 0 && (
            <div>
              <h6 className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Posters</h6>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {film.posters.map((poster, index) => (
                  <div key={index} className="aspect-[2/3] bg-muted">
                    <img 
                      src={poster} 
                      alt={`${film.title} poster ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
