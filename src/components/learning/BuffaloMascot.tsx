import trauConAsset from "@/assets/trau-con.png.asset.json";

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
        top: `calc(${yPercent}% - 110px)`,
      }}
    >
      <div className="relative flex flex-col items-center animate-bob">
        <img
          src={trauConAsset.url}
          alt="Trâu con đội nón lá"
          className="h-24 w-24 object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
        />
        {/* Golden platform */}
        <div className="relative -mt-1 h-3 w-20">
          <div className="absolute inset-x-0 top-0 h-3 rounded-full bg-yellow shadow-card" />
          <div className="absolute inset-x-2 top-0 h-1.5 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  );
}
