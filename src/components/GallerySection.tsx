import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GalleryItem {
  id: string;
  title: { el: string; en: string };
  categoryKey: 'residential' | 'commercial' | 'bathrooms' | 'kitchens';
  image: string;
  span: string; // Tailwind grid span
}

interface GallerySectionProps {
  onOpenImageModal: (image: { title: string; src: string; category: string }) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenImageModal }) => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: {
        el: 'Πολυτελές Μπάνιο & Κρυστάλλινη Ντουζιέρα Χωρίς Άλατα',
        en: 'Pristine Master Bathroom & Descaled Glass Shower',
      },
      categoryKey: 'bathrooms',
      image: '/src/assets/images/gallery_bathroom_1792226985572.jpg',
      span: 'lg:col-span-2 lg:row-span-2',
    },
    {
      id: 'g-2',
      title: {
        el: 'Εταιρική Αίθουσα Συνεδριάσεων & Γυάλινα Χωρίσματα',
        en: 'Executive Conference Room & Glass Partition',
      },
      categoryKey: 'commercial',
      image: '/src/assets/images/gallery_office_1792226986072.jpg',
      span: 'lg:col-span-1 lg:row-span-1',
    },
    {
      id: 'g-3',
      title: {
        el: 'Μαρμάρινη Κουζίνα & Αστραφτερός Ανοξείδωτος Εξοπλισμός',
        en: 'Polished Marble Kitchen & Faucet Detailing',
      },
      categoryKey: 'kitchens',
      image: '/src/assets/images/cleaner_detail_kitchen_1792226924155.jpg',
      span: 'lg:col-span-1 lg:row-span-1',
    },
    {
      id: 'g-4',
      title: {
        el: 'Ηλιόλουστο Σαλόνι Κατοικίας με Καθαρό Παρκέ',
        en: 'Sunny Hardwood Open-Concept Living Room',
      },
      categoryKey: 'residential',
      image: '/src/assets/images/before_after_clean_1792226925394.jpg',
      span: 'lg:col-span-2 lg:row-span-1',
    },
    {
      id: 'g-5',
      title: {
        el: 'Εξειδικευμένο Προσωπικό Καθαρισμού με Επαγγελματικό Εξοπλισμό',
        en: 'Vetted Cleaning Specialists in Uniform',
      },
      categoryKey: 'residential',
      image: '/src/assets/images/about_cleaner_team_1792226923963.jpg',
      span: 'lg:col-span-1 lg:row-span-1',
    },
  ];

  const categories = [
    { key: 'all', label: t.gallery.allFilter },
    { key: 'residential', label: t.gallery.residential },
    { key: 'bathrooms', label: t.gallery.bathrooms },
    { key: 'kitchens', label: t.gallery.kitchens },
    { key: 'commercial', label: t.gallery.commercial },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.categoryKey === activeCategory);

  const getCategoryLabel = (key: string) => {
    switch (key) {
      case 'residential': return t.gallery.residential;
      case 'bathrooms': return t.gallery.bathrooms;
      case 'kitchens': return t.gallery.kitchens;
      case 'commercial': return t.gallery.commercial;
      default: return t.gallery.allFilter;
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.gallery.pill}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight mb-4 font-heading">
            {t.gallery.heading}
          </h2>

          <p className="text-base text-slate-600">
            {t.gallery.desc}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[260px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenImageModal({
                title: item.title[lang],
                src: item.image,
                category: getCategoryLabel(item.categoryKey),
              })}
              className={`group relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 cursor-pointer bg-slate-900 ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Details & Zoom Button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between text-left">
                <div>
                  <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider block mb-1">
                    {getCategoryLabel(item.categoryKey)}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
                    {item.title[lang]}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shrink-0 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
