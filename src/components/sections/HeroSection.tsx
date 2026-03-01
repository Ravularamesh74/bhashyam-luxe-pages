import { ChevronDown, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />

            {/* Grain Texture */}
            <div className="grain-overlay absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-3xl">
                    {/* Trust Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 backdrop-blur-md">
                        <ShieldCheck className="h-4 w-4 text-gold" />
                        <span className="text-sm font-medium text-gold">
                            HMDA • DTCP • RERA Approved Layouts
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground">
                        Premium Villa Plots
                        <br />
                        <span className="text-gradient-gold">
                            In Hyderabad’s Growth Corridors
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/70 leading-relaxed">
                        Discover investment-ready plotted developments near ORR and
                        RRR zones with strong appreciation potential and premium
                        gated community infrastructure.
                    </p>

                    {/* Location Chips */}
                    <div className="mt-6 flex flex-wrap gap-3 text-xs">
                        {["Shankarpally", "Kothur", "Nandigama", "Kollur"].map(
                            (loc) => (
                                <span
                                    key={loc}
                                    className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-primary-foreground/70 backdrop-blur-sm"
                                >
                                    <MapPin size={12} className="text-gold" />
                                    {loc}
                                </span>
                            )
                        )}
                    </div>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link to="/projects">
                            <Button
                                size="lg"
                                className="bg-gold text-primary hover:bg-gold-light font-semibold px-8 py-6 text-base"
                            >
                                Explore Projects
                            </Button>
                        </Link>

                        <Link to="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-base"
                            >
                                Book Free Site Visit
                            </Button>
                        </Link>
                    </div>

                    {/* Micro Trust Line */}
                    <p className="mt-6 text-sm text-primary-foreground/50">
                        Trusted by thousands of families across Hyderabad for 15+ years.
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="h-8 w-8 text-gold/60" />
            </div>
        </section>
    );
};

export default HeroSection;