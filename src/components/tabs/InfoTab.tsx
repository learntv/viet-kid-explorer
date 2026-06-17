import { BookMarked, Copyright, Heart, Network, ShieldCheck } from "lucide-react";
import { InfoCard } from "./InfoCard";

const CARDS = [
  {
    heading: "Bảo trợ chuyên môn",
    body:
      "Dự án thực hiện dưới sự bảo trợ và ủng hộ của Ủy ban Nhà nước về người Việt Nam ở nước ngoài – Bộ Ngoại giao.",
    Icon: ShieldCheck,
    accent: "primary" as const,
  },
  {
    heading: "Dự án số hóa",
    body:
      "Dự án số hóa hai cuốn sách của NXB ĐH Sư Phạm TP Hồ Chí Minh, được thực hiện trong khuôn khổ Chương trình Tôn vinh tiếng Việt trong cộng đồng người Việt Nam ở nước ngoài, do UBNVONN – Bộ Ngoại giao phát động.",
    Icon: BookMarked,
    accent: "yellow" as const,
  },
  {
    heading: "Hệ sinh thái",
    body:
      "Dự án là thành viên tích cực nằm trong Mạng lưới các cơ sở giảng dạy tiếng Việt và văn hóa Việt Nam ở nước ngoài.",
    Icon: Network,
    accent: "purple" as const,
  },
  {
    heading: "Bản quyền",
    body:
      "Dự án được bảo hộ bản quyền bởi đồng tác giả: Phan Thị Quỳnh Trang - Nguyễn Trần Thanh Hải - Nguyễn Phương Mai.",
    Icon: Copyright,
    accent: "pink" as const,
  },
];

export function InfoTab() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8 text-center sm:mb-12">
        <span className="inline-block rounded-full bg-yellow px-4 py-1 text-sm font-bold text-navy shadow-card">
          Giới thiệu
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-5xl">
          Thông tin dự án
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-foreground/70">
          Đôi nét về sứ mệnh, đối tác và bản quyền của Tiếng Việt Online.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        {CARDS.map((c) => (
          <InfoCard key={c.heading} {...c} />
        ))}
      </div>

      <article className="mt-6 overflow-hidden rounded-3xl border border-pink/30 bg-gradient-thanks p-6 shadow-soft sm:mt-8 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pink text-white shadow-card">
            <Heart className="h-6 w-6" fill="currentColor" />
          </span>
          <h3 className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Lời cảm ơn
          </h3>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground/85 sm:text-lg">
          Ban quản lý dự án xin được gửi lời cảm ơn chân thành tới Ủy ban Nhà
          nước về người Việt Nam ở nước ngoài – Bộ Ngoại giao đã luôn đồng hành
          và định hướng. Chúng tôi xin gửi lời tri ân sâu sắc tới các Đại sứ
          quán, các cơ quan ban ngành tại Việt Nam và Canada, cùng Mạng lưới
          giảng dạy tiếng Việt đã tạo điều kiện và hỗ trợ quý báu để dự án
          &quot;Tiếng Việt Online&quot; được hoàn thiện và đi vào vận hành. Sự
          đồng hành của quý vị là nguồn động lực to lớn giúp chúng tôi gìn giữ
          và lan tỏa ngôn ngữ, văn hóa Việt đến với thế hệ trẻ tại Canada nói
          riêng và trên toàn thế giới nói chung.
        </p>
      </article>
    </section>
  );
}
