import React, { useState } from 'react';
import { PRODUCT_STANDARDS } from '../constants';
import Button from './Button';
import { Download, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductHighlight: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use images from the localized product object if available, otherwise fallback to single image
  const images = t.product.images && t.product.images.length > 0 ? t.product.images : [t.product.image];
  
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDownload = () => {
    // If a PDF URL is defined in locales, use it.
    if (t.product.pdfUrl) {
      const link = document.createElement('a');
      link.href = t.product.pdfUrl;
      link.download = `${t.product.model}_Datasheet.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback: Generate a dummy text file
      const data = `Technical Datasheet for ${t.product.model}\n\nName: ${t.product.name}\nDescription: ${t.product.description}\n\nSpecs:\n${t.product.specs?.map(s => `- ${s.label}: ${s.value}`).join('\n')}`;
      const blob = new Blob([data], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${t.product.model.replace(/\s+/g, '_')}_Datasheet.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <section id="products" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Visual Side - Carousel */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden bg-industrial-100 aspect-[4/3] group shadow-sm border border-industrial-200">
              <img 
                src={images[currentImageIndex]} 
                alt={`${t.product.name} view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover mix-blend-multiply transition-opacity duration-300"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm z-10">
                <span className="text-xs font-bold tracking-widest uppercase text-industrial-900">
                  {t.product.badge}
                </span>
              </div>

               {/* Carousel Controls - Only show if >1 image */}
               {images.length > 1 && (
                 <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-industrial-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-industrial-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === idx ? 'bg-industrial-900 w-4' : 'bg-industrial-400 hover:bg-industrial-600'
                        }`}
                      />
                    ))}
                  </div>
                 </>
               )}
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-industrial-500 font-medium text-lg mb-2">{t.product.model}</h2>
            <h3 className="text-4xl font-bold text-industrial-900 mb-6 leading-tight">
              {t.product.name}
            </h3>
            <p className="text-industrial-600 text-lg leading-relaxed mb-8">
              {t.product.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10 border-t border-b border-industrial-100 py-8">
              {t.product.specs.map((spec, idx) => (
                <div key={idx}>
                  <p className="text-sm text-industrial-500 mb-1">{spec.label}</p>
                  <p className="text-lg font-semibold text-industrial-900">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Standards List */}
            <div className="mb-10">
              <p className="text-sm font-semibold text-industrial-900 mb-4">{t.product.standardsLabel}</p>
              <div className="flex flex-wrap gap-3">
                {PRODUCT_STANDARDS.map((std, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-industrial-50 border border-industrial-200 text-sm text-industrial-700">
                    <CheckCircle2 size={14} className="text-green-600" />
                    {std}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('#contact')}>{t.product.consultCta}</Button>
              <Button variant="secondary" icon={<Download size={18} />} onClick={handleDownload}>
                {t.product.downloadCta}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;