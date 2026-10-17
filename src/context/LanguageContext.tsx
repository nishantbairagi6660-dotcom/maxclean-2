import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationDictionary, TRANSLATIONS, formatPrice } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDictionary;
  formatPrice: (amount: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'maxclean_preferred_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'el' || saved === 'en') {
        return saved;
      }
    } catch {
      // localStorage disabled or unavailable
    }
    return 'el'; // Default to Greek as required
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  // Sync document attributes and metadata
  useEffect(() => {
    try {
      document.documentElement.lang = lang;
      const dict = TRANSLATIONS[lang];
      document.title = dict.meta.title;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', dict.meta.description);
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', dict.meta.title);
      }
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', dict.meta.description);
      }
    } catch {
      // ignore DOM errors in SSR/test
    }
  }, [lang]);

  const value: LanguageContextType = {
    lang,
    setLang,
    t: TRANSLATIONS[lang],
    formatPrice: (amount: number) => formatPrice(amount, lang),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
