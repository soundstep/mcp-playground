import { FAQItem } from '@/types';

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How often do you release new episodes?",
    answer: "We release new episodes every Monday morning at 6 AM EST. Occasionally, we may release bonus episodes mid-week for special content or interviews.",
    category: 'general',
    order: 1
  },
  {
    id: 2,
    question: "Where can I listen to the podcast?",
    answer: "You can listen directly on our website or find us on all major podcast platforms including Apple Podcasts, Spotify, Google Podcasts, Amazon Music, and more.",
    category: 'listening',
    order: 2
  },
  {
    id: 3,
    question: "How can I submit a guest suggestion or topic idea?",
    answer: "We love hearing from our listeners! You can submit guest suggestions or topic ideas by emailing us at hello@modernpodcast.com with the subject line 'Topic Suggestion'. We read every submission and consider them for future episodes.",
    category: 'submission',
    order: 3
  },
  {
    id: 4,
    question: "Can I share episodes on social media?",
    answer: "Absolutely! We encourage you to share episodes with your friends and networks. Each episode page has share buttons for easy posting to social media platforms.",
    category: 'general',
    order: 4
  },
  {
    id: 5,
    question: "Do you have transcripts available?",
    answer: "Yes, we're working on providing full transcripts for all episodes to improve accessibility. Check back soon for transcript links on each episode page.",
    category: 'technical',
    order: 5
  },
  {
    id: 6,
    question: "How long are episodes typically?",
    answer: "Most episodes run between 35-50 minutes, giving us enough time to explore topics in depth while respecting your time. Check the duration listed for each episode before listening.",
    category: 'general',
    order: 6
  },
  {
    id: 7,
    question: "Can I advertise or sponsor an episode?",
    answer: "We're open to sponsorship opportunities that align with our values and audience. For sponsorship inquiries, please email partnerships@modernpodcast.com with details about your organization.",
    category: 'general',
    order: 7
  },
  {
    id: 8,
    question: "I'm having trouble playing episodes. What should I do?",
    answer: "First, make sure you have a stable internet connection and try refreshing the page. If issues persist, try a different browser or clear your browser cache. You can also download episodes from podcast platforms as an alternative.",
    category: 'technical',
    order: 8
  },
  {
    id: 9,
    question: "Will there be a second season?",
    answer: "Yes! We're already planning season two with exciting new topics and guests. Subscribe to stay updated on our release schedule and never miss an episode.",
    category: 'general',
    order: 9
  },
  {
    id: 10,
    question: "How can I support the podcast?",
    answer: "The best ways to support us are: subscribe and listen regularly, leave reviews on podcast platforms, share episodes with friends, and engage with us on social media. Your support helps us grow and improve!",
    category: 'general',
    order: 10
  }
];
