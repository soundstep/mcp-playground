# Research: Modern Podcast Website

**Feature**: 001-podcast-website  
**Date**: 2025-11-12  
**Purpose**: Research technology decisions and best practices for static podcast website

## Technology Stack Research

### Decision: Next.js 14.x with App Router

**Rationale**:
- **Static Export**: Next.js 14 provides mature `output: 'export'` configuration for pure static sites
- **Performance**: Automatic code splitting, image optimization, and CSS/JS minification out of the box
- **Developer Experience**: TypeScript support, hot reload, clear project structure
- **SEO**: Built-in support for meta tags, sitemap generation, and Open Graph tags
- **Modern React**: App Router uses React Server Components pattern (rendered at build time for static)
- **Accessibility**: Works well with semantic HTML and progressive enhancement

**Alternatives Considered**:
- **Gatsby**: More complex setup, GraphQL required even for simple data
- **Astro**: Excellent for static sites but less mature ecosystem, smaller community
- **Plain HTML/CSS**: No build optimization, manual work for responsive images and SEO
- **Eleventy**: Great static generator but requires more manual setup for modern features

**Best Practices**:
- Use App Router (`app/` directory) not Pages Router for new projects
- Enable static export: `output: 'export'` in `next.config.js`
- Use `next/image` for automatic image optimization
- Implement proper TypeScript interfaces for type safety
- Use dynamic imports for code splitting where needed

### Decision: Tailwind CSS for Styling

**Rationale**:
- **Rapid Development**: Utility-first approach speeds up responsive design
- **Performance**: Purges unused CSS automatically, minimal bundle size
- **Responsive Design**: Built-in breakpoints for mobile/tablet/desktop
- **Modern Design**: Easy to create sleek, contemporary interfaces
- **Customization**: Can configure custom colors, spacing for brand consistency
- **Accessibility**: Includes focus states and screen-reader utilities

**Alternatives Considered**:
- **CSS Modules**: More verbose, requires writing more custom CSS
- **Styled Components**: Adds runtime overhead, not ideal for static sites
- **Plain CSS**: More manual work for responsive design and consistency
- **Bootstrap**: Heavier, harder to achieve custom "sleek" aesthetic

**Best Practices**:
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Create custom components for repeated patterns
- Use `@apply` sparingly for complex repeated patterns
- Configure custom colors in `tailwind.config.js` for brand consistency
- Use JIT mode for faster builds and arbitrary values

### Decision: TypeScript for Type Safety

**Rationale**:
- **Type Safety**: Catch errors at compile time, especially with episode data
- **Better IDE Support**: Autocomplete for episode properties, component props
- **Maintainability**: Clear interfaces make code easier to understand
- **Refactoring**: Safe refactoring with confidence
- **Next.js Integration**: First-class TypeScript support

**Best Practices**:
- Define interfaces for Episode, FAQ, About content
- Use strict mode in `tsconfig.json`
- Avoid `any` type, use proper interfaces
- Export types from centralized `types/` directory

## Audio Playback Research

### Decision: HTML5 Audio Element with Custom Controls

**Rationale**:
- **Native Support**: Works across all modern browsers without additional libraries
- **Accessibility**: Native controls are keyboard accessible and screen-reader friendly
- **Performance**: No additional JavaScript bundle size
- **Progressive Enhancement**: Falls back gracefully if JavaScript disabled
- **Static Compatible**: No server-side processing needed

**Alternatives Considered**:
- **Howler.js**: Adds 20KB+ to bundle, overkill for simple playback
- **React Player**: More complex than needed, targets video primarily
- **Plyr**: Good library but adds weight for features we don't need
- **Wavesurfer.js**: Too heavy for simple audio playback

**Best Practices**:
- Use HTML5 `<audio>` element with `controls` attribute for basic player
- Add custom controls with React state for better styling control
- Implement keyboard shortcuts (spacebar for play/pause)
- Show loading states and handle errors gracefully
- Support common audio formats: MP3 (primary), OGG (fallback)

**Implementation Notes**:
- Single audio player instance to prevent multiple simultaneous playback
- Store current playing episode in React state
- Preload metadata but not full audio (`preload="metadata"`)
- Handle audio events: `play`, `pause`, `ended`, `timeupdate`, `error`

## Mock Data Structure Research

### Decision: TypeScript Data Files

**Rationale**:
- **Type Safety**: Compile-time validation of episode data
- **No Build Step**: Data embedded at compile time, no runtime parsing
- **Simplicity**: Easy to maintain and update episode information
- **Performance**: Data bundled with code, no fetch required

**Best Practices**:
```typescript
// Episode interface
interface Episode {
  id: number;
  title: string;
  description: string;
  publishDate: string; // ISO 8601 format
  duration: string; // "MM:SS" format
  audioUrl: string;
  coverArt: string;
  episodeNumber: number;
  season?: number;
}

// Mock data structure
export const episodes: Episode[] = [
  {
    id: 1,
    title: "Episode Title",
    description: "Episode description...",
    publishDate: "2025-11-01",
    duration: "45:30",
    audioUrl: "/audio/episode-001.mp3",
    coverArt: "/images/episode-001.jpg",
    episodeNumber: 1
  },
  // ... 19 more episodes
];

// Featured episode (reference to first episode or specific one)
export const featuredEpisode = episodes[0];
```

## Responsive Design Research

### Decision: Mobile-First Tailwind Breakpoints

**Rationale**:
- **Mobile-First**: Design for smallest screen first, enhance for larger
- **Constitution Requirement**: Support 320px-1920px range
- **Tailwind Defaults**: Standard breakpoints cover our needs

**Breakpoints**:
- `default`: 320px-639px (mobile)
- `sm:`: 640px+ (large mobile, small tablet)
- `md:`: 768px+ (tablet)
- `lg:`: 1024px+ (desktop)
- `xl:`: 1280px+ (large desktop)

**Best Practices**:
- Navigation: Hamburger menu on mobile, horizontal on desktop
- Episode cards: Stack on mobile, grid on tablet/desktop
- Audio player: Full-width on mobile, inline on desktop
- Typography: Scale font sizes with screen size
- Touch targets: Minimum 44x44px for mobile interactions

## SEO & Metadata Research

### Decision: Next.js Metadata API

**Rationale**:
- **Built-in Support**: App Router has excellent metadata API
- **Static Generation**: All meta tags generated at build time
- **Type Safety**: TypeScript interfaces for metadata

**Implementation**:
```typescript
// In app/layout.tsx
export const metadata: Metadata = {
  title: 'Podcast Name | Modern Podcast Website',
  description: 'Description of the podcast...',
  openGraph: {
    title: 'Podcast Name',
    description: 'Description...',
    images: ['/images/og-image.jpg'],
  },
  robots: 'index, follow',
};
```

**Required Files**:
- `public/sitemap.xml`: List all pages for search engines
- `public/robots.txt`: Allow all crawlers
- Open Graph images: 1200x630px for social sharing
- Favicon: Multiple sizes (16x16, 32x32, 180x180 for Apple)

## Testing Strategy Research

### Decision: Jest + React Testing Library + Playwright

**Rationale**:
- **Component Tests**: Jest + RTL for testing React components in isolation
- **E2E Tests**: Playwright for full user journey testing
- **Accessibility**: RTL encourages accessible queries
- **Speed**: Jest runs fast for component tests, Playwright for critical paths

**Test Coverage**:
- Component tests: AudioPlayer, EpisodeCard, Navigation, FeaturedEpisode
- E2E tests: Landing page load, episode playback, page navigation
- Accessibility tests: Keyboard navigation, screen reader support

**Best Practices**:
- Test user behavior, not implementation details
- Use semantic queries (getByRole, getByLabelText)
- Test responsive behavior with viewport testing
- Mock audio playback in component tests

## Performance Optimization Research

### Decision: Next.js Image Component + Lazy Loading

**Rationale**:
- **Automatic Optimization**: Next.js Image handles WebP/AVIF conversion
- **Lazy Loading**: Images load as they enter viewport
- **Responsive**: Serves correct size for device
- **Static Export Compatible**: Images optimized at build time

**Best Practices**:
```typescript
<Image
  src="/images/episode.jpg"
  alt="Episode title"
  width={400}
  height={400}
  loading="lazy" // Lazy load below fold
  placeholder="blur" // Show blur while loading
/>
```

**Additional Optimizations**:
- Font optimization: Use `next/font` for Google Fonts
- Code splitting: Dynamic imports for heavy components
- CSS purging: Tailwind automatically removes unused styles
- Asset preloading: Critical resources preloaded

## Accessibility Research

### Decision: WCAG 2.1 Level AA Compliance

**Required Implementations**:
- **Semantic HTML**: `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- **Heading Hierarchy**: Proper h1-h6 structure
- **Keyboard Navigation**: All interactive elements focusable and operable
- **Focus Indicators**: Visible focus states on all interactive elements
- **ARIA Labels**: Screen reader descriptions for audio player controls
- **Color Contrast**: 4.5:1 minimum for normal text, 3:1 for large text
- **Alt Text**: Descriptive alt text for all images
- **Skip Links**: "Skip to main content" link for keyboard users

**Testing Tools**:
- Lighthouse accessibility audit
- axe DevTools browser extension
- Manual keyboard navigation testing
- Screen reader testing (VoiceOver on Mac, NVDA on Windows)

## Build & Deployment Research

### Decision: Static Export to CDN

**Build Command**:
```bash
npm run build
# Outputs to /out directory
```

**Deployment Options** (all support Next.js static export):
- **Vercel**: Native Next.js support, zero config
- **Netlify**: Drag & drop or Git integration
- **CloudFlare Pages**: Fast global CDN
- **GitHub Pages**: Free hosting for open source
- **AWS S3 + CloudFront**: Full control, scalable

**Best Practices**:
- Set cache headers for static assets (1 year)
- Enable gzip/brotli compression
- Configure custom domain with HTTPS
- Set up 404 page
- Enable HTTP/2 for better performance

## Summary

All technology decisions align with:
- ✅ Constitution: Static-first, accessible, performant
- ✅ Spec requirements: 4 pages, 20 episodes, responsive, modern design
- ✅ User input: Next.js, static config, embedded data, mobile-ready

No NEEDS CLARIFICATION items remain. Ready for Phase 1 design.
