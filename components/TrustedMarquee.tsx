import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TrustedMarquee: React.FC = () => {
  const { t } = useLanguage();
  
  // Duplicate the items to create the seamless loop
  const items = [...t.trustedMarquee.items, ...t.trustedMarquee.items];

  return (
    <section className="py-12 bg-white border-b border-industrial-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-8">
        <h3 className="text-sm font-semibold text-industrial-500 uppercase tracking-widest">
          {t.trustedMarquee.title}
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
         {/* Gradient Masks for smooth fade out at edges */}
         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <div key={index} className="mx-4">
              <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-industrial-50 border border-industrial-200 text-industrial-800 text-sm font-medium shadow-sm hover:border-industrial-300 hover:bg-industrial-100 transition-colors cursor-default">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedMarquee;