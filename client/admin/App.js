import React from 'react';
import { connect } from 'react-redux';

import { Application } from 'state/application/actions';

import NavButton from 'components/NavButton';
import NavMenu from 'components/NavMenu';
import { RingLoader } from 'halogen';
import './App.css';

// admin pages have a menu !
class App extends React.Component {

  render() {
    return (
      <div id="admin-wrapper">
        <NavButton/>
        <NavMenu pageWrapId="admin-app" outerContainerId="admin-wrapper"/>
        <div id="admin-loading">
          <RingLoader color='#2b2b2b' size="120px"/>
        </div>
        <div id="admin-app">
          { this.props.children }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  setAppName: (name) => dispatch(Application.setName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
