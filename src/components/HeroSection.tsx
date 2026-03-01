import { ChevronDown, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/95" />
      <div className="grain-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Approval Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 animate-fade-in-up">
            <Shield className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold">
              HMDA • DTCP • RERA Approved Layouts
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Premium Open Plots
            <br />
            <span className="text-gradient-gold">
              In Hyderabad’s Fastest Growing Zones
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/70 md:text-xl animate-fade-in-up">
            Invest in premium villa plots near ORR & RRR corridors with
            high appreciation potential. Strategically located layouts
            designed for both future living and long-term investment growth.
          </p>

          {/* Trust Stats */}
          <div className="mt-6 flex flex-wrap gap-6 text-primary-foreground/70 text-sm">
            <span>✔ 15+ Years Legacy</span>
            <span>✔ 50+ Projects Delivered</span>
            <span>✔ 10,000+ Happy Customers</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row animate-fade-in-up">
            <a href="#projects">
              <Button className="bg-gold text-primary hover:bg-gold-light font-semibold px-8 py-6">
                Explore Projects
              </Button>
            </a>

            <a
              href="https://wa.me/919502653758"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Enquiry
              </Button>
            </a>
          </div>

          {/* Micro trust line */}
          <p className="mt-6 text-xs text-primary-foreground/40">
            Clear titles • Bank loan eligible • 100% secure investment
          </p>
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