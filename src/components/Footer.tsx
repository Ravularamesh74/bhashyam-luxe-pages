import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Projects", href: "#projects" },
  { label: "Amenities", href: "#amenities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const projectLinks = [
  "Emerald County", "Heritage County", "Rainbow County",
  "Cyber County", "Oxygen County", "Crystal County",
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/bhashyamplots" },
  { icon: Instagram, href: "https://www.instagram.com/bhashyamplots/" },
  { icon: Twitter, href: "https://twitter.com/" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/bhashyam-plots" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={logo} alt="Bhashyam Developers" className="h-14 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Bhashyam Developers provides premier residential property development services in Hyderabad, offering government-approved plots of 67 to 400 square yards in prime locations.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Our Projects</h4>
            <ul className="space-y-2">
              {projectLinks.map((p) => (
                <li key={p}>
                  <a href="#projects" className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Address */}
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
            <div className="mt-6">
              <h4 className="font-display text-sm font-bold mb-2">Address</h4>
              <p className="text-xs text-primary-foreground/50 leading-relaxed">
                F 201, Sri Sai Govardhan Kunj, Near Community Hall, Opp: Ratnadeep Super Market, SR Nagar Ameerpet, Hyderabad – 500038
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-primary-foreground/40 sm:flex-row">
          <span>Copyrights © 2008 Bhashyam Developers | All Rights Reserved</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
