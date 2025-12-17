import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onNavigate?: (href: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const primaryPhone = t.contact.details.phones[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-industrial-200 py-3' 
          : 'bg-white border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="w-8 h-8 bg-industrial-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              W
            </div>
            <span className="font-semibold text-xl tracking-tight text-industrial-900">
              {t.companyName}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {t.nav.items.map((link) => (
              <button 
                key={link.label} 
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-industrial-600 hover:text-industrial-900 transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA & Lang Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-semibold text-industrial-600 hover:text-industrial-900 border border-industrial-200 rounded px-2 py-1 transition-colors flex items-center gap-1"
            >
              <Globe size={12} />
              {language === 'zh' ? 'EN' : '中'}
            </button>
            <div className="hidden lg:flex flex-col items-end mr-2">
               <span className="text-xs text-industrial-500 font-medium">{t.nav.salesSupport}</span>
               <a href={`tel:${primaryPhone}`} className="text-sm font-semibold text-industrial-900 hover:text-blue-600 transition-colors">{primaryPhone}</a>
            </div>
            <Button size="sm" onClick={() => handleNavClick('#contact')}>{t.nav.getQuote}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="text-sm font-semibold text-industrial-600"
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-industrial-600 hover:text-industrial-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-industrial-200 p-6 md:hidden shadow-lg flex flex-col gap-4">
          {t.nav.items.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleNavClick(link.href)}
              className="text-lg font-medium text-industrial-700 py-2 border-b border-industrial-100 text-left"
            >
              {link.label}
            </button>
          ))}
          <Button className="w-full mt-4" icon={<Phone size={16}/>} href={`tel:${primaryPhone}`}>
            {t.nav.callUs}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;