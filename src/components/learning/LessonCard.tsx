import { Check, ChevronLeft, ChevronRight, Lock, Volume2 } from "lucide-react";
import type { Stage, Topic } from "@/data/topics";
import kidsAodai from "@/assets/kids-aodai.jpg";

export function LessonCard({
  topic,
  stage,
  stageIndex,
  totalStages,
  isCompleted,
  allDone,
  isLast,
  onPrev,
  onNext,
  onComplete,
  onNextTopic,
}: {
  topic: Topic;
  stage: Stage;
  stageIndex: number;
  totalStages: number;
  isCompleted: boolean;
  allDone: boolean;
  isLast: boolean;
  onPrev: () => void;
  onNext: () => void;
  onComplete: () => void;
  onNextTopic: () => void;
}) {
  const canPrev = stageIndex > 0;
  const canNext = stageIndex < totalStages - 1;
  const canAdvance = allDone && !isLast;

  return (
    <div className="rounded-3xl border-4 border-white bg-card shadow-soft">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border/60 px-5 py-4 sm:px-7">
        <div className="min-w-0">
          <p className="text-xs font-bold text-muted-foreground">
            {topic.title}
          </p>
          <h3 className="truncate font-display text-xl font-extrabold text-navy sm:text-2xl">
            Chặng {stageIndex + 1}: {stage.title}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={onComplete}
            disabled={isCompleted}
            className={[
              "hidden items-center gap-1.5 rounded-full px-3 py-2 text-xs font-extrabold shadow-card transition sm:inline-flex",
              isCompleted
                ? "cursor-not-allowed bg-green/40 text-navy"
                : "bg-green text-navy hover:scale-105",
            ].join(" ")}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
            {isCompleted ? "Đã hoàn thành" : "Hoàn thành"}
          </button>
          <button
            onClick={onPrev}
            disabled={!canPrev}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-card ring-1 ring-border transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Chặng trước"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button
            onClick={onNext}
            disabled={!canNext}
            className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white shadow-card transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Chặng kế"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {/* Illustration */}
        <div className="relative overflow-hidden bg-sky p-4 md:p-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={kidsAodai}
              alt="Hai bạn nhỏ mặc áo dài chào nhau"
              width={768}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute right-6 top-6 rounded-full bg-yellow px-3 py-1 text-xs font-extrabold text-navy shadow-card">
            {topic.emoji} {topic.title.split(":")[1]?.trim() || ""}
          </span>
        </div>

        {/* Vocabulary */}
        <div className="flex flex-col gap-3 p-5 sm:p-6">
          <ul className="flex flex-col gap-2.5">
            {stage.sampleVocabulary.slice(0, 4).map((v, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-3 border-b border-dashed border-border pb-2.5 last:border-0 last:pb-0"
              >
                <div className="min-w-0">
                  <p className="font-display text-lg font-extrabold text-navy sm:text-xl">
                    {v.vi}
                  </p>
                  <p className="text-xs italic text-pink">{v.en}</p>
                </div>
                <button
                  onClick={() => console.log("[audio]", v.vi)}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border-2 border-primary bg-white px-3 py-1.5 text-xs font-extrabold text-primary shadow-card transition hover:scale-105 hover:bg-primary hover:text-white active:scale-95"
                >
                  <Volume2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  Nghe
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile complete button */}
          <button
            onClick={onComplete}
            disabled={isCompleted}
            className={[
              "mt-2 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-extrabold shadow-card transition sm:hidden",
              isCompleted
                ? "cursor-not-allowed bg-green/40 text-navy"
                : "bg-green text-navy",
            ].join(" ")}
          >
            <Check className="h-4 w-4" strokeWidth={3} />
            {isCompleted ? "Đã hoàn thành chặng này" : "Hoàn thành chặng"}
          </button>
        </div>
      </div>

      {/* Footer — flip page button */}
      <div className="border-t border-border/60 p-4 sm:p-5">
        <button
          disabled={!canAdvance}
          onClick={onNextTopic}
          className={[
            "flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-3.5 font-display text-base font-extrabold shadow-card transition-all",
            canAdvance
              ? "bg-gradient-sunset text-navy hover:scale-[1.01] shadow-glow-yellow"
              : "cursor-not-allowed bg-muted text-muted-foreground",
          ].join(" ")}
        >
          {!canAdvance && <Lock className="h-4 w-4" />}
          {isLast && allDone
            ? "Đã hoàn thành lộ trình"
            : "Lật sang trang tiếp theo"}
          {canAdvance && <ChevronRight className="h-5 w-5" />}
        </button>
        {!canAdvance && !isLast && (
          <p className="mt-2 text-center text-xs font-medium text-muted-foreground">
            Hoàn thành cả 5 chặng để mở khóa trang tiếp theo!
          </p>
        )}
      </div>
    </div>
  );
}
