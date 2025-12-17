import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { Product } from '../types';

interface ProductCatalogProps {
  onProductSelect?: (product: Product) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ onProductSelect }) => {
  const { t } = useLanguage();

  const handleCardClick = (product: Product) => {
    if (onProductSelect) {
      onProductSelect(product);
    }
  };

  return (
    <section id="catalog" className="py-24 bg-industrial-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-industrial-900 mb-4">{t.catalog.title}</h2>
          <p className="text-industrial-600">{t.catalog.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.catalog.items.map((product) => (
            <div 
              key={product.id} 
              id={product.id}
              onClick={() => handleCardClick(product)}
              className="bg-white rounded-xl border border-industrial-200 overflow-hidden hover:shadow-xl hover:border-industrial-300 cursor-pointer transition-all duration-300 flex flex-col group"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] bg-industrial-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-industrial-900 rounded-md shadow-sm">
                    {product.model}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-industrial-900 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-800 transition-colors">
                  {product.name}
                </h3>
                
                {/* Standards Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.standards.slice(0, 3).map((std, idx) => (
                    <span key={idx} className="text-[10px] font-medium px-2 py-0.5 bg-industrial-100 text-industrial-600 rounded">
                      {std}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-industrial-600 mb-6 line-clamp-3 flex-grow">
                  {product.description}
                </p>

                {/* Actions */}
                <div className="mt-auto pt-6 border-t border-industrial-100">
                  <Button 
                    size="sm" 
                    variant="primary" 
                    className="w-full justify-between group-hover:bg-industrial-800"
                    icon={<ArrowRight size={16} />}
                  >
                    {t.catalog.viewDetailsLabel}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCatalog;