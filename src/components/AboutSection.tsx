import { Sparkles, CalendarCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, IMAGES } from '../data';

interface AboutSectionProps {
  lang: Language;
  openBookingSection: () => void;
}

export default function AboutSection({ lang, openBookingSection }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-cream-white relative scroll-mt-10 overflow-hidden">
      {/* Decorative floral side leaf decorations or gold dots */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-maroon-800/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Grid Columns side */}
          <div className="lg:col-span-5 relative" id="about-image-collage">
            {/* Main high-contrast photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-maroon-100/50 aspect-[4/3] sm:aspect-square">
              <img
                src={IMAGES.rooftopSeating}
                alt="Scenic rooftop dinner view in West Bengal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                id="about-main-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Float badge overlapping block */}
            <div 
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-gold-400 to-gold-500 border border-gold-300 shadow-xl text-maroon-950 p-4.5 rounded-2xl flex items-center space-x-3.5 max-w-[220px] select-none animate-bounce-slow"
              id="about-floating-badge"
            >
              <div className="w-10 h-10 rounded-full bg-maroon-950 flex items-center justify-center text-gold-300 shrink-0">
                <Sparkles className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1">
                <span className="text-xl font-bold font-serif block leading-none">১০০%</span>
                <span className="text-[10px] sm:text-xs font-bold leading-tight block">
                  {lang === 'bn' ? 'খাঁটি ফ্যামিলি পরিবেশ' : 'Pure Family Environment'}
                </span>
              </div>
            </div>
          </div>

          {/* Texts Columns side */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6" id="about-text-content">
            <span className="text-maroon-800 font-mono font-bold tracking-widest text-xs uppercase flex items-center space-x-2 gap-1.5 justify-start">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>{lang === 'bn' ? 'স্বাগতম জানাই' : 'WELCOME TO OUR STORY'}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-maroon-950 mb-4 tracking-tight leading-tight">
              {TRANSLATIONS.aboutTitle[lang]}
            </h2>

            {/* About text requirement */}
            <div className="bg-maroon-50/50 border-l-4 border-gold-400 p-4.5 rounded-r-xl my-4">
              <p className="text-sm sm:text-base font-medium font-serif text-maroon-900 leading-relaxed italic">
                {lang === 'bn' 
                  ? 'পান্তা থেকে পোলাও উৎসব মুখর পরিবেশের সাথে পরিবার, বন্ধুবান্ধব এবং বিশেষ উদযাপনের জন্য সুস্বাদু খাবার উপস্থাপন করে।' 
                  : 'Panta Theke Polao offers delicious food, a beautiful rooftop atmosphere, and a comfortable dining experience for families, friends, and celebrations.'}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              <p>{TRANSLATIONS.aboutDesc1[lang]}</p>
              <p>{TRANSLATIONS.aboutDesc2[lang]}</p>
            </div>

            {/* Action booking anchor */}
            <div className="pt-6">
              <button
                onClick={openBookingSection}
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-maroon-850 hover:bg-maroon-950 text-gold-300 border border-gold-500/20 font-bold rounded-xl transition-all shadow-md active:scale-98 cursor-pointer text-sm"
                id="about-reserve-btn"
              >
                <CalendarCheck className="w-5 h-5 text-gold-400" />
                <span>{lang === 'bn' ? 'আজই টেবিল বুক করুন' : 'Reserve A Table Today'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
