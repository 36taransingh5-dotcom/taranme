# taran-portfolio

Personal portfolio site for Taran Pal Singh, built as a single-page React app with sections for About, Experience, Projects, Skills, and Contact. Includes a full-page intro animation, a light/dark theme switcher, and background music playback.

> Note: this repository is an earlier build of the portfolio. The currently live site is served from a separate repository (`36taransingh5-dotcom.github.io`), not from this one.

## Features

- Single-page layout (`Home`) composed of Navbar, Hero, About, Experience, Projects, Skills, and Contact sections
- Full-screen "portal" intro animation shown once per session (tracked via `sessionStorage`)
- Light/dark theme provider with a switchable toggle
- Background audio player with context-based state (two music tracks in `client/public`)
- Client-side routing via `wouter`, with a 404 fallback page
- UI built on Radix primitives wrapped as a local shadcn/ui-style component library (`client/src/components/ui`)
- Google Maps integration component (`Map.tsx`)
- Deploys automatically to GitHub Pages via a GitHub Actions workflow

## Tech stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS 4
- **UI components:** Radix UI primitives, `class-variance-authority`, `lucide-react` icons, `framer-motion` for animation
- **Routing:** `wouter`
- **Forms/validation:** `react-hook-form`, `zod`, `@hookform/resolvers`
- **Backend (production static server):** Express (serves the built static assets)
- **Tooling:** pnpm, Prettier, `esbuild` (bundles the server), `tsx`, Vitest
- **Deployment:** GitHub Actions -> GitHub Pages

## Project structure

```
client/               Vite app root
  index.html
  public/              static assets (audio files, etc.)
  src/
    components/        page sections and shared UI primitives (components/ui)
    contexts/           ThemeContext, AudioContext
    hooks/               custom hooks (useMobile, useScrollReveal, ...)
    pages/               Home, NotFound
    App.tsx, main.tsx
server/
  index.ts             Express server that serves the built static site
shared/
  const.ts             constants shared between client and server
patches/               pnpm patch for the `wouter` dependency
.github/workflows/     GitHub Pages deploy workflow
```

## Setup

Requires Node.js and pnpm (the repo pins `pnpm@10.4.1` via the `packageManager` field).

```bash
pnpm install
```

## Usage

Run the app locally in development mode (Vite dev server with HMR):

```bash
pnpm dev
```

Type-check the project:

```bash
pnpm check
```

Build for production (builds the client with Vite and bundles the Express server with esbuild into `dist/`):

```bash
pnpm build
```

Run the production build locally:

```bash
pnpm start
```

Preview the built client only:

```bash
pnpm preview
```

Format the codebase with Prettier:

```bash
pnpm format
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which installs dependencies, runs `pnpm run build`, and publishes the contents of `dist/public` to GitHub Pages. The Vite config sets `base: "/taranme/"`, matching a GitHub Pages project site served from this repo's name.
