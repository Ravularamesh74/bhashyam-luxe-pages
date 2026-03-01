import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import emeraldCounty from "@/assets/emerald-county.jpg";
import heritageCounty from "@/assets/heritage-county.png";
import cyberCounty from "@/assets/cyber-county.png";

const projects = [
  {
    name: "Cyber County",
    location: "Mangalpally",
    desc: "Prestigious project near Kongara Kalan collector's office with excellent connectivity.",
    image: cyberCounty,
    status: "available",
    featured: true,
    gradient: "from-amber-900/80 to-amber-700/60",
  },
  {
    name: "Emerald County",
    location: "Thimmapur",
    desc: "53rd project by Bhashyam Developers near Bangalore Highway growth corridor.",
    image: emeraldCounty,
    status: "available",
    featured: true,
  },
  {
    name: "RRR County",
    location: "Shankarpally",
    desc: "Premium plots near Regional Ring Road (RRR) investment zone.",
    gradient: "from-amber-900/80 to-amber-700/60",
    status: "available",
    featured: true,
  },
  {
    name: "Landmark County",
    location: "Kothur",
    desc: "Strategic location near industrial and logistics expansion belt.",
    gradient: "from-rose-900/80 to-rose-700/60",
    status: "available",
  },
  {
    name: "Prestige County",
    location: "Nandigama",
    desc: "Premium plotting venture in fast-growing west Hyderabad region.",
    gradient: "from-teal-900/80 to-teal-700/60",
    status: "available",
  },
  {
    name: "Heritage County",
    location: "Kothur",
    desc: "20-acre layout near Microsoft Data Center and DLF Township.",
    image: heritageCounty,
    status: "sold",
  },
  {
    name: "Crystal County",
    location: "Nandigama",
    desc: "Elegant venture offering premium residential plots near BDL Bhanur.",
    gradient: "from-indigo-900/80 to-indigo-700/60",
    status: "available",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<"all" | "available" | "sold">("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.status === filter);

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

          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Premium Layouts in Growth Corridors
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore HMDA & DTCP approved plotted developments located in
            Hyderabad’s fastest appreciating zones.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="mt-8 flex justify-center gap-3">
          {["all", "available", "sold"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={`px-4 py-1.5 rounded-full text-sm capitalize transition ${filter === tab
                  ? "bg-gold text-primary font-semibold"
                  : "bg-muted text-muted-foreground hover:bg-gold/10"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <div
              key={project.name}
              className={`group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 ${project.featured ? "ring-1 ring-gold/40" : ""
                }`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${project.gradient}`}
                  />
                )}

                {/* STATUS BADGE */}
                {project.status === "sold" ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <span className="border-2 border-red-500 text-red-500 font-bold px-4 py-1.5 rotate-[-12deg] rounded-full">
                      SOLD OUT
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Available
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
          <a href="#contact">
            <Button className="bg-gold text-primary hover:bg-gold-light px-8 py-6 font-semibold">
              Book Free Site Visit
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;