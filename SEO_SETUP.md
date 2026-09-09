# SEO Setup

Current-state reference for this site's SEO surface. Domain: `https://aniketh.is-a.dev`.

## In place

### Meta tags
- `index.html` carries the baseline title, description, keywords, author,
  robots, theme-color, and canonical tag — used for first paint and for the
  `react-snap` prerendered snapshot of `/`.
- Every routed page (`Home`, `Work`, `About`, `Contact`, `ProjectPage`,
  `NotFound`) overrides these via `react-helmet-async` with its own unique
  title, description, Open Graph, and Twitter Card tags. `ProjectPage`
  generates its Helmet block dynamically per project.
- `NotFound` additionally sets `<meta name="robots" content="noindex, follow" />`
  so 404s don't get indexed.

### Structured data (JSON-LD)
`index.html` has a `Person` + `WebSite` `@graph`: name, job title, employer,
location, alumni, `knowsAbout`, and `sameAs` (GitHub, LinkedIn, X).

### Favicons
`favicon.ico`, `favicon.svg`, `favicon-96x96.png`, and `apple-touch-icon.png`
are present in `public/`.

### robots.txt & sitemap.xml
Both exist in `public/`. `sitemap.xml` lists the site's real routes: `/`,
`/work`, `/about`, `/contact`, and one `/work/:id` entry per project in
`src/data/projects.js` — kept in sync by hand when a project is added or
removed. `npm run build` runs `tools/update-sitemap.js` first, which refreshes
every `<lastmod>` to the current date (it does not regenerate the URL list).

### Prerendering
`react-snap` (via the `postbuild` script) prerenders every route listed in
`package.json`'s `reactSnap.include` to static HTML, so each page ships with
its Helmet-rendered meta tags already in the markup for crawlers that don't
execute JS. That list must stay in sync with the actual routes — same
manual-sync caveat as the sitemap.

## Known manual-sync points

A few facts (name, job title, employer, location, years of experience,
project count) are centralized in `src/data/profile.js` for the React app, so
they can't drift the way they used to. `index.html` is plain static HTML with
no build-time templating, so its copy of these facts is hand-maintained — if
one of them changes, update both `src/data/profile.js` and `index.html`.

## Testing checklist

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/) / Lighthouse in Chrome DevTools

## Not set up

- Google Search Console verification / sitemap submission.
- Google Analytics (not wired into `index.html`).
