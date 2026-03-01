import AmenitiesSection from "@/components/sections/AmenitiesSection";

const Amenities = () => {
  return (
    <main className="pt-20 bg-background">
      {/* HERO */}
      <section className="bg-navy-gradient text-center py-20 px-4">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
          World-Class Amenities
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-primary-foreground/70 text-lg">
          Experience thoughtfully designed infrastructure and lifestyle
          amenities that combine modern living with long-term investment value.
        </p>
      </section>

      {/* MAIN AMENITIES GRID */}
      <AmenitiesSection />

      {/* INFRASTRUCTURE DETAILS */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Designed for Future-Ready Living
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Every Bhashyam layout is developed with a strong focus on
            infrastructure excellence and community planning. From wide
            blacktop roads and underground drainage systems to landscaped
            parks and gated security, our projects are built to provide
            both lifestyle comfort and strong land appreciation.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our amenities are thoughtfully planned to support modern
            residential living while preserving open spaces and greenery,
            ensuring a balanced and sustainable plotted development.
          </p>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl grid gap-10 md:grid-cols-3 text-center">
          <div>
            <h3 className="font-bold text-lg text-foreground">
              Premium Infrastructure
            </h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Wide internal roads, drainage planning, and utility-ready
              layouts ensure seamless construction and long-term usability.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-foreground">
              Green Living
            </h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Avenue plantations, landscaped parks, and open spaces
              designed for peaceful and eco-friendly living.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-foreground">
              Secure Communities
            </h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Gated layouts with planned entrances and security
              provisions ensure safety and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-navy-gradient py-14 text-center">
        <p className="text-primary-foreground text-lg max-w-3xl mx-auto">
          Our amenities are designed to enhance both lifestyle and
          long-term investment value, making every Bhashyam layout
          a future-ready land asset.
        </p>
      </section>
    </main>
  );
};

export default Amenities;