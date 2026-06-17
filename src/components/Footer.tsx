import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Lotus decorations */}
      <div className="pointer-events-none absolute -top-4 left-2 text-5xl sm:text-6xl">🪷</div>
      <div className="pointer-events-none absolute -top-4 right-2 text-5xl sm:text-6xl">🪷</div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Caption */}
        <div className="mb-5 flex items-center justify-center gap-2.5 text-pink">
          <Heart className="h-5 w-5 fill-current" />
          <p className="font-display text-lg font-extrabold sm:text-xl">
            Hai cơ quan bảo trợ và đồng hành
          </p>
          <Heart className="h-5 w-5 fill-current" />
        </div>

        {/* Logos card */}
        <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-white/95 p-4 shadow-card sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* UBNVONN */}
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-sky px-4 py-5 sm:py-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[oklch(0.55_0.22_27)] text-2xl shadow-card">
                ⭐
              </div>
              <span className="font-display text-base font-extrabold text-navy sm:text-lg">
                [Logo UBNVONN]
              </span>
            </div>
            {/* CVCEC */}
            <div className="flex items-center justify-center gap-3 rounded-2xl bg-sky px-4 py-5 sm:py-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-xs font-extrabold text-white shadow-card">
                CVCEC
              </div>
              <span className="font-display text-base font-extrabold text-navy sm:text-lg">
                [Logo CVCEC]
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tiếng Việt Online — Dự án phi lợi nhuận
          vì cộng đồng người Việt ở nước ngoài.
        </p>
      </div>

      {/* Wave at very bottom */}
      <svg
        className="block h-10 w-full"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 Q 100 10, 200 30 T 400 30 T 600 30 T 800 30 T 1000 30 T 1200 30 V60 H0 Z"
          fill="oklch(0.86 0.06 235)"
          opacity="0.5"
        />
        <path
          d="M0 45 Q 100 25, 200 45 T 400 45 T 600 45 T 800 45 T 1000 45 T 1200 45 V60 H0 Z"
          fill="oklch(0.78 0.09 235)"
          opacity="0.6"
        />
      </svg>
    </footer>
  );
}
