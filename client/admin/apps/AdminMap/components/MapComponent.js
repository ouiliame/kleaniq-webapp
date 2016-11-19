import React from 'react';
import ReactMapboxGl, { Feature, Layer, ScaleControl } from 'react-mapbox-gl';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

@autobind
@observer
class MapComponent extends React.Component {

  render () {
    const { store } = this.props;

    return (
      <ReactMapboxGl
        ref='map'
        style='mapbox://styles/wchen298/citzb13wo00g72io6hbwyxbv6'
        accessToken='pk.eyJ1Ijoid2NoZW4yOTgiLCJhIjoiY2ltbmg0amkxMDBqZHRwbHZqYnAyZzZ4YSJ9.9XPZlD9SVjOEAOmYTfczGg'
        containerStyle={containerStyle}
        maxBounds={ [[-122.486572, 31.872310], [-108.115967, 36.714983]] }
        onMoveEnd={store.onMoveEnd}
        onStyleLoad={store.onStyleLoad}
        {...store.mapState}
        attributionPosition='bottom-left'>

      { store.overlay.restaurantsVisible &&
        <Layer type='circle'
          paint={{
            'circle-radius': {
              'property': 'container_size',
              'base': 1.15,
              'stops': [

                [{zoom: 0, value: 0}, 0.1],


                [{zoom: 0, value: 500}, 5],


                [{zoom: 20, value: 0}, 12],

                [{zoom: 20, value: 500}, 15],
              ]
            },
            'circle-color': {
              'property': 'container_size',
              'stops': [
                [0,   '#13b829'],
                [100, '#edc51b'],
                [250, '#e78a1d'],
                [500, '#c31a10']
              ]
            }
          }}>
          { store.restaurants.map((r, i) => <Feature properties={{container_size: r.container_size}}
              key={i} coordinates={[r.longitude, r.latitude]} />) }
        </Layer>
      }

      <ScaleControl measurement='mi'/>

      </ReactMapboxGl>
    );
  }
}

export default MapComponent;
