# OpenClaw Docs

[English](./README.md) | [简体中文](./README.zh-CN.md)

OpenClaw Docs is a bilingual documentation site built with Vue 3 and Vite.
It is designed for OpenClaw CLI guides, command references, and scenario-based usage docs.

## Goals

- Provide a clear and searchable CLI documentation entry point.
- Support Chinese/English language switching and preference memory.
- Keep reading experience clean on desktop and mobile.
- Offer stable navigation, copy-command UX, and quick back-to-top behavior.

## Features

- Bilingual docs: `zh` / `en`
- Auto redirect from `/` to preferred language default page
- Markdown-based pages loaded by navigation config
- One-click command copy (code blocks and table commands)
- Collapsible side navigation
- Fixed top navigation while scrolling
- Back-to-top button at bottom-right
- Footer copyright text

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor)
- [markdown-it-link-attributes](https://github.com/crookedneighbor/markdown-it-link-attributes)

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Default URL:

- `http://localhost:5173`

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev`: start Vite dev server
- `npm run build`: build production output to `dist/`
- `npm run preview`: preview production build locally

## Project Structure

```text
OpenClaw/
|- public/                    # static assets (logo, etc.)
|- src/
|  |- components/
|  |  |- TopBar.vue           # top navigation
|  |  |- SideNav.vue          # side navigation
|  |  `- ContentView.vue      # markdown render + copy actions
|  |- content/
|  |  |- zh/*.md              # Chinese docs
|  |  |- en/*.md              # English docs
|  |  |- nav.zh.json          # Chinese nav config
|  |  |- nav.en.json          # English nav config
|  |  `- index.js             # content loading + language preference
|  |- styles/
|  |  `- base.css             # global styles + responsive layout
|  |- App.vue                 # app layout container
|  |- router.js               # route rules + redirects
|  `- main.js                 # app entry
|- dist/                      # build output
|- index.html
|- package.json
|- README.md
`- README.zh-CN.md
```

## Route Rules

- `/` -> redirect to `/{lang}/{defaultSlug}`
- `/:lang(zh|en)` -> redirect to default page for that language
- `/:lang(zh|en)/:slug` -> documentation page
- unmatched routes -> redirect to preferred language default page

## Content Maintenance

1. Add or edit markdown pages in `src/content/zh` or `src/content/en`
2. Register page entries in `nav.zh.json` / `nav.en.json`
3. Keep the same slug between languages whenever possible

## Deployment

Deploy `dist/` to any static hosting platform, for example:

- GitHub Pages
- Vercel
- Netlify
- Nginx static hosting

## License

Copyright (c) LnDev
