import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Navigation, Plane, Train, Building2 } from "lucide-react";

const advantages = [
  { icon: Navigation, title: "ORR Connectivity", desc: "Direct access to Outer Ring Road for seamless commute across Hyderabad" },
  { icon: Plane, title: "Airport Proximity", desc: "Minutes from Rajiv Gandhi International Airport at Shamshabad" },
  { icon: Train, title: "Metro Access", desc: "Well-connected to Hyderabad Metro for hassle-free travel" },
  { icon: Building2, title: "IT Corridor", desc: "Close to Financial District, Gachibowli, and HITEC City IT hubs" },
];

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-cream-dark">
      <div ref={ref} className={`container mx-auto fade-up ${isVisible ? "visible" : ""}`}>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Strategic Locations
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Location Advantages
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our projects are strategically located on NH-44, ORR, and major growth corridors ensuring high appreciation potential.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border-2 border-gold/20 bg-card p-6 transition-all hover:border-gold/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
