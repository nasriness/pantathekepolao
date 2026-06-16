import { Sunrise, Users, Car, Cake, Coins, Armchair, HelpCircle, FlameKindling } from 'lucide-react';
import { Language } from '../types';
import { WHY_CHOOSE_US, TRANSLATIONS } from '../data';

// Map string keys from why choose us database of data.ts to real Lucide icons
const IconMap: Record<string, any> = {
  Sunrise,
  Users,
  Car,
  Cake,
  Coins,
  Armchair,
};

interface WhyChooseUsProps {
  lang: Language;
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="py-20 bg-cream-white relative scroll-mt-10">
      {/* Decorative center divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gold-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-maroon-800 font-mono font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 gap-1.5 mb-2">
            <FlameKindling className="w-4 h-4 text-gold-500 animate-pulse" />
            <span>{lang === 'bn' ? 'আমাদের বিশেষত্ব' : 'OUR CONVENIENCES'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-maroon-950 mb-3 tracking-tight">
            {TRANSLATIONS.whyTitle[lang]}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
            {TRANSLATIONS.whySubtitle[lang]}
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          id="why-choose-us-grid"
        >
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = IconMap[item.icon] || HelpCircle;
            return (
              <div
                key={item.id}
                className="bg-white border border-maroon-100/40 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-gold-500/30 transition-all duration-300 group flex flex-col justify-between"
                id={`why-card-${item.id}`}
              >
                <div>
                  {/* Icon Circle Container with Hover flip effect */}
                  <div className="w-12 h-12 rounded-xl bg-maroon-50 border border-maroon-100 flex items-center justify-center text-maroon-800 group-hover:bg-maroon-800 group-hover:text-gold-300 group-hover:border-gold-400 transition-all duration-300 mb-6">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-maroon-950 group-hover:text-maroon-800 transition-colors font-serif mb-2 leading-snug">
                    {item.title[lang]}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    {item.desc[lang]}
                  </p>
                </div>

                {/* Micro Border Indicator */}
                <div className="w-full h-0.5 bg-maroon-50 rounded group-hover:bg-gold-500 transition-colors mt-6"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
