import { Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiTiktok, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-8">
          Get in Touch
        </h2>
        
        <div className="space-y-6">
          <a 
            href="mailto:hello@revelrycinema.com"
            className="inline-flex items-center gap-3 text-xl text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-email"
          >
            <Mail className="w-6 h-6" />
            hello@revelrycinema.com
          </a>
          
          <div className="flex items-center justify-center gap-2 pt-4">
            <a 
              href="https://www.instagram.com/revelry_cinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-instagram"
            >
              <Button size="icon" variant="ghost">
                <SiInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>
            <a 
              href="https://www.facebook.com/revelrycinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-facebook"
            >
              <Button size="icon" variant="ghost">
                <SiFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </a>
            <a 
              href="https://www.tiktok.com/@revelrycinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-tiktok"
            >
              <Button size="icon" variant="ghost">
                <SiTiktok className="w-5 h-5" />
                <span className="sr-only">TikTok</span>
              </Button>
            </a>
            <a 
              href="https://x.com/revelrycinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-x"
            >
              <Button size="icon" variant="ghost">
                <SiX className="w-5 h-5" />
                <span className="sr-only">X</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
