import { Check, Lock, Star } from "lucide-react";

const STAGE_COLORS = [
  { ring: "ring-emerald-300", bg: "bg-emerald-500", from: "from-emerald-400", to: "to-emerald-600" },
  { ring: "ring-sky-300", bg: "bg-sky-500", from: "from-sky-400", to: "to-blue-600" },
  { ring: "ring-violet-300", bg: "bg-violet-500", from: "from-violet-400", to: "to-purple-600" },
  { ring: "ring-amber-300", bg: "bg-amber-500", from: "from-amber-400", to: "to-orange-500" },
  { ring: "ring-rose-300", bg: "bg-rose-500", from: "from-rose-400", to: "to-pink-600" },
];

const STAGE_TITLES = ["Khởi động", "Làm quen", "Nhận biết", "Luyện tập", "Vận dụng"];

export function StageNode({
  index,
  xPercent,
  yPercent,
  isCurrent,
  isCompleted,
  isLocked,
  onClick,
}: {
  index: number;
  xPercent: number;
  yPercent: number;
  flagSrc?: string;
  isCurrent: boolean;
  isCompleted: boolean;
  isLocked?: boolean;
  onClick: () => void;
}) {
  const color = STAGE_COLORS[index];
  const size = isCurrent ? 88 : 76;

  return (
    <button
      onClick={onClick}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 focus:outline-none"
      style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
      aria-label={`Chặng ${index + 1}: ${STAGE_TITLES[index]}`}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className={[
            "relative grid place-items-center rounded-full bg-gradient-to-br shadow-[0_8px_20px_rgba(0,0,0,0.25)] ring-4 ring-white",
            color.from,
            color.to,
            isCurrent ? "ring-[6px] " + color.ring : "",
          ].join(" ")}
          style={{ width: size, height: size }}
        >
          {isLocked ? (
            <Lock className="h-7 w-7 text-white/95" strokeWidth={3} />
          ) : isCompleted ? (
            <Check className="h-9 w-9 text-white" strokeWidth={4} />
          ) : (
            <Star className="h-8 w-8 fill-white text-white" strokeWidth={2} />
          )}
        </div>
        <div className="rounded-2xl bg-white/95 px-3 py-1.5 text-center shadow-md backdrop-blur">
          <p className="font-display text-[11px] font-extrabold text-navy leading-tight">
            Chặng {index + 1}
          </p>
          <p className="font-display text-[11px] font-bold text-navy/80 leading-tight">
            {STAGE_TITLES[index]}
          </p>
          <div className="mt-0.5 flex items-center justify-center gap-0.5">
            {[0, 1, 2].map((s) => (
              <Star
                key={s}
                className={[
                  "h-2.5 w-2.5",
                  isCompleted ? "fill-amber-400 text-amber-400" : "fill-stone-300 text-stone-300",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
