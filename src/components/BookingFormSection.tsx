import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles, Send, CheckCircle2, ShieldCheck, DollarSign, RefreshCw, User, Mail, Phone, Home } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface BookingFormSectionProps {
  initialServiceId?: string;
  initialPlanId?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({ initialServiceId }) => {
  const { t, lang, formatPrice } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'home-cleaning',
    homeSize: '2-bed',
    frequency: 'one-time',
    date: '',
    timeSlot: 'morning',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Sync if initial props change
  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  // Compute live price estimate in Euros
  const getEstimatedPrice = () => {
    let base = 35;
    const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId);
    if (selectedService) {
      base = selectedService.startingPrice;
    }

    // Size multiplier
    let sizeAdd = 0;
    if (formData.homeSize === '1-bed') sizeAdd = 0;
    else if (formData.homeSize === '2-bed') sizeAdd = 25;
    else if (formData.homeSize === '3-bed') sizeAdd = 45;
    else if (formData.homeSize === '4-plus-bed') sizeAdd = 70;
    else if (formData.homeSize === 'villa') sizeAdd = 95;
    else if (formData.homeSize === 'commercial') sizeAdd = 100;

    let total = base + sizeAdd;

    // Recurring discount (20%)
    if (formData.frequency === 'weekly' || formData.frequency === 'bi-weekly' || formData.frequency === 'monthly') {
      total = Math.round(total * 0.8);
    }

    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate verified booking processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomCode = `CY-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingRef(randomCode);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceId: 'home-cleaning',
      homeSize: '2-bed',
      frequency: 'one-time',
      date: '',
      timeSlot: 'morning',
      notes: '',
    });
  };

  const estimatedPrice = getEstimatedPrice();
  const isRecurring = formData.frequency !== 'one-time';

  return (
    <section id="booking-section" className="py-24 lg:py-32 relative bg-gradient-to-b from-[#F0F6FF] via-[#F8FAFF] to-white overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/90 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.booking.pill}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight mb-4 font-heading">
            {t.booking.heading}
          </h2>

          <p className="text-base text-slate-600">
            {t.booking.desc}
          </p>
        </div>

        {/* Main Form + Live Estimation Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-xl shadow-blue-500/5 text-left">
            {isSuccess ? (
              <div className="text-center py-12 animate-in fade-in duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-md border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {t.booking.success.confirmedBadge}
                </span>

                <h3 className="text-2xl font-extrabold text-[#1B2559] font-heading mt-3 mb-2">
                  {t.booking.success.thankYou}, {formData.name || (lang === 'el' ? 'Αγαπητέ Πελάτη' : 'Valued Client')}!
                </h3>

                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  {t.booking.success.detailsMsg}
                </p>

                <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-blue-100 max-w-xs mx-auto mb-8 text-xs text-slate-500">
                  <div>
                    {t.booking.success.refCode}: <span className="font-black text-blue-600">{bookingRef}</span>
                  </div>
                  <div className="mt-1">
                    {formData.phone && <span>Tel: {formData.phone}</span>}
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {t.booking.success.bookAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.booking.form.fullName} *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder={t.booking.form.fullNamePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.booking.form.phone} *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+357 XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.booking.form.email} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder={t.booking.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* 3. Service Type Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.booking.form.serviceType} *
                  </label>
                  <div className="relative">
                    <Home className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer text-slate-700"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title[lang]} ({t.services.fromPrice} {formatPrice(s.startingPrice)})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Property Size & Frequency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.booking.form.propertySize}
                    </label>
                    <select
                      value={formData.homeSize}
                      onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer text-slate-700"
                    >
                      <option value="1-bed">{t.booking.sizes.studio}</option>
                      <option value="2-bed">{t.booking.sizes.twoBed}</option>
                      <option value="3-bed">{t.booking.sizes.threeBed}</option>
                      <option value="4-plus-bed">{t.booking.sizes.fourBed}</option>
                      <option value="villa">{t.booking.sizes.villa}</option>
                      <option value="commercial">{t.booking.sizes.commercial}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.booking.form.frequency}
                    </label>
                    <select
                      value={formData.frequency}
                      onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer text-slate-700"
                    >
                      <option value="one-time">{t.booking.frequencies.oneTime}</option>
                      <option value="weekly">{t.booking.frequencies.weekly} (-20%)</option>
                      <option value="bi-weekly">{t.booking.frequencies.biWeekly} (-20%)</option>
                      <option value="monthly">{t.booking.frequencies.monthly} (-20%)</option>
                    </select>
                  </div>
                </div>

                {/* 5. Date & Preferred Window */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.booking.form.preferredDate} (DD/MM/YYYY)
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer text-slate-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.booking.form.arrivalWindow}
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer text-slate-700"
                      >
                        <option value="morning">{t.booking.windows.morning} (08:00 - 12:00)</option>
                        <option value="afternoon">{t.booking.windows.afternoon} (12:00 - 16:00)</option>
                        <option value="late-afternoon">{t.booking.windows.lateAfternoon} (16:00 - 19:00)</option>
                        <option value="flexible">{t.booking.windows.flexible}</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 6. Special Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.booking.form.notes}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.booking.form.notesPlaceholder}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8FAFF] border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-sm sm:text-base shadow-xl shadow-blue-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{t.booking.form.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.booking.form.submitBtn}</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  {t.booking.form.noPrepayment}
                </p>

              </form>
            )}
          </div>

          {/* Right Column: Live Price Card & Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Live Pricing Summary Box */}
            <div className="p-8 rounded-3xl bg-white border border-blue-100 shadow-xl shadow-blue-500/5 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.booking.estimatedRate}</span>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black text-[#1B2559] font-heading tabular-nums">
                  {formatPrice(estimatedPrice)}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {isRecurring ? t.booking.recurringPerVisit : t.booking.oneTimeTotal}
                </span>
              </div>

              {isRecurring && (
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-3">
                  {t.booking.discountApplied}
                </div>
              )}

              <div className="text-xs text-blue-600 font-bold mb-4">
                {t.booking.includesVatNote}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                {lang === 'el'
                  ? 'Η τελική τιμή επιβεβαιώνεται γραπτώς πριν την έναρξη των εργασιών. Καμία κρυφή χρέωση για υλικά ή εξοπλισμό.'
                  : 'Final price confirmed in writing before service begins. All bio-cleaning supplies and equipment included.'}
              </p>
            </div>

            {/* Trust highlights */}
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-100 space-y-3.5">
              <div className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{t.booking.trustInsured}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t.booking.trustCancellation}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{t.booking.trustReclean}</span>
              </div>
            </div>

            {/* Direct Support Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase">{lang === 'el' ? 'Χρειάζεστε βοήθεια;' : 'Need Assistance?'}</div>
                <div className="text-sm font-extrabold text-[#1B2559] mt-0.5">{COMPANY_CONFIG.displayPhone}</div>
              </div>
              <a
                href={`tel:${COMPANY_CONFIG.tel}`}
                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full text-xs font-bold transition-colors"
              >
                {lang === 'el' ? 'Κλήση' : 'Call Now'}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
