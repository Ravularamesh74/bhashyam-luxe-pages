import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Navigation,
  Plane,
  Train,
  Building2,
  Landmark,
  Factory,
  MapPin,
  TrendingUp,
} from "lucide-react";

const advantages = [
  {
    icon: Navigation,
    title: "ORR & RRR Connectivity",
    desc: "Direct access to Outer Ring Road and upcoming Regional Ring Road ensuring seamless connectivity and rapid appreciation.",
  },
  {
    icon: Plane,
    title: "Airport Proximity",
    desc: "Close to Rajiv Gandhi International Airport, making it ideal for frequent travelers and NRI investors.",
  },
  {
    icon: Building2,
    title: "IT Corridor Access",
    desc: "Easy reach to Financial District, Gachibowli, and HITEC City — Hyderabad’s prime employment zones.",
  },
  {
    icon: Train,
    title: "Metro & Highway Links",
    desc: "Well-connected to Hyderabad Metro, NH-44, and major state highways for effortless commuting.",
  },
  {
    icon: Factory,
    title: "Pharma City Growth",
    desc: "Near Hyderabad Pharma City and industrial zones driving future infrastructure and land value growth.",
  },
  {
    icon: Landmark,
    title: "Emerging Investment Belt",
    desc: "Located in high-growth corridors like Shankarpally, Nandigama, and Kothur development zones.",
  },
  {
    icon: TrendingUp,
    title: "High Appreciation Potential",
    desc: "Strategic placement in expansion zones ensures strong ROI and long-term land value appreciation.",
  },
  {
    icon: MapPin,
    title: "Future Infrastructure Hub",
    desc: "Surrounded by upcoming townships, logistics parks, and smart city developments.",
  },
];

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-cream-dark">
      <div
        ref={ref}
        className={`container mx-auto fade-up ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Strategic Growth Corridors
          </span>

          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Location Advantages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our projects are positioned in Hyderabad’s fastest-growing
            investment zones near ORR, RRR, and airport expansion belts —
            ensuring superior connectivity and long-term appreciation.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border-2 border-gold/20 bg-card p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 group-hover:bg-gold/20 transition">
                <Icon className="h-6 w-6 text-gold" />
              </div>

              <h3 className="font-display text-lg font-bold text-foreground">
                {title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom investor line */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Prime locations today — premium appreciation tomorrow.
        </p>
      </div>
    </section>
  );
};

export default LocationSection;