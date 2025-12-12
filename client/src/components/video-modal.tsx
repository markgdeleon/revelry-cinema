import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
    }
  }
  return null;
}

function getVimeoEmbedUrl(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (match) {
    return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
  }
  return null;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && videoUrl) {
      const youtube = getYouTubeEmbedUrl(videoUrl);
      if (youtube) {
        setEmbedUrl(youtube);
        return;
      }
      
      const vimeo = getVimeoEmbedUrl(videoUrl);
      if (vimeo) {
        setEmbedUrl(vimeo);
        return;
      }
      
      setEmbedUrl(null);
    }
  }, [isOpen, videoUrl]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      data-testid="video-modal"
    >
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-6 right-6 z-50 text-white hover:bg-white/10"
        onClick={onClose}
        data-testid="button-close-modal"
      >
        <X className="w-8 h-8" />
      </Button>
      
      <div className="relative z-10 w-full max-w-5xl mx-4 md:mx-8">
        {embedUrl ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title || "Video"}
            />
          </div>
        ) : (
          <div className="bg-zinc-900 p-8 text-center rounded-lg">
            <p className="text-white/70">Unable to embed this video.</p>
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline mt-2 inline-block"
            >
              Open in new tab
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
