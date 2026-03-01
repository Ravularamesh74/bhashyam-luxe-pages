import { ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      <div className="grain-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* RERA badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 animate-fade-in-up">
            <Shield className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold">HMDA, DTCP & RERA Approved</span>
          </div>

          <h1
            className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Premium Villa Plots
            <br />
            <span className="text-gradient-gold">For Sale in Hyderabad</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg text-primary-foreground/70 md:text-xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Most of our layouts are located in west Hyderabad that offer the best Return on Investment (ROI) opportunities. Contact us for booking your plot today.
          </p>

          <div
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#projects">
              <Button
                size="lg"
                className="bg-gold text-primary hover:bg-gold-light font-semibold text-base px-8 py-6"
              >
                Explore Projects
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6"
              >
                Schedule a Site Visit
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="h-8 w-8 text-gold/60" />
      </div>
    </section>
  );
};

export default HeroSection;
