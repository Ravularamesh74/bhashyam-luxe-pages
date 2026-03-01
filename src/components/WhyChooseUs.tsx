import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Shield, TreePine, Route, Droplets,
  GraduationCap, FileCheck, Landmark, MapPinned,
} from "lucide-react";

const features = [
  { icon: Shield, title: "HMDA / DTCP Approved", desc: "All projects are government approved for your peace of mind" },
  { icon: TreePine, title: "Gated Communities", desc: "Lush greenery and secure gated community living" },
  { icon: Route, title: "BT Roads & Drainage", desc: "Premium infrastructure with underground drainage" },
  { icon: Droplets, title: "24/7 Water & Power", desc: "Continuous water supply and electricity connections" },
  { icon: GraduationCap, title: "Near Key Hubs", desc: "Proximity to schools, hospitals and IT corridors" },
  { icon: FileCheck, title: "Clear Legal Titles", desc: "100% transparent and verified documentation" },
  { icon: Landmark, title: "Easy EMI & Loans", desc: "Flexible payment plans with bank loan assistance" },
  { icon: MapPinned, title: "Prime Locations", desc: "Strategic locations with high appreciation value" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className={`container mx-auto fade-up ${isVisible ? "visible" : ""}`}>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Why Us
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Why Choose Bhashyam
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-gold/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary">
                <Icon className="h-7 w-7" />
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

export default WhyChooseUs;
