export function BuffaloMascot({
  xPercent,
  yPercent,
}: {
  xPercent: number;
  yPercent: number;
}) {
  return (
    <div
      className="pointer-events-none absolute z-20 -translate-x-1/2 transition-all duration-700 ease-in-out"
      style={{
        left: `${xPercent}%`,
        // Stand the mascot above the star center
        top: `calc(${yPercent}% - 70px)`,
      }}
    >
      <div className="relative flex flex-col items-center animate-bob">
        {/* Buffalo with hat + flag */}
        <div className="relative grid h-16 w-16 place-items-center text-5xl drop-shadow-md">
          {/* Conical hat */}
          <svg viewBox="0 0 64 64" className="absolute -top-3 h-9 w-9">
            <path
              d="M32 4 L54 30 Q32 26 10 30 Z"
              fill="oklch(0.86 0.13 80)"
              stroke="oklch(0.45 0.1 60)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <ellipse cx="32" cy="30" rx="22" ry="3" fill="oklch(0.65 0.13 60)" opacity="0.6" />
          </svg>
          <span className="text-5xl">🐃</span>
          {/* Flag */}
          <div className="absolute -right-3 top-1 flex items-start">
            <div className="h-9 w-0.5 bg-[oklch(0.4_0.05_60)]" />
            <div className="ml-[-1px] grid h-5 w-7 place-items-center rounded-sm bg-[oklch(0.55_0.22_27)] text-[10px] text-yellow shadow-sm">
              ★
            </div>
          </div>
        </div>
        {/* Golden platform */}
        <div className="relative -mt-1 h-3 w-20">
          <div className="absolute inset-x-0 top-0 h-3 rounded-full bg-yellow shadow-card" />
          <div className="absolute inset-x-2 top-0 h-1.5 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  );
}
