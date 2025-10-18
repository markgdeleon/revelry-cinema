import { useState } from "react";
import { Button } from "@/components/ui/button";

import weddingImg from "@assets/generated_images/Wedding_event_portfolio_sample_7c0ce777.png";
import commercialImg from "@assets/generated_images/Commercial_product_photography_sample_e1516451.png";
import landscapeImg from "@assets/generated_images/Landscape_photography_portfolio_sample_e6e431c1.png";
import corporateImg from "@assets/generated_images/Corporate_video_production_sample_b411da17.png";
import portraitImg from "@assets/generated_images/Portrait_photography_portfolio_sample_2b541136.png";
import musicImg from "@assets/generated_images/Music_video_production_sample_545b74ba.png";
import architecturalImg from "@assets/generated_images/Architectural_photography_portfolio_sample_7b2dc01a.png";
import fashionImg from "@assets/generated_images/Fashion_photography_portfolio_sample_ff1bd352.png";

type Category = "all" | "film" | "photo";

interface Project {
  id: number;
  title: string;
  year: string;
  category: Category[];
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Golden Hour", year: "2025", category: ["film"], image: weddingImg },
  { id: 2, title: "Still Life", year: "2024", category: ["photo"], image: commercialImg },
  { id: 3, title: "Horizons", year: "2024", category: ["photo"], image: landscapeImg },
  { id: 4, title: "Conversations", year: "2025", category: ["film"], image: corporateImg },
  { id: 5, title: "Portraits", year: "2024", category: ["photo"], image: portraitImg },
  { id: 6, title: "Echoes", year: "2025", category: ["film"], image: musicImg },
  { id: 7, title: "Structure", year: "2024", category: ["photo"], image: architecturalImg },
  { id: 8, title: "Movement", year: "2025", category: ["film", "photo"], image: fashionImg },
];

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Button
            variant={activeCategory === "all" ? "default" : "ghost"}
            onClick={() => setActiveCategory("all")}
            data-testid="button-filter-all"
          >
            All
          </Button>
          <Button
            variant={activeCategory === "film" ? "default" : "ghost"}
            onClick={() => setActiveCategory("film")}
            data-testid="button-filter-film"
          >
            Film
          </Button>
          <Button
            variant={activeCategory === "photo" ? "default" : "ghost"}
            onClick={() => setActiveCategory("photo")}
            data-testid="button-filter-photo"
          >
            Photo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[3/4] rounded-md overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`project-item-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-3xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
