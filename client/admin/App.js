import React, { PropTypes } from 'react'
import Trianglify from 'trianglify';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.trianglify = Trianglify;
    this.state = {
      pattern: null
    }
  }

  componentDidMount() {
    $(window).resize(() => this.updateTriangles());
    this.updateTriangles();

    if (!this.props.loggedIn) {
      hashHistory.replace('login');
    }
  }

  updateTriangles() {
    this.pattern = this.trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 167,
        x_colors: ['#a1a1a1', '#000000', '#a1a1a1']
    });

    this.pattern.canvas($("#kiq-triangles")[0]);
  }

  render () {
    return (
      <div id="kiq-admin">
        <canvas id="kiq-triangles"></canvas>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.isAuthenticated
});

export default connect(mapStateToProps)(App);
