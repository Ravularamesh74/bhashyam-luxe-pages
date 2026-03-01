import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { Users, Building2, CalendarDays, MapPinned } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Happy Families" },
  { icon: Building2, value: 20, suffix: "+", label: "Premium Projects" },
  { icon: CalendarDays, value: 15, suffix: "+", label: "Years of Trust" },
  { icon: MapPinned, value: 10, suffix: "+", label: "Locations in Hyderabad" },
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
  const count = useCounter(value, 2000, start);
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <Icon className="h-8 w-8 text-gold" />
      <span className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-primary-foreground/60">{label}</span>
    </div>
  );
};

const StatsBar = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="bg-navy-gradient relative">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4 md:py-16">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} start={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
