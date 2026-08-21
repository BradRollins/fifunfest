import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const FEATURED_FIRST_PHOTO = "584693472_10214082362968642_663001900185099954_n";

const pastEventPhotos = Object.entries(
  import.meta.glob<{ default: string }>(
    "/src/assets/past-events-2025/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true },
  ),
)
  .sort(([pathA], [pathB]) => {
    const aFirst = pathA.includes(FEATURED_FIRST_PHOTO);
    const bFirst = pathB.includes(FEATURED_FIRST_PHOTO);
    if (aFirst && !bFirst) return -1;
    if (bFirst && !aFirst) return 1;
    return pathA.localeCompare(pathB);
  })
  .map(([, mod]) => mod.default);

const PastEvents = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Past Events - FI FunFest";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 pt-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-hero font-bold text-foreground text-center mb-8">
              Past Events
            </h1>

            <div className="text-center mb-16">
              <h2 className="text-2xl font-hero font-semibold text-foreground">
                FI FunFest 2025 (the inaugural event)
              </h2>
              <p className="text-foreground/70 mt-2">
                November 14–16, 2025 · Montgomery Center, Starke, FL
              </p>
            </div>

            <p className="font-rubik text-foreground leading-relaxed max-w-3xl mx-auto mb-16">
              The first-ever FI FunFest was such a meaningful and rewarding
              experience for us. We were nervous going into it – this was the
              first time we'd ever hosted a weekend retreat like this, and
              wondered: would this be a flop or would people actually enjoy it?
              But in the end, it all came together, the location was wonderful
              and the dynamic and flow of the entire weekend turned out better
              than we could have anticipated. To say it was a rich rewarding
              experience for us is an understatement. Thank you to everyone who
              made the FI FunFest such an amazing event – it wouldn’t be
              possible without the glorious FI community and the people who make
              it what it is! A few pics below for memory’s sake!
            </p>

            {pastEventPhotos.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {pastEventPhotos.map((src, index) => (
                  <div
                    key={index}
                    className="cursor-pointer overflow-hidden rounded-xl bg-card shadow-md aspect-square"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img
                      src={src}
                      alt={`FI FunFest 2025 photo ${index + 1}`}
                      className="rounded-xl w-full h-full object-contain hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-full border-none bg-transparent p-0 shadow-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged FI FunFest 2025 photo"
              className="max-w-full max-h-[85vh] w-full object-contain rounded-lg shadow-glow"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PastEvents;
