---
name: design-guide
applyTo: "src/**/*"
description: |
  Design guidance for the Bingo Mixer frontend. Use when making visual, typographic,
  or spacing changes, or when adding/adjusting Tailwind v4 tokens.
---

This instructions file encodes the team's "Desert Sand — Minimal" design voice and practical rules for implementing UI styles.

Principles
- Tone: warm, approachable, and minimal — avoid loud neon or heavy saturation.
- Contrast: prefer warm paper backgrounds with ink for text; reserve accent colors for calls-to-action.
- Motion: prefer subtle micro-interactions; prefer CSS-only animations; avoid long or distracting transitions.
- Typographic hierarchy: use the system font stack for body; use the `--font-display` variable for larger headings if needed.

Tailwind v4 / Token guidance
- Prefer `@theme` tokens placed in `src/index.css` for color and font tokens.
- Use semantic tokens: `--ink`, `--paper`, `--accent`, `--accent-light`, `--spark`, `--paper-edge`.
- Map semantic names to small helper classes in `src/index.css` when a component expects them (e.g., `.bg-ink`, `.text-paper`).
- Avoid adding global utility classes unless they are reused across components.

Component Rules
- Cards: rounded 1.5rem, subtle inset highlight, and a soft edge border using `--paper-edge`.
- Buttons: pill-shaped primary button using `--accent`; primary text uses `--ink` for legibility.
- Boards and grids: prefer consistent gaps (use Tailwind spacing tokens) and preserve square aspect ratios using `aspect-square`.

Accessibility
- Maintain 4.5:1 contrast for body text; use `--accent` only when WCAG contrast is preserved for text.
- Prefer semantic HTML and ensure interactive elements have focus states.

Do / Don't (quick)
- Do: use `@theme` tokens, small shadows for depth, subtle radial background textures.
- Don't: import new font families without explicit approval; don't add heavy drop-shadows or neon palettes.

Examples (prompts to use with the agent)
- "Apply the design guide: make the card header use `--accent` and increase heading scale." 
- "Refactor this component to use `--paper-edge` for borders and `--paper` for background."

If unclear
- Ask: "Should this change apply app-wide or only to `src/components/*`?"
- If the change affects tokens, update `src/index.css` and run `npm run build` / `npm run dev` to verify.

