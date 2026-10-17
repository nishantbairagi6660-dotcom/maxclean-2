import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MapPin, Check, Heart, Shield } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA, CYPRUS_DISTRICTS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2500);
  };

  return (
    <footer className="bg-[#111936] text-slate-300 pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      
      {/* Decorative soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1B2559]/80 border border-slate-700/60 shadow-xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400">
              {lang === 'el' ? 'Συμβουλές Καθαριότητας Κύπρου' : 'Clean Living Insights'}
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1 font-heading">
              {t.footer.newsletterTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              {t.footer.newsletterDesc}
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex-1 max-w-md">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-300 text-xs font-bold justify-center">
                <Check className="w-4 h-4" />
                <span>{t.footer.newsletterSuccess}</span>
              </div>
            ) : (
              <div className="flex items-center p-1.5 rounded-full bg-slate-900 border border-slate-700 focus-within:border-blue-500 transition-colors">
                <input
                  type="email"
                  required
                  placeholder={t.footer.newsletterPlaceholder}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2 text-xs sm:text-sm bg-transparent text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full transition-all shrink-0 cursor-pointer"
                >
                  {t.footer.newsletterBtn}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 text-left">
            <a href="#hero" className="flex items-center gap-2.5 mb-4 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white font-heading">
                {COMPANY_CONFIG.name}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              "{COMPANY_CONFIG.tagline}" — {t.footer.taglineSubtitle}
            </p>

            <div className="flex items-center gap-3">
              {['facebook', 'instagram', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  aria-label={platform}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                >
                  {platform[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4 font-heading">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">{t.nav.reviews}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Services List (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4 font-heading">
              {t.footer.ourServices}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4 font-heading">
              {t.footer.contactHours}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href={COMPANY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
                  title="View on Google Maps"
                >
                  {COMPANY_CONFIG.address}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.tel}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                {COMPANY_CONFIG.hours[lang]}
              </div>
            </div>
          </div>

        </div>

        {/* Cyprus Service Areas Chips */}
        <div className="py-6 border-b border-slate-800 text-left">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
            {t.footer.serviceAreasTitle}
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {CYPRUS_DISTRICTS.map((district) => (
              <span
                key={district.id}
                className="px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-blue-400 hover:text-white transition-colors"
              >
                {district.name[lang]}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_CONFIG.name}. {t.footer.copyright}
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">{t.footer.privacy}</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">{t.footer.terms}</a>
            <a href="#insurance" className="hover:text-slate-400 transition-colors">{t.footer.insurance}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
