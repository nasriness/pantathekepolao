import { useState, useEffect } from 'react';
import { Menu, X, Languages, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  openBookingSection: () => void;
  openMenu?: () => void;
}

export default function Header({ lang, setLang, openBookingSection, openMenu }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: TRANSLATIONS.navHome[lang], id: 'home' },
    { label: TRANSLATIONS.navAbout[lang], id: 'about' },
    { label: TRANSLATIONS.navWhyChooseUs[lang], id: 'why-us' },
    { label: TRANSLATIONS.navMenu[lang], id: 'menu' },
    { label: TRANSLATIONS.navGallery[lang], id: 'gallery' },
    { label: TRANSLATIONS.navEvents[lang], id: 'events' },
    { label: TRANSLATIONS.navContact[lang], id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'menu' && openMenu) {
      openMenu();
      return;
    }
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

  const toggleLanguage = () => {
    setLang(lang === 'bn' ? 'en' : 'bn');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-maroon-950/95 backdrop-blur-md shadow-lg border-b border-gold-500/20 py-2'
          : 'bg-gradient-to-b from-black/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex flex-col cursor-pointer select-none"
            id="logo-container"
          >
            <span className="text-xl sm:text-2xl font-bold text-gold-400 font-serif leading-tight">
              পান্তা থেকে পোলাও
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest text-cream-white font-mono uppercase opacity-90">
              Panta Theke Polao
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-2" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-gold-400 transition-colors cursor-pointer"
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Utility Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-300 hover:bg-gold-500/25 transition-all text-xs font-semibold cursor-pointer shadow-sm select-none"
              title="Change Language"
              id="lang-toggle-btn"
            >
              <Languages className="w-4 h-4 text-gold-400" />
              <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Book Table Button (Desktop) */}
            <button
              onClick={openBookingSection}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-maroon-950 font-bold rounded-lg transition-all transform hover:scale-105 shadow-md text-sm cursor-pointer"
              id="header-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>{TRANSLATIONS.navBookTable[lang]}</span>
            </button>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-200 hover:text-gold-400 hover:bg-maroon-900/40 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] bg-maroon-950 z-30 lg:hidden overflow-y-auto animate-fade-in border-t border-gold-500/10"
          id="mobile-drawer"
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-gray-100 hover:bg-maroon-900/60 hover:text-gold-400 transition-all border border-transparent hover:border-gold-500/10"
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Quick action buttons within drawer */}
            <div className="pt-6 border-t border-gold-500/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingSection();
                }}
                className="flex items-center justify-center space-x-2 w-full py-3.5 bg-gold-500 hover:bg-gold-600 text-maroon-950 font-bold rounded-xl transition-colors shadow-md text-base"
                id="drawer-book-btn"
              >
                <Calendar className="w-5 h-5" />
                <span>{TRANSLATIONS.navBookTable[lang]}</span>
              </button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center space-x-2 py-3 bg-maroon-900/60 border border-gold-500/25 text-gold-300 font-semibold rounded-xl text-sm"
                  id="drawer-call-btn"
                >
                  <Phone className="w-4 h-4" />
                  <span>{TRANSLATIONS.stickyCall[lang]}</span>
                </a>
                <a
                  href="https://www.google.co.in/maps/place/%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BE+%E0%A6%A5%E0%A7%86%E0%A6%9group+%E0%A6%AA%E0%A7%8B%E0%A6%B2%E0%A6%BE%E0%A6%93/@23.0612981,88.1725466,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 bg-maroon-900/60 border border-gold-500/25 text-gold-300 font-semibold rounded-xl text-sm"
                  id="drawer-directions-btn"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{TRANSLATIONS.stickyDirections[lang]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
