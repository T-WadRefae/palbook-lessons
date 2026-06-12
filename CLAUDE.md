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

## Other conventions

- Single-file pages: all CSS/JS inline, Google Fonts (Fredoka/Nunito for English, Baloo Bhaijaan 2 for Arabic).
- Audio hosted on Google Drive (embed via `/preview` iframe, see rule 4). Images hotlinked (e.g. i.ibb.co). The sandbox network blocks downloading these hosts, so link, don't vendor.
- Gamification: progress badges/stamps saved to `localStorage` — theme them after the **lesson topic** (e.g., hello badges for a greetings lesson). The teacher does NOT want travel/airport metaphors (boarding pass, passport, flights) — pick themes tied to the lesson subject.
- **Headers**: every period/lesson page gets a **completely different header design**, but all headers of a unit stay tied to the **unit's theme** (e.g., Unit 1 greetings: P1 = sunrise greeting, P2 = speech bubble...). Never reuse the same header layout across periods.
- Listening conversations: split the transcript into segments; after each segment put its comprehension questions (inside a `<details>` dropdown, per rule 3). The Drive player plays the whole recording; per-segment listening is a 🔊 TTS button that reads the segment transcript aloud. NEVER add a segment-timing adjustment panel.
- Tooltips/popovers must not be clipped: any container that holds hover tooltips must NOT use `overflow:hidden`.
- Workflow: the teacher gave explicit permission to commit and push **directly to `main`** — no feature branches, no PRs. She views the site from `main`, so push there right after finishing each lesson.
