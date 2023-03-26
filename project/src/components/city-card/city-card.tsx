import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';


type CityCardProps = {
  offer: Offer;
  onMouseOverHandler: () => void;
};

function CityCard({offer, onMouseOverHandler}: CityCardProps): JSX.Element {
  const {id, image, isPremium, price, description, rating, ratingValue, type} = offer;
  return (
    <article id={id} className="cities__card place-card" onMouseOver={onMouseOverHandler}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{ratingValue}</span>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CityCard;
