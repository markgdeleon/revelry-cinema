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
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-8 h-8 text-primary" />
              <span className="font-serif text-2xl font-bold">Revelry Cinema</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Professional video production and photography services. 
              Creating cinematic stories that resonate.
            </p>
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
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@revelrycinema.com</li>
              <li>(555) 123-4567</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Revelry Cinema. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
