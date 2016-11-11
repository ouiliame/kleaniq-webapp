import React from 'react';
import $ from 'jquery';
import Trianglify from 'trianglify';

export default function triangles(Component,
                          trianglesID='kiq-triangles',
                          colors=['#a1a1a1', '#000000', '#a1a1a1']) {
  return class WithTriangles extends React.Component {
    constructor(props) {
      super(props);
      this.trianglify = Trianglify;
      this.state = {
        pattern: null
      };


      const trianglesStyle = {
        position: 'absolute',
        zIndex: -100,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      };

      this.triangles = <canvas id={trianglesID} style={trianglesStyle}/>;

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
        x_colors: colors
      });

      this.pattern.canvas($('#'+trianglesID)[0]);
    }

    render() {
      return <Component {...this.props} triangles={this.triangles} />;
    }
  };
}
