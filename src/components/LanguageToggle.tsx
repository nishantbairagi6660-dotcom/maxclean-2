import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-xs ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang('el')}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
          lang === 'el'
            ? 'bg-blue-600 text-white shadow-xs'
            : 'text-slate-600 hover:text-blue-600'
        }`}
        aria-pressed={lang === 'el'}
      >
        <span className="text-sm leading-none" role="img" aria-label="Ελληνικά">🇬🇷</span>
        <span>ΕΛ</span>
      </button>

      <button
        type="button"
        onClick={() => setLang('en')}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
          lang === 'en'
            ? 'bg-blue-600 text-white shadow-xs'
            : 'text-slate-600 hover:text-blue-600'
        }`}
        aria-pressed={lang === 'en'}
      >
        <span className="text-sm leading-none" role="img" aria-label="English">🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
};
