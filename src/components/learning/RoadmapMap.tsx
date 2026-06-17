import type { Topic } from "@/data/topics";
import { STAGE_COLORS } from "@/data/topics";
import { BuffaloMascot } from "./BuffaloMascot";
import { StageNode } from "./StageNode";
import halongScene from "@/assets/halong-scene.jpg";

// Positions in % within the map area
const NODE_POSITIONS = [
  { x: 10, y: 55 },
  { x: 28, y: 28 },
  { x: 50, y: 48 },
  { x: 72, y: 25 },
  { x: 90, y: 50 },
];

export function RoadmapMap({
  topic,
  topicIndex,
  totalTopics,
  currentStageIndex,
  completedStages,
  onSelectStage,
}: {
  topic: Topic;
  topicIndex: number;
  totalTopics: number;
  currentStageIndex: number;
  completedStages: Set<number>;
  onSelectStage: (i: number) => void;
}) {
  const currentPos = NODE_POSITIONS[currentStageIndex] ?? NODE_POSITIONS[0];

  // Smooth Bezier path
  const pathD = NODE_POSITIONS.reduce((acc, p, i, arr) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = arr[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${acc} Q ${cx} ${prev.y}, ${p.x} ${p.y}`;
  }, "");

  return (
    <div className="relative w-full overflow-hidden shadow-soft pb-32 sm:pb-40">
      {/* Background scenery */}
      <img
        src={halongScene}
        alt="Phong cảnh Việt Nam — Vịnh Hạ Long và Hội An"
        width={1600}
        height={896}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky/30 via-transparent to-white/10" />

      {/* Topic badge — top left */}
      <div className="relative z-10 flex flex-wrap items-start justify-between gap-3 px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-card backdrop-blur">
          <span className="text-xl">{topic.emoji}</span>
          <div className="leading-tight">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Chủ đề {topicIndex + 1}/{totalTopics}
            </p>
            <p className="font-display text-sm font-extrabold text-navy">
              {topic.title.split(":")[1]?.trim() || topic.title}
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-white/95 px-3 py-2 text-xs font-extrabold text-navy shadow-card backdrop-blur">
          {completedStages.size}/5 chặng hoàn thành
        </div>
      </div>

      {/* Title ribbon — centered */}
      <div className="relative z-10 mx-auto mt-2 w-fit max-w-[90%]">
        <div className="relative">
          {/* Ribbon body */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[oklch(0.88_0.15_80)] to-[oklch(0.75_0.18_55)] px-6 py-2.5 text-center shadow-card sm:px-10 sm:py-3">
            <div className="absolute inset-0 rounded-2xl ring-2 ring-white/60 ring-inset" />
            <h2 className="relative font-display text-xl font-extrabold text-white drop-shadow-[0_2px_2px_rgba(120,60,0,0.5)] sm:text-2xl">
              Hành trình Tiếng Việt
            </h2>
            <p className="relative text-xs font-bold text-white/95 sm:text-sm">
              Cùng Trâu con đội nón lá
            </p>
          </div>
          {/* Ribbon tails */}
          <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 bg-[oklch(0.6_0.18_45)] opacity-70" />
          <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 bg-[oklch(0.6_0.18_45)] opacity-70" />
        </div>
      </div>

      {/* Roadmap area */}
      <div className="relative mt-4 h-[380px] w-full sm:h-[440px]">
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
            strokeWidth="1.4"
            strokeDasharray="2.5 2.5"
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

        {/* Mascot */}
        <BuffaloMascot xPercent={currentPos.x} yPercent={currentPos.y} />
      </div>
    </div>
  );
}
