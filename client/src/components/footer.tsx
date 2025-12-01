import { SiInstagram, SiFacebook, SiTiktok, SiX } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50">
            © {currentYear} Revelry Cinema. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              data-testid="link-instagram"
            >
              <SiInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              data-testid="link-facebook"
            >
              <SiFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              data-testid="link-tiktok"
            >
              <SiTiktok className="w-5 h-5" />
              <span className="sr-only">TikTok</span>
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              data-testid="link-x"
            >
              <SiX className="w-5 h-5" />
              <span className="sr-only">X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
