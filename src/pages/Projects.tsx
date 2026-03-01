import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Link } from "react-router-dom";
import { MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ALL BHASHYAM PROJECTS (Hardcoded Legacy Data) */
const staticProjects = [
    { name: "Cristal County I", location: "Nandigama", status: "sold" },
    { name: "Cristal County II", location: "Kollur", status: "sold" },
    { name: "Cristal County III", location: "Nandigama", status: "sold" },
    { name: "Cristal County IV", location: "Nandigama", status: "sold" },
    { name: "Cristal County V", location: "Kollur", status: "sold" },
    { name: "Cristal County VI", location: "Nandigama", status: "sold" },
    { name: "Premium County 1", location: "Tukkuguda", status: "sold" },
    { name: "Premium County 2", location: "Tukkuguda", status: "sold" },
    { name: "Premium County 3", location: "Maheshwaram", status: "sold" },
    { name: "Jasmine County", location: "Kothur", status: "sold" },
    { name: "Heritage County", location: "Kothur", status: "available" },
    { name: "Oxygen County", location: "Kollur", status: "sold" },
    { name: "Pioneer County", location: "Bhanur", status: "sold" },
    { name: "Prestige County", location: "Kollur ORR", status: "available" },
    { name: "Central County", location: "Adibatla", status: "sold" },
    { name: "Platinum County", location: "Kollur", status: "sold" },
    { name: "Diamond County", location: "Kollur", status: "sold" },
    { name: "Ozone County", location: "Kollur", status: "sold" },
    { name: "Classic County", location: "Adibatla", status: "sold" },
    { name: "Royal County", location: "Bibinagar", status: "sold" },
    { name: "North East County", location: "Rudraram", status: "sold" },
    { name: "Golden County", location: "Tellapur", status: "sold" },
    { name: "Global City", location: "Shamshabad", status: "sold" },
    { name: "Westerene County", location: "Shankarpally", status: "available" },
];

const Projects = () => {
    const [filter, setFilter] = useState<"all" | "available" | "sold">("all");
    const [dynamicProjects, setDynamicProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const snap = await getDocs(collection(db, "projects"));
                setDynamicProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
            } catch (err) {
                console.error("Firebase fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Combine static and dynamic projects
    const allProjects = [...dynamicProjects, ...staticProjects];

    const filtered =
        filter === "all"
            ? allProjects
            : allProjects.filter((p) => p.status === filter);

    return (
        <main className="pt-20 bg-background min-h-screen">
            {/* HERO */}
            <section className="bg-navy-gradient text-center py-20 px-4">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
                    Bhashyam Projects
                </h1>
                <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto text-lg">
                    Explore all premium plotted developments by Bhashyam Developers across
                    Hyderabad’s major growth corridors.
                </p>
            </section>

            {/* FILTER TABS */}
            <div className="container mx-auto mt-12 flex justify-center gap-3">
                {["all", "available", "sold"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setFilter(tab as any)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300 ${filter === tab
                                ? "bg-gold text-primary shadow-lg shadow-gold/20 scale-105"
                                : "bg-muted text-muted-foreground hover:bg-gold/10"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* PROJECT GRID */}
            <div className="container mx-auto section-padding">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-24">
                        <Loader2 className="h-14 w-14 text-gold animate-spin mb-4" />
                        <p className="text-muted-foreground font-medium animate-pulse tracking-wide uppercase text-xs">
                            Synchronizing Latest Projects...
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((project, index) => (
                            <div
                                key={`${project.name}-${index}`}
                                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
                            >
                                {/* PROJECT IMAGE */}
                                <div className="aspect-[16/10] w-full overflow-hidden bg-muted relative">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-navy-gradient text-gold/10 font-bold text-3xl uppercase tracking-tighter">
                                            Bhashyam
                                        </div>
                                    )}
                                    {/* Status Overlay */}
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className={`text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full backdrop-blur-md ${project.status === "available"
                                                    ? "bg-green-500/20 text-green-300 border border-green-500/20"
                                                    : "bg-red-500/20 text-red-300 border border-red-500/20"
                                                }`}
                                        >
                                            {project.status === "available" ? "Available" : "Sold Out"}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-7">
                                    {/* NAME */}
                                    <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                                        {project.name}
                                    </h3>

                                    {/* LOCATION */}
                                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/5">
                                            <MapPin size={12} className="text-gold" />
                                        </div>
                                        {project.location}
                                    </div>

                                    {/* CTA */}
                                    <Button
                                        variant="ghost"
                                        className="mt-6 w-full text-gold hover:bg-gold hover:text-primary border border-gold/30 font-bold transition-all duration-300"
                                    >
                                        View Project Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* FINAL CALL TO ACTION */}
            <div className="text-center pb-24 border-t border-border mt-12 pt-12">
                <Link to="/contact">
                    <Button className="bg-gold text-primary hover:bg-gold-light px-12 py-8 font-extrabold text-xl shadow-[0_10px_40px_rgba(212,175,55,0.2)]">
                        BOOK A FREE SITE VISIT
                    </Button>
                </Link>
            </div>
        </main>
    );
};

export default Projects;