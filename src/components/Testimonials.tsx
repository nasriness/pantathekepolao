import { motion } from 'motion/react';
import { Star, Pin, CalendarDays, MapPin } from 'lucide-react';
import { Language } from '../types';
import { IMAGES } from '../data';

interface TestimonialsProps {
  lang: Language;
  onReserveClick: () => void;
}

const CONTENT = {
  title: {
    en: "Evenings People Remember",
    bn: "সন্ধ্যাগুলো যা মানুষ মনে রাখে"
  },
  subheading: {
    en: "We're proud to be part of so many family dinners, celebrations, and memorable evenings.",
    bn: "অসংখ্য পারিবারিক আড্ডা, উৎসব আর চমৎকার সব সন্ধ্যার সুন্দর মুহূর্তের অংশ হতে পেরে আমরা গর্বিত।"
  },
  ratingText: {
    en: "Trusted by local families and food lovers",
    bn: "স্থানীয় সকল পরিবার ও খাদ্যপ্রেমীদের পরম বিশ্বস্ত ঠিকানা"
  },
  reviewsCount: {
    en: "56+ Reviews",
    bn: "৫৬+ কাস্টমার রিভিউ"
  },
  averageRating: {
    en: "4.3 Average Rating",
    bn: "৪.৩ গড় রেটিং"
  },
  rooftopDining: {
    en: "Rooftop Dining",
    bn: "রুপটপ ডাইনিং"
  },
  familyFriendly: {
    en: "Family Friendly",
    bn: "ফ্যামিলি ফ্রেন্ডলি"
  },
  affordablePricing: {
    en: "Affordable Pricing",
    bn: "সাশ্রয়ী বাজেট মূল্য"
  },
  ctaTitle: {
    en: "Come Create Your Own Memory.",
    bn: "আসুন, আজই আপনার নিজের প্রিয় এক টুকরো স্মৃতির মহল তৈরি করুন।"
  },
  reserveBtn: {
    en: "Reserve A Table",
    bn: "টেবিল বুক করুন"
  },
  directionsBtn: {
    en: "Get Directions",
    bn: "লোকেশন ডাইরেকশন"
  }
};

const MEMORIES = [
  {
    id: "m1",
    tag: {
      en: "🌇 Rooftop Experience",
      bn: "🌇 ছাদ ডাইনিং অভিজ্ঞতা"
    },
    comment: {
      en: "Great place for enjoying your evening with friends or family ❤️ Loved it.",
      bn: "বন্ধু বা পরিবারের সাথে সুন্দর সন্ধ্যা কাটানোর চমৎকার জায়গা ❤️ দারুণ ভালো লেগেছে।"
    },
    customer: {
      en: "Subhajeet Das",
      bn: "শুভজিৎ দাস"
    },
    image: IMAGES.rooftopSeating
  },
  {
    id: "m2",
    tag: {
      en: "👨‍👩‍👧 Family Favourite",
      bn: "👨‍👩‍👧 পারিবারিক প্রিয়"
    },
    comment: {
      en: "This is the best rooftop restaurant in our locality. Good food, good ambience, and affordable pricing.",
      bn: "আমাদের আসেপাশের সমস্ত ছাদ রেস্টুরেন্টগুলোর মধ্যে এটিই সেরা। সুস্বাদু খাবার, আকর্ষণীয় পরিবেশ ও সাশ্রয়ী দাম।"
    },
    customer: {
      en: "Sahil Tanveer",
      bn: "সাহিল তানভীর"
    },
    image: IMAGES.hero
  },
  {
    id: "m3",
    tag: {
      en: "✨ Beautiful Ambience",
      bn: "✨ চমৎকার মনোরম পরিবেশ"
    },
    comment: {
      en: "Beautiful decorations and a peaceful atmosphere. A wonderful place to spend time.",
      bn: "মনোমুগ্ধকর সাজসজ্জা এবং শান্ত মনোরম একটি স্নিগ্ধ আবহাওয়া। চমৎকার সময় কাটানোর সেরা রূপটপ।"
    },
    customer: {
      en: "Local Visitor",
      bn: "স্থানীয় অতিথি"
    },
    image: IMAGES.rooftopSeating
  }
];

export default function Testimonials({ lang, onReserveClick }: TestimonialsProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 sm:py-32 bg-stone-950 text-white relative select-none scroll-mt-10 overflow-hidden"
    >
      {/* Decorative top border representing string lights */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/20 via-amber-500/50 to-amber-500/20 z-20" />
      
      {/* Custom engineered warm string lights / fairy lights at the header of section */}
      <div className="absolute top-3 inset-x-0 flex justify-around pointer-events-none z-10 opacity-70">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-1 h-3 bg-stone-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b,0_0_15px_#f59e0b] animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
          </div>
        ))}
      </div>

      {/* Atmospheric Soft Blur & Overlay Backgrounds */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 brightness-[0.2] filter blur-[4px] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.rooftopSeating})` }}
      />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/[0.04] filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/[0.04] filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* TOP INTERACTIVE RATING ROW */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-amber-400 font-mono text-[11px] font-bold tracking-widest uppercase block">
                {CONTENT.ratingText[lang]}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
              {CONTENT.title[lang]}
            </h2>
            
            <p className="text-stone-400 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
              {CONTENT.subheading[lang]}
            </p>
          </div>

          {/* Social Proof Aggregate Badge */}
          <div className="bg-stone-900/80 backdrop-blur border border-stone-800 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg">
            <div className="text-center pr-4 border-r border-stone-800">
              <span className="text-3xl font-extrabold font-serif text-amber-400 tracking-tight block">⭐ 4.3</span>
              <span className="text-[10px] text-stone-500 font-mono tracking-wider font-bold block uppercase mt-0.5">
                {CONTENT.averageRating[lang]}
              </span>
            </div>
            <div>
              <span className="text-stone-300 font-bold font-serif text-sm block">
                {CONTENT.reviewsCount[lang]}
              </span>
              <div className="flex text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* POSTCARD MEMORIES GRID */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          id="postcard-memories-wrapper"
        >
          {MEMORIES.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative bg-stone-900/65 rounded-2xl border border-stone-850 overflow-hidden shadow-2xl hover:border-amber-500/20 active:scale-[0.99] transition-all duration-300 flex flex-col justify-between h-[360px] cursor-default"
              style={{ contentVisibility: 'auto' }}
              id={`memory-card-${idx}`}
            >
              {/* Postcard background with gentle scale on group hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center opacity-30 brightness-[0.35] transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-900/40 z-10" />
              </div>

              {/* Memory Card/Postcard Content Header */}
              <div className="relative z-20 p-5 flex justify-between items-start">
                <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-[10px] tracking-wide px-3 py-1.5 rounded-full backdrop-blur-md">
                  {item.tag[lang]}
                </span>
                
                {/* Traditional push pin for the memory grid effect */}
                <Pin className="w-4 h-4 text-stone-600 group-hover:text-amber-500/60 transition-colors rotate-45" />
              </div>

              {/* Memory Card/Postcard Review Message & Customer Name */}
              <div className="relative z-20 p-5 mt-auto space-y-4">
                <p className="text-stone-100 italic font-serif text-sm sm:text-base leading-relaxed tracking-tight select-none">
                  "{item.comment[lang]}"
                </p>

                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-xs text-white tracking-wide">
                      {item.customer[lang]}
                    </h4>
                    <span className="text-[9px] text-stone-500 font-mono tracking-widest uppercase block mt-0.5">
                      Verified Guest Memory
                    </span>
                  </div>
                  
                  {/* Miniature handwriting postcard signoff */}
                  <span className="text-[10px] text-amber-400/40 font-serif lowercase italic select-none">
                    nadia stories
                  </span>
                </div>
              </div>
              
              {/* Highlight halo glow overlay on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.06),transparent_60%)] pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* VISUAL STATISTICS ROW */}
        <div 
          className="bg-stone-900/40 border border-stone-800/80 rounded-2xl py-6 px-4 md:px-8 shadow-inner mb-16"
          id="visual-statistics-row"
        >
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center items-center divide-y lg:divide-y-0 lg:divide-x divide-stone-800/80">
            <div className="py-2 lg:py-0">
              <span className="text-amber-400 font-serif font-black text-lg md:text-xl block">⭐ 4.3</span>
              <span className="text-[9px] text-stone-400 uppercase font-mono tracking-widest font-bold block mt-1">
                {CONTENT.averageRating[lang]}
              </span>
            </div>
            
            <div className="py-2 lg:py-0">
              <span className="text-amber-400 font-serif font-black text-lg md:text-xl block">📝 56+</span>
              <span className="text-[9px] text-stone-400 uppercase font-mono tracking-widest font-bold block mt-1">
                {CONTENT.reviewsCount[lang]}
              </span>
            </div>

            <div className="py-2 lg:py-0">
              <span className="text-amber-400 font-serif font-black text-lg md:text-xl block">🌇</span>
              <span className="text-[9px] text-stone-400 uppercase font-mono tracking-widest font-bold block mt-1">
                {CONTENT.rooftopDining[lang]}
              </span>
            </div>

            <div className="py-3 lg:py-0">
              <span className="text-amber-400 font-serif font-black text-lg md:text-xl block">👨‍👩‍👧</span>
              <span className="text-[9px] text-stone-400 uppercase font-mono tracking-widest font-bold block mt-1">
                {CONTENT.familyFriendly[lang]}
              </span>
            </div>

            <div className="py-3 lg:py-00 col-span-2 lg:col-span-1 border-t lg:border-t-0">
              <span className="text-amber-400 font-serif font-black text-lg md:text-xl block">💰</span>
              <span className="text-[9px] text-stone-400 uppercase font-mono tracking-widest font-bold block mt-1">
                {CONTENT.affordablePricing[lang]}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION FOR THE ENTIRE BOARD */}
        <div className="text-center max-w-xl mx-auto space-y-6">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-250 italic">
            {CONTENT.ctaTitle[lang]}
          </h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            {/* Reserve Table button */}
            <button
              onClick={onReserveClick}
              className="flex items-center justify-center space-x-2 w-full px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl shadow transition-colors duration-200 text-sm cursor-pointer"
            >
              <CalendarDays className="w-4 h-4 fill-stone-950 text-stone-950" />
              <span>{CONTENT.reserveBtn[lang]}</span>
            </button>

            {/* Directions Map button */}
            <a 
              href="https://maps.google.com/?q=356F%2BG27,+Horal,+Sonatikri,+Haral+daspur,+West+Bengal+712303"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3.5 bg-stone-900 border border-stone-850 hover:bg-stone-800 text-stone-200 font-bold rounded-xl transition-all duration-200 text-sm text-center cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{CONTENT.directionsBtn[lang]}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
