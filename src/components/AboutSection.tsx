import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Award, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Shield, label: "HMDA Approved" },
  { icon: BadgeCheck, label: "RERA Registered" },
  { icon: Award, label: "ISO Certified" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div
        ref={ref}
        className={`container mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 items-center fade-up ${isVisible ? "visible" : ""}`}
      >
        {/* Text */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            About Us
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Building Dreams,
            <br />
            <span className="text-gradient-gold">Plotting Futures</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Bhashyam Developer has been transforming the Hyderabad real estate
            landscape since 2008. With HMDA, DTCP, and RERA approved projects,
            we bring transparency, quality infrastructure, and prime locations to
            every plot we sell.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our commitment to clear legal titles, world-class amenities, and
            customer satisfaction has made us one of the most trusted names in
            Hyderabad's residential plots market.
          </p>

          {/* Trust badges */}
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

        {/* Image with gold frame */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl border-2 border-gold/30" />
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy via-navy-light to-navy aspect-[4/3]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="font-display text-6xl font-bold text-gold/20">
                  15+
                </span>
                <p className="mt-2 text-lg text-primary-foreground/40">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
