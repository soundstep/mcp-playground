# Project Context

## Purpose

This is an Astro-based blog application built from the Astro blog starter template. The project provides a minimal, performant blogging platform with support for Markdown and MDX content, RSS feeds, and SEO optimization. It's designed to be lightweight and easily customizable.

## Tech Stack

- **Framework**: Astro 5.16.0 (static site generator with island architecture)
- **Language**: TypeScript (with strict null checks enabled)
- **Content**: Markdown & MDX support via @astrojs/mdx
- **Styling**: Minimal CSS (custom styles in `src/styles/global.css`)
- **Image Processing**: Sharp for optimized image handling
- **Integrations**:
  - @astrojs/sitemap - Automatic sitemap generation
  - @astrojs/rss - RSS feed support
- **Package Manager**: pnpm (inferred from README)
- **Node**: ES Modules (type: "module" in package.json)

## Project Conventions

### Code Style

- **TypeScript Config**: Extends `astro/tsconfigs/strict` with strict null checks enabled
- **File Extensions**: `.astro` for components, `.ts` for TypeScript, `.md`/`.mdx` for content
- **Component Naming**: PascalCase (e.g., `BaseHead.astro`, `HeaderLink.astro`)
- **Constants**: UPPER_SNAKE_CASE for site-wide constants (see `src/consts.ts`)
- **Imports**: Use ES module syntax

### Architecture Patterns

- **Content Collections**: Blog posts are managed via Astro's Content Collections in `src/content/blog/`
  - Schema validation using Zod for frontmatter (title, description, pubDate, updatedDate, heroImage)
  - Loaded via glob pattern matching `**/*.{md,mdx}`
- **Component Structure**:
  - `src/components/` - Reusable Astro components
  - `src/layouts/` - Page layout templates (e.g., `BlogPost.astro`)
  - `src/pages/` - File-based routing with `.astro` files
- **Static Assets**: Placed in `public/` directory (fonts, etc.)
- **Routing**: File-based routing with dynamic routes (e.g., `[...slug].astro` for blog posts)

### Testing Strategy

No testing framework currently configured. Consider adding Vitest or similar for future testing needs.

### Git Workflow

- **Current Branch**: main
- **Default Branch**: main
- Follow OpenSpec conventions for change proposals (see `openspec/AGENTS.md`)

## Domain Context

This is a personal blog application with the following content requirements:

- Blog posts must include: title, description, pubDate
- Optional fields: updatedDate, heroImage
- Content is written in Markdown or MDX format
- Posts support frontmatter for metadata

The site is inspired by Bear Blog and prioritizes minimalism and performance (targets 100/100 Lighthouse scores).

## Important Constraints

- Uses Astro's strict TypeScript configuration
- All content must validate against the defined Zod schema in `content.config.ts`
- Site URL is currently set to example.com (should be updated for production)
- Must maintain compatibility with static site generation (no server-side rendering by default)

## External Dependencies

- **Astro Documentation**: <https://docs.astro.build>
- **Content Collections Guide**: <https://docs.astro.build/en/guides/content-collections/>
- **Sharp**: Image optimization library (platform-specific native bindings)
- No external APIs or services currently integrated
- RSS feed generated at `/rss.xml`
