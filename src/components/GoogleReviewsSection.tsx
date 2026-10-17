import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp, Filter, Sparkles, MessageSquare } from 'lucide-react';
import { GOOGLE_REVIEWS_DATA, ReviewItem, COMPANY_CONFIG } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface GoogleReviewsSectionProps {
  onOpenGoogleModal: () => void;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({ onOpenGoogleModal }) => {
  const { t, lang } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [helpfulLikes, setHelpfulLikes] = useState<Record<string, number>>({});

  const filterOptions = [
    { id: 'all', label: lang === 'el' ? 'Όλες οι Κριτικές' : 'All Reviews' },
    { id: 'deep', label: lang === 'el' ? 'Βαθύς Καθαρισμός' : 'Deep Cleaning' },
    { id: 'home', label: lang === 'el' ? 'Γενικός Καθαρισμός' : 'Home Cleaning' },
    { id: 'holiday', label: lang === 'el' ? 'Airbnb & Εξοχικά' : 'Holiday & Airbnb' },
    { id: 'commercial', label: lang === 'el' ? 'Γραφεία' : 'Commercial' },
  ];

  const filteredReviews = selectedFilter === 'all'
    ? GOOGLE_REVIEWS_DATA
    : GOOGLE_REVIEWS_DATA.filter((r) => {
        const serviceText = r.service[lang].toLowerCase();
        if (selectedFilter === 'deep') return serviceText.includes('βαθύς') || serviceText.includes('deep');
        if (selectedFilter === 'home') return serviceText.includes('σπιτιού') || serviceText.includes('home');
        if (selectedFilter === 'holiday') return serviceText.includes('airbnb') || serviceText.includes('εξοχικά');
        if (selectedFilter === 'commercial') return serviceText.includes('γραφεία') || serviceText.includes('commercial');
        return true;
      });

  const handleLike = (id: string, initial: number) => {
    setHelpfulLikes((prev) => ({
      ...prev,
      [id]: (prev[id] ?? initial) + 1,
    }));
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 relative bg-white overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Google 5-Star Hero Showcase Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Pill Section Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.reviews.pill}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight mb-6 font-heading">
            {t.reviews.heading}
          </h2>

          {/* Prominent Google Badge Lockup */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-3xl bg-[#F8FAFF] border border-blue-200/80 shadow-md">
            
            {/* Google Multicolored Icon */}
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center border border-slate-100 shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
              </svg>
            </div>

            {/* Rating Number & 5 Gold Stars */}
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-[#1B2559] font-heading leading-none">
                  {COMPANY_CONFIG.rating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs font-bold text-slate-500 mt-0.5">
                {t.reviews.googleRatingText}
              </div>
            </div>

            {/* Verified Clean Badge */}
            <div className="border-t sm:border-t-0 sm:border-l border-slate-200/80 pt-2 sm:pt-0 sm:pl-6 text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <CheckCircle className="w-4 h-4" />
                <span>{t.reviews.verifiedCustomers}</span>
              </div>
              <div className="text-[11px] text-slate-400">
                {t.reviews.independentVerified}
              </div>
            </div>

            {/* Google Reviews Link Button */}
            <div className="w-full sm:w-auto pt-2 sm:pt-0">
              <a
                href={COMPANY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-colors"
              >
                <span>{t.reviews.readMoreGoogle}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2 font-medium">
              <Filter className="w-3.5 h-3.5" />
              <span>{lang === 'el' ? 'Φιλτράρισμα:' : 'Filter:'}</span>
            </div>
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === opt.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

        </div>

        {/* 6 Google Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredReviews.map((rev) => {
            const likes = helpfulLikes[rev.id] ?? rev.helpfulCount;

            return (
              <div
                key={rev.id}
                className="bg-[#F8FAFF] rounded-3xl p-7 border border-blue-100 hover:border-blue-300 hover:bg-white shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0 bg-slate-200">
                        <img
                          src={rev.avatar}
                          alt={rev.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1B2559] font-heading group-hover:text-blue-600 transition-colors">
                          {rev.name}
                        </h4>
                        <div className="text-xs text-slate-400">
                          {rev.city[lang]} · {rev.date[lang]}
                        </div>
                      </div>
                    </div>

                    {/* Google G Icon */}
                    <div className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Stars & Service Tag */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {rev.service[lang]}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 italic">
                    "{rev.text[lang]}"
                  </p>
                </div>

                {/* Card Footer: Verified Badge & Helpful Button */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{lang === 'el' ? 'Επαληθευμένη Επίσκεψη' : 'Verified Visit'}</span>
                  </div>

                  <button
                    onClick={() => handleLike(rev.id, rev.helpfulCount)}
                    className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer group/like"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 group-hover/like:scale-110 transition-transform" />
                    <span className="tabular-nums">{t.reviews.helpful} ({likes})</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Write a Review Modal Trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenGoogleModal}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all text-xs sm:text-sm cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>{lang === 'el' ? 'Γράψτε μια κριτική στο Google' : 'Write a Google Review'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
