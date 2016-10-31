import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import App from './App';
import LoginPage from 'pages/LoginPage';
import LogoutPage from 'pages/LoginPage/LogoutPage';
import AdminPage from 'pages/AdminPage';
import MapPage from 'pages/MapPage';

const loggedIn = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'loggedIn'
});

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="admin" />
    <Route path="login" component={LoginPage} />
    <Route path="logout" component={LogoutPage} />
    <Route path="admin" component={loggedIn(AdminPage)}>
      <Route path="map" component={MapPage}/>
    </Route>
  </Route>
);

export default routes;
