import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Podcast | Exploring Ideas That Shape Our Future",
  description: "Join us for thought-provoking conversations about technology, culture, science, and society. New episodes every Monday.",
  openGraph: {
    title: "Modern Podcast",
    description: "Exploring ideas that shape our future",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Podcast",
    description: "Exploring ideas that shape our future",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded focus:z-50"
        >
          Skip to main content
        </a>
        
        <Navigation />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-300 mb-2">&copy; 2025 Modern Podcast. All rights reserved.</p>
              <p className="text-gray-400 text-sm">
                Exploring ideas that shape our future, one conversation at a time.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
