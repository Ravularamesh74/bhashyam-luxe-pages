import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Home, Waves, Baby, PersonStanding,
  ShieldCheck, Sun, Church, Flower2,
} from "lucide-react";

const amenities = [
  { icon: Home, label: "Clubhouse" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: PersonStanding, label: "Jogging Track" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Sun, label: "Solar Street Lights" },
  { icon: Church, label: "Temple" },
  { icon: Flower2, label: "Landscaped Gardens" },
];

const AmenitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="amenities" className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="grain-overlay absolute inset-0" />
      <div ref={ref} className={`container mx-auto relative z-10 fade-up ${isVisible ? "visible" : ""}`}>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Lifestyle
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            World-Class Amenities
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-gold/10"
            >
              <Icon className="h-10 w-10 text-gold transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium text-primary-foreground/80 text-center">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
