import { Check } from "lucide-react";

const colorMap = {
  primary: "bg-primary text-white",
  yellow: "bg-yellow text-navy",
  pink: "bg-pink text-white",
  purple: "bg-purple text-white",
  green: "bg-green text-navy",
} as const;

export function StageNode({
  index,
  xPercent,
  yPercent,
  color,
  isCurrent,
  isCompleted,
  onClick,
}: {
  index: number;
  xPercent: number;
  yPercent: number;
  color: keyof typeof colorMap;
  isCurrent: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 focus:outline-none"
      style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
      aria-label={`Chặng ${index + 1}`}
    >
      <span
        className={[
          "relative grid h-20 w-20 place-items-center rounded-full font-display text-base font-extrabold ring-4 ring-white sm:h-24 sm:w-24 sm:text-lg",
          colorMap[color],
          isCurrent ? "shadow-glow-primary scale-110" : "shadow-card",
        ].join(" ")}
      >
        <span className="leading-tight text-center">
          Chặng
          <br />
          {index + 1}
        </span>
        {isCompleted && (
          <span className="absolute -top-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-green text-navy shadow-card ring-2 ring-white">
            <Check className="h-4 w-4" strokeWidth={3} />
          </span>
        )}
      </span>
    </button>
  );
}
