/* eslint-disable no-underscore-dangle */
// Startup point for client-side application

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from './containers/App'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
)

ReactDOM.hydrate(
  <Provider store={store}>
      {routing}
  </Provider>,
  document.querySelector('#root')
);
