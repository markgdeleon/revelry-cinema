import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import logo from "@assets/2_1760762996019.png";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomepage = location === "/";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        <div className="px-6 md:px-12 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile: Menu on left, logo on right */}
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/10 md:hidden pointer-events-auto"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="button-menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">Menu</span>
            </Button>
            
            {/* Desktop: Logo on left */}
            <div className="hidden md:flex items-center gap-6 pointer-events-auto">
              <Link href="/">
                <button 
                  className="hover:opacity-80 transition-opacity"
                  data-testid="link-home"
                >
                  <img 
                    src={logo} 
                    alt="Revelry Cinema" 
                    className="w-56 lg:w-64 h-auto"
                  />
                </button>
              </Link>
            </div>
            
            {/* Mobile: Logo on right side */}
            <div className="md:hidden pointer-events-auto">
              <Link href="/">
                <button 
                  className="hover:opacity-80 transition-opacity"
                  data-testid="link-home-mobile"
                >
                  <img 
                    src={logo} 
                    alt="Revelry Cinema" 
                    className="w-28 h-auto"
                  />
                </button>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
              <Link href="/about">
                <span className="text-white/80 hover:text-white text-sm uppercase tracking-wider cursor-pointer transition-colors" data-testid="link-about">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-white/80 hover:text-white text-sm uppercase tracking-wider cursor-pointer transition-colors" data-testid="link-contact">
                  Contact
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <span className="text-white text-2xl uppercase tracking-wider" data-testid="mobile-link-films">
                Films
              </span>
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <span className="text-white text-2xl uppercase tracking-wider" data-testid="mobile-link-about">
                About
              </span>
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <span className="text-white text-2xl uppercase tracking-wider" data-testid="mobile-link-contact">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
