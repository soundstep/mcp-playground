import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";
import { featuredEpisode } from "@/data/episodes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
            Tech Talks Daily
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring the latest in technology, innovation, and the future of digital transformation
          </p>
        </div>

        {/* Featured Episode Card */}
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Episode Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Featured Episode</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {featuredEpisode.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {new Date(featuredEpisode.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {featuredEpisode.duration}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Episode {featuredEpisode.episodeNumber}
              </span>
            </div>
          </div>

          {/* Episode Content */}
          <div className="p-6 sm:p-8">
            {/* Cover Art & Description */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Cover Art */}
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={featuredEpisode.coverArt}
                  alt={`Cover art for ${featuredEpisode.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-4">About This Episode</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {featuredEpisode.description}
                </p>
              </div>
            </div>

            {/* Audio Player */}
            <AudioPlayer 
              src={featuredEpisode.audioUrl} 
              title={featuredEpisode.title}
            />

            {/* Call to Action */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/episodes"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Browse All Episodes
              </Link>
              <Link
                href="/about"
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                About the Podcast
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Episodes Teaser */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">More Episodes</h2>
          <p className="text-gray-400">Explore our collection of tech conversations</p>
        </div>
        <div className="text-center">
          <Link
            href="/episodes"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            View All 20 Episodes
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

