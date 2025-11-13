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

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
              aria-label="Modern Podcast Home"
            >
              Modern Podcast
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  isActive(link.href)
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4" id="mobile-menu">
            <div className="space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isActive(link.href)
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
