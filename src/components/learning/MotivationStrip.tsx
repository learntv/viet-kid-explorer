import { Gift, Heart, Star } from "lucide-react";

const ITEMS = [
  {
    icon: Heart,
    bg: "bg-rose-100",
    color: "text-rose-500",
    fill: "fill-rose-400",
    title: "Học mỗi ngày một chút,",
    desc: "Tiếng Việt thêm yêu hơn!",
  },
  {
    icon: Star,
    bg: "bg-amber-100",
    color: "text-amber-500",
    fill: "fill-amber-400",
    title: "Học vui – Hiểu sâu",
    desc: "Tiến bộ mỗi ngày",
  },
  {
    icon: Gift,
    bg: "bg-violet-100",
    color: "text-violet-500",
    fill: "fill-violet-400",
    title: "Cố gắng hôm nay",
    desc: "Tự tin ngày mai",
  },
];

export function MotivationStrip() {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
      {ITEMS.map((it, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-2.5 shadow-md ring-1 ring-sky-100 backdrop-blur"
        >
          <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${it.bg}`}>
            <it.icon className={`h-5 w-5 ${it.color} ${it.fill}`} strokeWidth={2} />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="font-display text-sm font-extrabold text-navy">{it.title}</p>
            <p className="text-xs font-semibold text-muted-foreground">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
