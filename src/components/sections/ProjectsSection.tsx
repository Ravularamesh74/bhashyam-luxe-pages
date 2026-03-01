import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* FEATURED PROJECTS FOR HOMEPAGE */
const projects = [
    {
        name: "RRR County",
        location: "Shankarpally",
        desc: "Premium villa plots near Regional Ring Road growth corridor.",
        status: "available",
        featured: true,
    },
    {
        name: "Heritage County",
        location: "Kothur",
        desc: "Strategic plotted development near IT expansion zones.",
        status: "available",
    },
    {
        name: "Prestige County",
        location: "Nandigama",
        desc: "High appreciation plots in fast-growing west Hyderabad.",
        status: "available",
    },
    {
        name: "Oxygen County",
        location: "Kollur",
        desc: "Premium gated layout near ORR connectivity belt.",
        status: "available",
    },
    {
        name: "Crystal County",
        location: "Nandigama",
        desc: "Successful plotted venture with strong investor demand.",
        status: "sold",
    },
    {
        name: "Premium County",
        location: "Tukkuguda",
        desc: "Early-phase development near airport growth corridor.",
        status: "sold",
    },
];

const ProjectsSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="projects" className="section-padding bg-cream-dark">
            <div
                ref={ref}
                className={`container mx-auto fade-up ${isVisible ? "visible" : ""
                    }`}
            >
                {/* Heading */}
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-gold">
                        Our Projects
                    </span>

                    <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Featured Layouts
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Discover premium plotted developments located in Hyderabad’s
                        most promising investment corridors.
                    </p>
                </div>

                {/* GRID */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className={`group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 ${project.featured ? "ring-1 ring-gold/40" : ""
                                }`}
                        >
                            {/* Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-navy via-navy-light to-navy flex items-center justify-center">
                                <span className="text-gold/20 font-display text-xl">
                                    {project.name}
                                </span>

                                {/* Status Badge */}
                                {project.status === "available" ? (
                                    <span className="absolute top-3 right-3 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">
                                        Available
                                    </span>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                        <span className="border-2 border-red-500 text-red-500 font-bold px-4 py-1.5 rotate-[-12deg] rounded-full">
                                            SOLD OUT
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-display text-xl font-bold text-foreground">
                                    {project.name}
                                </h3>

                                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin size={14} className="text-gold" />
                                    {project.location}
                                </div>

                                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                                    {project.desc}
                                </p>

                                <Button
                                    variant="ghost"
                                    className="mt-4 w-full justify-between text-gold hover:bg-gold/5"
                                >
                                    View Details
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link to="/projects">
                        <Button className="bg-gold text-primary hover:bg-gold-light px-8 py-6 font-semibold">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;