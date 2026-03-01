import ContactSection from "@/components/sections/ContactSection";

const Contact = () => {
  return (
    <main className="pt-20 bg-background">
      {/* HERO */}
      <section className="bg-navy-gradient text-center py-20 px-4">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
          Contact Bhashyam Developers
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-primary-foreground/70 text-lg">
          Connect with our team to explore premium plotted developments,
          schedule a free site visit, or get expert investment guidance.
        </p>
      </section>

      {/* MAIN CONTACT FORM */}
      <ContactSection />

      {/* OFFICE DETAILS */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Visit Our Office
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            We welcome you to visit our office for personalized consultation,
            project walkthroughs, and detailed investment discussions.
          </p>

          <div className="mt-6 space-y-2 text-muted-foreground">
            <p>
              <strong>Address:</strong> F-201, Sri Sai Govardhan Kunj,
              Opp Ratnadeep Super Market, SR Nagar, Ameerpet,
              Hyderabad – 500038
            </p>
            <p>
              <strong>Working Hours:</strong> Monday – Saturday, 9:00 AM – 7:00 PM
            </p>
            <p>
              <strong>Phone:</strong> +91 95026 53758 / +91 80087 17779
            </p>
            <p>
              <strong>Email:</strong> 8008717779chinna@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="text-center font-display text-3xl font-bold text-foreground mb-8">
            Locate Us on Map
          </h2>

          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=SR%20Nagar%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-navy-gradient py-14 text-center">
        <p className="text-primary-foreground text-lg max-w-3xl mx-auto">
          Whether you are buying your first plot or making a long-term
          land investment, our experts are here to guide you at every step.
        </p>
      </section>
    </main>
  );
};

export default Contact;