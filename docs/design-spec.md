# Bingo Mixer design spec

## Experience goal
Create a friendlier, more memorable bingo app for in-person mixers. The UI should feel welcoming on first open, explain the game quickly, and make the board feel like a lively social prompt instead of a generic utility grid.

## Visual direction
- **Mood:** after-hours mixer, warm paper cards on a dark lounge backdrop
- **Personality:** social, confident, lightly playful rather than childish
- **Contrast:** dark atmosphere + bright paper surfaces + one vivid accent for the primary action
- **Typography:** a more editorial display treatment for headings, with clean readable body copy

## Iteration backlog
- `#tool:todo entry-point-refresh` - make the landing screen feel intentional, with a clearer hook and stronger call to action
- `#tool:todo board-shell-refresh` - align the game screen frame, instructions, and navigation with the new entry style
- `#tool:todo board-card-polish` - improve square legibility, touch feel, and winning state contrast
- `#tool:todo bingo-feedback-refresh` - make the win feedback feel celebratory and visually consistent

## Decisions log
- Start with the entry point before touching the board so the first iteration improves the initial impression immediately.
- Keep the first pass reversible by limiting it to the start screen and shared visual tokens.

## Current iteration
**Iteration 1:** entry-point refresh - completed

### What shipped
- Replaced the plain gray entry screen with a dark lounge backdrop and warm paper panels.
- Added editorial heading treatment, clearer onboarding copy, and stronger CTA language.
- Turned the rules into a lightweight guided rundown instead of a plain bullet list.
- Added a visual preview card so the first screen hints at the board experience before the round starts.
- Introduced shared Tailwind v4 theme tokens for the new color and typography direction.

### Findings
- The first screen now carries the product mood on its own without needing the game board to explain the app visually.
- Keeping this pass to the start screen made the change easy to review before propagating the style system into the in-game shell.
