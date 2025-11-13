'use client';

import { useState } from 'react';
import EpisodeCard from '@/components/EpisodeCard';
import AudioPlayer from '@/components/AudioPlayer';
import { episodes } from '@/data/episodes';
import { Episode } from '@/types';

export default function EpisodesPage() {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter episodes based on search query
  const filteredEpisodes = episodes.filter((episode) => {
    const query = searchQuery.toLowerCase();
    return (
      episode.title.toLowerCase().includes(query) ||
      episode.description.toLowerCase().includes(query)
    );
  });

  const handlePlayEpisode = (episode: Episode) => {
    setCurrentEpisode(episode);
    // Scroll to audio player
    document.getElementById('audio-player')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">All Episodes</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our complete collection of {episodes.length} episodes covering the latest in tech
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search episodes by title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-12 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              aria-label="Search episodes"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-gray-400 text-sm mt-2">
              Found {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Currently Playing Section */}
        {currentEpisode && (
          <div id="audio-player" className="max-w-4xl mx-auto mb-12 scroll-mt-4">
            <h2 className="text-2xl font-bold text-white mb-4">Now Playing</h2>
            <AudioPlayer src={currentEpisode.audioUrl} title={currentEpisode.title} />
          </div>
        )}

        {/* Episodes List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {searchQuery ? 'Search Results' : 'All Episodes'}
            </h2>
            <span className="text-gray-400 text-sm">
              Sorted by newest first
            </span>
          </div>

          {filteredEpisodes.length > 0 ? (
            <div className="space-y-6">
              {filteredEpisodes.map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  onPlay={handlePlayEpisode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="mx-auto w-16 h-16 text-gray-600 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-400 text-lg">No episodes found matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

