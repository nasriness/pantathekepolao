import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Award, Compass, Utensils, X } from 'lucide-react';
import { MenuItem, Language } from '../types';
import { MENU_ITEMS, TRANSLATIONS, IMAGES } from '../data';

interface FoodMenuProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  openBookingSection: () => void;
}

export default function FoodMenu({ lang, isOpen, onClose, openBookingSection }: FoodMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isVegOnly, setIsVegOnly] = useState<boolean>(false);

  const categories = [
    { id: 'all', bn: 'সব খাবার', en: 'All Items' },
    { id: 'bengali-special', bn: 'বাঙালি স্পেশাল', en: 'Bengali Special' },
    { id: 'tandoor', bn: 'তন্দুর উনুন', en: 'Tandoor' },
    { id: 'chinese', bn: 'চাইনিজ সম্ভার', en: 'Chinese' },
    { id: 'desserts', bn: 'খাঁটি মিষ্টি', en: 'Desserts' },
    { id: 'beverages', bn: 'রুপটপ পানীয়', en: 'Beverages' },
  ];

  // Filtering Menu Items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesVeg = !isVegOnly || item.isVegetarian;
    return matchesCategory && matchesVeg;
  });

  const handleBookTableClick = () => {
    onClose();
    setTimeout(() => {
      openBookingSection();
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-black/70 backdrop-blur-md p-2 sm:p-4 animate-fade-in" id="menu-modal-overlay">
      
      {/* Modal Wrapper Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="bg-cream-white w-full max-w-6xl h-[92vh] sm:h-[88vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl relative border border-gold-500/20"
        id="menu-modal-content"
      >
        {/* Sticky Header with logo and background image */}
        <div className="bg-maroon-950 p-6 sm:p-8 text-cream-white relative flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gold-500/25 gap-4">
          
          <div>
            <span className="text-gold-400 font-mono font-bold tracking-widest text-[10px] sm:text-xs uppercase flex items-center space-x-2 gap-1.5 mb-1.5">
              <Utensils className="w-4 h-4 text-gold-400" />
              <span>{lang === 'bn' ? 'স্বাদ ও ঐতিহ্য' : 'TASTE THE HERITAGE'}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gold-300 tracking-tight">
              {TRANSLATIONS.menuTitle[lang]}
            </h2>
            <p className="text-xs text-gray-300 max-w-xl font-medium mt-1 leading-relaxed">
              {TRANSLATIONS.menuSubtitle[lang]}
            </p>
          </div>

          <div className="flex items-center gap-4 self-stretch sm:self-auto justify-between sm:justify-end shrink-0">
            <span className="text-xs text-gray-300 font-mono italic">
              {lang === 'bn' ? '৩য় তলা, চতুষ্পাঠী মোড়' : '3rd Floor, Krishnanagar Road'}
            </span>
            <button
              onClick={onClose}
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-gold-500 hover:text-maroon-950 text-cream-white transition-all cursor-pointer border border-white/10 shadow-md flex items-center justify-center scale-95 hover:scale-105 active:scale-90"
              aria-label="Close Menu"
              id="menu-modal-close-btn"
            >
              <X className="w-5 h-5 sm:w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Categories Bar & Vegetarian Switch */}
        <div className="bg-maroon-900 border-b border-maroon-800 p-4 shrink-0 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Sliding Categories Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 md:pb-0 scrollbar-thin scrollbar-thumb-maroon-800 scrollbar-track-transparent">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 border select-none ${
                      isActive
                        ? 'bg-gold-500 border-gold-400 text-maroon-950 shadow-md font-bold'
                        : 'bg-maroon-950/40 border-maroon-800 text-gray-300 hover:bg-maroon-950/80 hover:text-white'
                    }`}
                    id={`cat-btn-${cat.id}`}
                  >
                    {lang === 'bn' ? cat.bn : cat.en}
                  </button>
                );
              })}
            </div>

            {/* Pure Veg Toggler Button */}
            <button
              onClick={() => setIsVegOnly(!isVegOnly)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border text-xs font-bold transition-all cursor-pointer shrink-0 self-start md:self-auto ${
                isVegOnly
                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-extrabold shadow'
                  : 'bg-maroon-950/20 border-maroon-850 text-gray-300 hover:bg-maroon-950/40'
              }`}
              id="veg-toggle-btn"
            >
              <Leaf className={`w-3.5 h-3.5 ${isVegOnly ? 'text-emerald-400 fill-emerald-450' : 'text-gray-400'}`} />
              <span>{lang === 'bn' ? 'শুধুমাত্র নিরামিষ' : 'Pure Veg Only'}</span>
            </button>

          </div>
        </div>

        {/* Scrollable Contents Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-cream-100" id="menu-modal-scroll-area">
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="menu-items-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-maroon-100/40 hover:border-gold-500/30 hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
                  id={`menu-card-${item.id}`}
                >
                  {/* Image Container with Hover zoom */}
                  <div className="relative aspect-video w-full overflow-hidden bg-maroon-50">
                    <img
                      src={item.image || IMAGES.hero}
                      alt={item.name[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      id={`menu-img-${item.id}`}
                    />
                    
                    {/* Badges Overlay */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {item.isPopular && (
                        <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-maroon-800 text-gold-300 text-[10px] sm:text-xs font-bold tracking-wider shadow-md border border-gold-500/30">
                          <Award className="w-3.5 h-3.5" />
                          <span>{TRANSLATIONS.popularTag[lang]}</span>
                        </span>
                      )}
                      {item.isVegetarian && (
                        <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[10px] sm:text-xs font-bold tracking-wider shadow-md">
                          <Leaf className="w-3.5 h-3.5 fill-current" />
                          <span>{TRANSLATIONS.vegTag[lang]}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between" id={`menu-content-${item.id}`}>
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-maroon-950 group-hover:text-maroon-700 transition-colors font-serif leading-snug">
                          {item.name[lang]}
                        </h3>
                        <span className="text-xl font-bold text-maroon-800 font-mono flex items-center shrink-0">
                          <span className="text-gold-600 text-sm mr-0.5">{TRANSLATIONS.pricePrefix[lang]}</span>
                          <span>{item.price}</span>
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                        {item.description[lang]}
                      </p>
                    </div>

                    {/* Action Panel */}
                    <div className="pt-3 border-t border-maroon-50/60 flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-gold-600 font-semibold uppercase flex items-center space-x-1">
                        <Compass className="w-3.5 h-3.5" />
                        <span>{item.category.replace('-', ' ')}</span>
                      </span>
                      <button
                        onClick={handleBookTableClick}
                        className="px-3.5 py-1.5 text-xs font-bold text-maroon-900 border border-maroon-200 hover:bg-maroon-900 hover:border-maroon-900 hover:text-gold-300 rounded-lg transition-all cursor-pointer shadow-sm select-none"
                      >
                        {lang === 'bn' ? 'টেবিল বুক করুন' : 'Book Table'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty Filter State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white/50 rounded-2xl border border-dashed border-maroon-200 mt-8" id="empty-menu">
              <Utensils className="w-12 h-12 text-maroon-300 mx-auto mb-3 animate-bounce" />
              <p className="text-maroon-950 font-bold text-lg mb-1">
                {lang === 'bn' ? 'কোনো খাবার পাওয়া যায়নি' : 'No Items Found'}
              </p>
              <p className="text-sm text-gray-500">
                {lang === 'bn' ? 'দয়া করে ফিল্টারটি পরিবর্তন করুন।' : 'Please adjust your search toggles or reset filters.'}
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setIsVegOnly(false); }}
                className="mt-4 px-4 py-2 bg-maroon-800 hover:bg-maroon-900 text-gold-300 font-bold rounded-lg text-xs"
              >
                {lang === 'bn' ? 'সব মেনু রিসেট করুন' : 'Reset Filters'}
              </button>
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
}
