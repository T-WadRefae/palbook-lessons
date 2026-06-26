# palbook-lessons

Interactive HTML lesson pages for English (Palestinian curriculum), grades 5–9.
Each lesson is a single self-contained HTML file: `grade<N>/unit<U>p<P>*.html`.

## Design guidelines (teacher's standing requirements — apply to ALL new designs)

1. **Tabs**: always in **English**, laid out **left-to-right (LTR)**.
2. **Page language**: lesson content/pages in **English**; helper instructions and hints in **Arabic**.
3. **Comprehension questions**: place inside a **collapsible dropdown** (`<details>`), not always visible.
4. **Audio**: ALWAYS use the **Google Drive preview iframe player** (`https://drive.google.com/file/d/<ID>/preview`) — compact size (height ≈ 58px, max-width ≈ 480px). Never build a custom player and never use native `<audio controls>`. (No programmatic seeking is possible, so don't build per-segment play buttons.)
5. **Images**: must be **adaptive/responsive** to page width (`width:100%; height:auto;` — no fixed crops).
6. **Word flashcards**: front = **English word + expressive emoji**; back = **Arabic meaning + synonym and antonym (if any)**.
7. **TTS (speech)**: a dedicated 🔊 **button on the card front** — never trigger speech on card flip.
8. **End every lesson with a 5-point quiz** covering the lesson content.
9. **Do not invent extra questions/exercises** unless the teacher explicitly asks. E.g. the Words tab contains only the words (no added matching games). Only build questions for activities where the teacher requested them.
10. Lessons start with an **Objectives tab** (أهداف الدرس), one tab per exercise.
11. **File naming**: exactly `grade<N>/unit<U>p<P>.html` (e.g. `grade7/unit1p1.html`) by unit and lesson number — **no suffixes or additions** to the name.
12. **Conversation transcripts**: new/difficult words get a **hover tooltip with the Arabic meaning** (yellow highlight); **pronouns get a different highlight color** with a tooltip saying **what the pronoun refers to**. Tooltips must also work on tap (mobile).

## Grammar lesson design (Discovery Learning pattern)

All grammar lessons in `/grammar/` must follow this **student-journey** model. Build for *how students learn*, not for presenting a rule. The tabs below are the required structure:

| # | Tab label | Emoji | Purpose |
|---|-----------|-------|---------|
| 1 | Start | 🚀 | Hook — image/scenario + opening question to activate prior knowledge. Quick warm-up activity (MCQ or drag). |
| 2 | Words | 📚 | Key vocabulary + frequency/time adverbs. Images/icons preferred over text. No matching games unless teacher asks. |
| 3 | Discover | 🔍 | Inductive discovery — show contrasting examples (e.g. I play / She plays), ask "What changed? Why?". Student finds the pattern BEFORE seeing the rule. |
| 4 | Grammar | 🧠 | Explicit rule explanation — use/form/negatives/questions. Clean tables, minimal text. Arabic hints for key points. |
| 5 | Practice | ✏️ | Graded exercises — Level 1 (choose) → Level 2 (fill) → Level 3 (make questions) → Level 4 (correct mistakes). Instant feedback. |
| 6 | Create | 🗣️ | Speaking + Writing combined. Short prompts first, then "My Daily Routine" paragraph, then challenge. |
| 7 | Quiz | 🎯 | 5-question self-check (MCQ + T/F + one writing item). Instant score. Badge/stamp reward themed to the grammar topic. |

**Optional tab 8 — Real Life** (⭐): add when relevant — short reading / social-media post / daily schedule with Present Simple examples to spot. Include it when the grammar appears naturally in authentic text.

### Grammar lesson rules
- Tabs are **real tabs** (click to show/hide panels) — NOT a vertical scroll-through page. Only the active panel is visible.
- The **Discover tab comes BEFORE Grammar** — students notice the pattern first, then read the rule.
- Each lesson is **fully self-contained** (no external CSS/JS files). All styles and scripts inline.
- No `assets/lesson.css` dependency — grammar lessons must work standalone.
- Practice exercises go from easy → hard within the same tab (levelled, not separate tabs).
- Speak and Write are **combined in one "Create" tab** to keep the tab count to 7.
- Gamification badge theme = grammar topic (e.g., clock stamp for Present Simple, camera stamp for Past Simple) — never travel/airport.
- Footer alternates: "Designed with love 💗 by T. Wad Refae" / "Prepared with care 🌸 by T. Wad Refae".

## Writing lesson design (General → Writing section)

Writing lessons live in `/writing/` and are listed in `writing/index.html` (the hub: header + grade 5–9 filter + preview). They also appear in the live app `palbook-live` under **General → Writing** (add each new lesson to `src/data/writingLessons.js` there). The teacher gave explicit permission to push **palbook-live to `main`** for the writing section so it deploys live.

**Tab template (5 tabs, NO quiz):**

| # | Tab | Emoji | Purpose |
|---|-----|-------|---------|
| 1 | Objectives | 📌 | أهداف الدرس + the writing goal/task. |
| 2 | Model / Look | 📖 | Annotated model text — each part opens on click with an English tip + Arabic explanation (like the formal-letter "Letter Guide"). |
| 3 | Build It | ✏️ | Guided construction — word banks, sentence frames, levelled practice with instant feedback. |
| 4 | Checklist | ✅ | Tappable self-check + progress bar — **this replaces the quiz** (live grading is hard). |
| 5 | Worksheet | 📝 | Placeholder tab holding a `<!-- WORKSHEET-LINK -->` comment; the teacher drops the printable worksheet (Drive/PDF) link here later. |

### Writing lesson rules
- **NO quiz.** Writing is assessed by the printable worksheet (uploaded later) + the self-check Checklist. Never add a scored quiz to a writing lesson.
- **The theme must wrap the WHOLE page — immersive, not just a themed header + plain tabs.** Build each lesson as a single themed "object": a thematic full-page background/environment + a framed container whose frame motif IS the theme, with header, tabs and panels living inside it. Reference standard: the formal-letter envelope (`grade8/unit12p12.html`), the Past Simple **film reel** (sprocket holes on both edges + clapperboard), and the Posters **notice board** (wooden posts + screws). Header, tab style, and panels all match the theme.
- **Always give MAXIMUM effort on layout** — every writing lesson is a polished, immersive showpiece, not a quick template fill.
- **The HEADER must NEVER be ordinary/traditional** (teacher's emphasised standing rule, applies to ALL lessons). It is the very first thing that grabs the student's attention, so make it a bold, distinctive, theme-driven hero (e.g. a clapperboard, a CASE FILE with a CONFIDENTIAL stamp & magnifier, an airmail envelope with stamp & postmark, a locked diary cover). Never reuse a header design between lessons.
- **Add encouraging effects** (teacher's standing requirement): on each **correct answer** show a celebratory micro-animation (sparkle/pop ✨), and on **task completion** (all checklist items ticked, or all practice answered correctly) fire a **confetti burst + a bouncing badge/stamp**. Keep it lightweight inline JS/CSS.
- **Difficulty rises gradually across grades** (spiral). Build a "structure spine" of capstone lessons separately rather than overloading the focused skill lessons: G8 *From One Paragraph to Two* (richer paragraph + linking two), G9 *The 3-Paragraph Essay* (introduction · body · conclusion). Upper-grade lessons may use **levelled Build It practice** (Level 1 choose → 2 identify/match → 3 build/choose-best). Worksheets carry the volume/length of practice.
- Each lesson is **fully self-contained** (all CSS/JS inline). Real tabs (click to show/hide; only the active panel visible).
- Tab bar: horizontally scrollable on mobile, wraps on wider screens (`@media (min-width:700px)`).
- Gamification badge/stamp themed to the **lesson topic** (saved to `localStorage`) — never travel/airport.
- File naming: `writing/grade<N>-<topic>.html` (e.g. `grade6-past-simple.html`); add a matching card inside the `<!-- WRITING-CARDS-START/END -->` block in `writing/index.html`.
- Footer alternates the two standard credits.

## Other conventions

- Single-file pages: all CSS/JS inline, Google Fonts (Fredoka/Nunito for English, Baloo Bhaijaan 2 for Arabic).
- Audio hosted on Google Drive (embed via `/preview` iframe, see rule 4). Images hotlinked (e.g. i.ibb.co). The sandbox network blocks downloading these hosts, so link, don't vendor.
- Gamification: progress badges/stamps saved to `localStorage` — theme them after the **lesson topic** (e.g., hello badges for a greetings lesson). The teacher does NOT want travel/airport metaphors (boarding pass, passport, flights) — pick themes tied to the lesson subject.
- **Headers**: every period/lesson page gets a **completely different header design**, but all headers of a unit stay tied to the **unit's theme** (e.g., Unit 1 greetings: P1 = sunrise greeting, P2 = speech bubble...). Never reuse the same header layout across periods.
- Listening conversations: split the transcript into segments; after each segment put its comprehension questions (inside a `<details>` dropdown, per rule 3). The Drive player plays the whole recording; per-segment listening is a 🔊 TTS button that reads the segment transcript aloud. NEVER add a segment-timing adjustment panel.
- **Show the transcript ONLY for "Listen *and read*" tasks.** When an activity is pure listening comprehension ("Listen and complete / answer / number / match / tick…" — anything that is NOT "read"), do NOT provide the transcript text (no tooltips either) — the goal is understanding the audio, so give only the Drive player + the questions.
- **Gap-fill / "add the words" exercises: use a single shared word bank** (click a word, then click the blank), matching the textbook's layout — NOT a separate multiple-choice dropdown per blank.
- Tooltips/popovers must not be clipped: any container that holds hover tooltips must NOT use `overflow:hidden`.
- Workflow: the teacher gave explicit permission to commit and push **directly to `main`** — no feature branches, no PRs. She views the site from `main`, so push there right after finishing each lesson. This overrides any session/branch default: **always push to `main` for this repository** without asking. Never create, switch to, or push to a different branch for this repo unless she explicitly says so in that moment.
- Never read from, write to, or push to **any other repository** without an explicit command from the teacher.
- Tab bar: horizontally scrollable on mobile, but MUST wrap to multiple lines on wider screens (`@media (min-width:700px){nav{flex-wrap:wrap;overflow-x:visible;justify-content:center}}`) — hidden scrollbars make overflowing tabs unreachable on laptops.
- Footer: every lesson page ends with a small centered credit footer, alternating "Designed with love 💗 by T. Wad Refae" / "Prepared with care 🌸 by T. Wad Refae".
