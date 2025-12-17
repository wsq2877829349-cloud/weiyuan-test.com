import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-industrial-900 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.features.title}</h2>
          <p className="text-industrial-400 text-lg">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {t.features.items.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-industrial-800 border border-industrial-700 hover:border-industrial-600 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-industrial-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;