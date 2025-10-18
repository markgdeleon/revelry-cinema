import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart } from "lucide-react";
import founderImg from "@assets/generated_images/Founder_portrait_with_camera_equipment_f9e53309.png";

const stats = [
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: Heart, label: "Projects Completed", value: "500+" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About Revelry Cinema
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded by Kyle Tims, Revelry Cinema combines a passion for filmmaking and 
                photography with an entrepreneurial spirit to deliver exceptional visual content 
                that tells compelling stories.
              </p>
              <p>
                We specialize in dynamic, cinematic storytelling through motion pictures and 
                still photography. Whether it's a commercial campaign, event coverage, or 
                creative project, we approach every assignment with the same dedication to 
                craft and attention to detail.
              </p>
              <p>
                Our goal is simple: to create visual narratives that resonate with audiences 
                and exceed our clients' expectations. We believe that great storytelling 
                comes from understanding your vision and bringing it to life with technical 
                expertise and creative passion.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} data-testid={`stat-${index}`}>
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="font-serif text-3xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-md overflow-hidden">
              <img 
                src={founderImg} 
                alt="Kyle Tims, Founder of Revelry Cinema"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
