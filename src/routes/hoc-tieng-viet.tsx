import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LessonView } from "@/components/learning/LessonView";
import { getFirstLesson } from "@/lib/lessons.functions";
import { Button } from "@/components/ui/button";

const lessonQueryOptions = queryOptions({
  queryKey: ["lesson", "first"],
  queryFn: () => getFirstLesson(),
});

export const Route = createFileRoute("/hoc-tieng-viet")({
  head: () => ({
    meta: [
      { title: "Học Tiếng Việt — Trường Tiếng Việt Của Em" },
      {
        name: "description",
        content: "Học tiếng Việt qua bài học tương tác: từ ngữ, hội thoại, học chữ và trò chơi.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(lessonQueryOptions),
  component: HocTiengVietPage,
  errorComponent: ({ error }) => (
    <div className="grid min-h-screen place-items-center p-6 text-center">
      <div>
        <h1 className="text-2xl font-bold text-sky-900">Không tải được bài học</h1>
        <p className="mt-2 text-sky-700">{error.message}</p>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center p-6">
      <p className="text-sky-700">Chưa có bài học nào.</p>
    </div>
  ),
});

function HocTiengVietPage() {
  const { data: lesson } = useSuspenseQuery(lessonQueryOptions);
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-50 via-white to-yellow-50">
      <Navbar />
      <main className="flex-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
        {lesson ? (
          <LessonView lesson={lesson} />
        ) : (
          <div className="grid min-h-[60vh] place-items-center">
            <div className="text-center">
              <p className="text-sky-700">Chưa có bài học nào trong cơ sở dữ liệu.</p>
              <Button className="mt-4" onClick={() => router.invalidate()}>
                Tải lại
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
