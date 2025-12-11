import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import behindTheScenes from "@assets/A8B0829B-0ADC-446C-81D8-3E53A0CBFD0C_1765494189325.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-black relative">
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${behindTheScenes})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      
      <Navigation />
      
      <main className="relative pt-32 pb-20 px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12" data-testid="text-page-title">
            About
          </h1>
          
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              Revelry Cinema is a US and Philippines based film and media company focused on elevated genre storytelling, cross cultural narratives, and grounded sci fi with emotional depth. The company develops and produces feature films designed for both domestic and international markets, with a focus on strong characters, cinematic world building, and commercially viable stories.
            </p>
            
            <p>
              Founded by Mark De Leon, an 11 year US Navy veteran who transitioned into filmmaking, Revelry Cinema brings together a network of creatives, Navy veterans, and international collaborators. Its projects blend cinematic ambition with real world themes such as identity, technology, migration, ethics, and family while remaining financially disciplined and strategically positioned for global distribution.
            </p>
            
            <p>
              Revelry Cinema operates with a dual market approach by producing in both the US and the Philippines to maximize production value and international appeal. The company maintains strong relationships with actors, producers, and executives across Manila, Los Angeles, and emerging media communities throughout Asia.
            </p>
            
            <p>
              Revelry Cinema is building a brand centered on emotionally rich, culturally resonant, and commercially viable cinema.
            </p>
          </div>
          
          <Link href="/">
            <button 
              className="flex items-center text-white/70 hover:text-white text-sm transition-colors mt-12"
              data-testid="link-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Films
            </button>
          </Link>
        </div>
      </main>
      
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}
