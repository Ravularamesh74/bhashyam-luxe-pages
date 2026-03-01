import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <MapPin className="h-7 w-7 text-gold" />
          <div>
            <span className="font-display text-xl font-bold text-primary-foreground">
              Bhashyam
            </span>
            <span className="ml-1 font-display text-xl font-light text-gold">
              Developer
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
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
          className="text-primary-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="animate-slide-down bg-primary/95 backdrop-blur-md lg:hidden">
          <div className="container mx-auto flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-gold"
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
  );
};

export default Navbar;
