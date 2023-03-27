export type Offer = {

    id: string;
    image: string;
    isPremium?: boolean;
    price: number;
    description: string;
    rating: string;
    ratingValue?: number;
    type: string;
    roomFeatures?: RoomFeatures;
    host?: Host;
    reviews?: Reviews;
  };

export type Offers = Offer[];

export type RoomFeatures = {

  bedroomsNumber: number;
  aultsMax: number;
  roomFilling: string[];
};

export type Host = {

  hostAvatar: string;
  hostName: string;
  hostStatus: string;
  descriptionTextFirst: string;
  descriptionTextSecond: string;
};

export type Reviews = {
  reviewsAmount: number;
  userAvatar: string;
  userName: string;
  userText: string;
  postDate: string;
};
