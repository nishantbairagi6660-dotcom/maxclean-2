import React from 'react';
import { Users2, Award, DollarSign, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const FeaturePillars: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Users2,
      title: t.pillars.expertTeamTitle,
      description: t.pillars.expertTeamDesc,
      highlight: t.pillars.expertTeamBadge,
      bgColor: 'bg-blue-50/80',
      iconBg: 'bg-blue-600 text-white',
      badgeColor: 'text-blue-700 bg-blue-100/60',
    },
    {
      icon: Award,
      title: t.pillars.qualityServiceTitle,
      description: t.pillars.qualityServiceDesc,
      highlight: t.pillars.qualityServiceBadge,
      bgColor: 'bg-sky-50/80',
      iconBg: 'bg-sky-500 text-white',
      badgeColor: 'text-sky-700 bg-sky-100/60',
    },
    {
      icon: DollarSign,
      title: t.pillars.affordablePriceTitle,
      description: t.pillars.affordablePriceDesc,
      highlight: t.pillars.affordablePriceBadge,
      bgColor: 'bg-indigo-50/80',
      iconBg: 'bg-indigo-600 text-white',
      badgeColor: 'text-indigo-700 bg-indigo-100/60',
    },
  ];

  return (
    <div className="relative z-20 -mt-12 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 shadow-xl shadow-blue-900/5 border border-blue-100/70 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${pillar.badgeColor}`}>
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#1B2559] mb-3 font-heading group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>{COMPANY_CONFIG.name} {t.pillars.guarantee}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
