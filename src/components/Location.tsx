import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Location = () => {
  const openDirections = () => {
    window.open("https://www.google.com/maps/place/88+SE+75th+St,+Starke,+FL+32091", "_blank");
  };

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-hero font-bold text-center mb-16 text-foreground">
            Your FI Retreat Destination
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Location Details */}
            <div className="space-y-8">
              <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm">
                <h3 className="text-2xl font-hero font-semibold mb-6 text-accent">
                  Montgomery Center
                </h3>
                <div className="space-y-4">
                  <div className="text-lg text-foreground">
                    <p>88 SE 75th St</p>
                    <p>Starke, FL 32091</p>
                  </div>
                  <Button 
                    variant="hero" 
                    onClick={openDirections}
                    className="w-full md:w-auto"
                  >
                    Get Directions
                  </Button>
                </div>
              </Card>
              
              <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm">
                <h3 className="text-xl font-hero font-semibold mb-4 text-accent">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">🏞️</span>
                    Beautiful lakeside setting surrounded by nature
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">🏠</span>
                    Cozy camp-style cabins with lake views
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">🐕</span>
                    Pet-friendly accommodations available
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">🚗</span>
                    Easy access with on-site parking
                  </li>
                </ul>
              </Card>
            </div>
            
            {/* Map Embed */}
<div className="space-y-8">
  <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
    <div className="h-96 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.7891234567!2d-82.10876!3d29.94712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8358f123456!2s88+SE+75th+St%2C+Starke%2C+FL+32091!5e0!3m2!1sen!2sus!4v1729612345678!5m2!1sen!2sus"
        width="100%"
        height="384"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="88 SE 75th Street, Starke, FL 32091"
      ></iframe>
    </div>
  </Card>
</div>        
          </Card>
              
              <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm">
                <h3 className="text-xl font-hero font-semibold mb-4 text-accent">
                  Travel Tips
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Approximately 1 hour drive from Jacksonville</p>
                  <p>• 2 hours from Orlando</p>
                  <p>• Closest airport: Gainesville Regional (1 hour)</p>
                  <p>• We recommend arriving Friday afternoon for dinner</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;