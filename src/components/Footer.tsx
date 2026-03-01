import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

/* QUICK LINKS */
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Amenities", href: "/amenities" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

/* UPDATED PROJECTS */
const projectLinks = [
  "Cyber County",
  "Emerald County",
  "RRR County",
  "Landmark County",
  "Prestige County",
  "Heritage County",
  "Crystal County",
];

/* SOCIAL LINKS */
const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/bhashyamplots" },
  { icon: Instagram, href: "https://www.instagram.com/bhashyamplots/" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/bhashyam-plots" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Bhashyam Developers"
                className="h-14 mb-4 brightness-0 invert"
              />
            </Link>

            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Bhashyam Developers is one of Hyderabad’s most trusted plotted
              development brands with 15+ years of excellence in delivering
              HMDA & DTCP approved open plots in high-growth investment
              corridors near ORR and RRR zones.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROJECT LINKS */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">
              Our Projects
            </h4>
            <ul className="space-y-2">
              {projectLinks.map((p) => (
                <li key={p}>
                  <Link
                    to="/projects"
                    className="text-sm text-primary-foreground/60 hover:text-gold transition"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">
              Stay Updated
            </h4>

            <p className="text-sm text-primary-foreground/60 mb-4">
              Get latest project launches, offers & investment insights.
            </p>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
              />
              <Button className="bg-gold text-primary hover:bg-gold-light">
                Join
              </Button>
            </div>

            {/* QUICK CONTACT */}
            <div className="mt-6 space-y-2 text-sm text-primary-foreground/60">
              <a
                href="tel:+919502653758"
                className="flex items-center gap-2 hover:text-gold"
              >
                <Phone size={14} /> +91 95026 53758
              </a>

              <a
                href="mailto:8008717779chinna@gmail.com"
                className="flex items-center gap-2 hover:text-gold"
              >
                <Mail size={14} /> Email Us
              </a>

              <a
                href="https://wa.me/919502653758"
                target="_blank"
                className="flex items-center gap-2 text-green-400 hover:text-green-300"
              >
                <MessageCircle size={14} /> WhatsApp Chat
              </a>
            </div>

            {/* ADDRESS */}
            <p className="mt-4 text-xs text-primary-foreground/40 leading-relaxed">
              F-201, Sri Sai Govardhan Kunj, Opp Ratnadeep Super Market,
              SR Nagar, Ameerpet, Hyderabad – 500038
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-4 text-xs text-primary-foreground/40">
          <span>
            © {new Date().getFullYear()} Bhashyam Developers. All Rights Reserved.
          </span>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;