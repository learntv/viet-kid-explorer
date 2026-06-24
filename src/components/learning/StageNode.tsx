import { Check } from "lucide-react";

export function StageNode({
  index,
  xPercent,
  yPercent,
  flagSrc,
  isCurrent,
  isCompleted,
  onClick,
}: {
  index: number;
  xPercent: number;
  yPercent: number;
  flagSrc: string;
  isCurrent: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  const size = isCurrent ? 100 : 85;

  return (
    <button
      onClick={onClick}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 focus:outline-none"
      style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
      aria-label={`Chặng ${index + 1}`}
    >
      <div className="flex flex-col items-center gap-1.5">
        <div className="relative" style={{ width: size, height: size }}>
          <img
            src={flagSrc}
            alt={`Lá cờ chặng ${index + 1}`}
            width={size}
            height={size}
            className={[
              "h-full w-full object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)]",
              isCurrent ? "animate-bob" : "",
            ].join(" ")}
          />
          {/* Ground shadow */}
          <div
            className="absolute -bottom-1 left-1/2 h-2 -translate-x-1/2 rounded-[100%] bg-black/20 blur-sm"
            style={{ width: size * 0.7 }}
          />
          {isCompleted && (
            <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-green text-navy shadow-card ring-2 ring-white">
              <Check className="h-4 w-4" strokeWidth={3.5} />
            </span>
          )}
        </div>
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
