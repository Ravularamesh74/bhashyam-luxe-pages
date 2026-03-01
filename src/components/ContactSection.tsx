import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const projectOptions = [
  "Emerald County",
  "Heritage County",
  "Rainbow County",
  "Cyber County",
  "Oxygen County",
  "Crystal County",
];

const sizeOptions = ["67 sq yds", "100 sq yds", "150 sq yds", "200 sq yds", "300 sq yds", "400 sq yds"];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll contact you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="bg-navy-gradient relative overflow-hidden">
      <div className="grain-overlay absolute inset-0" />
      <div ref={ref} className={`container mx-auto section-padding relative z-10 fade-up ${isVisible ? "visible" : ""}`}>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Get in Touch
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Book a Free Site Visit
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                required
                placeholder="Full Name"
                maxLength={100}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold"
              />
              <Input
                required
                type="tel"
                placeholder="Phone Number"
                maxLength={15}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold"
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              maxLength={255}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Select>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Preferred Project" />
                </SelectTrigger>
                <SelectContent>
                  {projectOptions.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Plot Size (sq yds)" />
                </SelectTrigger>
                <SelectContent>
                  {sizeOptions.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder="Your Message"
              maxLength={1000}
              rows={4}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold resize-none"
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-gold text-primary hover:bg-gold-light font-semibold text-base py-6"
            >
              {loading ? "Sending..." : "Request Callback"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            {[
              { icon: Phone, label: "+91 9000216677", href: "tel:+919000216677" },
              { icon: Mail, label: "naveen@bhashyamplots.com", href: "mailto:naveen@bhashyamplots.com" },
              { icon: MapPin, label: "F 201, Sri Sai Govardhan Kunj, Near Community Hall, Opp: Ratnadeep Super Market, SR Nagar Ameerpet, Hyderabad – 500038" },
              { icon: Clock, label: "Mon – Sat, 9 AM – 7 PM" },
            ].map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  {href ? (
                    <a href={href} className="text-lg text-primary-foreground hover:text-gold transition-colors">
                      {label}
                    </a>
                  ) : (
                    <p className="text-primary-foreground/80">{label}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
