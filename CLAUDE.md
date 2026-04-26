# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint on all TS/TSX files
npm run preview  # Preview production build locally
```

There are no tests in this project.

## Architecture

Personal portfolio site built with React 19, TypeScript, Vite, and Mantine 8.

**Routing:** SPA via React Router v7. Two routes: `/` (Home) and `/projects/:slug` (ProjectDetail). The router and Mantine theme are configured in `src/main.tsx`. `src/App.tsx` wraps all pages in an AppShell with Nav and Footer.

**Content:** All project data lives in `src/data/projects.ts` as a typed TypeScript array. Each project has metadata (title, slug, stack, links) and a `content` field containing a Markdown string. Adding a new project means adding an entry there — no CMS or external data source. Project images go in `public/<project-slug>/`.

**Navigation visibility:** `src/config/nav.ts` exports boolean flags that control which nav items are shown. Toggle these to show/hide nav links without editing the Nav component.

**Styling:** Mantine handles all styling via CSS-in-JS. The theme (dark mode, amber primary color, custom global styles) is defined in `src/main.tsx`. Breakpoints used are `48em` (768px) and `991px`. Responsive behavior uses `useMediaQuery` from Mantine.

**Markdown rendering:** `src/components/Markdown.tsx` maps standard Markdown elements to Mantine components. When adding new Markdown features to case studies, update this component if a custom renderer is needed.

**SEO:** Meta tags, Open Graph, and Twitter card data are in `index.html`. `public/sitemap.xml` and `public/robots.txt` are static files served directly.
