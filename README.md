# adamrodi.com

Personal portfolio site for Adam Rodi, built with React + TypeScript + Vite.

## Tech stack

- React 19
- TypeScript
- Vite
- Mantine UI
- React Router
- React Markdown + remark-gfm

## Routes

- `/` — landing page with hero, featured projects, and about section
- `/projects/:slug` — detailed case-study pages rendered from markdown content in `src/data/projects.ts`

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## Notes

- Theme and global styles are configured in `src/main.tsx`.
- Navigation visibility flags live in `src/config/nav.ts`.
- Static assets are served from `public/`.
