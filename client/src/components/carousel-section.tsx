import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSectionProps {
  title: string;
  children: React.ReactNode;
}

export function CarouselSection({ title, children }: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16" data-testid={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
          {title}
        </h2>
        <div className="hidden md:flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            className="text-white/60 hover:text-white hover:bg-white/10"
            data-testid={`button-scroll-left-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="text-white/60 hover:text-white hover:bg-white/10"
            data-testid={`button-scroll-right-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto carousel-scroll px-6 md:px-12 lg:px-16 pb-4"
      >
        {children}
      </div>
    </section>
  );
}
