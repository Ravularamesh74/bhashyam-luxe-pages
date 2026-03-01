import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Shield,
  TreePine,
  Route,
  Droplets,
  GraduationCap,
  FileCheck,
  Landmark,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "HMDA / DTCP Approved Layouts",
    desc: "Fully government-approved plots ensuring safe and secure investments.",
  },
  {
    icon: TreePine,
    title: "Premium Gated Communities",
    desc: "Beautifully planned layouts with greenery and secure living environments.",
  },
  {
    icon: Route,
    title: "World-Class Infrastructure",
    desc: "Wide BT roads, underground drainage, and avenue plantations.",
  },
  {
    icon: Droplets,
    title: "24/7 Water & Electricity",
    desc: "Reliable water supply and power connections in all layouts.",
  },
  {
    icon: GraduationCap,
    title: "Near IT & Education Hubs",
    desc: "Close to Financial District, schools, hospitals, and business zones.",
  },
  {
    icon: FileCheck,
    title: "Clear Legal Documentation",
    desc: "100% transparent titles with verified legal compliance.",
  },
  {
    icon: Landmark,
    title: "Bank Loans & Easy EMI",
    desc: "Flexible payment options with loan assistance from major banks.",
  },
  {
    icon: MapPinned,
    title: "High Appreciation Locations",
    desc: "Projects located in ORR & RRR growth corridors for strong ROI.",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background relative">
      <div
        ref={ref}
        className={`container mx-auto fade-up ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Why Choose Us
          </span>

          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            The Bhashyam Advantage
          </h2>

          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Delivering trusted plotted developments with unmatched transparency,
            infrastructure quality, and long-term investment value.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-border bg-card/80 backdrop-blur-lg p-6 text-center transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-gold/10 to-transparent blur-xl" />

              {/* Icon */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-primary">
                <Icon className="h-7 w-7" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-foreground">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Trusted by thousands of families across Hyderabad for over 15+ years.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;