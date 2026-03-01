import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import {
  Users,
  Building2,
  CalendarDays,
  MapPinned,
} from "lucide-react";

/* UPDATED REAL ESTATE STATS */
const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Happy Customers" },
  { icon: Building2, value: 50, suffix: "+", label: "Projects Delivered" },
  { icon: CalendarDays, value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: MapPinned, value: 12, suffix: "+", label: "Prime Locations" },
];

const StatItem = ({
  icon: Icon,
  value,
  suffix,
  label,
  start,
}: {
  icon: typeof Users;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) => {
  const count = useCounter(value, 1800, start);

  return (
    <div className="relative flex flex-col items-center py-6 text-center group">
      {/* Glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-gold/10 to-transparent blur-xl" />

      <Icon className="h-8 w-8 text-gold mb-2" />

      <span className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
        {count}
        {suffix}
      </span>

      <span className="text-sm text-primary-foreground/60 mt-1">
        {label}
      </span>
    </div>
  );
};

const StatsBar = () => {
  const { ref, isVisible } = useScrollAnimation(0.25);

  return (
    <section ref={ref} className="bg-navy-gradient relative">
      {/* Subtle divider top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4 md:py-16">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="relative"
          >
            <StatItem {...stat} start={isVisible} />

            {/* Vertical divider (desktop only) */}
            {i !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gold/20" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
};

export default StatsBar;