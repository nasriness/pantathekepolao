import { Cake, Heart, Users, PartyPopper } from 'lucide-react';
import { Language } from '../types';
import { EVENTS_DATA, TRANSLATIONS } from '../data';

// Map icon string keys to actual Lucide react icon components
const IconMap: Record<string, any> = {
  Cake,
  Heart,
  Users,
  PartyPopper,
};

interface EventShowcaseProps {
  lang: Language;
  onSelectEvent: (eventCategory: string) => void;
}

export default function EventShowcase({ lang, onSelectEvent }: EventShowcaseProps) {
  return (
    <section id="events" className="py-20 bg-cream-white relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-maroon-800 font-mono font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 gap-1.5 mb-2">
            <PartyPopper className="w-4 h-4 text-gold-500" />
            <span>{lang === 'bn' ? 'স্মরণীয় উৎসব' : 'RESERVE THE SPACE'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-maroon-950 mb-3 tracking-tight">
            {TRANSLATIONS.eventsTitle[lang]}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {TRANSLATIONS.eventsSubtitle[lang]}
          </p>
        </div>

        {/* Events Cards Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="events-grid"
        >
          {EVENTS_DATA.map((event) => {
            const IconComponent = IconMap[event.icon] || PartyPopper;
            
            // Map event IDs to form occasion values
            const occasionMapper: Record<string, string> = {
              e1: 'Birthday',
              e2: 'Anniversary',
              e3: 'Family Reunion',
              e4: 'Corporate Event',
            };

            return (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden border border-maroon-100/50 hover:border-gold-500/30 hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row group h-full"
                id={`event-card-${event.id}`}
              >
                {/* Event Image Cover */}
                <div className="w-full sm:w-[45%] h-56 sm:h-auto overflow-hidden relative shrink-0 bg-maroon-50">
                  <img
                    src={event.image}
                    alt={event.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    id={`event-img-${event.id}`}
                  />
                  {/* Subtle layout screen color tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/40 via-transparent to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between" id={`event-content-${event.id}`}>
                  <div>
                    {/* Header: Title + Dynamic Icon */}
                    <div className="flex items-center space-x-3 mb-3.5">
                      <div className="w-9 h-9 rounded-lg bg-gold-100 flex items-center justify-center text-gold-600 border border-gold-300/35 shrink-0">
                        <IconComponent className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-maroon-950 group-hover:text-maroon-800 transition-colors leading-tight">
                        {event.title[lang]}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-sans">
                      {event.description[lang]}
                    </p>
                  </div>

                  {/* Booking CTA Button */}
                  <button
                    onClick={() => onSelectEvent(occasionMapper[event.id] || '')}
                    className="px-5 py-3 w-full bg-maroon-800 text-gold-300 font-bold rounded-xl text-center text-xs hover:bg-maroon-950 hover:text-gold-200 transition-colors shadow-sm cursor-pointer select-none"
                    id={`event-cta-${event.id}`}
                  >
                    {TRANSLATIONS.eventBookBtn[lang]}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
