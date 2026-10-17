import React from 'react';
import { UserCheck, Leaf, Shield, HeartHandshake, PhoneCall, Sparkles, CheckCircle, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const { t, lang } = useLanguage();

  const reasons = [
    {
      icon: UserCheck,
      title: t.whyChooseUs.reasons.staffTitle,
      description: t.whyChooseUs.reasons.staffDesc,
      accent: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Leaf,
      title: t.whyChooseUs.reasons.ecoTitle,
      description: t.whyChooseUs.reasons.ecoDesc,
      accent: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: Shield,
      title: t.whyChooseUs.reasons.insuredTitle,
      description: t.whyChooseUs.reasons.insuredDesc,
      accent: 'bg-indigo-50 text-indigo-600',
    },
    {
      icon: HeartHandshake,
      title: t.whyChooseUs.reasons.guaranteeTitle,
      description: t.whyChooseUs.reasons.guaranteeDesc,
      accent: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 lg:py-32 relative bg-gradient-to-b from-[#F5F8FE] via-[#F9FBFF] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reasons & Small Contact Card */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>{t.whyChooseUs.pill}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight leading-[1.18] mb-6 font-heading">
              {t.whyChooseUs.heading}
            </h2>

            <p className="text-base text-slate-600 mb-10 max-w-xl">
              {t.whyChooseUs.desc}
            </p>

            {/* 4 Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-blue-100/70 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-start text-left"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${reason.accent} flex items-center justify-center mb-4 shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#1B2559] mb-2 font-heading">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Small Contact Card */}
            <div className="w-full p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl shadow-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-blue-100 font-semibold uppercase tracking-wider">
                    {t.whyChooseUs.contactCard.title}
                  </div>
                  <div className="text-lg sm:text-xl font-black font-heading">
                    {COMPANY_CONFIG.displayPhone}
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-blue-50 text-blue-600 font-extrabold rounded-full text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
              >
                {t.whyChooseUs.contactCard.btn}
              </button>
            </div>

          </div>

          {/* Right Column: Image Collage with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Rounded Image */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/src/assets/images/cleaner_detail_kitchen_1792226924155.jpg"
                  alt={lang === 'el' ? 'Καθαρισμός κουζίνας υψηλής ποιότητας' : 'High standard kitchen detailing'}
                  className="w-full h-[460px] object-cover hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-blue-100 text-left animate-float-slow">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-800 font-heading">
                    {t.whyChooseUs.badgeQuality}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {t.whyChooseUs.badgeLocation}
                </div>
              </div>

              {/* Bottom Floating Badge: Eco Clean */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-blue-100 text-left animate-float-gentle flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#1B2559] font-heading">
                    {t.whyChooseUs.petSafeBadge}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t.whyChooseUs.petSafeDesc}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
