import React from 'react';
import { Home, Sparkles, Building2, CheckCircle2, Layers, Droplets, ArrowRight, Check, Hammer, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenDetails: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenDetails }) => {
  const { t, lang, formatPrice } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return Home;
      case 'Sparkles':
        return Sparkles;
      case 'Building2':
        return Building2;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Layers':
        return Layers;
      case 'Droplets':
        return Droplets;
      case 'Flame':
      case 'Hammer':
        return Hammer;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.services.pill}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight mb-4 font-heading">
            {t.services.heading}
          </h2>
          
          <p className="text-base text-slate-600">
            {t.services.desc}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative bg-[#F8FAFF] hover:bg-white rounded-3xl p-7 border border-blue-100/80 hover:border-blue-300 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-5 right-5">
                    <span className="px-2.5 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-xs">
                      {t.services.mostRequested}
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-13 h-13 rounded-2xl bg-white group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center shadow-md shadow-blue-500/10 mb-5 transition-colors duration-300 border border-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-extrabold text-[#1B2559] group-hover:text-blue-600 transition-colors mb-2 font-heading line-clamp-2">
                    {service.title[lang]}
                  </h3>
                  <div className="text-[11px] font-semibold text-blue-500 uppercase tracking-wide mb-3">
                    {service.tagline[lang]}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {service.description[lang]}
                  </p>

                  {/* Feature preview bullets */}
                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.features.slice(0, 3).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="line-clamp-1">{f[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Price & Actions */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-slate-400 font-medium">{t.services.fromPrice}</span>
                    <div className="text-xl font-extrabold text-[#1B2559] font-heading">
                      {formatPrice(service.startingPrice)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-all shadow-md shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{t.services.bookBtn}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onOpenDetails(service)}
                      className="p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-xs font-bold transition-colors cursor-pointer"
                      title={t.services.scopeDetails}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
