import AboutSection from "@/components/sections/AboutSection";

const About = () => {
  return (
    <main className="pt-20 bg-background">
      {/* HERO */}
      <section className="bg-navy-gradient text-center py-20 px-4">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
          About Bhashyam Developers
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-primary-foreground/70 text-lg">
          A trusted name in Hyderabad’s plotted development landscape,
          delivering premium villa plots and investment-grade layouts
          across the city’s fastest growing corridors.
        </p>
      </section>

      {/* MAIN ABOUT SECTION */}
      <AboutSection />

      {/* COMPANY PROFILE */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Legacy of Trust & Growth
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Bhashyam Developers is a Hyderabad-based real estate brand
            with over 15+ years of experience in plotted development and
            residential land investments. With a legacy of 45+ successful
            projects spanning more than 750 acres, we specialize in
            HMDA, DTCP, and RERA-approved layouts designed for both
            homebuyers and long-term investors.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our projects are strategically located across high-growth
            corridors including ORR and RRR influence zones, ensuring
            excellent connectivity, infrastructure development, and
            long-term appreciation potential. Each layout is developed
            with a strong focus on legal transparency, infrastructure
            quality, and future-ready planning.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Development Philosophy
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3 text-center">
            <div>
              <h3 className="font-bold text-lg text-foreground">
                Investment-Driven Planning
              </h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Every project is selected in emerging growth corridors
                with strong infrastructure expansion and appreciation
                potential, making it ideal for wealth creation.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-foreground">
                Transparent Documentation
              </h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                We maintain complete legal clarity with verified titles,
                government approvals, and hassle-free registration
                processes for every customer.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-foreground">
                Premium Infrastructure
              </h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Our layouts are designed as gated communities with wide
                roads, drainage systems, greenery, and essential civic
                infrastructure for future-ready living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
          {/* Vision */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Our Vision
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To be one of the most trusted plotted development brands
              in Hyderabad by delivering future-ready communities that
              combine strategic locations, premium infrastructure, and
              long-term appreciation value.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Our Mission
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To empower families and investors with secure land assets
              through legally compliant layouts, transparent dealings,
              and high-quality plotted developments across emerging
              investment zones.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-navy-gradient py-14 text-center">
        <p className="text-primary-foreground text-lg max-w-3xl mx-auto">
          With thousands of happy customers and a proven track record
          of successful plotted developments, Bhashyam Developers
          continues to build lasting land assets and trusted
          relationships across Hyderabad.
        </p>
      </section>
    </main>
  );
};

export default About;