import { Offers } from '../types/offers';

export const offers: Offers = [
  {
    id: '1',
    image: '../img/apartment-01.jpg',
    isPremium: true,
    price: 300,
    description: 'Beautiful & luxurious studio at great location',
    rating: '80%',
    ratingValue: 4.8,
    type: 'Apartment',
  },

  {
    id: '2',
    image: '../img/apartment-02.jpg',
    isPremium: false,
    price: 220,
    description: 'Beautiful & luxurious studio at great location',
    rating: '50%',
    ratingValue: 2.5,
    type: 'Private Room',
  },

  {
    id: '3',
    image: '../img/apartment-03.jpg',
    isPremium: true ,
    price: 999,
    description: 'Luxurious place at great location',
    rating: '100%',
    ratingValue: 5,
    type: 'Penthouse',
  },

  {
    id: '4',
    image: '../img/room.jpg',
    isPremium: false,
    price: 180,
    description: 'Beautiful & luxurious studio at great location',
    rating: '80%',
    ratingValue: 4.8,
    type: 'Apartment',
  },
];
