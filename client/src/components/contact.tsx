import { SiInstagram, SiFacebook, SiTiktok, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-medium mb-6">
          Contact
        </h2>
        
        <div className="space-y-4">
          <a 
            href="mailto:hello@revelrycinema.com"
            className="block text-base text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-email"
          >
            hello@revelrycinema.com
          </a>
          
          <div className="flex items-center gap-2 pt-2">
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
