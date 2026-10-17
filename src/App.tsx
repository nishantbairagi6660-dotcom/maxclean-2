/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturePillars } from './components/FeaturePillars';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { BookingFormSection } from './components/BookingFormSection';
import { ServiceAreasBanner } from './components/ServiceAreasBanner';
import { Footer } from './components/Footer';
import {
  VideoModal,
  ServiceDetailModal,
  GoogleReviewsModal,
  LightboxModal,
  FloatingWidget,
} from './components/ModalsAndWidgets';
import { ServiceItem, PricingPlan } from './data/companyData';

function AppContent() {
  // Modal states
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ title: string; src: string; category: string } | null>(null);

  // Form selection state
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('home-cleaning');

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    const elem = document.getElementById('booking-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    if (plan.id === 'basic') setPreselectedServiceId('home-cleaning');
    else if (plan.id === 'standard') setPreselectedServiceId('deep-cleaning');
    else if (plan.id === 'premium') setPreselectedServiceId('move-in-out');
    scrollToBooking();
  };

  const handleSelectService = (service: ServiceItem) => {
    scrollToBooking(service.id);
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-slate-800 antialiased selection:bg-blue-500 selection:text-white transition-opacity duration-300">
      {/* 1. Navbar with Language Switcher */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main>
        {/* 2. Hero */}
        <Hero
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onExploreServices={scrollToServices}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 3. Three Feature Cards Overlapping Hero Bottom */}
        <FeaturePillars />

        {/* 4. About Us */}
        <AboutSection onLearnMore={scrollToServices} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs onOpenBooking={() => scrollToBooking()} />

        {/* 6. Services (8 Cyprus Service Cards) */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenDetails={(service) => setSelectedServiceForDetail(service)}
        />

        {/* 7. How It Works */}
        <HowItWorks onStartBooking={() => scrollToBooking()} />

        {/* 8. Pricing in Euros (€35, €75, €130 with VAT note) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 9. Google 5-Star Reviews Verified */}
        <GoogleReviewsSection onOpenGoogleModal={() => setIsGoogleModalOpen(true)} />

        {/* 10. Before / After Interactive Slider */}
        <BeforeAfterSection />

        {/* 11. Bento Gallery */}
        <GallerySection onOpenImageModal={(img) => setLightboxImage(img)} />

        {/* 12. FAQ */}
        <FaqSection onAskQuestion={() => scrollToBooking()} />

        {/* 13. Call For A Free Quote CTA Banner */}
        <CtaBanner onOpenBooking={() => scrollToBooking()} />

        {/* 14. Quote & Booking Form */}
        <BookingFormSection initialServiceId={preselectedServiceId} />

        {/* "We serve all of Cyprus" Island-wide Service Areas Banner */}
        <ServiceAreasBanner />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Floating Action Button (WhatsApp +357 / Call / Quick Quote) */}
      <FloatingWidget onOpenBooking={() => scrollToBooking()} />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <ServiceDetailModal
        service={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onBookNow={(service) => handleSelectService(service)}
      />

      <GoogleReviewsModal
        isOpen={isGoogleModalOpen}
        onClose={() => setIsGoogleModalOpen(false)}
      />

      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
