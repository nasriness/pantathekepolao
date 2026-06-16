import { MenuItem, GalleryItem, Testimonial, RestaurantEvent } from './types';

// Let's import the actual generated images. We can import them as strings or refer directly to their relative paths in vite.
// To avoid build system issues, we can reference their absolute-relative paths from the src root.
export const IMAGES = {
  hero: '/src/assets/images/hero_rooftop_dining_1781617453821.jpg',
  bengaliSpecial: '/src/assets/images/bengali_platter_1781617473393.jpg',
  tandoor: '/src/assets/images/tandoor_platter_1781617490625.jpg',
  rooftopSeating: '/src/assets/images/rooftop_night_seating_1781617508452.jpg',
  desserts: '/src/assets/images/bengali_desserts_1781617525340.jpg',
  chinese: '/src/assets/images/chinese_cuisine_1781617544342.jpg',
  beverage: '/src/assets/images/gondhoraj_cooler_1781617564338.jpg',
};

// Bilingual general translations
export const TRANSLATIONS = {
  navHome: { bn: 'হোম', en: 'Home' },
  navAbout: { bn: 'আমাদের কথা', en: 'About Us' },
  navWhyChooseUs: { bn: 'বিশেষত্ব', en: 'Why Us' },
  navMenu: { bn: 'মেনু', en: 'Menu' },
  navGallery: { bn: 'গ্যালারি', en: 'Gallery' },
  navEvents: { bn: 'অনুষ্ঠান', en: 'Events' },
  navContact: { bn: 'যোগাযোগ', en: 'Contact' },
  navBookTable: { bn: 'টেবিল বুকিং', en: 'Book a Table' },
  
  // Hero section
  googleRating: { bn: '৪.৩ গুগল রেটিং', en: '4.3 Google Rating' },
  familyRestaurant: { bn: 'ফ্যামিলি রেস্টুরেন্ট', en: 'Family Restaurant' },
  rooftopDining: { bn: 'রুপটপ ডাইনিং', en: 'Rooftop Dining' },
  parkingAvailable: { bn: 'পার্কিং সুবিধা', en: 'Parking Available' },
  heroTagline: {
    bn: 'নিখাদ স্বাদ • মনোরম পরিবেশ • সোনালী স্মৃতি',
    en: 'Good Food • Great Ambience • Memorable Moments'
  },
  heroDesc: {
    bn: 'আপনার পরিবার এবং বন্ধুদের সাথে আমাদের মনোরম রুপটপ (ছাদ) রেস্টুরেন্টে অত্যন্ত মুখরোচক খাবার উপভোগ করুন।',
    en: 'Enjoy delicious food with family and friends in a beautiful rooftop dining atmosphere.'
  },
  btnCallNow: { bn: 'ফোন করুন', en: 'Call Now' },
  btnGetDirections: { bn: 'লোকেশন দেখুন', en: 'Get Directions' },
  btnViewMenu: { bn: 'মেনু তালিকা', en: 'View Menu' },

  // Sticky Bar
  stickyCall: { bn: 'কল করুন', en: 'Call' },
  stickyWhatsApp: { bn: 'হোয়াটসঅ্যাপ', en: 'WhatsApp' },
  stickyDirections: { bn: 'লোকেশন', en: 'Directions' },
  stickyBook: { bn: 'বুক করুন', en: 'Book' },

  // About Section
  aboutTitle: { bn: 'ঐতিহ্য আর আধুনিকতার মেলবন্ধন', en: 'Where Tradition Meets Ambience' },
  aboutDesc1: {
    bn: '"পান্তা থেকে পোলাও" কেবল একটি রেস্টুরেন্ট নয়, এটি বাঙালি খাবারের দীর্ঘ ঐতিহ্যের এক পরম আনন্দ উৎসব। আমাদের লক্ষ্য গ্রাম বাংলার মাটির টান ও শহরতলির আধুনিক রূপটপের শান্ত স্নিগ্ধ পরিবেশকে এক সুতোয় বেঁধে আপনার তৃপ্তি নিশ্চিত করা।',
    en: 'Panta Theke Polao is more than just a restaurant; it is a heartwarming celebration of Bengali culinary heritage. Our mission is to blend Bengal\'s soulful traditional dishes with modern, relaxed rooftop dining.'
  },
  aboutDesc2: {
    bn: 'আমাদের এখানে আপনি পাবেন সাধারণ পান্তা ভাতের হারিয়ে যাওয়া স্বাদ থেকে শুরু করে সুগন্ধি বাসন্তী পোলাও ও কষা মাংসের রাজকীয় জুটি। সাথে তন্দুর ও চাইনিজ খাবারের অসাধারণ সম্ভার, যা পুরো পরিবারের সকলের রসনাতৃপ্তি ঘটাবে।',
    en: 'Here, you can savor everything from the nostalgic simplicity of authentic "Panta-Bhat" to the royal rich delicacy of aromatic Basanti Polao and Kosha Mangsho. We also serve tandoori hot starters and family-friendly Chinese, ensuring a delight for everyone.'
  },

  // Why choose us
  whyTitle: { bn: 'আমাদের কেন বেছে নেবেন?', en: 'Why Choose Us?' },
  whySubtitle: {
    bn: 'আমরা স্বাদ, মান এবং সুন্দর স্মৃতির নিশ্চয়তা দিই',
    en: 'We guarantee incredible taste, hygiene, and memorable moments.'
  },

  // Menu section
  menuTitle: { bn: 'আমাদের মেনু কার্ড', en: 'Our Menu Card' },
  menuSubtitle: {
    bn: 'সেরা বাবুর্চিদের হাতে তৈরি প্রতিটি পদ অত্যন্ত তাজা ও স্বাস্থ্যকর',
    en: 'Freshly prepared, authentic delicacies hand-crafted by master chefs.'
  },
  popularTag: { bn: 'সেরা বিক্রিত', en: 'Best Seller' },
  vegTag: { bn: 'নিরামিষ', en: 'Veg' },
  pricePrefix: { bn: '৳', en: '₹' },

  // Gallery
  galleryTitle: { bn: 'রুপটপ গ্যালারি', en: 'Rooftop Gallery' },
  gallerySubtitle: {
    bn: 'আমাদের মনোরম ছাদের সাজসজ্জা এবং খুশির মুহূর্তের ঝলক',
    en: 'Glimpses of our open-air rooftop decorations, cozy dining spaces, and happy guest group pictures.'
  },
  allPhotos: { bn: 'সব ছবি', en: 'All Photos' },

  // Booking
  bookingTitle: { bn: 'টেবিল বুকিং বিবরণ', en: 'Reserve Your Table' },
  bookingSubtitle: {
    bn: 'বিনা খরচে আজই আপনার আসার সময় এবং টেবিল নির্বাচন করে রাখুন',
    en: 'Book your table absolutely free. We will keep your preferred spot ready!'
  },
  bookFormName: { bn: 'আপনার নাম', en: 'Your Name' },
  bookFormPhone: { bn: 'মোবাইল নম্বর', en: 'Phone Number' },
  bookFormDate: { bn: 'তারিখ', en: 'Booking Date' },
  bookFormTime: { bn: 'সময়', en: 'Time Slot' },
  bookFormGuests: { bn: 'অতিথির সংখ্যা', en: 'Number of Guests' },
  bookFormArea: { bn: 'পছন্দের জায়গা', en: 'Preferred Area' },
  bookFormOccasion: { bn: 'বিশেষ অনুষ্ঠান (ঐচ্ছিক)', en: 'Occasion (Optional)' },
  bookAreaRooftop: { bn: 'রুপটপ (আকাশের নিচে)', en: 'Rooftop (Open Air)' },
  bookAreaHall: { bn: 'মেইন ফ্যামিলি হল', en: 'Main Family Hall' },
  bookAreaAny: { bn: 'যে কোনো জায়গা', en: 'Any Available Space' },
  bookSubmitBtn: { bn: 'বুকিং সম্পন্ন করুন', en: 'Confirm Reservation' },
  bookSuccessTitle: { bn: 'অনুরোধটি জমা নেওয়া হয়েছে!', en: 'Booking Request Submitted!' },
  bookSuccessDesc: {
    bn: 'ধন্যবাদ! আপনার বুকিং আমাদের সিস্টেমে রিভউ হচ্ছে। অতি শীঘ্রই আপনার নম্বরে নিশ্চিতকরণ কল যাবে বা হোয়াটসঅ্যাপে মেসেজ পাঠানো হবে। দ্রুত কনফার্ম করতে কল করতে পারেন।',
    en: 'Thank you! Your booking request has been submitted. We will call you on your provided number to confirm shortly. For instant confirm, feel free to tap call!'
  },
  manageBookings: { bn: 'আপনার বুকিং তালিকা', en: 'Your Reservation History' },
  noBookings: { bn: 'আপনি এখনও কোনো টেবিল বুক করেননি।', en: 'You haven\'t made any bookings yet.' },

  // Events
  eventsTitle: { bn: 'পার্টি ও গেট-টুগেদার', en: 'Celebrations & Events' },
  eventsSubtitle: {
    bn: 'আমাদের মনোরম রুপটপে সাজিয়ে তুলুন জীবনের বিশেষ দিনগুলো',
    en: 'Host your special milestones with custom decoration, personalized catering, and amazing service.'
  },
  eventBookBtn: { bn: 'অনুষ্ঠানের জন্য যোগাযোগ', en: 'Book This Event' },

  // Testimonials
  testTitle: { bn: 'আমাদের অতিথিদের মুখ থেকে', en: 'What Our Guests Say' },
  testSubtitle: {
    bn: 'গত এক বছরে শত শত পরিবারের মুখে হাসি ফুটিয়েছি আমরা',
    en: 'Over the year, we have served hundreds of families with love and taste.'
  },

  // Contact
  contactTitle: { bn: 'রেস্টুরেন্টে পধার্পণ করুন', en: 'Visit Panta Theke Polao' },
  contactSubtitle: {
    bn: 'সহজে আমাদের লোকেশন খুঁজে পান এবং সরাসরি যোগাযোগ রাখুন',
    en: 'Easily get directions to our rooftop or directly contact us for assistance.'
  },
  addressLabel: { bn: 'ঠিকানা:', en: 'Address:' },
  addressValue: {
    bn: '৩৫৬এফ+জি২৭, হোরাল, সোনাটিকরি, হরাল দাসপুর, পশ্চিমবঙ্গ - ৭১২৩০৩',
    en: '356F+G27, Horal, Sonatikri, Haral daspur, West Bengal 712303'
  },
  hoursLabel: { bn: 'খোলার সময়:', en: 'Opening Hours:' },
  hoursValue: {
    bn: 'প্রতিদিন দুপুর ১২:০০টা - রাত ১০:৩০টা',
    en: 'Everyday 12:00 PM - 10:30 PM'
  },
  phoneLabel: { bn: 'ফোন নাম্বার:', en: 'Phone Numbers:' },
  phoneValue1: { bn: '+৯১ ৯৮৭৬৫ ৪৩২১০', en: '+91 98765 43210' },
  phoneValue2: { bn: '+৯১ ৮০১২৩ ৪৫৬৭৮', en: '+91 80123 45678' },
  whatsappLabel: { bn: 'হোয়াটসঅ্যাপ গ্রুপ/হেল্পলাইন:', en: 'WhatsApp Support:' },

  // Footer
  quickLinks: { bn: 'দ্রুত লিংকসমূহ', en: 'Quick Links' },
  followUs: { bn: 'আমাদের সোশ্যাল মিডিয়া', en: 'Follow Our Journey' },
  copyright: {
    bn: '© ২০২৬ পান্তা থেকে পোলাও। সর্বস্বত্ব সংরক্ষিত।',
    en: '© 2026 Panta Theke Polao. All rights reserved.'
  },
  madeWithLove: {
    bn: 'নদীয়ার প্রথম রুফটপ ফ্যামিলি রেস্টুরেন্ট',
    en: 'Nadia\'s premier rooftop family dining experience.'
  }
};

// Menu Item Data
export const MENU_ITEMS: MenuItem[] = [
  // Bengali Special
  {
    id: 'b1',
    name: { bn: 'স্পেশাল বাসন্তী পোলাও ও কষা মাংস', en: 'Special Basanti Polao & Kosha Mutton' },
    description: {
      bn: 'সুগন্ধি গোবিন্দভোগ চালের পোলাও সাথে মশলাদার কষা কচি পাঁঠার মাংস (২ পিস)। আমাদের বেস্টসেলার!',
      en: 'Fragrant sweet yellow Basanti rice paired with classic rich, spicy slow-cooked tender mutton (2 pieces). Our absolute masterpiece.'
    },
    price: 320,
    category: 'bengali-special',
    image: IMAGES.bengaliSpecial,
    isPopular: true
  },
  {
    id: 'b2',
    name: { bn: 'ঐতিহ্যবাহী পান্তা ইলিশ ও ভত্তা থালা', en: 'Traditional Panta Ilish & Bhorta Platter' },
    description: {
      bn: 'শীতল পান্তা ভাত, কড়কড়ে ভাজা ইলিশ মাছ (১ পিস), পেঁয়াজ, লঙ্কা ভাজা এবং তিন রকমের ঘরোয়া আলু-বেগুন-ডাল ভত্তা।',
      en: 'Chilled water-soaked rice (Panta Bhat) served with a crispy fried Hilsa fish, roasted chilies, onion, and trio of fresh homemade bhortas.'
    },
    price: 240,
    category: 'bengali-special',
    isPopular: true
  },
  {
    id: 'b3',
    name: { bn: 'পান্তা ভাত ও লটে ফ্রাই থালা', en: 'Panta Bhat & Loitta Fry Platter' },
    description: {
      bn: 'হালকা ঠান্ডা পান্তা ভাত, কড়কড়ে মশলাদার লটে মাছ ভাজা, সাথে পেঁয়াজি ও ঐতিহ্যবাহী আচার ও শুকনো লঙ্কা।',
      en: 'A classic rustic combination: cool Panta-bhat served with super crunchy spicy Loitta / Bombay Duck fish fry, garnishes and pickle.'
    },
    price: 140,
    category: 'bengali-special'
  },
  {
    id: 'b4',
    name: { bn: 'লুচি ও আলু দম (৪ পিস)', en: 'Luchi & Alur Dom (4 Pcs)' },
    description: {
      bn: 'গরম গরম ফুলকো ময়দার লুচি সাথে নদীয়ার বিখ্যাত ঘন কষা আলুর দম। দারুণ জলখাবার!',
      en: 'Soft fluffy puff-fried flatbreads (Luchi) served with thick-gravied, spiced slow-cooked baby potatoes (Alur Dom).'
    },
    price: 80,
    category: 'bengali-special',
    isVegetarian: true
  },

  // Tandoor
  {
    id: 't1',
    name: { bn: 'তন্দুরি চিকেন মিক্সড কাবাব প্ল্যাটার', en: 'Tandoori Mixed Kebab Platter' },
    description: {
      bn: 'স্মোকি চিকেন টিক্কা ও ক্রিমি মালাই রসালো কাবাব (৬ পিস)। পুদিনার চাটনি আর পেঁয়াজের স্লাইস সহযোগে পরিবেশিত।',
      en: 'Smoky chicken tikka and rich cream-marinated malai kebabs (6 pieces) char-grilled. Served with mint dip.'
    },
    price: 220,
    category: 'tandoor',
    image: IMAGES.tandoor,
    isPopular: true
  },
  {
    id: 't2',
    name: { bn: 'চিকেন তন্দুরি ফুল', en: 'Tandoori Chicken (Full)' },
    description: {
      bn: 'টক দই এবং সুগন্ধি ভারতীয় মশলার প্রলেপে মাখানো আস্ত চিকেন কাবাব, যা জ্বলন্ত কয়লার উনুনে পোড়ানো।',
      en: 'Whole premium chicken marinated in yogurt and signature Indian spices, slow-roasted in our traditional clay tandoor.'
    },
    price: 360,
    category: 'tandoor'
  },
  {
    id: 't3',
    name: { bn: 'রুপটপ স্পেশাল হরিয়ালি পনির টিক্কা', en: 'Rooftop Special Hariyali Paneer Tikka' },
    description: {
      bn: 'ধনেপাতা ও পুদিনার পেস্টে ম্যারিনেট করা রসালো পনিরের কিউব ও ক্যাপসিকাম শিকে পোড়ানো।',
      en: 'Fresh soft cottage cheese cubes marinated in fresh mint, coriander, and mild cream, grilled with bell peppers and tomatoes.'
    },
    price: 180,
    category: 'tandoor',
    isVegetarian: true
  },
  {
    id: 't4',
    name: { bn: 'বাটার নান ও চিকেন কষা কম্বো', en: 'Butter Naan & Chicken Kosha Combo' },
    description: {
      bn: 'হাত দিয়ে তৈরি মাখনে মাখা বড় তন্দুরি নান (২ পিস) সাথে ১ বাটি মশলাদার কষা মুরগির মাংস।',
      en: 'Two butter-glazed clay-oven naans paired with a bowl of rich spicy authentic Chicken Kosha.'
    },
    price: 210,
    category: 'tandoor'
  },

  // Chinese
  {
    id: 'c1',
    name: { bn: 'স্পেশাল চিলি চিকেন ও হাক্কা নুডলস', en: 'Special Chilli Chicken & Hakka Noodles' },
    description: {
      bn: 'ক্লাসিক চাইনিজ কায়দায় তৈরি ডিম-সবজি সহ সতে নুডলস ও ৪ পিস ঝাল চিলি চিকেনের কম্বো থালা।',
      en: 'Indo-Chinese street-style stir-fry noodles loaded with crunchy vegetables, paired with 4 pieces of spicy Chilli Chicken.'
    },
    price: 190,
    category: 'chinese',
    image: IMAGES.chinese,
    isPopular: true
  },
  {
    id: 'c2',
    name: { bn: 'শেফস স্পেশাল স্কিম্পড ফ্রাইড রাইস', en: 'Chef\'s Special Fried Rice' },
    description: {
      bn: 'ছোট ছোট চিংড়ি, ডিম এবং সুগন্ধি বাসমতি চালের হালকা মশলাদার ফ্রাইড রাইস। দারুণ সুস্বাদু!',
      en: 'Fragrant long-grain basmati rice tossed with juicy shrimp, eggs, and dynamic oriental sesame-soy aromatics.'
    },
    price: 170,
    category: 'chinese'
  },
  {
    id: 'c3',
    name: { bn: 'ক্রিস্পি হানি পটেটো', en: 'Crispy Honey Chilli Potato' },
    description: {
      bn: 'কড়কড়ে ভাজা পটেটো ফিঙ্গার্স সামান্য মধু, তিল এবং চিলি সসের নিখুঁত সতে টসিং।',
      en: 'Super crunchy potato fingers tossed in a balanced sweet and spicy honey chili glaze and sprinkled with toasted sesame.'
    },
    price: 120,
    category: 'chinese',
    isVegetarian: true
  },

  // Desserts
  {
    id: 'd1',
    name: { bn: 'নদীয়ার খাঁটি মিষ্টি দই এবং রসগোল্লা থালি', en: 'Authentic Nadia Mishti Doi & Rossogolla' },
    description: {
      bn: 'ঐতিহ্যবাহী মাটির ভাঁড়ে পাতা ঘন লালচে মিষ্টি দই সাথে ২টি নরম তুলতুলে সুজিহীন গরম রসগোল্লা।',
      en: 'Nadia\'s landmark sweet baked yogurt in classic red-clay pots accompanied by 2 spongy white warm rossogollas.'
    },
    price: 75,
    category: 'desserts',
    image: IMAGES.desserts,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'd2',
    name: { bn: 'বেbaked সন্দেশ ও ক্ষীরের বাটি', en: 'Baked Sandesh with Rich Rabdi' },
    description: {
      bn: 'নরম ছানার সন্দেশ উনুনে বেক করা, ওপরে ঘন এলাচ-স্বাদযুক্ত রাজকীয় মালাই রাবড়ি ছড়ানো।',
      en: 'Creamy fresh cottage-cheese fudges baked golden, topped with saffron and cardamom flavored thick condensed milk Rabdi.'
    },
    price: 90,
    category: 'desserts',
    isVegetarian: true
  },

  // Beverages
  {
    id: 'v1',
    name: { bn: 'স্পেশাল গন্ধরাজ লেবুর শরবত', en: 'Special Gondhoraj Lime Cooler' },
    description: {
      bn: 'বাঙালির প্রিয় সুগন্ধি গন্ধরাজ লেবুর রস ও পুদিনা পাতার চরম সতেজকারী বরফ-ঠান্ডা পানীয়।',
      en: 'An incredibly fragrant iced summer refresher crushed with fresh West-Bengal royal Gondhoraj lime, mint leaves, and rock salt.'
    },
    price: 60,
    category: 'beverages',
    image: IMAGES.beverage,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'v2',
    name: { bn: 'হিমায়িত আম লস্যি', en: 'Chilled Mango Lassi' },
    description: {
      bn: 'মিষ্টি দই ও আমের পাল্প দিয়ে তৈরি ক্রিমি ঠান্ডা লস্যি, ওপরে ড্রাইফ্রুটস ও কাজুবাদামের কুচি।',
      en: 'A velvety churned yogurt smoothie infused with sweet mango pulp, garnished with slivered almonds and cashew dust.'
    },
    price: 70,
    category: 'beverages',
    isVegetarian: true
  }
];

// Why Choose Us Info
export const WHY_CHOOSE_US = [
  {
    id: 'w1',
    icon: 'Sunrise',
    title: { bn: 'মনোরম রুপটপ ভিউ', en: 'Scenic Rooftop Vibe' },
    desc: {
      bn: 'উন্মুক্ত আকাশের নিচে নদীর ঠান্ডা হওয়া আর মনোরম আলোকময় পরিবেশে খাওয়ার অনন্য অভিজ্ঞতা।',
      en: 'Breathe in the cool evening breeze under open skies decorated with beautiful glowing outdoor lighting.'
    }
  },
  {
    id: 'w2',
    icon: 'Users',
    title: { bn: 'শতভাগ ফ্যামিলি ফ্রেন্ডলি', en: '100% Family Friendly' },
    desc: {
      bn: 'সম্পূর্ণ ধূমপানমুক্ত ও সুরক্ষিত পারিবারিক পরিবেশ, যেখানে সব বয়সের গ্রাহকদের জন্য রয়েছে সুস্থ ও মার্জিত ব্যবস্থা।',
      en: 'Completely wholesome non-smoking family environment with clean dining arrangements and supportive staff.'
    }
  },
  {
    id: 'w3',
    icon: 'Car',
    title: { bn: 'নিরাপদ বাইক ও গাড়ি পার্কিং', en: 'Safe Bike & Car Parking' },
    desc: {
      bn: 'আমাদের কাস্টমারদের জন্য রেস্টুরেন্টের নিচেই রয়েছে নিজস্ব ফ্রী ও সুরক্ষিত রোডসাইড পার্কিং স্পেস।',
      en: 'Hassle-free secure roadside designated spaces to safely park your family cars or two-wheelers.'
    }
  },
  {
    id: 'w4',
    icon: 'Cake',
    title: { bn: 'ঐতিহ্যবাহী সেরা মিষ্টান্ন', en: 'Legendary Indian Desserts' },
    desc: {
      bn: 'নদীয়ার ঐতিহ্য মেনে নদীয়ার শ্রেষ্ঠ খাঁটি ছানার মিষ্টি ও দই যা আপনার মুখের স্বাদকে তৃপ্তি দেবে।',
      en: 'Enjoy locally crafted genuine milk sweets and creamy sweet clay-molded Mishti Doi made fresh.'
    }
  },
  {
    id: 'w5',
    icon: 'Coins',
    title: { bn: 'বাজেট ফ্রেন্ডলি মূল্যতালিকা', en: 'Affordable Pocket-Friendly' },
    desc: {
      bn: 'প্রিমিয়াম টেস্ট ও বড় কুয়ান্টিটির খাবার, যা অত্যন্ত সাশ্রয়ী দামে আমরা উপস্থাপন করি।',
      en: 'No hefty premium bills. Fine-dine quality food served in generous quantities at affordable, honest pricing.'
    }
  },
  {
    id: 'w6',
    icon: 'Armchair',
    title: { bn: 'আরামদায়ক বসার সুবিধা', en: 'Spacious Cozy Seating' },
    desc: {
      bn: 'সোফা সেটিং ও মনোরম কুশনযুক্ত কাঠের চেয়ার যেখানে আপনি ঘণ্টার পর ঘণ্টা প্রিয়জনদের সাথে কাটাতে পারবেন।',
      en: 'Choice of comfortable cushioned wooden chairs or comfy sofas with plenty of elbow room and relaxed spacing.'
    }
  }
];

// Gallery Images Database
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: { bn: 'রুপটপ ডাইনিং টেবিল ও ঝাড়বাতি লাইট', en: 'Rooftop dining layout under fairy lights' },
    category: 'ambience',
    image: IMAGES.rooftopSeating
  },
  {
    id: 'g2',
    title: { bn: 'সুস্বাদু খাঁটি বাসন্তী পোলাও ও কষা খাসির মাংস', en: 'Creamy Basanti Polao paired with Kosha Mutton' },
    category: 'food',
    image: IMAGES.bengaliSpecial
  },
  {
    id: 'g3',
    title: { bn: 'উষ্ণ মনোরম সন্ধ্যার আলো', en: 'Warm evening hanging lights of our restaurant' },
    category: 'decorations',
    image: IMAGES.hero
  },
  {
    id: 'g4',
    title: { bn: 'টেস্টি মিক্সড তন্দুরি কাবাব থালা', en: 'Mouthwatering Tandoor Mixed Kebab plate' },
    category: 'food',
    image: IMAGES.tandoor
  },
  {
    id: 'g5',
    title: { bn: 'মিষ্টি দই ও তুলতুলে স্পঞ্জ রসগোল্লা', en: 'Authentic local Mishti Doi and sweet white Rossogolla' },
    category: 'food',
    image: IMAGES.desserts
  },
  {
    id: 'g6',
    title: { bn: 'সতেজ গন্ধরাজ লেবু সোডা এবং মিন্ট', en: 'Iced Gondhoraj Lime Cooler with mint leaf garnish' },
    category: 'food',
    image: IMAGES.beverage
  },
  {
    id: 'g7',
    title: { bn: 'সন্ধ্যাবেলা নদীয়া শহরের মনোরম হাওয়া', en: 'Rooftop lounge overlooking the city light sunset' },
    category: 'ambience',
    image: IMAGES.rooftopSeating // Reusing for a rich, beautiful feel
  },
  {
    id: 'g8',
    title: { bn: 'চায়নিজ সিসলার নুডলস ও ক্রিস্পি চিকেন', en: 'Stir fried Hakka Noodles with Chilli Chicken' },
    category: 'food',
    image: IMAGES.chinese
  }
];

// Testimonials Reviews
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'u1',
    name: 'Shubhankar Das (শুভঙ্কর দাস)',
    location: { bn: 'কৃষ্ণনগর, নদীয়া', en: 'Krishnanagar, Nadia' },
    rating: 5,
    comment: {
      bn: 'আমাদের ফ্যামিলির সবার এখানে এসে দারুণ লেগেছে। ছাদের ডেকোরেশন আর লাইটিং অসাধারণ। বাসন্তী পোলাও ও কষা খাসি মাংস সত্যি অতুলনীয় ছিল, মাস্ট ট্রাই সাব!',
      en: 'Our entire family loved this place. The rooftop decoration and light arrangement is mind-blowing. The Basanti Polao and Mutton Kosha tasted superb, highly recommended!'
    }
  },
  {
    id: 'u2',
    name: 'Ananya Banerjee (অনন্যা ব্যানার্জী)',
    location: { bn: 'রানাঘাট, নদীয়া', en: 'Ranaghat, Nadia' },
    rating: 4,
    comment: {
      bn: 'খাবারের দাম খুব সাধারণ মানুষের সাধ্যের মধ্যে এবং কোয়ালিটি অত্যন্ত প্রিমিয়াম। নদীয়া জেলায় এরকম উন্মুক্ত আকাশের নিচে শান্ত পরিবেশে ডাইনিং রুম অসাধারণ অভিজ্ঞতা।',
      en: 'The price of food is very reasonable for average families, yet the quality is high-end. Having a calm open-air dining option in Nadia is a refreshing experience.'
    }
  },
  {
    id: 'u3',
    name: 'Tanveer Ahmed (তানভীর আহমেদ)',
    location: { bn: 'কালীগঞ্জ, পশ্চিমবঙ্গ', en: 'Kaliganj, WB' },
    rating: 5,
    comment: {
      bn: 'গাড়ি পার্কিংয়ের স্পেস রয়েছে একদম নিচে আর গন্ধরাজ লেবুর শরবত টা খেয়ে প্রান জুড়িয়ে গেল। স্টাফদের ব্যাবহার খুবই ভদ্র ও সহযোগী। আমরা আবার অবশ্যই যাব।',
      en: 'Convenient road parking spaces and the Gondhoraj Lime Cooler was outstanding. The staff is polite and respectful. We will definitely visit again.'
    }
  },
  {
    id: 'u4',
    name: 'Subhajeet Das',
    location: { bn: 'লোকাল গাইড • ১২টি রিভিউ', en: 'Local Guide • 12 reviews' },
    rating: 4,
    comment: {
      bn: 'বন্ধু বা পরিবারের সাথে আপনার সন্ধ্যা উপভোগ করার জন্য চমৎকার জায়গা ❤️ খুব ভালো লেগেছে.. খাবার গড়পড়তা, তবে পরিবেশ এবং সাজসজ্জা খুব সুন্দর।',
      en: 'Great place for enjoying your evening with friends or family ❤️ loved it.. Food is average, but the atmosphere and decorations are very beautiful.'
    }
  },

  {
    id: 'u6',
    name: 'Sahil Tanveer',
    location: { bn: 'লোকাল গাইড • ৯টি রিভিউ', en: 'Local Guide • 9 reviews' },
    rating: 5,
    comment: {
      bn: 'এটি আমার এলাকায় এখন পর্যন্ত একমাত্র রুফটপ হোটেল। পরিবার এবং বন্ধুদের সাথে ভালো সময় কাটানোর সেরা জায়গা... পরিবেশ খুব ভালো, খাবারের মান খুব ভালো এবং কর্মীদের ব্যবহারও ভালো... আমাদের লোকালিটির অন্যান্য হোটেলের তুলনায় দাম অনেক সস্তা, আমি নিশ্চিতভাবে এটি দেখার পরামর্শ দেব...',
      en: 'This is only one roof top hotel in my locality till now. best place to spend good times with family and friends... ambience is very good,food quality is very good and staffs behavior also good...... prices is very cheap as compared to others hotel in my locality, ofcourse i must suggest you to visit there....'
    }
  },
  {
    id: 'u7',
    name: 'Rubina yesmine',
    location: { bn: 'লোকাল গাইড • ৫২টি রিভিউ', en: 'Local Guide • 52 reviews' },
    rating: 4,
    comment: {
      bn: 'যদিও বাজারে নতুন, তারা তাদের গ্রাহকদের সন্তুষ্ট করার জন্য তাদের যথাসাধ্য চেষ্টা করে.. আপনি যদি সহযোগিতা করেন তবে আপনি একটি ভালো অভিজ্ঞতা পাবেন।',
      en: 'Though its new in the market they try their best to satisfy their customer.. If you co operate you will get a good experience'
    }
  },
  {
    id: 'u8',
    name: 'Jhontu Hazra',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'হোটেল পান্তা থেকে পোলাও, যার খাবার এখন অনেক বেশি সুস্বাদু এবং সস্তা? সুপার! খাবার: ৫/৫',
      en: 'Hotel panta theke polau, whose food is now much tastier and cheaper? Supar. Food: 5/5'
    }
  },
  {
    id: 'u9',
    name: 'Mirarinuddin Uddin',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'ভীষণ সুন্দর 💯💯....খুব ভালো খাবার ..এবং যুক্তিসঙ্গত দাম ...আই লাভ ইট...',
      en: 'Very nice 💯💯....khub valo khabar ..and reasonable rate ...I love it\'s ...'
    }
  },
  {
    id: 'u10',
    name: 'Bashir Uddin',
    location: { bn: 'লোকাল গাইড • ১০টি রিভিউ', en: 'Local Guide • 10 reviews' },
    rating: 4,
    comment: {
      bn: 'স্টাফদের আচরণ দুর্দান্ত ছিল। খাবার: ৪/৫',
      en: 'Staffs behaviour was awesome. Food: 4/5'
    }
  },
  {
    id: 'u11',
    name: 'Sabyasachi Mukherjee',
    location: { bn: 'লোকাল গাইড • ৭টি রিভিউ', en: 'Local Guide • 7 reviews' },
    rating: 4,
    comment: {
      bn: 'বাজেটের মধ্যে ভালো। মিল টাইপ: ডিনার...',
      en: 'Good within budget. Meal type: Dinner...'
    }
  },
  {
    id: 'u12',
    name: 'RAj Ghosh',
    location: { bn: '২৯টি রিভিউ', en: '29 reviews' },
    rating: 5,
    comment: {
      bn: 'দারুণ স্বাদ..... পয়সা উসুল.....',
      en: 'Nice test..... Value for money.....'
    }
  },
  {
    id: 'u13',
    name: 'I am Sk',
    location: { bn: '৪টি রিভিউ • ১৩টি ফটো', en: '4 reviews • 13 photos' },
    rating: 5,
    comment: {
      bn: 'খুব ভালো কোয়ালিটি। খাবার: ৫/৫',
      en: 'Very good quality. Food: 5/5'
    }
  },
  {
    id: 'u14',
    name: 'Sarif Ali',
    location: { bn: 'লোকাল গাইড • ৩৩টি রিভিউ', en: 'Local Guide • 33 reviews' },
    rating: 5,
    comment: {
      bn: 'সবকিছু খুব সুন্দর 👍❤️ ডিনার টাইপ মিল...',
      en: 'Very nice everything 👍❤️ Meal type: Dinner...'
    }
  },
  {
    id: 'u15',
    name: 'Aman Uddin',
    location: { bn: '২টি রিভিউ', en: '2 reviews' },
    rating: 5,
    comment: {
      bn: 'সেরা মানের খাবারের আইটেম। খাবার: ৫/৫',
      en: 'Best quality food items. Food: 5/5'
    }
  },
  {
    id: 'u16',
    name: 'Amam Sarkar',
    location: { bn: '২টি রিভিউ', en: '2 reviews' },
    rating: 5,
    comment: {
      bn: 'খুব ভালো। খাবার: ৫, সার্ভিস: ৫',
      en: 'Very good. Food: 5, Service: 5'
    }
  },
  {
    id: 'u17',
    name: 'নবো দিগন্ত',
    location: { bn: 'লোকাল গাইড • ১৮টি রিভিউ', en: 'Local Guide • 18 reviews' },
    rating: 5,
    comment: {
      bn: 'ভালো। খাবার: ৫, সার্ভিস: ৫',
      en: 'Good. Food: 5, Service: 5'
    }
  },
  {
    id: 'u18',
    name: 'Nowser Ali',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'সবসময় খুব ভালো 💯💯💯🥰🥰🥰 ... জনপ্রতি খরচ: ₹৬০০-৮০০...',
      en: 'Always good 💯💯💯🥰🥰🥰 ... Price per person: ₹600-800...'
    }
  },
  {
    id: 'u19',
    name: 'Anirban deb',
    location: { bn: 'লোকাল গাইড • ৬টি রিভিউ', en: 'Local Guide • 6 reviews' },
    rating: 4,
    comment: {
      bn: 'সুন্দর। লাঞ্চ রিভিউ...',
      en: 'Nice. Lunch review...'
    }
  },
  {
    id: 'u20',
    name: 'Love Hate',
    location: { bn: 'লোকাল গাইড • ৯টি রিভিউ', en: 'Local Guide • 9 reviews' },
    rating: 1,
    comment: {
      bn: 'খারাপ অভিজ্ঞতা। খাবার: ১/৫, সার্ভিস: ১/৫',
      en: 'Bad experience. Food: 1, Service: 1'
    }
  },
  {
    id: 'u21',
    name: 'Shaikh Mahidul Islam',
    location: { bn: 'লোকাল গাইড • ৪০টি রিভিউ', en: 'Local Guide • 40 reviews' },
    rating: 5,
    comment: {
      bn: 'খুব ভালো 👍 ... ডিনার টাইপ...',
      en: 'Very good 👍 ... Meal type: Dinner...'
    }
  },
  {
    id: 'u22',
    name: 'Muskan Khatun',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 2,
    comment: {
      bn: 'খারাপ অভিজ্ঞতা (খাবারের অতিরিক্ত দাম)। জনপ্রতি বাজেট: ₹৮০০-১০০০',
      en: 'Bad experience (overpriced). Price per person: ₹800-1,000'
    }
  },
  {
    id: 'u23',
    name: 'Santanu Ok',
    location: { bn: 'লোকাল গাইড • ৮৩টি রিভিউ', en: 'Local Guide • 83 reviews' },
    rating: 1,
    comment: {
      bn: 'খারাপ সার্ভিস। খাবার: ১/৫, সার্ভিস: ১/৫',
      en: 'Bad Service. Food: 1, Service: 1'
    }
  },
  {
    id: 'u24',
    name: 'Rohan Das',
    location: { bn: 'লোকাল গাইড • ১১টি রিভিউ', en: 'Local Guide • 11 reviews' },
    rating: 5,
    comment: {
      bn: 'একবার অবশ্যই চেষ্টা করুন। সাশ্রয়ী মূল্যে অসাধারণ খাবারের মান এবং দারুণ পরিবেশ!',
      en: 'Must try out. Awesome food quality with affordable price and great ambiance'
    }
  },
  {
    id: 'u25',
    name: 'Sk AYAZ',
    location: { bn: '৯টি রিভিউ', en: '9 reviews' },
    rating: 2,
    comment: {
      bn: 'মশলা সোডা সবচেয়ে খারাপ ছিল (ট্রাই করবেন না)। বাটার চিকেন মোটেও বাটার চিকেন না, এটা অন্য কিছু। ফ্রাইড মোমো মোটামুটি ছিল এবং এর চাটনিটি কেমন যেন ছিল...',
      en: 'The masala soda was the worst (don\'t try). Butter chicken is not butter chicken it\'s literally something else. The fried momo was mid and the green chutney with it was fishy for some reason.'
    }
  },
  {
    id: 'u26',
    name: 'Ohab Kazi',
    location: { bn: '২টি রিভিউ', en: '2 reviews' },
    rating: 5,
    comment: {
      bn: 'এখানে কম দামে চমৎকার কোয়ালিটির খাবার পাওয়া যায়। এবং রুফটপটি খুব সুন্দর জায়গা। মালিক সহ সবাই বেশ আন্তরিক। আমি প্রায় সবসময় চিকেন বিরিয়ানি খাই।',
      en: 'Very good quality food at low prices here. And the rooftop is a great place. And everyone here, including the owner, is very friendly. I almost always eat chicken biryani here.'
    }
  },
  {
    id: 'u27',
    name: 'Himadri Roy',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'এখানকার খাবার সত্যিই খুব ভালো এবং দাম অত্যন্ত কম। আমরা আমাদের পরিবারের সাথে সপ্তাহে অন্তত একবার আসব। আমরা বাইচি থেকে বলছি।',
      en: 'The food here is really good and the prices are very low. We will go once a week with our family. We are talking from Baichi.'
    }
  },
  {
    id: 'u28',
    name: 'Sayyad Tanveer',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'খাবারের কোয়ালিটি মারাত্মক এবং মনোরম রুফটপ ফিল! জনপ্রতি খরচ: ₹৮০০-১০০০',
      en: 'Loved it, the food quality was very high and awesome rooftop vibe. Price per person: ₹800-1,000'
    }
  },
  {
    id: 'u29',
    name: 'Abhijit Malik',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'এখানকার খাবার একদম অসাধারণ! বিলের পরিমাণও আমাদের সাধ্যের মধ্যে। আমার খুব পছন্দ হয়েছে।',
      en: 'The food here is amazing. The rates here are very low. I really like it.'
    }
  },
  {
    id: 'u30',
    name: 'Animesh Pal',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'খাবারের মান খুবই উন্নত এবং দাম নদীয়া এলাকার অন্যান্যদের তুলনায় বেশ কম।',
      en: 'The quality of the food here is very good and the prices are very low.'
    }
  },
  {
    id: 'u31',
    name: 'Hasina Khatun',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 2,
    comment: {
      bn: 'খাবারের দাম মাত্রাতিরিক্ত। ডিনারে অতিরিক্ত চার্জ।',
      en: 'Overpriced. Price per person ₹800–1,000'
    }
  },
  {
    id: 'u32',
    name: 'Sumon Mondal',
    location: { bn: 'লোকাল গাইড • ২৫টি রিভিউ', en: 'Local Guide • 25 reviews' },
    rating: 5,
    comment: {
      bn: 'অসাধারণ! খাবার: ৫/৫, সার্ভিস: ৫/৫',
      en: 'Osom! Food: 5, Service: 5'
    }
  },
  {
    id: 'u33',
    name: 'Julekha Sultana',
    location: { bn: 'লোকাল গাইড • ২টি রিভিউ', en: 'Local Guide • 2 reviews' },
    rating: 4,
    comment: {
      bn: 'সাশ্রয়ী মূল্যের মধ্যে ভালো খাবার। জনপ্রতি খরচ: ₹১-২০০',
      en: 'Value food within budget. Price per person: ₹1-200'
    }
  },
  {
    id: 'u34',
    name: 'IKBAL HOSSAIN',
    location: { bn: '৩টি রিভিউ', en: '3 reviews' },
    rating: 5,
    comment: {
      bn: '৯৯ টাকায় সুস্বাদু বিরিয়ানি! খাবার অতুলনীয়। ৫/৫',
      en: 'Biryani @ 99. Awesome taste and food value. Food: 5/5'
    }
  },
  {
    id: 'u35',
    name: 'Sayan kumar Ghosh',
    location: { bn: '২টি রিভিউ • ১টি ছবি', en: '2 reviews • 1 photo' },
    rating: 5,
    comment: {
      bn: 'খাবার: ৫/৫, সার্ভিস: ৪/৫',
      en: 'Food: 5, Service: 4'
    }
  },
  {
    id: 'u36',
    name: 'Monirul Purkait',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'অত্যন্ত ভালো পরিষেবার ফ্যামিলি হোটেল।',
      en: 'Very good dining and response.'
    }
  },
  {
    id: 'u37',
    name: 'Subhodip Halder',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'খাবার: ৫, সার্ভিস: ৫। সত্যিই তৃপ্তিদায়ক!',
      en: 'Food: 5, Service: 5. Extremely satisfying!'
    }
  },
  {
    id: 'u38',
    name: 'Md Waraka',
    location: { bn: 'লোকাল গাইড • ৪টি রিভিউ', en: 'Local Guide • 4 reviews' },
    rating: 5,
    comment: {
      bn: 'খাবার: ৫/৫, সার্ভিস: ৫/৫। ছাদ থেকে চমৎকার দৃশ্য দেখা যায়।',
      en: 'Food: 5, Service: 5. Great rooftop experience!'
    }
  },
  {
    id: 'u39',
    name: 'Sajid Sarkar',
    location: { bn: '৫টি ছবি', en: '5 photos' },
    rating: 5,
    comment: {
      bn: 'কম বাজেটের মধ্যে অসাধারণ খাবারের স্বাদ এবং পরিবেশ।',
      en: 'Great food under budget. Price per person ₹1-200'
    }
  },
  {
    id: 'u40',
    name: 'Niladri Ghosh',
    location: { bn: 'লোকাল গাইড • ৭টি রিভিউ', en: 'Local Guide • 7 reviews' },
    rating: 5,
    comment: {
      bn: 'ডাইন-ইন করার জন্য চমৎকার জায়গা। নদীয়া জেলার রুফটপের হাওয়া অনন্য।',
      en: 'Order type: Dine in. Excellent open atmosphere to hang out.'
    }
  },
  {
    id: 'u41',
    name: 'Sumanta Karmakar',
    location: { bn: 'লোকাল গাইড • ৩টি রিভিউ', en: 'Local Guide • 3 reviews' },
    rating: 5,
    comment: {
      bn: 'খাবার ও স্টাফদের কোয়ালিটি অত্যন্ত প্রিমিয়াম। ৫/৫',
      en: 'Food: 5, Service: 5. Wonderful staff behavior.'
    }
  },
  {
    id: 'u42',
    name: 'Sahil Sahil',
    location: { bn: '৩টি রিভিউ', en: '3 reviews' },
    rating: 5,
    comment: {
      bn: 'অসাধারণ! খাবার: ৫/৫, সার্ভিস: ৫/৫',
      en: 'Osom. Food: 5, Service: 5'
    }
  },
  {
    id: 'u43',
    name: 'Somen Bala',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'খাবারের স্বাদ এবং কর্মীদের ব্যবহার দুটোই খুব প্রশংসনীয়। ৫/৫',
      en: 'Food: 5, Service: 5. Wonderful taste and super fast response.'
    }
  },
  {
    id: 'u44',
    name: 'Sahil Dafadar',
    location: { bn: 'লাঞ্চ ভিজিটর', en: 'Lunch Visitor' },
    rating: 4,
    comment: {
      bn: 'দুপুরের খাবারের জন্য ভালো ফ্যামিলি কম্বো প্ল্যাটার।',
      en: 'Meal type: Lunch. Overall good experience.'
    }
  },
  {
    id: 'u45',
    name: 'md sakir',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 3,
    comment: {
      bn: 'মোটামুটি ভালো লেগেছে। খাবার: ৩, সার্ভিস: ৪',
      en: 'Average experience. Food: 3, Service: 4'
    }
  },
  {
    id: 'u46',
    name: 'Parambrata Paul',
    location: { bn: 'লোকাল গাইড • ৩টি রিভিউ', en: 'Local Guide • 3 reviews' },
    rating: 5,
    comment: {
      bn: 'খুব সুন্দর ভাবে পরিবেশন করা হয় আর রুফটপ থেকে নদীয়া শহরের দৃশ্য মনোরম লাগে।',
      en: 'Beautiful serving style and great landscape view from the rooftop platform.'
    }
  },
  {
    id: 'u47',
    name: 'Shubhrajyoti Singha Roy',
    location: { bn: 'লোকাল গাইড • ১৭টি রিভিউ', en: 'Local Guide • 17 reviews' },
    rating: 5,
    comment: {
      bn: 'খাবার: ৫/৫, সার্ভিস: ৫/৫। সম্পূর্ণ ফ্যামিলি ফ্রেন্ডলি আড্ডা দেয়ার জায়গা।',
      en: 'Food: 5, Service: 5. Wholesome family gathering and tasty plates.'
    }
  },
  {
    id: 'u48',
    name: 'Ruku',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 4,
    comment: {
      bn: 'কর্মীদের ব্যবহার খুব আন্তরিক। খাবার: ৩, সার্ভিস: ৫',
      en: 'Staffs were super warm and energetic! Food: 3, Service: 5'
    }
  },
  {
    id: 'u49',
    name: 'AFSAN GAMING',
    location: { bn: 'গেমার গ্রুপ', en: 'Gamer Group' },
    rating: 4,
    comment: {
      bn: 'দুপুরের কষা মাংস ও নান কম্বো স্পেশাল স্বাদ লেগেছে।',
      en: 'Nice meal pattern for lunch. Recommended combo.'
    }
  },
  {
    id: 'u50',
    name: 'Sk saklin Mustaq',
    location: { bn: 'লোকাল গাইড • ২টি রিভিউ', en: 'Local Guide • 2 reviews' },
    rating: 5,
    comment: {
      bn: 'বন্ধুদের সাথে রুফটপে আউটিং ও ডিনারের জন্য অসাধারণ জায়গা।',
      en: 'Awesome place for dinner with friends. Loved the open rooftop.'
    }
  },
  {
    id: 'u51',
    name: 'Md Asif',
    location: { bn: 'লোকাল গাইড • ৬৫টি রিভিউ', en: 'Local Guide • 65 reviews' },
    rating: 5,
    comment: {
      bn: 'অর্ডার করার সাথে সাথে গরম খাবার টেবিলে সার্ভ করে। ডাইন-ইন করার সেরা অনুভূতি।',
      en: 'Extremely fast hot-food delivery to the table. Dine in at its best.'
    }
  },
  {
    id: 'u52',
    name: 'SK LALTU',
    location: { bn: 'লোকাল গাইড • ৭৭টি রিভিউ', en: 'Local Guide • 77 reviews' },
    rating: 5,
    comment: {
      bn: 'খাবারের মান খাঁটি এবং দামেও বেশ সাশ্রয়ী। ফ্যামিলি ডাইনিংয়ের জন্য পারফেক্ট।',
      en: 'Very authentic food items and affordable rates. Best for family dine in!'
    }
  },
  {
    id: 'u53',
    name: 'Raquib Raja',
    location: { bn: 'লোকাল গাইড • ১৩১টি রিভিউ', en: 'Local Guide • 131 reviews' },
    rating: 5,
    comment: {
      bn: 'চমৎকার সাজসজ্জা এবং অসাধারণ কোয়ালিটির খাবার। নদীয়া জেলার এক নম্বর রুফটপ আড্ডা জোন।',
      en: 'Excellent ambience and decoration. Premium food output and solid presentation.'
    }
  },
  {
    id: 'u54',
    name: 'Chakrabartybilash Chakrabartybilash',
    location: { bn: 'লোকাল গাইড • ১৯টি রিভিউ', en: 'Local Guide • 19 reviews' },
    rating: 5,
    comment: {
      bn: 'খাবার: ৫/৫, সার্ভিস: ৫/৫। প্রতিটি পদের খাঁটি স্বাদ দারুণ!',
      en: 'Food: 5, Service: 5. Outstanding classic taste in every item.'
    }
  },
  {
    id: 'u55',
    name: 'Riju Pakrey',
    location: { bn: 'লোকাল গাইড • ৬টি রিভিউ', en: 'Local Guide • 6 reviews' },
    rating: 2,
    comment: {
      bn: 'খাবার ভালো লাগেনি, সার্ভিসও কিছুটা ধীরগতির ছিল। খাবার: ২, সার্ভিস: ৩',
      en: 'Food quality was under average and services were a bit sluggish. Food: 2, Service: 3'
    }
  },
  {
    id: 'u56',
    name: 'Saifuddin mallik',
    location: { bn: '২টি রিভিউ', en: '2 reviews' },
    rating: 5,
    comment: {
      bn: 'রাত জাগার জন্য রুফটপ এবং চমৎকার ডাইনিং। খাবার দাবার বেশ ফ্রেশ।',
      en: 'Amazing night outlook and great dining experience. Very fresh ingredients.'
    }
  },
  {
    id: 'u57',
    name: 'Union Bank Grahak Seba Kendra',
    location: { bn: 'লোকাল গাইড • ২টি রিভিউ', en: 'Local Guide • 2 reviews' },
    rating: 5,
    comment: {
      bn: 'ভালো সার্ভিস এবং প্রধান সড়কের কাছাকাছি খুব সহজ লোকেশন।',
      en: 'Great service and very accessible location near the highway intersection.'
    }
  },
  {
    id: 'u58',
    name: 'Sk Firoj',
    location: { bn: '৩টি ছবি', en: '3 photos' },
    rating: 5,
    comment: {
      bn: 'পান্তা থেকে পোলাও এর ইউনিক আইডিয়া এবং অসাধারণ পরিবেশ। দারুণ লেগেছে!',
      en: 'The unique concept of Panta Theke Polao and great rooftop view. Highly loved!'
    }
  },
  {
    id: 'u59',
    name: 'Mahabub Sk',
    location: { bn: '১টি রিভিউ', en: '1 review' },
    rating: 5,
    comment: {
      bn: 'অসাধারণ জায়গা! বন্ধুদের সাথে হ্যাংআউট করার জন্য চিল করার মতো সেরা রুফটপ।',
      en: 'Awesome place! The best open roof-top space to chill and hang out with group files.'
    }
  }
];

// Events database
export const EVENTS_DATA: RestaurantEvent[] = [
  {
    id: 'e1',
    title: { bn: 'জন্মদিনের পার্টি ও কেক কাটিং', en: 'Birthday Parties' },
    description: {
      bn: 'আপনার প্রিয় মানুষদের জন্মদিনকে স্মরণীয় করতে চমৎকার বেলুন ডেকোরেশন, মিউজিক এবং স্পেশাল ক্যাটারিং প্যাকেজ।',
      en: 'Make your loved ones’ birthday magical with complimentary balloon decor setups, music systems, and custom customized menus.'
    },
    image: IMAGES.rooftopSeating,
    icon: 'Cake'
  },
  {
    id: 'e2',
    title: { bn: 'বিয়ে ও ম্যারেজ অ্যানিভার্সারি', en: 'Anniversary Celebrations' },
    description: {
      bn: 'রোমান্টিক ক্যান্ডেললাইট থিম, লাইট ফ্লাওয়ার সাজসজ্জা এবং প্রিয় ফ্যামিলির সাথে ছাদের মনোরম পরিবেশে আনন্দ মুহূর্ত।',
      en: 'Create beautiful stories with custom candlelight aesthetics, elegant floral structures, and delicious menus in the twilight.'
    },
    image: IMAGES.hero,
    icon: 'Heart'
  },
  {
    id: 'e3',
    title: { bn: 'পারিবারিক পুনর্মিলনী ও মেলা', en: 'Family Gatherings' },
    description: {
      bn: 'পুরো বড় পরিবারের সবার একত্রিত হয়ে খোশগল্প করার জন্য প্রশস্ত সোফা এরিয়া এবং আরামদায়ক গেট-টুগেদার টেবিল আয়োজন।',
      en: 'Spacious sofa grids and joined dining tables arranged beautifully so the whole family can chat, laugh, and dine together comfortably.'
    },
    image: IMAGES.rooftopSeating,
    icon: 'Users'
  },
  {
    id: 'e4',
    title: { bn: 'গ্রুপ গেট-টুগেদার ও পার্টি', en: 'Group Events' },
    description: {
      bn: 'স্কুল-কলেজ রিইউনিয়ন, অফিস মিটিং বা বন্ধুদের গেট-টুগেদার অনুষ্ঠানের জন্য বিশেষ ছাড় সহ লাঞ্চ অথবা ডিনার বুফে।',
      en: 'Perfect matching spot for school-college reunions, corporate meetups, or friendship bashes with great discounted group menus.'
    },
    image: IMAGES.bengaliSpecial,
    icon: 'PartyPopper'
  }
];
