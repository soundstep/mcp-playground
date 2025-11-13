'use client';

import { useState } from 'react';
import { faqItems } from '@/data/faq';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Group FAQs by category
  const categorizedFAQs = faqItems.reduce((acc, item) => {
    const category = item.category || 'general';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof faqItems>);

  const categoryLabels: Record<string, string> = {
    listening: 'Listening to Episodes',
    submission: 'Guest Submissions',
    general: 'General Questions',
    technical: 'Technical Support',
  };

  const categoryIcons: Record<string, React.ReactElement> = {
    listening: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
      </svg>
    ),
    submission: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
      </svg>
    ),
    general: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    ),
    technical: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our podcast
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {Object.entries(categorizedFAQs).map(([category, items]) => (
            <section key={category} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-400">
                  {categoryIcons[category] || categoryIcons.general}
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {categoryLabels[category] || category}
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {items
                  .sort((a, b) => a.order - b.order)
                  .map((item, index) => {
                    const globalIndex = faqItems.findIndex(faq => faq.id === item.id);
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={item.id}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                      >
                        {/* Question Button */}
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors hover:bg-gray-750"
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${item.id}`}
                        >
                          <span className="text-lg font-semibold text-white pr-4">
                            {item.question}
                          </span>
                          <svg
                            className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        {/* Answer Panel */}
                        <div
                          id={`faq-answer-${item.id}`}
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Feel free to reach out to us directly.
            </p>
            <a
              href="/about#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

