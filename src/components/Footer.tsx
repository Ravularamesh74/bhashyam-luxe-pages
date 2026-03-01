import { MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quickLinks = ["Home", "About Us", "Projects", "Amenities", "Testimonials", "Contact"];
const projectLinks = [
  "Green Valley", "Royal County", "Smart City",
  "Nature Enclave", "Siri Township", "Golden Acres",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-gold" />
              <span className="font-display text-xl font-bold">Bhashyam Developer</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Building Dreams, Plotting Futures. Your trusted partner for premium residential plots in Hyderabad.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-all hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Projects</h4>
            <ul className="space-y-2">
              {projectLinks.map((p) => (
                <li key={p}>
                  <a href="#projects" className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                    Bhashyam {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Newsletter</h4>
            <p className="text-sm text-primary-foreground/60 mb-4">
              Subscribe for the latest project updates and offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Button className="bg-gold text-primary hover:bg-gold-light shrink-0">
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-primary-foreground/40 sm:flex-row">
          <span>© 2024 Bhashyam Developer. All Rights Reserved. | RERA No: P02400001234</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
