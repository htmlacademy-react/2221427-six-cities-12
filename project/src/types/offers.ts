export type Offer = {

    id: string;
    image: string;
    isPremium?: boolean;
    price: number;
    description: string;
    rating: string;
    ratingValue?: number;
    type: string;
  };

  export type Offers = Offer[];
