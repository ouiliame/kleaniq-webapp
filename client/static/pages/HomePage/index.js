import React, { Component } from 'react';
import { Navigation } from 'components';
import { Container, Segment, Header} from 'semantic-ui-react';
import './style.css';

import Trianglify from 'trianglify';


// TODO CHANGE TRIANGES ON RESIZE
export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pattern: null
    }
  }

  componentDidMount() {
    this.updateTriangles();
  }

  componentWillUnmount() {
  }

  updateTriangles() {
    this.state.pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight,
      cell_size: 167,
      x_colors: 'YlGnBu'
    });

    $("#kiq-site-triangles").append(this.state.pattern.canvas());
  }

  render() {
    return (
      <div id="kiq-site">
        <div id="kiq-site-header">
          <Navigation/>
        </div>
        <div id="kiq-site-content">
          <div id="kiq-site-triangles"></div>
          <Container id="kiq-site-container">
          </Container>
        </div>
        <div id="kiq-site-footer" >
          &copy; UrbanX Renewables Group 2016
        </div>
      </div>
    );
  }
}
