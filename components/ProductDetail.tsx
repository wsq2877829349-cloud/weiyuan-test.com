import React, { useState } from 'react';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle2, Download, ShieldCheck, PlayCircle, FileText, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import Button from './Button';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onInquire: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onInquire }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'specs' | 'standards' | 'video'>('specs');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Determine images to display:
  // If product has a specific gallery defined (images array), use it.
  // Otherwise, default to just showing the main image.
  // We do NOT forcefully append generic demo images anymore, as per user request to "adapt to input".
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  // Use localized fallback features if not present on product
  const features = product.features || t.pdp.defaultFeatures;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDownload = () => {
    // If a PDF URL is defined in locales, use it.
    if (product.pdfUrl) {
      const link = document.createElement('a');
      link.href = product.pdfUrl;
      link.download = `${product.model}_Datasheet.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback: Generate a dummy text file
      const data = `Technical Datasheet for ${product.model}\n\nName: ${product.name}\nDescription: ${product.description}\n\nSpecs:\n${product.specs?.map(s => `- ${s.label}: ${s.value}`).join('\n')}`;
      const blob = new Blob([data], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${product.model.replace(/\s+/g, '_')}_Datasheet.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  };

  // Build tabs dynamically based on whether video exists
  const tabs = [
    { id: 'specs', label: t.pdp.tabs.specs, icon: FileText },
    { id: 'standards', label: t.pdp.tabs.standards, icon: ShieldCheck },
    ...(product.video ? [{ id: 'video', label: t.pdp.tabs.video, icon: PlayCircle }] : []),
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32 animate-in fade-in duration-500">
      
      {/* Sticky RFQ Bar (Mobile/Desktop) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-industrial-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex justify-between items-center lg:px-12">
        <div className="hidden lg:block">
          <p className="font-bold text-industrial-900">{product.model}</p>
          <p className="text-xs text-industrial-500">{t.pdp.leadTimeLabel}: {t.pdp.leadTimeValue}</p>
        </div>
        <div className="flex gap-4 w-full lg:w-auto">
           <Button variant="outline" className="flex-1 lg:flex-none" onClick={handleDownload}>
              <Download size={16} /> <span className="hidden sm:inline">{t.pdp.datasheetButton}</span>
           </Button>
           <Button className="flex-1 lg:flex-none" onClick={onInquire}>
              {t.pdp.requestQuoteButton}
           </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <button onClick={onBack} className="flex items-center text-sm text-industrial-500 hover:text-industrial-900 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> {t.pdp.backToCatalog}
        </button>

        {/* --- ABOVE THE FOLD --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left: Image Carousel */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-industrial-100 rounded-2xl overflow-hidden border border-industrial-200 relative group">
              <img 
                src={images[currentImageIndex]} 
                alt={`${product.name} view ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover mix-blend-multiply transition-opacity duration-300" 
              />
              
              {/* Carousel Controls - Only show if more than 1 image */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-industrial-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-industrial-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
            {/* Thumbnails - Only show if more than 1 image */}
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentImageIndex(i)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === i ? 'border-industrial-900 ring-1 ring-industrial-900' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Specs & Trust */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {product.standards.slice(0, 3).map((std, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                  <ShieldCheck size={12} /> {std}
                </span>
              ))}
              <span className="text-xs text-industrial-400 font-mono">{t.pdp.idLabel}: {product.id.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-industrial-900 mb-2">{product.name}</h1>
            <p className="text-xl text-industrial-500 font-medium mb-6">{product.model}</p>

            <p className="text-industrial-600 leading-relaxed mb-8 border-l-4 border-industrial-200 pl-4">
              {product.description}
            </p>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {product.specs?.map((spec, i) => (
                <div key={i} className="bg-industrial-50 p-3 rounded-lg border border-industrial-100">
                  <p className="text-xs text-industrial-500 uppercase tracking-wide">{spec.label}</p>
                  <p className="font-bold text-industrial-900">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 p-6 bg-industrial-50 rounded-xl border border-industrial-200">
              <div className="flex-1">
                <h4 className="font-semibold text-industrial-900 mb-1">{t.pdp.downloadsTitle}</h4>
                <p className="text-xs text-industrial-500">{t.pdp.downloadsList}</p>
              </div>
              <Button variant="secondary" size="sm" icon={<Download size={16}/>} onClick={handleDownload}>
                {t.pdp.datasheetButton}
              </Button>
            </div>
          </div>
        </div>

        {/* --- TABS SYSTEM --- */}
        <div className="mb-12">
          <div className="flex border-b border-industrial-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id 
                    ? 'border-industrial-900 text-industrial-900' 
                    : 'border-transparent text-industrial-500 hover:text-industrial-700'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-8 min-h-[300px]">
            {activeTab === 'specs' && (
              <div className="grid md:grid-cols-2 gap-12 animate-in slide-in-from-bottom-2 duration-300">
                <div>
                  <h3 className="text-lg font-bold mb-6">{t.pdp.featuresTitle}</h3>
                  <ul className="space-y-3">
                    {features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                        <span className="text-industrial-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-6">{t.pdp.paramsTitle}</h3>
                  <div className="border border-industrial-200 rounded-lg overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <tbody className="divide-y divide-industrial-200">
                        {product.specs?.map((spec, i) => (
                          <tr key={i} className="bg-white hover:bg-industrial-50">
                            <td className="px-4 py-3 font-medium text-industrial-500 bg-industrial-50/50 w-1/3">{spec.label}</td>
                            <td className="px-4 py-3 text-industrial-900">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'standards' && (
              <div className="animate-in slide-in-from-bottom-2 duration-300">
                <h3 className="text-lg font-bold mb-4">{t.pdp.standardsTitle}</h3>
                <p className="text-industrial-600 mb-8 max-w-2xl">
                  {t.pdp.standardsDesc}
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {product.standards.map((std, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 border border-industrial-200 rounded-lg bg-white shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-industrial-100 flex items-center justify-center font-bold text-industrial-700 text-xs">
                        {std.substring(0,2)}
                      </div>
                      <span className="font-semibold text-industrial-900">{std}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'video' && product.video && (
              <div className="animate-in slide-in-from-bottom-2 duration-300">
                <div className="aspect-video bg-industrial-900 rounded-xl flex items-center justify-center text-white relative group cursor-pointer overflow-hidden">
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                   <PlayCircle size={64} className="relative z-10 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                   <p className="absolute bottom-6 left-6 font-semibold z-10">{t.pdp.videoOverlay}: {product.model}</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;