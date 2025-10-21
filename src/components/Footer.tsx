import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleTicketClick = () => {
    window.open("https://buy.stripe.com/9B6eV69AD057bIq2hE3VC00", "_blank");
  };

  const openMap = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=88+SE+75th+St+Starke+FL+32091", "_blank");
  };

  return (
    <footer className="bg-deep-forest text-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Call to Action */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-hero font-bold mb-4">
              Ready for an Unforgettable Weekend?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the FI community for a weekend of connection, fun, and memories that will last a lifetime.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleTicketClick}
              className="text-xl px-12 py-6"
            >
              Secure Your Spot Now
            </Button>
          </div>
          
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 border-t border-border/30 pt-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-hero font-semibold mb-4 text-accent">
                Contact
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: fifunfest@gmail.com</p>
                <p>Questions? We're here to help!</p>
              </div>
            </div>
            
            {/* Location */}
            <div>
              <h4 className="text-xl font-hero font-semibold mb-4 text-accent">
                Location
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Montgomery Center</p>
                <p>88 SE 75th St</p>
                <p>Starke, FL 32091</p>
                <button 
                  onClick={openMap}
                  className="text-accent hover:text-accent/80 transition-colors text-sm underline"
                >
                  View on Map
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-hero font-semibold mb-4 text-accent">
                Connect
              </h4>
              <div className="space-y-3">
                <a 
                  href="https://www.facebook.com/groups/fifunfest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  FI FunFest Facebook Community
                </a>
                <a 
                  href="https://instagram.com/fifunfest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  Instagram Updates
                </a>
                <a 
                  href="https://twitter.com/fifunfest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  Twitter News
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border/30 pt-8 mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 FI FunFest. Made with ❤️ for the FI community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;