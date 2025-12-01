import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-32 pb-20 px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10 mb-8 -ml-4"
              data-testid="link-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Films
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12" data-testid="text-page-title">
            About
          </h1>
          
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              Revelry Cinema is an independent film production company dedicated to telling 
              compelling stories that resonate with audiences worldwide.
            </p>
            
            <p>
              Founded with a passion for authentic storytelling, we collaborate with talented 
              filmmakers to bring unique visions to life. Our catalog spans genres from 
              intimate dramas to thought-provoking sci-fi, each project chosen for its 
              artistic merit and emotional depth.
            </p>
            
            <p>
              We believe in the power of cinema to connect, inspire, and transform. Every 
              film we produce is a labor of love, crafted with attention to detail and a 
              commitment to excellence.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
