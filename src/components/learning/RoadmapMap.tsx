import { BuffaloMascot } from "./BuffaloMascot";
import { StageNode } from "./StageNode";
import halongScene from "@/assets/halong-scene.jpg";

// Positions in % within the map area (matches mockup arrangement)
const NODE_POSITIONS = [
  { x: 10, y: 70 },
  { x: 28, y: 45 },
  { x: 50, y: 65 },
  { x: 72, y: 42 },
  { x: 90, y: 65 },
];

export function RoadmapMap({
  currentStageIndex,
  completedStages,
  onSelectStage,
}: {
  currentStageIndex: number;
  completedStages: Set<number>;
  onSelectStage: (i: number) => void;
}) {
  const currentPos = NODE_POSITIONS[currentStageIndex] ?? NODE_POSITIONS[0];

  // Smooth Bezier path connecting nodes
  const pathD = NODE_POSITIONS.reduce((acc, p, i, arr) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = arr[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${acc} Q ${cx} ${prev.y}, ${p.x} ${p.y}`;
  }, "");

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-soft ring-2 ring-white">
      {/* Background scenery */}
      <img
        src={halongScene}
        alt="Phong cảnh Việt Nam — Vịnh Hạ Long và Hội An"
        width={1600}
        height={896}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200/30 via-transparent to-white/20" />

      {/* Roadmap area — keeps a sensible aspect ratio */}
      <div className="relative aspect-[16/9] w-full min-h-[360px]">
        {/* Golden dotted path */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={pathD}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="1.8"
            strokeDasharray="2.5 2.5"
            strokeLinecap="round"
            opacity="0.95"
            style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
          />
        </svg>

        {/* Stage nodes */}
        {NODE_POSITIONS.map((p, i) => (
          <StageNode
            key={i}
            index={i}
            xPercent={p.x}
            yPercent={p.y}
            isCurrent={i === currentStageIndex}
            isCompleted={completedStages.has(i)}
            isLocked={false}
            onClick={() => onSelectStage(i)}
          />
        ))}

        {/* Mascot — positioned above the current stage node */}
        <BuffaloMascot
          xPercent={Math.min(95, currentPos.x + 6)}
          yPercent={currentPos.y - 5}
        />
      </div>
    </div>
  );
}
