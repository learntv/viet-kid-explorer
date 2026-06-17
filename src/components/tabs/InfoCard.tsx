import type { LucideIcon } from "lucide-react";

const accentMap = {
  primary: "bg-primary text-primary-foreground",
  yellow: "bg-yellow text-navy",
  pink: "bg-pink text-white",
  purple: "bg-purple text-white",
} as const;

export function InfoCard({
  heading,
  body,
  Icon,
  accent,
}: {
  heading: string;
  body: string;
  Icon: LucideIcon;
  accent: keyof typeof accentMap;
}) {
  return (
    <article className="group flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft sm:p-8">
      <div className="flex items-center gap-3">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl shadow-card transition-transform group-hover:scale-105 ${accentMap[accent]}`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="font-display text-xl font-extrabold text-navy sm:text-2xl">
          {heading}
        </h3>
      </div>
      <p className="text-[15px] leading-relaxed text-foreground/80 sm:text-base">
        {body}
      </p>
    </article>
  );
}
