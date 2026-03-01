import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Award, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Shield, label: "HMDA Approved" },
  { icon: BadgeCheck, label: "RERA Registered" },
  { icon: Award, label: "DTCP Approved" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
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

          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-tight">
            Building Trust,
            <br />
            <span className="text-gradient-gold">
              Creating Future Assets
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">
              Bhashyam Developers
            </strong>{" "}
            is one of Hyderabad’s most trusted real estate brands with over{" "}
            <strong className="text-foreground">15+ years of excellence</strong>{" "}
            in plotted developments. We specialize in HMDA, DTCP, and
            RERA-approved open plots designed for both end-users and
            long-term investors.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            With a strong footprint across fast-growing corridors like
            Shankarpally, Nandigama, Kothur, and ORR influence zones,
            our projects are strategically located near IT hubs,
            national highways, and future infrastructure like the
            Regional Ring Road (RRR) and airport expansion zones.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every venture is designed as a premium gated community
            featuring wide blacktop roads, underground drainage,
            avenue plantations, electricity, water pipelines, and
            24/7 security — delivering both lifestyle comfort and
            high investment potential.
          </p>

          {/* WHY US */}
          <h3 className="mt-8 font-display text-xl font-bold text-foreground">
            Why Choose Bhashyam?
          </h3>

          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>✔ 50+ Successfully Delivered Layouts</li>
            <li>✔ 10,000+ Happy Plot Owners</li>
            <li>✔ Clear Titles & Transparent Documentation</li>
            <li>✔ Prime Locations Near ORR & RRR</li>
            <li>✔ High Appreciation Investment Zones</li>
            <li>✔ Strong Customer Referral Network</li>
          </ul>

          {/* VISION */}
          <h3 className="mt-8 font-display text-xl font-bold text-foreground">
            Our Vision
          </h3>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our vision is to redefine plotted development in Hyderabad
            by creating future-ready communities that combine prime
            locations, world-class infrastructure, and long-term
            value. We aim to empower families and investors with
            secure land assets that grow for generations.
          </p>

          {/* MISSION */}
          <h3 className="mt-8 font-display text-xl font-bold text-foreground">
            Our Mission
          </h3>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            We are committed to delivering legally compliant,
            premium-quality layouts with unmatched transparency and
            customer satisfaction. By identifying high-growth
            corridors early and building infrastructure-rich
            communities, we ensure every Bhashyam plot becomes a
            smart and secure investment.
          </p>

          {/* Trust Quote */}
          <p className="mt-6 text-sm italic text-muted-foreground">
            “We don’t just sell plots — we build trust, growth, and
            generational assets.”
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

        {/* RIGHT SIDE PREMIUM VISUAL */}
        <div className="relative">
          {/* Gold Border */}
          <div className="absolute -inset-3 rounded-2xl border-2 border-gold/30" />

          {/* Premium Card */}
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
                  <p className="text-xl font-bold text-gold">50+</p>
                  Projects
                </div>
                <div>
                  <p className="text-xl font-bold text-gold">10K+</p>
                  Customers
                </div>
                <div>
                  <p className="text-xl font-bold text-gold">100%</p>
                  Trust
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