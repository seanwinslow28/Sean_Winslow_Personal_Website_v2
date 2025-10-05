**Rationale (brief):** Body copy targets \~1.5 line height and 50–75 characters per line for readability (Baymard & USWDS). Contrast tokens and notes align to WCAG AA: 4.5:1 for normal text, 3:1 for large text and non-text UI/focus indicators. Variable font pair enables expressive weight/slant without extra files. Spacing follows an 8-pt base; shadows are tuned for dark UIs (low-chroma, soft, layered). For motion/accessibility harmony with the rest of your system, keep effects subtle and honor `prefers-reduced-motion` (matches your motion guidance). Line-length guidance: 50–75 CPL (Baymard) and 45–90 CPL (USWDS), with \~1.5 leading (Material). WCAG AA contrast rules and verification steps are included below. [Baymard Institute+2U.S. Web Design System (USWDS)+2](https://baymard.com/blog/line-length-readability?utm_source=chatgpt.com) Key WCAG references for text (1.4.3) and non-text/UI (1.4.11) contrasts are cited. [W3C+2W3C+2](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html?utm_source=chatgpt.com)

---

`/* tokens.css — paste into your Vite + React app (e.g., src/styles/tokens.css)`  
   `Usage pattern for fallbacks (hex → OKLCH):`  
     `color: var(--text-primary-hex);`  
     `color: oklch(var(--text-primary-oklch));`  
`*/`

`/* 1) Base Theme — Dark */`  
`:root {`  
  `/* —— Brand palette (OKLCH values include % L, chroma, hue) —— */`  
  `/* Core surfaces */`  
  `--bg-900-hex: #0B0F19;              /* deep navy */`  
  `--bg-900-oklch: 16.95% 0.022 267.3;`

  `--surface-900-hex: #0F172A;         /* slate 900 */`  
  `--surface-900-oklch: 20.77% 0.0398 265.8;`

  `--surface-800-hex: #1F2937;         /* slate 800 */`  
  `--surface-800-oklch: 27.81% 0.0296 256.8;`

  `--surface-700-hex: #334155;         /* slate 700 */`  
  `--surface-700-oklch: 37.17% 0.0392 257.3;`

  `/* Text & UI neutrals */`  
  `--text-primary-hex: #F8FAFC;        /* neutral 100 */`  
  `--text-primary-oklch: 98.42% 0.0034 247.9;`

  `--text-secondary-hex: #CBD5E1;      /* neutral 300 */`  
  `--text-secondary-oklch: 86.90% 0.0198 252.9;`

  `--text-muted-hex: #E2E8F0;          /* neutral 200 */`  
  `--text-muted-oklch: 92.88% 0.0126 255.5;`

  `/* Accents */`  
  `--accent-500-hex: #2140FF;          /* cobalt */`  
  `--accent-500-oklch: 50.65% 0.2764 266.4;`

  `--accent-300-hex: #01A7C1;          /* teal */`  
  `--accent-300-oklch: 66.98% 0.1176 214.0;`

  `--accent-200-hex: #E4FE66;          /* neon lime (highlight) */`  
  `--accent-200-oklch: 94.97% 0.1769 118.1;`

  `/* States */`  
  `--success-500-hex: #16C784;         /* up green */`  
  `--success-500-oklch: 73.35% 0.1629 159.8;`

  `--danger-500-hex: #EA3943;          /* down red */`  
  `--danger-500-oklch: 61.87% 0.2122 23.3;`

  `/* —— Typography —— */`  
  `--font-sans: "Inter Variable", Inter, system-ui, -apple-system, "Segoe UI",`  
               `Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;`  
  `--font-mono: "JetBrains Mono Variable", ui-monospace, SFMono-Regular,`  
               `Menlo, Consolas, "Liberation Mono", monospace;`

  `/* Variable axes (use with @supports font-variation-settings) */`  
  `--sans-wght-normal: 450;      /* 300–800 available */`  
  `--sans-wght-strong: 650;`  
  `--sans-slnt: 0;               /* Inter supports slnt -10..0 */`

  `--mono-wght-normal: 450;      /* 300–800 available */`  
  `--mono-wght-strong: 650;`

  `/* Type scale (fluid with clamp). Steps: -1..5 */`  
  `--fs--1: clamp(0.84rem, 0.80rem + 0.2vw, 0.92rem);`  
  `--fs-0:  clamp(0.98rem, 0.94rem + 0.3vw, 1.08rem);  /* body */`  
  `--fs-1:  clamp(1.10rem, 1.04rem + 0.4vw, 1.25rem);`  
  `--fs-2:  clamp(1.28rem, 1.18rem + 0.6vw, 1.50rem);`  
  `--fs-3:  clamp(1.50rem, 1.36rem + 0.9vw, 1.80rem);`  
  `--fs-4:  clamp(1.80rem, 1.60rem + 1.2vw, 2.20rem);`  
  `--fs-5:  clamp(2.20rem, 1.94rem + 1.6vw, 2.80rem);`

  `/* Leading & measure */`  
  `--leading-tight: 1.3;`  
  `--leading-normal: 1.5;  /* target for body copy */`  
  `--leading-loose: 1.65;`

  `/* CPL control (characters per line) */`  
  `--measure-long: 66ch;   /* sweet spot: 50–75 CPL */`  
  `--measure-short: 45ch;  /* sidebars/cards */`

  `/* —— Spacing (8-pt base) —— */`  
  `--space-0: 0px;`  
  `--space-1: 4px;`  
  `--space-2: 8px;`  
  `--space-3: 12px;`  
  `--space-4: 16px;`  
  `--space-5: 24px;`  
  `--space-6: 32px;`  
  `--space-7: 40px;`  
  `--space-8: 48px;`  
  `--space-9: 64px;`  
  `--space-10: 96px;`

  `/* —— Radii —— */`  
  `--radius-xs: 4px;`  
  `--radius-sm: 8px;`  
  `--radius-md: 12px;`  
  `--radius-lg: 16px;`  
  `--radius-xl: 24px;`  
  `--radius-2xl: 32px;`  
  `--radius-pill: 9999px;`

  `/* —— Shadows (dark UI tuned) —— */`  
  `--shadow-1: 0 1px 2px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.04);`  
  `--shadow-2: 0 6px 16px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.04);`  
  `--shadow-3: 0 12px 28px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.05);`  
  `--shadow-glow-accent: 0 0 0 3px color-mix(in oklch,`  
                        `oklch(var(--accent-500-oklch)) 35%, transparent);`

  `/* —— Focus ring (meets WCAG 1.4.11 ≥ 3:1) —— */`  
  `--focus-ring: 0 0 0 3px oklch(var(--accent-200-oklch) / 0.65);`  
  `--focus-ring-hex: 0 0 0 3px rgba(228,254,102,0.65);`

  `/* —— Semantic aliases —— */`  
  `--color-bg-hex: var(--bg-900-hex);`  
  `--color-bg: oklch(var(--bg-900-oklch));`

  `--color-surface-hex: var(--surface-900-hex);`  
  `--color-surface: oklch(var(--surface-900-oklch));`

  `--color-elev-hex: var(--surface-800-hex);`  
  `--color-elev: oklch(var(--surface-800-oklch));`

  `--color-text-hex: var(--text-primary-hex);`  
  `--color-text: oklch(var(--text-primary-oklch));`

  `--color-text-dim-hex: var(--text-secondary-hex);`  
  `--color-text-dim: oklch(var(--text-secondary-oklch));`

  `--color-accent-hex: var(--accent-500-hex);`  
  `--color-accent: oklch(var(--accent-500-oklch));`

  `--color-success-hex: var(--success-500-hex);`  
  `--color-success: oklch(var(--success-500-oklch));`

  `--color-danger-hex: var(--danger-500-hex);`  
  `--color-danger: oklch(var(--danger-500-oklch));`  
`}`

`/* 2) Global application of tokens */`  
`html, body {`  
  `background: var(--color-bg-hex);`  
  `background: var(--color-bg);`  
  `color: var(--color-text-hex);`  
  `color: var(--color-text);`  
  `font-family: var(--font-sans);`  
  `font-size: 16px;`  
  `line-height: var(--leading-normal);`  
  `text-rendering: optimizeLegibility;`  
`}`

`/* Content measure helpers */`  
`.prose, [data-measure="long"] { max-width: var(--measure-long); }`  
`[data-measure="short"] { max-width: var(--measure-short); }`

`/* Headings */`  
`h1 { font-size: var(--fs-5); font-weight: 700; line-height: 1.15; }`  
`h2 { font-size: var(--fs-4); font-weight: 650; line-height: 1.2; }`  
`h3 { font-size: var(--fs-3); font-weight: 650; line-height: 1.25; }`

`/* Body text */`  
`p, li { font-size: var(--fs-0); }`

`/* Buttons & interactive */`  
`.button {`  
  `display: inline-flex; align-items: center; justify-content: center;`  
  `min-height: 44px; padding: 0 var(--space-5);`  
  `border-radius: var(--radius-md);`  
  `background: var(--color-accent-hex); background: var(--color-accent);`  
  `color: #fff; box-shadow: var(--shadow-2);`  
`}`  
`.button:focus-visible {`  
  `outline: none;`  
  `box-shadow: var(--shadow-2), var(--focus-ring-hex);`  
  `box-shadow: var(--shadow-2), var(--focus-ring);`  
`}`

`/* Cards */`  
`.card {`  
  `background: var(--color-surface-hex); background: var(--color-surface);`  
  `border-radius: var(--radius-lg); box-shadow: var(--shadow-1);`  
  `padding: var(--space-6);`  
`}`

`/* Links */`  
`a { color: var(--color-accent-hex); color: var(--color-accent); text-underline-offset: 2px; }`  
`a:hover { text-underline-offset: 3px; }`

`/* Code */`  
`code, pre { font-family: var(--font-mono); font-variation-settings: "wght" var(--mono-wght-normal); }`

`/* Optional: variable font tuning */`  
`@supports (font-variation-settings: normal) {`  
  `body { font-variation-settings: "wght" var(--sans-wght-normal), "slnt" var(--sans-slnt); }`  
  `strong { font-variation-settings: "wght" var(--sans-wght-strong); }`  
`}`

`/* Respect reduced motion across the system */`  
`@media (prefers-reduced-motion: reduce) {`  
  `* { transition: none !important; animation: none !important; }`  
`}`

`/* Example utility to ensure 50–75 CPL on main content */`  
`main .prose { margin-inline: auto; padding-inline: var(--space-6); }`

### **WCAG AA contrast & verification (quick checks)**

* **Text contrast:** Ensure normal body text meets **≥ 4.5:1**; large text (≥ 24 px regular or ≥ 19 px bold) **≥ 3:1**. [W3C+1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html?utm_source=chatgpt.com)

* **Non-text/UI contrast:** Focus rings, icons, form borders, and selected states **≥ 3:1** against adjacent colors. (Token `--focus-ring` is designed to meet/exceed this.) [W3C](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html?utm_source=chatgpt.com)

* **How to verify:**

  1. Run **axe DevTools** or **Deque’s Color Contrast Analyzer** on key pages (home, project, case study). [Deque University+1](https://dequeuniversity.com/rules/axe/html/2.2/color-contrast?utm_source=chatgpt.com)

  2. Spot-check brand combos (e.g., accent on surface, text on bg) in the online **Deque Contrast Checker**. [Deque University](https://dequeuniversity.com/color-contrast?utm_source=chatgpt.com)

  3. For enhanced accessibility, target AAA where possible (7:1 for normal text). [W3C](https://www.w3.org/TR/WCAG21/?utm_source=chatgpt.com)

### **Line length & type reminders**

* Keep main reading columns within **50–75 CPL** (Baymard), USWDS allows **45–90 CPL** with **\~1.5** line height (already set as `--leading-normal`). [Baymard Institute+1](https://baymard.com/blog/line-length-readability?utm_source=chatgpt.com)

* Material recommends \~**1.5** line height for body styles; adjust down slightly for large display headings. [Material Design](https://m3.material.io/styles/typography/applying-type?utm_source=chatgpt.com)

Tip: When you apply colors, always set **hex fallback** first, then the **OKLCH** override (as demonstrated), so older browsers get a safe color while modern ones receive perceptually uniform OKLCH.

**C2 \- Motion tokens** 

Here are motion tokens tailored for your dark AI-PM portfolio. Brief rationale first, then a paste-ready `:root` block, followed by usage notes.

Rationale (brief): These timings follow Material’s desktop guidance (short, purposeful transitions; standard/decelerate for enters, accelerate for exits) and keep effects subtle so motion clarifies state, not steals attention. Reduced-motion is honored globally to prevent discomfort. Your attached UX research also emphasizes cognitive-load hygiene—so hover/focus are crisp (150 ms), content reveal is brief (200–240 ms), and big overlays are deliberate (300 ms).

`/* motion-tokens.css — drop into src/styles and import once */`

`/* 1) Tokens */`  
`:root {`  
  `/* Durations (150–300 ms band) */`  
  `--duration-150: 150ms; /* micro: hover, focus */`  
  `--duration-180: 180ms; /* small enters/changes */`  
  `--duration-200: 200ms; /* common UI transitions */`  
  `--duration-240: 240ms; /* reveal-on-scroll, tooltips */`  
  `--duration-300: 300ms; /* dialogs/overlays/page */`

  `/* Easing (Material-aligned) */`  
  `--ease-standard:    cubic-bezier(0.4, 0, 0.2, 1);`  
  `--ease-decelerate:  cubic-bezier(0, 0, 0.2, 1);`  
  `--ease-accelerate:  cubic-bezier(0.4, 0, 1, 1);`

  `/* Semantic motion presets */`  
  `/* Enter/appear */`  
  `--motion-enter-duration: var(--duration-200);`  
  `--motion-enter-easing:   var(--ease-decelerate);`

  `/* Exit/disappear */`  
  `--motion-exit-duration: var(--duration-180);`  
  `--motion-exit-easing:   var(--ease-accelerate);`

  `/* Hover */`  
  `--motion-hover-duration-in:  var(--duration-150);`  
  `--motion-hover-duration-out: var(--duration-150);`  
  `--motion-hover-easing:       var(--ease-standard);`

  `/* Focus (visible ring flourish) */`  
  `--motion-focus-duration: var(--duration-150);`  
  `--motion-focus-easing:   var(--ease-decelerate);`

  `/* Reveal on scroll / in-view */`  
  `--motion-reveal-duration: var(--duration-240);`  
  `--motion-reveal-easing:   var(--ease-decelerate);`

  `/* Overlays / sheets / modals */`  
  `--motion-overlay-enter-duration: var(--duration-300);`  
  `--motion-overlay-exit-duration:  var(--duration-240);`  
  `--motion-overlay-easing-in:      var(--ease-decelerate);`  
  `--motion-overlay-easing-out:     var(--ease-accelerate);`

  `/* Tab/ink indicator / small filters */`  
  `--motion-indicator-duration: var(--duration-150);`  
  `--motion-indicator-easing:   var(--ease-standard);`

  `/* Transition shorthands (use as needed) */`  
  `--transition-hover:   transform var(--motion-hover-duration-in) var(--motion-hover-easing),`  
                        `opacity   var(--motion-hover-duration-in) var(--motion-hover-easing);`

  `--transition-focus:   box-shadow var(--motion-focus-duration) var(--motion-focus-easing),`  
                        `outline-offset var(--motion-focus-duration) var(--motion-focus-easing);`

  `--transition-enter:   transform var(--motion-enter-duration) var(--motion-enter-easing),`  
                        `opacity   var(--motion-enter-duration) var(--motion-enter-easing);`

  `--transition-exit:    transform var(--motion-exit-duration) var(--motion-exit-easing),`  
                        `opacity   var(--motion-exit-duration) var(--motion-exit-easing);`  
`}`

`/* 2) Reduced-motion: collapse timings and remove large transforms */`  
`@media (prefers-reduced-motion: reduce) {`  
  `:root {`  
    `--duration-150: 0ms;`  
    `--duration-180: 0ms;`  
    `--duration-200: 0ms;`  
    `--duration-240: 0ms;`  
    `--duration-300: 0ms;`  
  `}`  
  `* { animation: none !important; transition: none !important; }`  
  `/* Optional: ensure content just appears without movement */`  
  `.reveal, .tilt, .parallax { transform: none !important; opacity: 1 !important; }`  
`}`

`/* 3) Suggested usage helpers (optional) */`  
`.reveal {`  
  `opacity: 0;`  
  `transform: translateY(12px);`  
  `transition: opacity var(--motion-reveal-duration) var(--motion-reveal-easing),`  
              `transform var(--motion-reveal-duration) var(--motion-reveal-easing);`  
`}`  
`.reveal.is-inview { opacity: 1; transform: none; }`

`.button:hover   { transition: var(--transition-hover); transform: translateY(-1px); }`  
`.button:focus-visible { transition: var(--transition-focus); }`  
`.dialog[open]   { transition: var(--transition-enter); }`  
`.dialog.closing { transition: var(--transition-exit); }`  
`.tab__ink { transition: transform var(--motion-indicator-duration) var(--motion-indicator-easing); }`

### When to use each preset (TL;DR)

* Enter/appear → new UI comes in (cards, menus, toasts): `--motion-enter-*` (200 ms, decelerate).

* Exit/disappear → removing UI (dismiss, delete): `--motion-exit-*` (180 ms, accelerate).

* Hover → reinforce affordance only (opacity, slight translate/shadow): `--motion-hover-*` (150 ms, standard).

* Focus → keyboard focus ring/halo (offset/box-shadow): `--motion-focus-*` (150 ms, decelerate).

* Reveal-on-scroll → first-time-in-view fades (small opacity \+ 8–16px translate): `--motion-reveal-*` (240 ms, decelerate).

* Overlays/modals → scale/translate \+ fade in 300 ms (decelerate), exit 240 ms (accelerate).

* Tabs/filters → ink/indicator slides: `--motion-indicator-*` (150 ms, standard).

### Notes (Material match & a11y)

* Material timing/easing: These map to Material’s “standard/decelerate/accelerate” curves and desktop durations (≈150–200 ms for common transitions; slightly longer for large distance changes).

* Performance: Animate `transform`/`opacity` (avoid layout/paint properties) and keep amplitudes tiny in a portfolio context.

* Reduced motion: Honor user preference by zeroing durations and removing large transforms/parallax; content should remain fully usable without animation.

* Clarity over spectacle: Use motion to signal state changes, guide reading order, and reduce cognitive load—not as decoration.

You can now wire these tokens into components (buttons, tabs, dialog, reveal-on-scroll) and keep behavior consistent across your React/Vite app.

**C3 — Information architecture & story —** 

**Rationale (brief):** Nav keeps choices to four for fast scanning; homepage orders content for primacy/recency (value → proof → philosophy → social proof → CTA). Case studies lead with outcomes, then depth, matching your research and the categories/tech stack in your repo; the hero and “How I think” reflect your About‑Me narrative (visual storytelling → AI PM). [GitHub+1](https://github.com/seanwinslow28/Sean_Winslow_Personal_Website_v2)

---

## **Navigation (≤5)**

* **Work**

* **How I Think**

* **About**

* **Contact**  
   *(Logo returns Home; “Testimonials” lives on Home as a section for less cognitive load.)*

---

## **Hero — value proposition (≤120 characters)**

**AI PM blending visual storytelling and ML to turn ambiguous ideas into shipped products with measurable business impact.**  
 *(120 characters)* [Sean Winslow](https://seanwinslow.com/about?utm_source=chatgpt.com)

---

## **Homepage — section headlines (in order)**

1. **Hero:** *AI product leadership where creativity meets measurable impact*

2. **Featured Case:** *From hypothesis to shipped value: my latest AI win*

3. **How I Think:** *Principles I use to ship AI—safely, fast, and user‑first*

4. **Testimonials:** *What collaborators and leaders say*

5. **Let’s Connect:** *Have an AI bet in mind? Let’s talk*

---

## **Projects Index — page & section headlines**

* **Page H1:** *Work — shipped products, prototypes & deconstructions*

* **Sections:**

  * **Featured Projects**

  * **Prototypes & Experiments**

  * **Product Deconstructions**

  * **All Work** *(filterable)*  
     *(Aligned to your current categories/structure: Featured Projects, Prototypes, Product Deconstructions.)* [GitHub](https://github.com/seanwinslow28/Sean_Winslow_Personal_Website_v2)

---

## **Case Study Template — section headlines**

* **Context** — *user, problem, constraints, role*

* **Bet** — *the hypothesis and why it should move the metric*

* **Approach** — *experiments, model/UX decisions, trade‑offs*

* **Demos** — *quick clips or interactive embeds (“what to notice”)*

* **Metrics** — *before → after, deltas, confidence & caveats*

* **Reflection** — *what I’d do next, risks, and learnings*

---

*Notes:* This IA mirrors your repo’s single‑page sections and motion setup while prioritizing clarity over spectacle; use “How I Think” as a crisp thought‑leadership anchor and keep the contact CTA last for recency effect. [GitHub](https://github.com/seanwinslow28/Sean_Winslow_Personal_Website_v2)

