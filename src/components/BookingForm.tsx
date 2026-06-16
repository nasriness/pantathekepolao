import React, { useState, useEffect } from 'react';
import { CalendarDays, Users, Phone, Smile, MapPin, History, Check, Info, Trash2 } from 'lucide-react';
import { Booking, Language } from '../types';
import { TRANSLATIONS } from '../data';

interface BookingFormProps {
  lang: Language;
  preSelectedOccasion?: string;
  onClearPreSelectedOccasion?: () => void;
}

export default function BookingForm({ lang, preSelectedOccasion, onClearPreSelectedOccasion }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: 4,
    area: 'rooftop' as 'rooftop' | 'main-hall' | 'any',
    occasion: '',
  });

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'book' | 'history'>('book');

  // Trigger when a pre-selected occasion comes from Event selection card
  useEffect(() => {
    if (preSelectedOccasion) {
      setFormData((prev) => ({ ...prev, occasion: preSelectedOccasion }));
      setActiveTab('book');
      setIsSuccess(false);
      if (onClearPreSelectedOccasion) {
        onClearPreSelectedOccasion();
      }
    }
  }, [preSelectedOccasion, onClearPreSelectedOccasion]);

  // Load static bookings from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('panta_theke_polao_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Error loading local storage:', err);
    }
  }, []);

  // Save list of bookings to localStorage
  const saveBookings = (list: Booking[]) => {
    try {
      setBookings(list);
      localStorage.setItem('panta_theke_polao_bookings', JSON.stringify(list));
    } catch (err) {
      console.error('Error writing local storage:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuestsChange = (amount: number) => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(1, Math.min(25, prev.guests + amount)),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      return alert(lang === 'bn' ? 'দয়া করে সব সঠিক তথ্য পূরণ করুন!' : 'Please fill all required inputs correctly!');
    }

    const newBooking: Booking = {
      id: `b-${Date.now()}`,
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      area: formData.area,
      occasion: formData.occasion || undefined,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const updatedBookings = [newBooking, ...bookings];
    saveBookings(updatedBookings);
    setIsSuccess(true);
    
    // Clear the form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '19:30',
      guests: 4,
      area: 'rooftop',
      occasion: '',
    });
  };

  // Build WhatsApp Message Link for direct prompt validation
  const getWhatsAppBookingLink = (booking: Booking) => {
    const dStr = new Date(booking.date).toLocaleDateString(lang === 'bn' ? 'bn-IN' : 'en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const areaMap = {
      rooftop: lang === 'bn' ? 'রুপটপ' : 'Rooftop',
      'main-hall': lang === 'bn' ? 'ফ্যামিলি মেইন হল' : 'Main Family Hall',
      any: lang === 'bn' ? 'যেকোনো জায়গা' : 'Any Available table',
    };

    const message = lang === 'bn'
      ? `নমস্কার পান্তা থেকে পোলাও! আমি একটি টেবিল বুকিং করতে চাই:\n\n👤 নাম: ${booking.name}\n📞 ফোন নম্বর: ${booking.phone}\n📅 তারিখ: ${dStr}\n⏰ সময়: ${booking.time}\n👥 অতিথি সংখ্যা: ${booking.guests} জন\n📍 বসার জায়গা: ${areaMap[booking.area]}\n🎉 বিশেষ অনুষ্ঠান: ${booking.occasion || 'ঘরোয়া ডাইনিং'}\n\nদয়া করে আমার এই টেবিলটি নিশ্চিত করুন। ধন্যবাদ!`
      : `Hello Panta Theke Polao! I would like to reserve a table:\n\n👤 Name: ${booking.name}\n📞 Phone: ${booking.phone}\n📅 Date: ${dStr}\n⏰ Time: ${booking.time}\n👥 Guests: ${booking.guests} Pax\n📍 Preferred Area: ${areaMap[booking.area]}\n🎉 Occasion: ${booking.occasion || 'Casual Dining'}\n\nPlease confirm this reservation. Thank you!`;

    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  };

  const deleteBooking = (id: string) => {
    if (confirm(lang === 'bn' ? 'আপনি কি বুকিংটি মুছে ফেলতে চান?' : 'Are you sure you want to delete this booking history?')) {
      const filtered = bookings.filter((b) => b.id !== id);
      saveBookings(filtered);
    }
  };

  return (
    <section id="booking-section" className="py-20 bg-maroon-50/60 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Titles */}
        <div className="text-center mb-10">
          <span className="text-maroon-800 font-mono font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 gap-1.5 mb-2">
            <CalendarDays className="w-4 h-4 text-gold-600" />
            <span>{lang === 'bn' ? 'টেবিল সংরক্ষণ' : 'PRE-BOOK FOR FREE'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-maroon-950 mb-3 tracking-tight">
            {TRANSLATIONS.bookingTitle[lang]}
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 max-w-lg mx-auto leading-relaxed">
            {TRANSLATIONS.bookingSubtitle[lang]}
          </p>
        </div>

        {/* Tab switcher: Booking Form vs History */}
        <div className="flex border-b border-maroon-200 justify-center mb-8 gap-1.5">
          <button
            onClick={() => { setActiveTab('book'); setIsSuccess(false); }}
            className={`px-6 py-3 font-semibold text-sm cursor-pointer border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === 'book'
                ? 'border-maroon-800 text-maroon-950'
                : 'border-transparent text-gray-500 hover:text-maroon-700'
            }`}
          >
            <CalendarDays className="w-4 h-4" />
            <span>{lang === 'bn' ? 'নতুন বুকিং করুন' : 'Book a Table'}</span>
          </button>
          
          <button
            onClick={() => { setActiveTab('history'); setIsSuccess(false); }}
            className={`px-6 py-3 font-semibold text-sm cursor-pointer border-b-2 transition-all flex items-center space-x-2 relative ${
              activeTab === 'history'
                ? 'border-maroon-800 text-maroon-950'
                : 'border-transparent text-gray-500 hover:text-maroon-700'
            }`}
          >
            <History className="w-4 h-4" />
            <span>{lang === 'bn' ? 'বুকিং রেকর্ডস' : 'My Bookings'}</span>
            {bookings.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-maroon-800 text-gold-300 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {bookings.length}
              </span>
            )}
          </button>
        </div>

        {/* Success Modal Panel */}
        {isSuccess && activeTab === 'book' ? (
          <div className="bg-white border border-gold-500/30 rounded-2xl p-6 sm:p-10 shadow-xl text-center max-w-xl mx-auto animate-fade-in" id="booking-success-box">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-5 border border-gold-500/20">
              <Check className="w-8 h-8 text-gold-600 stroke-[3]" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-maroon-950 mb-3">
              {TRANSLATIONS.bookSuccessTitle[lang]}
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {TRANSLATIONS.bookSuccessDesc[lang]}
            </p>

            {/* Crucial prompt for WhatsApp Verification */}
            {bookings.length > 0 && (
              <div className="space-y-3 bg-maroon-50/70 p-4 rounded-xl border border-maroon-100 mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-maroon-800 uppercase block">
                  {lang === 'bn' ? 'তাত্ক্ষণিক বুকিং করতে চান?' : 'WANT INSTANT CONFIRMATION?'}
                </span>
                <p className="text-xs text-slate-600 leading-normal">
                  {lang === 'bn' 
                    ? 'হোয়াটসঅ্যাপে আমাদের ১-ক্লিক মেসেজ পাঠিয়ে বুকিং স্পেস লক করে নিন।' 
                    : 'Send us this pre-filled booking format on WhatsApp to lock your priority space right away.'}
                </p>
                <a
                  href={getWhatsAppBookingLink(bookings[0])}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors text-sm shadow cursor-pointer"
                  id="whatsapp-verify-btn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.059-4.708l.326.19c1.558.924 3.34 1.411 5.166 1.411 5.561 0 10.085-4.519 10.088-10.081.002-2.695-1.042-5.228-2.942-7.129C16.837 1.78 14.316.736 11.62.736c-5.565 0-10.093 4.52-10.097 10.082-.001 1.895.501 3.738 1.456 5.352l.22.372-.973 3.555 3.631-.951z" />
                  </svg>
                  <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে পাঠান' : 'Send WhatsApp Message'}</span>
                </a>
              </div>
            )}

            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-2 border border-maroon-300 text-maroon-900 font-bold text-xs rounded-lg hover:bg-maroon-50 cursor-pointer"
              id="success-back-btn"
            >
              {lang === 'bn' ? 'আরেকটি সাধারণ বুকিং' : 'Make Another booking'}
            </button>
          </div>
        ) : activeTab === 'book' ? (
          
          /* Main Interactive Booking Form */
          <form 
            onSubmit={handleSubmit}
            className="bg-white border border-maroon-100 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6"
            id="table-booking-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-1.5" id="form-group-name">
                <label className="text-xs font-bold text-maroon-900 uppercase tracking-wider block">
                  {TRANSLATIONS.bookFormName[lang]} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-maroon-400">
                    <Smile className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={lang === 'bn' ? 'উদা: শুভঙ্কর ঘোষ' : 'e.g. Shubhankar Ghosh'}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-maroon-700 bg-gray-50 focus:bg-white transition-all text-sm font-medium text-slate-800"
                    id="input-name"
                  />
                </div>
              </div>

              {/* Mobile Phone */}
              <div className="space-y-1.5" id="form-group-phone">
                <label className="text-xs font-bold text-maroon-900 uppercase tracking-wider block">
                  {TRANSLATIONS.bookFormPhone[lang]} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-maroon-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={lang === 'bn' ? '১০ ডিজিট মোবাইল নম্বর' : '10 digit mobile number'}
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-maroon-700 bg-gray-50 focus:bg-white transition-all text-sm font-medium text-slate-800"
                    id="input-phone"
                  />
                </div>
              </div>

              {/* Booking Date */}
              <div className="space-y-1.5" id="form-group-date">
                <label className="text-xs font-bold text-maroon-900 uppercase tracking-wider block">
                  {TRANSLATIONS.bookFormDate[lang]} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-maroon-700 bg-gray-50 focus:bg-white transition-all text-sm font-medium text-slate-800"
                    id="input-date"
                  />
                </div>
              </div>

              {/* Time Slot selection */}
              <div className="space-y-1.5" id="form-group-time">
                <label className="text-xs font-bold text-maroon-900 uppercase tracking-wider block">
                  {TRANSLATIONS.bookFormTime[lang]} <span className="text-rose-500">*</span>
                </label>
                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-maroon-700 bg-gray-50 focus:bg-white transition-all text-sm font-medium text-slate-800 cursor-pointer"
                  id="input-time"
                >
                  <option value="12:00">12:00 PM ({lang === 'bn' ? 'দুপুর' : 'Afternoon'})</option>
                  <option value="13:30">01:30 PM ({lang === 'bn' ? 'দুপুর' : 'Afternoon'})</option>
                  <option value="15:00">03:00 PM ({lang === 'bn' ? 'বিকাল' : 'Afternoon'})</option>
                  <option value="18:00">06:00 PM ({lang === 'bn' ? 'সন্ধ্যা' : 'Evening'})</option>
                  <option value="19:30">07:30 PM ({lang === 'bn' ? 'সন্ধ্যা' : 'Evening'})</option>
                  <option value="20:30">08:30 PM ({lang === 'bn' ? 'রাত' : 'Night'})</option>
                  <option value="21:30">09:30 PM ({lang === 'bn' ? 'রাত' : 'Night'})</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Table Seating Area Preferences */}
              <div className="space-y-1.5" id="form-group-area">
                <label className="text-xs font-bold text-maroon-900 uppercase tracking-wider block">
                  {TRANSLATIONS.bookFormArea[lang]}
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-maroon-700 bg-gray-50 focus:bg-white transition-all text-sm font-medium text-slate-800 cursor-pointer"
                  id="input-area"
                >
                  <option value="rooftop">{TRANSLATIONS.bookAreaRooftop[lang]}</option>
                  <option value="main-hall">{TRANSLATIONS.bookAreaHall[lang]}</option>
                  <option value="any">{TRANSLATIONS.bookAreaAny[lang]}</option>
                </select>
              </div>

              {/* Guest Counter */}
              <div className="space-y-1.5" id="form-group-guests">
                <label className="text-xs font-bold text-maroon-900 uppercase tracking-wider block">
                  {TRANSLATIONS.bookFormGuests[lang]}
                </label>
                <div className="flex items-center justify-between border border-gray-200 rounded-xl bg-gray-50 px-4 py-1.5 h-[46px]">
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(-1)}
                    className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-maroon-950 shadow-sm border border-gray-200 transition-colors cursor-pointer select-none"
                  >
                    -
                  </button>
                  <span className="font-bold text-base text-slate-800 font-mono flex items-center space-x-1">
                    <Users className="w-4 h-4 text-maroon-600 mr-1.5" />
                    <span>{formData.guests}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(1)}
                    className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-maroon-950 shadow-sm border border-gray-200 transition-colors cursor-pointer select-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Occasion (Optional) */}
            <div className="space-y-1.5" id="form-group-occasion">
              <label className="text-xs font-bold text-maroon-900 uppercase tracking-wider block">
                {TRANSLATIONS.bookFormOccasion[lang]}
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-maroon-700 bg-gray-50 focus:bg-white transition-all text-sm font-medium text-slate-800 cursor-pointer"
                id="input-occasion"
              >
                <option value="">{lang === 'bn' ? '-- বেছে নিন --' : '-- Select Event --'}</option>
                <option value="Birthday">{lang === 'bn' ? 'জন্মদিনের আনন্দ উৎসব' : 'Birthday Bash'}</option>
                <option value="Anniversary">{lang === 'bn' ? 'বিবাহ বার্ষিকী বা আন্যান্য' : 'Marriage Anniversary'}</option>
                <option value="Family Reunion">{lang === 'bn' ? 'পারিবারিক পুনর্মিলনী' : 'Family Reunion / Gathering'}</option>
                <option value="Corporate Event">{lang === 'bn' ? 'অফিস মিটিং / পার্টি' : 'Office Business Lunch'}</option>
                <option value="Casual Dinner">{lang === 'bn' ? 'ঘরোয়া খাওয়া-দাওয়া' : 'Casual Friendly Feast'}</option>
              </select>
            </div>

            {/* Free Booking guarantee info box */}
            <div className="flex items-start space-x-2.5 bg-gold-200/20 border border-gold-500/20 rounded-xl p-3.5 text-xs text-slate-700 leading-normal" id="free-guarantee-info">
              <Info className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <span>
                {lang === 'bn'
                  ? 'কোনো অগ্রিম বুকিং ফি নেওয়া হয় না। বুকিং জমা দেওয়ার পর ২ থেকে ৫ মিনিটের মধ্যে আমরা কোনো বাড়তি চার্জ ছাড়াই সব নিশ্চিত করে দেব।'
                  : 'We charge zero registration fees. Your booking is 100% free; our coordinator will verify table readiness immediately upon request.'}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-gold-300 font-bold tracking-wide transition-all transform active:scale-99 shadow-lg hover:shadow-maroon-900/10 cursor-pointer text-base text-center"
              id="confirm-booking-submit"
            >
              {TRANSLATIONS.bookSubmitBtn[lang]}
            </button>
          </form>
        ) : (
          
          /* Booking History Tab Area */
          <div className="bg-white border border-maroon-100 rounded-3xl p-6 sm:p-10 shadow-lg" id="booking-history-container">
            <h3 className="text-lg font-bold text-maroon-950 font-serif border-b border-maroon-50 pb-3 mb-6 flex items-center justify-between">
              <span>{TRANSLATIONS.manageBookings[lang]}</span>
              <span className="text-xs text-gray-500 font-mono tracking-wider">
                ({bookings.length} {lang === 'bn' ? 'মোট বুকিং' : 'Total Items'})
              </span>
            </h3>

            {bookings.length === 0 ? (
              <div className="text-center py-12" id="no-history-placeholder">
                <Users className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">
                  {TRANSLATIONS.noBookings[lang]}
                </p>
                <button
                  onClick={() => setActiveTab('book')}
                  className="mt-4 px-4 py-2 border border-maroon-300 text-maroon-900 rounded-lg text-xs font-semibold hover:bg-maroon-50"
                >
                  {lang === 'bn' ? 'প্রথম বুকিং করুন' : 'Create First Booking'}
                </button>
              </div>
            ) : (
              <div className="space-y-4" id="bookings-history-list">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="border border-maroon-100/70 p-4.5 rounded-2xl bg-gray-50 hover:bg-white transition-all space-y-3 relative group"
                    id={`history-card-${b.id}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-maroon-950 text-base">
                          {b.name}
                        </h4>
                        <p className="text-xs text-gray-500 flex items-center space-x-1 font-mono mt-0.5">
                          <Phone className="w-3.5 h-3.5" />
                          <span>+91 {b.phone}</span>
                        </p>
                      </div>

                      {/* Pending/Confirmed Status Badge */}
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 border border-amber-300 text-amber-700 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-ping"></span>
                        <span>{lang === 'bn' ? 'রিভিউ হচ্ছে' : 'Under Review'}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-gray-100 font-medium">
                      <div>
                        <span className="text-gray-400 block text-[10px]">
                          {lang === 'bn' ? 'তারিখ:' : 'Date:'}
                        </span>
                        <span className="font-bold text-slate-800">
                          {new Date(b.date).toLocaleDateString(lang === 'bn' ? 'bn-IN' : 'en-IN', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>

                      <div>
                        <span className="text-gray-400 block text-[10px]">
                          {lang === 'bn' ? 'সময়:' : 'TimeSlot:'}
                        </span>
                        <span className="font-bold text-slate-800 font-mono">
                          {b.time}
                        </span>
                      </div>

                      <div>
                        <span className="text-gray-400 block text-[10px]">
                          {lang === 'bn' ? 'অতিথি সংখ্যা:' : 'Seats:'}
                        </span>
                        <span className="font-bold text-slate-800">
                          {b.guests} {lang === 'bn' ? 'জন' : 'Pax'}
                        </span>
                      </div>

                      <div>
                        <span className="text-gray-400 block text-[10px]">
                          {lang === 'bn' ? 'বসার স্থান:' : 'Area:'}
                        </span>
                        <span className="font-bold text-slate-800 capitalize">
                          {b.area.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      {/* WhatsApp Ping */}
                      <a
                        href={getWhatsAppBookingLink(b)}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs text-emerald-600 font-bold hover:text-emerald-700"
                        id={`whatsapp-verify-action-${b.id}`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.252.4 2.455 1.139 3.463l-.744 2.73 2.797-.733c.961.597 2.064.912 3.197.912 3.18 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.772-5.789-5.772zm3.385 8.163c-.147.412-.735.794-1.043.838-.28.041-.632.067-.98.026-.264-.029-.617-.117-.985-.264-1.558-.632-2.558-2.219-2.632-2.323-.074-.103-.603-.801-.603-1.507 0-.706.368-1.051.499-1.191.132-.14.294-.176.397-.176.103 0 .206.002.294.004.093.002.217-.035.337.252.122.294.417 1.015.453 1.088.036.073.059.161.01.263-.049.103-.074.161-.147.249-.074.088-.155.197-.22.256-.074.067-.152.14-.065.294.087.147.385.635.827 1.026.569.505 1.049.661 1.197.735.147.074.235.059.323-.044.088-.103.382-.441.485-.588.103-.147.206-.117.338-.074.132.049.838.397.98.47.142.065.235.103.264.155.035.059.035.338-.112.75zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                        </svg>
                        <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে পাঠান' : 'Send via WhatsApp'}</span>
                      </a>

                      {/* Trash Delete */}
                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="p-1.5 rounded bg-gray-100 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        title="Delete history"
                        id={`delete-btn-${b.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
