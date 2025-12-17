import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import TrustedMarquee from './components/TrustedMarquee';
import ProductHighlight from './components/ProductHighlight';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import Features from './components/Features';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';
import { Product } from './types';
import { Copy, Check, Mail, Phone, MessageCircle, Globe2, Building2 } from 'lucide-react';

const App: React.FC = () => {
  const { t } = useLanguage();
  // Store the ID instead of the object, so we can re-derive the product when language changes
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  // Store which item was just copied: 'email-0', 'phone-1', 'wa' etc.
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Derive the localized product object based on ID and current language
  const getSelectedProduct = (): Product | null => {
    if (!selectedProductId) return null;
    const allProducts = [...t.catalog.items];
    if (t.product.id === selectedProductId) return t.product;
    return allProducts.find(p => p.id === selectedProductId) || null;
  };

  const selectedProduct = getSelectedProduct();

  const handleProductSelect = (product: Product) => {
    setSelectedProductId(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Logic to handle navigation clicks. 
  // If we are on a product detail page, we first need to clear the selection to show the main page,
  // then scroll to the section.
  const handleNavigation = (href: string) => {
    if (selectedProductId) {
      setSelectedProductId(null);
      // Give React a moment to re-render the home page structure before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToContact = () => {
    if (selectedProductId) {
       setSelectedProductId(null);
       setTimeout(() => {
         const el = document.getElementById('contact');
         if (el) el.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    } else {
       const el = document.getElementById('contact');
       if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-industrial-200">
      <Navbar onNavigate={handleNavigation} />
      <main>
        {selectedProduct ? (
          // Product Detail View
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToHome}
            onInquire={() => {
              scrollToContact();
            }}
          />
        ) : (
          // Home / Landing Page View
          <>
            <Hero />
            <TrustedMarquee />
            <TrustBar />
            <Features />
            <ProductHighlight />
            <ProductCatalog onProductSelect={handleProductSelect} />
          </>
        )}
        
        {/* Global Contact Section */}
        <section id="contact" className="bg-industrial-50 py-24 border-y border-industrial-200 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-industrial-900 mb-6">{t.contact.title}</h2>
              <p className="text-industrial-600 max-w-xl mx-auto">
                {t.contact.subtitle}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* GLOBAL / EXPORT CARD */}
              <div className="bg-white rounded-2xl shadow-lg border border-industrial-200 overflow-hidden relative">
                <div className="bg-industrial-900 p-6 flex items-center justify-between">
                   <h3 className="text-white font-bold text-xl flex items-center gap-2">
                     <Globe2 className="text-blue-400" /> {t.contact.globalTitle}
                   </h3>
                </div>
                <div className="p-8 space-y-8">
                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <Mail size={18} className="text-industrial-500" />
                       <span className="text-xs font-bold text-industrial-400 uppercase tracking-wider">{t.contact.emailLabel}</span>
                    </div>
                    <div className="flex items-center justify-between bg-industrial-50 p-4 rounded-xl border border-industrial-100">
                      <span className="font-semibold text-industrial-900 break-all">{t.contact.global.email}</span>
                      <button 
                        onClick={() => copyToClipboard(t.contact.global.email, 'gl-email')}
                        className="flex-shrink-0 flex items-center gap-2 text-xs font-medium text-industrial-600 hover:text-industrial-900 transition-colors"
                      >
                         {copiedId === 'gl-email' ? <Check size={16} className="text-green-600"/> : <Copy size={16}/>}
                         {copiedId === 'gl-email' ? t.contact.copied : t.contact.copy}
                      </button>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <MessageCircle size={18} className="text-green-600" />
                       <span className="text-xs font-bold text-industrial-400 uppercase tracking-wider">{t.contact.whatsappLabel}</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 p-4 rounded-xl border border-green-100">
                      <span className="font-semibold text-green-900 font-mono">{t.contact.global.whatsapp}</span>
                      <button 
                        onClick={() => copyToClipboard(t.contact.global.whatsapp, 'gl-wa')}
                        className="flex-shrink-0 flex items-center gap-2 text-xs font-medium text-green-700 hover:text-green-900 transition-colors"
                      >
                         {copiedId === 'gl-wa' ? <Check size={16} /> : <Copy size={16}/>}
                         {copiedId === 'gl-wa' ? t.contact.copied : t.contact.copy}
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              {/* DOMESTIC / FACTORY CARD */}
              <div className="bg-white rounded-2xl shadow-sm border border-industrial-200 overflow-hidden">
                <div className="bg-industrial-100 p-6 border-b border-industrial-200">
                   <h3 className="text-industrial-900 font-bold text-xl flex items-center gap-2">
                     <Building2 className="text-industrial-600" /> {t.contact.domesticTitle}
                   </h3>
                </div>
                <div className="p-8 space-y-8">
                  {/* Phones */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <Phone size={18} className="text-industrial-500" />
                       <span className="text-xs font-bold text-industrial-400 uppercase tracking-wider">{t.contact.phoneLabel}</span>
                    </div>
                    <div className="space-y-3">
                      {t.contact.details.phones.map((phone, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-industrial-50 p-4 rounded-xl border border-industrial-100">
                          <span className="font-semibold text-industrial-900">{phone}</span>
                          <button 
                            onClick={() => copyToClipboard(phone, `dom-ph-${idx}`)}
                            className="flex-shrink-0 flex items-center gap-2 text-xs font-medium text-industrial-600 hover:text-industrial-900 transition-colors"
                          >
                            {copiedId === `dom-ph-${idx}` ? <Check size={16} className="text-green-600"/> : <Copy size={16}/>}
                            {copiedId === `dom-ph-${idx}` ? t.contact.copied : t.contact.copy}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Domestic Emails */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <Mail size={18} className="text-industrial-500" />
                       <span className="text-xs font-bold text-industrial-400 uppercase tracking-wider">{t.contact.emailLabel}</span>
                    </div>
                    <div className="space-y-3">
                      {t.contact.details.emails.map((email, idx) => (
                         <div key={idx} className="flex items-center justify-between bg-industrial-50 p-4 rounded-xl border border-industrial-100">
                          <span className="font-semibold text-industrial-900 break-all">{email}</span>
                          <button 
                            onClick={() => copyToClipboard(email, `dom-em-${idx}`)}
                            className="flex-shrink-0 flex items-center gap-2 text-xs font-medium text-industrial-600 hover:text-industrial-900 transition-colors"
                          >
                            {copiedId === `dom-em-${idx}` ? <Check size={16} className="text-green-600"/> : <Copy size={16}/>}
                            {copiedId === `dom-em-${idx}` ? t.contact.copied : t.contact.copy}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;