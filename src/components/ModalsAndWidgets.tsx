import React, { useState } from 'react';
import { X, Phone, MessageCircle, Star, CheckCircle2, Sparkles, Send, ExternalLink } from 'lucide-react';
import { COMPANY_CONFIG, ServiceItem } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

/* 1. Video Modal */
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
          aria-label={t.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center mb-5 animate-pulse">
            <Sparkles className="w-9 h-9 text-blue-400" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-heading mb-2">
            {t.modals.videoTitle}
          </h3>
          <p className="text-sm text-slate-400 max-w-md mb-6">
            {t.modals.videoDesc}
          </p>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 max-w-sm text-xs text-blue-200">
            "{t.modals.videoQuote}"
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Service Detail Modal */
interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookNow: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onBookNow }) => {
  const { t, lang, formatPrice } = useLanguage();
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-blue-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-left max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label={t.modals.close}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[#1B2559] font-heading">
              {service.title[lang]}
            </h3>
            <span className="text-xs font-semibold text-blue-600">
              {service.tagline[lang]}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          {service.description[lang]}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            {t.modals.serviceScopeTitle}
          </h4>
          <div className="space-y-2.5">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{feat[lang]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 mb-6 text-xs">
          <div>
            <span className="text-slate-500 font-medium block">{t.modals.durationEstimate}</span>
            <span className="text-[#1B2559] font-extrabold text-sm">{service.durationEstimate[lang]}</span>
          </div>
          <div>
            <span className="text-slate-500 font-medium block">{t.modals.startingAt}</span>
            <span className="text-blue-600 font-extrabold text-sm">{formatPrice(service.startingPrice)}</span>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onBookNow(service);
          }}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-sm shadow-md shadow-blue-500/25 transition-all cursor-pointer text-center"
        >
          {t.modals.bookServiceNow}
        </button>
      </div>
    </div>
  );
};

/* 3. Google Reviews Modal */
interface GoogleReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleReviewsModal: React.FC<GoogleReviewsModalProps> = ({ isOpen, onClose }) => {
  const { t, lang } = useLanguage();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setComment('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-blue-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label={t.modals.close}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#1B2559] font-heading">
              {t.modals.leaveReviewTitle}
            </h3>
            <span className="text-xs text-slate-500">
              {COMPANY_CONFIG.name} · {COMPANY_CONFIG.address}
            </span>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center text-emerald-600">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-emerald-500" />
            <h4 className="text-lg font-bold">{t.modals.reviewSuccessMsg}</h4>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                {t.modals.yourRating}
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setRating(s)}
                    className="cursor-pointer focus:outline-none"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        s <= rating
                          ? 'fill-amber-400 stroke-amber-400'
                          : 'fill-slate-100 stroke-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <textarea
                rows={4}
                required
                placeholder={t.modals.shareExpPlaceholder}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={COMPANY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>{t.modals.viewOnGoogleMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {t.modals.submitReviewBtn}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

/* 4. Lightbox Modal */
interface LightboxModalProps {
  image: { title: string; src: string; category: string } | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  const { t } = useLanguage();
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
          aria-label={t.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={image.src}
          alt={image.title}
          className="w-full max-h-[75vh] object-contain bg-black"
          referrerPolicy="no-referrer"
        />

        <div className="p-5 bg-slate-900/90 text-left border-t border-slate-800">
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block mb-1">
            {image.category}
          </span>
          <h4 className="text-lg font-bold text-white font-heading">
            {image.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

/* 5. Floating Widget with +357 WhatsApp & Active Language Prefill */
interface FloatingWidgetProps {
  onOpenBooking: () => void;
}

export const FloatingWidget: React.FC<FloatingWidgetProps> = ({ onOpenBooking }) => {
  const { t, lang } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const prefilledWhatsappMsg = lang === 'el'
    ? `Γεια σας ${COMPANY_CONFIG.name}, θα ήθελα να ενημερωθώ για προσφορά καθαρισμού στην Κύπρο.`
    : `Hello ${COMPANY_CONFIG.name}, I would like to inquire about a cleaning quote in Cyprus.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded quick contact menu */}
      {expanded && (
        <div className="p-4 rounded-3xl bg-white shadow-2xl border border-blue-100 flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200 max-w-xs text-left">
          <div className="text-xs font-bold text-[#1B2559] border-b border-slate-100 pb-2">
            {t.modals.quickSupport}
          </div>

          <a
            href={`tel:${COMPANY_CONFIG.tel}`}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>{COMPANY_CONFIG.displayPhone}</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(prefilledWhatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5" />
            </div>
            <span>{t.modals.chatWhatsApp}</span>
          </a>

          <button
            onClick={() => {
              setExpanded(false);
              onOpenBooking();
            }}
            className="w-full mt-1 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer text-center"
          >
            {t.modals.getEstimateQuick}
          </button>
        </div>
      )}

      {/* Main floating pill/bubble button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 px-4 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl shadow-blue-600/35 hover:scale-105 active:scale-95 transition-all cursor-pointer group border-2 border-white"
        aria-label="Contact options"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-blue-600" />
        </div>
        <span className="text-xs font-extrabold pr-1 hidden sm:inline">
          {expanded ? t.modals.close : t.modals.chatAndBook}
        </span>
      </button>
    </div>
  );
};
