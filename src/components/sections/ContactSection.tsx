import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        // WhatsApp Message Format
        const text = `New Enquiry from Bhashyam Website:
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;

        const whatsappUrl = `https://wa.me/919502653758?text=${encodeURIComponent(
            text
        )}`;

        try {
            // GOOGLE SHEETS / CRM TRACKING (Add your script URL here)
            const SCRIPT_URL = "YOUR_SCRIPT_URL_HERE";

            if (SCRIPT_URL && SCRIPT_URL !== "YOUR_SCRIPT_URL_HERE") {
                await fetch(SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, phone, email, message, date: new Date().toLocaleString() }),
                });
            }

            toast.success("Enquiry received! Opening WhatsApp...");

            // Open WhatsApp in new tab
            window.open(whatsappUrl, "_blank");

            form.reset();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("There was an issue, but opening WhatsApp for you...");
            window.open(whatsappUrl, "_blank");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-navy-gradient relative overflow-hidden">
            {/* Grain Overlay */}
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

                    <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                        Book a Free Site Visit
                    </h2>

                    <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto">
                        Speak with our experts to explore premium plots, get investment
                        guidance, and schedule your personalized site visit.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid gap-12 lg:grid-cols-2">
                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Input
                                required
                                name="name"
                                placeholder="Full Name"
                                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                            />
                            <Input
                                required
                                name="phone"
                                type="tel"
                                placeholder="Phone Number"
                                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                            />
                        </div>

                        <Input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                        />

                        <Textarea
                            name="message"
                            placeholder="Tell us your preferred location or project..."
                            rows={4}
                            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground resize-none"
                        />

                        <Button
                            type="submit"
                            size="lg"
                            disabled={loading}
                            className="w-full bg-gold text-primary hover:bg-gold-light font-semibold text-base py-6"
                        >
                            {loading ? "Sending..." : "Submit & Chat on WhatsApp"}
                        </Button>

                        <p className="text-xs text-primary-foreground/40 text-center">
                            🔒 Your information is secure and will never be shared.
                        </p>
                    </form>

                    {/* CONTACT INFO */}
                    <div className="flex flex-col justify-center space-y-8">
                        {[
                            {
                                icon: Phone,
                                label: "+91 95026 53758 / +91 80087 17779",
                            },
                            {
                                icon: Mail,
                                label: "8008717779chinna@gmail.com",
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
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                                    <Icon className="h-5 w-5 text-gold" />
                                </div>
                                <p className="text-primary-foreground/80">{label}</p>
                            </div>
                        ))}

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/919502653758"
                            target="_blank"
                            className="inline-block mt-4"
                        >
                            <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                                Chat on WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;