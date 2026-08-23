import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { openTicketCheckout } from "@/lib/tickets";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-warm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-hero font-bold text-xl text-foreground">
            FI FunFest
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <Link
              to="/our-story"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Our Story
            </Link>
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
            <Link
              to="/past-events"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Past Events
            </Link>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Location
            </button>
            <Button
              variant="hero"
              onClick={openTicketCheckout}
            >
              Get Tickets
            </Button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Button
              variant="hero"
              onClick={openTicketCheckout}
            >
              Tickets
            </Button>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="text-foreground p-2 -mr-2"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground hover:text-accent transition-colors font-medium text-left text-lg"
                >
                  About
                </button>
                <SheetClose asChild>
                  <Link
                    to="/our-story"
                    className="text-foreground hover:text-accent transition-colors font-medium text-lg"
                  >
                    Our Story
                  </Link>
                </SheetClose>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="text-foreground hover:text-accent transition-colors font-medium text-left text-lg"
                >
                  Schedule
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-foreground hover:text-accent transition-colors font-medium text-left text-lg"
                >
                  Gallery
                </button>
                <SheetClose asChild>
                  <Link
                    to="/past-events"
                    className="text-foreground hover:text-accent transition-colors font-medium text-lg"
                  >
                    Past Events
                  </Link>
                </SheetClose>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-foreground hover:text-accent transition-colors font-medium text-left text-lg"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-foreground hover:text-accent transition-colors font-medium text-left text-lg"
                >
                  Location
                </button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;