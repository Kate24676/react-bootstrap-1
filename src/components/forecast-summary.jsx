import React from 'react';
import PropTypes from 'prop-types';

class ForecastSummary extends React.Component {
  render() {
    return <h1 className="forecast"{`${this.props.date}, ${this.props.temperature}, ${this.props.description}, ${this.props.icon}`}/>;
      <button onClick={() => props.onSelect(props.date)}>More details!</button>;
  }
}


ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes..isRequired
};

export default ForecastSummary;
