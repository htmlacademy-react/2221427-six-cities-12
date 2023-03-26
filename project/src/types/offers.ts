export type Offer = {

    id: string;
    image: string;
    isPremium?: boolean;
    price: number;
    description: string;
    rating: string;
    ratingValue: number;
    type: string;
    bedroomsNumber: number;
    aultsMax: number;
    roomFillingInfo?: RoomFillingInfo;
    host?: Host;
    reviews?: Reviews;
  };

  export type Offers = Offer [];

  export type RoomFillingInfo = {
    roomFilling: string[];
  };

  export type Host = {

    hostAvatar: string;
    hostName: string
    hostStatus: string;
    descriptionText: string;
  };
  export type Reviews = {

      reviewsAmount: number;
      userAvatar: string;
      userName: string;
      userText: string;
      postDate: string;
  };
