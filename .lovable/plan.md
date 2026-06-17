# Kế hoạch xây dựng "Tiếng Việt Online"

Prototype SPA front-end thuần (React + TypeScript + Tailwind + shadcn/ui), dùng local state, không backend, không auth. Bám sát spec đã cung cấp.

## 1. Design system (src/styles.css)

Cập nhật theme tokens cho phong cách trẻ em — giáo dục:

- Primary: `#1976D2` (xanh dương), primary-glow `#42A5F5`
- Secondary: `#FFD166` (vàng ấm)
- Accent hồng `#FF6FAE`, tím `#9B7EDE`, xanh lá `#7BD88F`
- Background: kem `#FFF9F0` / xanh nhạt `#EAF4FF`
- Text: navy `#0D2B4E`
- Gradient tokens: sky, sunset, meadow
- Shadow tokens: soft, glow-primary, glow-accent
- Radius tăng: `--radius: 1.25rem` để dùng rounded-2xl/3xl
- Font: load Baloo 2 (display, hỗ trợ tiếng Việt tốt) + Nunito (body) qua `<link>` trong `__root.tsx`

## 2. Cấu trúc routes / components

Giữ SPA trong `src/routes/index.tsx`. Tabs điều khiển bằng local state (không dùng route con).

```
src/
  routes/
    __root.tsx           (head: title, meta TV, fonts link)
    index.tsx            (App shell: Navbar + tab content + Footer)
  components/
    Navbar.tsx
    Footer.tsx
    tabs/
      InfoTab.tsx
      InfoCard.tsx
      LearningTab.tsx
      ComingSoonTab.tsx
    learning/
      RoadmapMap.tsx
      StageNode.tsx
      BuffaloMascot.tsx
      LessonModal.tsx
  data/
    topics.ts            (8 topics × 5 stages, vocab mẫu)
  lib/
    learning-types.ts
```

## 3. Navbar

- Sticky top, container rounded-2xl, gradient xanh dương, shadow mềm
- Trái: icon sách + mascot mini + chữ "Tiếng Việt Online" (font display)
- Phải: 3 nút tab với icon lucide (`Info`, `BookOpen`, `Star`)
- Tab active: nền vàng `#FFD166`, text navy, glow nhẹ; inactive: trong suốt, text trắng
- Mobile: thu gọn icon + label nhỏ

## 4. Tab 1 — Thông tin

- Section title "Thông tin dự án"
- Grid 2 cột (desktop) / 1 cột (mobile) cho 4 card đầu
  - Mỗi `InfoCard`: icon lucide phù hợp (ShieldCheck, BookMarked, Network, Copyright), heading, body — văn bản nguyên văn
  - Card nền trắng, border mềm, accent strip màu khác nhau (xanh / vàng / tím / hồng)
- Card 5 "Lời cảm ơn": full-width, nền gradient hồng-kem, icon Heart, text trang trọng — nguyên văn

## 5. Tab 2 — Vui học Tiếng Việt

### Data (`data/topics.ts`)

8 topics đúng tên trong spec, mỗi topic 5 stages cố định:

1. Làm quen 2. Từ vựng 3. Hội thoại 4. Luyện đọc 5. Luyện viết

Mỗi stage có `sampleVocabulary: { vi: string; en: string }[]` (4–6 mục mẫu).

### State (trong `LearningTab`)

```ts
currentTopicIndex: number = 0
currentStageIndex: number = 0
completedByTopic: Record<number, Set<number>>
isLessonModalOpen: boolean
```

### RoadmapMap

- Khung "trang sách" rounded-3xl, shadow lớn, nền gradient phong cảnh VN (CSS gradient layers + SVG silhouette núi/nón lá/sóng nước — không cần ảnh thật)
- Header: title "Hành trình Tiếng Việt" + subtitle "Cùng Trâu con đội nón lá"
- Sub-header: tên topic hiện tại + badge "Chủ đề X/8"
- SVG path cong dotted nối 5 `StageNode` (positions cố định theo layout zigzag)
- StageNode: button tròn/ngôi sao, màu khác nhau theo chặng, hiển thị "Chặng N", check icon nếu completed, ring glow nếu là current
- `BuffaloMascot`: div absolute với emoji 🐃 + nón lá SVG (hoặc icon tổng hợp), transition `top/left` 600ms ease-in-out để "di chuyển" đến node hiện tại
- Nút "Lật sang trang tiếp theo" góc dưới phải:
  - Disabled + icon Lock + tooltip text khi chưa đủ 5 chặng
  - Enabled khi đủ → next topic, reset completed của topic mới
  - Topic 8 hoàn thành: text "Đã hoàn thành lộ trình", disabled

### LessonModal (shadcn Dialog tùy chỉnh)

- Backdrop blur + overlay tối nhẹ
- Container trắng rounded-3xl, max-w-[960px], 80–90% width
- Header: trái "Chặng X: [tên]"; phải nút Back/Next (ChevronLeft/Right) + nút đóng X
- Body 2 cột:
  - Trái: illustration placeholder (gradient + SVG/emoji theo topic)
  - Phải: list từ vựng — mỗi dòng có chữ VI lớn, EN nhỏ xám, nút "🔊 Nghe" → `console.log` + hiệu ứng pulse
- Footer modal: nút "Hoàn thành chặng" (primary). Sau khi click: badge "Đã hoàn thành chặng này"
- Back/Next cập nhật `currentStageIndex` → mascot ngoài map di chuyển theo

## 6. Tab 3 — Góc của em

- Card lớn căn giữa, nền gradient hồng/kem, rounded-3xl, shadow mềm
- Icon ngôi sao + cầu vồng (lucide Star, Rainbow) + vài sticker SVG (mây, bút màu)
- Text chính xác: "Góc của em - Mục này đang được xây dựng và sẽ sớm ra mắt các bạn nhỏ nhé! (TODO Later)"

## 7. Footer

- Nền trắng/kem, border-top mềm
- Caption căn giữa: "Hai cơ quan bảo trợ và đồng hành"
- 2 khung logo placeholder song song: border dashed, rounded-2xl, text "[Logo UBNVONN]" và "[Logo CVCEC]"
- Dòng copyright nhỏ ở dưới

## 8. Hiệu ứng & responsive

- Tab switching: fade + slide nhẹ (Tailwind transition trên container)
- Hover scale 1.03 cho stage node và card
- Mascot transition CSS 600ms
- Modal: fade + scale (shadcn default)
- Breakpoints: desktop ≥1024 (2 cột, map đầy đủ), tablet (map co lại), mobile (stack 1 cột, roadmap dạng dọc đơn giản hóa)

## 9. SEO / head

`__root.tsx`: title "Tiếng Việt Online — Học tiếng Việt cùng Trâu con đội nón lá", meta description tiếng Việt, og tags, lang="vi", link Google Fonts (Baloo 2 + Nunito).

## 10. Phạm vi không làm

Tuân thủ danh sách cấm trong spec: không auth, không DB, không payment, không leaderboard, không upload, không đa ngôn ngữ, không trang ngoài 3 tab, không tự sáng tạo nội dung phần Thông tin, chỉ 2 logo placeholder UBNVONN & CVCEC.

---

Sau khi bạn duyệt plan, mình sẽ build toàn bộ trong một loạt tool call song song.