import React from 'react';
import { Play, Star, Trophy, Users, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenVideo: () => void;
  onExploreServices: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo, onExploreServices, onOpenBooking }) => {
  const { t, lang } = useLanguage();

  const vipAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F3F7FF] to-white">
      {/* Decorative blurred background blobs & bubbles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-0" />
      
      {/* Floating subtle ambient bubbles */}
      <div className="absolute top-28 left-12 w-6 h-6 rounded-full bg-blue-200/50 blur-[1px] animate-float-gentle pointer-events-none" />
      <div className="absolute top-48 right-1/3 w-8 h-8 rounded-full bg-sky-200/40 blur-[1px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-5 h-5 rounded-full bg-blue-100/60 blur-[1px] animate-float-gentle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill section label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.hero.pillTagline}</span>
            </div>

            {/* Main Headline with one word highlighted */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B2559] tracking-tight leading-[1.15] mb-6 font-heading">
              {t.hero.headlinePart1} <span className="text-blue-600 relative inline-block">
                {t.hero.headlineHighlight}
                <svg className="absolute -bottom-2 left-0 w-full text-blue-300/60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 7C55 2.5 145 2.5 197.5 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> {t.hero.headlinePart2}
            </h1>

            {/* Short Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              {t.hero.description}
            </p>

            {/* CTAs: Our Services button + Round Play Button */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
              <button
                onClick={onExploreServices}
                className="px-8 py-4 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.ourServicesBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenVideo}
                  aria-label={t.hero.watchVideo}
                  className="relative w-13 h-13 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all border border-blue-100 group cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping group-hover:animate-none" />
                  <Play className="w-5 h-5 ml-0.5 fill-blue-600 text-blue-600" />
                </button>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900 leading-tight">{t.hero.watchVideo}</span>
                  <span className="block text-[11px] text-slate-500">{t.hero.watchVideoSub}</span>
                </div>
              </div>
            </div>

            {/* VIP Clients row + Google rating badge */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-blue-100/80 w-full max-w-lg">
              {/* Overlapping Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3 overflow-hidden">
                  {vipAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`VIP client avatar ${i + 1}`}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-[#1B2559] leading-tight">{t.hero.vipClients}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.hero.activeMembers}</div>
                </div>
              </div>

              {/* Small Google Rating Badge linking to Google Maps */}
              <a
                href={COMPANY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-2xl border border-blue-100 shadow-xs hover:border-blue-300 transition-colors cursor-pointer"
                title={t.hero.basedOnReviews}
              >
                {/* Google G logo */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
                </svg>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-slate-900">{COMPANY_CONFIG.rating}</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">250+ {lang === 'el' ? 'Κριτικές' : 'Reviews'}</span>
              </a>
            </div>

          </div>

          {/* Right Hero Image on curved backdrop */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Soft curved light blue platform background */}
            <div className="absolute inset-x-4 -bottom-6 top-8 bg-gradient-to-tr from-blue-200/50 via-sky-100/60 to-blue-50/20 rounded-[3rem] -rotate-2 transform scale-105 -z-10 shadow-xl shadow-blue-500/10" />
            
            {/* Main Hero Product Photography */}
            <div className="relative w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-600/15 border-4 border-white bg-white group">
              <img
                src="/src/assets/images/hero_cleaning_supplies_1792226923110.jpg"
                alt="Blue bucket of premium eco cleaning supplies with water droplets"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating White Stat Card 1: 800+ Happy Clients */}
            <div className="absolute -top-4 -left-4 sm:-left-8 glass-panel rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/80 animate-float-gentle flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-base sm:text-lg font-black text-[#1B2559] leading-tight font-heading tabular-nums">
                  {COMPANY_CONFIG.stats.happyClients}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">
                  {t.hero.statHappyClients}
                </div>
              </div>
            </div>

            {/* Floating White Stat Card 2: 180+ Awards Received */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 glass-panel rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/80 animate-float-slow flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-base sm:text-lg font-black text-[#1B2559] leading-tight font-heading tabular-nums">
                  {COMPANY_CONFIG.stats.awardsReceived}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">
                  {t.hero.statAwards}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
