import { useState } from "react";
import { Card } from "@/components/ui/card";
import gallery1 from "@/assets/joint_meetup.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/friday_coffee.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      alt: "Lakeside retreat activities - canoeing, campfire, and outdoor fun",
      title: "Community Activities"
    },
    {
      src: gallery2,
      alt: "Beautiful lakeside cabins surrounded by pine trees at golden hour",
      title: "Peaceful Accommodations"
    },
    {
      src: gallery3,
      alt: "Happy community group photo at lakeside retreat",
      title: "FI Community Connections"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-hero font-bold text-center mb-16 text-foreground">
            Experience the Magic
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="group cursor-pointer overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-warm transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-hero font-semibold text-foreground">
                    {image.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Note for editing */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              Gallery images can be easily updated by replacing the image files in the assets folder
            </p>
          </div>
        </div>
      </div>
      
      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-glow"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-foreground bg-background/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-background/80 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;