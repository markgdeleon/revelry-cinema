import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import logo from "@assets/2_1760762996019.png";

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
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="px-6 pt-0 pb-4">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/10"
            data-testid="button-menu"
          >
            <Menu className="w-6 h-6" />
            <span className="sr-only">Menu</span>
          </Button>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:opacity-70 transition-opacity"
            data-testid="link-home"
          >
            <img 
              src={logo} 
              alt="Revelry Cinema" 
              className="w-48 sm:w-56 md:w-64 lg:w-80 h-auto"
            />
          </button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/10"
            data-testid="button-search"
          >
            <Search className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
