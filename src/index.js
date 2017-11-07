import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import reducer from './reducers';
import { enhanceStore, getInitialState } from './store';
import App from './containers/App';

render(
  <Provider store={enhanceStore(reducer, getInitialState({}))}>
    <App />
  </Provider>,
  document.getElementById('react-container')
);
