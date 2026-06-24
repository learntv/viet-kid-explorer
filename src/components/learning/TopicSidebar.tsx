import { BookOpen, ChevronRight, Lock, Star } from "lucide-react";
import type { Topic } from "@/data/topics";

export function TopicSidebar({
  topics,
  currentTopicIndex,
  completedStagesCount,
  totalStages,
  allDone,
  isLast,
  canAdvance,
  onSelectTopic,
  onNextTopic,
}: {
  topics: Topic[];
  currentTopicIndex: number;
  completedStagesCount: number;
  totalStages: number;
  allDone: boolean;
  isLast: boolean;
  canAdvance: boolean;
  onSelectTopic: (i: number) => void;
  onNextTopic: () => void;
}) {
  return (
    <aside className="flex flex-col gap-3 rounded-3xl bg-white/95 p-4 shadow-soft ring-1 ring-sky-100 backdrop-blur">
      {/* Header */}
      <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 px-3 py-2.5 ring-1 ring-sky-100">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm">
          <BookOpen className="h-5 w-5 text-sky-600" />
        </div>
        <div className="min-w-0">
          <p className="font-display text-sm font-extrabold text-navy">Tiến độ chương trình</p>
          <p className="text-[11px] font-semibold text-muted-foreground">
            8 chủ đề · 40 bài học
          </p>
        </div>
      </div>

      {/* Topic list */}
      <ul className="flex flex-col gap-1.5">
        {topics.map((t, i) => {
          const isActive = i === currentTopicIndex;
          const isPast = i < currentTopicIndex;
          const isLocked = i > currentTopicIndex;
          const shortTitle = t.title.split(":")[1]?.trim() ?? t.title;
          return (
            <li key={t.id}>
              <button
                onClick={() => !isLocked && onSelectTopic(i)}
                disabled={isLocked}
                className={[
                  "flex w-full items-center gap-2.5 rounded-2xl px-3 py-2 text-left transition",
                  isActive
                    ? "bg-gradient-to-r from-sky-100 to-blue-100 ring-2 ring-sky-300"
                    : isLocked
                      ? "bg-stone-50 text-stone-400"
                      : "bg-white hover:bg-sky-50 ring-1 ring-stone-100",
                ].join(" ")}
              >
                <span
                  className={[
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full font-display text-xs font-extrabold",
                    isActive
                      ? "bg-sky-500 text-white"
                      : isPast
                        ? "bg-emerald-500 text-white"
                        : "bg-stone-200 text-stone-500",
                  ].join(" ")}
                >
                  {i + 1}
                </span>
                <span
                  className={[
                    "flex-1 truncate font-display text-sm font-bold",
                    isActive ? "text-navy" : isLocked ? "text-stone-400" : "text-navy/80",
                  ].join(" ")}
                >
                  {shortTitle}
                </span>
                {isActive ? (
                  <span className="flex shrink-0 items-center gap-0.5 text-[11px] font-extrabold text-amber-600">
                    {completedStagesCount}/{totalStages}
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  </span>
                ) : isPast ? (
                  <ChevronRight className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Lock className="h-3.5 w-3.5 text-stone-400" />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Flip page button */}
      <button
        onClick={onNextTopic}
        disabled={!canAdvance}
        className={[
          "mt-1 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 font-display text-sm font-extrabold shadow-md transition",
          canAdvance
            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:scale-[1.02]"
            : "cursor-not-allowed bg-stone-200 text-stone-500",
        ].join(" ")}
      >
        {!canAdvance && <Lock className="h-4 w-4" />}
        <BookOpen className="h-4 w-4" />
        {isLast && allDone ? "Đã hoàn thành lộ trình" : "Lật sang trang tiếp theo"}
      </button>

      <p
        className={[
          "text-center text-[11px] font-semibold",
          allDone ? "text-emerald-600" : "text-muted-foreground",
        ].join(" ")}
      >
        {allDone
          ? "Chúc mừng! Bạn đã mở khóa chủ đề tiếp theo!"
          : `Hoàn thành cả ${totalStages} chặng để mở khóa trang tiếp theo!`}
      </p>
    </aside>
  );
}
