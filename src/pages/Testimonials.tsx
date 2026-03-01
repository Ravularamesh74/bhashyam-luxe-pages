import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        text: "Investing with Bhashyam Developers was the best decision. Clear documentation and excellent support throughout the process.",
        name: "Ravi Kumar",
        role: "IT Professional, Gachibowli",
    },
    {
        text: "Premium layout and great location near ORR. The team guided us from booking to registration smoothly.",
        name: "Priya Sharma",
        role: "Doctor, Jubilee Hills",
    },
    {
        text: "Purchased a plot near the RRR corridor and already seeing appreciation. Highly trustworthy developers.",
        name: "Suresh Reddy",
        role: "Business Owner",
    },
    {
        text: "No hidden charges and transparent pricing. Registration was quick and hassle-free.",
        name: "Lakshmi Devi",
        role: "Homemaker",
    },
    {
        text: "Very professional team and premium layouts. I recommended Bhashyam to many of my friends.",
        name: "Arun Varma",
        role: "NRI Investor",
    },
    {
        text: "Best plotted development brand in Hyderabad. Legal clarity and smooth process impressed us.",
        name: "Meena Gupta",
        role: "Entrepreneur",
    },
];

const Testimonials = () => {
    return (
        <main className="pt-20 bg-background">
            {/* HERO */}
            <section className="bg-navy-gradient text-center py-20 px-4">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
                    Customer Testimonials
                </h1>
                <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
                    Hear what our happy customers say about their experience with
                    Bhashyam Developers.
                </p>
            </section>

            {/* TESTIMONIAL GRID */}
            <section className="section-padding">
                <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition"
                        >
                            <Quote className="absolute top-4 right-4 h-10 w-10 text-gold/10" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                “{t.text}”
                            </p>

                            {/* User */}
                            <div className="mt-4">
                                <p className="font-bold text-foreground">{t.name}</p>
                                <p className="text-xs text-muted-foreground">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TRUST STRIP */}
            <section className="bg-cream-dark py-14 text-center">
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    With thousands of satisfied customers and a proven track record
                    in plotted developments, Bhashyam Developers continues to build
                    trust through transparency, quality infrastructure, and prime
                    locations.
                </p>
            </section>

            {/* CTA */}
            <div className="text-center pb-16">
                <Link to="/contact">
                    <button className="bg-gold text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gold-light transition">
                        Book Your Site Visit
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default Testimonials;