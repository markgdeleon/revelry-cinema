import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import slateImage from "@assets/DSC_9401_1765493489915.jpg";

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
          
          <div className="mb-12">
            <img 
              src={slateImage} 
              alt="Revelry Cinema film slate" 
              className="w-full max-w-lg rounded-sm"
              data-testid="img-slate"
            />
          </div>
          
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
