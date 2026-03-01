import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Amenities", href: "/amenities" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-xs">
          {/* Contact */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+919502653758"
              className="flex items-center gap-1.5 hover:text-gold"
            >
              <Phone size={12} />
              +91 95026 53758 / +91 80087 17779
            </a>

            <a
              href="mailto:8008717779chinna@gmail.com"
              className="flex items-center gap-1.5 hover:text-gold"
            >
              <Mail size={12} />
              8008717779chinna@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-gold">
              <Facebook size={14} />
            </a>
            <a href="#" className="hover:text-gold">
              <Instagram size={14} />
            </a>
            <a href="#" className="hover:text-gold">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-border"
            : "bg-card"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Bhashyam Developers"
              className="h-12 md:h-14"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-gold transition"
              >
                {link.label}
              </NavLink>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919502653758"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5">
                <MessageCircle size={16} className="mr-2" />
                WhatsApp
              </Button>
            </a>

            {/* Primary CTA */}
            <Link to="/contact">
              <Button className="bg-gold text-primary hover:bg-gold-light font-semibold px-6">
                Enquire Now
              </Button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="text-foreground lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-lg animate-slide-down">
            <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-gold"
                >
                  {link.label}
                </NavLink>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/919502653758"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                  WhatsApp Enquiry
                </Button>
              </a>

              {/* Enquiry */}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gold text-primary hover:bg-gold-light">
                  Enquire Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;