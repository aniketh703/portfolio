# Design Spec: Project Type Taxonomy + Grid Filtering
**Date:** 2026-05-20  
**Status:** Approved — pending implementation  
**Scope:** `projects.js`, `Archive.jsx`, `Home.jsx`, `ProjectView.jsx`

---

## Context & Decision Log

### Dark Mode (No Changes Needed)
ProjectView was discussed as a candidate for dark-mode removal. Codebase review confirmed it uses explicit light tokens (`bg-stone-100`, `text-stone-900`, etc.) with **zero** `dark:` Tailwind variants. It is already functionally light-only. The site-wide dark mode toggle (already implemented: localStorage, OS detection, flash-prevention in `index.html`) is preserved as-is for all other pages — no regressions, no new code required here.

### What's Actually Being Built
Three gaps identified:
1. **No project type taxonomy** — projects have detailed `category` strings ("Mobile Application", "Web Application") but no broader `type` grouping. Archive's current filter generates ~9 categories from 12 projects, making it noise rather than navigation.
2. **Silent image module bug** — every project has a `{ type: "image", url, caption }` module, but `renderModule()` in `ProjectView.jsx` has no `case 'image'`. Every case study is missing its visual panel.
3. **No visual type indicators on Home cards** — visitors can't tell at a glance whether a project is a design, engineering, or ML piece.

---

## Type Taxonomy

Four types cover all 12 projects cleanly:

| Type | Label (UI) | Badge colour | Projects |
|------|-----------|--------------|---------|
| `design` | Design | Orange (#FF4500) | GITA APP, LAKSHYA, INDIAN COOK APP, VNAV ASSOCIATES, RBAC UI |
| `engineering` | Engineering | Blue (#4285F4) | SPEECH TRANSCRIPTION, ANIKETH BLOG, PROJECT MANAGER, CONTENT MANAGER, WEATHER FORECAST |
| `ml` | ML & Data | Teal (#00ACC1) | DIABETES MLOPS |
| `creative` | Creative | Purple (#7C3AED) | AESTHETIC SYNTHESIS |

Each project gets a new field: `type: 'design' | 'engineering' | 'ml' | 'creative'`

---

## Changes — File by File

### 1. `src/data/projects.js`
Add `type` field to each of the 12 project objects:

| id | title | type |
|----|-------|------|
| 1 | GITA APP | `'design'` |
| 2 | LAKSHYA | `'design'` |
| 3 | INDIAN COOK APP | `'design'` |
| 4 | SPEECH TRANSCRIPTION | `'engineering'` |
| 5 | ANIKETH BLOG | `'engineering'` |
| 6 | VNAV ASSOCIATES | `'design'` |
| 7 | DIABETES MLOPS | `'ml'` |
| 8 | PROJECT MANAGER | `'engineering'` |
| 9 | CONTENT MANAGER | `'engineering'` |
| 10 | WEATHER FORECAST | `'engineering'` |
| 11 | RBAC UI | `'design'` |
| 12 | AESTHETIC SYNTHESIS | `'creative'` |

---

### 2. `src/pages/Archive.jsx` — Improved Filter Tabs

**Current behaviour:** `categories` derived as `['All', ...new Set(projects.map(p => p.category))]` — generates up to 9 categories, mostly "Web Application" variants.

**New behaviour:** Replace with a fixed 5-tab bar (All / Design / Engineering / ML & Data / Creative) driven by `p.type`. Show project count per type in the label.

Filter logic:
```js
const TYPE_LABELS = {
  design:      'Design',
  engineering: 'Engineering',
  ml:          'ML & Data',
  creative:    'Creative',
};
const TYPES = ['all', 'design', 'engineering', 'ml', 'creative'];

const [filter, setFilter] = useState('all');
const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);
```

Tab counts computed as `projects.filter(p => p.type === t).length`.

Existing pill CSS is reused — no new styles needed.

---

### 3. `src/pages/Home.jsx` — Type Badge on Project Cards

**Current behaviour:** Project cards in the featured grid show title, category label, year — no type indicator.

**New behaviour:** Add a small type badge chip to each card. Badge sits top-right of the thumbnail, uses the type colour palette as a semi-transparent pill.

Badge mapping:
```js
const TYPE_BADGE = {
  design:      { label: 'Design',      bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-500/20' },
  engineering: { label: 'Engineering', bg: 'bg-blue-500/10',   text: 'text-blue-600',   border: 'border-blue-500/20'   },
  ml:          { label: 'ML & Data',   bg: 'bg-teal-500/10',   text: 'text-teal-600',   border: 'border-teal-500/20'   },
  creative:    { label: 'Creative',    bg: 'bg-violet-500/10', text: 'text-violet-600',  border: 'border-violet-500/20' },
};
```

No filter tabs on the Home page — the featured set is 3 curated projects, all design-type; filtering would produce empty states for Engineering/ML/Creative. Type badges give the visual signal without the broken filter UX.

---

### 4. `src/components/ProjectView.jsx` — Fix Image Module (Bug)

**Current behaviour:** `renderModule()` switch has no `case 'image'` — silently falls through to `default: return null`. Every project case study is missing its visual panel.

**Fix:** Add case:
```jsx
case 'image':
  return (
    <div key={index} className="mb-10 md:mb-16">
      <div className="w-full overflow-hidden rounded-sm border border-stone-200">
        <img
          src={module.url}
          alt={module.caption || ''}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      {module.caption && (
        <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-stone-400">
          {module.caption}
        </p>
      )}
    </div>
  );
```

---

### 5. `src/components/ProjectView.jsx` — Light Mode Isolation (Hardening)

ProjectView is currently unaffected by dark mode because it uses explicit light tokens. To make this explicit and future-proof:

Add `style={{ colorScheme: 'light' }}` to the root `<div>` and ensure `bg-stone-50` (not `bg-stone-100`) is applied consistently to the content area. This prevents any future `dark:` addition from accidentally darkening the component, and signals to the browser that this element's scroll bars / form controls should use light rendering.

---

### 6. Optional Stretch: `metrics` Module Type

A new module type for showcasing measurable outcomes. Not required for this sprint but designed for future use:

```js
{ type: 'metrics', items: [
  { value: '98', unit: '%', label: 'Lighthouse score' },
  { value: '8', unit: 'wks', label: 'Build time' },
  { value: '700+', unit: '', label: 'Verses indexed' },
]}
```

Renders as a 3-column stat row with large serif numbers. Gives each case study a "Results" anchor point.

**Include in this sprint** since all 12 projects already have measurable outcomes in their `text` modules — we can extract them.

---

## What Is Explicitly Out of Scope

- **Filter tabs on Home page** — curated grid of 3 is too small; type badges are the right approach instead.
- **Dark mode for ProjectView** — already resolved (no `dark:` variants exist).
- **Removing the site dark mode toggle** — already implemented and working; no reason to touch it.
- **Archive page redesign** — filter improvement only; card layout and overall page structure unchanged.
- **New ProjectView visual redesign** — the case study layout is solid; fixing image rendering is the only structural change.

---

## Success Criteria

1. Archive filter tabs: All / Design (5) / Engineering (5) / ML & Data (1) / Creative (1) — correct counts, filter applies instantly, tab style matches existing pill design.
2. Home cards: type badge visible on each featured project card (top-right of thumbnail or metadata row).
3. ProjectView image module: `{ type: "image", ... }` renders a full-width image with caption below.
4. ProjectView: `colorScheme: light` applied to root; no visual change in light mode, stays light in dark mode.
5. (Stretch) Metrics module: renders as 3-col stat row when `type: 'metrics'` is in project modules.
6. No regressions to dark mode on other pages.
7. Build passes (`npm run build`) with no TypeScript/ESLint errors.
