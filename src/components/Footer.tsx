import { Facebook, Youtube, Twitter, Music2, Send } from "lucide-react";
import boNgoaiGiao from "@/assets/bo-ngoai-giao.png";
import cvcec from "@/assets/cvcec.png";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      {/* Main footer grid */}
      <div className="bg-[oklch(0.98_0.008_75)] py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary shadow-card">
                <span className="text-lg">📖</span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-extrabold text-primary leading-none">Vui Học</div>
                <div className="font-display text-sm font-extrabold text-navy leading-none">Tiếng Việt</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nền tảng học tiếng Việt dành cho trẻ em Việt Nam tiêu học ở trong và ngoài nước.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-card transition-transform hover:scale-110 hover:shadow-md text-[#1877F2]">
                <Facebook className="h-4 w-4" strokeWidth={2} />
              </a>
              <a href="#" aria-label="YouTube" className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-card transition-transform hover:scale-110 hover:shadow-md text-[#FF0000]">
                <Youtube className="h-4 w-4" strokeWidth={2} />
              </a>
              <a href="#" aria-label="Twitter/X" className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-card transition-transform hover:scale-110 hover:shadow-md text-foreground">
                <Twitter className="h-4 w-4" strokeWidth={2} />
              </a>
              <a href="#" aria-label="TikTok" className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-card transition-transform hover:scale-110 hover:shadow-md text-foreground">
                <Music2 className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h4 className="mb-4 font-display text-sm font-extrabold text-navy">Về chúng tôi</h4>
            <ul className="flex flex-col gap-2.5">
              {["Giới thiệu", "Hướng dẫn sử dụng", "Câu hỏi thường gặp", "Liên hệ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policy */}
          <div>
            <h4 className="mb-4 font-display text-sm font-extrabold text-navy">Chính sách</h4>
            <ul className="flex flex-col gap-2.5">
              {["Điều khoản sử dụng", "Chính sách bảo mật", "Chính sách nội dung"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="mb-2 font-display text-sm font-extrabold text-navy">Kết nối với chúng tôi</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Nhận tin tức và tài liệu mới nhất cho bé yêu của bạn.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 rounded-full border border-border bg-white px-4 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary/90">
                <Send className="h-3.5 w-3.5" strokeWidth={2.5} />
                <span>Đăng ký</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="bg-white py-6 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-center gap-8 flex-wrap">
          <img src={boNgoaiGiao} alt="Bộ Ngoại giao" className="h-12 w-auto object-contain" loading="lazy" />
          <img src={cvcec} alt="CVCEC" className="h-12 w-auto object-contain" loading="lazy" />
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-white py-4 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vui Học Tiếng Việt. Tất cả quyền được bảo lưu.
        </p>
      </div>
    </footer>
  );
}
