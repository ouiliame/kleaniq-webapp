import React, { Component } from 'react';
import { Navigation } from 'components';
import { Container, Segment, Header} from 'semantic-ui-react';
import './style.css';

import Trianglify from 'trianglify';


// TODO CHANGE TRIANGES ON RESIZE
export default class HomePage extends Component {

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
  }

  updateTriangles() {

    this.pattern = this.trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 167,
        x_colors: 'YlGnBu'
    });

    this.pattern.canvas($("#kiq-site-triangles")[0]);
  }

  render() {
    return (
      <div id="kiq-site">
        <div id="kiq-site-header">
          <Navigation/>
        </div>
        <div id="kiq-site-content">
          <canvas id="kiq-site-triangles"></canvas>
          <Container id="kiq-site-container">
          </Container>
        </div>
        <div id="kiq-site-footer">
          &copy; Urban<a style={{color: 'black'}} href="admin/">X</a> Renewables Group 2016
        </div>
      </div>
    );
  }
}
