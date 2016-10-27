import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <b>3</b>
    )
  }
}

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}></Route>
        </Router>
      </Provider>
    );
  }
}

render(<AppContainer/>, document.getElementById('root'));
