import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = (props) => {
  let {cities} = props;
  const {currentCity, maxCitiesCount} = props;
  cities.slice(0, maxCitiesCount - 1);
  const handleCityLinkClick = (e, city) => {
    e.preventDefault();
    props.onCityChange(city);
  };
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) => (
            <li key={`${city}-${index}`} className="locations__item">
              <a
                className={`locations__item-link ${city === currentCity ? `tabs__item--active` : `tabs__item`}`}
                href="#"
                onClick={(e) => handleCityLinkClick(e, city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  maxCitiesCount: PropTypes.number.isRequired
};

export default CitiesList;