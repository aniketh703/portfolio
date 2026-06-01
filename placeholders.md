# Placeholder Content Documentation

All placeholder content is clearly marked below. Replace each item before launch.

---

## 1. Images

### About Page (`src/pages/Resume.jsx`)

| Section | Placeholder | Description | Replacement |
|---|---|---|---|
| Hero — Photo | `[Photo placeholder]` label on a `bg-stone-200` div | Personal headshot, aspect ratio ~3:4 | High-res portrait photo; recommended 600×800px. Import as `<img>` or use a `<LazyImage>` component. |

### Projects Page (`src/pages/Archive.jsx`)

| Section | Placeholder | Description | Replacement |
|---|---|---|---|
| All project cards | `<GenerativeArt>` canvas | Algorithmic art seeded by project ID + color | Real project screenshots or mockups at 800×600px. Replace the `<GenerativeArt>` block with `<LazyImage src="..." alt="..." />` per card. |

### Home — Recent Work (`src/pages/Home.jsx`)

| Section | Placeholder | Description | Replacement |
|---|---|---|---|
| Featured project grid | `<GenerativeArt>` canvas | Same as above, 4 featured projects | Real hero screenshots. First card spans full width (16/7 ratio), remaining cards are 4/3. |

### ProjectView (`src/components/ProjectView.jsx`)

| Section | Placeholder | Description | Replacement |
|---|---|---|---|
| Header art | `<GenerativeArt id={project.id}>` | Full-width decorative header art | Optional: replace with a project hero image. Keep GenerativeArt as fallback. |
| Fig 1.1 render | `<GenerativeArt id={project.id + 10}>` | Secondary artwork in case study body | Real project render, mockup, or screenshot. |

---

## 2. Text Content

### Blog Page (`src/pages/Blog.jsx`)

All 6 blog posts are placeholder articles. Each has:
- Placeholder title, excerpt, tags, and date.
- A note at the bottom of the page: *"Posts above are placeholder content. Real articles will be published here."*

To replace: update the `posts` array in `Blog.jsx` with real post data, or connect to a CMS/MDX pipeline.

| Post ID | Placeholder Title |
|---|---|
| 1 | Designing for Complexity: Lessons from Enterprise SaaS |
| 2 | Why I Stopped Using Opacity for Text Contrast |
| 3 | Building a Dark Mode That Actually Works |
| 4 | The Case for Generative Art in Portfolio Design |
| 5 | From Figma to Production: A Practical Handoff Checklist |
| 6 | TypeScript in Design Systems: Worth the Overhead? |

### About Page (`src/pages/Resume.jsx`)

| Field | Placeholder Value | Notes |
|---|---|---|
| Experience — PanTerra description | Generic sentence about enterprise SaaS dashboards | Update with specific project outcomes and metrics |
| Experience — Q-DITS description | Generic internship summary | Update with specific deliverables |
| Education institution | Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya | Verify spelling and add GPA/honors if desired |
| Skills lists | Pre-populated skill tags | Add/remove to match current stack |

### Home — Hero (`src/pages/Home.jsx`)

| Field | Placeholder Value | Notes |
|---|---|---|
| Tagline | "Based in Hyderabad. I design and build digital products..." | Personalise tone and update if location changes |
| Availability status | "Available for projects" (green dot) | Change to "Unavailable" or remove when not taking work |

### Testimonials (`src/components/Testimonials.jsx`)

| Field | Placeholder Value | Notes |
|---|---|---|
| Author — PanTerra | "Product Team Lead" | Replace with real name once permission is obtained |
| Author — Q-DITS | "Engineering Mentor" | Replace with real name once permission is obtained |

### ProjectView — Fallback Text (`src/components/ProjectView.jsx`)

When a project has no `modules` array, the component renders:

| Field | Fallback text |
|---|---|
| Challenge | "Defining the problem space required a deep dive into user behavior and systemic inefficiencies." |
| Solution | "By simplifying the core interaction loop, I was able to create a system that feels both novel and intuitive." |

These are generic. Ensure every project in `src/data/projects.js` has a proper `modules` array.

---

## 3. Data — `src/data/projects.js`

| Project | Status | Missing |
|---|---|---|
| GITA APP | Has full `modules` array | Screenshot / hero image |
| LAKSHYA | Has full `modules` array | Screenshot / hero image |
| All others | Check `modules` array | Add real screenshots; verify live/repo URLs |

---

## 4. Contact / Social Links

All links are live and should be verified before launch:

| Link | Current Value | Check |
|---|---|---|
| Email | `anikethvustepalle03@gmail.com` | ✓ Confirm inbox is monitored |
| WhatsApp | `+91-9311761114` | ✓ Confirm number is active |
| GitHub | `github.com/aniketh703` | ✓ |
| LinkedIn | `linkedin.com/in/aniketh-vustepalle/` | ✓ |

---

## 5. Replacement Instructions

1. **Photos**: Place image files in `public/images/`. Reference as `src="/portfolio/images/photo.jpg"`.
2. **Project screenshots**: Same as above. Use `<LazyImage>` component (`src/components/ui/LazyImage.jsx`) for lazy loading.
3. **Blog posts**: Either edit the `posts` array in `Blog.jsx` directly, or wire up an MDX/CMS data source.
4. **OG image**: Replace `public/og-image.jpg` with a real 1200×630px social preview image.
5. **Favicon**: Replace `public/favicon.ico`, `favicon.svg`, `favicon-96x96.png`, `apple-touch-icon.png` with branded assets.
