import { BookOpen, Info, Star } from "lucide-react";
import type { TabKey } from "@/lib/tabs";

const tabs: { key: TabKey; label: string; Icon: typeof Info }[] = [
  { key: "info", label: "Thông tin", Icon: Info },
  { key: "learn", label: "Vui học Tiếng Việt", Icon: BookOpen },
  { key: "kids", label: "Góc của em", Icon: Star },
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
        <button
          onClick={() => onChange("info")}
          className="flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-2xl shadow-card">
            🐃
          </div>
          <div className="text-left leading-tight">
            <div className="font-display text-lg font-extrabold text-white sm:text-xl">
              Tiếng Việt Online
            </div>
            <div className="hidden text-xs font-medium text-white/80 sm:block">
              Cùng Trâu con đội nón lá
            </div>
          </div>
        </button>

        <ul className="flex items-center gap-1 sm:gap-2">
          {tabs.map(({ key, label, Icon }) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <button
                  onClick={() => onChange(key)}
                  className={[
                    "flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-bold transition-all sm:px-4 sm:py-2.5",
                    isActive
                      ? "bg-yellow text-navy shadow-glow-yellow scale-[1.03]"
                      : "text-white/90 hover:bg-white/15",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
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
