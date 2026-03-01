import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Award, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Shield, label: "HMDA Approved Layouts" },
  { icon: BadgeCheck, label: "RERA Registered Projects" },
  { icon: Award, label: "DTCP Approved Ventures" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`container mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 items-center fade-up ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            About Bhashyam Developers
          </span>

          <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Building Trust,
            <br />
            <span className="text-gradient-gold">
              Creating Future Land Assets
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Bhashyam Developers
            </strong>{" "}
            is one of Hyderabad’s trusted plotted development brands with
            over <strong className="text-foreground">15+ years</strong> of
            experience in delivering premium residential layouts across
            the city’s fastest-growing corridors.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            With a legacy of multiple successful plotted developments,
            the company specializes in HMDA, DTCP, and RERA-approved
            open plots designed for both homebuyers and long-term
            investors. Our projects are strategically located near ORR,
            RRR, and emerging infrastructure zones to ensure strong
            appreciation potential.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every Bhashyam layout is thoughtfully planned with gated
            community infrastructure including wide roads, underground
            drainage, landscaped parks, and secure environments — making
            them ideal for both future living and wealth creation.
          </p>

          {/* WHY TRUST US */}
          <h3 className="mt-8 font-display text-xl font-bold text-foreground">
            Why Customers Trust Us
          </h3>

          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>✔ 15+ Years of Real Estate Expertise</li>
            <li>✔ Government Approved Layouts</li>
            <li>✔ Transparent Legal Documentation</li>
            <li>✔ Prime Growth Corridor Locations</li>
            <li>✔ Thousands of Happy Plot Owners</li>
          </ul>

          {/* TRUST QUOTE */}
          <p className="mt-6 text-sm italic text-muted-foreground">
            “We don’t just sell plots — we build long-term land value and
            trusted relationships.”
          </p>

          {/* BADGES */}
          <div className="mt-8 flex flex-wrap gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-5 py-2.5"
              >
                <Icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-semibold text-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="relative">
          {/* Gold frame */}
          <div className="absolute -inset-3 rounded-2xl border-2 border-gold/30" />

          {/* Stats card */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy via-navy-light to-navy aspect-[4/3]">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <span className="font-display text-6xl font-bold text-gold/20">
                15+
              </span>
              <p className="mt-2 text-lg text-primary-foreground/40">
                Years of Excellence
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-xs text-primary-foreground/50">
                <div>
                  <p className="text-xl font-bold text-gold">45+</p>
                  Projects
                </div>
                <div>
                  <p className="text-xl font-bold text-gold">750+</p>
                  Acres
                </div>
                <div>
                  <p className="text-xl font-bold text-gold">1000s</p>
                  Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;