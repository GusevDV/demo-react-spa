import PropTypes from 'prop-types';
import {createRatingPropType} from './rating-types.js';

export const reviewType = PropTypes.shape({
  user: PropTypes.shape({
    id: PropTypes.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  rating: createRatingPropType(true, 0, 5),
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
});

