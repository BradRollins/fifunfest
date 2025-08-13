import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Schedule />
      <Gallery />
      <FAQ />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
