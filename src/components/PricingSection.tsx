import React, { useState } from 'react';
import { Check, X, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, isMonthly: boolean) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const { t, lang, formatPrice } = useLanguage();
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="py-24 lg:py-32 relative bg-gradient-to-b from-[#F0F5FF] via-[#E8F1FE] to-[#F0F6FF]">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/90 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.pricing.pill}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight mb-4 font-heading">
            {t.pricing.heading}
          </h2>

          <p className="text-base text-slate-600">
            {t.pricing.desc}
          </p>

          {/* Monthly / One-time toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white shadow-sm border border-blue-200">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer ${
                !isMonthly
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.pricing.oneTimeBtn}
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                isMonthly
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{t.pricing.monthlyBtn}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase ${
                isMonthly ? 'bg-amber-400 text-slate-900' : 'bg-blue-100 text-blue-700'
              }`}>
                {t.pricing.saveBadge}
              </span>
            </button>
          </div>
        </div>

        {/* 3 Plans Grid on Light Blue Band */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {PRICING_PLANS.map((plan) => {
            const price = isMonthly ? plan.monthlyPrice : plan.oneTimePrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isPopular
                    ? 'bg-white shadow-2xl shadow-blue-500/15 border-2 border-blue-500 lg:-translate-y-3 p-8 sm:p-9'
                    : 'bg-white/80 hover:bg-white border border-blue-100 shadow-md p-7 sm:p-8'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest shadow-md">
                      {t.pricing.mostPopular}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="text-left mb-6">
                    <h3 className="text-2xl font-extrabold text-[#1B2559] mb-1 font-heading">
                      {plan.name[lang]}
                    </h3>
                    <p className="text-xs text-slate-500 min-h-[32px]">
                      {plan.tagline[lang]}
                    </p>
                  </div>

                  {/* Price Lockup */}
                  <div className="text-left mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-[#1B2559] font-heading tracking-tight">
                        {formatPrice(price)}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 font-semibold">
                        {isMonthly ? t.pricing.perCleanMonthly : t.pricing.perCleanOneTime}
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-600 font-bold mt-1">
                      {t.pricing.vatNote}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8 text-left">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        {feat.included ? (
                          <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <span className={feat.included ? 'text-slate-700 font-medium' : 'text-slate-400 line-through'}>
                          {feat.text[lang]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-left text-[11px] text-slate-500 mb-5">
                    <span className="font-bold text-slate-700">{lang === 'el' ? 'Ιδανικό για:' : 'Best for:'}</span>{' '}
                    {plan.recommendedFor[lang]}
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan, isMonthly)}
                    className={`w-full py-4 px-6 rounded-full font-extrabold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
                        : 'bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white'
                    }`}
                  >
                    <span>{t.pricing.bookNowBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* VAT & Custom Quote Note */}
        <div className="mt-12 max-w-xl mx-auto p-4 rounded-2xl bg-white/70 border border-blue-200/60 shadow-xs flex items-center justify-center gap-2.5 text-xs text-slate-600">
          <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{t.pricing.customQuoteNote}</span>
        </div>

      </div>
    </section>
  );
};
