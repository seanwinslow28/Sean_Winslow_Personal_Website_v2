**B1 — Motion & micro‑interaction patterns that age well**  
 *Use motion to clarify state and intent—not to impress. Keep transitions brief, ease with intent, and always respect users who prefer reduced motion.*

---

## **Global timing & easing (defaults you can reuse)**

* **Durations (desktop):** 150–200 ms for common UI state changes; scale up only as distance/complexity increases. NN/g recommends most UI animations live in **100–500 ms**; Material adds that desktop transitions should be **150–200 ms** and provides canonical curves. [Nielsen Norman Group+1](https://www.nngroup.com/articles/animation-duration/?utm_source=chatgpt.com)

* **Easing:**

  * **Enter / in‑place emphasis:** *decelerate* / `cubic-bezier(0,0,0.2,1)`

  * **Exit:** *accelerate* / `cubic-bezier(0.4,0,1,1)`

  * **General state changes:** *standard* / `cubic-bezier(0.4,0,0.2,1)` (Material’s “standard”). [Material Design](https://m1.material.io/motion/duration-easing.html)

* **Performance:** Prefer animating **`transform` and `opacity`**; avoid properties that trigger layout/paint; only sprinkle `will-change` when necessary. [web.dev+1](https://web.dev/articles/animations-guide?utm_source=chatgpt.com)

* **Respect motion sensitivity:** Detect `@media (prefers-reduced-motion: reduce)` and remove or soften non‑essential motion; WCAG provides explicit guidance. [MDN Web Docs+1](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

---

## **Pattern-by-pattern guidance**

### **1\) Magnetic CTA (pointer‑tracking “magnet” hover)**

Use when a single **primary action** benefits from a subtle “draw” that confirms interactivity.

* **How to animate:** Track pointer and apply a small `translate()` to the button (and maybe an inverse offset to the label) on hover. **Amplitude**: \~4–8 px. **Duration**: 120–180 ms to “snap”, 160–220 ms to relax back. **Easing:** standard or gentle ease‑out. Keep GPU‑friendly (`transform` only). [web.dev](https://web.dev/articles/animations-guide?utm_source=chatgpt.com)

* **When to avoid:** Do not use on secondary/tertiary actions; avoid on dense UIs or lists where pointer passes frequently (hover fatigue). NN/g reminds hover should signal clickability without causing accidental activations—keep it subtle. [Nielsen Norman Group](https://www.nngroup.com/articles/button-states-communicate-interaction/?utm_source=chatgpt.com)

* **Accessibility:** On **touch** there’s no hover; ensure clear affordance without the effect. Disable the magnet offset for users who prefer reduced motion. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

* **Further build notes:** Example “magnetic button” tutorials exist (e.g., Framer), but treat them as implementation inspiration, not usability guidance. [framer.university](https://framer.university/blog/how-to-make-magnetic-buttons-in-framer?utm_source=chatgpt.com)

---

### **2\) Focus ring flourish (making focus obvious, not flashy)**

Use a **visible, consistent** indicator that meets WCAG 2.2; you can add a tiny fade/expand flourish that doesn’t obscure content.

* **How to animate:** On `:focus-visible`, scale an outline/halo from 98%→100% or increase `outline-offset` a few pixels. **Duration:** 100–160 ms, **Easing:** decelerate. Keep color/contrast strong. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus-visible?utm_source=chatgpt.com)

* **Requirements:** WCAG 2.2 **Focus Visible** \+ **Focus Appearance** set minimum visibility and contrast requirements; ensure the focused element isn’t obscured (Focus Not Obscured). [W3C+2W3C+2](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html?utm_source=chatgpt.com)

* **Reference styles:** GOV.UK’s highly visible focus treatment shows a robust model (high contrast, no ambiguity). [GOV.UK Design System](https://design-system.service.gov.uk/get-started/focus-states/?utm_source=chatgpt.com)

**Tip:** Use `:focus-visible`, not `:focus`, to avoid drawing rings during mouse clicks while preserving keyboard indicators. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus-visible?utm_source=chatgpt.com)

---

### **3\) Anchor link hover (clarity over spectacle)**

The hover should **reinforce** that text is a link without harming readability.

* **How to animate:** Keep the underline; you may **thicken or offset** it slightly on hover over \~120–180 ms with ease‑out. Avoid underline removal. [designnotes.blog.gov.uk](https://designnotes.blog.gov.uk/2021/07/07/making-links-easier-to-see-and-read-on-gov-uk/?utm_source=chatgpt.com)

* **Contrast & cues:** If underlines ever disappear, ensure **3:1 contrast between link text and surrounding text** and provide a **non‑color indicator** (e.g., underline on hover/focus). Best practice remains underlined links by default. [WebAIM+1](https://webaim.org/resources/linkcontrastchecker/?utm_source=chatgpt.com)

* **Why:** Users still rely on colored, underlined text for perceived clickability. [Nielsen Norman Group](https://www.nngroup.com/articles/guidelines-for-visualizing-links/?utm_source=chatgpt.com)

---

### **4\) Card tilt (subtle 3D affordance)**

Use a **very light tilt/parallax** to suggest interactivity on promotional cards; never as a core navigation mechanism.

* **How to animate:** Tilt ≤ 3–6° with minor shadow shift; **Duration:** 120–180 ms on enter, \~120 ms on exit; `transform` only. Prefer pointer‑position → transform mapping; cap the max. [web.dev](https://web.dev/articles/animations-guide?utm_source=chatgpt.com)

* **Reduce motion:** 3D and parallax effects are common motion‑sickness triggers—**disable** when reduced‑motion is enabled. Apple and WCAG explicitly call this out. [Apple Developer+1](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/reduced-motion-evaluation-criteria/?utm_source=chatgpt.com)

---

### **5\) Reveal‑on‑scroll (viewport‑entry animations)**

Use to **stage content** gently as it becomes relevant—never “scroll‑jack.”

* **How to animate:** Combine a small **opacity fade \+ 8–16 px translate** on first entry. **Duration:** 180–260 ms, **Easing:** decelerate. Use **Intersection Observer** or **CSS scroll‑driven animations (View/ScrollTimeline)** for efficiency. [Smashing Magazine+1](https://www.smashingmagazine.com/2021/07/dynamic-header-intersection-observer/?utm_source=chatgpt.com)

* **Compatibility & performance:** Scroll‑driven animations are emerging (check MDN compatibility); fall back to Intersection Observer. [MDN Web Docs+1](https://developer.mozilla.org/en-US/docs/Web/API/ViewTimeline?utm_source=chatgpt.com)

* **Accessibility:** Turn off large motion for reduced‑motion users; replace with simple fades or no effect. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

---

### **6\) Tab filters (chip/tabbed category filters with an “ink bar”)**

Use to switch **views/segments** in‑place.

* **How to animate:** Move an **indicator underline** between tabs in **150–200 ms** using Material’s standard curve; content panel changes should cross‑fade quickly (150–200 ms). [Material Design](https://m1.material.io/motion/duration-easing.html)

* **Keyboard & roles:** Implement the **WAI‑ARIA Tabs** pattern: `role="tablist"`, `tab`, `tabpanel`, with **arrow keys** to move between tabs. [W3C+1](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/?utm_source=chatgpt.com)

* **Mobile:** No hover—ensure selected state and indicator alone communicate context. (Material Tabs guidance.) [Material Design](https://m3.material.io/components/tabs/guidelines?utm_source=chatgpt.com)

---

### **7\) Skeleton loading**

Use skeletons to **set expectations** of structure for medium waits; don’t show them for near‑instant loads.

* **When to use:** Prefer skeletons over spinners when **lists/cards/layouts** are loading; NN/g describes the pattern and when it helps. Avoid using for sub‑second waits (0.1–1 s thresholds). [Nielsen Norman Group+1](https://www.nngroup.com/articles/skeleton-screens/?utm_source=chatgpt.com)

* **How to animate:** Static or very gentle shimmer (opacity or subtle gradient). **Disable shimmer** for reduced‑motion. Provide **`aria-busy="true"`** on the container and swap to real content ASAP. [MDN Web Docs+1](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

* **References:** Polaris and Atlassian document skeleton components across page, text, thumbnail, tabs. [Atlassian Design System+3polaris-react.shopify.com+3polaris-react.shopify.com+3](https://polaris-react.shopify.com/components/feedback-indicators/skeleton-page?utm_source=chatgpt.com)

---

### **8\) Empty‑state hints**

Use empty states to **explain what’s missing** and **what to do next** (primary action \+ help).

* **Content, not motion:** Prefer a brief fade‑in (150–200 ms). Provide action(s), context, and helpful links. Material, Shopify, Atlassian, and IBM Carbon all document strong patterns. [carbondesignsystem.com+3Material Design+3polaris-react.shopify.com+3](https://m2.material.io/design/communication/empty-states.html?utm_source=chatgpt.com)

---

## **Accessibility & reduced‑motion implementation**

`/* Default: keep motion minimal and purposeful */`  
`:root {`  
  `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`  
`}`

`/* Respect user preference: remove or soften motion */`  
`@media (prefers-reduced-motion: reduce) {`  
  `* { animation: none !important; transition: none !important; }`  
  `.reveal, .tilt, .magnet { transform: none !important; opacity: 1 !important; }`  
`}`

`/* When motion is allowed */`  
`@media (prefers-reduced-motion: no-preference) {`  
  `.reveal { transition: opacity 200ms var(--ease-standard), transform 200ms var(--ease-standard); }`  
`}`

* **Why this matters:** `prefers-reduced-motion` is a standardized media feature; WCAG Technique **C39** recommends honoring it to prevent vestibular discomfort (e.g., parallax/zoom). [MDN Web Docs+1](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

* **Loading semantics:** During async updates, set **`aria-busy="true"`** on the updating region; use native `<progress>`/ARIA `progressbar` where appropriate. [MDN Web Docs+1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy?utm_source=chatgpt.com)

---

## **Quick reference (durations & curves by pattern)**

| Pattern | Enter/Change | Exit/Reset | Easing (suggested) |
| ----- | ----- | ----- | ----- |
| Magnetic CTA | 120–180 ms | 160–220 ms | standard / ease‑out [web.dev](https://web.dev/articles/animations-guide?utm_source=chatgpt.com) |
| Focus ring flourish | 100–160 ms | – | decelerate; keep high contrast [W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html?utm_source=chatgpt.com) |
| Anchor link hover | 120–180 ms | 80–120 ms | ease‑out; underline thickens/offsets [designnotes.blog.gov.uk](https://designnotes.blog.gov.uk/2021/07/07/making-links-easier-to-see-and-read-on-gov-uk/?utm_source=chatgpt.com) |
| Card tilt | 120–180 ms | \~120 ms | standard; cap tilt to 3–6° [web.dev](https://web.dev/articles/animations-guide?utm_source=chatgpt.com) |
| Reveal‑on‑scroll | 180–260 ms | – | decelerate; small fade+translate [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations?utm_source=chatgpt.com) |
| Tab indicator | 150–200 ms | – | Material “standard” curve [Material Design](https://m1.material.io/motion/duration-easing.html) |
| Skeleton | immediate, non‑blocking | – | shimmer optional; disable on reduce [Nielsen Norman Group](https://www.nngroup.com/articles/skeleton-screens/?utm_source=chatgpt.com) |
| Empty state | 150–200 ms fade‑in | – | none beyond fade; focus on content [Material Design](https://m2.material.io/design/communication/empty-states.html?utm_source=chatgpt.com) |

*(Treat these as starting points; test in your product and shorten if interactions feel laggy.)*

---

## **Reputable write‑ups & docs (at least 6\)**

* **Material Design — Duration & easing (curves, desktop timings).** [Material Design](https://m1.material.io/motion/duration-easing.html)

* **MDN — `prefers-reduced-motion` (syntax, examples).** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

* **WCAG — Technique C39 & Understanding 2.3.3 (animations and reduced motion).** [W3C+1](https://www.w3.org/WAI/WCAG21/Techniques/css/C39?utm_source=chatgpt.com)

* **Apple HIG — Motion & Reduced Motion expectations.** [Apple Developer](https://developer.apple.com/design/human-interface-guidelines/motion?utm_source=chatgpt.com)

* **developer.chrome — Scroll‑driven animations (View/ScrollTimeline).** [Chrome for Developers](https://developer.chrome.com/docs/css-ui/scroll-driven-animations?utm_source=chatgpt.com)

* **MDN — CSS Scroll‑Driven Animations (spec & compat).** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations?utm_source=chatgpt.com)

* **WAI‑ARIA Authoring Practices — Tabs pattern (roles & keyboard).** [W3C](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/?utm_source=chatgpt.com)

* **WebAIM \+ GOV.UK — Link visibility & hover indicators.** [WebAIM+1](https://webaim.org/resources/linkcontrastchecker/?utm_source=chatgpt.com)

* **NN/g — Animation duration ranges & response‑time thresholds.** [Nielsen Norman Group+1](https://www.nngroup.com/articles/animation-duration/?utm_source=chatgpt.com)

* **Shopify Polaris & Atlassian Design System — Skeletons / Empty states.** [Atlassian Design System+3polaris-react.shopify.com+3Atlassian Design System+3](https://polaris-react.shopify.com/components/feedback-indicators/skeleton-page?utm_source=chatgpt.com)

---

### **What “ages well” about these choices**

* **They privilege clarity** (strong focus states, unmistakable links, ARIA‑correct tabs). [W3C+2WebAIM+2](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html?utm_source=chatgpt.com)

* **They scale across input modes** (hover optional; keyboard and touch still clear). [W3C](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/?utm_source=chatgpt.com)

* **They degrade gracefully** (reduced‑motion fallbacks). [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

* **They respect performance budgets** (transform/opacity, short durations). [web.dev](https://web.dev/articles/animations-guide?utm_source=chatgpt.com)

**B2 — Smooth scroll trade‑offs (2025 edition)**  
 What you need to know before you pick **Locomotive Scroll**, **Lenis**, **or GSAP ScrollSmoother**—plus React/Vite integration notes, when to stick with **native scroll**, and a practical **Locomotive → Lenis migration**.

---

## **TL;DR picks**

* **Portfolio/marketing pages with ScrollTrigger timelines already in GSAP:** use **ScrollSmoother**. It piggybacks on **native** scroll, avoids “fake” scrollbars, and is tightly integrated with ScrollTrigger. As of GSAP **3.13** the whole toolset (including ScrollSmoother) is **free**. [gsap.com+2gsap.com+2](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)

* **Framework‑agnostic smooth scroll with minimal ceremony and solid a11y posture:** use **Lenis**. It keeps things “on the platform,” offers simple React helpers, and plays nicely with ScrollTrigger **without** scrollerProxy. [lenis.darkroom.engineering+1](https://lenis.darkroom.engineering/)

* **Heavier parallax/section‑based layouts that depend on Locomotive’s data‑attributes:** you can still use **Locomotive**, but be conscious of scroll‑hijacking/a11y, and budget extra time for GSAP integration via **scrollerProxy**. [GitHub+1](https://github.com/locomotivemtl/locomotive-scroll)

* **If you just need anchor smoothing or a few small scroll‑linked effects:** stick with **native** CSS/JS (`scroll-behavior`, `scrollIntoView`, CSS **scroll‑driven animations**) for the simplest, most accessible option. [MDN Web Docs+2MDN Web Docs+2](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior?utm_source=chatgpt.com)

---

## **Accessibility & performance trade‑offs**

### **Locomotive Scroll**

* **Scroll‑hijacking caution:** its README explicitly warns that hijacking can hurt **usability, accessibility, and performance**. Treat it as a creative effect—not a default. [GitHub](https://github.com/locomotivemtl/locomotive-scroll)

* **Implementation style:** uses a translated **scroll container** (`data-scroll-container`) and its own “virtual” scrolling. That can complicate keyboard focus, in‑page anchors, and “sticky/fixed” elements unless you wire things carefully and route anchors through its `scrollTo`. [GitHub](https://github.com/locomotivemtl/locomotive-scroll)

* **Perf footguns:** “virtual scroll” approaches are more likely to clash with browser repaint heuristics (there’s a long thread on Chrome behavior affecting virtual scroll viability). [GitHub](https://github.com/locomotivemtl/locomotive-scroll/issues/353?utm_source=chatgpt.com)

### **Lenis**

* **A11y posture:** positioned as “using the platform and keeping it accessible,” and normalizing inputs (wheel, trackpad, touch). It aims to reduce multi‑threading jitter you see in scroll‑linked animations. [lenis.darkroom.engineering](https://lenis.darkroom.engineering/)

* **Integration with GSAP:** you typically **don’t** need `scrollerProxy`; instead, forward Lenis updates to ScrollTrigger and tick Lenis from GSAP’s ticker (one small snippet—see below). [GitHub](https://github.com/darkroomengineering/lenis)

### **GSAP ScrollSmoother**

* **Native‑first:** unlike many smooth‑scroll libs, ScrollSmoother **leverages native scrolling**; it avoids fake scrollbars and doesn’t interfere with touch/pointer, dodging many a11y annoyances. It even defaults to **no smoothing on touch** (you can opt‑in) and offers `normalizeScroll` to tame mobile address‑bar resize jitters. [gsap.com](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)

* **Performance:** it’s built on ScrollTrigger and GSAP’s rAF/ticker pipeline; GSAP’s perf docs & release notes emphasize speed and synchronization. [gsap.com](https://gsap.com/blog/why-gsap/?utm_source=chatgpt.com)

### **Reduced motion (all options)**

* Respect users who set **prefers‑reduced‑motion**—disable smoothing/parallax and avoid long, auto‑playing scroll effects. This is a WCAG expectation; implement via `@media (prefers-reduced-motion: reduce)` and/or a runtime toggle. [MDN Web Docs+1](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

---

## **Integration complexity with React/Vite**

### **Locomotive**

* **Markup/CSS ceremony:** requires a **scroll container** (`data-scroll-container`) plus its base CSS; sections and data‑attributes drive behavior. [GitHub](https://github.com/locomotivemtl/locomotive-scroll)

* **GSAP/ScrollTrigger:** you’ll need **`ScrollTrigger.scrollerProxy()`** (see cheat‑sheet below), update ScrollTrigger on Locomotive scroll, and refresh after layout changes. Pin jitter often needs `pinType` tuning. [gsap.com](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy%28%29/)

* **React/Vite:** instantiate/destroy the Locomotive instance in `useEffect`/`useLayoutEffect` on the client, and guard for SSR (`window` checks). When bundling, be mindful of ESM/UMD and tree‑shaking; the work is mostly on **you** to glue things together.

### **Lenis**

* **Minimal JS:** create a `new Lenis()`, optionally add the tiny **GSAP bridge** below. Recommended CSS is one import. [GitHub](https://github.com/darkroomengineering/lenis)

* **React helpers:** official `lenis/react` package provides a wrapper and hooks; simpler than hand‑rolling lifecycle code. [GitHub](https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md)

* **Vite:** zero special steps—just import and run. (If mixing with ScrollTrigger, you still register plugins and wire the ticker as shown below.) [GitHub](https://github.com/darkroomengineering/lenis)

### **ScrollSmoother**

* **GSAP-native:** install GSAP, import the plugins, `registerPlugin`, wrap content in the `#smooth-wrapper/#smooth-content` structure, and you’re off. In React, prefer GSAP’s **`useGSAP()`** hook to manage lifecycles cleanly. [gsap.com+1](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)

* **Vite:** import from `gsap` and register; the official install guide covers tree‑shaking & UMD/ESM paths if you need them. [gsap.com](https://gsap.com/docs/v3/Installation/)

---

## **When to pick native scroll instead**

Choose native when you only need:

* **Anchor smoothing / “back to top”** → CSS `scroll-behavior: smooth` or `element.scrollIntoView({behavior:'smooth'})`. [MDN Web Docs+1](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior?utm_source=chatgpt.com)

* **Scroll‑linked animations** with **CSS** (no JS) → **Scroll‑driven animations** (Scroll/ View Timelines). This preserves accessibility and avoids scripting scroll at all. [Chrome for Developers](https://developer.chrome.com/docs/css-ui/scroll-driven-animations?utm_source=chatgpt.com)

Native keeps pointer/keyboard semantics and user expectations intact; add a “reduce motion” path with `@media (prefers-reduced-motion: reduce)`. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

---

## **GSAP scrollerProxy (cheat‑sheet)**

Use this when integrating **ScrollTrigger** with a non‑native smooth scroller (e.g., **Locomotive**):

`// 1) Set up your smooth-scroller (example: Locomotive)`  
`const scrollerEl = document.querySelector('[data-scroll-container]');`  
`const loco = new LocomotiveScroll({ el: scrollerEl, smooth: true });`

`// 2) Proxy the scroller so ScrollTrigger reads/writes via your library`  
`ScrollTrigger.scrollerProxy(scrollerEl, {`  
  `scrollTop(value) {`  
    `if (arguments.length) { loco.scrollTo(value, {duration: 0, disableLerp: true}); }`  
    `return loco.scroll.instance.scroll.y; // current scroll position`  
  `},`  
  `getBoundingClientRect() {`  
    `return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};`  
  `},`  
  `pinType: 'transform' // try 'fixed' if you see pin jitter`  
`});`

`// 3) Keep them in sync`  
`loco.on('scroll', ScrollTrigger.update);`  
`ScrollTrigger.addEventListener('refresh', () => loco.update());`  
`ScrollTrigger.refresh();`

Key ideas: hand ScrollTrigger custom **get/set** for scrollTop, return a **viewport‑like rect**, and adjust **`pinType`** if pins jitter. GSAP’s docs walk through these patterns and link a Locomotive demo. [gsap.com](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy%28%29/)

---

## **Lenis × GSAP (no scrollerProxy required)**

If you’re on **Lenis**, wire ScrollTrigger like this:

`import { gsap } from 'gsap';`  
`import { ScrollTrigger } from 'gsap/ScrollTrigger';`  
`import Lenis from 'lenis';`

`gsap.registerPlugin(ScrollTrigger);`

`const lenis = new Lenis();`

`lenis.on('scroll', ScrollTrigger.update);`

`// drive Lenis from GSAP's ticker (keeps everything on one rAF)`  
`gsap.ticker.add((time) => lenis.raf(time * 1000));`  
`gsap.ticker.lagSmoothing(0);`

That’s the official recommendation from the Lenis README’s GSAP section. [GitHub](https://github.com/darkroomengineering/lenis)

---

## **Locomotive → Lenis migration notes**

1. **Remove Locomotive markup/CSS**  
    Drop `data-scroll-container` scaffolding and Locomotive’s base CSS. Lenis requires only a `new Lenis()` and (optionally) its small CSS (`import 'lenis/dist/lenis.css'`). [GitHub](https://github.com/darkroomengineering/lenis)

2. **Initialize Lenis**  
    Replace `new LocomotiveScroll({ el, smooth: true })` with `new Lenis({ /* options */ })`. If you used Locomotive’s **sections**, you generally don’t need them—Lenis smoothes the page scroll directly. [GitHub+1](https://github.com/locomotivemtl/locomotive-scroll)

3. **Anchor links & programmatic scroll**  
    Replace `scroll.scrollTo(target)` (Locomotive) with `lenis.scrollTo(targetOrY, { duration, easing })`. For simple anchors, native `scroll-behavior: smooth` may suffice. [GitHub+2GitHub+2](https://github.com/locomotivemtl/locomotive-scroll)

4. **GSAP integration**  
    **Remove** `ScrollTrigger.scrollerProxy(...)` and the Locomotive refresh glue. **Add** the Lenis/GSAP ticker bridge shown above. This typically reduces jitter and complexity. [gsap.com+1](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy%28%29/)

5. **Sticky/fixed elements**  
    If you had “positioned” elements outside Locomotive’s transform container to keep them fixed, revisit them—Lenis and ScrollSmoother behave differently (Smoother uses a wrapper/content pairing; native scroll is on the body). Adjust structure as needed. [gsap.com](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)

6. **Reduced motion**  
    Gate smoothing/parallax with `@media (prefers-reduced-motion: reduce)` (e.g., set Lenis duration/lerp to 0 or stop Lenis). Offer a visible toggle if motion is prominent. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion?utm_source=chatgpt.com)

7. **QA known edge cases**

   * **Keyboard focus & hash links**: verify focus isn’t hidden off‑screen after scroll.

   * **Touch devices**: if you used smoothing on touch with Locomotive, decide whether to keep smoothing; ScrollSmoother defaults to **no smoothing on touch** for ergonomics. [gsap.com](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)

---

## **Notes on licensing / availability (2025)**

* **GSAP 3.13**: the entire toolset, including **ScrollSmoother**, is now **free** (post‑Webflow acquisition). If you’ve seen older answers mentioning Club GSAP tokens, those are outdated. [gsap.com](https://gsap.com/blog/3-13/?utm_source=chatgpt.com)

---

## **Citations & primary docs**

* **Locomotive Scroll**: README (warning about scroll‑hijacking, usage & options), Docs/Demo. [GitHub+2locomotivemtl.github.io+2](https://github.com/locomotivemtl/locomotive-scroll)

* **Lenis**: site (a11y & goals), GitHub README (install, CSS, GSAP integration, settings), React package docs. [lenis.darkroom.engineering+2GitHub+2](https://lenis.darkroom.engineering/)

* **GSAP**: ScrollSmoother docs (native scroll, mobile behavior), ScrollTrigger **scrollerProxy** docs (pinType, getters/setters), Install & React `useGSAP` guides, 3.13 release note (now free). [gsap.com+4gsap.com+4gsap.com+4](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)

* **Native alternatives & a11y**: MDN `scroll-behavior`, `scrollIntoView`, `prefers-reduced-motion`; CSS scroll‑driven animations on developer.chrome.com. [Chrome for Developers+3MDN Web Docs+3MDN Web Docs+3](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior?utm_source=chatgpt.com)

* **Context on virtual scroll perf quirks**: Locomotive issue thread on Chrome behavior. [GitHub](https://github.com/locomotivemtl/locomotive-scroll/issues/353?utm_source=chatgpt.com)

---

## **Quick decision helper**

* **I need parallax, scrubbed timelines, and minimal a11y risk:** **ScrollSmoother** (with ScrollTrigger). [gsap.com](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)

* **I want a slim, framework‑friendly smooth scroll and will add ScrollTrigger later:** **Lenis**. [GitHub](https://github.com/darkroomengineering/lenis)

* **I must keep an existing data‑attribute heavy setup (or a v4/v5 Locomotive codebase):** stick with **Locomotive**, but acknowledge the README warning and wire **scrollerProxy** carefully. [GitHub+1](https://github.com/locomotivemtl/locomotive-scroll)

