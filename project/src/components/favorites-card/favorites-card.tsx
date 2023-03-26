import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';

type FavoritesCardProps = {
  offers: Offer;
}

function FavoritesCard ({offers}: FavoritesCardProps) {
  return(
    <article className="favorites__card place-card">
      {offers.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/room/${offers.id}`}>
          <img
            className="place-card__image"
            src={offers.image}
            width="150"
            height="110"
            alt="place"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
            <span className="visually-hidden">{offers.ratingValue}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/room/${offers.id}`}>{offers.description}</Link>
        </h2>
        <p className="place-card__type">{offers.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
