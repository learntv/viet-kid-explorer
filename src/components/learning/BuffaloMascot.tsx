export function BuffaloMascot({
  xPercent,
  yPercent,
}: {
  xPercent: number;
  yPercent: number;
}) {
  return (
    <div
      className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[110%] transition-all duration-700 ease-in-out"
      style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
    >
      <div className="animate-bob">
        {/* Speech bubble */}
        <div className="mb-1 rounded-2xl bg-white px-3 py-1 text-xs font-bold text-navy shadow-card">
          Cố lên!
        </div>
        {/* Buffalo + hat */}
        <div className="relative grid h-16 w-16 place-items-center text-5xl drop-shadow-md">
          <span className="absolute -top-3 text-3xl">🪭</span>
          <span>🐃</span>
        </div>
      </div>
    </div>
  );
}
