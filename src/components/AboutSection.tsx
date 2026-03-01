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
            <strong className="text-foreground">Bhashyam Developers</strong> is a renowned real estate company in Hyderabad with over <strong className="text-foreground">15 years of experience</strong> in developing open villa plots. We are known for our quality, reliability, and on-time delivery.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our ventures are gated community villa projects equipped with premium amenities, such as underground drainage system, 24/7 security, and more. We provide government-approved plots of 67 to 400 square yards in prime locations throughout Hyderabad.
          </p>

          <h3 className="mt-8 font-display text-xl font-bold text-foreground">Our Vision</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our vision is to be the leading real estate developer in Hyderabad, known for our commitment to quality, customer satisfaction, and ethical business practices. We strive to create value for our customers by developing innovative and sustainable projects.
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
