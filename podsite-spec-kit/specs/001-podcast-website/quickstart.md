# Quickstart Guide: Modern Podcast Website

**Feature**: 001-podcast-website  
**Date**: 2025-11-12  
**Purpose**: Step-by-step guide for developers to build the podcast website

## Prerequisites

- Node.js 22.x or later
- pnpm package manager
- Code editor (VS Code recommended)
- Git (for version control)
- Basic knowledge of React and TypeScript

## Project Setup

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest podcast-website --typescript --tailwind --app --eslint --use-pnpm
cd podcast-website
```

**Configuration prompts**:

- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ `src/` directory: Yes
- ✅ App Router: Yes
- ❌ Import alias: No (use default @/*)

### 2. Configure Static Export

Edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
```

### 3. Project Structure

Create the following directory structure:

```bash
mkdir -p src/components
mkdir -p src/data
mkdir -p src/types
mkdir -p public/audio
mkdir -p public/images
mkdir -p __tests__/components
mkdir -p __tests__/e2e
```

## Core Implementation Steps

### Step 1: Define TypeScript Interfaces

Create `src/types/index.ts`:

```typescript
export interface Episode {
  id: number;
  episodeNumber: number;
  title: string;
  description: string;
  publishDate: string;
  duration: string;
  audioUrl: string;
  coverArt: string;
  season?: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: 'listening' | 'submission' | 'general' | 'technical';
  order: number;
}

export interface Host {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

export interface ContactInfo {
  email?: string;
  social: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface AboutContent {
  title: string;
  tagline: string;
  mission: string;
  story: string;
  hosts: Host[];
  contact: ContactInfo;
}
```

### Step 2: Create Mock Data

Create `src/data/episodes.ts`:

```typescript
import { Episode } from '@/types';

export const episodes: Episode[] = [
  {
    id: 1,
    episodeNumber: 1,
    title: "Welcome to the Podcast",
    description: "In this inaugural episode, we introduce the podcast and discuss what's to come. We explore our mission, share personal stories, and set the stage for an exciting journey ahead.",
    publishDate: "2025-01-15",
    duration: "42:30",
    audioUrl: "/audio/episode-001.mp3",
    coverArt: "/images/episode-001.jpg",
    season: 1
  },
  // Add 19 more episodes...
];

// Sort by newest first
episodes.sort((a, b) => 
  new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
);

export const featuredEpisode: Episode = episodes[0];
```

Create `src/data/faq.ts`:

```typescript
import { FAQItem } from '@/types';

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How often do you release new episodes?",
    answer: "We release new episodes every Monday morning at 6 AM EST.",
    category: 'general',
    order: 1
  },
  {
    id: 2,
    question: "Where can I listen to the podcast?",
    answer: "You can listen directly on our website or find us on all major podcast platforms including Apple Podcasts, Spotify, Google Podcasts, and more.",
    category: 'listening',
    order: 2
  },
  // Add 6-10 more FAQ items...
];
```

Create `src/data/about.ts`:

```typescript
import { AboutContent } from '@/types';

export const aboutContent: AboutContent = {
  title: "The Modern Podcast",
  tagline: "Exploring ideas that shape our future",
  mission: "Our mission is to bring thought-provoking conversations to curious minds.",
  story: "Started in 2025, this podcast emerged from a passion for meaningful dialogue...",
  hosts: [
    {
      name: "Jane Doe",
      role: "Host",
      bio: "Jane is a journalist with 10 years of experience in storytelling.",
      photo: "/images/host-jane.jpg"
    }
  ],
  contact: {
    email: "hello@modernpodcast.com",
    social: {
      twitter: "https://twitter.com/modernpodcast",
      instagram: "https://instagram.com/modernpodcast"
    }
  }
};
```

### Step 3: Create Reusable Components

#### Navigation Component

Create `src/components/Navigation.tsx`:

```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/episodes', label: 'Episodes' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Modern Podcast
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              {/* Icon here */}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
```

#### Audio Player Component

Create `src/components/AudioPlayer.tsx`:

```typescript
'use client';

import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <div className="flex-1">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full"
            aria-label="Seek"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-700 mt-2">{title}</p>
    </div>
  );
}
```

#### Episode Card Component

Create `src/components/EpisodeCard.tsx`:

```typescript
import Image from 'next/image';
import { Episode } from '@/types';

interface EpisodeCardProps {
  episode: Episode;
  onPlay?: () => void;
}

export default function EpisodeCard({ episode, onPlay }: EpisodeCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={episode.coverArt}
            alt={`${episode.title} cover`}
            width={200}
            height={200}
            className="w-full md:w-48 h-48 object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-2">
            Episode {episode.episodeNumber} • {episode.publishDate} • {episode.duration}
          </div>
          <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
          <p className="text-gray-700 mb-4 line-clamp-3">{episode.description}</p>
          <button
            onClick={onPlay}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Play Episode
          </button>
        </div>
      </div>
    </article>
  );
}
```

### Step 4: Create Pages

#### Root Layout

Edit `src/app/layout.tsx`:

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Podcast | Exploring Ideas',
  description: 'A modern podcast exploring ideas that shape our future',
  openGraph: {
    title: 'Modern Podcast',
    description: 'Exploring ideas that shape our future',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 Modern Podcast. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
```

#### Landing Page

Edit `src/app/page.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { featuredEpisode } from '@/data/episodes';
import AudioPlayer from '@/components/AudioPlayer';
import Image from 'next/image';

export default function Home() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Modern Podcast</h1>
        <p className="text-xl text-gray-600">Exploring ideas that shape our future</p>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Episode</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src={featuredEpisode.coverArt}
                alt={featuredEpisode.title}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <div className="text-sm text-gray-500 mb-2">
                Episode {featuredEpisode.episodeNumber} • {featuredEpisode.publishDate} • {featuredEpisode.duration}
              </div>
              <h3 className="text-2xl font-bold mb-4">{featuredEpisode.title}</h3>
              <p className="text-gray-700 mb-6">{featuredEpisode.description}</p>
              
              {showPlayer ? (
                <AudioPlayer
                  src={featuredEpisode.audioUrl}
                  title={featuredEpisode.title}
                />
              ) : (
                <button
                  onClick={() => setShowPlayer(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg"
                >
                  Play Now
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

#### Episodes Page

Create `src/app/episodes/page.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { episodes } from '@/data/episodes';
import EpisodeCard from '@/components/EpisodeCard';
import AudioPlayer from '@/components/AudioPlayer';
import { Episode } from '@/types';

export default function EpisodesPage() {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">All Episodes</h1>
      
      {currentEpisode && (
        <div className="mb-8">
          <AudioPlayer
            src={currentEpisode.audioUrl}
            title={currentEpisode.title}
          />
        </div>
      )}

      <div className="space-y-6">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            onPlay={() => setCurrentEpisode(episode)}
          />
        ))}
      </div>
    </div>
  );
}
```

#### About Page

Create `src/app/about/page.tsx`:

```typescript
import { aboutContent } from '@/data/about';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{aboutContent.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{aboutContent.tagline}</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">{aboutContent.mission}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700">{aboutContent.story}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {aboutContent.hosts.map((host, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {host.photo && (
                <Image
                  src={host.photo}
                  alt={host.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
              )}
              <h3 className="text-xl font-bold">{host.name}</h3>
              <p className="text-gray-600 mb-2">{host.role}</p>
              <p className="text-gray-700">{host.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        {aboutContent.contact.email && (
          <p className="mb-2">
            Email: <a href={`mailto:${aboutContent.contact.email}`} className="text-blue-600 hover:underline">
              {aboutContent.contact.email}
            </a>
          </p>
        )}
        <div className="flex space-x-4 mt-4">
          {Object.entries(aboutContent.contact.social).map(([platform, url]) => 
            url && (
              <a key={platform} href={url} className="text-blue-600 hover:underline capitalize">
                {platform}
              </a>
            )
          )}
        </div>
      </section>
    </div>
  );
}
```

#### FAQ Page

Create `src/app/faq/page.tsx`:

```typescript
import { faqItems } from '@/data/faq';

export default function FAQPage() {
  const sortedFAQs = [...faqItems].sort((a, b) => a.order - b.order);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {sortedFAQs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-3">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Build and Deploy

### Build for Production

```bash
npm run build
```

This creates an `out/` directory with static HTML, CSS, and JavaScript files.

### Test Locally

```bash
npx serve out
```

Visit `http://localhost:3000` to test the static site.

### Deploy Options

**Vercel** (recommended):

```bash
npm install -g vercel
vercel --prod
```

**Netlify**:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

**Other hosts**: Upload contents of `out/` directory to any static hosting service.

## Next Steps

1. Add real audio files to `public/audio/`
2. Add episode cover art to `public/images/`
3. Customize colors in `tailwind.config.js`
4. Add more episodes and FAQ items
5. Implement testing (Jest + Playwright)
6. Optimize images and audio files
7. Add analytics (optional)

## Troubleshooting

**Issue**: Images not loading
**Solution**: Check paths in data files match files in `public/` directory

**Issue**: Audio not playing
**Solution**: Verify audio file format is MP3 and path is correct

**Issue**: Build fails
**Solution**: Run `npm run lint` to check for TypeScript errors

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

✅ You're ready to build the modern podcast website!
