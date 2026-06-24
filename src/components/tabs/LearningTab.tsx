import { useMemo, useState } from "react";
import { ChevronLeft, Sparkles, Star, Volume2 } from "lucide-react";
import { TOPICS, getStagesForTopic } from "@/data/topics";
import { RoadmapMap } from "@/components/learning/RoadmapMap";
import { LessonCard } from "@/components/learning/LessonCard";
import { TopicSidebar } from "@/components/learning/TopicSidebar";
import { MotivationStrip } from "@/components/learning/MotivationStrip";
import trauConAsset from "@/assets/trau-con.png";

export function LearningTab() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [completedByTopic, setCompletedByTopic] = useState<Record<number, number[]>>({});
  const [showLessonCard, setShowLessonCard] = useState(false);

  const topic = TOPICS[currentTopicIndex];
  const stages = useMemo(() => getStagesForTopic(currentTopicIndex), [currentTopicIndex]);
  const completedSet = useMemo(
    () => new Set(completedByTopic[currentTopicIndex] ?? []),
    [completedByTopic, currentTopicIndex],
  );

  const completeStage = () => {
    setCompletedByTopic((prev) => {
      const cur = new Set(prev[currentTopicIndex] ?? []);
      cur.add(currentStageIndex);
      return { ...prev, [currentTopicIndex]: Array.from(cur) };
    });
  };

  const nextTopic = () => {
    if (currentTopicIndex >= TOPICS.length - 1) return;
    setCurrentTopicIndex((i) => i + 1);
    setCurrentStageIndex(0);
    setShowLessonCard(false);
  };

  const selectStage = (i: number) => {
    setCurrentStageIndex(i);
    setShowLessonCard(true);
  };

  const allDone = completedSet.size >= stages.length;
  const isLast = currentTopicIndex >= TOPICS.length - 1;
  const shortTopicTitle = topic.title.split(":")[1]?.trim() ?? topic.title;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white pb-10">
      <div className="mx-auto w-full max-w-7xl px-3 pt-4 sm:px-6 sm:pt-6 lg:px-8">
        {/* Top bar: breadcrumb + audio */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-navy shadow-sm ring-1 ring-sky-100 backdrop-blur sm:text-sm">
            <ChevronLeft className="h-4 w-4 text-sky-600" />
            <span className="text-sky-700">Quyển 1</span>
            <span className="text-stone-400">›</span>
            <span className="text-navy">Vui học Tiếng Việt</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-sky-700 shadow-sm ring-1 ring-sky-100 backdrop-blur transition hover:bg-sky-50 sm:text-sm"
          >
            <Volume2 className="h-4 w-4" />
            Âm thanh
          </button>
        </div>

        {/* Sparkle title */}
        <div className="relative flex flex-col items-center pb-2">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-amber-400" />
            <h1 className="font-display text-3xl font-extrabold uppercase tracking-wide text-sky-700 drop-shadow-[0_2px_0_rgba(255,255,255,0.9)] sm:text-4xl lg:text-5xl">
              Vui học Tiếng Việt
            </h1>
            <Sparkles className="h-6 w-6 text-amber-400" />
          </div>

          {/* Yellow ribbon — current topic */}
          <div className="relative mt-2">
            <div className="rounded-2xl bg-gradient-to-b from-amber-300 to-amber-500 px-6 py-1.5 shadow-md ring-2 ring-white sm:px-10 sm:py-2">
              <h2 className="font-display text-base font-extrabold text-white drop-shadow-[0_1px_1px_rgba(120,60,0,0.5)] sm:text-xl">
                Chủ đề {currentTopicIndex + 1}: {shortTopicTitle}
              </h2>
            </div>
            <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 bg-amber-600 opacity-70" />
            <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 bg-amber-600 opacity-70" />
          </div>

          {/* Star badge */}
          <div className="mt-2 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-amber-200">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-display text-xs font-extrabold text-navy sm:text-sm">
              {completedSet.size} chặng / {stages.length} chặng
            </span>
          </div>
        </div>

        {/* Main: map + sidebar */}
        <div id="roadmap-start" className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
          {/* Map area with optional overlay */}
          <div className="relative">
            <RoadmapMap
              currentStageIndex={currentStageIndex}
              completedStages={completedSet}
              onSelectStage={selectStage}
            />

            {/* Floating lesson card overlay */}
            {showLessonCard && (
              <div className="absolute inset-x-3 top-3 z-30 sm:inset-x-8 sm:top-6">
                <div className="relative">
                  <button
                    onClick={() => setShowLessonCard(false)}
                    className="absolute -right-2 -top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-white text-navy shadow-md ring-1 ring-stone-200 transition hover:scale-110"
                    aria-label="Đóng bài học"
                  >
                    ✕
                  </button>
                  <LessonCard
                    topic={topic}
                    stage={stages[currentStageIndex]}
                    stageIndex={currentStageIndex}
                    totalStages={stages.length}
                    isCompleted={completedSet.has(currentStageIndex)}
                    allDone={allDone}
                    isLast={isLast}
                    onPrev={() => setCurrentStageIndex((i) => Math.max(0, i - 1))}
                    onNext={() =>
                      setCurrentStageIndex((i) => Math.min(stages.length - 1, i + 1))
                    }
                    onComplete={completeStage}
                    onNextTopic={nextTopic}
                  />
                </div>
              </div>
            )}

            {/* Hint to open lesson card when closed */}
            {!showLessonCard && (
              <div className="mt-3 text-center">
                <button
                  onClick={() => setShowLessonCard(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 font-display text-sm font-extrabold text-white shadow-md transition hover:scale-105"
                >
                  Mở bài học · Chặng {currentStageIndex + 1}
                </button>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <TopicSidebar
            topics={TOPICS}
            currentTopicIndex={currentTopicIndex}
            completedStagesCount={completedSet.size}
            totalStages={stages.length}
            allDone={allDone}
            isLast={isLast}
            canAdvance={allDone && !isLast}
            onSelectTopic={(i) => {
              if (i <= currentTopicIndex) {
                setCurrentTopicIndex(i);
                setCurrentStageIndex(0);
                setShowLessonCard(false);
              }
            }}
            onNextTopic={nextTopic}
          />
        </div>

        {/* Bottom: motivation strip + small buffalo */}
        <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-[auto_1fr]">
          <div className="hidden items-end lg:flex">
            <img
              src={trauConAsset}
              alt="Trâu con đọc sách"
              className="h-24 w-24 object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
            />
          </div>
          <MotivationStrip />
        </div>
      </div>
    </section>
  );
}
