import { useRef, useState } from "react";
import { Play, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import posterImage from "@/assets/Video Image.jpg";

const VIDEO_SRC = "/videos/funfest-2025-highlights.mp4";

const ScheduleVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const handleLightboxOpenChange = (open: boolean) => {
    setIsLightboxOpen(open);
    if (!open) {
      lightboxVideoRef.current?.pause();
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full h-full">
      <span className="text-sm text-foreground/80">
        🎥 Watch 2025 Field Day Action
      </span>

      <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
        {isPlaying ? (
          <video
            className="w-full h-full object-cover"
            src={VIDEO_SRC}
            controls
            autoPlay
            playsInline
            preload="none"
          />
        ) : (
          <button
            type="button"
            className="group absolute inset-0 w-full h-full"
            onClick={() => setIsPlaying(true)}
            aria-label="Play 2025 highlights video"
          >
            <img
              src={posterImage}
              alt="2025 FunFest highlights preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 text-black fill-black ml-0.5" />
              </span>
            </div>
          </button>
        )}

        <button
          type="button"
          className="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 rounded-md bg-black/50 text-white hover:bg-black/70 transition-colors"
          onClick={() => setIsLightboxOpen(true)}
          aria-label="View larger video"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      <Dialog open={isLightboxOpen} onOpenChange={handleLightboxOpenChange}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
          <DialogTitle className="sr-only">2025 FunFest Highlights</DialogTitle>
          <video
            ref={lightboxVideoRef}
            className="w-full aspect-video"
            src={VIDEO_SRC}
            controls
            autoPlay
            playsInline
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ScheduleVideo;
