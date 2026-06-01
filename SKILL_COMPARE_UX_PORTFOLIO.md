# Skill: Compare repository against a UX Portfolio Field Guide

Purpose
- Automate a structural and visual comparison between a codebase (this repo) and a UX portfolio "field guide" (design brief or example site).
- Produce a precise checklist of implemented items, gaps, and prioritized implementation tasks.

When to use
- Validate that a portfolio site implements a target UX / visual system (themes, pages, interactions).
- Run before polishing, launching, or pitching the portfolio so UX artifacts match the published guide.

Inputs
- Repository root (workspace) — scans `src/`, `public/`, `index.html`, and `docs/`.
- Target UX Guide URL or local file (HTML snapshot, markdown, or accessible page). Example: AESTHETIC SYNTHESIS field guide.

Outputs
- A structured report with:
  - Inventory of pages, components, and assets found in the repo.
  - Mapped list of guide requirements → implementation status (present / partial / missing).
  - Prioritized TODOs for missing items with file-level pointers and suggestions.
  - Short code snippets or implementation notes for common gaps (e.g., skip-to-content anchor, system-status bar, monospaced theme variant).

Process (step-by-step)
1. Gather guide content
   - Fetch the target URL or read the provided local file.
   - Extract high-level chapters, UX principles, and explicit components (navs, dialogs, audio players, theme variants).
2. Inventory codebase
   - Scan `src/pages`, `src/components`, `src/components/ui`, `src/data`, and `public/`.
   - Read `projects` metadata and any showcase references to detect related artifacts (e.g., live links to the guide).
3. Match and classify
   - For each guide requirement, try to find a corresponding page/component.
   - Classify as: Present (full), Present (partial), or Missing.
4. Produce remediation plan
   - For each missing/partial item, produce a concise fix: target files to change, suggested code pattern, accessibility notes, and priority.
5. Save results
   - Create a summary report and optional patch suggestions (small diffs) or an implementation checklist that can be used by the developer or another agent.

Decision points and branching logic
- If the guide contains interactive artifacts (dialogs, audio, WebGL), prefer searching for matching JS components first (`ProjectView`, `GenerativeArt`, `GridTransition`).
- If a component file exists but is empty or stubbed (e.g., `resizable-navbar.jsx`), mark it as "stubbed" (partial) and add a high-priority implementation task.
- If the guide mandates visual themes (e.g., multiple aesthetics), detect whether the codebase exposes a theme switch or CSS tokens; if not, recommend adding a theming layer and list minimal token set.

Quality criteria / completion checks
- Structural parity: Each major guide section (nav, hero, chapters, footer) must exist as a page or component.
- Interaction parity: Clickable interactive patterns from the guide (view logs, enter space, dialogs) should be implementable via accessible semantics (`role=dialog`, focus trapping, keyboard controls).
- Visual parity: Theme tokens, high-contrast modes, and special typography (monospace terminal) must be present or introduced as variants.
- Accessibility: Skip-to-content, keyboard navigation for chapter controls, and semantic markup must be present.

Common remediation suggestions (snippets / patterns)
- Skip-to-content anchor: Add an early link with `href="#main-content"` visible on keyboard focus.
- System status bar: A small top component exposing status text and an optional timestamp; use `aria-live="polite"` for updates.
- Monospaced terminal theme: Add a CSS utility class `.theme-console { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace }` and a theme token for background/contrast.
- Dialogs: Use a reusable `Dialog` component with focus trap and `role="dialog" aria-modal="true"`.

Example prompts to run this skill
- "Compare workspace to the AESTHETIC SYNTHESIS field guide at <URL> and list missing items." 
- "Run parity check and produce a prioritized implementation checklist for nav, footer, and AESTHETIC SYNTHESIS project pages."

Notes specific to this repository (auto-detected at runtime)
- `src/components/ui/resizable-navbar.jsx` is an empty file (stub) — implement nav here.
- `src/components/Footer.jsx` exists and covers basic footer links, but the guide expects a manifest/manifesto link and interactive footer nav (Read Manifesto / View Credits / Back to Top) — mark as partial.
- `src/components/GenerativeArt.jsx` exists and can be repurposed for immersive chapter backgrounds (present, but non-interactive compared to the guide).
- `src/data/projects.js` contains an `AESTHETIC SYNTHESIS` project with a `liveUrl` pointing to the guide — good mapping, but the site lacks the guide's interactive chapter controls and dialogs.

Deliverables produced by the skill
- `compare-report.md` (summary report with mappings and file pointers)
- `compare-todo.json` (structured list of missing items with priorities)
- Optional patch suggestions as small diffs for trivial fixes (skip-link, aria attributes, footer link additions)

Follow-ups / clarifying questions to ask the developer
- Which priority model should be used? (a) Launch-critical (fast fixes), (b) Visual parity (styling heavy), (c) Full fidelity (recreate all interactions).
- Do you want the agent to commit patches and create PRs, or only produce suggestions?

Next steps I will perform if you say "Run it now"
1. Fetch the guide URL (or accept a local file upload). 
2. Run the automated scan across `src/` and `public/`.
3. Produce `compare-report.md` with a mapping table and implementable next steps.

---

Generated by the `agent-customization` workflow — designed to be saved in the workspace and re-run via the Copilot agent to generate repeatable comparison reports.