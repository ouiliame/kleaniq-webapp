import React from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import NavButton from 'components/NavButton';
import NavMenu from 'components/NavMenu';
import { RingLoader } from 'halogen';
import './App.css';

// admin pages have a menu !


@autobind
class App extends React.Component {

  render() {
    return (
      <div id="admin-wrapper">
        <NavButton/>
        <NavMenu pageWrapId="admin-app" outerContainerId="admin-wrapper"/>
        <div id="admin-loading">
          <RingLoader color='#2b2b2b' size="200px"/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
