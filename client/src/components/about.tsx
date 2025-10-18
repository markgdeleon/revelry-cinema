import founderImg from "@assets/generated_images/Founder_portrait_with_camera_equipment_f9e53309.png";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              About
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Revelry Cinema is the creative work of Kyle Tims, a filmmaker and photographer 
                exploring the intersection of narrative and visual art.
              </p>
              <p>
                Each project is an attempt to capture something ephemeral—a feeling, a moment, 
                a story that resonates beyond the frame. Working across film and photography, 
                the focus is on creating images that feel both intimate and cinematic.
              </p>
              <p>
                This is a space for experimentation, collaboration, and the ongoing pursuit 
                of compelling visual storytelling.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-md overflow-hidden">
              <img 
                src={founderImg} 
                alt="Kyle Tims"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
