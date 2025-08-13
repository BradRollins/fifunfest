import { Card } from "@/components/ui/card";

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-hero font-bold text-center mb-16 text-foreground">
            🗓️ Weekend Highlights
          </h2>
          
          <div className="space-y-8">
            {/* Friday */}
            <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm">
              <h3 className="text-2xl font-hero font-semibold mb-6 text-accent flex items-center">
                <span className="bg-gradient-hero text-transparent bg-clip-text">Friday Night</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🍽️</span>
                  <span className="text-lg text-foreground">Dinner + Casual Welcome & Introductions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🔥</span>
                  <span className="text-lg text-foreground">Evening Hangout (Campfire, Music, Chat Time)</span>
                </div>
              </div>
            </Card>
            
            {/* Saturday */}
            <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm">
              <h3 className="text-2xl font-hero font-semibold mb-6 text-accent flex items-center">
                <span className="bg-gradient-hero text-transparent bg-clip-text">Saturday</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🥾</span>
                  <span className="text-lg text-foreground">Group Hike (optional)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">💬</span>
                  <span className="text-lg text-foreground">Group Discussion + Breakouts</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🎉</span>
                  <span className="text-lg text-foreground">Big Saturday Activity: Field Day, Kickball, or Scavenger Hunt</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🎲</span>
                    <span className="text-sm text-muted-foreground">Board Games</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🛶</span>
                    <span className="text-sm text-muted-foreground">Canoeing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🎤</span>
                    <span className="text-sm text-muted-foreground">Karaoke</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🕺</span>
                    <span className="text-sm text-muted-foreground">Spontaneous Fun!</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Sunday */}
            <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm">
              <h3 className="text-2xl font-hero font-semibold mb-6 text-accent flex items-center">
                <span className="bg-gradient-hero text-transparent bg-clip-text">Sunday</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">☀️</span>
                  <span className="text-lg text-foreground">Morning Lake Time & Reflection</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🍳</span>
                  <span className="text-lg text-foreground">Farewell Breakfast & Connections</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;