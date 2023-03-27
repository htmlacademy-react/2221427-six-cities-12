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

    roomFeatures: {
      bedroomsNumber: 3,
      aultsMax: 4,
      roomFilling: ['Wi-Fi', 'Washing machine', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    },
    host: {
      hostAvatar: '../img/avatar-angelina.svg',
      hostName: 'Angelina',
      hostStatus: 'Pro',
      descriptionTextFirst: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      descriptionTextSecond: 'Trololo! This is REACCTTTt!!!',
    },

    reviews: {
      reviewsAmount: 1,
      userAvatar: '../img/avatar-max.svg',
      userName: 'Vasiliy Terkin',
      userText: 'Nice apattments! Recommended.',
      postDate: 'Septemer 2022',
    },
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

    roomFeatures: {
      bedroomsNumber: 3,
      aultsMax: 4,
      roomFilling: ['Wi-Fi', 'Washing machine', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    },
    host: {
      hostAvatar: '../img/avatar-angelina.svg',
      hostName: 'Angelina',
      hostStatus: 'Pro',
      descriptionTextFirst: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      descriptionTextSecond: 'Trololo! This is REACCTTTt!!!',
    },

    reviews: {
      reviewsAmount: 1,
      userAvatar: '../img/avatar-max.svg',
      userName: 'Vasiliy Terkin',
      userText: 'Nice apattments! Recommended.',
      postDate: 'Septemer 2022',
    },
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

    roomFeatures: {
      bedroomsNumber: 3,
      aultsMax: 4,
      roomFilling: ['Wi-Fi', 'Washing machine', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    },
    host: {
      hostAvatar: '../img/avatar-angelina.svg',
      hostName: 'Angelina',
      hostStatus: 'Pro',
      descriptionTextFirst: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      descriptionTextSecond: 'Trololo! This is REACCTTTt!!!',
    },

    reviews: {
      reviewsAmount: 1,
      userAvatar: '../img/avatar-max.svg',
      userName: 'Vasiliy Terkin',
      userText: 'Nice apattments! Recommended.',
      postDate: 'Septemer 2022',
    },
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

    roomFeatures: {
      bedroomsNumber: 3,
      aultsMax: 4,
      roomFilling: ['Wi-Fi', 'Washing machine', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    },
    host: {
      hostAvatar: '../img/avatar-angelina.svg',
      hostName: 'Angelina',
      hostStatus: 'Pro',
      descriptionTextFirst: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      descriptionTextSecond: 'Trololo! This is REACCTTTt!!!',
    },

    reviews: {
      reviewsAmount: 1,
      userAvatar: '../img/avatar-max.svg',
      userName: 'Vasiliy Terkin',
      userText: 'Nice apattments! Recommended.',
      postDate: 'Septemer 2022',
    },
  },
];
