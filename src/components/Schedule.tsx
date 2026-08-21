import { Card } from "@/components/ui/card";
import ScheduleVideo from "@/components/ScheduleVideo";

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-hero font-bold text-center mb-16 text-foreground">
            🗓️ Weekend Highlights
          </h2>

          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="space-y-8 lg:flex-1">
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
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center space-x-2 rounded-lg bg-background/40 px-3 py-2">
                      <span className="text-xl">🎲</span>
                      <span className="text-sm text-muted-foreground">Board Games</span>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg bg-background/40 px-3 py-2">
                      <span className="text-xl">🛶</span>
                      <span className="text-sm text-muted-foreground">Canoeing</span>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg bg-background/40 px-3 py-2">
                      <span className="text-xl">🎤</span>
                      <span className="text-sm text-muted-foreground">Karaoke</span>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg bg-background/40 px-3 py-2">
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

            {/* Highlights video */}
            <div className="mt-10 lg:mt-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto lg:mx-0 flex-shrink-0">
              <ScheduleVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
