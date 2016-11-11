import React from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

import Immutable from 'immutable';
import MapGL from 'react-map-gl';
import { onChangeViewport } from 'redux-map-gl';

import HeatmapOverlay from 'react-map-gl-heatmap-overlay';

import { Segment, Header, Menu, Icon } from 'semantic-ui-react';
import { Motion, spring } from 'react-motion';
import $ from 'jquery';
import { AppInfo } from 'state/app/actions';
import './style.css';

@autobind
class AdminMap extends React.Component {
  constructor(props) {
    super(props);
    this.props.setAppName();
    this.state = {
      hovering: false
    };
    this.restaurants = require('./data.json').restaurants;
    this.heatmapOptions = {
      intensityAccessor: (location) => (1/100) * Math.log(Number(location.container_size)),
      sizeAccessor: (location) => 15 * Math.log(location.container_size),
      // If not specified, defaults to Viridis.
      gradientColors: Immutable.List(['#123294', '#1c9ee7',
                                      '#ffd80a', '#f1950b', '#d65312'])
    };
  }

  render () {
    if (!this.props.appState.viewport) {
      return null;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    const viewport = this.props.appState.viewport.toJS();
    const hovering = $(window).width() - this.props.mouseX < 10 || $('#action-menu:hover').length > 0;
    const actionsStyle = {
      marginTop: 10,
      marginBottom: 10,
      position: 'relative',
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
        <MapGL
          {...viewport}
          mapboxApiAccessToken='pk.eyJ1Ijoid2NoZW4yOTgiLCJhIjoiY2ltbmg0amkxMDBqZHRwbHZqYnAyZzZ4YSJ9.9XPZlD9SVjOEAOmYTfczGg'
          mapStyle='mapbox://styles/wchen298/citzb13wo00g72io6hbwyxbv6'
          onChangeViewport={this.props.onChangeViewport}
          width={width}
          height={height}
          >

          <HeatmapOverlay
            {...viewport}
            locations={this.restaurants}
            width={width}
            height={height}
            {...this.heatmapOptions } />
        </MapGL>

        <div id="map-overlay" className='pass-through'>
          <div className='pass-through' style={{ height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div className='pass-through' style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
              <Motion style={ hovering ? actionsVisible : actionsHidden }>
                {
                  (style) =>
                  <div id="action-menu" className='hit' style={{...actionsStyle, ...style}}>
                    <Header as='h3' attached='top'>
                      Layers &amp; Options
                    </Header>
                    <Segment attached>
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
  appState: state.appState,
  mouseX: state.mouse.x
});

const mapDispatchToProps = (dispatch) => ({
  onChangeViewport: (vp) => dispatch(onChangeViewport(vp)),
  setAppName: () => dispatch(AppInfo.setName('AdminMap'))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminMap);
