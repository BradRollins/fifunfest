import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroLakeside from "@/assets/hero-lakeside-no-hills.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTicketClick = () => {
    window.open("https://buy.stripe.com/9B6eV69AD057bIq2hE3VC00", "_blank");
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroLakeside})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    >
      {/* Warm overlay with vignette */}
      <div className="absolute inset-0 bg-gradient-warm opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-hero font-bold text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-fade-in">
          FI FunFest
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-12 font-rubik font-light max-w-3xl mx-auto leading-relaxed animate-slide-up">
          A weekend of fun, connection and friendships at a lakeside retreat celebrating the FI Community!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={handleTicketClick}
          >
            Get Your Tickets Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-foreground/30 text-foreground hover:bg-foreground/10"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;