import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import hostPhoto from "@/assets/Our Story2.jpeg";

const storyPhotos = Object.values(
  import.meta.glob<{ default: string }>(
    "/src/assets/our-story-photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true },
  ),
)
  .map((mod) => mod.default)
  .slice(0, 4);

const OurStory = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Story - FI FunFest";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 pt-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-hero font-bold text-foreground text-center">
              Our Story
            </h1>
            <p className="text-lg font-hero text-muted-foreground text-center mt-2 mb-12">
              The Reason and Purpose Behind FI FunFest
            </p>

            <p className="font-rubik text-sm font-semibold uppercase tracking-wide text-accent mb-4">
              Musings from FI FunFest Management
            </p>

            <div>
              <figure className="float-left mr-6 mb-4 w-32 sm:w-40 md:w-48">
                <img
                  src={hostPhoto}
                  alt="Brad and Rebekah, hosts of FI FunFest"
                  className="rounded-xl shadow-md w-full aspect-square object-cover"
                />
                <figcaption className="text-xs italic text-foreground/60 mt-2 text-center">
                  Brad & Rebekah
                </figcaption>
              </figure>

              <p className="font-rubik text-foreground leading-relaxed mb-6">
                The FI we have come to love is built around friendships,
                community and a passion to live your best life. This community,
                what we have here is something extremely unique. We've never
                meet such an amazing group of people before who you feel right
                at home with almost immediately. For example, the very first
                evening at CampFI,{" "}
                <strong>
                  only after being there for 1-2 hours, strangers are already
                  sitting around the dinner table connecting and laughing like
                  they have known each other for years
                </strong>
                ….even my fellow Introverts! Introverts thrive in this
                community. While at one CampFI,{" "}
                <strong>Doug Cunnington (Mile High FI)</strong> made the comment
                that this is{" "}
                <strong>
                  the most extraverted group of introverts he's ever seen
                </strong>
                . There is just something here that speaks to the heart of
                introverts, all people (even those pitiful extroverts 😉).{" "}
                <strong>Allen Valentine (FI Friend and Camp FI Alumni)</strong>{" "}
                said the following which we couldn't agree more with: "
                <strong>
                  One key characteristic of the FI community is how supportive
                  and communal it feels. We are a hive mind. Companies can only
                  dream of achieving the level of open communication, sharing,
                  and continuous education that we, as a community, seem to do
                  pretty naturally
                </strong>
                ".
              </p>
              <p className="font-rubik text-foreground leading-relaxed mb-6">
                What a blessing the community has been to both Rebekah and me
                and hundreds of others would likely say the same thing. So, in
                light of that, the FI FunFest and this whole thing is really
                celebrating you guys (the FI Community at large). With events
                like EconoMe, CampFI and other FI type retreats, there seems to
                be a consistent theme regarding what makes those events
                memorable and powerful. After talking with multiple FI fanatics,{" "}
                <strong>
                  what stands out and causes people to keep coming back again
                  and again are those rich personal interactions and
                  conversations.
                </strong>{" "}
                You know, the one-on-one conversations, the times shared at
                dinner, enjoying a cup of coffee in the company of other
                like-minded folks, the campfires, the walks/hikes we take
                together, falling in the lake via a tipped over canoe (Amy and
                Rebekah), having Ben give us a tour of his customized
                vehicle/mobile home, playing board games at night, doing karaoke
                with others, singing along and having fun or just sitting on the
                porch chatting with someone.
              </p>
              <p className="font-rubik text-foreground leading-relaxed mb-6">
                <strong>
                  It is these things that appear to be the secret sauce.
                </strong>{" "}
                That is what we wanted to set up here, to create a space and
                structure that promotes this stuff but also leaves room for
                doing things on your own as well (with or without others). We
                wanted to strike a balance here with just enough structure of
                activities and schedule but allow a lot time and space to be
                able to experience those rich personal interactions and
                conversations in your own way.
              </p>

              <div className="clear-both" />
            </div>

            <p className="font-rubik text-lg font-medium text-foreground leading-relaxed mb-8">
              So, we look forward to seeing old friends and making new friends.
              Regardless, one thing is for sure, you need to come experience the
              magic that is the FI FunFest. See you soon friends!
            </p>

            <p className="font-rubik text-lg font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-2">
              We <Heart className="w-5 h-5 fill-red-500 text-red-500" /> our FI community!
            </p>

            {storyPhotos.length > 0 && (
              <div className="space-y-4">
                {storyPhotos.length > 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {storyPhotos.slice(1).map((src, index) => (
                      <div
                        key={index}
                        className="cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => setSelectedImage(src)}
                      >
                        <img
                          src={src}
                          alt={`Our Story photo ${index + 2}`}
                          className="rounded-xl shadow-md aspect-square object-cover w-full h-full hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-center">
                  <img
                    src={storyPhotos[0]}
                    alt="Our Story photo 1"
                    className="rounded-xl shadow-md w-full max-w-xl h-auto"
                  />
                </div>
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
              alt="Enlarged Our Story photo"
              className="max-w-full max-h-[85vh] w-full object-contain rounded-lg shadow-glow"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OurStory;
