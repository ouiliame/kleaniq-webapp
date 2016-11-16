import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

import data from '../data.json';

class MapComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      center: [-118.032844, 33.979179],
      zoom: [9]
    }
  }

  render () {

    return (
      <ReactMapboxGl
        ref='map'
        style='mapbox://styles/wchen298/citzb13wo00g72io6hbwyxbv6'
        accessToken='pk.eyJ1Ijoid2NoZW4yOTgiLCJhIjoiY2ltbmg0amkxMDBqZHRwbHZqYnAyZzZ4YSJ9.9XPZlD9SVjOEAOmYTfczGg'
        containerStyle={containerStyle}
        center={this.state.center}
        zoom={this.state.zoom}
        attributionPosition='bottom-left'>

        

      </ReactMapboxGl>
    );
  }
}

export default MapComponent;
