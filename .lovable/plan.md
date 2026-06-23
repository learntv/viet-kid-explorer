# Kid-Friendly Vietnam-Themed UI Revamp

Goal: refresh the whole frontend with a playful, colorful, animated, Vietnam-scenery aesthetic — without breaking existing routes, tabs, or logic.

## 1. Design System (src/styles.css)

New token palette (OKLCH) tuned for kids 5–12:
- `--primary` sunny yellow `#FFC83D`
- `--secondary` river blue `#3DB8E8`
- `--accent` rice-paddy green `#7BC74D`
- `--destructive` lotus pink `#FF6F91`
- `--background` warm sky cream `#FFF8E7`
- `--card` pure white with soft shadow
- `--foreground` deep ink `#1F2937`
- Gradients: `--gradient-sky`, `--gradient-paddy`, `--gradient-sunset`
- Shadows: `--shadow-pop` (chunky soft drop), `--shadow-glow`
- Radius default bumped to `1.25rem` (rounded-2xl baseline)
- Fonts: `Baloo 2` (display) + `Nunito` (body) loaded via `<link>` in `__root.tsx`

Add utility classes: `.bg-vn-scene`, `.card-pop`, `.btn-squish`, `.hover-lift`.

Animations (keyframes): `bounce-in`, `float-slow`, `wiggle`, `fade-slide-up`. Expose as Tailwind `animate-*` utilities.

## 2. Vietnam Scenery SVG Backdrop

New component `src/components/VietnamSceneBackdrop.tsx`:
- Inline SVG, `fixed inset-0 -z-10`, `pointer-events-none`
- Layered: sky gradient → distant Hạ Long karsts (silhouette) → rolling rice terraces → lotus + bamboo accents → soft cloud blobs with `animate-float-slow`
- Subtle white-to-transparent overlay (`backdrop-filter: blur` only on content cards, not on backdrop) so text stays legible
- Decorative `aria-hidden`, SVG path-optimized, no external fetch

Mount once in `src/routes/__root.tsx` so it covers every page.

## 3. Component Polish

Touch only presentation; preserve all logic and props.
- `Navbar`: bright sky→blue gradient already present — tune to new tokens, add wiggle on logo hover, scale on tab hover, keep yellow active pill
- `Footer`: rounded-3xl top, paddy-green gradient
- Tab triggers (`InfoTab`, `LearningTab`, `ComingSoonTab` containers): wrap section roots with `animate-fade-slide-up`
- `InfoHero`, `InfoCard`: `card-pop` shadow, hover-lift, bounce-in on mount (staggered via inline `style={{animationDelay}}`)
- `LearningHero`, `RoadmapMap`, `StageNode`, `LessonCard`, `BuffaloMascot`: mascot gets `animate-bob`, stage nodes get hover scale + squish active
- Buttons (`src/components/ui/button.tsx`): add `btn-squish` (active:scale-95), default rounded-2xl, keep variants

## 4. Accessibility & Perf

- Contrast: foreground on cream ≥ 7:1, primary text on yellow uses deep ink
- Animations use `transform`/`opacity` only (GPU); honor `prefers-reduced-motion` via a media query disabling keyframes
- SVG inlined once, ~6KB, no JS animation loop

## 5. Out of Scope

- No new routes, no backend changes, no auth
- No content rewrites on the three tabs
- Mockup structural rules from project-knowledge stay intact

## Files Touched

- `src/styles.css` (tokens, utilities, keyframes)
- `src/routes/__root.tsx` (fonts link, mount backdrop)
- `src/components/VietnamSceneBackdrop.tsx` (new)
- `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- `src/components/tabs/{InfoTab,InfoHero,InfoCard,LearningTab,ComingSoonTab}.tsx`
- `src/components/learning/{LearningHero,RoadmapMap,StageNode,LessonCard,BuffaloMascot}.tsx`
- `src/components/ui/button.tsx`

Approve and I'll implement in one pass.
