import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Projects", href: "#projects" },
  { label: "Amenities", href: "#amenities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+919000216677" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3 w-3" />
              +91 9000216677
            </a>
            <a href="mailto:naveen@bhashyamplots.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="h-3 w-3" />
              naveen@bhashyamplots.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((s) => (
              <a key={s} href="#" className="hover:text-gold transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Bhashyam Developers Logo" className="h-12 md:h-14" />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-gold text-primary hover:bg-gold-light font-semibold px-6">
                Enquire Now
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-foreground lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="animate-slide-down bg-card/95 backdrop-blur-md lg:hidden border-t border-border">
            <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="bg-gold text-primary hover:bg-gold-light font-semibold w-full">
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
