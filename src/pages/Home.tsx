import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import LocationSection from "@/components/sections/LocationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <main className="bg-background">
      {/* HERO */}
      <HeroSection />

      {/* TRUST COUNTERS */}
      <StatsBar />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* PROJECTS */}
      <ProjectsSection />

      {/* AMENITIES */}
      <AmenitiesSection />

      {/* LOCATION ADVANTAGES */}
      <LocationSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CONTACT CTA */}
      <ContactSection />
    </main>
  );
};

export default Home;