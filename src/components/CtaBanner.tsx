import React from 'react';
import { Phone, Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section className="py-12 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blue Rounded Banner */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-600/25 overflow-hidden">
          
          {/* Subtle background circles */}
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-blue-900/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{t.ctaBanner.pill}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 font-heading leading-tight">
                {t.ctaBanner.heading}
              </h2>

              <p className="text-blue-100 text-sm sm:text-base max-w-xl mb-6 leading-relaxed">
                {t.ctaBanner.desc}
              </p>

              {/* Trust perks */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  {t.ctaBanner.insuredPerk}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-300" />
                  {t.ctaBanner.sameDayPerk}
                </span>
              </div>
            </div>

            {/* Right Action Block with Phone & White Button */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              
              {/* Phone Lockup */}
              <a
                href={`tel:${COMPANY_CONFIG.tel}`}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 transition-colors w-full sm:w-auto"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 fill-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-blue-100 uppercase tracking-wider font-bold">
                    {t.ctaBanner.directLine}
                  </div>
                  <div className="text-lg font-black font-heading text-white">
                    {COMPANY_CONFIG.displayPhone}
                  </div>
                </div>
              </a>

              {/* White Pill Button */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-blue-50 text-blue-700 font-extrabold rounded-full text-sm sm:text-base shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.ctaBanner.getEstimateBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
