# OpenClaw Docs Site Design (2026-03-10)

## Goals
- Build a Vue 3 + Vite documentation site for OpenClaw CLI with bilingual (ZH/EN) content.
- Emphasize a premium, glassmorphism aesthetic with translucent layers and soft depth.
- Provide a comprehensive, command-centric reference that is easy to scan.

## Architecture
- Static SPA using Vue 3 + Vue Router. No backend.
- Content in `src/content/{zh,en}` as Markdown.
- Navigation defined in locale JSON files and rendered into the sidebar.
- Route structure: `/:lang(zh|en)/:slug`, with automatic redirects and locale persistence.

## UX & Layout
- Desktop: split view with sticky sidebar + content column.
- Mobile: top bar + slide-in navigation drawer.
- Language toggle preserves page context by switching the locale prefix.
- Content styling includes strong typographic hierarchy, code blocks, callouts, and tables.

## Visual System
- Background: layered gradients with soft aurora blobs and subtle noise texture.
- Glass panels: translucent surfaces with `backdrop-filter` blur + thin borders.
- Typography: expressive serif for headings, modern sans for body, mono for code.

## Data Flow
- Resolve markdown via `import.meta.glob` with raw loaders.
- Render markdown using `markdown-it` with anchors and external link attributes.
- If a locale file is missing, show a fallback notice and try the other locale.

## Error Handling
- Unknown routes redirect to the locale default page.
- Missing content returns a friendly ¡°translation pending¡± panel.

## Testing
- Manual:
  - Verify navigation, active link highlight, and mobile drawer.
  - Verify language switch preserves page slug.
  - Run `npm run build` and `npm run preview` to validate static routing.
