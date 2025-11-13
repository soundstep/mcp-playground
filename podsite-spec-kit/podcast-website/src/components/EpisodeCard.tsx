'use client';

import Image from 'next/image';
import { Episode } from '@/types';
import { useState } from 'react';

interface EpisodeCardProps {
  episode: Episode;
  onPlay?: (episode: Episode) => void;
}

export default function EpisodeCard({ episode, onPlay }: EpisodeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePlayClick = () => {
    if (onPlay) {
      onPlay(episode);
    }
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Truncate description for preview (first 150 characters)
  const truncatedDescription =
    episode.description.length > 150
      ? episode.description.slice(0, 150) + '...'
      : episode.description;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Cover Art */}
        <div className="relative w-full md:w-48 h-48 flex-shrink-0">
          <Image
            src={episode.coverArt}
            alt={`Cover art for ${episode.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 192px"
            className="object-cover"
          />
          {/* Play Button Overlay */}
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Play episode ${episode.episodeNumber}: ${episode.title}`}
          >
            <div className="bg-blue-600 rounded-full p-4 hover:bg-blue-700 transition-colors">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Episode Number Badge */}
          <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Episode {episode.episodeNumber}
            {episode.season && ` • Season ${episode.season}`}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
            {episode.title}
          </h3>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {formatDate(episode.publishDate)}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {episode.duration}
            </span>
          </div>

          {/* Description */}
          <div className="text-gray-300 text-sm leading-relaxed mb-3">
            {isExpanded ? episode.description : truncatedDescription}
          </div>

          {/* Read More/Less Button */}
          {episode.description.length > 150 && (
            <button
              onClick={toggleDescription}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
