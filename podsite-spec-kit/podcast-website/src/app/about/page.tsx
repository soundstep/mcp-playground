import Image from 'next/image';
import Link from 'next/link';
import { aboutContent } from '@/data/about';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">{aboutContent.title}</h1>
          <p className="text-2xl text-blue-400 font-medium">{aboutContent.tagline}</p>
        </div>

        {/* Mission Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Our Mission
            </h2>
            <p className="text-white text-lg leading-relaxed">
              {aboutContent.mission}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Our Story
            </h2>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              {aboutContent.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Hosts Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Your Hosts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aboutContent.hosts.map((host, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Host Photo */}
                {host.photo && (
                  <div className="relative h-80 bg-gradient-to-b from-gray-700 to-gray-800">
                    <Image
                      src={host.photo}
                      alt={`Photo of ${host.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
                
                {/* Host Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{host.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{host.role}</p>
                  <p className="text-gray-300 leading-relaxed">{host.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            
            {/* Email */}
            {aboutContent.contact.email && (
              <div className="mb-8">
                <p className="text-gray-400 mb-2">Email us at:</p>
                <a
                  href={`mailto:${aboutContent.contact.email}`}
                  className="text-blue-400 hover:text-blue-300 text-xl font-medium transition-colors"
                >
                  {aboutContent.contact.email}
                </a>
              </div>
            )}

            {/* Social Media Links */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4">Follow us on social media:</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {aboutContent.contact.social.twitter && (
                  <a
                    href={aboutContent.contact.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    Twitter
                  </a>
                )}
                {aboutContent.contact.social.instagram && (
                  <a
                    href={aboutContent.contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                )}
                {aboutContent.contact.social.linkedin && (
                  <a
                    href={aboutContent.contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-gray-300 mb-4">Ready to dive into the world of tech innovation?</p>
              <Link
                href="/episodes"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Explore All Episodes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

