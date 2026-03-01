import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Home,
  Map,
  Car,
  Trees,
  Lightbulb,
  ShieldCheck,
  Sun,
  Baby,
  PersonStanding,
  Flower2,
  Landmark,
  Droplets,
} from "lucide-react";

const amenities = [
  { icon: Home, label: "Grand Entrance Arch" },
  { icon: Map, label: "100% Vaastu Layout" },
  { icon: Car, label: "40 & 60 Ft Blacktop Roads" },
  { icon: Trees, label: "Avenue Plantation" },
  { icon: Lightbulb, label: "Underground Electricity" },
  { icon: Droplets, label: "Underground Drainage" },
  { icon: Sun, label: "Solar Street Lighting" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: PersonStanding, label: "Jogging Tracks" },
  { icon: Flower2, label: "Landscaped Parks" },
  { icon: Landmark, label: "Temple Provision" },
];

const AmenitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-navy-gradient relative overflow-hidden">
      {/* Background Grain */}
      <div className="grain-overlay absolute inset-0" />

      <div
        ref={ref}
        className={`container mx-auto relative z-10 fade-up ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Lifestyle & Infrastructure
          </span>

          <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            World-Class Amenities
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/60">
            Designed to provide a perfect blend of modern infrastructure,
            lifestyle comfort, and long-term investment value across all
            Bhashyam layouts.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group relative flex flex-col items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-gold/10 to-transparent" />

              {/* Icon */}
              <Icon className="h-9 w-9 text-gold transition-transform duration-300 group-hover:scale-110" />

              {/* Label */}
              <span className="text-sm font-medium text-primary-foreground/80 text-center">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <p className="mt-12 text-center text-sm text-primary-foreground/50">
          Premium infrastructure that enhances both lifestyle and land value.
        </p>
      </div>
    </section>
  );
};

export default AmenitiesSection;