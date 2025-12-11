import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiTiktok, SiX } from "react-icons/si";
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

          <div className="space-y-12">
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
            
            <div>
              <h2 className="text-white/50 text-sm uppercase tracking-wider mb-6">Follow Us</h2>
              <div className="flex items-center gap-6">
                <span 
                  className="text-white/50 cursor-default"
                  data-testid="icon-instagram"
                >
                  <SiInstagram className="w-8 h-8" />
                  <span className="sr-only">Instagram</span>
                </span>
                <span 
                  className="text-white/50 cursor-default"
                  data-testid="icon-facebook"
                >
                  <SiFacebook className="w-8 h-8" />
                  <span className="sr-only">Facebook</span>
                </span>
                <span 
                  className="text-white/50 cursor-default"
                  data-testid="icon-tiktok"
                >
                  <SiTiktok className="w-8 h-8" />
                  <span className="sr-only">TikTok</span>
                </span>
                <span 
                  className="text-white/50 cursor-default"
                  data-testid="icon-x"
                >
                  <SiX className="w-8 h-8" />
                  <span className="sr-only">X</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
