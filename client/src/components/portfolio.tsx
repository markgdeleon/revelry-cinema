import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import weddingImg from "@assets/generated_images/Wedding_event_portfolio_sample_7c0ce777.png";
import commercialImg from "@assets/generated_images/Commercial_product_photography_sample_e1516451.png";
import landscapeImg from "@assets/generated_images/Landscape_photography_portfolio_sample_e6e431c1.png";
import corporateImg from "@assets/generated_images/Corporate_video_production_sample_b411da17.png";
import portraitImg from "@assets/generated_images/Portrait_photography_portfolio_sample_2b541136.png";
import musicImg from "@assets/generated_images/Music_video_production_sample_545b74ba.png";
import architecturalImg from "@assets/generated_images/Architectural_photography_portfolio_sample_7b2dc01a.png";
import fashionImg from "@assets/generated_images/Fashion_photography_portfolio_sample_ff1bd352.png";

type Category = "all" | "video" | "photo" | "commercial" | "events";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category[];
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Wedding Cinema", category: ["video", "events"], image: weddingImg },
  { id: 2, title: "Product Commercial", category: ["video", "commercial", "photo"], image: commercialImg },
  { id: 3, title: "Landscape Series", category: ["photo"], image: landscapeImg },
  { id: 4, title: "Corporate Interview", category: ["video", "commercial"], image: corporateImg },
  { id: 5, title: "Portrait Session", category: ["photo"], image: portraitImg },
  { id: 6, title: "Music Video", category: ["video"], image: musicImg },
  { id: 7, title: "Architectural Photography", category: ["photo", "commercial"], image: architecturalImg },
  { id: 8, title: "Fashion Campaign", category: ["photo", "video", "commercial"], image: fashionImg },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "video", label: "Video" },
  { id: "photo", label: "Photo" },
  { id: "commercial", label: "Commercial" },
  { id: "events", label: "Events" },
] as const;

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  
  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.includes(activeCategory));

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            A showcase of our recent video production and photography projects
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id as Category)}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-md overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.category.map((cat) => (
                      <Badge key={cat} variant="secondary" className="capitalize">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
