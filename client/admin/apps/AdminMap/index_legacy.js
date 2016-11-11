import React from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { Segment, Menu, Icon, Header } from 'semantic-ui-react';
import { Motion, spring } from 'react-motion';
import $ from 'jquery';
import { AppState } from 'state/app/actions';
import data from './data.json';
import './style.css';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

@autobind
class AdminMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      center: [-117.876434, 33.876615],
      zoom: [9],
      filters: {
        restaurants: true,
        drivers: false
      },
      hovering: false
    };
  }

  toggleVisible(filter) {
    const initial = this.state.filters[filter];
    this.setState({
      filters: {
        ...this.state.filters,
        [filter]: !initial
      }
    });
  }

  componentDidMount() {
    this.props.setAppName();
  }

  styleLoad(map) {
    this.map = map;
  }

  render () {

    const hovering = $(window).width() - this.props.mouseX < 10 || $('#action-menu:hover').length > 0;

    const actionsStyle = {
      flex: 1,
      marginTop: 10,
      marginBottom: 10,
      position: 'relative',
      backgroundColor: 'white',
      zIndex: 150,
      width: 300
    };

    const actionsVisible = {
      right: spring(10)
    };

    const actionsHidden = {
      right: spring(-310)
    };

    return (
      <div id="map-wrapper">
        <ReactMapboxGl
          ref='map'
          style='mapbox://styles/wchen298/citzb13wo00g72io6hbwyxbv6'
          accessToken='pk.eyJ1Ijoid2NoZW4yOTgiLCJhIjoiY2ltbmg0amkxMDBqZHRwbHZqYnAyZzZ4YSJ9.9XPZlD9SVjOEAOmYTfczGg'
          containerStyle={containerStyle}
          center={this.state.center}
          zoom={this.state.zoom}
          attributionPosition='bottom-left'
          onStyleLoad={this.styleLoad}
          >

          <Layer
            type="circle"
            paint={{
              'circle-radius': 3,
              'circle-color': '#b1b1b1',
              'circle-opacity': .75 }}>
            {
              data.restaurants.filter((r) => r.container_size === '').map((r) =>
                <Feature
                  coordinates={[r.longitude, r.latitude]}
                  onHover={() => $('html, body').css('cursor', 'pointer')}
                  onEndHover={() => $('html, body').css('cursor', 'default')}
                  onClick={() => this.map.flyTo({center: [r.longitude, r.latitude], zoom: 13})} />)
            }
          </Layer>

          <Layer
            type="circle"
            paint={{
              'circle-radius': 4,
              'circle-color': '#00ff57',
              'circle-opacity': 1 }}>
            {
              data.restaurants.filter((r) => r.container_size < 50).map((r) =>
                <Feature
                  coordinates={[r.longitude, r.latitude]}
                  onHover={() => $('html, body').css('cursor', 'pointer')}
                  onEndHover={() => $('html, body').css('cursor', 'default')}
                  onClick={() => this.map.flyTo({center: [r.longitude, r.latitude], zoom: 13})} />)
            }
          </Layer>

          <Layer
            type="circle"
            paint={{
              'circle-radius': 5,
              'circle-color': '#f6ff42',
              'circle-opacity': 1 }}>
            {
              data.restaurants.filter((r) => r.container_size >= 50 && r.container_size < 100).map((r) =>
                <Feature
                  coordinates={[r.longitude, r.latitude]}
                  onHover={() => $('html, body').css('cursor', 'pointer')}
                  onEndHover={() => $('html, body').css('cursor', 'default')}
                  onClick={() => this.map.flyTo({center: [r.longitude, r.latitude], zoom: 13})} />)
            }
          </Layer>

          <Layer
            type="circle"
            paint={{
              'circle-radius': 7,
              'circle-color': '#ff9742',
              'circle-opacity': 1 }}>
            {
              data.restaurants.filter((r) => r.container_size >= 100 && r.container_size < 150).map((r) =>
                <Feature
                  coordinates={[r.longitude, r.latitude]}
                  onHover={() => $('html, body').css('cursor', 'pointer')}
                  onEndHover={() => $('html, body').css('cursor', 'default')}
                  onClick={() => this.map.flyTo({center: [r.longitude, r.latitude], zoom: 13})} />)
            }
          </Layer>

          <Layer
            type="circle"
            paint={{
              'circle-radius': 8.5,
              'circle-color': '#ff402d',
              'circle-opacity': 1 }}>
            {
              data.restaurants.filter((r) => r.container_size >= 150 && r.container_size < 200).map((r) =>
                <Feature
                  coordinates={[r.longitude, r.latitude]}
                  onHover={() => $('html, body').css('cursor', 'pointer')}
                  onEndHover={() => $('html, body').css('cursor', 'default')}
                  onClick={() => this.map.flyTo({center: [r.longitude, r.latitude], zoom: 14.5})} />)
            }
          </Layer>

        </ReactMapboxGl>
        <div id="map-overlay" className='pass-through'>
          <div className='pass-through' style={{ height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div className='pass-through' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <Motion style={ hovering ? actionsVisible : actionsHidden }>
                {
                  (style) =>
                  <div id="action-menu" className='hit' style={{...actionsStyle, ...style}}>
                    <Segment basic>
                      <Menu compact secondary icon>
                        <Menu.Item>
                          <Icon name='unhide' />
                        </Menu.Item>

                        <Menu.Item>
                          <Icon name='food' />
                        </Menu.Item>

                        <Menu.Item>
                          <Icon name='shipping' />
                        </Menu.Item>

                        <Menu.Item>
                          <Icon name='wizard' />
                        </Menu.Item>
                      </Menu>


                    </Segment>
                  </div>
                }
              </Motion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mouseX: state.mouse.x
});

const mapDispatchToProps = (dispatch) => ({
  setAppName: () => dispatch(AppState.setName('AdminMap')),
  setParam: (key, value) => dispatch(AppState.setParam(key, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminMap);
