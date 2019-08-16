import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { location, forecasts } from './data/forecast.json';

console.log(JSON.stringify(forecasts));
render(<App location={location} forecasts={forecasts} />, document.getElementById('root'));
