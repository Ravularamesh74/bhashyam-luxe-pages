import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { text: "Best investment decision of my life. Bhashyam Developer provided complete transparency and quick documentation.", name: "Ravi Kumar", role: "IT Professional" },
  { text: "Amazing plots with great amenities. The staff guided us throughout the entire process.", name: "Priya Sharma", role: "Doctor" },
  { text: "Got my dream plot near ORR at an affordable price. Highly recommended!", name: "Suresh Reddy", role: "Businessman" },
  { text: "Quick registration, no hidden charges. We trust Bhashyam completely.", name: "Lakshmi Devi", role: "Homemaker" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div ref={ref} className={`container mx-auto fade-up ${isVisible ? "visible" : ""}`}>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Testimonials
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Trusted by 5000+ Families
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <Quote className="absolute -top-4 left-0 h-16 w-16 text-gold/10" />

          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>

            <p className="font-display text-xl italic text-foreground md:text-2xl leading-relaxed">
              "{testimonials[active].text}"
            </p>

            <div className="mt-6">
              <p className="font-display text-lg font-bold text-foreground">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-gold" : "w-2.5 bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((p) => (p + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
