import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { RESOURCES } from '../locales';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof RESOURCES['zh'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default to Chinese ('zh')
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    // Update document title based on language
    document.title = RESOURCES[language].meta.title;
    
    // Update meta description if possible (optional)
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', RESOURCES[language].meta.description);
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: RESOURCES[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};