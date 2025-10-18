import { Card, CardContent } from "@/components/ui/card";
import { Video, Camera, Sparkles } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Production",
    description: "Cinematic filmmaking services for commercials, branded content, events, and creative projects. Professional equipment and experienced crew to bring your vision to life.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional still photography for portraits, events, products, and landscapes. Capturing stunning moments with artistic composition and expert lighting techniques.",
  },
  {
    icon: Sparkles,
    title: "Creative Storytelling",
    description: "Blending visual narratives across video and photo to create compelling stories. From concept development to final delivery, we craft content that resonates.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional video and photography services tailored to your unique vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
