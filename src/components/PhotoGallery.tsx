import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem, Language } from '../types';
import { GALLERY_ITEMS, TRANSLATIONS } from '../data';

interface PhotoGalleryProps {
  lang: Language;
}

export default function PhotoGallery({ lang }: PhotoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', bn: 'সব ছবি', en: 'All Photos' },
    { id: 'ambience', bn: 'পরিবেশ', en: 'Rooftop Ambience' },
    { id: 'food', bn: 'খাবার', en: 'Exquisite Food' },
    { id: 'decorations', bn: 'সাজসজ্জা', en: 'Decor' },
  ];

  // Filtering gallery items
  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  return (
    <section id="gallery" className="py-20 bg-maroon-950 text-cream-white relative scroll-mt-10">
      {/* Background radial soft light overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(177,78,81,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-400 font-mono font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 gap-1.5 mb-2">
            <Camera className="w-4 h-4 text-gold-400" />
            <span>{lang === 'bn' ? 'ফটো অ্যালবাম' : 'VISUAL JOURNEY'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gold-200 mb-4 tracking-tight">
            {TRANSLATIONS.galleryTitle[lang]}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {TRANSLATIONS.gallerySubtitle[lang]}
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="gallery-category-nav">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-gold-500 border-gold-500 text-maroon-950 font-bold shadow'
                  : 'bg-maroon-900/40 border-maroon-800 text-gold-300/85 hover:text-gold-300 hover:border-gold-500/40'
              }`}
              id={`gallery-cat-${cat.id}`}
            >
              {lang === 'bn' ? cat.bn : cat.en}
            </button>
          ))}
        </div>

        {/* Masonry-Style Portfolio Grid */}
        <div 
          className="columns-1 sm:columns-2 lg:columns-3 gap-5"
          id="gallery-masonry-grid"
        >
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid bg-maroon-900/30 rounded-2xl overflow-hidden border border-maroon-800/60 p-1.5 mb-5 group cursor-pointer transition-all hover:border-gold-500/40 hover:shadow-lg hover:shadow-gold-500/5 select-none relative"
              id={`gallery-item-${item.id}`}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-auto">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  id={`gallery-img-${item.id}`}
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-cream-white leading-tight font-serif mt-0.5">
                        {item.title[lang]}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300 backdrop-blur-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex flex-col justify-between p-4 md:p-6"
            id="gallery-lightbox"
          >
            {/* Lightbox Header - Actions */}
            <div className="flex items-center justify-between py-2 border-b border-white/10 relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                  {filteredGallery[lightboxIndex].category}
                </span>
                <span className="text-sm md:text-base font-bold font-serif text-gray-200">
                  {filteredGallery[lightboxIndex].title[lang]}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-colors cursor-pointer"
                id="lightbox-close-btn"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Center - Image and Navigation Controls */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-colors z-10 cursor-pointer"
                id="lightbox-prev-btn"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Main Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={filteredGallery[lightboxIndex].image}
                alt={filteredGallery[lightboxIndex].title[lang]}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
                id="lightbox-main-img"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-colors z-10 cursor-pointer"
                id="lightbox-next-btn"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Lightbox Footer - Progress */}
            <div className="text-center py-2 text-xs font-semibold text-gray-400 border-t border-white/10 relative z-10">
              {lightboxIndex + 1} / {filteredGallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
