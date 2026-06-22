import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type LessonSection = {
  id: string;
  type: "Tu_Ngu" | "Hoi_Thoai" | "Hoc_Chu" | "Tieng_Viet_Vui";
  section_order: number;
  content_json: Record<string, unknown>;
};

export type LessonWithSections = {
  id: string;
  title: string;
  book_level: number;
  lesson_order: number;
  cover_image: string | null;
  sections: LessonSection[];
};

export const getFirstLesson = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
  );

  const { data: lesson, error: lessonErr } = await supabase
    .from("lessons" as never)
    .select("id, title, book_level, lesson_order, cover_image")
    .order("book_level", { ascending: true })
    .order("lesson_order", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (lessonErr) throw new Error(lessonErr.message);
  if (!lesson) return null;

  const l = lesson as { id: string; title: string; book_level: number; lesson_order: number; cover_image: string | null };

  const { data: sections, error: secErr } = await supabase
    .from("lesson_sections" as never)
    .select("id, type, section_order, content_json")
    .eq("lesson_id", l.id)
    .order("section_order", { ascending: true });

  if (secErr) throw new Error(secErr.message);

  return {
    ...l,
    sections: (sections ?? []) as unknown as LessonSection[],
  } satisfies LessonWithSections;
});
