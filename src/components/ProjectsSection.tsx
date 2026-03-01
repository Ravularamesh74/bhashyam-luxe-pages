import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import emeraldCounty from "@/assets/emerald-county.jpg";
import heritageCounty from "@/assets/heritage-county.png";
import cyberCounty from "@/assets/cyber-county.png";

const projects = [
  {
    name: "Emerald County",
    location: "Thimmapur",
    desc: "53rd project by Bhashyam Developers, located approx 2 km from Bangalore Highway.",
    image: emeraldCounty,
    status: "available",
  },
  {
    name: "Heritage County",
    location: "Kothur, Nandigama",
    desc: "20-acre project near Microsoft Data Center and DLF Township.",
    image: heritageCounty,
    status: "sold",
  },
  {
    name: "Rainbow County",
    location: "West Hyderabad",
    desc: "Premium gated community villa plots with world-class amenities.",
    gradient: "from-emerald-900/80 to-emerald-700/60",
    status: "available",
  },
  {
    name: "Cyber County",
    location: "Mangalpally, Rangareddy",
    desc: "Prestigious project close to Kongara Kalan collector's office.",
    image: cyberCounty,
    status: "available",
  },
  {
    name: "Oxygen County",
    location: "Near Mumbai Highway & ORR",
    desc: "Residential plot project with gated community, internal roads, and landscaping.",
    gradient: "from-sky-900/80 to-sky-700/60",
    status: "sold",
  },
  {
    name: "Crystal County",
    location: "Nandigama, Rangareddy",
    desc: "Elegant venture offering premium residential plots near BDL Bhanur.",
    gradient: "from-indigo-900/80 to-indigo-700/60",
    status: "sold",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding bg-cream-dark">
      <div ref={ref} className={`container mx-auto fade-up ${isVisible ? "visible" : ""}`}>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Our Projects
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our Premium Layouts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Government-approved plots of 67 to 400 square yards in prime locations throughout Hyderabad
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="card-lift group overflow-hidden rounded-xl border border-border bg-card"
              style={{ animationDelay: `${i * 0.1}s` }}
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
                  <div className={`h-full w-full bg-gradient-to-br ${project.gradient}`} />
                )}
                {project.status === "sold" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/60">
                    <span className="rounded-full border-2 border-destructive px-4 py-1.5 text-sm font-bold uppercase text-destructive rotate-[-12deg]">
                      Sold Out
                    </span>
                  </div>
                )}
                {project.status === "available" && (
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-gold/90 px-3 py-1 text-xs font-bold text-primary">
                      Available
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {project.name}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-gold shrink-0" />
                  {project.location}
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                  {project.desc}
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-between text-gold hover:text-gold-dark hover:bg-gold/5"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact">
            <Button size="lg" className="bg-gold text-primary hover:bg-gold-light font-semibold px-8 py-6 text-base">
              Schedule a Site Visit
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
