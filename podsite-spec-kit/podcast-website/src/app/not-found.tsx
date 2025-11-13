import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* 404 Graphic */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <div className="flex justify-center mb-8">
            <svg
              className="w-32 h-32 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you're looking for seems to have vanished into the digital void.
        </p>

        {/* Navigation Options */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Go Home
          </Link>
          <Link
            href="/episodes"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Browse Episodes
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-4">You might be interested in:</p>
          <div className="flex justify-center gap-6 text-blue-400">
            <Link href="/about" className="hover:text-blue-300 transition-colors">
              About
            </Link>
            <Link href="/faq" className="hover:text-blue-300 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
