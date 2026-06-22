
CREATE TABLE public.lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  book_level INT NOT NULL DEFAULT 1,
  lesson_order INT NOT NULL DEFAULT 1,
  cover_image TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.lesson_sections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('Tu_Ngu','Hoi_Thoai','Hoc_Chu','Tieng_Viet_Vui')),
  section_order INT NOT NULL DEFAULT 1,
  content_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_lesson_sections_lesson_id ON public.lesson_sections(lesson_id);

GRANT SELECT ON public.lessons TO anon, authenticated;
GRANT ALL ON public.lessons TO service_role;
GRANT SELECT ON public.lesson_sections TO anon, authenticated;
GRANT ALL ON public.lesson_sections TO service_role;

ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lessons are publicly readable" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Lesson sections are publicly readable" ON public.lesson_sections FOR SELECT USING (true);
