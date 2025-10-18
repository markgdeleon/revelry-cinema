import { Film } from "lucide-react";
import { SiInstagram, SiFacebook, SiTiktok, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl font-bold">Revelry Cinema</span>
          </div>
          
          <div className="flex items-center gap-2">
            <a 
              href="https://www.instagram.com/revelry_cinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="footer-link-instagram"
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
              data-testid="footer-link-facebook"
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
              data-testid="footer-link-tiktok"
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
              data-testid="footer-link-x"
            >
              <Button size="icon" variant="ghost">
                <SiX className="w-5 h-5" />
                <span className="sr-only">X</span>
              </Button>
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button 
              onClick={() => scrollToSection("about")}
              className="hover:text-foreground transition-colors"
              data-testid="footer-link-about"
            >
              About
            </button>
            <span>·</span>
            <button 
              onClick={() => scrollToSection("contact")}
              className="hover:text-foreground transition-colors"
              data-testid="footer-link-contact"
            >
              Contact
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Revelry Cinema. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
