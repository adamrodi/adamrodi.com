# Improvement Ideas for adamrodi.com

## Snapshot of current state

- Single-page portfolio + project detail pages built with React, TypeScript, Vite, Mantine, and React Router.
- Case-study content is hardcoded in `src/data/projects.ts` and rendered through a custom markdown renderer.
- Routing currently includes only home and project detail routes.
- Basic SEO/static assets exist (`robots.txt`, `sitemap.xml`, `og.png`, favicon).

## Prioritized roadmap

### 1) Content architecture: move project case studies out of source code
**Problem:** `src/data/projects.ts` is very large and couples content updates to code deployments.

**Idea:** Move each project into `content/projects/<slug>.md` (frontmatter + markdown body) and load content at build time.

**Why it helps:**
- Easier writing/editing workflow.
- Cleaner PR diffs for content-only changes.
- Better long-term scalability as more projects are added.

**Implementation sketch:**
- Add a parser step using Vite `import.meta.glob` + frontmatter parser.
- Keep a typed schema (zod or io-ts) to validate content shape.
- Generate a map keyed by slug so existing route behavior stays the same.

### 2) SEO and metadata by route
**Problem:** There is no clear per-page meta title/description/open graph handling in route components.

**Idea:** Add route-level metadata generation for home and each project detail page.

**Why it helps:**
- Better social previews and search indexing.
- Better CTR when links are shared.

**Implementation sketch:**
- Use a head management approach (e.g., `react-helmet-async`) or explicit document title/meta updates in route components.
- Add canonical URLs and project-specific OG image references.

### 3) Accessibility pass (high leverage)
**Problem:** Most components are accessible-minded, but markdown-rendered media and hash navigation should be validated with keyboard/screen-reader testing.

**Idea:** Run an accessibility pass and close gaps.

**Why it helps:**
- Improves usability for all users.
- Reduces risk of regressions as content grows.

**Implementation sketch:**
- Add `eslint-plugin-jsx-a11y`.
- Run Lighthouse + axe checks.
- Confirm heading hierarchy and focus order in project detail pages.
- Ensure image-opening button labeling distinguishes each image contextually.

### 4) Add lightweight analytics / event telemetry
**Problem:** There is no visible measurement of user behavior (project clicks, resume downloads, outbound link usage).

**Idea:** Track a minimal set of events.

**Why it helps:**
- Enables evidence-based content improvements.
- Helps decide which projects to feature first.

**Implementation sketch:**
- Add privacy-conscious analytics (e.g., Plausible/Umami).
- Track: hero CTA clicks, project card clicks, project outbound repo/live demo clicks, resume downloads.

### 5) Performance optimization for media-heavy sections
**Problem:** Hero and project images are high-value but potentially costly if not fully optimized.

**Idea:** Add stronger image delivery strategy.

**Why it helps:**
- Faster LCP and better mobile experience.
- Lower bandwidth costs.

**Implementation sketch:**
- Use responsive image sets (`srcSet`, sizes).
- Add explicit width/height to reduce layout shift.
- Preload critical hero image where appropriate.
- Evaluate AVIF/WebP variants for all large assets.

### 6) Improve navigation robustness for hash links and route transitions
**Problem:** Nav has custom hash/scroll logic; as site complexity grows, edge cases become more likely.

**Idea:** Encapsulate hash scrolling into a tested utility/hook.

**Why it helps:**
- Easier to reason about behavior.
- Reduces regressions when adding pages.

**Implementation sketch:**
- Create `useHashNavigation` hook with unit tests.
- Standardize behavior for: same-page hash, cross-page hash, missing target, back/forward nav.

### 7) Add test foundation (unit + smoke E2E)
**Problem:** No testing scripts are currently defined.

**Idea:** Add pragmatic baseline tests.

**Why it helps:**
- Safer refactors (especially around markdown rendering + navigation).
- Better confidence before deploy.

**Implementation sketch:**
- Unit: Vitest + React Testing Library for `Nav`, `ProjectDetail`, and `Markdown` component rendering.
- E2E smoke: Playwright for home load, project route load, key CTA links.

### 8) Tighten linting and quality gates
**Problem:** ESLint appears to be base-level; type-aware and accessibility rules are not yet evident.

**Idea:** Upgrade lint config and add CI checks.

**Why it helps:**
- Prevents subtle runtime/UX defects earlier.
- Consistent code quality as project grows.

**Implementation sketch:**
- Enable type-aware ESLint rules.
- Add `jsx-a11y` and import/order rules.
- Add CI workflow to run lint + build + tests on PRs.

### 9) Improve README and contributor onboarding
**Problem:** README is still Vite boilerplate and does not describe the actual portfolio project.

**Idea:** Replace README with project-specific documentation.

**Why it helps:**
- Better first impression for recruiters/collaborators.
- Lower ramp-up cost for future contributors.

**Implementation sketch:**
- Add project overview, local dev instructions, deployment notes, content model, and architecture diagram.

### 10) Add a changelog or “What’s new” section
**Problem:** Iterative improvements are not surfaced publicly.

**Idea:** Add a small changelog page or section.

**Why it helps:**
- Shows active maintenance.
- Adds narrative for portfolio growth over time.

## Suggested execution order (4-week incremental)

1. **Week 1:** README rewrite + lint upgrades + CI checks.
2. **Week 2:** Test baseline (unit + smoke E2E).
3. **Week 3:** Content extraction from TS into markdown/frontmatter.
4. **Week 4:** SEO metadata + analytics + performance polishing.

## “Quick wins” you can ship in one sitting

- Replace boilerplate README with project-specific docs.
- Add page titles for home + project detail routes.
- Track resume click and project card click events.
- Add one smoke test that verifies primary routes render.
