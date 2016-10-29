import React, { Component } from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import AdminRouter from './AdminRouter';
import reducers from './reducers';

import '../static/fonts/fonts.css'; // from static
import 'kleaniq-semantic-ui-css';
import 'kleaniq-semantic-ui-js';

// ENABLE HMR
if (module.hot) {
  module.hot.accept();
}

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
});


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);



const history = syncHistoryWithStore(hashHistory, store);

class AppContainer extends Component {

  render() {
    return (
      <Provider store={store}>
          <AdminRouter history={history} />
      </Provider>
    );
  }
}

render(<AppContainer/>, document.getElementById('root'));
