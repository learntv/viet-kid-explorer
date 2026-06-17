# Redesign visual theo mockup (giữ 3 tab riêng biệt)

Giữ nguyên cơ chế **tab-switching** (Thông tin / Vui học Tiếng Việt / Góc của em là 3 trang tách biệt như hiện tại). Chỉ làm lại visual của từng trang cho khớp tinh thần và chi tiết trong mockup.

## 1. Background & nền chung

- Body background: gradient xanh dương rất nhạt (#EAF4FF → trắng) thay cho gradient cream hiện tại
- Thêm decorative ở footer toàn trang: 2 bông sen 🪷 ở 2 góc dưới + dải sóng nước SVG xanh nhạt mảnh

## 2. Navbar (tinh chỉnh khớp mockup)

- Giữ gradient xanh dương + bo 3xl + sticky
- Logo trái: badge tròn trắng chứa icon **nón lá + sách**, chữ "Tiếng Việt" trắng đậm font display + chữ "Online" vàng nghiêng/italic ngay sau
- 3 nút phải đổi style: **pill trắng** rounded-2xl với icon màu (nhà cho Thông tin, sách cho Vui học, sao cho Góc của em) + label navy
- Tab active: nền vàng đậm, viền vàng glow, text navy bold; inactive: nền trắng, text navy nhạt
- Trên mobile chỉ hiện icon, không hiện label

## 3. Tab "Thông tin"

Giữ layout 2 cột hiện tại, chỉ tinh chỉnh visual:

- Section header gọn hơn, thêm icon ℹ️ tròn xanh trước chữ "Thông tin"
- 4 card: thay accent strip → **icon vuông màu lớn bo góc 2xl** ở góc trên trái mỗi card (xanh dương / xanh lá / tím / cam), heading bold navy, body text-sm dễ đọc
- Card "Lời cảm ơn" full-width: nền hồng pastel viền hồng, heading hồng đậm có 2 icon trái tim hai bên, paragraph nguyên văn

## 4. Tab "Vui học Tiếng Việt" — đây là phần thay đổi nhiều nhất

### 4.1 Background map
- Dùng `imagegen` (standard) tạo 1 ảnh `src/assets/halong-scene.jpg` (16:9, ~1600×900): "Wide watercolor children's book illustration of Vietnamese landscape, Halong Bay limestone karsts on the left, red sail junk boat in the middle, Hoi An ancient town with yellow walls and red lanterns on the right, soft pastel sky with clouds, no text, no characters"
- Khung map bo góc 3xl viền trắng 4px shadow soft, ảnh fill nền

### 4.2 Banner title
- Ribbon vàng cong ở giữa-trên map: "Hành trình Tiếng Việt" + sub-line nhỏ "Cùng Trâu con đội nón lá"
- Badge "Chủ đề X/8" + tên chủ đề: card trắng pill ở góc trên trái map

### 4.3 5 chặng = ngôi sao 5 cánh
- Đổi `StageNode` từ tròn sang **SVG ngôi sao 5 cánh** 5 màu (xanh lá, xanh dương, vàng, tím, hồng) đặt trên đường cong dotted trắng
- Bên dưới mỗi sao: label "Chặng N" trên pill trắng nhỏ
- Sao current: lớn hơn, glow vàng; sao completed: có check nhỏ ở góc

### 4.4 Mascot trâu
- Đứng trên **bệ tròn vàng** tại chặng hiện tại, cầm cờ đỏ sao vàng nhỏ 🚩
- Vẫn transition mượt khi đổi chặng

### 4.5 Lesson popup — đổi từ modal full-screen sang **card inline nổi đè map**
- Bỏ overlay backdrop blur
- Card trắng bo 3xl shadow lớn, nằm chồng lên nửa dưới của map (sử dụng `-mt-N` hoặc absolute trong cùng container)
- Header card: "Chặng X: [tên]" trái + 2 nút mũi tên Back/Next tròn xanh ở phải
- Body 2 cột:
  - Trái: dùng `imagegen` (standard) tạo `src/assets/kids-aodai.jpg` (1:1, 600×600): "Cute cartoon Vietnamese boy in green ao dai and girl in yellow ao dai waving hello in front of a traditional Vietnamese temple, watercolor children book style"
  - Phải: 4 dòng từ vựng VI lớn + EN nhỏ hồng + nút "🔊 Nghe" pill xanh viền bên phải mỗi dòng (như mockup)
- Footer card: nút **"🔒 Lật sang trang tiếp theo"** full-width nền xám nhạt (disabled khi chưa đủ 5 chặng) + dòng phụ "Hoàn thành cả 5 chặng để mở khóa trang tiếp theo!"; khi đủ → đổi sang nền vàng gradient enabled; nút "Hoàn thành chặng" nhỏ đặt cạnh Back/Next ở header
- Lesson card luôn hiển thị, click chặng chỉ swap nội dung (không còn open/close state)

## 5. Tab "Góc của em" — Coming Soon kiểu mockup

- Card lớn căn giữa, nền trắng/pastel hồng nhạt, bo góc 3xl viền dotted hồng
- Header nhỏ: icon ⭐ tròn hồng + chữ "Góc của em"
- Trang trí treo từ trên xuống: dây line + ⭐ vàng + ⭐ hồng + ☁️ (absolute SVG/emoji)
- **Thought bubble đám mây trắng** ở giữa-trên, viền dotted hồng, bên trong text hồng đậm font display nguyên văn:
  "Góc của em - Mục này đang được xây dựng và sẽ sớm ra mắt các bạn nhỏ nhé! (TODO Later)"
- Minh họa dưới bubble: bé gái ngồi vẽ + gấu bông + hộp bút chì + giấy + máy bay giấy (emoji lớn 👧 🧸 ✏️ 📝 ✈️ bố cục như mockup)
- Sticker rải xung quanh: 💗 🌈 ✨

## 6. Footer (theo mockup)

- Caption đổi style: chữ hồng "Hai cơ quan bảo trợ và đồng hành" có 💗 hai bên
- Khung lớn trắng bo 3xl viền dotted xanh nhạt chứa 2 ô logo cạnh nhau:
  - "[Logo UBNVONN]" với hình quốc huy đỏ placeholder bên trái
  - "[Logo CVCEC]" với vòng tròn xanh placeholder bên trái
- 2 bông sen 🪷 ở 2 góc dưới + sóng nước SVG xanh nhạt mảnh chạy ngang dưới cùng

## 7. Asset cần tạo (imagegen)

| File | Prompt tóm tắt | Quality | Aspect |
|---|---|---|---|
| `src/assets/halong-scene.jpg` | Watercolor Vietnam landscape: Halong + junk + Hoi An | standard | 16:9 |
| `src/assets/kids-aodai.jpg` | 2 Vietnamese kids in ao dai waving, watercolor | standard | 1:1 |

Mascot trâu, sao, mây, sen, gấu bông vẫn dùng emoji + SVG (đủ dễ thương, nhẹ).

## 8. File sẽ sửa

- `src/styles.css` — đổi body gradient nền, thêm utility ribbon/dotted-cloud nếu cần
- `src/components/Navbar.tsx` — đổi style pill trắng cho 3 nút, logo bo lại
- `src/components/Footer.tsx` — sen + sóng nước + caption hồng + viền dotted
- `src/components/tabs/InfoTab.tsx` + `InfoCard.tsx` — icon vuông góc trái, body gọn hơn
- `src/components/tabs/ComingSoonTab.tsx` — thought bubble + bé gái vẽ + sticker
- `src/components/tabs/LearningTab.tsx` — bỏ state `isLessonModalOpen`, render LessonCard inline luôn cạnh map
- `src/components/learning/RoadmapMap.tsx` — background ảnh thật, ribbon title vàng, chứa luôn LessonCard ở dưới
- `src/components/learning/StageNode.tsx` — đổi sang SVG ngôi sao 5 cánh + label pill dưới
- `src/components/learning/BuffaloMascot.tsx` — thêm bệ tròn vàng + cờ 🚩
- `src/components/learning/LessonModal.tsx` → đổi thành **`LessonCard.tsx`** (inline, không overlay)

## 9. Giữ nguyên

- 3 tab switching (Thông tin / Vui học / Góc của em là 3 trang riêng)
- Toàn bộ data 8 chủ đề × 5 chặng, văn bản 5 card Thông tin, văn bản Coming Soon, caption + 2 placeholder logo
- Logic completedStages, lật trang khi đủ 5, mascot di chuyển, Back/Next, Hoàn thành chặng
- Không thêm tính năng ngoài spec gốc

---

Duyệt là build, kèm gọi imagegen tạo 2 ảnh.