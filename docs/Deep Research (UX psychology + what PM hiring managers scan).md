Here's your comprehensive UX psychology rulebook for an AI PM portfolio site, formatted in markdown. The document includes definitions, practical interpretations, pass/fail checklists for the homepage and case-study pages, and citations from reputable sources.

# **UX Psychology Rulebook for an AI PM Portfolio**

## **Introduction**

Portfolio sites help product managers sell their expertise quickly. Psychology and usability laws show that *how* information is presented influences scanning speed and decision‑making. This dark‑themed, scroll‑animated portfolio uses React/Vite and Locomotive Scroll. The site’s home page currently includes a hero introduction, a featured projects grid, about/testimonials sections and a contact section[raw.githubusercontent.com](https://raw.githubusercontent.com/seanwinslow28/Sean_Winslow_Personal_Website_v2/main/README.md#:~:text=). Case‑study pages detail individual projects. Applying research‑backed rules will turn these sections into a scanning‑friendly experience on desktop (primary) and mobile (secondary). Each principle below includes practical meaning and a pass/fail checklist for the home page and case‑study pages.

## **Hick’s Law – Limit Choices to Speed Decisions**

**Meaning.** Hick’s Law states that the time to make a decision increases logarithmically as the number of choices grows; short lists (navigation menus or action buttons) benefit most from limiting options[interaction-design.org](https://www.interaction-design.org/literature/topics/hick-s-law#:~:text=Hick%E2%80%99s%20Law%20%28or%20the%20Hick,choices%2C%20thereby%20keeping%20them%20engaged). Too many options overwhelm users, leading to abandonment[interaction-design.org](https://www.interaction-design.org/literature/topics/hick-s-law#:~:text=Hick%E2%80%99s%20Law%20%28or%20the%20Hick,choices%2C%20thereby%20keeping%20them%20engaged).

**Implementation guidelines**

* **Navigation & hero calls‑to‑action:** Keep top‑level nav and hero buttons to about 4–6 items (e.g., Home, Projects, About, Contact). Combine minor links under categories (e.g., group all social links under “Connect”) to minimize cognitive load.

* **Projects & case‑study lists:** Group projects into 3–4 categories as done in the repo (“How I Think,” “Featured Projects,” etc.) and avoid showing more than four cards at once to keep scanning within working memory limits[interaction-design.org](https://www.interaction-design.org/literature/topics/hick-s-law#:~:text=Hick%E2%80%99s%20Law%20%28or%20the%20Hick,choices%2C%20thereby%20keeping%20them%20engaged). Use filters or a “More” button to reveal additional items.

* **Decision tasks:** For case studies, limit the number of interactive choices on a page (e.g., number of CTAs) so users focus on reading. Break long pages into sections with a mini‑nav or sticky progress bar.

**Home‑page Pass/Fail checklist**

* ❏ **≤ 6 main nav items:** the header menu shows no more than six items (desktop and mobile).

* ❏ **Limited hero CTAs:** hero section contains one primary CTA and at most one secondary CTA.

* ❏ **Project categories grouped:** grid displays four or fewer categories at a time; additional projects require scrolling or filters.

* ❏ **Social links grouped:** social icons are grouped under a single “Let’s connect” section rather than scattered.

**Case‑study Page Pass/Fail checklist**

* ❏ **≤ 4 section tabs:** summary, challenge, process and results appear as four anchor links; avoid adding numerous sub‑sections.

* ❏ **Action buttons restrained:** only one primary call‑to‑action (e.g., contact or return to projects) per case study.

* ❏ **Information chunking:** long paragraphs are divided into digestible 3–5 sentence blocks; optional details hidden behind accordions.

## **Fitts’s Law – Optimize Target Size and Distance**

**Meaning.** Fitts’s Law shows that movement time depends on the distance to a target and its size; closer and larger targets are faster to click[nngroup.com](https://www.nngroup.com/articles/fitts-law/). Bigger targets reduce error rates, while small crowded targets force users to slow down[nngroup.com](https://www.nngroup.com/articles/fitts-law/). Infinite targets along screen edges (e.g., OS menus) are fastest for mouse users[nngroup.com](https://www.nngroup.com/articles/fitts-law/), but edges offer no advantage on touch screens[nngroup.com](https://www.nngroup.com/articles/fitts-law/). Menu type also affects movement distance; linear menus place the most distant items at the bottom, so frequently used items should appear at the top[nngroup.com](https://www.nngroup.com/articles/fitts-law/).

**Implementation guidelines**

* **Button & link size:** Use touch‑friendly hit areas—minimum 44×44 px on desktop and mobile. For icons, include labels; combined icon‑plus‑text targets enlarge the clickable area and improve selection[nngroup.com](https://www.nngroup.com/articles/fitts-law/#:~:text=,2.png%22%20width%3D%22350). Avoid relying on small icons alone.

* **Spacing & crowding:** Provide sufficient spacing between links and buttons to prevent accidental taps; avoid placing small controls too close[nngroup.com](https://www.nngroup.com/articles/fitts-law/#:~:text=,h4). On dark backgrounds, generous padding helps separate elements.

* **Edge targets:** Place frequently accessed nav items (e.g., the sticky navigation bar) at the top or bottom edge on desktop to exploit near‑infinite edge targets[nngroup.com](https://www.nngroup.com/articles/fitts-law/). For mobile, center bottom nav is preferred for thumb reach; edges no longer provide Fitts benefits[nngroup.com](https://www.nngroup.com/articles/fitts-law/).

* **Menu design:** If using a hamburger menu on mobile, ensure menu items are grouped so high‑frequency actions (e.g., “Contact”) appear near the top of the list. Consider a mega menu or tab bar on desktop to reduce pointer travel distance[nngroup.com](https://www.nngroup.com/articles/fitts-law/).

* **Sequence actions:** Place related actions (e.g., “Next” button) near the end of content rather than at the top; don’t force users to move upward to submit forms[nngroup.com](https://www.nngroup.com/articles/fitts-law/).

**Home‑page Pass/Fail checklist**

* ❏ **Large CTA buttons:** primary buttons are at least 44 px tall and include text labels (e.g., “View Projects”).

* ❏ **Adequate spacing:** nav links and project cards have clear padding; no two interactive items are so close that a 44 px finger touch overlaps them.

* ❏ **Sticky nav on edge:** on desktop, nav bar is pinned to the top edge; on mobile, bottom nav or sticky header ensures easy reach.

* ❏ **Frequent actions positioned near start:** high‑priority items (Contact, Top Projects) appear near the top of linear menus[nngroup.com](https://www.nngroup.com/articles/fitts-law/).

**Case‑study Page Pass/Fail checklist**

* ❏ **Section anchors sized:** anchor links for each section are large enough to tap and labelled (e.g., “Process”).

* ❏ **Next/Previous controls adjacent:** navigation to next project is placed near the end of the case study; avoid placing nav in top header only[nngroup.com](https://www.nngroup.com/articles/fitts-law/).

* ❏ **Sufficient target spacing:** interactive charts, galleries and links have spacing to prevent mis‑taps.

## **Aesthetic‑Usability Effect – Visual Polish Builds Trust**

**Meaning.** Aesthetic‑Usability effect research shows that users perceive visually pleasing designs as more usable; attractive interfaces create positive responses and make people more tolerant of minor usability problems[lawsofux.com](https://lawsofux.com/aesthetic-usability-effect/#:~:text=Aesthetic). Early studies found a strong correlation between perceived ease of use and aesthetics[lawsofux.com](https://lawsofux.com/aesthetic-usability-effect/#:~:text=The%20aesthetic,underlying%20functionality%20of%20the%20system). However, good looks can mask usability issues, so designers should not rely solely on aesthetics[lawsofux.com](https://lawsofux.com/aesthetic-usability-effect/#:~:text=Aesthetic).

**Implementation guidelines**

* **Consistent dark theme:** Use the portfolio’s dark palette (black background with pink/purple accents[raw.githubusercontent.com](https://raw.githubusercontent.com/seanwinslow28/Sean_Winslow_Personal_Website_v2/main/README.md#:~:text=)) consistently across pages. Ensure high contrast for text (WCAG AA) and avoid busy backgrounds that hinder readability.

* **Professional imagery:** Replace placeholders with high‑quality photos or AI‑generated illustrations. Use consistent filters and styling to create a cohesive visual language. Avoid pixelated icons.

* **Micro‑interactions:** Subtle hover animations and parallax can enhance delight, but they should not impede navigation or performance. Provide a reduced‑motion option for accessibility.

* **Visual hierarchy:** Use typography (weights 300–700)[raw.githubusercontent.com](https://raw.githubusercontent.com/seanwinslow28/Sean_Winslow_Personal_Website_v2/main/README.md#:~:text=%23%23%23%20Typography%20,300%2C%20400%2C%20500%2C%20600%2C%20700) and color to signal importance. Primary actions receive the brightest color; secondary actions have muted tones.

**Home‑page Pass/Fail checklist**

* ❏ **Consistent color palette:** all sections use the defined pink/purple accents; there are no off‑brand colors.

* ❏ **High contrast:** text meets contrast ratio guidelines against dark backgrounds.

* ❏ **Subtle animations:** animations enhance storytelling without causing layout shifts or motion sickness; there’s a way to disable them.

* ❏ **Polished imagery:** headshot, project thumbnails and icons match the aesthetic; no placeholder graphics remain.

**Case‑study Page Pass/Fail checklist**

* ❏ **Visual consistency:** case study uses the same fonts, colors and spacing as home page.

* ❏ **Readable color combinations:** diagrams or charts adhere to accessible color contrasts.

* ❏ **Delightful highlights:** standout moments (e.g., product screens) are presented with tasteful micro‑animations or captions.

## **Serial Position Effect – Leverage Primacy & Recency**

**Meaning.** The Serial Position Effect states that items at the beginning (primacy) and end (recency) of a sequence are recalled better than middle items[interaction-design.org](https://www.interaction-design.org/literature/article/serial-position-effect-how-to-create-better-user-interfaces#:~:text=The%20serial%20position%20effect%2C%20a,in%20the%20serial%20position%20effect). Working memory holds only a few items (about 3–4) at a time[interaction-design.org](https://www.interaction-design.org/literature/article/serial-position-effect-how-to-create-better-user-interfaces#:~:text=Consequences%20of%20the%20Serial%20Position,Effect%20in%20User%20Interface%20Design), so long lists strain attention and memory. Designers should emphasise the first and last pieces of information and limit sequence length[interaction-design.org](https://www.interaction-design.org/literature/article/serial-position-effect-how-to-create-better-user-interfaces#:~:text=Here%20are%204%20ways%20you,position%20effect%20affects%20your%20users).

**Implementation guidelines**

* **Order of sections:** On the home page, place the most critical content (value proposition, featured projects) at the top and end the page with a strong call‑to‑action (e.g., contact form). Put less critical content (e.g., testimonials) in the middle.

* **Case‑study ordering:** Start each case study with a succinct summary of the problem and outcome; end with quantified results and a CTA (“Let’s talk”). Middle sections should support the narrative without overwhelming users.

* **Lists & bullet points:** Limit lists to 4–6 items; highlight the first and last item using typographic emphasis or color. Use numbering when sequence matters.

* **Navigation lists:** In menus, place most frequently used options at top or bottom; lesser used options in the middle[nngroup.com](https://www.nngroup.com/articles/fitts-law/).

**Home‑page Pass/Fail checklist**

* ❏ **Hero first:** hero section clearly states who you are and why you matter before any other section.

* ❏ **CTA last:** page ends with a compelling call‑to‑action (contact form or newsletter signup).

* ❏ **Middle content moderated:** testimonials or process explanations sit between hero/projects and final CTA.

* ❏ **Lists under 6 items:** bullet lists (e.g., tech stack) contain ≤ 6 items; the first and last items receive emphasis.

**Case‑study Page Pass/Fail checklist**

* ❏ **Summary at start:** each case study opens with problem statement, role and metrics.

* ❏ **Conclusion at end:** finish with outcomes and lessons; include a CTA linking back to the project list or contact.

* ❏ **Section count limited:** no more than 5 sections; emphasis on first and last sections via typography or color.

* ❏ **Highlight first/last list items:** within tables or lists, visually distinguish first and last entries.

## **Von Restorff (Isolation) Effect – Make the Important Stand Out**

**Meaning.** The Von Restorff effect (isolation effect) states that an item that differs from its neighbors is more memorable[radiant.digital](https://www.radiant.digital/article/von-restorff-effect-ux-design#:~:text=The%20Von%20Restorff%20Effect%20theory,found%20throughout%20our%20everyday%20lives). Uniqueness can be conveyed through color, size, shape, spacing, highlighting, bold/italic text or underlining[radiant.digital](https://www.radiant.digital/article/von-restorff-effect-ux-design#:~:text=Memorable%20Design%20Aspects). The effect draws attention to key information but should be used sparingly to avoid clutter[radiant.digital](https://www.radiant.digital/article/von-restorff-effect-ux-design#:~:text=Many%20of%20us%20are%20visual,the%20Von%20Restorff%20Effect%20functions).

**Implementation guidelines**

* **Highlight primary CTAs:** Use distinctive color (e.g., brighter pink) or shape (pill button) for the main CTA on each page. Secondary links use neutral tones.

* **Callouts & badges:** Within project cards, highlight one “featured” project with a badge or border to draw attention. In case studies, highlight key data points with contrasting color or icons.

* **Unique design elements:** Introduce a standout element (e.g., a unique illustration or animation) in the hero or contact section to differentiate your portfolio. Avoid using multiple clashing highlights; maintain one focal point per screen[radiant.digital](https://www.radiant.digital/article/von-restorff-effect-ux-design#:~:text=Many%20of%20us%20are%20visual,the%20Von%20Restorff%20Effect%20functions).

**Home‑page Pass/Fail checklist**

* ❏ **Distinctive primary CTA:** the main call‑to‑action uses a unique color or size compared with other links, making it immediately noticeable.

* ❏ **Featured project highlighted:** one project card uses a contrasting border or “Featured” tag while others remain uniform.

* ❏ **No overuse of highlights:** no more than one or two distinctive elements per screen; accent colours are used sparingly.

**Case‑study Page Pass/Fail checklist**

* ❏ **Key metrics highlighted:** important results (e.g., 25% conversion increase) are highlighted with a colored badge or bold typography.

* ❏ **Unique visual break:** include one unique image or illustration that summarizes the project.

* ❏ **Controlled distinctiveness:** avoid multiple competing highlights; only critical information stands out.

* ❏ **Consistent highlighting style:** the same highlight style (color, shape) is used across all case studies for consistency.

## **Gestalt Principles – Organize and Group Content**

**Meaning.** Gestalt principles describe how people group visual elements: similarity (objects with similar color/shape/size are grouped), proximity (objects close together appear related) and continuation (we prefer continuous lines)[interaction-design.org](https://www.interaction-design.org/literature/topics/gestalt-principles#:~:text=What%20are%20the%20Gestalt%20Principles%3F). Figure/ground relationships use negative space to separate figure from background, and discontinuity (contrast) draws attention[interaction-design.org](https://www.interaction-design.org/literature/topics/gestalt-principles#:~:text=What%20are%20the%20Gestalt%20Principles%3F). These principles help designers create clear hierarchies and improve readability.

**Implementation guidelines**

* **Grouping & spacing:** Use white space and consistent spacing to group related content (e.g., clusters of project cards). Proximity creates perceived relationships; separate unrelated sections with generous padding.

* **Similarity:** Use consistent card styles (shape, color) for similar items (project cards, testimonials). Avoid mixing too many styles.

* **Common region & containers:** Draw soft boundaries (cards, panels) around groups of related elements; this leverages the common‑region principle and reduces cognitive load[nngroup.com](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/#:~:text=Human%20brains%20naturally%20look%20for,through%20the%20form%20more%20efficiently).

* **Alignment & continuation:** Align text and images along a grid; ensure lines of text and images lead the eye down the page, supporting Locomotive Scroll’s smooth motion. Use vertical rhythm to maintain continuity.

* **Figure/ground:** Maintain contrast between content and background; avoid cluttered backgrounds that compete with text[interaction-design.org](https://www.interaction-design.org/literature/topics/gestalt-principles#:~:text=What%20are%20the%20Gestalt%20Principles%3F).

**Home‑page Pass/Fail checklist**

* ❏ **Consistent card design:** project cards have uniform dimensions, border radius and hover effects; testimonials share similar layouts.

* ❏ **Clear grouping:** each section (hero, projects, about, testimonials, contact) is visually separated by negative space or background shade.

* ❏ **Aligned grid:** text and images align along a consistent grid; gutters and columns maintain rhythm.

* ❏ **Readable figure/ground:** backgrounds never compromise text contrast; parallax elements don’t obscure content.

**Case‑study Page Pass/Fail checklist**

* ❏ **Section containers:** each section is enclosed in a container or has a distinct background tone to signal grouping.

* ❏ **Uniform component styles:** all code snippets, images and captions follow the same style (same font size, color).

* ❏ **Guiding lines:** layout aligns elements vertically so the reader’s eye flows smoothly down the page.

* ❏ **Adequate white space:** there is sufficient padding between paragraphs and images; no elements touch the screen edges.

## **Cognitive Load & Working Memory – Reduce Mental Effort**

**Meaning.** Working memory holds only 4–7 chunks of information at a time and fades within 20–30 seconds[lawsofux.com](https://lawsofux.com/working-memory/#:~:text=1,that%20make%20comparing%20multiple%20items). To reduce cognitive load, interfaces should support recognition over recall, carry information across screens and group related items[lawsofux.com](https://lawsofux.com/working-memory/#:~:text=keeping%20new%20information%20ready%20to,make%20comparing%20multiple%20items%20easy). Excess mental effort leads to errors or abandonment. Nielsen Norman Group proposes four principles for forms—structure, transparency, clarity and support—to lighten cognitive load[nngroup.com](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/#:~:text=1,helpful%20guidance%20throughout%20the%20process) and suggests grouping related fields and creating a clear hierarchy[nngroup.com](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/#:~:text=Human%20brains%20naturally%20look%20for,through%20the%20form%20more%20efficiently).

**Implementation guidelines**

* **Limit simultaneous information:** Avoid showing more than 7 pieces of new information at once; break long content into collapsible sections or tabs. Summarize key points at the top.

* **Recognition over recall:** Use persistent navigation (e.g., sticky header) and breadcrumbs so users always know where they are and can revisit sections without remembering details[lawsofux.com](https://lawsofux.com/working-memory/#:~:text=keeping%20new%20information%20ready%20to,make%20comparing%20multiple%20items%20easy).

* **Section grouping & headings:** Group related content under descriptive headings. Section headings provide context before details[nngroup.com](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/#:~:text=Human%20brains%20naturally%20look%20for,through%20the%20form%20more%20efficiently). Use visual hierarchy (font size, weight, spacing) to indicate relationships[nngroup.com](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/#:~:text=Create%20Visual%20Hierarchy).

* **Transparency & support:** Clearly indicate the length of a case study (e.g., progress bar). Provide summary boxes and highlight key takeaways to help users gauge effort. Offer tooltips or definitions for technical terms.

* **Minimize memory burden across pages:** When linking to external resources or case study sub‑pages, ensure key information is carried forward (e.g., via sticky summary or persistent problem statement). Visited links should be visually distinct[lawsofux.com](https://lawsofux.com/working-memory/#:~:text=2,it%20over%20from%20screen%20to).

* **Locomotive Scroll caveats:** Parallax and scroll‑triggered animations may hinder orientation. Provide anchors or quick‑scroll buttons to jump to sections and ensure animations do not delay content appearance.

**Home‑page Pass/Fail checklist**

* ❏ **Information chunks:** no section presents more than 4–7 discrete pieces of information at once (e.g., list of skills).

* ❏ **Persistent navigation:** sticky header or side nav remains visible as users scroll; visited project links have a different color for recognition.

* ❏ **Descriptive headings:** each section has a clear heading summarizing what follows.

* ❏ **Support cues:** add tooltips or microcopy explaining technical terms or acronyms.

* ❏ **Quick navigation:** include a “Back to top” button or mini‑nav to move between sections.

**Case‑study Page Pass/Fail checklist**

* ❏ **Chunked narrative:** long case study is broken into manageable sections with progress indicator.

* ❏ **Sticky summary:** a short summary stays visible (e.g., pinned sidebar) as users scroll through details.

* ❏ **Clear headings & signposts:** each section starts with a heading and optional 1‑sentence overview[nngroup.com](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/#:~:text=Human%20brains%20naturally%20look%20for,through%20the%20form%20more%20efficiently).

* ❏ **Distinct visited links:** within case studies, external references or previous/next project links change color after being clicked[lawsofux.com](https://lawsofux.com/working-memory/#:~:text=2,it%20over%20from%20screen%20to).

* ❏ **Reduced motion option:** provide a toggle to disable animations for users prone to motion sensitivity.

## **Conclusion**

By integrating psychology and usability laws, the AI PM portfolio can become a compelling, easy‑to‑scan experience. Limiting choices (Hick’s Law), optimizing target size and placement (Fitts’s Law), and leveraging aesthetics responsibly (Aesthetic‑Usability effect) will reduce friction. Ordering content for primacy and recency (Serial Position effect), highlighting key actions (Von Restorff), grouping elements clearly (Gestalt principles) and minimizing cognitive load ensure that visitors understand your story quickly. Following the pass/fail checklists during design reviews will help you measure success and iterate toward a highly usable and persuasive portfolio.

## **Sources**

1. Interaction Design Foundation. **“Hick’s Law: the more choices you present, the longer it takes users to decide”** (2023). link [interaction-design.org](https://www.interaction-design.org/literature/topics/hick-s-law#:~:text=Hick%E2%80%99s%20Law%20%28or%20the%20Hick,choices%2C%20thereby%20keeping%20them%20engaged).

2. Nielsen Norman Group. **“Fitts’s Law and Its Applications in UX”** (2022). link [nngroup.comnngroup.com](https://www.nngroup.com/articles/fitts-law/).

3. Laws of UX. **“Aesthetic‑Usability Effect”** (2024). link [lawsofux.com](https://lawsofux.com/aesthetic-usability-effect/#:~:text=Aesthetic).

4. Interaction Design Foundation. **“Serial‑Position Effect”** (2023). link [interaction-design.org](https://www.interaction-design.org/literature/article/serial-position-effect-how-to-create-better-user-interfaces#:~:text=The%20serial%20position%20effect%2C%20a,in%20the%20serial%20position%20effect)[interaction-design.org](https://www.interaction-design.org/literature/article/serial-position-effect-how-to-create-better-user-interfaces#:~:text=Here%20are%204%20ways%20you,position%20effect%20affects%20your%20users).

5. Radiant Digital. **“Understanding the Von Restorff Effect in UX Design”** (2024). link [radiant.digital](https://www.radiant.digital/article/von-restorff-effect-ux-design#:~:text=The%20Von%20Restorff%20Effect%20theory,found%20throughout%20our%20everyday%20lives)[radiant.digital](https://www.radiant.digital/article/von-restorff-effect-ux-design#:~:text=Many%20of%20us%20are%20visual,the%20Von%20Restorff%20Effect%20functions).

6. Interaction Design Foundation. **“Gestalt Principles”** (2024). link [interaction-design.org](https://www.interaction-design.org/literature/topics/gestalt-principles#:~:text=What%20are%20the%20Gestalt%20Principles%3F).

7. Laws of UX. **“Working Memory”** (2025). link [lawsofux.com](https://lawsofux.com/working-memory/#:~:text=1,make%20comparing%20multiple%20items%20easy).

8. Nielsen Norman Group. **“Few Guesses, More Success: 4 Principles to Reduce Cognitive Load in Forms”** (2025). link [nngroup.com](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/#:~:text=1,helpful%20guidance%20throughout%20the%20process)[nngroup.com](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/#:~:text=Human%20brains%20naturally%20look%20for,through%20the%20form%20more%20efficiently).

# **Competitive teardown of product‑manager portfolios**

This report surveys 10 recent product‑manager (PM) / AI‑PM portfolio sites. The focus is on personal sites built on custom domains (React, Webflow, Framer) rather than LinkedIn or template CVs. A few outstanding Notion/Medium examples were included because their narrative and structure are instructive. Each portfolio was assessed for clarity (how clearly it communicates the PM’s value proposition and projects), credibility (evidence of real projects, results, and testimonials), and craft (visual polish, UX, and storytelling). Scores are 0‑5 (higher is better). Notes highlight design patterns to emulate or avoid.

## **Portfolio comparisons**

| \# | PM / Portfolio (tech / type) | PM focus & hero message | Representative case study & features | Contact element | AI‑specific? | Clarity | Credibility | Craft | Patterns to copy / avoid |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **1** | **Mark Progano** – mprogano.com – personal domain built with Squarespace Role: independent product manager / tinkerer | **Hero:** A clean hero section states “Mark is a Product Manager, Tinkerer, and Gadget Enthusiast in the Berkshires MA” with a call‑to‑action to view his workmprogano.com. Navigation links to work, resume, and about pages are visible. | **Case study:** The *Stitcher* case study describes how he evaluated assumptions and asked three core questions to define a product strategy for a podcast app; the narrative explains his process and uses screenshots and diagrams to break up textmprogano.com. | **Contact:** The *About \+ Connect* page ends with a “Let’s Connect” section featuring email and LinkedIn icons, a friendly invitation to chat, and a CTA buttonmprogano.com. | **General PM** (no AI projects). | 4 | 3 | 4 | **Copy:** concise hero tagline; clear case‑study structure (problem → questions → solution); friendly contact CTA. **Avoid:** case studies lack metrics; navigation hidden inside dropdown on mobile. |
| **2** | **Maggie Hsiaochieh Chu** – maggie‑hsiaochieh‑chu.replit.app – React/Framer site | **Hero:** Introduces Maggie as a *Senior Product Manager specialising in GenAI/ML products*, with quick summary of her transition from CS to PM and tags for AI/ML, data analytics and product strategymaggie-hsiaochieh-chu.replit.app. | **Case study:** Her portfolio is still in progress; instead she offers a thoughtful *Product Philosophy* section outlining beliefs such as “AI should be your co‑pilot, not your replacement,” the need to prototype quickly, and to balance data with human storiesmaggie-hsiaochieh-chu.replit.app. | **Contact:** A full‑width overlay invites visitors to discuss AI/ML opportunities, providing an email address and LinkedIn linkmaggie-hsiaochieh-chu.replit.app. | **AI‑specific** (no case studies yet). | 3 | 3 | 4 | **Copy:** AI‑focused tagline; philosophy section signals thought leadership; overlay contact CTA. **Avoid:** no concrete projects or metrics yet; home page uses heavy motion that may distract. |
| **3** | **Christopher Smith** – christophersmith.io – Framer site | **Hero:** Purple hero section introduces Chris as a multi‑disciplinary product designer & PM, with logos of brands he has worked for and a personal photo (screenshot captured earlier). | **Case study:** His *Zero‑to‑One AI Product for Designers* case study describes building a Figma plug‑in that gives designers AI‑powered feedback; he explains the problem, early IBM Watson prototype, the decision to use Google vs. OpenAI, prompt construction, and UI design[christophersmith.io](https://christophersmith.io/case-studies/designcrit-ai-figma-plugin#:~:text=I%20built%20something%20similar%20before,of%20communication%2C%20value%20statement%2C%20etc). | **Contact:** A simple “Let’s talk” area in the footer invites connection via email and social icons. | **AI‑specific** (AI tool for designers). | 4 | 4 | 4 | **Copy:** strong narrative explaining constraints and decisions; includes technical details about AI models. **Avoid:** case study pages are text‑heavy; hero section has limited contrast. |
| **4** | **Sam Frons** – samfrons.com – custom domain | **Hero:** The home page summarises Sam as a creator of software, art, and books, with sections for professional and personal work. | **Case study:** Her *Addicaid* case study narrates the creation of a personalised, AI‑enhanced addiction‑recovery platform. She details tasks (prioritising product focus, designing the product, fundraising, creating resources, public speaking) and emphasises cross‑functional leadership[samfrons.com](https://www.samfrons.com/addicaid#:~:text=%23%202013,Francisco%2C%20CA%20%2F%20Role%3A%20Founder). She also outlines the underlying problem (addiction crisis, resource gaps, affordability barriers, lack of support systems and stigma)[samfrons.com](https://www.samfrons.com/addicaid#:~:text=%2A%20,Problem). | **Contact:** Email and social icons (LinkedIn, Instagram) are shown in the footer[samfrons.com](https://www.samfrons.com/#:~:text=samfrons%40gmail). | **AI‑specific** (Addicaid uses ML for personalised recovery). | 4 | 4 | 4 | **Copy:** clear problem statement; bullet‑pointed responsibilities; narrative touches on fundraising and public speaking; minimalistic design. **Avoid:** pages are text‑dense; hero section could better emphasise AI angle. |
| **5** | **Jenny Atkins** – jennyatkins.me – custom domain | **Hero:** A friendly greeting—“Hi, I’m Jenny\! I’m a Senior Product Manager passionate about solving real problems for real people”—introduces her experience and interests[jennyatkins.me](https://jennyatkins.me/#:~:text=Hi%2C%20I%E2%80%99m%20Jenny%21). | **Case study:** The site summarises her work at Timely and previous roles (Trade Me, Levno, Umajin). She describes how she increased acquisition at Trade Me by improving how customers found items and built monitoring tools for farmers[jennyatkins.me](https://jennyatkins.me/#:~:text=I%20currently%20work%20at%20Timely,an%20experience%20their%20clients%20love). | **Contact:** The site offers a CV download and LinkedIn link, making it easy to connect[jennyatkins.me](https://jennyatkins.me/#:~:text=Get%20in%20Touch). | **General PM**. | 4 | 3 | 3 | **Copy:** approachable tone; high‑level overview of multiple roles; accessible contact. **Avoid:** lacks deep case studies and metrics; site uses generic stock images. |
| **6** | **Nicolas Backal** – nicolasbackal.com – Webflow site | **Hero:** Presents Nicolas as Director of Product Design at Okta, with a belief in finding the shared story between people, business, and technology[nicolasbackal.com](https://www.nicolasbackal.com/#:~:text=Hi%2C%20I%E2%80%99m%20Nicolas%20Backal,Okta%20based%20in%20San%20Francisco). | **Case study:** Highlights his zero‑to‑one work on *Okta Personal*, a new digital identity product; he describes building and funding a dedicated team, working end‑to‑end from concept to launch, and achieving a successful product release【845504758772050†L75-L86】. He also notes leading redesigns of Okta’s end‑user experience for 30M+ users[nicolasbackal.com](https://www.nicolasbackal.com/#:~:text=This%20vision,term%20innovation%20roadmap). | **Contact:** A simple “Let’s chat” call‑to‑action appears in the footer. | **General PM / Design lead**. | 4 | 4 | 4 | **Copy:** strong messaging about user–business–tech alignment; clear case study summarising scope and impact. **Avoid:** hero section is largely about design leadership rather than PM; contact CTA lacks social links. |
| **7** | **Amy Oughton** – amyoughton.com – Notion/Medium‑like site | **Hero:** Introduces Amy as a “Top Senior Product Designer & Data Visualization Specialist” with 13+ years’ experience and a mission to make a significant impact through user insights and designs[amyoughton.com](https://amyoughton.com/#:~:text=Hello%21%20I%E2%80%99m%20Amy%20Oughton%2C%20a,Designer%20%26%20Data%20Visualization%20Specialist). | **Case study:** On the *InHeRET Health* page she explains that the platform offers personalised risk assessment based on family health histories and outlines the redesign tasks—user flow audits, information architecture, mockups and prototypes[amyoughton.com](https://amyoughton.com/portfolio/inheret-health#:~:text=InHeRET%20Health). She lists deliverables and resources (UI/UX audit, user journey maps, information architecture) and provides contact info[amyoughton.com](https://amyoughton.com/portfolio/inheret-health#:~:text=). | **Contact:** Email and phone number plus social links are available at the bottom of each page[amyoughton.com](https://amyoughton.com/portfolio/inheret-health#:~:text=). | **General PM / design**. | 3 | 4 | 4 | **Copy:** clearly lists deliverables; emphasises data‑visualisation expertise; includes contact details. **Avoid:** Notion template design is less polished; text‑heavy pages can feel overwhelming. |
| **8** | **Mia Davis** – miadavis (medium‑like custom domain) | **Hero:** Warm introduction—“Hi\! I’m Mia\!”—and tagline “Stanford‑trained, startup‑tested” emphasise her focus on building products that solve real problems and scale with purpose[miamdavis.com](https://miamdavis.com/#:~:text=Hi%21%20I%E2%80%99m%20Mia%21). | **Case study:** Her Lexody language‑exchange app case study details goals (educate new users via onboarding, address non‑English speakers, introduce gamification) and covers decisions like designing the onboarding experience and adjusting the coin system to reduce confusion[miamdavis.com](https://miamdavis.com/portfolio/language-exchange-app#:~:text=Match%20with%20fellow%20language%20learners,language%20and%20half%20in%20theirs). She also lists her skills (empathy‑led PM, cross‑functional leadership, growth strategy)[miamdavis.com](https://miamdavis.com/#:~:text=What%20I%20bring%20to%20your,company). | **Contact:** A “let’s chat” section with email and LinkedIn is available; she also links to her personal blog. | **General PM**. | 4 | 4 | 3 | **Copy:** strong personal voice; case study shows clear goals and solutions; includes skill breakdown. **Avoid:** heavy use of Medium‑style longform layout; limited visuals in case studies. |
| **9** | **Kane Sherwell** – kanesherwell.com – Webflow site | **Hero:** States “Hey there, I’m Kane Sherwell, a senior product manager shaping digital futures through smart product strategy, seamless delivery, and transformative user experiences” with a call to collaborate[kanesherwell.com](https://kanesherwell.com/#:~:text=Hey%20there%2C%20I%E2%80%99m%20Kane%20Sherwell). | **Case study:** His *Hide and Seek Digital* experience emphasises 15+ years delivering 500+ digital solutions; he notes building a product practice, managing cross‑functional teams, and increasing ROI for clients[kanesherwell.com](https://kanesherwell.com/#:~:text=Hide%20and%20Seek%20Digital). | **Contact:** Footer includes social links and a contact form. | **General PM**. | 3 | 3 | 3 | **Copy:** strong experience metrics; emphasises team leadership; professional layout. **Avoid:** case studies read like résumé bullet points rather than storytelling; hero text is long and generic. |
| **10** | **Rian van der Merwe (Elezea)** – elezea.com – blog/portfolio site | **Hero:** A minimalist hero introduces Rian as a product leader, curious learner, and music fanatic, linking to his blog and LinkedIn[elezea.com](https://elezea.com/#:~:text=Rian%20van%20der%20Merwe). | **Case study:** Under “Projects,” he lists side projects that expose music library data to AI assistants: a Last.fm MCP server and a Discogs MCP server[elezea.com](https://elezea.com/projects/#:~:text=Raindrop,sync). These projects are experimental but illustrate his interest in building infrastructure for AI models. | **Contact:** The contact page features a Pink Floyd lyric and a contact form inviting visitors to get in touch[elezea.com](https://elezea.com/contact/#:~:text=Contact%20Me). | **AI‑specific** (AI integration projects). | 3 | 3 | 3 | **Copy:** playful tone; experiments illustrate AI interests; blog posts show thought leadership. **Avoid:** not a traditional portfolio—projects are described briefly; hero doesn’t convey PM achievements. |

## **Design patterns to copy and avoid**

### **Patterns worth emulating**

1. **Concise hero tagline & elevator pitch:** Most of the high‑scoring portfolios (Mark Proganomprogano.com, Maggie Chumaggie-hsiaochieh-chu.replit.app, Nicolas Backal[nicolasbackal.com](https://www.nicolasbackal.com/#:~:text=Hi%2C%20I%E2%80%99m%20Nicolas%20Backal,Okta%20based%20in%20San%20Francisco)) quickly communicate who the PM is and what they do. A clear, human‑centred headline with supporting sub‑copy engages visitors immediately.

2. **Structured case studies (problem → process → outcome):** Christopher Smith’s AI tool case study explains the motivation, early prototypes, technical decisions, and results[christophersmith.io](https://christophersmith.io/case-studies/designcrit-ai-figma-plugin#:~:text=I%20built%20something%20similar%20before,of%20communication%2C%20value%20statement%2C%20etc); Sam Frons similarly outlines the problem of addiction, her solution, and her responsibilities[samfrons.com](https://www.samfrons.com/addicaid#:~:text=%23%202013,Francisco%2C%20CA%20%2F%20Role%3A%20Founder). Breaking stories into sections with headings, visuals, and bullet lists improves readability.

3. **Evidence and metrics:** Nicolas Backal quantifies impact (30M+ users, zero‑to‑one product launch)[nicolasbackal.com](https://www.nicolasbackal.com/#:~:text=This%20vision,term%20innovation%20roadmap); Kane Sherwell notes 500+ projects and ROI increases[kanesherwell.com](https://kanesherwell.com/#:~:text=Hide%20and%20Seek%20Digital). Including numbers and testimonials increases credibility.

4. **Clear contact call‑to‑action:** Multiple sites use a full‑width footer or overlay with email and social links (Mark Proganomprogano.com, Maggie Chumaggie-hsiaochieh-chu.replit.app). A personal sign‑off encourages visitors to reach out.

5. **Personal voice and philosophy:** Maggie Chu’s product‑philosophy cardsmaggie-hsiaochieh-chu.replit.app and Mia Davis’s friendly storytelling[miamdavis.com](https://miamdavis.com/#:~:text=What%20I%20bring%20to%20your,company) humanise the site and differentiate it from a résumé.

### **Pitfalls to avoid**

1. **Lack of concrete projects:** Some AI PMs (e.g., Maggie Chu) have a strong philosophy but few published case studies. Visitors expect to see shipped products and outcomes.

2. **Text‑heavy layouts:** Several portfolios, especially Notion‑style pages (Amy Oughton[amyoughton.com](https://amyoughton.com/portfolio/inheret-health#:~:text=InHeRET%20Health), Rian van der Merwe), cram dense paragraphs without visual breaks. Use headings, images, and white space to aid scanning.

3. **Generic or long hero messages:** Overly long or generic opening statements (Kane Sherwell[kanesherwell.com](https://kanesherwell.com/#:~:text=Hey%20there%2C%20I%E2%80%99m%20Kane%20Sherwell)) can dilute the value proposition. Focus on unique skills and outcomes.

4. **Missing metrics:** Case studies that read like job descriptions (Jenny Atkins[jennyatkins.me](https://jennyatkins.me/#:~:text=I%20currently%20work%20at%20Timely,an%20experience%20their%20clients%20love)) but lack impact metrics fail to demonstrate product success.

5. **Hidden contact details:** Some sites bury contact information or omit social links. Make it easy for users to reach out with an obvious CTA.

## **Patterns to steal for your portfolio**

1. **AI product philosophy section:** Borrow Maggie Chu’s idea of a short, card‑based section articulating your beliefs about AI product developmentmaggie-hsiaochieh-chu.replit.app. Explain how you view the role of AI (co‑pilot vs. replacement), your approach to ethics, and the importance of user stories and rapid prototyping.

2. **Narrative case study with technical depth:** Emulate Christopher Smith’s structure—begin with the problem and context, discuss experiments and trade‑offs (e.g., IBM Watson vs. OpenAI[christophersmith.io](https://christophersmith.io/case-studies/designcrit-ai-figma-plugin#:~:text=I%20built%20something%20similar%20before,of%20communication%2C%20value%20statement%2C%20etc)), and end with outcomes. Use diagrams or screenshots to illustrate decisions and quantify results.

3. **Full‑width contact overlay with personal sign‑off:** Use a friendly call‑to‑action at the bottom of your site like Mark Progano and Maggie Chumaggie-hsiaochieh-chu.replit.app. Include your email, LinkedIn, and a short line inviting collaboration or feedback. This human touch encourages potential employers or collaborators to reach out.

## **Conclusion**

The PM/AI‑PM portfolios examined here show that clarity of message, structured storytelling, and credible evidence are critical. AI‑focused portfolios must go beyond philosophy by showcasing actual projects and outcomes, while general PM portfolios benefit from emphasising user impact, metrics, and contact CTAs. By combining a concise hero message, well‑structured case studies, and a personable contact invitation, your portfolio can convey both technical depth and human‑centred design.

Here are the 5 highest-leverage design actions from the teardown to boost **clarity, credibility, and craft**—optimized for your dark, scroll-animated React/Vite \+ Locomotive Scroll setup.

\#1 Make the hero answer the “hireability” test in 20s  
 **What to change**

* One-line value prop (≤12 words) \+ one supporting sentence (≤18 words).

* 1 primary CTA (“View top 3 case studies”) \+ 1 secondary (“Contact”).

* “Cred strip” under the fold: logos, 2–3 quantified outcomes (e.g., “+18% activation,” “-23% latency”), and 1 testimonial pull-quote.

* Replace heavy hero motion with a subtle loop (≤8s, muted, \<2 MB, paused on `prefers-reduced-motion`).  
   **Why it works**: Instant positioning \+ social proof beats aesthetic intros.  
   **Measure**: Time-to-meaning (target ≤8s), bounce rate on home, CTA click-through.  
   **Ship check**

* Nav ≤4 items (Work, About, Writing/Principles, Contact)

* Headline ≤12 words; supporting line ≤18

* Cred strip shows ≥2 metrics \+ 1 quote

* Primary CTA above the fold

\#2 Lead with outcomes in every case study (outcome-first template)  
 **What to change**

* Pin a summary band at the top: **Problem → Bet → Approach → Outcome** (+3 metric chips with deltas & confidence).

* Mid-page: “What changed for users” (UX) vs “What changed under the hood” (data/model/infra) in two columns.

* Show 1–2 experiment artifacts: ablation, prompt/version diffs, offline vs online metric reconciliation.

* End with “Lessons & next bets.”  
   **Why it works**: Senior hiring managers scan for impact first, then depth.  
   **Measure**: Average scroll depth to “Outcome,” time on page, clicks on demo assets.  
   **Ship check**

* Outcome band at the top with 3 metric chips

* Dual column: UX impact vs Model/Tech decisions

* One embedded experiment artifact (table/chart/screenshot)

* “Next bets” section closes the story

\#3 Add hard credibility signals where eyes land  
 **What to change**

* Testimonial cards with name, role, logo, and specific claim (≤25 words).

* “Signals of impact” strip site-wide: metrics, press, awards, patents, shipped features count.

* Lightweight demos: 5–10s GIF/WebM with caption “What to notice.”

* Link proofs: PRs, dashboards, papers/posts (redact as needed).  
   **Why it works**: Concrete, verifiable signals reduce risk perception.  
   **Measure**: Click-through on proof links, time on demos, recruiter replies.  
   **Ship check**

* ≥2 named testimonials with role/logo

* Demo loops \<2 MB, captions present

* Proof links grouped and scannable (icon-tagged)

\#4 Reduce cognitive load in navigation & scrolling (Hick/Fitts \+ motion hygiene)  
 **What to change**

* Keep global nav ≤4 items; add a **sticky mini-TOC** on case studies (Jump: Problem, Experiments, Outcome, Lessons).

* Button targets ≥44×44px; max line length 60–75ch; section spacing 8–12× baseline.

* Locomotive Scroll: disable heavy parallax on mobile; cap effect stack (≤3 concurrent transforms); honor `prefers-reduced-motion`.

* Add a thin progress indicator on long reads.  
   **Why it works**: Fewer, larger choices \+ predictable motion \= faster comprehension.  
   **Measure**: Navigation clicks per session, time to first meaningful click, mobile scroll abandonment.  
   **Ship check**

* Case-study mini-TOC present & sticky

* Targets ≥44px; lines 60–75ch

* Parallax disabled on mobile; PRM respected

* Progress bar on long pages

\#5 Finish with a conversion system, not a contact link  
 **What to change**

* Persistent secondary CTA (“Book 15-min intro”); inline email; downloadable 1-page PDF.

* Short contact form with purpose chips (Hiring, Collab, Speaking) \+ auto-attach portfolio link.

* Post-case-study CTA: “Discuss similar work” with prefilled email subject including project tag.

* Instrument events (CTA clicks, form start/submit, file downloads).  
   **Why it works**: Reduces friction and makes intent explicit.  
   **Measure**: CTA CTR, form completion rate, intro-call bookings.  
   **Ship check**

* Visible scheduler \+ email \+ PDF

* 3-chip purpose selector

* Event tracking for all CTAs

---

### **Quick copy blocks you can drop in**

* **Hero headline**: “AI PM turning ambiguous ideas into shipped models and measurable wins.”

* **Hero subline**: “I lead experiments from data to UX—faster activation, lower latency, clearer value.”

* **Primary CTA**: “See 3 case studies (outcomes first)”

These five moves reflect the strongest patterns from the teardown—and they’ll immediately tighten **clarity** (hero \+ IA), **credibility** (outcomes, proofs, testimonials), and **craft** (motion discipline, demo hygiene, performance).

