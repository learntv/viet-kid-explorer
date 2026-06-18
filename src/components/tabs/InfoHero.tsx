import { BookOpen, BookMarked, ShieldCheck, Network, Heart, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

export function InfoHero() {
  const stats = [
    {
      num: "01",
      icon: ShieldCheck,
      iconBg: "bg-blue-100 text-blue-700",
      title: "Bảo trợ chuyên môn",
      desc: "Dự án thực hiện dưới sự bảo trợ của UBNVONN – Bộ Ngoại giao.",
    },
    {
      num: "02",
      icon: BookMarked,
      iconBg: "bg-green-100 text-green-700",
      title: "Dự án số hóa",
      desc: "Số hóa 2 cuốn sách Vui học Tiếng Việt của NXB ĐH Sư Phạm TP.HCM.",
    },
    {
      num: "03",
      icon: Network,
      iconBg: "bg-purple-100 text-purple-700",
      title: "Hệ sinh thái",
      desc: "Thành viên Mạng lưới cơ sở giảng dạy tiếng Việt và văn hóa Việt Nam ở nước ngoài.",
    },
    {
      num: "04",
      icon: BookOpen,
      iconBg: "bg-amber-100 text-amber-700",
      title: "Nội dung học",
      desc: "40 bài học, 8 chủ đề bám sát chương trình cho trẻ em kiều bào.",
    },
    {
      num: "05",
      icon: Heart,
      iconBg: "bg-pink-100 text-pink-700",
      title: "Tri ân",
      desc: "Cảm ơn các Đại sứ quán, cơ quan ban ngành tại Việt Nam và Canada.",
    },
  ];

  return (
    <section className="w-full px-4 pt-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Hero banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 shadow-sm ring-1 ring-blue-100/60">
          <div className="grid grid-cols-1 items-center gap-6 p-6 sm:p-10 lg:grid-cols-2 lg:gap-4 lg:p-12">
            <div className="relative z-10">
              <h1 className="font-serif text-4xl font-bold leading-tight text-blue-800 sm:text-5xl lg:text-6xl">
                THÔNG TIN DỰ ÁN
              </h1>
              <p className="mt-4 text-xl font-medium text-stone-700 sm:text-2xl">
                Trường Tiếng Việt Của Em
              </p>
              <p className="mt-4 max-w-md text-base text-stone-600 sm:text-lg">
                Hành trình gìn giữ và lan tỏa tiếng Việt, văn hóa Việt đến với thế hệ trẻ kiều bào trên khắp thế giới.
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-800 hover:shadow-lg"
                onClick={() => {
                  document.getElementById("info-cards-start")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Khám phá ngay
                <ArrowRight className="h-5 w-5" />
              </button>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["bg-yellow-300", "bg-rose-300", "bg-emerald-300", "bg-sky-300"].map((c, i) => (
                    <div
                      key={i}
                      className={`h-8 w-8 rounded-full border-2 border-white ${c} flex items-center justify-center text-xs`}
                    >
                      😊
                    </div>
                  ))}
                </div>
                <span className="text-sm text-stone-600">Hơn 10.000 trẻ em đang học mỗi ngày</span>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Phong cảnh Việt Nam với trẻ em mặc áo dài"
                className="h-full w-full rounded-2xl object-cover"
                width={1600}
                height={800}
              />
            </div>
          </div>
        </div>

        {/* Numbered info cards */}
        <div id="info-cards-start" className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-100 text-center"
            >
              <div className="text-3xl font-black text-stone-200">{s.num}</div>
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${s.iconBg}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-base font-bold text-stone-800">{s.title}</div>
                <div className="text-sm text-stone-600">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
