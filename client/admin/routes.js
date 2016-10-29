import React from 'react';
import { Router, Route, Link } from 'react-router';

import App from './App';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';

const Routes = (
  <Route path="/" component={App}>
    <Route path="login" component={LoginPage} />
    <Route path="map" component={MapPage} />
  </Route>
);

export default Routes;
