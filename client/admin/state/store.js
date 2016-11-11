// each subdirectory's index is reducer
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { mouseStoreEnhancer } from 'redux-mouse';

import rootReducer from './reducer';

if (module.hot) {
  module.hot.accept('./reducer', () => {
    const nextRootReducer = require('./reducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    mouseStoreEnhancer,
    applyMiddleware(thunk, routerMiddleware(hashHistory))
  )
);

export default store;
