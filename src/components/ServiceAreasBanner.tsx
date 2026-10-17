import React from 'react';
import { MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CYPRUS_DISTRICTS } from '../data/companyData';

export const ServiceAreasBanner: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#F0F5FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-blue-100 shadow-xl shadow-blue-500/5 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.serviceAreasBanner.pill}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B2559] tracking-tight mb-2 font-heading">
            {t.serviceAreasBanner.heading}
          </h3>

          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            {t.serviceAreasBanner.subheading}
          </p>

          {/* District Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CYPRUS_DISTRICTS.map((district) => (
              <div
                key={district.id}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-tr from-[#F8FAFF] to-[#EBF3FE] border border-blue-200/80 shadow-xs hover:shadow-md hover:border-blue-400 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-extrabold text-[#1B2559] font-heading">
                  {district.name[lang]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {lang === 'el' ? 'Καθημερινά δρομολόγια & άμεση διαθεσιμότητα' : 'Daily scheduling & island-wide availability'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
