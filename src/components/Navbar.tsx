import React, { useState, useEffect } from 'react';
import { Phone, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { t, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-blue-100/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight font-heading text-[#1B2559]">
                {COMPANY_CONFIG.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-blue-600 font-bold -mt-1 hidden sm:block">
                {lang === 'el' ? 'Καθαρισμός & Φρεσκάδα' : 'Pure Care & Freshness'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Desktop Language Switcher */}
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            {/* Direct Phone Dial */}
            <a
              href={`tel:${COMPANY_CONFIG.tel}`}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
              title={`${t.nav.callUs}: ${COMPANY_CONFIG.displayPhone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Contact Us CTA Button */}
            <button
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-full shadow-md shadow-blue-500/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>{t.nav.contactUs}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-blue-50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 p-5 rounded-2xl bg-white/98 shadow-xl border border-blue-100 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-lg">
            <div className="flex flex-col gap-3">
              {/* Language Switcher inside Mobile Menu */}
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {lang === 'el' ? 'Γλώσσα / Language' : 'Language / Γλώσσα'}
                </span>
                <LanguageToggle />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY_CONFIG.tel}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-blue-600"
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY_CONFIG.displayPhone}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 text-center text-sm font-bold text-white bg-blue-600 rounded-full shadow-md shadow-blue-500/25 cursor-pointer"
                >
                  {t.nav.bookEstimate}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
