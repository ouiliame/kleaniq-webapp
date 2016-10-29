import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { logout } from './actions/UserActions';

import App from './App';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LoginPage/LogoutPage';
import MapPage from './pages/MapPage';

@autobind
class AdminRouter extends React.Component {

  logout(nextState, replace) {
    this.props.logout();
    replace('/login');
  }

  requireLogin(nextState, replace) {
    if (!this.props.loggedIn) {
      replace('/login');
    }
  }

  checkLogin(nextState, replace) {
    if (this.props.loggedIn) {
      replace('/');
    }
  }

  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={MapPage} onEnter={this.requireLogin} />
          <Route path="login" component={LoginPage} onEnter={this.checkLogin}/>
          <Route path="logout" component={LogoutPage} onEnter={this.logout}/>
        </Route>
      </Router>
    )
  }
};

const mapStateToProps = (state) => ({
  loggedIn: state.user.get('isAuthenticated')
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter);
