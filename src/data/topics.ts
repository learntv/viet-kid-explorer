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
    title: "Khởi động",
    imageEmoji: "🌟",
    sampleVocabulary: [
      { vi: "Xin chào!", en: "Hello!" },
      { vi: "Tớ là…", en: "I am…" },
      { vi: "Rất vui được gặp bạn", en: "Nice to meet you" },
      { vi: "Tạm biệt!", en: "Goodbye!" },
    ],
  },
  {
    title: "Làm quen",
    imageEmoji: "👨‍👩‍👧",
    sampleVocabulary: [
      { vi: "ông", en: "grandfather" },
      { vi: "bà", en: "grandmother" },
      { vi: "bố", en: "dad" },
      { vi: "mẹ", en: "mom" },
      { vi: "anh", en: "older brother" },
      { vi: "chị", en: "older sister" },
      { vi: "em", en: "younger sibling" },
    ],
  },
  {
    title: "Nhận biết",
    imageEmoji: "💬",
    sampleVocabulary: [
      { vi: "Bạn tên là gì?", en: "What is your name?" },
      { vi: "Tớ tên là Minh.", en: "My name is Minh." },
      { vi: "Bạn bao nhiêu tuổi?", en: "How old are you?" },
      { vi: "Tớ tám tuổi.", en: "I am eight years old." },
    ],
  },
  {
    title: "Luyện tập",
    imageEmoji: "📖",
    sampleVocabulary: [
      { vi: "Gia đình em có bốn người.", en: "My family has four people." },
      { vi: "Em yêu bố mẹ rất nhiều.", en: "I love my parents very much." },
      { vi: "Cuối tuần cả nhà đi chơi.", en: "On weekends we go out together." },
    ],
  },
  {
    title: "Vận dụng",
    imageEmoji: "✏️",
    sampleVocabulary: [
      { vi: "Giới thiệu gia đình em", en: "Introduce my family" },
      { vi: "Em có một em gái", en: "I have a little sister" },
      { vi: "Cả nhà em rất vui", en: "My family is very happy" },
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
