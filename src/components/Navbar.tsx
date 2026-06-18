import { BookOpen, Home, Search, Star, User } from "lucide-react";
import type { TabKey } from "@/lib/tabs";

const tabs: {
  key: TabKey;
  label: string;
  Icon: typeof Home;
}[] = [
  { key: "info", label: "Trang chủ", Icon: Home },
  { key: "learn", label: "Vui học Tiếng Việt", Icon: BookOpen },
  { key: "kids", label: "Sản phẩm của em", Icon: Star },
];

export function Navbar({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (k: TabKey) => void;
}) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-[0_2px_8px_-2px_oklch(0.22_0.05_30/0.12)]">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <button
          onClick={() => onChange("info")}
          className="flex shrink-0 items-center gap-2.5 transition-transform hover:scale-[1.02]"
        >
          <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-primary shadow-card">
            <span className="text-xl">📖</span>
          </div>
          <div className="text-left leading-tight">
            <div className="font-display text-base font-extrabold text-primary leading-none">Vui Học</div>
            <div className="font-display text-base font-extrabold text-navy leading-none">Tiếng Việt</div>
          </div>
        </button>

        {/* Nav tabs — centered */}
        <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {tabs.map(({ key, label, Icon }) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <button
                  onClick={() => onChange(key)}
                  className={[
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all",
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.5} />
                  <span>{label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: search + login */}
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 sm:flex">
            <Search className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
            <input
              type="text"
              placeholder="Tìm bài học, chủ đề..."
              className="w-40 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none lg:w-52"
            />
          </div>
          <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md">
            <User className="h-4 w-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">Đăng nhập</span>
          </button>
        </div>

        {/* Mobile nav toggle — small screens */}
        <ul className="flex items-center gap-1 md:hidden">
          {tabs.map(({ key, Icon }) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <button
                  onClick={() => onChange(key)}
                  className={[
                    "grid h-9 w-9 place-items-center rounded-full transition-all",
                    isActive ? "bg-primary text-white" : "text-foreground/60 hover:bg-muted",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
