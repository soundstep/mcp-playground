// Core TypeScript interfaces for podcast website data structures

export interface Episode {
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
