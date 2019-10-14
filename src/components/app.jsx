import React from 'react';
import LocationDetails from './location-details';
import PropTypes from 'prop-types';
import ForecastSummaries from './forecast-summaries';
import '../styles/app';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.forecast[0].date,
    };
  }
  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
    ForecastSummaries {
    this.handleForecastSelect({
      selectedForecast: onForecastSelect,
    })
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  
  }
  render() {
    const selectedForecast = this.props.forecasts.find(forecast => forecast.date === this.state.selectedDate);
  return (<div><LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts}
    onForecastSelect={this.props.handleForecastSelect} />
    <ForecastDetails forecasts={props.forecasts[0]} />
  </div>;
  )}
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
  
};


// The above utilises an implicit return, which is a feature of arrow-functions.
// It is the same as this:
// const App = () => {
//  return <h1>Hello World</h1>;
// }
// or this:
// function App() {
//   return <h1>Hello World</h1>;
// }

export default App;
