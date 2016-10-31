import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import routes from './routes';
import reducers from './state';

import '../static/fonts/fonts.css'; // from static
import 'kleaniq-semantic-ui-css'; // semantic ui css + theme

const baseHistory = hashHistory;

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(baseHistory))
  )
);

const history = syncHistoryWithStore(baseHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>
  , document.getElementById('root'));
