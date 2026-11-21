# Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild every page of the TBC Ghana site in the approved "editorial poster" direction, keeping all copy and the logo-derived palette.

**Architecture:** One token-based stylesheet (`app/globals.css`) defines both themes and a small set of editorial primitives (eyebrow, display type, hairline rules, ruled grid, buttons, duotone photo). Three tiny server components (`Accent`, `PageHero`, `SectionHead`) carry the repeated patterns. Pages are rewritten to use classes instead of inline colour styles, so dark/light work without `!important` patches.

**Tech Stack:** Next.js 16.2.10 (App Router), React 19.2.4, `next/font/google`, `next/image`, GSAP + Lenis (existing). No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-21-editorial-redesign-design.md`

## Global Constraints

- Commits: the "Commit" steps run only once the owner asks for commits; until then each task ends at its verification step.

- Copy is frozen: every visible string, link href, route, metadata and `data/*.ts` value stays byte-identical.
- Palette only: `#24D155` green, `#1B4D4A` teal, `#0E2F2F` deep teal, `#F6F1E8` cream, `#0C1412` dark page; `#D03433` red only for event date/flagship highlights and the top banner.
- Dark default; light theme uses cream `#F6F1E8` as page colour. Toggle and `THEME_INIT_SCRIPT` stay.
- Fonts: Inter (UI/body/headings), JetBrains Mono (labels), Instrument Serif italic (one accent phrase per display heading), all via `next/font/google`.
- Removed: `CustomCursor`, `ScrambleText`, `ParallaxElement`, `PartnerCards3D`, `HorizontalScrollTrack`, `PinnedSection`, plus already-unused `PartnerCardsStack`, `CommunityLevelsStack`, `ParallaxImage`.
- Kept motion: Lenis smooth scroll, `ScrollReveal`/`StaggerGrid` fades (shortened distance, no reverse, disabled under `prefers-reduced-motion`).
- Next 16: `next/image` uses `preload` (not `priority`); only quality 75 is allowed.
- No horizontal scroll at 375px; every interactive element has a visible `:focus-visible` state.

## Review Focus

1. **Copy drift.** Any rewritten JSX that retypes a string can silently change it. Covered by the text-snapshot diff (Task 0) run after every task.
2. **Light theme.** Pages tested only in dark break in light (cream text on cream). Covered by screenshots in both themes in Task 7.
3. **375px width with giant display type.** Hero headlines overflow. Covered by `clamp()` sizes plus the mobile screenshot in Task 7.
4. **Reduced motion / no-JS.** `ScrollReveal` sets `opacity: 0` inline, so content stays invisible if GSAP does not run. Task 1 moves the hidden state into CSS gated on `html.js` and `prefers-reduced-motion: no-preference`.
5. **Grayscale team photos on touch.** Hover never fires on phones, so photos stay gray. Covered by `@media (hover: hover)` gating in Task 5.

---

### Task 0: Copy snapshot harness (scratchpad, not committed)

**Files:**
- Create: `$SCRATCH/copy-snapshot.mjs` (scratchpad)

- [ ] Write `copy-snapshot.mjs <baseUrl> <outDir>`: for each route in `/ /about /programs /community /team /events /media /getinvolved /contact`, fetch the HTML, strip `<script>`/`<style>`/tags, decode entities, collapse whitespace, and write `<outDir>/<route>.txt`. Also extract every `href="..."` and `alt="..."` into the same file.
- [ ] `npm run build && npm start` on port 3100, run the snapshot into `$SCRATCH/baseline/`. Expected: 9 non-empty files.
- [ ] After each later task: rebuild, snapshot into `$SCRATCH/after/`, and `diff -r baseline after`. Expected: only differences from removed decorative markup (none in text). Any text diff is a bug.

### Task 1: Foundation: tokens, fonts, primitives, motion

**Files:**
- Rewrite: `app/globals.css`
- Modify: `app/layout.tsx` (fonts, drop `CustomCursor`, add `js` class in init script)
- Modify: `lib/theme-constants.ts` (init script also adds `js` class to `<html>`)
- Create: `components/editorial.tsx` exporting `Accent`, `PageHero`, `SectionHead`
- Modify: `components/ScrollReveal.tsx`, `components/StaggerGrid.tsx`, `components/SmoothScroller.tsx`

**Interfaces (Produces):**
- CSS tokens on `html[data-theme]`: `--bg --surface --surface-2 --ink --ink-2 --ink-3 --rule --rule-strong --accent (#24D155) --teal --deep --cream --red --on-accent`.
- Font CSS vars: `--font-sans --font-mono --font-serif`.
- Classes: `.wrap` (max 1240px, 20/40px gutters), `.section` (vertical rhythm), `.eyebrow` (mono caps, accent colour), `.display` (hero size `clamp(44px, 8.4vw, 112px)`, `line-height .92`, `letter-spacing -0.045em`), `.h2` (`clamp(32px, 4.6vw, 60px)`), `.lede`, `.accent` (serif italic, accent colour, weight 400), `.rule-t` / `.rule-b` (1px `--rule`), `.ruled` (CSS grid whose cells get left rules, collapsing to stacked top rules under 720px), `.btn` + `.btn-primary` + `.btn-ghost` (2px radius, 52px tall), `.link-arrow`, `.mono`, `.duotone` (photo wrapper: grayscale + `mix-blend-mode` teal/green overlay), `.tag`.
- `Accent({ children }): JSX` renders `<em className="accent">`.
- `PageHero({ eyebrow: string; title: ReactNode; lede?: ReactNode }): JSX` renders the inner-page hero (eyebrow, ruled line, `.display` h1, lede in a ruled two-column row).
- `SectionHead({ eyebrow: string; title: ReactNode; action?: { href: string; label: string; external?: boolean } }): JSX`.

- [ ] Write tokens for dark (`--bg #0C1412`, `--surface #0E2F2F`, ink = cream at 100/72/50% alpha, rules = cream at 14/24%) and light (`--bg #F6F1E8`, `--surface #EFE8DA`, ink `#0E2F2F` at 100/72/52%, rules `#0E2F2F` at 14/26%).
- [ ] Delete every `html[data-theme="dark"] [style*=...]` patch and every class only used by removed components.
- [ ] Load Inter, JetBrains_Mono, Instrument_Serif (`style: "italic"`, `weight: "400"`) with `variable` names above; drop the `@import url(...)` lines.
- [ ] `ScrollReveal`/`StaggerGrid`: distance 16px, duration .7, `toggleActions: "play none none none"`, skip under `matchMedia('(prefers-reduced-motion: reduce)')`; initial hidden state via CSS `.js [data-reveal]{opacity:0}` inside `@media (prefers-reduced-motion: no-preference)`, not inline style.
- [ ] `SmoothScroller`: keep the same ticker callback reference for add/remove; skip Lenis under reduced motion.
- [ ] Verify: `npm run lint` clean, `npm run build` passes, copy diff empty for layout-level text.
- [ ] Commit `feat: editorial design foundation (tokens, fonts, primitives)`.

### Task 2: Nav, banner, footer, theme toggle

**Files:** `components/Nav.tsx`, `components/Footer.tsx`, `components/ThemeToggle.tsx`

- [ ] Banner stays red with the same text and `Countdown`, but becomes a slim mono-caps strip.
- [ ] Nav: logo left (reverse-colour logo in dark, colour logo in light, swapped with CSS by `data-theme`), links in Inter 14px with an active underline rule, "Join the Circle" as `.btn-primary` small, toggle as a square hairline button. Hairline bottom rule and translucent `--bg` with `backdrop-filter`.
- [ ] Mobile panel: full-width list, links as large 28px rows with top rules, using tokens (no `#e1e6e3`).
- [ ] Footer: big ruled grid; first cell holds logo + tagline + socials as square hairline buttons; columns get `.eyebrow` headings; bottom row in mono. Faint `pillars-bg.png` texture at about 12% opacity behind it.
- [ ] Verify lint/build/copy diff. Commit `feat: editorial nav and footer`.

### Task 3: Home page

**Files:** `app/page.tsx`

- [ ] Hero: `.eyebrow` "Ecosystem Infrastructure for Web3" over a rule, h1 `.display` "Building Ghana's <Accent>Web3 Future</Accent> Together.", then a grid: left the lede + both buttons; right the `tbc_hero.jpg` in a `.duotone` frame (`preload`, `sizes="(max-width: 900px) 100vw, 40vw"`).
- [ ] Stats: `.ruled` 4 cells, large accent numerals, labels unchanged.
- [ ] Who We Are: two-column static (no `PinnedSection`), h2 with `<Accent>Web3 growth</Accent>`.
- [ ] Pillars: `SectionHead` with action "Learn about our pillars →", then a `.ruled` 5-column row (01–05 mono, title, description) over the faint `pillars-bg.png` texture; final "Find where you fit." / "Explore the community →" becomes a full-width ruled row under it.
- [ ] Get-involved band: deep-teal surface, h2 + p + `.btn-primary` "Join TBC Ghana".
- [ ] Partners: `SectionHead` + `PARTNER_VALUE_PROPS` as a `.ruled` 3-col with mono index, then "Ecosystem partners & sponsors" eyebrow and `LogoMarquee` restyled as a static wrapping grid of cream tiles (marquee animation removed, duplicate list removed).
- [ ] Upcoming: two ruled rows, red tag for flagship, same text.
- [ ] Remove imports of the cut components. Verify lint/build/copy diff. Commit `feat: editorial home page`.

### Task 4: About, Programs, Events

**Files:** `app/about/page.tsx`, `app/programs/page.tsx`, `app/events/page.tsx`

- [ ] All three use `PageHero` (same eyebrow/h1/lede text, one accent phrase each: about "One Circle.", programs "ecosystem moving.", events "the flagship.").
- [ ] About: story as large serif-free lede paragraphs in a narrow column; vision/mission as a 2-cell `.ruled` grid; pillars as full-width ruled rows (number, title+description, bullets); milestones as a 4-cell `.ruled` timeline with the existing colours mapped to tokens.
- [ ] Programs: ruled 2×2 grid, each cell with mono index, icon in accent, title, description, tags as `.tag`, link/badge unchanged; flagship cell on `--surface`. Research as a full-width ruled row.
- [ ] Events: flagship as a large deep-teal panel with the countdown in display numerals; the list as ruled rows (date column mono, title, subtitle, tag); footnote unchanged.
- [ ] Verify lint/build/copy diff. Commit `feat: editorial about, programs, events`.

### Task 5: Community, Team, Media

**Files:** `app/community/page.tsx`, `components/PartnerCardsGrid.tsx`, `app/team/page.tsx`, `components/TeamAvatar.tsx` (only if used), `app/media/page.tsx`, `components/ImagePlaceholder.tsx`

- [ ] Community: `PageHero`; partners as a ruled 3-col grid, each cell with the logo on a cream tile (fixed 88px height), name, description, and link badges as hairline `.tag` links; gallery as an asymmetric grid (first image spans 2 columns) with `object-position` set per photo so people are in frame (Sui: `center 25%`) and captions in mono beneath each image instead of overlaid.
- [ ] Team: `PageHero`; ruled 4-col grid (2-col under 720px), portraits `aspect-ratio: 4/5`, `filter: grayscale(1)` only inside `@media (hover: hover)`, coloured on `:hover` and `:focus-within`; name + role (mono, accent) beneath.
- [ ] Media: `PageHero`; featured report as a 2-col ruled panel; posts as a ruled 3-col grid. `ImagePlaceholder` becomes a token-based deep-teal block with the hex-grid texture and mono label (no light stripes).
- [ ] Verify lint/build/copy diff. Commit `feat: editorial community, team, media`.

### Task 6: Get Involved, Contact, forms

**Files:** `app/getinvolved/page.tsx`, `app/contact/page.tsx`, `components/GetInvolvedForm.tsx`, `components/ContactForm.tsx`

- [ ] Both pages use `PageHero`. Ways-to-get-involved become a `.ruled` 4-col with mono index and a coloured 2px top rule per item (existing colours).
- [ ] Forms: shared `.field` / `.input` classes (underline-only inputs on transparent background, mono labels, accent focus line); submit as full-width `.btn-primary`. Labels and placeholders unchanged. `onSubmit` behaviour unchanged.
- [ ] Contact info column as ruled rows (Email / Office / Social).
- [ ] Verify lint/build/copy diff. Commit `feat: editorial get involved and contact`.

### Task 7: Cleanup and visual verification

**Files:** delete the removed components listed in Global Constraints; prune `app/globals.css`.

- [ ] `grep -r` confirms no imports of deleted components remain; delete files.
- [ ] `npm run lint` and `npm run build` pass.
- [ ] Copy diff against baseline: no text changes.
- [ ] `$SCRATCH/shoot.mjs`: launch installed Google Chrome headless with `--remote-debugging-port`, drive it over CDP with Node's built-in `WebSocket` (no deps): `Page.addScriptToEvaluateOnNewDocument` sets `localStorage["tbc-theme"]` to `dark` or `light`, `Emulation.setDeviceMetricsOverride` for 1440 and 375 widths, `Page.captureScreenshot` with `captureBeyondViewport`. Also evaluate `document.documentElement.scrollWidth > innerWidth` per page and print any overflow. Expected: no overflow lines; review every image for contrast, cropping and spacing.
- [ ] Commit `chore: remove unused effect components and dead styles`.
