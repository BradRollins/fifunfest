import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const carouselImages = shuffle(
  Object.values(
    import.meta.glob<{ default: string }>(
      "/src/assets/gallery-carousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
      { eager: true }
    )
  ).map((mod) => mod.default)
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-hero font-bold text-center mb-16 text-foreground">
            Experience the Magic
          </h2>

          {carouselImages.length > 0 && (
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[autoplayPlugin.current]}
              className="relative"
            >
              <CarouselContent>
                {carouselImages.map((src, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      className="group cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-warm transition-all duration-300"
                      onClick={() => setSelectedImage(src)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={src}
                          alt={`FI FunFest event photo ${index + 1}`}
                          className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="Previous photo"
                className="left-2 sm:left-4 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
              />
              <CarouselNext
                aria-label="Next photo"
                className="right-2 sm:right-4 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
              />
            </Carousel>
          )}
        </div>
      </div>

      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-full border-none bg-transparent p-0 shadow-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged FI FunFest event photo"
              className="max-w-full max-h-[85vh] w-full object-contain rounded-lg shadow-glow"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
