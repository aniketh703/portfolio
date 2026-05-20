# Project Type Taxonomy + Grid Filtering Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a 4-type project taxonomy (design/engineering/ml/creative), improve Archive filter tabs to use types instead of verbose categories, add type badge chips to Home project cards, and fix the silent image module rendering bug in ProjectView.

**Architecture:** Pure data-layer change first (add `type` to `projects.js`), then UI changes in two consumer components (Archive filter logic, Home badge rendering), then ProjectView bug fix and hardening. Each task is independently deployable.

**Tech Stack:** React 19, Tailwind CSS v3 (class-based dark mode), Vite 7, no test runner configured — `npm run build && npm run lint` is the verification gate.

---

## File Map

| File | Change |
|------|--------|
| `src/data/projects.js` | Add `type` field to all 12 project objects |
| `src/pages/Archive.jsx` | Replace dynamic category filter with fixed type tabs |
| `src/pages/Home.jsx` | Add type badge pill to each project card in "Recent work" grid |
| `src/components/ProjectView.jsx` | Fix image module rendering + add metrics module + add `colorScheme: light` to root |

---

## Task 1: Add `type` field to all 12 projects

**Files:**
- Modify: `src/data/projects.js`

**Background:** `projects.js` exports an array of 12 objects. Each object currently has `id`, `title`, `category` (a verbose string like "Mobile Application"), and other fields. We add `type` — a short discriminator used for filtering. The `category` field is untouched (still used for display in cards and sidebar).

- [ ] **Step 1: Add `type` to each project object**

Open `src/data/projects.js`. For each project, add the `type` field immediately after `category`. The complete mapping:

```js
// id 1 — GITA APP
type: 'design',

// id 2 — LAKSHYA
type: 'design',

// id 3 — INDIAN COOK APP
type: 'design',

// id 4 — SPEECH TRANSCRIPTION
type: 'engineering',

// id 5 — ANIKETH BLOG
type: 'engineering',

// id 6 — VNAV ASSOCIATES
type: 'design',

// id 7 — DIABETES MLOPS
type: 'ml',

// id 8 — PROJECT MANAGER
type: 'engineering',

// id 9 — CONTENT MANAGER
type: 'engineering',

// id 10 — WEATHER FORECAST
type: 'engineering',

// id 11 — RBAC UI
type: 'design',

// id 12 — AESTHETIC SYNTHESIS
type: 'creative',
```

For project id 1 as a reference, the object header should look like:
```js
{ 
  id: 1, 
  title: "GITA APP", 
  category: "Mobile Application",
  type: 'design',
  year: "2026",
  // ... rest unchanged
```

- [ ] **Step 2: Verify build passes**

```bash
cd portfolio
npm run build
```

Expected: `✓ built in X.Xs` with no errors. If you see "Cannot find module" or type errors, check you didn't accidentally remove a comma or brace.

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.js
git commit -m "feat(data): add type taxonomy field to all 12 projects"
```

---

## Task 2: Update Archive filter to use type taxonomy

**Files:**
- Modify: `src/pages/Archive.jsx` (lines 26–69)

**Background:** `Archive.jsx` currently derives filter options dynamically from `p.category` — generating ~9 categories like "Web Application", "Mobile Application", etc. from 12 projects. We replace this with 5 fixed tabs: All / Design / Engineering / ML & Data / Creative. Counts are shown in parentheses. Existing pill CSS is reused unchanged.

- [ ] **Step 1: Replace the filter state and derived values**

In `Archive.jsx`, locate the `Projects` component. Replace lines 26–29 (the `useState` + `categories` + `filtered` declarations) with:

```jsx
const TYPE_FILTERS = [
  { key: 'all',         label: 'All'         },
  { key: 'design',      label: 'Design'      },
  { key: 'engineering', label: 'Engineering' },
  { key: 'ml',          label: 'ML & Data'   },
  { key: 'creative',    label: 'Creative'    },
];

const [filter, setFilter] = useState('all');
const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);
```

- [ ] **Step 2: Replace the filter pill JSX**

Locate the `{/* Filter pills */}` block (lines 54–69). Replace the entire block with:

```jsx
{/* Filter pills */}
<div className="flex gap-2 flex-wrap pb-10">
  {TYPE_FILTERS.map(({ key, label }) => {
    const count = key === 'all' ? projects.length : projects.filter(p => p.type === key).length;
    return (
      <button
        key={key}
        onClick={() => setFilter(key)}
        className={`font-sans text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] tracking-tight ${
          filter === key
            ? 'bg-brand-dark text-white border-brand-dark shadow-sm dark:bg-[#eee] dark:text-[#111] dark:border-[#eee]'
            : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-300 hover:text-stone-800 dark:text-[#aaa] dark:border-[#2a2a2a] dark:hover:border-[#444] dark:hover:text-[#888]'
        }`}
      >
        {label} <span className="opacity-50 ml-0.5">({count})</span>
      </button>
    );
  })}
</div>
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

Expected: clean build, no errors.

- [ ] **Step 4: Visual check — open the dev server**

```bash
npm run dev
```

Navigate to `http://localhost:5173/portfolio/work`. Verify:
- 5 tabs visible: All (12) · Design (5) · Engineering (5) · ML & Data (1) · Creative (1)
- Clicking "Design" shows 5 project cards (GITA APP, LAKSHYA, INDIAN COOK APP, VNAV ASSOCIATES, RBAC UI)
- Clicking "Engineering" shows 5 cards
- Clicking "ML & Data" shows 1 card (DIABETES MLOPS)
- Clicking "Creative" shows 1 card (AESTHETIC SYNTHESIS)
- Clicking "All" restores all 12
- Active tab gets filled dark style; inactive tabs retain pill outline style
- Dark mode toggle still works (nav turns dark, cards use dark variants)

- [ ] **Step 5: Commit**

```bash
git add src/pages/Archive.jsx
git commit -m "feat(archive): replace category filter with type taxonomy tabs"
```

---

## Task 3: Add type badge chips to Home project cards

**Files:**
- Modify: `src/pages/Home.jsx` (lines 356–388, the "Recent work" grid)

**Background:** The "Recent work" section in `Home.jsx` renders up to 4 featured projects. Each card currently shows `project.category` (small uppercase label) and `project.title`. We add a small type badge pill in the card's bottom metadata row, to the left of the year. No filter tabs — the featured set is too small (3–4 projects).

- [ ] **Step 1: Add the TYPE_BADGE map above the component**

At the top of `Home.jsx`, after the existing `const whatIOffer` definition (around line 52), add:

```jsx
const TYPE_BADGE = {
  design:      { label: 'Design',      cls: 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20' },
  engineering: { label: 'Engineering', cls: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20' },
  ml:          { label: 'ML & Data',   cls: 'bg-teal-50 text-teal-600 border-teal-200 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20' },
  creative:    { label: 'Creative',    cls: 'bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20' },
};
```

- [ ] **Step 2: Insert the badge into each project card**

Locate the card bottom metadata `<div>` in the "Recent work" grid. It currently looks like (lines 374–387):

```jsx
<div className="p-5 flex items-center justify-between">
  <div>
    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-[#aaa] mb-1">
      {project.category}
    </p>
    <h3 className="font-sans text-base md:text-lg font-semibold tracking-tight text-brand-dark dark:text-[#eee] group-hover:text-brand dark:group-hover:text-brand-lime transition-colors duration-200">
      {project.title}
    </h3>
  </div>
  <span className="font-mono text-[11px] text-stone-500 dark:text-[#aaa] pt-0.5 flex-shrink-0">
    {project.year}
  </span>
</div>
```

Replace it with:

```jsx
<div className="p-5 flex items-center justify-between gap-3">
  <div>
    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-[#aaa] mb-1">
      {project.category}
    </p>
    <h3 className="font-sans text-base md:text-lg font-semibold tracking-tight text-brand-dark dark:text-[#eee] group-hover:text-brand dark:group-hover:text-brand-lime transition-colors duration-200">
      {project.title}
    </h3>
  </div>
  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
    <span className="font-mono text-[11px] text-stone-500 dark:text-[#aaa]">
      {project.year}
    </span>
    {project.type && TYPE_BADGE[project.type] && (
      <span className={`font-sans text-[9px] font-semibold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border ${TYPE_BADGE[project.type].cls}`}>
        {TYPE_BADGE[project.type].label}
      </span>
    )}
  </div>
</div>
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 4: Visual check**

```bash
npm run dev
```

Navigate to `http://localhost:5173/portfolio/`. Scroll to "Recent work". Verify:
- Each project card shows a type badge pill bottom-right (e.g. "Design" in orange tint for VNAV ASSOCIATES, GITA APP, LAKSHYA)
- Badge is readable in both light and dark mode
- No layout overflow on narrow screens

- [ ] **Step 5: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "feat(home): add type badge chips to project cards"
```

---

## Task 4: Fix image module rendering in ProjectView

**Files:**
- Modify: `src/components/ProjectView.jsx` (the `renderModule` switch, line 36+)

**Background:** Every project has `{ type: "image", url: "...", caption: "..." }` in its `modules` array, but `renderModule()` has no `case 'image'` — it falls through to `default: return null`. Every case study is visually missing its image panel. This is the highest-priority fix in this spec.

- [ ] **Step 1: Add the `image` case to `renderModule`**

In `ProjectView.jsx`, locate the `renderModule` switch statement. Find the `case 'code':` block (around line 93). Add the `image` case immediately **before** `case 'code':`:

```jsx
case 'image':
  return (
    <div key={index} className="mb-10 md:mb-16">
      <div className="w-full overflow-hidden rounded-sm border border-stone-200 bg-stone-100">
        <img
          src={module.url}
          alt={module.caption || `${project?.title ?? ''} visual`}
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

Note: `project` is available in scope via closure inside `renderModule` since `renderModule` is defined inside the `ProjectView` component body. If you need to reference `project.title` for the `alt` attribute and it's not directly in scope, change the `alt` to just `module.caption || 'Project visual'`.

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Open any project (e.g. GITA APP). Scroll through the case study. Verify:
- A full-width image panel renders where previously nothing appeared
- Caption text renders below the image in monospace uppercase
- Image loads lazily (check DevTools Network tab: the image request fires after the module is in viewport)

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectView.jsx
git commit -m "fix(projectview): render image module that was silently dropped"
```

---

## Task 5: ProjectView light mode isolation + metrics module

**Files:**
- Modify: `src/components/ProjectView.jsx`

**Background:** ProjectView uses `bg-stone-100` and explicit light tokens — no `dark:` variants anywhere. It's already immune to the site's dark mode. We add `colorScheme: 'light'` on the root element to make this explicit and browser-aware (affects scrollbars, form controls). We also add a `metrics` module type for showcasing measurable outcomes as a 3-column stat row.

- [ ] **Step 1: Add `colorScheme: light` to the ProjectView root div**

Locate the root `<div>` in the return statement (line 112):

```jsx
<div ref={scrollRef} data-lenis-prevent className={`fixed inset-0 z-[150] bg-stone-100 overflow-y-auto no-scrollbar ${isExiting ? 'project-close' : 'project-open'}`}>
```

Add `style={{ colorScheme: 'light' }}`:

```jsx
<div
  ref={scrollRef}
  data-lenis-prevent
  style={{ colorScheme: 'light' }}
  className={`fixed inset-0 z-[150] bg-stone-50 overflow-y-auto no-scrollbar ${isExiting ? 'project-close' : 'project-open'}`}
>
```

Note: also changed `bg-stone-100` → `bg-stone-50` to match the main site's warm-light `#fafaf9` surface. `stone-100` is a slightly grey tint; `stone-50` is crisper and consistent with the rest of the site.

- [ ] **Step 2: Add the `metrics` case to `renderModule`**

Add immediately before `case 'image':` (which you added in Task 4):

```jsx
case 'metrics':
  return (
    <div key={index} className="mb-10 md:mb-16 border border-stone-200 rounded-sm overflow-hidden">
      <div className="grid grid-cols-3 divide-x divide-stone-200">
        {module.items.map((item, i) => (
          <div key={i} className="px-6 py-8 text-center bg-white">
            <div className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-none text-stone-900 mb-1">
              {item.value}
              {item.unit && (
                <span className="font-mono text-base text-stone-400 ml-1">{item.unit}</span>
              )}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
```

The `metrics` module shape in data:
```js
{ type: 'metrics', items: [
  { value: '98', unit: '%', label: 'Lighthouse score' },
  { value: '8',  unit: 'wks', label: 'Build time' },
  { value: '700+', unit: '', label: 'Verses indexed' },
]}
```

- [ ] **Step 3: Add a metrics module to one project for testing**

Open `src/data/projects.js`. Find project id 1 (GITA APP). Add a `metrics` module between the last `text` module and the `image` module:

```js
{ type: 'metrics', items: [
  { value: '700+', unit: '',    label: 'Verses indexed' },
  { value: '8',    unit: 'wks', label: 'Build time' },
  { value: '3',    unit: 'x',   label: 'Faster than competitors' },
]},
```

- [ ] **Step 4: Verify build passes**

```bash
npm run build
```

Expected: clean build.

- [ ] **Step 5: Visual check**

```bash
npm run dev
```

Open GITA APP project. Scroll through case study. Verify:
- The 3-column metrics block renders with large serif numbers
- `colorScheme: light` — open DevTools, toggle site to dark mode; ProjectView overlay remains light-toned, scrollbars stay light
- Background is now `stone-50` (not `stone-100`) — slightly cleaner white

- [ ] **Step 6: Commit**

```bash
git add src/components/ProjectView.jsx src/data/projects.js
git commit -m "feat(projectview): add colorScheme isolation, metrics module, fix bg token"
```

---

## Task 6: Final build, lint, and deploy check

**Files:** None (verification only)

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected: 0 errors. Fix any warnings flagged for files touched in Tasks 1–5.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: `✓ built in X.Xs`. Check the `dist/` output for any unexpected chunks.

- [ ] **Step 3: Preview production build locally**

```bash
npm run preview
```

Open `http://localhost:4173/portfolio/`. Run through the full verification checklist:

**Archive (/work):**
- [ ] 5 filter tabs: All (12) · Design (5) · Engineering (5) · ML & Data (1) · Creative (1)
- [ ] Each filter shows correct project subset
- [ ] Active tab is visually distinct; works in dark mode

**Home (/):**
- [ ] "Recent work" cards each show a type badge (bottom-right of metadata row)
- [ ] Badge colours: Design=orange, Engineering=blue, ML=teal, Creative=purple
- [ ] Badges adapt to dark mode correctly

**ProjectView (any project):**
- [ ] Image module renders a full-width image with caption
- [ ] GITA APP shows metrics block (3-column stat row)
- [ ] ProjectView background stays stone-50 (light) even when site is in dark mode
- [ ] No visual regressions to nav arrows, sidebar, process bar

- [ ] **Step 4: Final commit if any lint fixes were made**

```bash
git add -p   # stage only the lint-fix changes
git commit -m "fix(lint): address lint warnings from taxonomy and filter changes"
```

---

## Self-Review Against Spec

**Spec requirement → Task coverage:**

| Spec requirement | Task |
|-----------------|------|
| Add `type` field to all 12 projects | Task 1 |
| Archive filter: 5 type tabs with counts | Task 2 |
| Home cards: type badge chips | Task 3 |
| Fix image module (silent drop bug) | Task 4 |
| ProjectView light mode isolation (`colorScheme`) | Task 5 |
| Metrics module type (stretch) | Task 5 |
| No regressions to dark mode on other pages | Task 6 |
| Build passes | Tasks 2, 3, 4, 5, 6 |

**Out of scope (confirmed):**
- Filter tabs on Home page (curated set too small, badges suffice)
- Removing site-wide dark mode toggle (already correct, no change)
- Archive page redesign beyond filter (correct)

No gaps found. No placeholders. Type names (`type`, `TYPE_BADGE`, `TYPE_FILTERS`, `metrics`, `image`) are consistent across all tasks.
