import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BeforeAfterSection: React.FC = () => {
  const { t } = useLanguage();
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 lg:py-32 relative bg-gradient-to-b from-[#F3F7FD] via-white to-[#F8FAFE] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.beforeAfter.pill}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2559] tracking-tight mb-4 font-heading">
            {t.beforeAfter.heading}
          </h2>

          <p className="text-base text-slate-600">
            {t.beforeAfter.desc}
          </p>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/15 border-4 border-white select-none cursor-ew-resize bg-slate-900"
          >
            {/* CLEAN (After) Image - Background Base */}
            <img
              src="/src/assets/images/before_after_clean_1792226925394.jpg"
              alt="After professional clean"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-md text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider z-20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.beforeAfter.afterLabel}</span>
            </div>

            {/* DIRTY (Before) Image - Clipped Top Layer */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="/src/assets/images/before_after_dirty_1792226925916.jpg"
                alt="Before cleaning"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{t.beforeAfter.beforeLabel}</span>
              </div>
            </div>

            {/* Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-30 pointer-events-none flex items-center justify-center -ml-0.5"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Central Drag Button */}
              <div className="w-11 h-11 rounded-full bg-white text-blue-600 shadow-2xl border-2 border-blue-400 flex items-center justify-center -translate-x-0.5 group">
                <ArrowLeftRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>

          </div>

          {/* Slider Instruction Hint */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <ArrowLeftRight className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.beforeAfter.dragHint}</span>
          </div>

          {/* Quick preset toggle buttons */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setSliderPos(0)}
              className="px-4 py-1.5 text-xs font-bold rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
            >
              {t.beforeAfter.btnClean}
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className="px-4 py-1.5 text-xs font-bold rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors cursor-pointer"
            >
              {t.beforeAfter.btnSplit}
            </button>
            <button
              onClick={() => setSliderPos(100)}
              className="px-4 py-1.5 text-xs font-bold rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
            >
              {t.beforeAfter.btnBefore}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
