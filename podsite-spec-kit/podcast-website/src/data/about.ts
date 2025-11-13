import { AboutContent } from '@/types';

export const aboutContent: AboutContent = {
  title: "Modern Podcast",
  tagline: "Exploring ideas that shape our future",
  mission: "Our mission is to bring thought-provoking conversations and insights to curious minds around the world. We believe in the power of dialogue to bridge perspectives, spark creativity, and deepen understanding of the complex issues shaping our modern society.",
  story: "Modern Podcast was born from a simple idea: create a space for meaningful conversations about the topics that matter most in our rapidly changing world. Founded in early 2025, we started with a conviction that thoughtful, accessible discussions could help people navigate the intersection of technology, culture, science, and society.\n\nWhat began as casual conversations between friends evolved into a full-fledged podcast exploring everything from artificial intelligence to sustainable living, from the science of happiness to the future of work. We're passionate about making complex topics approachable while maintaining intellectual rigor and respecting diverse perspectives.\n\nOur approach is conversational but well-researched, curious but critical, optimistic but realistic. We're not afraid to tackle difficult questions, and we're always learning alongside our listeners. Each week, we dive deep into a new topic, bringing together insights from experts, practitioners, and everyday people who are shaping our collective future.",
  hosts: [
    {
      name: "Jordan Rivers",
      role: "Host & Producer",
      bio: "Jordan is a journalist and storyteller with over a decade of experience in podcasting and digital media. With a background in science communication, Jordan brings curiosity and clarity to complex topics, making them accessible without sacrificing depth. When not recording, you'll find Jordan exploring hiking trails or experimenting with new cooking techniques.",
      photo: "/images/host-jordan.jpg"
    },
    {
      name: "Alex Chen",
      role: "Co-Host & Research Lead",
      bio: "Alex combines a background in sociology with a passion for technology and culture. As the research lead, Alex ensures every episode is grounded in solid evidence while staying engaging and relevant. Alex's favorite topics include urban planning, digital communities, and the evolving nature of work. Outside the studio, Alex volunteers with local community organizations and practices meditation.",
      photo: "/images/host-alex.jpg"
    }
  ],
  contact: {
    email: "hello@modernpodcast.com",
    social: {
      twitter: "https://twitter.com/modernpodcast",
      instagram: "https://instagram.com/modernpodcast",
      facebook: "https://facebook.com/modernpodcast"
    }
  }
};
