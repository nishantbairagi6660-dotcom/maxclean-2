import React from 'react';
import { CalendarCheck, ShieldCheck, Sparkles, Smile, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HowItWorksProps {
  onStartBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartBooking }) => {
  const { t } = useLanguage();

  const steps = [
    {
      step: '01',
      title: t.howItWorks.steps.step01Title,
      desc: t.howItWorks.steps.step01Desc,
      icon: CalendarCheck,
    },
    {
      step: '02',
      title: t.howItWorks.steps.step02Title,
      desc: t.howItWorks.steps.step02Desc,
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: t.howItWorks.steps.step03Title,
      desc: t.howItWorks.steps.step03Desc,
      icon: Sparkles,
    },
    {
      step: '04',
      title: t.howItWorks.steps.step04Title,
      desc: t.howItWorks.steps.step04Desc,
      icon: Smile,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.howItWorks.pill}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight mb-4 font-heading">
            {t.howItWorks.heading}
          </h2>
          
          <p className="text-base text-slate-600">
            {t.howItWorks.desc}
          </p>
        </div>

        {/* 4 Steps Grid connected with dotted line */}
        <div className="relative">
          
          {/* Desktop Dotted Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] -translate-y-8 h-0.5 border-t-2 border-dashed border-blue-300 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-blue-100/80 shadow-md shadow-blue-500/5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center group"
                >
                  {/* Step Number Badge */}
                  <div className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {t.howItWorks.stepPrefix} {item.step}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-extrabold text-[#1B2559] mb-3 font-heading">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Booking Trigger */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartBooking}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all cursor-pointer"
          >
            <span>{t.howItWorks.ctaBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
