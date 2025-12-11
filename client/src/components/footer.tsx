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
            <span 
              className="text-white/50 cursor-default"
              data-testid="icon-instagram"
            >
              <SiInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </span>
            <span 
              className="text-white/50 cursor-default"
              data-testid="icon-facebook"
            >
              <SiFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </span>
            <span 
              className="text-white/50 cursor-default"
              data-testid="icon-tiktok"
            >
              <SiTiktok className="w-5 h-5" />
              <span className="sr-only">TikTok</span>
            </span>
            <span 
              className="text-white/50 cursor-default"
              data-testid="icon-x"
            >
              <SiX className="w-5 h-5" />
              <span className="sr-only">X</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
