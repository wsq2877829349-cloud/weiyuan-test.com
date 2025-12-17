import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Content */}
          <div className="max-w-3xl relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-100 border border-industrial-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-industrial-700 uppercase tracking-wide">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-industrial-900 mb-8 leading-[1.1]">
              {t.hero.title} <span className="text-blue-800">{t.hero.highlight}</span>.
            </h1>
            
            <p className="text-xl text-industrial-600 mb-10 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Button size="lg" icon={<ArrowRight size={18} />} onClick={() => scrollToSection('#catalog')}>
                {t.hero.primaryCta}
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('#catalog')}>
                {t.hero.secondaryCta}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;