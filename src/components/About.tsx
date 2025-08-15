import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 pt-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-hero font-bold text-center mb-16 text-foreground">
            💬 What's FI FunFest All About?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Description */}
            <div className="space-y-6">
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-hero font-semibold mb-4 text-accent">
                  Location
                </h3>
                <div className="text-lg text-muted-foreground space-y-1">
                  <p>Montgomery Center</p>
                  <p>88 SE 75th St</p>
                  <p>Starke, FL 32091</p>
                </div>
              </Card>
              
              <div className="text-lg text-foreground space-y-4 leading-relaxed">
                <p>
                  This 2-night getaway is all about fun, connection, and celebrating the FI Community.
                  It will be a playful, unplugged weekend hanging with your favorite FI friends (new & old). 
                  No speakers. No slide decks. Just pure community, meaningful conversations, outdoor adventures, 
                  a few structed activities, but plenty of unstructured time to relax, unwind, enjoy the beautiful 
                  lakeside grounds and the freedom to choose your own pace.
                </p>
                
                <p>
                  Whether you're hiking, laughing around a fire, singing karaoke, or joining a spontaneous salsa 
                  class—this weekend is about recharging, connecting, and just being a kid again.
                </p>
              </div>
            </div>
            
            {/* Right Column - What's Included */}
            <div className="space-y-8">
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-hero font-semibold mb-6 text-accent">
                  What's Included
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    2 nights lodging + 5 delicious meals
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Group discussions + optional activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Nature walks, lake time, campfires, enjoyable conversations, spontaneous fun
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Camp-style cabins with lake views (pets allowed in cabins)
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Laid back, easy going environment with peaceful outdoor vibes
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Indoor and outdoor activities for all to enjoy
                  </li>
                </ul>
              </Card>
              
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-hero font-semibold mb-6 text-accent">
                  🍽️ Meal Times (All Meals Included!)
                </h3>
                <div className="space-y-3 text-foreground">
                  <div className="flex justify-between">
                    <span>Breakfast:</span>
                    <span className="font-semibold">8:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunch:</span>
                    <span className="font-semibold">12:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dinner:</span>
                    <span className="font-semibold">6:00 PM</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              If you're into FI, enjoying the outdoors, community, and the freedom to design life on your terms—this weekend is for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;