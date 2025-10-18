import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";
import { SiInstagram, SiFacebook, SiTiktok, SiX } from "react-icons/si";

export function Navigation() {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2 -ml-3"
            data-testid="link-home"
          >
            <Film className="w-7 h-7 text-primary" />
            <span className="font-serif text-2xl font-bold tracking-tight">Revelry Cinema</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-1">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("about")}
              data-testid="link-about"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("contact")}
              data-testid="link-contact"
            >
              Contact
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <a 
              href="https://www.instagram.com/revelry_cinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="nav-link-instagram"
            >
              <Button size="icon" variant="ghost">
                <SiInstagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>
            <a 
              href="https://www.facebook.com/revelrycinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="nav-link-facebook"
            >
              <Button size="icon" variant="ghost">
                <SiFacebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </a>
            <a 
              href="https://www.tiktok.com/@revelrycinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="nav-link-tiktok"
            >
              <Button size="icon" variant="ghost">
                <SiTiktok className="w-4 h-4" />
                <span className="sr-only">TikTok</span>
              </Button>
            </a>
            <a 
              href="https://x.com/revelrycinema" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="nav-link-x"
            >
              <Button size="icon" variant="ghost">
                <SiX className="w-4 h-4" />
                <span className="sr-only">X</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
