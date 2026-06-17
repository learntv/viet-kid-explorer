import { Check, ChevronLeft, ChevronRight, Volume2, X } from "lucide-react";
import { useEffect } from "react";
import type { Stage, Topic } from "@/data/topics";

export function LessonModal({
  open,
  topic,
  stage,
  stageIndex,
  totalStages,
  isCompleted,
  onClose,
  onPrev,
  onNext,
  onComplete,
}: {
  open: boolean;
  topic: Topic;
  stage: Stage;
  stageIndex: number;
  totalStages: number;
  isCompleted: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onComplete: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  const canPrev = stageIndex > 0;
  const canNext = stageIndex < totalStages - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-navy/40 backdrop-blur-md animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-card shadow-soft animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-gradient-primary px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <p className="text-xs font-bold text-white/80">{topic.title}</p>
            <h3 className="truncate font-display text-xl font-extrabold text-white sm:text-2xl">
              Chặng {stageIndex + 1}: {stage.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={!canPrev}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-navy shadow-card transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Chặng trước"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={onNext}
              disabled={!canNext}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-navy shadow-card transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Chặng kế"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-navy shadow-card transition hover:scale-105"
              aria-label="Đóng"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="grid flex-1 grid-cols-1 gap-0 overflow-y-auto md:grid-cols-2">
          {/* Left: illustration */}
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-meadow p-8 md:min-h-full">
            <div className="pointer-events-none absolute top-4 left-4 text-3xl animate-float-slow">☁️</div>
            <div className="pointer-events-none absolute bottom-4 right-4 text-3xl animate-bob">🌸</div>
            <div className="relative grid h-44 w-44 place-items-center rounded-full bg-white/90 shadow-soft sm:h-56 sm:w-56">
              <span className="text-7xl sm:text-8xl">{stage.imageEmoji}</span>
              <span className="absolute -bottom-2 right-2 rounded-full bg-yellow px-3 py-1 text-xs font-extrabold text-navy shadow-card">
                {topic.emoji} {topic.title.split(":")[1]?.trim() || topic.title}
              </span>
            </div>
          </div>

          {/* Right: vocabulary list */}
          <div className="flex flex-col gap-3 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Từ vựng & mẫu câu
            </p>
            <ul className="flex flex-col gap-3">
              {stage.sampleVocabulary.map((v, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-sky px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div className="min-w-0">
                    <p className="font-display text-lg font-extrabold text-navy sm:text-xl">
                      {v.vi}
                    </p>
                    <p className="text-xs text-muted-foreground">{v.en}</p>
                  </div>
                  <button
                    onClick={() => {
                      console.log("[audio]", v.vi);
                    }}
                    className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-card transition hover:scale-105 active:scale-95"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    Nghe
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
              {isCompleted ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-green/40 px-4 py-2 text-sm font-bold text-navy">
                  <Check className="h-4 w-4" strokeWidth={3} /> Đã hoàn thành chặng này
                </span>
              ) : (
                <span className="text-sm text-muted-foreground">
                  Sẵn sàng đánh dấu chặng này là hoàn thành?
                </span>
              )}
              <button
                onClick={onComplete}
                disabled={isCompleted}
                className={[
                  "inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 font-display text-sm font-extrabold transition-all",
                  isCompleted
                    ? "cursor-not-allowed bg-muted text-muted-foreground"
                    : "bg-gradient-sunset text-navy shadow-glow-yellow hover:scale-[1.03]",
                ].join(" ")}
              >
                <Check className="h-4 w-4" strokeWidth={3} />
                Hoàn thành chặng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
