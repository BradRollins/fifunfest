import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-warm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-hero font-bold text-xl text-foreground">
            FI FunFest
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("FAQ")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
               FAQ
            </button>
            <button
              onClick={() => scrollToSection("Location")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Location
            </button>
            <Button 
              variant="hero"
              onClick={() => window.open("https://buy.stripe.com/9B6eV69AD057bIq2hE3VC00", "_blank")}
            >
              Get Tickets
            </Button>
          </div>
          
          <Button 
            variant="hero" 
            className="md:hidden"
            onClick={() => window.open("https://buy.stripe.com/9B6eV69AD057bIq2hE3VC00", "_blank")}
          >
            Tickets
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;