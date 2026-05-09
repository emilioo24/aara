# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev         # Start dev server at localhost:4321
pnpm build       # Build production site to ./dist/
pnpm preview     # Preview production build locally
pnpm astro check # Type-check .astro files
```

Requires Node >=22.12.0.

## Architecture

This is an [Astro 6](https://astro.build) project using the basics starter template. Astro's file-based routing maps `src/pages/*.astro` directly to URL routes.

- `src/pages/` — routes; each `.astro` file is a page
- `src/layouts/` — shell components wrapping pages via `<slot />`
- `src/components/` — reusable `.astro` components
- `src/assets/` — images and SVGs imported directly in components (Astro optimizes these at build time)
- `public/` — static assets served as-is (no processing)

Astro components use a fenced frontmatter block (`---`) for server-side TypeScript, followed by HTML template. Scoped `<style>` blocks are supported per-component. TypeScript is configured in strict mode via `astro/tsconfigs/strict`.
