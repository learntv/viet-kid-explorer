import { BookOpen, Home, Star } from "lucide-react";
import type { TabKey } from "@/lib/tabs";

const tabs: {
  key: TabKey;
  label: string;
  Icon: typeof Home;
  iconColor: string;
}[] = [
  { key: "info", label: "Thông tin", Icon: Home, iconColor: "text-primary" },
  { key: "learn", label: "Vui học Tiếng Việt", Icon: BookOpen, iconColor: "text-[oklch(0.6_0.18_30)]" },
  { key: "kids", label: "Góc của em", Icon: Star, iconColor: "text-pink" },
];

export function Navbar({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (k: TabKey) => void;
}) {
  return (
    <header className="sticky top-3 z-40 mx-3 sm:mx-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-3xl bg-gradient-primary px-4 py-3 shadow-soft sm:px-6">
        {/* Logo */}
        <button
          onClick={() => onChange("info")}
          className="flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-card">
            {/* Conical hat SVG */}
            <svg viewBox="0 0 64 64" className="absolute -top-2 h-7 w-7">
              <path d="M32 6 L52 36 Q32 32 12 36 Z" fill="oklch(0.85 0.12 80)" stroke="oklch(0.45 0.1 60)" strokeWidth="2" strokeLinejoin="round" />
              <ellipse cx="32" cy="36" rx="20" ry="3" fill="oklch(0.65 0.13 60)" opacity="0.6" />
            </svg>
            <span className="mt-3 text-xl">📖</span>
          </div>
          <div className="text-left leading-none">
            <div className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              Tiếng Việt{" "}
              <span className="italic text-yellow">Online</span>
            </div>
          </div>
        </button>

        {/* Tabs */}
        <ul className="flex items-center gap-2">
          {tabs.map(({ key, label, Icon, iconColor }) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <button
                  onClick={() => onChange(key)}
                  className={[
                    "flex items-center gap-2 rounded-2xl border-2 px-3 py-2.5 text-sm font-extrabold transition-all sm:px-5",
                    isActive
                      ? "bg-yellow border-[oklch(0.78_0.16_75)] text-navy shadow-glow-yellow scale-[1.04]"
                      : "bg-white border-white text-navy hover:scale-[1.02] hover:shadow-card",
                  ].join(" ")}
                >
                  <Icon
                    className={`h-5 w-5 ${isActive ? "text-navy" : iconColor}`}
                    strokeWidth={2.5}
                  />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
