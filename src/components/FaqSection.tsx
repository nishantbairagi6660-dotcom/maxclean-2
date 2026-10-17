import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Search, MessageSquare, X } from 'lucide-react';
import { FAQS_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  const { t, lang } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const filteredFaqs = FAQS_DATA.filter(
    (item) =>
      item.q[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a[lang].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 lg:py-32 relative bg-[#F8FAFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.faq.pill}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight mb-4 font-heading">
            {t.faq.heading}
          </h2>

          <p className="text-base text-slate-600 mb-8">
            {t.faq.desc}
          </p>

          {/* Quick search input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.faq.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-white rounded-full border border-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-3xl border transition-all duration-200 overflow-hidden text-left ${
                    isOpen
                      ? 'bg-white border-blue-300 shadow-md shadow-blue-500/5'
                      : 'bg-white/70 hover:bg-white border-blue-100'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#1B2559] font-heading pr-2">
                      {faq.q[lang]}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-blue-50 text-blue-600'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a[lang]}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
              <p>{t.faq.noResults}</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-blue-600 font-bold underline cursor-pointer"
              >
                {t.faq.clearSearch}
              </button>
            </div>
          )}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-blue-50 border border-blue-200/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B2559] font-heading">
                {t.faq.haveQuestion}
              </h4>
              <p className="text-xs text-slate-500">
                {t.faq.supportAvailable}
              </p>
            </div>
          </div>

          <button
            onClick={onAskQuestion}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            {t.faq.askUsBtn}
          </button>
        </div>

      </div>
    </section>
  );
};
