import { useMemo, useState } from "react";
import { TOPICS, getStagesForTopic } from "@/data/topics";
import { RoadmapMap } from "@/components/learning/RoadmapMap";
import { LessonCard } from "@/components/learning/LessonCard";
import { LearningHero } from "@/components/learning/LearningHero";

export function LearningTab() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [completedByTopic, setCompletedByTopic] = useState<Record<number, number[]>>({});

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
    setCompletedByTopic((prev) => ({ ...prev, [currentTopicIndex + 1]: [] }));
  };

  const allDone = completedSet.size >= 5;
  const isLast = currentTopicIndex >= TOPICS.length - 1;

  return (
    <section className="w-full pb-10">
      <LearningHero />

      {/* Full-width map area with overlapping lesson card */}
      <div id="roadmap-start" className="relative mt-8 w-full">
        <RoadmapMap
          topic={topic}
          topicIndex={currentTopicIndex}
          totalTopics={TOPICS.length}
          currentStageIndex={currentStageIndex}
          completedStages={completedSet}
          onSelectStage={setCurrentStageIndex}
        />

        {/* Lesson card overlaps the bottom of the map, constrained inside map width */}
        <div className="relative z-20 -mt-24 px-4 sm:-mt-32 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <LessonCard
              topic={topic}
              stage={stages[currentStageIndex]}
              stageIndex={currentStageIndex}
              totalStages={stages.length}
              isCompleted={completedSet.has(currentStageIndex)}
              allDone={allDone}
              isLast={isLast}
              onPrev={() => setCurrentStageIndex((i) => Math.max(0, i - 1))}
              onNext={() => setCurrentStageIndex((i) => Math.min(stages.length - 1, i + 1))}
              onComplete={completeStage}
              onNextTopic={nextTopic}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
