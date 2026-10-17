import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Soft background ambient gradient */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Rounded Rectangle Image */}
              <div className="w-4/5 rounded-[2.25rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white bg-slate-100">
                <img
                  src="/src/assets/images/about_cleaner_team_1792226923963.jpg"
                  alt={lang === 'el' ? 'Επαγγελματική ομάδα καθαρισμού Maxclean στην Κύπρο' : 'Maxclean professional cleaning staff in Cyprus'}
                  className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Circle Image Overlapping bottom right */}
              <div className="absolute -bottom-8 right-2 sm:right-6 w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10">
                <img
                  src="/src/assets/images/cleaner_detail_kitchen_1792226924155.jpg"
                  alt={lang === 'el' ? 'Σχολαστικός καθαρισμός πάγκου κουζίνας' : 'Detail cleaner polishing white kitchen surface'}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Third small accent badge / secondary element */}
              <div className="absolute top-8 right-4 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white hidden sm:block">
                <img
                  src="/src/assets/images/gallery_bathroom_1792226985572.jpg"
                  alt={lang === 'el' ? 'Πεντακάθαρο πολυτελές μπάνιο' : 'Spotless clean bathroom with white marble'}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Blue Floating Badge: 5.0 Rating */}
              <div className="absolute top-1/3 -left-4 sm:-left-8 bg-blue-600 text-white rounded-2xl p-4 sm:p-5 shadow-xl shadow-blue-600/30 border border-blue-400/30 z-20 animate-float-gentle flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 text-amber-300 fill-amber-300" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-heading leading-tight">
                    {COMPANY_CONFIG.rating}★ {t.about.ratingBadge}
                  </div>
                  <div className="text-xs text-blue-100 font-semibold uppercase tracking-wider">
                    {t.about.ratingBadgeSub}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Story & Stats */}
          <div className="lg:col-span-6 flex flex-col items-start text-left mt-8 lg:mt-0">
            
            {/* Pill Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>{t.about.pill}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight leading-[1.2] mb-6 font-heading">
              {t.about.heading}
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              {t.about.p1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {t.about.p2}
            </p>

            {/* 3 Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-6 border-y border-slate-100 w-full mb-8">
              <div className="text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B2559] font-heading tabular-nums">
                  {COMPANY_CONFIG.stats.projectsCompleted}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {t.about.statProjects}
                </div>
              </div>

              <div className="text-left border-l border-slate-100 pl-3 sm:pl-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 font-heading tabular-nums">
                  {COMPANY_CONFIG.stats.expertCleaners}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {t.about.statCleaners}
                </div>
              </div>

              <div className="text-left border-l border-slate-100 pl-3 sm:pl-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B2559] font-heading tabular-nums">
                  {COMPANY_CONFIG.stats.repeatClients}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {t.about.statRepeat}
                </div>
              </div>
            </div>

            {/* CEO Signature and Name */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-500/30 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
                  alt="Sarah Jenkins"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-heading font-extrabold text-base text-[#1B2559]">
                  {COMPANY_CONFIG.ceo.name}
                </div>
                <div className="text-xs text-blue-600 font-semibold">
                  {COMPANY_CONFIG.ceo.role[lang]}
                </div>
                {/* Stylized SVG signature */}
                <div className="h-6 mt-1 opacity-80 text-blue-900">
                  <svg className="w-32 h-6" viewBox="0 0 160 30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 22C12 10 25 5 35 18C42 27 30 28 20 22C15 19 28 8 50 12C65 14 55 26 70 20C82 15 95 9 110 16C120 21 135 12 155 18" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
