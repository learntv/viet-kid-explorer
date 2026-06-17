import { Check } from "lucide-react";

const colorMap = {
  green: "oklch(0.78 0.16 145)",
  primary: "oklch(0.62 0.18 250)",
  yellow: "oklch(0.85 0.15 80)",
  purple: "oklch(0.65 0.16 295)",
  pink: "oklch(0.72 0.18 0)",
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
  const fill = colorMap[color];
  const size = isCurrent ? 84 : 70;

  return (
    <button
      onClick={onClick}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 focus:outline-none"
      style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
      aria-label={`Chặng ${index + 1}`}
    >
      <div className="flex flex-col items-center gap-1.5">
        {/* Star SVG */}
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            viewBox="0 0 64 64"
            className={[
              "drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]",
              isCurrent ? "animate-bob" : "",
            ].join(" ")}
            width={size}
            height={size}
          >
            <defs>
              <linearGradient id={`star-grad-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M32 4 L40 23 L60 25 L45 39 L49 59 L32 49 L15 59 L19 39 L4 25 L24 23 Z"
              fill={fill}
              stroke="white"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M32 4 L40 23 L60 25 L45 39 L49 59 L32 49 L15 59 L19 39 L4 25 L24 23 Z"
              fill={`url(#star-grad-${index})`}
            />
          </svg>
          {isCompleted && (
            <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-green text-navy shadow-card ring-2 ring-white">
              <Check className="h-4 w-4" strokeWidth={3.5} />
            </span>
          )}
        </div>
        {/* Label pill */}
        <span
          className={[
            "rounded-full px-2.5 py-0.5 font-display text-xs font-extrabold shadow-card",
            isCurrent
              ? "bg-yellow text-navy ring-2 ring-white"
              : "bg-white/95 text-navy",
          ].join(" ")}
        >
          Chặng {index + 1}
        </span>
      </div>
    </button>
  );
}
