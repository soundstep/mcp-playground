# Implementation Plan: Modern Podcast Website

**Branch**: `001-podcast-website` | **Date**: 2025-11-12 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-podcast-website/spec.md`

## Summary

Build a modern, sleek podcast website with four pages (landing, episodes, about, FAQ) using Next.js static site generation. The site will feature 20 mock podcast episodes with embedded data, responsive design for mobile/tablet/desktop, and an audio player for episode playback. All content is static with no backend or database required.

## Technical Context

**Language/Version**: TypeScript 5.x with Next.js 14.x (App Router)  
**Primary Dependencies**: Next.js (static export), React 18.x, Tailwind CSS for styling  
**Storage**: N/A (mock data embedded in TypeScript files)  
**Testing**: Jest with React Testing Library for component tests, Playwright for E2E tests  
**Target Platform**: Static hosting (Vercel, Netlify, CloudFlare Pages, or any CDN)  
**Project Type**: Web application (Next.js static site)  
**Performance Goals**: < 3 seconds page load on 3G, < 200ms interaction response, Lighthouse score > 90  
**Constraints**: Static export only (no server-side runtime), WCAG 2.1 Level AA compliance, responsive 320px-1920px  
**Scale/Scope**: 4 pages, 20 episodes, client-side audio playback, SEO optimized

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Static-First Architecture ✅

**Status**: PASS

- Next.js configured with `output: 'export'` for static HTML generation
- All 20 episodes defined as TypeScript data structures
- No server-side runtime or API routes needed
- Audio playback uses HTML5 `<audio>` element (client-side)
- All pages pre-rendered at build time

### II. Accessibility & Standards Compliance ✅

**Status**: PASS

- WCAG 2.1 Level AA compliance required in spec (FR-015)
- Semantic HTML5 with proper heading hierarchy
- Keyboard navigation for all interactive elements
- Audio player with accessible controls (play/pause/seek)
- Progressive enhancement: content accessible without JavaScript
- ARIA labels for screen readers

### III. Performance & Optimization ✅

**Status**: PASS

- Target: < 3 seconds on 3G (matches constitution requirement)
- Next.js Image component with automatic optimization
- Static generation eliminates server response time
- CSS/JS automatically minified by Next.js build
- Lazy loading for episode list images
- WebP/AVIF image formats with fallbacks

### Technical Standards Compliance ✅

**Status**: PASS

- Modern standards: HTML5, ES6+, CSS3 via Tailwind
- Browser support: Chrome, Firefox, Safari, Edge (current + previous)
- Build process: Next.js produces optimized static files
- Asset management: Next.js Image handles WebP/AVIF with fallbacks
- SEO: Meta tags, Open Graph, sitemap.xml, robots.txt generated

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A for static site)
└── checklists/
    └── requirements.md  # Already created
```

### Source Code (repository root)

```text
podcast-website/
├── public/
│   ├── audio/           # Mock episode audio files
│   ├── images/          # Episode cover art, podcast logo
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout with navigation
│   │   ├── page.tsx     # Landing page (featured episode)
│   │   ├── episodes/
│   │   │   └── page.tsx # Episodes list page
│   │   ├── about/
│   │   │   └── page.tsx # About page
│   │   └── faq/
│   │       └── page.tsx # FAQ page
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── AudioPlayer.tsx
│   │   ├── EpisodeCard.tsx
│   │   ├── FeaturedEpisode.tsx
│   │   └── FAQItem.tsx
│   ├── data/
│   │   ├── episodes.ts  # Mock episode data
│   │   ├── faq.ts       # FAQ data
│   │   └── about.ts     # About content
│   ├── types/
│   │   └── index.ts     # TypeScript interfaces
│   └── styles/
│       └── globals.css  # Tailwind imports
├── __tests__/
│   ├── components/      # Component unit tests
│   └── e2e/             # Playwright E2E tests
├── next.config.js       # Static export config
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

**Structure Decision**: Web application structure using Next.js App Router. Chosen because:

- App Router is the modern Next.js standard with better static generation
- Clear separation: pages in `app/`, reusable components in `components/`, data in `data/`
- All mock data centralized in `src/data/` for easy maintenance
- Public assets served directly from `public/` directory

## Complexity Tracking

> No constitution violations - all principles satisfied by Next.js static export approach.

N/A - No complexity justification needed.
