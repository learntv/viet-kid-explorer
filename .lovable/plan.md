## Mục tiêu
- Thay hình con trâu (mascot trên lộ trình) bằng ảnh `Trau_con.png` user vừa tải lên.
- Thay 5 ngôi sao chặng (Chặng 1–5) bằng 5 lá cờ `Laco01.png` → `Laco05.png` đúng thứ tự.

## Các bước

1. **Tải 6 file lên Lovable Assets (CDN)** bằng `lovable-assets create`, lưu pointer JSON vào `src/assets/`:
   - `src/assets/trau-con.png.asset.json`
   - `src/assets/laco01.png.asset.json` … `laco05.png.asset.json`

2. **`src/components/learning/BuffaloMascot.tsx`**: bỏ emoji 🐃 + SVG nón + cờ tự vẽ. Thay bằng `<img src={trauCon.url} />` ~ 96–110px, giữ animation `animate-bob` và "bệ vàng" phía dưới. Cập nhật offset `top` cho mascot đứng đúng phía trên ngôi sao hiện tại.

3. **`src/components/learning/StageNode.tsx`**: thêm prop `flagSrc: string`. Thay khối `<svg>` ngôi sao bằng `<img src={flagSrc} />` (giữ kích thước `size`, hiệu ứng `animate-bob` khi `isCurrent`, drop-shadow, badge ✓ khi hoàn thành, label "Chặng N" giữ nguyên). Bỏ `colorMap` không dùng nữa.

4. **`src/components/learning/RoadmapMap.tsx`**: import 5 pointer cờ thành mảng `FLAGS = [laco01.url, …, laco05.url]`, truyền `flagSrc={FLAGS[i]}` vào `<StageNode />`. Có thể bỏ prop `color` (hoặc giữ để không phải sửa type rộng — sẽ bỏ vì StageNode không cần nữa).

## Lưu ý
- Chỉ thay đổi UI/hình ảnh, không động vào logic bài học, dữ liệu, hay state.
- Giữ nguyên layout map, vị trí node, đường nét đứt.
