import React from 'react';
import PropTypes from 'prop-types';

class LocationDetails extends React.Component {
  render() {
    return (<h1 className="location">{`${this.props.city}, ${this.props.country}`}</h1>);
  }
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
