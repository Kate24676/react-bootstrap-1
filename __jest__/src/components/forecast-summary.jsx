import React from 'react';
import PropTypes from 'prop-types';

class ForecastSummary extends React.Component {
  render() {
    return <h1 className="forecast">{`${this.props.date}, ${this.props.temperature}, ${this.props.description}, ${this.props.icon}`}</h1>;
  }
}

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
