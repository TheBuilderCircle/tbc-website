# TBC Ghana site: editorial redesign

Date: 2026-11-21 · Status: awaiting approval

## Intent and why

The site works but reads as generic and template-built, with no premium feel for what is, in effect, a conference brand. The owner wants a redesign that looks and feels like a premium event, keeping the same colour identity and the same words.

The chosen direction is **A, "Editorial poster"** (mockup: `.superpowers/brainstorm/65405-1795226197/content/direction-v3.html`). It is mostly typography: very large tight headlines, thin hairline rules, a ruled-grid layout, mono micro-labels, numbered sections, and one serif-italic accent word per headline. It is quiet and confident, like a printed festival programme.

## Goals

- Every page (home, about, programs, community, team, events, media, get involved, contact) plus Nav, Footer and shared components feels like one premium, editorial system.
- Colours follow the logo files, not the old ad-hoc mix. Palette: green `#24D155` (accent), teal `#1B4D4A`, deep teal `#0E2F2F` (raised surfaces), cream `#F6F1E8` (replaces pure white for text and light-theme page colour), site dark `#0C1412` (dark-theme page background). The existing red `#D03433` stays only for event date highlights, as today.
- Dark stays the default theme. The light theme remains, using cream as the page colour. The toggle stays.
- Works on phone widths (at least 375px) and desktop.
- Replace the current dark-mode approach (attribute-selector patches with `!important` over hardcoded inline colours) with real theme tokens, so both themes are first-class.

## Non-goals

- No changes to copy. All text, links, routes and the `data/*.ts` content stay exactly as they are.
- No new pages, features or backend work. Forms keep their current behaviour.
- No new dependencies.
- No new photography or logo assets. Existing images and logos are reused.

## Anti-goals

- It must not look like a generic dark-mode landing page: no glow gradients, glass cards, gradient text or rounded-pill CTAs (that was direction B).
- No gimmick motion.
- No visible regressions in forms, nav (including the mobile menu), the Countdown, or the SEO metadata.

## Constraints

- Next.js 16.2.10 with React 19. `AGENTS.md` says this version differs from older Next.js; the builder must read the relevant guide in `node_modules/next/dist/docs/` before writing code and heed deprecations.
- Copy is fixed. Layout, type and colour are what change.
- Keep smooth scroll (Lenis) and scroll-reveal fade-ins, restyled to be subtle.
- Fonts: Inter (headings and body), JetBrains Mono (labels), plus a serif italic (Georgia-style system serif or a Google serif the builder picks) for the single accent word in headings. The accent word is a styling choice only; it does not change any text.

## Approaches considered

1. **Restyle in place** (keep inline styles, edit page by page). Fastest, but keeps the dark-mode patching and inconsistency. Rejected.
2. **Design foundation first, then rebuild each page on it. Chosen.** One shared stylesheet with theme tokens, type scale, spacing, hairline-rule and grid utilities. Then each page is rebuilt using them, and the `!important` dark-mode patches are deleted.
3. **Adopt Tailwind or CSS modules.** New dependency and a bigger rewrite for no visual gain over 2. Rejected.

The owner delegated the how (picked option 2) and decided the motion cut below.

## Decisions made with the owner

- Direction A, editorial poster.
- Palette blended with the logo colours (cream and deep teal introduced; see above).
- **Cut:** custom cursor, scramble text on the hero, hero parallax rings, 3D stacked partner cards (`PartnerCards3D`).
- **Keep:** smooth scroll, simple fade-in on scroll.
- Both themes stay; dark is default.

## Design details (from the mockup)

- **Nav:** wordmark "TBC.GHANA" with green dot at left, the six existing links at right, hairline bottom border. Mobile menu stays, restyled.
- **Hero:** kicker in green mono caps above a hairline; headline set very large with the serif-italic green accent on "Web3 Future"; below it a ruled grid with the paragraph and both CTAs in the first cell and the four stats in four cells, each stat in large green numerals with a small label.
- **Section pattern:** green mono eyebrow ("What We Do · Our Pillars"), large heading, then content in open ruled columns instead of boxed cards. Pillars become a five-column ruled row with mono numbers 01 to 05.
- **Buttons:** square-cornered (2px radius). Green fill with deep-teal text for primary, hairline outline for secondary.
- **Cards elsewhere** (team, events, programs, media, community): hairline-ruled rows or ruled grids rather than rounded shadowed boxes. Hover is a subtle rule or colour change; the full-teal flip on hover is removed.

## Imagery (all existing assets; no new photos)

The poster mockup is text-led, but real photography stays and is used deliberately, not as full-bleed wallpaper.

- **Hero (`tbc_hero.jpg`):** a framed photo block inside the hero grid (not a backdrop), with a green/teal duotone treatment. The source has pink walls that clash with the palette, so the tint is required, not optional.
- **Community group photos (`group-images/*`):** large images in ruled frames, cropped to the people. Several, such as the Sui group shot, are roughly half empty desks, so each needs a deliberate crop (`object-position`) checked by eye.
- **Team portraits (`team/*`):** ruled grid, grayscale by default and full colour on hover, so 13 photos with different lighting read as one set. Focus states must also reveal colour.
- **`pillars-bg.png` (dark green hex grid):** kept as a faint texture behind the pillars row and possibly the footer. It already matches the ruled-grid look.
- **Partner logos (`com-Logos/*`):** static ruled row, each logo on a cream or deep-teal tile so differing logo backgrounds do not clash.
- **TBC logos:** reverse-colour (cream) logo in nav and footer on dark; the colour or dark logo variant on the light theme. This also fixes the cream logo sitting on a non-cream page.
- Use `next/image` with sensible `sizes` so the large photos do not hurt load time. Every image keeps meaningful alt text.

## What is left to the builder

- Exact type sizes, line heights and the responsive scale (huge hero type must still fit 375px).
- How each of the other eight pages' content maps onto the ruled grid; follow the section pattern above.
- Which serif to use for the accent word.
- What to do with the now-unreferenced components: `ParallaxElement`, `ScrambleText`, `CustomCursor`, `PartnerCards3D` are removed along with their CSS. `PartnerCardsStack`, `CommunityLevelsStack` and `ParallaxImage` are already unused; remove them if still unused at the end. `HorizontalScrollTrack` and `PinnedSection` are used only on the home page, and the mockup replaces both with static ruled layouts, so remove them if nothing else needs them.
- Whether `LogoMarquee` (partner logos strip) stays as a quiet, slow scroll or becomes a static ruled logo row. Prefer static unless it looks good.
- Checking the result in the browser at phone and desktop widths in both themes before calling it done.

## Rough build order (for the plan)

1. Tokens and base stylesheet (colours, type, rules, grid, buttons), theme wiring, delete the `!important` patches.
2. Nav and Footer.
3. Home page.
4. The remaining eight pages.
5. Remove the cut components and dead CSS; lint, build, visual pass in both themes at mobile and desktop.
