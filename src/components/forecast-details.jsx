import React from 'react';
import PropTypes from 'prop-types';

const ForecastDetails = props => (
  <div className="forecast-details"> {
      props.forecasts.map(forecast => (
        <ForecastDetails
          key={forecast.date}
          date={forecast.date}
          wind={forecast.wind}
          humidity={forecast.humidity}
          temperature={forecast.temperature.max}
        />
      ))
  }
  </div>
);

LocationDetails.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
};

export default ForecastDetails;
