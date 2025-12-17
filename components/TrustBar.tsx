import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TrustBar: React.FC = () => {
  const { t } = useLanguage();
  const standards = ["ISO 9001", "EN 124", "GB/T 23858", "CE Certified", "ASTM"];

  return (
    <div id="standards" className="border-y border-industrial-100 bg-industrial-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="text-center text-sm font-medium text-industrial-400 mb-6 uppercase tracking-widest">
          {t.trustBar.label}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
          {standards.map((std, idx) => (
            <span key={idx} className="text-xl lg:text-2xl font-bold text-industrial-800 flex items-center gap-2">
              {/* Simulate a logo icon */}
              <div className="w-8 h-8 border-2 border-industrial-800 rounded-full flex items-center justify-center text-[10px]">
                {std.substring(0,2)}
              </div>
              {std}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;