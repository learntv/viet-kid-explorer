import { Heart } from "lucide-react";
import lotusBanner from "@/assets/lotus-banner.jpg";

export function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Banner section with lotus background, fading into page bg at top */}
      <div
        className="relative w-full bg-cover bg-center pb-4 sm:pb-20"
        style={{ backgroundImage: `url(${lotusBanner})` }}
      >
        {/* Top fade gradient blending into page background */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[oklch(0.97_0.01_250)] to-transparent pointer-events-none [background-image:linear-gradient(to_bottom,in_oklch,oklch(0.97_0.01_250),transparent)]" />

        <div className="relative mx-auto max-w-4xl px-4 pt-10 sm:px-6 sm:pt-12">
          {/* Dashed frame containing logos — narrow width, tight wrap */}
          <div className="relative mx-auto w-fit rounded-full border-2 border-dashed border-primary/50 bg-white/40 px-6 pt-7 pb-4 backdrop-blur-sm sm:px-8 sm:pt-8 sm:pb-5">
            {/* Caption overlapping the top border */}
            {/* Caption overlapping the top border */}
            <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap px-3 bg-white rounded-full">
              {/* Thay đổi: Thêm `bg-white` (hoặc `bg-[#f8f9fa]` tùy màu nền của bạn) và đảm bảo có `px-3` để tạo khoảng trống che viền */}
              <Heart className="h-4 w-4 fill-pink text-pink" />
              <p className="font-display text-sm font-extrabold text-navy sm:text-base">
                Hai cơ quan bảo trợ và đồng hành
              </p>
              <Heart className="h-4 w-4 fill-pink text-pink" />
            </div>

            {/* Logos row */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[oklch(0.55_0.22_27)] text-sm">
                  ⭐
                </div>
                <span className="font-display text-sm font-extrabold text-navy">[Logo UBNVONN]</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-[9px] font-extrabold text-white">
                  CVCEC
                </div>
                <span className="font-display text-sm font-extrabold text-navy">[Logo CVCEC]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tiếng Việt Online — Dự án phi lợi nhuận vì cộng đồng người Việt ở nước ngoài.
        </p>
      </div>
    </footer>
  );
}
