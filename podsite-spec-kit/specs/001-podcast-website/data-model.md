# Data Model: Modern Podcast Website

**Feature**: 001-podcast-website  
**Date**: 2025-11-12  
**Purpose**: Define data structures and relationships for podcast website

## Overview

This is a static website with no database. All data is embedded as TypeScript constants in the codebase. Data is read-only from the user's perspective.

## Core Entities

### Episode

Represents a single podcast episode with all metadata required for display and playback.

**Properties**:

| Property | Type | Required | Description | Validation |
|----------|------|----------|-------------|------------|
| id | number | Yes | Unique identifier for the episode | Positive integer, unique |
| episodeNumber | number | Yes | Sequential episode number | 1-20 |
| title | string | Yes | Episode title | 1-100 characters |
| description | string | Yes | Full episode description | 150-500 characters |
| publishDate | string | Yes | ISO 8601 date (YYYY-MM-DD) | Valid date, not future |
| duration | string | Yes | Episode length in MM:SS format | Valid time format |
| audioUrl | string | Yes | Path to audio file | Valid URL/path, .mp3 |
| coverArt | string | Yes | Path to episode cover image | Valid URL/path, image file |
| season | number | No | Season number (if applicable) | Positive integer |

**TypeScript Interface**:

```typescript
interface Episode {
  id: number;
  episodeNumber: number;
  title: string;
  description: string;
  publishDate: string; // ISO 8601: "YYYY-MM-DD"
  duration: string; // Format: "MM:SS"
  audioUrl: string; // Path: "/audio/episode-001.mp3"
  coverArt: string; // Path: "/images/episode-001.jpg"
  season?: number;
}
```

**Example Data**:

```typescript
const episode: Episode = {
  id: 1,
  episodeNumber: 1,
  title: "Welcome to the Podcast",
  description: "In this inaugural episode, we introduce the podcast, discuss our mission, and share what listeners can expect in future episodes. We dive into the inspiration behind starting this show and preview some exciting topics coming up.",
  publishDate: "2025-01-15",
  duration: "42:30",
  audioUrl: "/audio/episode-001.mp3",
  coverArt: "/images/episode-001.jpg",
  season: 1
};
```

**Business Rules**:

- Episodes are ordered by `publishDate` descending (newest first)
- Episode IDs must be unique and never reused
- All 20 episodes must have complete data (no optional fields empty)
- Audio files must exist in `/public/audio/` directory
- Cover art must exist in `/public/images/` directory
- Duration must accurately reflect audio file length

### Featured Episode

A reference to one specific episode highlighted on the landing page.

**Properties**:

| Property | Type | Description |
|----------|------|-------------|
| episode | Episode | Reference to the featured episode object |

**TypeScript Implementation**:

```typescript
// Simple reference to an episode from the episodes array
export const featuredEpisode: Episode = episodes[0]; // First episode
// Or manually select: episodes.find(ep => ep.id === 5)
```

**Business Rules**:

- Must reference a valid episode from the episodes array
- Typically the newest episode (episodes[0] after sorting)
- Can be manually curated for special promotions

### FAQ Item

Represents a single question and answer pair for the FAQ page.

**Properties**:

| Property | Type | Required | Description | Validation |
|----------|------|----------|-------------|------------|
| id | number | Yes | Unique identifier | Positive integer, unique |
| question | string | Yes | The question text | 10-200 characters |
| answer | string | Yes | The answer text | 20-1000 characters |
| category | string | No | Grouping category | One of predefined categories |
| order | number | Yes | Display order | Positive integer |

**TypeScript Interface**:

```typescript
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: 'listening' | 'submission' | 'general' | 'technical';
  order: number;
}
```

**Example Data**:

```typescript
const faqItem: FAQItem = {
  id: 1,
  question: "How often do you release new episodes?",
  answer: "We release new episodes every Monday morning. Occasionally, we may release bonus episodes mid-week for special content or interviews.",
  category: 'general',
  order: 1
};
```

**Business Rules**:

- FAQ items displayed in ascending `order`
- Questions should be concise and clear
- Answers should be complete and helpful
- Minimum 5 FAQ items, recommended 8-12
- Categories optional but help with organization

### About Content

Structured content for the About page.

**Properties**:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| title | string | Yes | Podcast title |
| tagline | string | Yes | Short tagline/subtitle |
| mission | string | Yes | Mission statement |
| story | string | Yes | Background story |
| hosts | Host[] | Yes | Array of host information |
| contact | ContactInfo | Yes | Contact information |

**TypeScript Interface**:

```typescript
interface Host {
  name: string;
  role: string; // "Host", "Co-host", "Producer"
  bio: string;
  photo?: string;
}

interface ContactInfo {
  email?: string;
  social: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

interface AboutContent {
  title: string;
  tagline: string;
  mission: string;
  story: string;
  hosts: Host[];
  contact: ContactInfo;
}
```

**Example Data**:

```typescript
const aboutContent: AboutContent = {
  title: "The Modern Podcast",
  tagline: "Exploring ideas that shape our future",
  mission: "Our mission is to bring thought-provoking conversations and insights to curious minds around the world.",
  story: "Started in 2025, this podcast emerged from a simple idea: create a space for meaningful dialogue about the topics that matter most...",
  hosts: [
    {
      name: "Jane Doe",
      role: "Host",
      bio: "Jane is a journalist with 10 years of experience...",
      photo: "/images/host-jane.jpg"
    },
    {
      name: "John Smith",
      role: "Co-host",
      bio: "John brings technical expertise and a passion for storytelling...",
      photo: "/images/host-john.jpg"
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

**Business Rules**:

- All text fields should be complete and well-written
- Host photos optional but recommended for connection
- At least one contact method required (email or social)
- Story should be 200-500 words

## Data Relationships

### Episode → Featured Episode

```
episodes (array of 20)
    ↓
featuredEpisode (reference to one episode)
```

**Relationship**: One-to-one reference. Featured episode is always one of the 20 episodes in the main array.

### No Database Relationships

Since this is a static site with embedded data:

- No foreign keys
- No database joins
- No referential integrity constraints
- All data self-contained in TypeScript files

## Data Storage Structure

### File Organization

```
src/data/
├── episodes.ts      # Export: episodes[], featuredEpisode
├── faq.ts           # Export: faqItems[]
└── about.ts         # Export: aboutContent
```

### episodes.ts

```typescript
export const episodes: Episode[] = [
  // 20 episode objects, sorted newest first
  { id: 20, episodeNumber: 20, title: "...", /* ... */ },
  { id: 19, episodeNumber: 19, title: "...", /* ... */ },
  // ...
  { id: 1, episodeNumber: 1, title: "...", /* ... */ }
];

export const featuredEpisode: Episode = episodes[0];
```

### faq.ts

```typescript
export const faqItems: FAQItem[] = [
  { id: 1, question: "...", answer: "...", order: 1 },
  { id: 2, question: "...", answer: "...", order: 2 },
  // ... 8-12 items
];
```

### about.ts

```typescript
export const aboutContent: AboutContent = {
  title: "...",
  tagline: "...",
  // ... complete about data
};
```

## Data Generation

Mock data must be created manually or with a script. Requirements:

### Episode Data

- 20 unique episodes
- Titles should be realistic and engaging
- Descriptions 150-300 words each
- Publish dates: Spread over 20 weeks (weekly release)
- Durations: Vary between 25-60 minutes
- Audio files: Can use placeholder MP3 or actual audio
- Cover art: Unique or shared design

### FAQ Data

- 8-12 question/answer pairs
- Cover common topics:
  - Listening platforms
  - Release schedule
  - Guest submission process
  - Contact information
  - Sponsorship inquiries
  - Technical issues

### About Data

- Compelling mission statement
- Authentic-sounding backstory
- 1-3 host bios
- Contact information (can be example data)

## Data Validation

### Compile-Time Validation

TypeScript interfaces ensure:

- All required fields present
- Correct types for each property
- No undefined values where not allowed

### Runtime Validation (Optional)

For extra safety, can add runtime checks:

```typescript
function validateEpisode(episode: Episode): boolean {
  return (
    episode.id > 0 &&
    episode.title.length > 0 &&
    episode.title.length <= 100 &&
    episode.description.length >= 150 &&
    episode.description.length <= 500 &&
    /^\d{4}-\d{2}-\d{2}$/.test(episode.publishDate) &&
    /^\d{1,2}:\d{2}$/.test(episode.duration) &&
    episode.audioUrl.endsWith('.mp3')
  );
}
```

## No API/Contracts Needed

Since this is a static site with embedded data:

- ❌ No REST API endpoints
- ❌ No GraphQL schema
- ❌ No API contracts
- ❌ No network requests for data

All data bundled at build time into JavaScript bundles served with the HTML pages.

## Summary

- **4 main entities**: Episode, Featured Episode, FAQ Item, About Content
- **Static data**: No database, no API, all embedded in TypeScript
- **Type safety**: Full TypeScript interfaces for compile-time validation
- **Simple relationships**: Featured episode references one episode from array
- **File-based storage**: Organized in `src/data/` directory
- **Mock data required**: 20 episodes, 8-12 FAQs, complete about content

✅ Ready for implementation phase.
