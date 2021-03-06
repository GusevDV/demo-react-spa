import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import {offerType} from '../../types/offers-types.js';
import {PlaceCardType} from '../../const.js';

const PlaceCardListNearby = (props) => {
  const {nearbyOffers} = props;
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearbyOffers.map((offer)=> (
            <PlaceCard
              key={offer.id}
              offer={offer}
              placeCardType={PlaceCardType.NEAR}
              onFavoriteClick={props.onFavoriteClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

PlaceCardListNearby.propTypes = {
  nearbyOffers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  onFavoriteClick: PropTypes.func.isRequired
};

export default PlaceCardListNearby;
