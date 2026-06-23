/**
 * Decorative fixed-position SVG backdrop with a playful Vietnam scenery:
 * pastel sky, soft clouds, Hạ Long-style karsts, rolling rice terraces,
 * and lotus accents. Pointer-events disabled; sits behind all content.
 */
export function VietnamSceneBackdrop() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="vn-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF6E0" />
            <stop offset="55%" stopColor="#FFE9C7" />
            <stop offset="100%" stopColor="#FFD9B0" />
          </linearGradient>
          <linearGradient id="vn-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9FD8E8" />
            <stop offset="100%" stopColor="#6BBBD0" />
          </linearGradient>
          <linearGradient id="vn-rice1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8E48F" />
            <stop offset="100%" stopColor="#9BCB66" />
          </linearGradient>
          <linearGradient id="vn-rice2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A6D26B" />
            <stop offset="100%" stopColor="#76B04A" />
          </linearGradient>
          <linearGradient id="vn-karst" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7FB8C8" />
            <stop offset="100%" stopColor="#4E92A6" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1440" height="900" fill="url(#vn-sky)" />

        {/* Sun */}
        <circle cx="1180" cy="180" r="80" fill="#FFD66B" opacity="0.85" />
        <circle cx="1180" cy="180" r="110" fill="#FFD66B" opacity="0.25" />

        {/* Clouds (animated) */}
        <g className="animate-float-slow" style={{ transformOrigin: "center" }}>
          <ellipse cx="220" cy="170" rx="80" ry="22" fill="#ffffff" opacity="0.9" />
          <ellipse cx="280" cy="160" rx="55" ry="18" fill="#ffffff" opacity="0.9" />
          <ellipse cx="900" cy="120" rx="90" ry="24" fill="#ffffff" opacity="0.85" />
          <ellipse cx="970" cy="110" rx="55" ry="18" fill="#ffffff" opacity="0.85" />
        </g>

        {/* Distant karsts (Hạ Long) */}
        <g fill="url(#vn-karst)" opacity="0.85">
          <path d="M0,520 C60,420 120,470 180,440 C240,400 280,470 340,455 C400,440 440,490 500,470 L500,560 L0,560 Z" />
          <path d="M420,540 C480,440 540,490 600,460 C660,420 720,490 780,470 C840,450 880,500 960,480 L960,580 L420,580 Z" />
          <path d="M880,530 C940,430 1000,480 1060,450 C1120,410 1180,480 1260,460 C1320,445 1380,495 1440,480 L1440,580 L880,580 Z" />
        </g>

        {/* Water band */}
        <rect x="0" y="555" width="1440" height="55" fill="url(#vn-water)" opacity="0.85" />
        {/* Water shimmer */}
        <g stroke="#ffffff" strokeWidth="2" opacity="0.5" fill="none">
          <path d="M80,580 q20,-6 40,0 t40,0" />
          <path d="M520,592 q20,-6 40,0 t40,0" />
          <path d="M960,578 q20,-6 40,0 t40,0" />
          <path d="M1240,590 q20,-6 40,0 t40,0" />
        </g>

        {/* Rice terraces */}
        <path d="M0,610 C200,580 400,640 720,620 C1040,600 1240,650 1440,615 L1440,900 L0,900 Z" fill="url(#vn-rice1)" />
        <path d="M0,690 C220,660 460,720 720,700 C980,680 1240,730 1440,695 L1440,900 L0,900 Z" fill="url(#vn-rice2)" opacity="0.95" />
        <path d="M0,780 C240,755 500,800 720,790 C940,780 1240,810 1440,790 L1440,900 L0,900 Z" fill="#5E9A3D" opacity="0.9" />

        {/* Lotus accents */}
        <g opacity="0.85">
          <g transform="translate(120,720)">
            <ellipse cx="0" cy="14" rx="34" ry="6" fill="#3F8A4E" opacity="0.6" />
            <path d="M0,0 C8,-14 22,-12 18,4 C28,-6 36,6 22,16 C32,20 22,32 8,22 C8,34 -8,34 -8,22 C-22,32 -32,20 -22,16 C-36,6 -28,-6 -18,4 C-22,-12 -8,-14 0,0Z" fill="#FF8FB6" />
            <circle cx="0" cy="8" r="5" fill="#FFD66B" />
          </g>
          <g transform="translate(1280,760)">
            <ellipse cx="0" cy="14" rx="34" ry="6" fill="#3F8A4E" opacity="0.6" />
            <path d="M0,0 C8,-14 22,-12 18,4 C28,-6 36,6 22,16 C32,20 22,32 8,22 C8,34 -8,34 -8,22 C-22,32 -32,20 -22,16 C-36,6 -28,-6 -18,4 C-22,-12 -8,-14 0,0Z" fill="#FFA8C6" />
            <circle cx="0" cy="8" r="5" fill="#FFD66B" />
          </g>
        </g>
      </svg>

      {/* Soft legibility wash so foreground text stays high-contrast */}
      <div className="absolute inset-0 bg-[oklch(0.99_0.01_80/0.55)]" />
    </div>
  );
}

export default VietnamSceneBackdrop;
