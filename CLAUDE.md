# palbook-lessons

Interactive HTML lesson pages for English (Palestinian curriculum), grades 5–9.
Each lesson is a single self-contained HTML file: `grade<N>/unit<U>p<P>*.html`.

## Design guidelines (teacher's standing requirements — apply to ALL new designs)

1. **Tabs**: always in **English**, laid out **left-to-right (LTR)**.
2. **Page language**: lesson content/pages in **English**; helper instructions and hints in **Arabic**.
3. **Comprehension questions**: place inside a **collapsible dropdown** (`<details>`), not always visible.
4. **Audio**: use **one single custom player** (same component everywhere) that works on all browsers and fits **mobile width**. Do not rely on the native `<audio controls>` look.
5. **Images**: must be **adaptive/responsive** to page width (`width:100%; height:auto;` — no fixed crops).
6. **Word flashcards**: front = **English word + expressive emoji**; back = **Arabic meaning + synonym and antonym (if any)**.
7. **TTS (speech)**: a dedicated 🔊 **button on the card front** — never trigger speech on card flip.
8. **End every lesson with a 5-point quiz** covering the lesson content.
9. **Do not invent extra questions/exercises** unless the teacher explicitly asks. E.g. the Words tab contains only the words (no added matching games). Only build questions for activities where the teacher requested them.
10. Lessons start with an **Objectives tab** (أهداف الدرس), one tab per exercise.

## Other conventions

- Single-file pages: all CSS/JS inline, Google Fonts (Fredoka/Nunito for English, Baloo Bhaijaan 2 for Arabic).
- Audio files are hosted on Google Drive — embed with `https://drive.google.com/uc?export=download&id=<ID>` and provide a Drive `/preview` iframe fallback shown on load error. Images hotlinked (e.g. i.ibb.co). The sandbox network blocks downloading these hosts, so link, don't vendor.
- Gamification: passport/stamps or similar progress saved to `localStorage`.
- Listening conversations: split into segments with per-segment play (start/end seconds editable by the teacher via an in-page ⚙ panel, since audio can't be auditioned in the sandbox).
