import React, { PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl } from 'react-mapbox-gl';
import { Segment, Header } from 'semantic-ui-react';
import './style.css';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

@autobind
class MapPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      center: [-117.876434, 33.876615],
      zoom: [9]
    }
  }

  render () {
    return (
      <div id="map-wrapper">
        <ReactMapboxGl
          style='mapbox://styles/wchen298/citzb13wo00g72io6hbwyxbv6'
          accessToken='pk.eyJ1Ijoid2NoZW4yOTgiLCJhIjoiY2ltbmg0amkxMDBqZHRwbHZqYnAyZzZ4YSJ9.9XPZlD9SVjOEAOmYTfczGg'
          containerStyle={containerStyle}
          center={this.state.center}
          zoom={this.state.zoom}
          interactive={false}>
          <ZoomControl />
        </ReactMapboxGl>
        <div id="map-overlay">
          <Segment padded='very'>
            <Header as='h1'>KleanIQ Admin Under Maintenance</Header>
            <p>Please bear with us as we make some changes!</p>
            <a href="#/logout">Click here to log out</a>
          </Segment>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
