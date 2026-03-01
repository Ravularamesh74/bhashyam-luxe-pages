import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

/* UPDATED PROJECT LIST */
const projectOptions = [
  "Cyber County",
  "Emerald County",
  "RRR County",
  "Landmark County",
  "Prestige County",
  "Heritage County",
  "Crystal County",
];

const sizeOptions = [
  "67 sq yds",
  "100 sq yds",
  "150 sq yds",
  "200 sq yds",
  "300 sq yds",
  "400 sq yds",
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! Our team will contact you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="bg-navy-gradient relative overflow-hidden">
      <div className="grain-overlay absolute inset-0" />

      <div
        ref={ref}
        className={`container mx-auto section-padding relative z-10 fade-up ${isVisible ? "visible" : ""
          }`}
      >
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Get in Touch
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Book a Free Site Visit
          </h2>
          <p className="mt-3 text-primary-foreground/60">
            Speak with our experts and explore premium plots in top growth
            corridors of Hyderabad.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input required placeholder="Full Name" />
              <Input required type="tel" placeholder="Phone Number" />
            </div>

            <Input type="email" placeholder="Email Address" />

            <div className="grid gap-4 sm:grid-cols-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Preferred Project" />
                </SelectTrigger>
                <SelectContent>
                  {projectOptions.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Plot Size" />
                </SelectTrigger>
                <SelectContent>
                  {sizeOptions.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Textarea placeholder="Message (optional)" rows={4} />

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-gold text-primary hover:bg-gold-light font-semibold text-base py-6"
            >
              {loading ? "Submitting..." : "Request Callback"}
            </Button>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919502653758"
              target="_blank"
              className="flex items-center justify-center gap-2 text-sm text-green-400 hover:text-green-300"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </form>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center space-y-8">
            {[
              {
                icon: Phone,
                label: "+91 95026 53758 / 91 80087 17779",
                href: "tel:+919502653758",
              },
              {
                icon: Mail,
                label: "8008717779chinna@gmail.com",
                href: "mailto:8008717779chinna@gmail.com",
              },
              {
                icon: MapPin,
                label:
                  "F-201, Sri Sai Govardhan Kunj, Opp Ratnadeep Super Market, SR Nagar, Ameerpet, Hyderabad – 500038",
              },
              {
                icon: Clock,
                label: "Mon – Sat, 9 AM – 7 PM",
              },
            ].map(({ icon: Icon, label, href }: { icon: any; label: string; href?: string }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </div>

                {href ? (
                  <a
                    href={href}
                    className="text-lg text-primary-foreground hover:text-gold transition"
                  >
                    {label}
                  </a>
                ) : (
                  <p className="text-primary-foreground/80">{label}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;