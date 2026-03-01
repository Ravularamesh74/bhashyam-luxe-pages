import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "Bhashyam Green Valley", location: "Shadnagar", size: "150-400 sq yds", price: "₹4,999/sq yd", gradient: "from-emerald-900/80 to-emerald-700/60" },
  { name: "Bhashyam Royal County", location: "Maheshwaram", size: "200-500 sq yds", price: "₹6,500/sq yd", gradient: "from-amber-900/80 to-amber-700/60" },
  { name: "Bhashyam Smart City", location: "Yadagirigutta", size: "100-300 sq yds", price: "₹3,999/sq yd", gradient: "from-sky-900/80 to-sky-700/60" },
  { name: "Bhashyam Nature Enclave", location: "Vikarabad", size: "200-600 sq yds", price: "₹3,500/sq yd", gradient: "from-green-900/80 to-green-700/60" },
  { name: "Bhashyam Siri Township", location: "Tukkuguda", size: "150-450 sq yds", price: "₹7,200/sq yd", gradient: "from-indigo-900/80 to-indigo-700/60" },
  { name: "Bhashyam Golden Acres", location: "Shamshabad", size: "200-500 sq yds", price: "₹8,000/sq yd", gradient: "from-yellow-900/80 to-yellow-700/60" },
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
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="card-lift group overflow-hidden rounded-xl border border-border bg-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Gradient placeholder image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="rounded-full bg-gold/90 px-3 py-1 text-xs font-bold text-primary">
                    {project.price}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {project.name}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-gold" />
                  {project.location} • {project.size}
                </div>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
