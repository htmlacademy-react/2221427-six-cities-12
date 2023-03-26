import { useState } from 'react';
import CityCard from '../city-card/city-card';
import { Offers } from '../../types/offers';


type OffersListType = {
  offers: Offers;
};

function OffersList({ offers }: OffersListType): JSX.Element {
  const [activeId, setActiveId] = useState('0');
  return (
    <div className="cities__places-list places__list tabs__content" key={activeId}>
      {offers.map((offer) => (
        <CityCard
          key={`${offer.id}`}
          offer={offer}
          onMouseOverHandler={() => setActiveId(offer.id)}
        />
      ))}
    </div>
  );
}

export default OffersList;
