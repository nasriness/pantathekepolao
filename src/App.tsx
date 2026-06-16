import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Star, 
  Sparkles, 
  ChevronUp, 
  Facebook, 
  Instagram, 
  Youtube, 
  Utensils, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  Calendar,
  Check,
  ArrowRight
} from 'lucide-react';

import { Language } from './types';
import { IMAGES, TRANSLATIONS, MENU_ITEMS } from './data';

// Import custom sub-components
import Header from './components/Header';
import MobileStickyBar from './components/MobileStickyBar';
import FoodMenu from './components/FoodMenu';
import PhotoGallery from './components/PhotoGallery';
import EventShowcase from './components/EventShowcase';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [preSelectedOccasion, setPreSelectedOccasion] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Track window scroll coordinates for smooth dynamic visual transitions
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setShowScrollTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectEvent = (occasionCategory: string) => {
    setPreSelectedOccasion(occasionCategory);
    setTimeout(() => {
      scrollToSection('booking-section');
    }, 100);
  };

  const googleMapIframeSrc = "https://maps.google.com/maps?q=356F%2BG27,%20Horal,%20Sonatikri,%20Haral%20daspur,%20West%20Bengal%20712303&t=&z=15&ie=UTF8&iwloc=&output=embed";

  // Framer Motion Animation Variants
  const textRevealContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const textRevealItem = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  const scrollFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  // Redefined Signature Items for Redesigned Section 4
  const featuredDishes = [
    MENU_ITEMS.find(item => item.id === 'b1') || MENU_ITEMS[0],
    MENU_ITEMS.find(item => item.id === 't1') || MENU_ITEMS[4],
    MENU_ITEMS.find(item => item.id === 'c1') || MENU_ITEMS[8],
    MENU_ITEMS.find(item => item.id === 'd1') || MENU_ITEMS[11],
  ];

  return (
    <div className="bg-[#FAF9F5] text-stone-800 font-sans min-h-screen flex flex-col selection:bg-amber-500 selection:text-maroon-950 pb-16 md:pb-0" id="restaurant-app-root">
      
      {/* GLOWING SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 z-50 transition-all duration-75 shadow-[0_1px_8px_rgba(245,158,11,0.5)]"
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress-indicator-line"
      />

      {/* HEADER NAVIGATION */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        openBookingSection={() => scrollToSection('booking-section')} 
        openMenu={() => setIsMenuOpen(true)}
      />

      {/* SECTION 1: AUTHeNTIC STYLED HERO FIRST SCREEN */}
      <section 
        id="home" 
        className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center p-4 overflow-hidden bg-stone-950"
      >
        {/* Real organic rooftop landscape background - slowly scaling */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.5] saturate-[1.1]"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />

        {/* Soft Evening Vignette Layer for warm tone and superior contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181513] via-[#1A1613]/60 to-black/75 z-10 pointer-events-none" />
        
        {/* Soft golden lamp glow simulating real lights */}
        <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-10" />

        <div className="max-w-4xl mx-auto text-center relative z-20 pt-16 pb-8 px-4 w-full">
          <motion.div 
            variants={textRevealContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            {/* Real 4.3 Google Rating Badge */}
            <motion.div 
              variants={textRevealItem}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-stone-900/80 border border-amber-400/25 rounded-full text-amber-400 font-mono text-xs shadow-md"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-450 shrink-0" />
              <span className="font-bold tracking-wide font-mono">
                {lang === 'bn' ? '⭐ ৪.৩ গুগল রেটিং ও ভরসা' : '⭐ Rated 4.3 on Google Reviews'}
              </span>
            </motion.div>

            {/* Conversational Name Placement */}
            <div className="space-y-3">
              <motion.span 
                variants={textRevealItem}
                className="block text-xs sm:text-sm text-stone-300 font-mono tracking-widest uppercase font-bold text-center"
              >
                {lang === 'bn' ? 'নদীয়া জেলার ছাদ রেস্টুরেন্ট' : 'ROOFTOP GUESTHOUSE & KITCHEN'}
              </motion.span>
              
              <motion.h1 
                variants={textRevealItem}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-serif drop-shadow-md leading-[1.1] text-center"
              >
                {lang === 'bn' ? 'পান্তা থেকে পোলাও' : 'Panta Theke Polao'}
              </motion.h1>

              {/* Short Natural Headline */}
              <motion.p 
                variants={textRevealItem}
                className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-serif"
              >
                {lang === 'bn' ? '"ভাল খাবার। চমৎকার সন্ধ্যা।"' : '"Good Food. Beautiful Evenings."'}
              </motion.p>
            </div>

            {/* Short conversational tagline */}
            <motion.p 
              variants={textRevealItem}
              className="text-stone-200 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed text-center"
            >
              {lang === 'bn' 
                ? 'পরিবার ও বন্ধুদের সাথে খোলা আকাশের নিচে শান্ত ছাদ পরিবেশে একটি সুন্দর আড্ডা ও আহারের সন্ধ্যা কাটান।' 
                : 'Spend an evening with family and friends in a relaxed rooftop setting. Simple food, comfortable sofas, and fresh air.'}
            </motion.p>

            {/* Direct action call elements */}
            <motion.div 
              variants={textRevealItem}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3 max-w-md mx-auto"
            >
              <a 
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl transition-all duration-200 shadow-md w-full sm:w-auto text-sm cursor-pointer text-center"
              >
                <Phone className="w-4 h-4 fill-stone-950 text-stone-950 shrink-0" />
                <span className="font-extrabold">{lang === 'bn' ? 'কল করুন / টেবিল বুকিং' : 'Call directly to book'}</span>
              </a>
              
              <a 
                href="https://maps.google.com/?q=356F%2BG27,+Horal,+Sonatikri,+Haral+daspur,+West+Bengal+712303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-stone-900/80 hover:bg-stone-850 text-white font-semibold rounded-xl border border-stone-700 transition-all duration-200 w-full sm:w-auto text-sm cursor-pointer text-center"
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{lang === 'bn' ? 'লোকেশন ডাইরেকশন' : 'Get Directions & Map'}</span>
              </a>
            </motion.div>

            {/* Strengths indicators bottom bar */}
            <motion.div 
              variants={textRevealItem}
              className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-3xl mx-auto pt-10 sm:pt-14 text-stone-300 text-xs sm:text-sm border-t border-white/10"
            >
              <div className="flex items-center space-x-2 bg-stone-900/40 p-3 rounded-lg border border-white/5">
                <span className="text-base">🌇</span>
                <span className="font-semibold">{lang === 'bn' ? 'মনোরম ছাদ' : 'Open Rooftop'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-stone-900/40 p-3 rounded-lg border border-white/5">
                <span className="text-base">👨‍👩‍👧</span>
                <span className="font-semibold">{lang === 'bn' ? 'পারিবারিক আড্ডা' : 'Family Setting'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-stone-900/40 p-3 rounded-lg border border-white/5">
                <span className="text-base">🚗</span>
                <span className="font-semibold">{lang === 'bn' ? 'সহজ পার্কিং' : 'Easy Parking'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-stone-900/40 p-3 rounded-lg border border-white/5">
                <span className="text-base">💰</span>
                <span className="font-semibold">{lang === 'bn' ? 'সাশ্রয়ী দাম' : 'Affordable Food'}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.5: THE STORY (Asymmetric Layout with Overlaps) */}
      <section id="about" className="py-24 sm:py-32 bg-[#FAF9F5] overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Asymmetric Overlapping Images with Scroll Reveal */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
              className="lg:col-span-6 relative flex justify-center lg:justify-start"
            >
              {/* Back background decorative stone-cream card */}
              <div className="absolute top-8 left-8 w-[80%] h-[90%] bg-[#EFECE6] border border-stone-200/80 rounded-3xl -z-10 transform -rotate-1 hidden sm:block" />
              
              {/* Main large rooftop plate offset */}
              <div className="relative w-full sm:w-[85%] aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-stone-300/40 group">
                <img 
                  src={IMAGES.rooftopSeating} 
                  alt="Conversational evening environment" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent pointer-events-none" />
              </div>

              {/* Overlapping secondary smaller image containing tasty plate like basanti polao */}
              <div className="absolute -bottom-8 -right-4 w-[45%] aspect-square hidden sm:block rounded-2xl overflow-hidden shadow-lg border-4 border-white transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <img 
                  src={IMAGES.bengaliSpecial} 
                  alt="Basanti Polao" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
              </div>
            </motion.div>

            {/* Right: Handcrafted Conversational Narrative with Scroll Reveal */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
              className="lg:col-span-6 space-y-6 sm:space-y-8 text-left"
            >
              <div className="space-y-4">
                <span className="text-amber-700 font-mono font-bold tracking-widest text-xs uppercase block">
                  {lang === 'bn' ? 'আমাদের পেছনের সাধারণ গল্প' : 'OUR LITTLE ROOFTOP STORY'}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight font-serif">
                  {lang === 'bn' ? 'যেখানে সাধারণ খাবার আর মনোরম সবুজ পরিবেশ এক হয়' : "Where Simple Traditional Food Meets Quiet Sky Ambience"}
                </h2>
                <div className="w-16 h-1 bg-amber-600 rounded-full mt-2" />
              </div>

              <div className="text-stone-700 text-sm sm:text-base space-y-5 leading-relaxed font-sans font-medium">
                <p>
                  {lang === 'bn' 
                    ? 'কখনও কখনও সেরা খাবারগুলো শহরের জটিল কোলাহল থেকে দূরে একটি পরম শান্ত পরিবেশে সবচেয়ে বেশি উপভোগ করা যায়। "পান্তা থেকে পোলাও" ঠিক এমনই এক ছাদ ডাইনিং চত্বর, যা ছিমছাম আলো আর স্নিগ্ধ হাওয়ায় ঘেরা।' 
                    : 'Spend an evening with family and friends in a relaxed rooftop setting. We believe the best meals are shared under the open sky, far from the highway hustle, wrapped in mild golden lamps.'}
                </p>
                <p>
                  {lang === 'bn' 
                    ? 'আমাদের রান্নাঘর থেকে ধোঁয়া ওঠা তন্দুরি কাবাব, সুগন্ধি বাসন্তী পোলাও কিম্বা হারিয়ে যাওয়া খাঁটি গ্রাম্য পান্তা থালির মিষ্টি পরিবেশন চলে। এখানে কোনো কৃত্রিম মেকি ফ্যান্সি লোগো নেই, আছে কেবল তাতা উপকরণ, সহজ আন্তরিকতা আর সুন্দর আড্ডা।' 
                    : 'From our kitchen emerges hot smoky clay-oven tandoors, aromatic Basanti Polao, alongside the nostalgic rustic Panta Bhat platters. There are no overly dramatic titles here—just real food cookery, clean wooden tables, and real conversations.'}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-stone-900 hover:bg-stone-850 text-amber-400 font-bold rounded-2xl shadow transition-all duration-300 text-sm cursor-pointer"
                >
                  <span>{lang === 'bn' ? 'মেনু সম্ভার দেখুন' : 'View the Menu'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 font-semibold rounded-2xl shadow-sm transition-all duration-300 text-sm cursor-pointer"
                >
                  <span>{lang === 'bn' ? 'রুপটপ ছবি দেখুন' : 'See Seating Photos'}</span>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK HIGHLIGHTS */}
      <section className="py-20 sm:py-24 bg-stone-100/50 border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-750 font-mono font-bold tracking-widest text-xs uppercase block mb-3">
              {lang === 'bn' ? 'আমাদের অনন্য বিশেষত্ব' : 'OUR CORE STRENGTHS'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              {lang === 'bn' ? 'অতিথিরা ঠিক কেন আমাদের বারবার ভালোবাসেন?' : 'What Makes Us Nadia’s Local Favorite?'}
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={scrollFadeUp}
              className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-left relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl mb-5 font-semibold shadow-inner">
                🌇
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 font-serif">
                {lang === 'bn' ? 'মনোরম ছাদ ডাইনিং' : 'Relaxed Rooftop Seating'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {lang === 'bn'
                  ? 'নদীয়া জেলার মনোরম রূপটপ রেস্টুরেন্ট যেখানে স্নিগ্ধ আকাশের নিচে সুন্দর আড্ডা জমে ওঠে।'
                  : 'Savor soft afternoon breezes and starlit skies far away from the busy road noises.'}
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={scrollFadeUp}
              className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-left relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl mb-5 font-semibold shadow-inner">
                🍽
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 font-serif">
                {lang === 'bn' ? 'সুস্বাদু সাশ্রয়ী খাবার' : 'Real, Great Food'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {lang === 'bn'
                  ? 'খাঁটি পান্তা থালি থেকে সুগন্ধি পোলাও, কয়লার তন্দুর কাবাব ও ফ্যামিলি-ফেভারিট ইন্ডিয়ান চাইনিজ।'
                  : 'Traditional Panta with fried fish to Royal Polao and hot charcoal skewers.'}
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={scrollFadeUp}
              className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-left relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl mb-5 font-semibold shadow-inner">
                👨‍👩‍👧
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 font-serif">
                {lang === 'bn' ? 'নিরাপদ পারিবারিক পরিবেশ' : 'Family Gatherings'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {lang === 'bn'
                  ? 'প্রিয়জনদের নিয়ে জন্মদিন, রি-ইউনিয়ন বা ঘরোয়া উৎসবের জন্য কৃষ্ণনগরের চমৎকার রাজকীয় পরিবেশ।'
                  : 'Comfortable sofa configurations which are safe and enjoyable for kids and elders alike.'}
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              variants={scrollFadeUp}
              className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-left relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl mb-5 font-semibold shadow-inner">
                🚗
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 font-serif">
                {lang === 'bn' ? 'ঝামেলাহীন সহজ পার্কিং' : 'Easy Highway Parking'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {lang === 'bn'
                  ? 'আমাদের আউটলেটের সাথেই চতুষ্পাঠী মোড় কৃষ্ণনগর রোডের গাড়ি রাখার বিশাল নিরাপদ পার্কিং জোন।'
                  : 'Stress-free direct roadside transit access with ample visual parking area for family cars.'}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: SIGNATURE DISHES PREVIEW */}
      <section id="menu" className="py-20 sm:py-24 bg-[#FAF9F5] scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-700 font-mono font-bold tracking-widest text-xs uppercase block mb-3">
              {lang === 'bn' ? 'জিভে জল আনা ঘরোয়া স্পেশাল' : 'PREMIUM HOME STYLE PREVIEW'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight font-serif">
              {lang === 'bn' ? 'স্বাদ অনন্য, দাম অতি সাশ্রয়ী' : 'Signature Cookery'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium mt-3 max-w-lg mx-auto">
              {lang === 'bn'
                ? 'তাজা উপকরণে অতি যত্নসহকারে তৈরি আমাদের সবচেয়ে চাহিদাপূর্ণ কিছু সিগনেচার পথ।'
                : 'Handpicked delicious dishes prepared cleanly by our traditional kitchen chefs.'}
            </p>
          </div>

          {/* Grid of dishes with slight visual asymmetry and scroll stagger animation */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {featuredDishes.map((dish, index) => (
              <motion.div 
                key={dish.id}
                variants={scrollFadeUp}
                className={`bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full text-left ${index % 2 === 1 ? 'lg:translate-y-4' : ''}`}
              >
                {/* Large high-quality picture */}
                <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name[lang]} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-400 font-bold font-mono uppercase text-[9px] tracking-wider px-2.5 py-1 rounded">
                    {dish.category === 'bengali-special' ? (lang === 'bn' ? 'বাঙালি স্পেশাল' : 'BENGALI HERO') : (lang === 'bn' ? 'জনপ্রিয় পদ' : 'POPULAR')}
                  </span>
                  
                  {/* Price overlay */}
                  <div className="absolute bottom-3 right-4 z-10 text-lg font-black text-amber-400 font-mono">
                    ৳{dish.price}
                  </div>
                </div>

                {/* Card details */}
                <div className="p-5 flex flex-col justify-between flex-1 font-sans">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-2 font-serif leading-tight">
                      {dish.name[lang]}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {dish.description[lang]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-400 font-bold uppercase tracking-widest block">
                      {dish.isPopular ? (lang === 'bn' ? '★ বেস্টসেলার' : '★ CLASSIC') : (lang === 'bn' ? 'আজকের স্পেশাল' : 'RECOMMENDED')}
                    </span>
                    <button 
                      onClick={() => setIsMenuOpen(true)}
                      className="text-xs text-stone-900 hover:text-amber-700 font-extrabold tracking-wider underline cursor-pointer hover:no-underline flex items-center space-x-1"
                    >
                      <span>{lang === 'bn' ? 'সম্পূর্ণ মেনু' : 'View Menu'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action "View Full Menu" */}
          <div className="text-center mt-12 sm:mt-20">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-stone-900 hover:bg-stone-850 text-amber-400 font-bold rounded-2xl shadow transition-all duration-200 text-sm cursor-pointer"
            >
              <Utensils className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{lang === 'bn' ? 'সম্পূর্ণ মেনু কার্ড দেখুন' : 'Explore Detailed Menu'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5: EVENINGS PEOPLE REMEMBER */}
      <Testimonials 
        lang={lang} 
        onReserveClick={() => scrollToSection('booking-section')} 
      />

      {/* SECTION 6: VISIT TODAY */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-stone-950 text-center">
        {/* Soft scaling background overlay of evening rooftop */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 brightness-[0.4]"
          style={{ backgroundImage: `url(${IMAGES.rooftopSeating})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181513] via-[#1A1613]/90 to-stone-950 z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-20 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <span className="text-amber-400 font-mono font-bold tracking-widest text-xs uppercase block">
              {lang === 'bn' ? 'স্বাগতম জানাই সবাইকে' : 'OPEN HEAVEN ROOFTOP DINING'}
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-serif text-center">
              {lang === 'bn' 
                ? 'ভাল খাবার। চমৎকার পরিবেশ। সুন্দর স্মৃতি।' 
                : 'Good Food. Great Atmosphere. Unforgettable Moments.'}
            </h2>
            
            <p className="text-stone-300 text-xs sm:text-base max-w-xl mx-auto font-medium leading-relaxed text-center">
              {lang === 'bn' 
                ? 'আজই আপনার পরিবার বা বন্ধুদের সাথে আমাদের প্রাণবন্ত রূপটপ ডাইনিং-এ মুখরোচক খাবার উপভোগ করতে চলে আসুন। আপনার জন্য সেরা আড্ডার জায়গা সদা প্রস্তুত।'
                : 'Join us on our open roof and enjoy delicious, cleanly cooked food under the night sky. We keep tables prepared and servers happy to assist!'}
            </p>
          </div>

          {/* Action Call Now & Directions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
            <a 
              href="tel:+919876543210"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl transition-all duration-200 shadow text-sm"
            >
              <Phone className="w-4 h-4 fill-stone-950 text-stone-950" />
              <span>{lang === 'bn' ? 'সরাসরি ফোন করুন' : 'Call now to plan'}</span>
            </a>
            
            <a 
              href="https://maps.google.com/?q=356F%2BG27,+Horal,+Sonatikri,+Haral+daspur,+West+Bengal+712303"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-stone-900 text-stone-200 font-semibold rounded-xl transition-all duration-200 text-sm border border-stone-800"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{lang === 'bn' ? 'লোকেশন ডাইরেকশন' : 'Get Directions'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPONENT: CATEGORIES MENU MODAL & DRAWER BOARD */}
      <FoodMenu 
        lang={lang} 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        openBookingSection={() => scrollToSection('booking-section')} 
      />

      {/* INTERACTIVE COMPONENT: ROOFTOP MASONRY PORTFOLIO GALLERY */}
      <PhotoGallery lang={lang} />

      {/* INTERACTIVE COMPONENT: PARTIES & CELEBRATION EVENTS SHOWCASE */}
      <EventShowcase 
        lang={lang} 
        onSelectEvent={handleSelectEvent} 
      />

      {/* INTERACTIVE COMPONENT: FREE RESERVATION BOOKINGS PANEL */}
      <BookingForm 
        lang={lang} 
        preSelectedOccasion={preSelectedOccasion}
        onClearPreSelectedOccasion={() => setPreSelectedOccasion('')}
      />

      {/* INTERACTIVE CONTACT AND MAPS PANEL */}
      <section id="contact" className="py-20 bg-stone-950 text-stone-100 relative scroll-mt-10 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 font-mono font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 gap-1.5 mb-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{lang === 'bn' ? 'আমাদের আউটলেট লোকেশন' : 'VISIT US TODAY'}</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-amber-300 mb-3 tracking-tight">
              {TRANSLATIONS.contactTitle[lang]}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-xl mx-auto">
              {TRANSLATIONS.contactSubtitle[lang]}
            </p>
          </div>

          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            id="contact-layout-box"
          >
            {/* Contact Details cards */}
            <div className="lg:col-span-5 space-y-5" id="contact-details-cards">
              {/* Address card */}
              <div className="bg-stone-900/40 border border-stone-850 rounded-2xl p-5 sm:p-6 shadow flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-amber-300 mb-1 font-mono">
                    {TRANSLATIONS.addressLabel[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans font-medium">
                    {TRANSLATIONS.addressValue[lang]}
                  </p>
                </div>
              </div>

              {/* Timing Clock card */}
              <div className="bg-stone-900/40 border border-stone-850 rounded-2xl p-5 sm:p-6 shadow flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-amber-300 mb-1 font-mono">
                    {TRANSLATIONS.hoursLabel[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans font-medium">
                    {TRANSLATIONS.hoursValue[lang]}
                  </p>
                </div>
              </div>

              {/* Hotlines card */}
              <div className="bg-stone-900/40 border border-stone-850 rounded-2xl p-5 sm:p-6 shadow flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-amber-300 mb-2 font-mono">
                    {TRANSLATIONS.phoneLabel[lang]}
                  </h4>
                  <div className="space-y-1.5">
                    <a href="tel:+919876543210" className="block text-xs sm:text-sm text-stone-200 hover:text-amber-400 font-mono font-bold transition-colors">
                      {TRANSLATIONS.phoneValue1[lang]}
                    </a>
                    <a href="tel:+918012345678" className="block text-xs sm:text-sm text-stone-200 hover:text-amber-400 font-mono font-bold transition-colors">
                      {TRANSLATIONS.phoneValue2[lang]}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant Social Channels Actions Panel */}
              <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/25 rounded-2xl p-6 shadow-md text-center">
                <h4 className="font-bold text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
                  {lang === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি যোগাযোগ' : 'INSTANT HELP SUPPORT'}
                </h4>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center space-x-2 py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold rounded-xl text-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'রেস্টুরেন্টে ফোন করুন' : 'Call Restaurant'}</span>
                  </a>
                  
                  <a
                    href="https://maps.google.com/?q=356F%2BG27,+Horal,+Sonatikri,+Haral+daspur,+West+Bengal+712303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 bg-stone-900 hover:bg-stone-850 border border-stone-800 text-amber-300 font-bold rounded-xl text-xs transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{lang === 'bn' ? 'লোকেশন ডাইরেকশন' : 'Get Directions'}</span>
                  </a>

                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(lang === 'bn' ? 'নমস্কার পান্তা থেকে পোলাও! আমি ক্যোয়ারী করতে চাই।' : 'Hello Panta Theke Polao! I have an inquiry.')}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 bg-emerald-700/60 hover:bg-emerald-750 text-white font-bold rounded-xl text-xs transition-colors border border-emerald-500/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপ চ্যাট' : 'WhatsApp Chat'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Iframe */}
            <div 
              className="lg:col-span-7 h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-stone-850 bg-stone-900/10 shadow-lg relative group"
              id="google-maps-frame-wrapper"
            >
              <iframe
                title="Panta Theke Polao Google Map Directions location marker"
                src={googleMapIframeSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-705"
                id="maps-iframe"
              ></iframe>
              <div className="absolute bottom-3 left-3 bg-stone-900/90 text-amber-400 text-[10px] font-bold px-3 py-1.5 rounded border border-amber-500/20">
                {lang === 'bn' ? 'সোনাটিকরি, হরাল দাসপুর' : 'Sonatikri, Haral daspur'}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED PREMIUM FOOTER */}
      <footer className="bg-stone-950 text-stone-400 pt-16 pb-24 md:pb-12 border-t border-stone-900 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/5 pb-12 mb-10">
            
            {/* Brand Description */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold font-serif text-amber-400 tracking-tight flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span>পান্তা থেকে পোলাও</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans max-w-sm">
                {TRANSLATIONS.madeWithLove[lang]}
              </p>
              <p className="text-xs text-stone-500 leading-relaxed font-medium">
                {TRANSLATIONS.aboutDesc2[lang]}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xs uppercase text-amber-300 font-mono tracking-widest mb-4">
                {TRANSLATIONS.quickLinks[lang]}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-amber-450 transition-colors pointer cursor-pointer">
                    {TRANSLATIONS.navHome[lang]}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-amber-450 transition-colors pointer cursor-pointer">
                    {TRANSLATIONS.navAbout[lang]}
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsMenuOpen(true)} className="hover:text-amber-450 transition-colors pointer cursor-pointer">
                    {TRANSLATIONS.navMenu[lang]}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-450 transition-colors pointer cursor-pointer">
                    {TRANSLATIONS.navGallery[lang]}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('booking-section')} className="hover:text-amber-450 transition-colors pointer cursor-pointer">
                    {TRANSLATIONS.navBookTable[lang]}
                  </button>
                </li>
              </ul>
            </div>

            {/* Social media connections */}
            <div>
              <h4 className="font-bold text-xs uppercase text-amber-300 font-mono tracking-widest mb-4">
                {TRANSLATIONS.followUs[lang]}
              </h4>
              <div className="flex items-center space-x-3.5 mb-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center transition-colors shadow">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center transition-colors shadow">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center transition-colors shadow">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              <div className="text-[11px] font-mono tracking-wide bg-stone-900/60 p-3.5 border border-stone-850 rounded-xl space-y-1">
                <span className="text-stone-500 block">{lang === 'bn' ? 'রুপটপ অবস্থান:' : 'FLOOR POSITION:'}</span>
                <span className="text-amber-400 font-bold block">{lang === 'bn' ? 'সোনাটিকরি, হরাল দাসপুর' : 'Sonatikri, Haral daspur'}</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 space-y-4 sm:space-y-0 text-center">
            <p>{TRANSLATIONS.copyright[lang]}</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-all border border-white/10 cursor-pointer"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* FIXED BOTTOM STICKY ACTION BAR */}
      <MobileStickyBar 
        lang={lang} 
        openMenu={() => setIsMenuOpen(true)} 
      />

      {/* FLOATING BACK TO TOP CARD FOR EXTRA CONVENIENCE */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 flex items-center justify-center shadow-2xl border border-amber-400/20 active:scale-90 transition-all cursor-pointer hidden md:flex"
            aria-label="Scroll to top"
            id="floating-back-to-top-button"
          >
            <ChevronUp className="w-6 h-6 stroke-[3px]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
