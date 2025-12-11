import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import slateImage from "@assets/DSC_9401_1765493489915.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-32 pb-20 px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12" data-testid="text-page-title">
            Contact
          </h1>
          
          <div className="mb-12">
            <img 
              src={slateImage} 
              alt="Revelry Cinema film slate" 
              className="w-full max-w-md rounded-sm"
              data-testid="img-slate"
            />
          </div>

          <div>
            <h2 className="text-white/50 text-sm uppercase tracking-wider mb-4">Email</h2>
            <a 
              href="mailto:team@revelrycinema.com"
              className="text-white text-xl hover:text-white/80 transition-colors inline-flex items-center gap-3"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5" />
              team@revelrycinema.com
            </a>
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
      
      <Footer />
    </div>
  );
}
