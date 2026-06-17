export type Vocab = { vi: string; en: string };

export type Stage = {
  id: string;
  title: string;
  sampleVocabulary: Vocab[];
  imageEmoji: string;
};

export type Topic = {
  id: string;
  title: string;
  emoji: string;
  accent: "primary" | "yellow" | "pink" | "purple" | "green";
};

export const STAGE_TEMPLATE: Omit<Stage, "id">[] = [
  {
    title: "Làm quen",
    imageEmoji: "👋",
    sampleVocabulary: [
      { vi: "Xin chào!", en: "Hello!" },
      { vi: "Tớ là…", en: "I am…" },
      { vi: "Tên tớ là…", en: "My name is…" },
      { vi: "Rất vui được gặp bạn", en: "Nice to meet you" },
      { vi: "Tạm biệt!", en: "Goodbye!" },
    ],
  },
  {
    title: "Từ vựng",
    imageEmoji: "📚",
    sampleVocabulary: [
      { vi: "Mẹ", en: "Mom" },
      { vi: "Bố", en: "Dad" },
      { vi: "Anh", en: "Older brother" },
      { vi: "Chị", en: "Older sister" },
      { vi: "Em", en: "Younger sibling" },
    ],
  },
  {
    title: "Hội thoại",
    imageEmoji: "💬",
    sampleVocabulary: [
      { vi: "Bạn tên là gì?", en: "What is your name?" },
      { vi: "Tớ tên là Minh.", en: "My name is Minh." },
      { vi: "Bạn bao nhiêu tuổi?", en: "How old are you?" },
      { vi: "Tớ tám tuổi.", en: "I am eight years old." },
    ],
  },
  {
    title: "Luyện đọc",
    imageEmoji: "📖",
    sampleVocabulary: [
      { vi: "Gia đình em có bốn người.", en: "My family has four people." },
      { vi: "Em yêu bố mẹ rất nhiều.", en: "I love my parents very much." },
      { vi: "Cuối tuần cả nhà đi chơi.", en: "On weekends we go out together." },
    ],
  },
  {
    title: "Luyện viết",
    imageEmoji: "✏️",
    sampleVocabulary: [
      { vi: "a, ă, â", en: "Vowels" },
      { vi: "b, c, d", en: "Consonants" },
      { vi: "ba, bà, bá", en: "Tones practice" },
      { vi: "mẹ yêu em", en: "Mom loves me" },
    ],
  },
];

const TOPIC_META: Omit<Topic, "id">[] = [
  { title: "Chủ đề 1: Gia đình", emoji: "👨‍👩‍👧", accent: "primary" },
  { title: "Chủ đề 2: Con vật", emoji: "🐰", accent: "green" },
  { title: "Chủ đề 3: Cây cối", emoji: "🌳", accent: "green" },
  { title: "Chủ đề 4: Nhà ở", emoji: "🏡", accent: "yellow" },
  { title: "Chủ đề 5: Thời tiết", emoji: "🌤️", accent: "primary" },
  { title: "Chủ đề 6: Đi chơi", emoji: "🎈", accent: "pink" },
  { title: "Chủ đề 7: Trường học", emoji: "🏫", accent: "purple" },
  { title: "Chủ đề 8: Văn hóa Việt", emoji: "🏯", accent: "pink" },
];

export const TOPICS: Topic[] = TOPIC_META.map((t, i) => ({
  ...t,
  id: `topic-${i + 1}`,
}));

export function getStagesForTopic(topicIndex: number): Stage[] {
  return STAGE_TEMPLATE.map((s, i) => ({
    ...s,
    id: `topic-${topicIndex + 1}-stage-${i + 1}`,
  }));
}

export const STAGE_COLORS = ["primary", "yellow", "pink", "purple", "green"] as const;
