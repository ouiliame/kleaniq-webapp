// ENABLE HMR
if (module.hot) {
  module.hot.accept();
}

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import HomePage from './pages/HomePage';

const history = browserHistory;

class StaticSiteRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={HomePage}></Route>
      </Router>
    );
  }
}

render(<StaticSiteRouter/>, document.getElementById('root'));
