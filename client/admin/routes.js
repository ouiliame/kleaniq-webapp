import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import triangles from 'triangles';
import LoginPage from 'pages/LoginPage';
import LogoutPage from 'pages/LoginPage/LogoutPage';
import App from './App';

// APPS
import AdminMap from 'apps/AdminMap';

const loggedIn = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'loggedIn'
});

const routes = (
  <Route path="/">
    <IndexRedirect to="app" />
    <Route path="login" component={triangles(LoginPage)} />
    <Route path="logout" component={LogoutPage} />
    <Route path="app" component={loggedIn(App)}>
      <IndexRedirect to="AdminMap" />
      <Route path="AdminMap" component={AdminMap}/>
    </Route>
  </Route>
);

export default routes;
