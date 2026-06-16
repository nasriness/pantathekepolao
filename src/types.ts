export type Language = 'bn' | 'en';

export interface BilingualText {
  bn: string;
  en: string;
}

export interface MenuItem {
  id: string;
  name: BilingualText;
  description: BilingualText;
  price: number;
  category: 'bengali-special' | 'tandoor' | 'chinese' | 'desserts' | 'beverages';
  image?: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
}

export interface GalleryItem {
  id: string;
  title: BilingualText;
  category: 'ambience' | 'food' | 'decorations' | 'family';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: BilingualText;
  rating: number;
  comment: BilingualText;
}

export interface RestaurantEvent {
  id: string;
  title: BilingualText;
  description: BilingualText;
  image: string;
  icon: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: 'rooftop' | 'main-hall' | 'any';
  occasion?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}
