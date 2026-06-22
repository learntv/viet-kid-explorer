import { useMemo, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import type { LessonWithSections, LessonSection } from "@/lib/lessons.functions";

type Props = { lesson: LessonWithSections };

const SECTION_LABEL: Record<LessonSection["type"], string> = {
  Tu_Ngu: "Từ ngữ",
  Hoi_Thoai: "Hội thoại",
  Hoc_Chu: "Học chữ",
  Tieng_Viet_Vui: "Tiếng Việt Vui",
};

export function LessonView({ lesson }: Props) {
  const sections = lesson.sections;
  const [activeIdx, setActiveIdx] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const progress = useMemo(
    () => (sections.length === 0 ? 0 : Math.round((completed.size / sections.length) * 100)),
    [completed, sections.length],
  );

  const active = sections[activeIdx];

  const markComplete = () => {
    setCompleted((prev) => new Set(prev).add(activeIdx));
  };

  const speak = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "vi-VN";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6">
      {/* Progress bar */}
      <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-sky-100">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-yellow-300 px-3 py-1 text-sm font-bold text-sky-900">
              Quyển {lesson.book_level} · Bài {lesson.lesson_order}
            </span>
            <h1 className="text-xl font-black text-sky-900 sm:text-2xl">{lesson.title}</h1>
          </div>
          <span className="text-sm font-semibold text-sky-700">{progress}% hoàn thành</span>
        </div>
        <Progress value={progress} className="h-3" />
        <div className="mt-3 flex flex-wrap gap-2">
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveIdx(i)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                i === activeIdx
                  ? "bg-yellow-300 text-sky-900 shadow"
                  : completed.has(i)
                    ? "bg-green-100 text-green-800"
                    : "bg-sky-50 text-sky-700 hover:bg-sky-100"
              }`}
            >
              {completed.has(i) && "✓ "}
              {SECTION_LABEL[s.type]}
            </button>
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Left: illustration (40%) */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden rounded-3xl border-2 border-sky-100 bg-gradient-to-br from-sky-50 to-yellow-50 p-0 shadow-md">
            <div className="aspect-square w-full overflow-hidden">
              {lesson.cover_image ? (
                <img
                  src={lesson.cover_image}
                  alt={lesson.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full w-full place-items-center text-8xl">📚</div>
              )}
            </div>
            <div className="p-5">
              <div className="text-sm font-semibold text-sky-600">Bài học hôm nay</div>
              <div className="text-2xl font-black text-sky-900">{lesson.title}</div>
              <p className="mt-2 text-sm text-sky-700">
                Cùng bé khám phá những người thân yêu trong gia đình nhé!
              </p>
            </div>
          </Card>
        </div>

        {/* Right: interactive (60%) */}
        <div className="lg:col-span-3">
          <Card className="rounded-3xl border-2 border-sky-100 bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-2xl font-black text-sky-900">
                <Sparkles className="h-6 w-6 text-yellow-500" />
                {active ? SECTION_LABEL[active.type] : "Bài học"}
              </h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                  disabled={activeIdx === 0}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setActiveIdx((i) => Math.min(sections.length - 1, i + 1))}
                  disabled={activeIdx >= sections.length - 1}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="min-h-[320px]">
              {active && <SectionRenderer section={active} onSpeak={speak} />}
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                onClick={markComplete}
                disabled={completed.has(activeIdx)}
                className="rounded-full bg-yellow-300 px-6 font-bold text-sky-900 hover:bg-yellow-400"
              >
                {completed.has(activeIdx) ? "Đã hoàn thành ✓" : "Hoàn thành phần này"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SectionRenderer({
  section,
  onSpeak,
}: {
  section: LessonSection;
  onSpeak: (text: string) => void;
}) {
  const c = section.content_json as Record<string, unknown>;

  if (section.type === "Tu_Ngu") {
    const words = (c.words as Array<{ word: string; image?: string }>) ?? [];
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {words.map((w, i) => (
          <button
            key={i}
            onClick={() => onSpeak(w.word)}
            className="group flex flex-col items-center rounded-2xl border-2 border-sky-100 bg-gradient-to-b from-white to-sky-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"
          >
            <div className="grid h-20 w-20 place-items-center overflow-hidden rounded-2xl bg-white ring-2 ring-sky-100">
              {w.image ? (
                <img src={w.image} alt={w.word} className="h-full w-full object-cover" />
              ) : (
                <span className="text-4xl">🌟</span>
              )}
            </div>
            <div className="mt-3 text-lg font-black text-sky-900">{w.word}</div>
            <Volume2 className="mt-1 h-4 w-4 text-sky-500 group-hover:text-yellow-500" />
          </button>
        ))}
      </div>
    );
  }

  if (section.type === "Hoi_Thoai") {
    const dialogue = (c.dialogue as Array<{ speaker: string; text: string }>) ?? [];
    return (
      <div className="space-y-3">
        {dialogue.map((line, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
              <div
                className={`flex max-w-[80%] items-start gap-2 rounded-2xl px-4 py-3 ${
                  isLeft ? "bg-sky-100 text-sky-900" : "bg-yellow-200 text-sky-900"
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-sm font-bold">
                  {line.speaker}
                </span>
                <span className="font-medium">{line.text}</span>
                <button
                  onClick={() => onSpeak(line.text)}
                  className="ml-1 rounded-full p-1 hover:bg-white/60"
                  aria-label="Phát âm"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (section.type === "Hoc_Chu") {
    const letters = (c.letters as Array<{ char: string; example: string }>) ?? [];
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {letters.map((l, i) => (
          <button
            key={i}
            onClick={() => onSpeak(l.char)}
            className="rounded-2xl bg-gradient-to-br from-yellow-100 to-sky-100 p-6 text-center shadow-sm transition hover:scale-105"
          >
            <div className="text-6xl font-black text-sky-900">{l.char}</div>
            <div className="mt-2 text-sm font-semibold text-sky-700">vd: {l.example}</div>
          </button>
        ))}
      </div>
    );
  }

  if (section.type === "Tieng_Viet_Vui") {
    const pairs = (c.pairs as Array<{ word: string; emoji: string }>) ?? [];
    const prompt = (c.prompt as string) ?? "Trò chơi vui";
    return (
      <div>
        <p className="mb-4 text-center font-semibold text-sky-700">{prompt}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {pairs.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-b from-white to-yellow-50 p-4 text-center shadow-sm ring-2 ring-yellow-100"
            >
              <div className="text-5xl">{p.emoji}</div>
              <div className="mt-2 text-lg font-bold text-sky-900">{p.word}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div className="text-sky-700">Nội dung sẽ sớm có mặt.</div>;
}
