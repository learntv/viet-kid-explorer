import { ChevronRight, Lock } from "lucide-react";
import type { Topic } from "@/data/topics";
import { STAGE_COLORS } from "@/data/topics";
import { BuffaloMascot } from "./BuffaloMascot";
import { StageNode } from "./StageNode";

// Zigzag positions across the page (percent of container)
const NODE_POSITIONS = [
  { x: 14, y: 78 },
  { x: 32, y: 50 },
  { x: 50, y: 75 },
  { x: 70, y: 45 },
  { x: 88, y: 68 },
];

export function RoadmapMap({
  topic,
  topicIndex,
  totalTopics,
  currentStageIndex,
  completedStages,
  onSelectStage,
  onNextTopic,
}: {
  topic: Topic;
  topicIndex: number;
  totalTopics: number;
  currentStageIndex: number;
  completedStages: Set<number>;
  onSelectStage: (i: number) => void;
  onNextTopic: () => void;
}) {
  const allDone = completedStages.size >= 5;
  const isLast = topicIndex >= totalTopics - 1;
  const canAdvance = allDone && !isLast;
  const currentPos = NODE_POSITIONS[currentStageIndex] ?? NODE_POSITIONS[0];

  // Build smooth curve path
  const pathD = NODE_POSITIONS.reduce((acc, p, i, arr) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = arr[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${acc} Q ${cx} ${prev.y}, ${p.x} ${p.y}`;
  }, "");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Title above the page */}
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Hành trình Tiếng Việt
          </h2>
          <p className="mt-1 text-sm font-medium text-foreground/70 sm:text-base">
            Cùng Trâu con đội nón lá khám phá tiếng Việt 🪭
          </p>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-card">
          Chủ đề {topicIndex + 1}/{totalTopics}
        </span>
      </div>

      {/* "Book page" */}
      <div className="relative overflow-hidden rounded-4xl border-4 border-white bg-gradient-page shadow-soft">
        {/* Decorative scenery silhouettes */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full opacity-60"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
          <path d="M0 220 L120 130 L180 180 L260 90 L340 170 L420 110 L520 180 L640 100 L720 160 L800 130 L800 300 L0 300 Z" fill="oklch(0.7 0.08 150)" />
          <path d="M0 250 L80 200 L160 240 L240 190 L340 230 L460 200 L560 240 L680 200 L800 230 L800 300 L0 300 Z" fill="oklch(0.78 0.1 130)" />
          <path d="M0 280 L800 280 L800 300 L0 300 Z" fill="oklch(0.82 0.12 120)" />
        </svg>

        {/* Sun & clouds */}
        <div className="pointer-events-none absolute top-4 right-6 text-5xl animate-bob">☀️</div>
        <div className="pointer-events-none absolute top-6 left-10 text-3xl animate-float-slow">☁️</div>
        <div className="pointer-events-none absolute top-14 left-1/3 text-2xl animate-float-slow">☁️</div>
        <div className="pointer-events-none absolute top-3 left-1/2 text-3xl">🪁</div>

        {/* Topic badge */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-5 pt-5 sm:px-8 sm:pt-8">
          <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-2 shadow-card backdrop-blur">
            <span className="text-2xl">{topic.emoji}</span>
            <span className="font-display text-lg font-extrabold text-navy">
              {topic.title}
            </span>
          </div>
          <div className="rounded-2xl bg-white/90 px-3 py-1 text-xs font-bold text-navy shadow-card backdrop-blur">
            {completedStages.size}/5 chặng hoàn thành
          </div>
        </div>

        {/* Roadmap area */}
        <div className="relative mt-4 h-[440px] w-full sm:h-[520px]">
          {/* Dotted path */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d={pathD}
              fill="none"
              stroke="white"
              strokeWidth="1.2"
              strokeDasharray="2 2"
              strokeLinecap="round"
              opacity="0.95"
            />
          </svg>

          {/* Stage nodes */}
          {NODE_POSITIONS.map((p, i) => (
            <StageNode
              key={i}
              index={i}
              xPercent={p.x}
              yPercent={p.y}
              color={STAGE_COLORS[i]}
              isCurrent={i === currentStageIndex}
              isCompleted={completedStages.has(i)}
              onClick={() => onSelectStage(i)}
            />
          ))}

          {/* Mascot at current stage */}
          <BuffaloMascot xPercent={currentPos.x} yPercent={currentPos.y} />
        </div>

        {/* Bottom bar inside book page */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-3 px-5 pb-5 sm:flex-row sm:px-8 sm:pb-7">
          <p className="text-xs font-medium text-navy/70 sm:text-sm">
            {allDone
              ? isLast
                ? "Bạn đã hoàn thành toàn bộ lộ trình. Giỏi quá!"
                : "Tuyệt vời! Bạn có thể lật sang trang tiếp theo."
              : "Hoàn thành cả 5 chặng để mở khóa trang tiếp theo!"}
          </p>

          <button
            disabled={!canAdvance}
            onClick={onNextTopic}
            className={[
              "inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-display text-sm font-extrabold transition-all sm:text-base",
              canAdvance
                ? "bg-gradient-sunset text-navy shadow-glow-yellow hover:scale-[1.03]"
                : "cursor-not-allowed bg-white/80 text-navy/50 shadow-card",
            ].join(" ")}
          >
            {!canAdvance && <Lock className="h-4 w-4" />}
            {isLast && allDone
              ? "Đã hoàn thành lộ trình"
              : "Lật sang trang tiếp theo"}
            {canAdvance && <ChevronRight className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
