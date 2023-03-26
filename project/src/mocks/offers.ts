import { Offers } from "../types/offers";

export const offers: Offers = [
{
  id: '1',
  image: '../img/studio-01.jpg',
  isPremium: true,
  price: 300,
  description: 'Beautiful & luxurious studio at great location',
  rating: '80%',
  ratingValue: 4.8,
  type: 'Apartment',
  bedroomsNumber: 3,
  aultsMax: 4,
  roomFillingInfo: {
    roomFilling: ['Wi-Fi', 'Washing machine', 'Heating', 'Coffee machine',  'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
  },
  host: {
    hostAvatar: '../img/avatar-angelina.svg',
    hostName: 'Angelina',
    hostStatus: 'Pro',
    descriptionText: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  },
  reviews:  {
    reviewsAmount: 1,
    userAvatar: '../img/avatar-max.svg',
    userName: 'Max',
    userText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    postDate: 'April 2019',
  },
},


]
