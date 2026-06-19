import { Phone, MessageSquare, MapPin, Utensils } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface MobileStickyBarProps {
  lang: Language;
  openMenu: () => void;
}

export default function MobileStickyBar({ lang, openMenu }: MobileStickyBarProps) {
  // Pre-filled WhatsApp message based on selected language
  const getWhatsAppLink = () => {
    const message = lang === 'bn' 
      ? 'নমস্কার পান্তা থেকে পোলাও! আমি একটি টেবিল বুক করতে চাই বা প্রশ্ন করতে চাই।' 
      : 'Hello Panta Theke Polao! I would like to inquire about reserving a table or ordering food.';
    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  };

  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 w-full bg-stone-950/95 backdrop-blur-md border-t border-amber-500/20 z-50 py-2.5 px-4 shadow-[0_-5px_15px_rgba(0,0,0,0.5)]"
      id="mobile-sticky-action-bar"
    >
      <div className="grid grid-cols-4 gap-2">
        {/* Call Button */}
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center text-stone-200 hover:text-amber-400 active:scale-95 transition-all duration-150"
          id="sticky-action-call"
        >
          <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mb-1">
            <Phone className="w-5 h-5 text-amber-400 fill-amber-400/10" />
          </div>
          <span className="text-[10px] font-semibold tracking-wide">
            {TRANSLATIONS.stickyCall[lang]}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-stone-200 hover:text-amber-400 active:scale-95 transition-all duration-150"
          id="sticky-action-whatsapp"
        >
          <div className="w-10 h-10 rounded-full bg-stone-900 border border-emerald-500/20 flex items-center justify-center mb-1">
            <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
          </div>
          <span className="text-[10px] font-semibold tracking-wide">
            {TRANSLATIONS.stickyWhatsApp[lang]}
          </span>
        </a>

        {/* Directions Button */}
        <a
          href="https://www.google.co.in/maps/place/%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BE+%E0%A6%A5%E0%A7%86%E0%A6%9group+%E0%A6%AA%E0%A7%8B%E0%A6%B2%E0%A6%BE%E0%A6%93/@23.0612981,88.1725466,15z"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-stone-200 hover:text-amber-400 active:scale-95 transition-all duration-150"
          id="sticky-action-directions"
        >
          <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mb-1">
            <MapPin className="w-5 h-5 text-amber-400 hover:fill-amber-400/10" />
          </div>
          <span className="text-[10px] font-semibold tracking-wide">
            {TRANSLATIONS.stickyDirections[lang]}
          </span>
        </a>

        {/* Menu Access button */}
        <button
          onClick={openMenu}
          className="flex flex-col items-center justify-center text-stone-200 active:scale-95 transition-all duration-150 cursor-pointer"
          id="sticky-action-menu"
        >
          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mb-1 shadow-md">
            <Utensils className="w-5 h-5 text-stone-950 fill-stone-950/10" />
          </div>
          <span className="text-[10px] font-bold text-amber-400">
            {TRANSLATIONS.navMenu[lang]}
          </span>
        </button>
      </div>
    </div>
  );
}
