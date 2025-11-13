# Tech Talks Daily - Modern Podcast Website

A sleek, modern podcast website built with Next.js 14, TypeScript, and Tailwind CSS. Features a landing page with featured episode, full episode catalog with search, about page with host bios, and FAQ section with accordion UI.

## ✨ Features

### Core Functionality
- 🎧 **Featured Episode**: Landing page showcases the latest episode with full audio player
- 📻 **Episode Catalog**: Browse all 20 episodes with search functionality
- 🔍 **Search**: Filter episodes by title or topic
- 🎵 **Audio Player**: Custom-built player with play/pause, seek, volume control, and keyboard shortcuts
- ℹ️ **About Page**: Learn about the podcast mission, story, and host bios
- ❓ **FAQ Section**: Collapsible accordion UI organized by category

### Technical Features
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ♿ **Accessibility**: WCAG 2.1 Level AA compliance with ARIA labels and keyboard navigation
- ⚡ **Performance**: Static site generation for instant load times
- 🎨 **Modern Design**: Sleek gradient backgrounds and smooth transitions
- 🔐 **SEO Optimized**: Meta tags, sitemap, robots.txt, and semantic HTML

## 🛠 Tech Stack

- **Framework**: Next.js 16.0.2 (App Router with static export)
- **Language**: TypeScript 5.x with strict mode
- **Styling**: Tailwind CSS v4 (CSS-based configuration)
- **Fonts**: Geist Sans & Geist Mono
- **Build**: Static site generation (`output: 'export'`)
- **Data**: TypeScript-embedded mock data (20 episodes, 10 FAQs)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd podcast-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Development Commands

```bash
# Start dev server with hot reload
npm run dev

# Build static site for production
npm run build

# Test production build locally
npx serve out

# Lint code
npm run lint
```

### Build for Production

```bash
# Build static site
npm run build

# Output will be in the 'out' directory
# All pages are pre-rendered as static HTML
```

## 📁 Project Structure

```
podcast-website/
├── public/
│   ├── audio/              # Episode audio files (MP3)
│   ├── images/             # Episode cover art, host photos
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Crawler instructions
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── episodes/       # Episodes catalog page
│   │   ├── faq/            # FAQ page
│   │   ├── layout.tsx      # Root layout with navigation
│   │   ├── page.tsx        # Landing page (featured episode)
│   │   ├── not-found.tsx   # Custom 404 page
│   │   └── globals.css     # Tailwind CSS v4 configuration
│   ├── components/
│   │   ├── AudioPlayer.tsx # Custom audio player
│   │   ├── EpisodeCard.tsx # Episode card component
│   │   └── Navigation.tsx  # Responsive navigation
│   ├── data/
│   │   ├── episodes.ts     # 20 episode mock data
│   │   ├── faq.ts          # 10 FAQ items
│   │   └── about.ts        # About content
│   └── types/
│       └── index.ts        # TypeScript interfaces
├── next.config.ts          # Static export configuration
├── tsconfig.json           # TypeScript strict mode
└── package.json            # Dependencies
```

## 🎨 Design Features

- **Color Scheme**: Dark theme with blue (#2563eb) and purple (#8b5cf6) accents
- **Gradients**: Smooth gradient backgrounds throughout
- **Typography**: Geist Sans for body text, bold headings
- **Animations**: Smooth transitions on hover and interaction
- **Cards**: Elevated cards with shadows for depth

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`)
- ARIA labels on all interactive elements
- Keyboard navigation support (Tab, Enter, Spacebar)
- Skip-to-content link for screen readers
- Focus indicators with blue ring (`focus:ring-2`)
- Alt text on all images
- WCAG 2.1 Level AA compliant color contrast

## 🔧 Customization

### Update Episode Data

Edit `src/data/episodes.ts` to add/modify episodes:

```typescript
export const episodes: Episode[] = [
  {
    id: 1,
    episodeNumber: 20,
    title: "Your Episode Title",
    description: "Episode description...",
    publishDate: "2025-05-15",
    duration: "45:30",
    audioUrl: "/audio/episode-020.mp3",
    coverArt: "/images/episode-020.jpg",
    season: 1
  },
  // ... more episodes
];
```

### Update About Content

Edit `src/data/about.ts` to customize mission, story, hosts, and contact info.

### Update FAQ

Edit `src/data/faq.ts` to add/modify questions:

```typescript
export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Your question?",
    answer: "Your answer...",
    category: "general",
    order: 1
  },
  // ... more FAQs
];
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect via GitHub for automatic deployments
```

### Deploy to Netlify

```bash
# Build command: npm run build
# Publish directory: out
```

### Deploy to Cloudflare Pages

```bash
# Build command: npm run build
# Build output directory: out
```

## Project Structure

```
podcast-website/
├── public/           # Static assets
│   ├── audio/        # Episode audio files
│   └── images/       # Cover art and images
├── src/
│   ├── app/          # Next.js pages (App Router)
│   ├── components/   # Reusable React components
│   ├── data/         # Mock data (episodes, FAQ, about)
│   └── types/        # TypeScript interfaces
├── next.config.ts    # Next.js configuration
└── package.json
```

## Development

- **Local dev**: `npm run dev` - Starts dev server on port 3000
- **Build**: `npm run build` - Creates production build
- **Lint**: `npm run lint` - Runs ESLint

## License

MIT

## Author

Modern Podcast Team
