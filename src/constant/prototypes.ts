import PropTypes from 'prop-types';

export const PROP_TYPES_STYLE = PropTypes.oneOfType([
  PropTypes.instanceOf(Object),
  PropTypes.instanceOf(Array),
]);
