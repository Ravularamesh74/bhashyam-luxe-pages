import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    text: "Investing with Bhashyam Developers was the best decision. Transparent documentation and smooth registration process.",
    name: "Ravi Kumar",
    role: "IT Professional",
  },
  {
    text: "Premium layouts near ORR with excellent appreciation potential. Highly recommended for land investment.",
    name: "Priya Sharma",
    role: "Doctor",
  },
  {
    text: "Clear legal titles and great customer support. I already referred multiple friends.",
    name: "Suresh Reddy",
    role: "Business Owner",
  },
  {
    text: "Professional team and zero hidden charges. One of the most trusted plotted developers in Hyderabad.",
    name: "Lakshmi Devi",
    role: "Homemaker",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);

  /* Auto Slide */
  useEffect(() => {
    if (pause) return;
    const interval = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, [pause]);

  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div
        ref={ref}
        className={`container mx-auto fade-up ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Testimonials
          </span>

          <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted by Thousands of Families
          </h2>

          <p className="mt-3 text-muted-foreground">
            Real experiences from our happy plot owners
          </p>
        </div>

        {/* Card */}
        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* Quote BG */}
          <Quote className="absolute -top-6 left-4 h-20 w-20 text-gold/10" />

          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-8 md:p-12 text-center shadow-xl">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Text */}
            <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
              “{testimonial.text}”
            </p>

            {/* User */}
            <div className="mt-8">
              <p className="font-display text-lg font-bold text-foreground">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            {/* Prev */}
            <button
              onClick={() =>
                setActive(
                  (p) => (p - 1 + testimonials.length) % testimonials.length
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-gold hover:text-gold transition"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-gold"
                      : "w-2.5 bg-border"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() =>
                setActive((p) => (p + 1) % testimonials.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-gold hover:text-gold transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Trust Footer */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            ⭐ Rated highly by plot buyers across Hyderabad
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;