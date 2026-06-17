export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center font-display text-lg font-bold text-navy sm:text-xl">
          Hai cơ quan bảo trợ và đồng hành
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {["[Logo UBNVONN]", "[Logo CVCEC]"].map((label) => (
            <div
              key={label}
              className="grid h-28 place-items-center rounded-2xl border-2 border-dashed border-primary/30 bg-white text-sm font-semibold text-muted-foreground shadow-card"
            >
              {label}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tiếng Việt Online — Dự án phi lợi nhuận vì
          cộng đồng người Việt ở nước ngoài.
        </p>
      </div>
    </footer>
  );
}
