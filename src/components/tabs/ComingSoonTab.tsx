import { Rainbow, Sparkles, Star } from "lucide-react";

export function ComingSoonTab() {
  return (
    <section className="mx-auto flex max-w-4xl items-center justify-center px-4 py-16 sm:px-6">
      <div className="relative w-full overflow-hidden rounded-4xl border border-pink/30 bg-gradient-thanks p-8 text-center shadow-soft sm:p-14">
        <div className="pointer-events-none absolute -top-6 -left-4 text-5xl animate-float-slow">☁️</div>
        <div className="pointer-events-none absolute top-6 right-6 text-4xl animate-bob">⭐</div>
        <div className="pointer-events-none absolute bottom-6 left-10 text-4xl animate-float-slow">🎨</div>
        <div className="pointer-events-none absolute -bottom-3 right-10 text-5xl animate-bob">🧸</div>

        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-glow-yellow">
          <Rainbow className="h-12 w-12 text-pink" />
          <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow" fill="currentColor" />
        </div>

        <h2 className="mt-6 font-display text-3xl font-extrabold text-navy sm:text-5xl">
          Góc của em
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base text-foreground/80 sm:text-lg">
          Mục này đang được xây dựng và sẽ sớm ra mắt các bạn nhỏ nhé!{" "}
          <span className="font-semibold text-pink">(TODO Later)</span>
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-yellow">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-6 w-6" fill="currentColor" />
          ))}
        </div>
      </div>
    </section>
  );
}
