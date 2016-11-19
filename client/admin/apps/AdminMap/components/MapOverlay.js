import React from 'react';
import { observer } from 'mobx-react';
import autobind from 'autobind-decorator';

import { Segment, Popup, Header, Label, Menu, Icon, Radio, Search } from 'semantic-ui-react';
import { Motion, spring } from 'react-motion';

import $ from 'jquery';

@autobind
@observer
class MapOverlay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      results: null,
      value: ''
    };
  }

  resetSearch() {
    this.setState({ loading: false, results: null, value: '' });
  }

  handleChange(e, result) {
    this.props.store.changeViewport({
      center: result['data-coordinates'],
      zoom: [13.5]
    });

  }

  handleSearchChange(e, value) {
    const { store } = this.props;
    this.setState({ loading: true, value });

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.state.value.length < 1) return this.resetSearch();
      const searchResults = store.fuse.search(value).map((r) => ({
        title: r.name,
        description: r.formattedAddress,
        price: r.container_size,
        'data-coordinates': [r.longitude, r.latitude]
      }));

      let results;
      if (searchResults.length > 0) {
        results = {
          restaurant: {
            name: 'Restaurant',
            results: searchResults.slice(0, 5)
          }
        };
      } else {
        results = [];
      }

      this.setState({
        loading: false,
        results
      });
    }, 300);
  }

  render () {

    const { store } = this.props;
    const hovering = $(window).width() - this.props.mouseX < 15 || $('#action-menu:hover').length > 0;
    const actionsStyle = {
      flex: 1,
      marginTop: 10,
      marginBottom: 10,
      position: 'relative',
      zIndex: 150,
      width: 350
    };

    const actionsVisible = {
      right: spring(10)
    };

    const actionsHidden = {
      right: spring(-360)
    };

    return (
      <div id='map-overlay' className='pass-through'>
      <div className='pass-through' style={{ height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <div className='pass-through' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Motion style={ (hovering || store.overlay.locked) ? actionsVisible : actionsHidden }>

      {
        (style) =>
        <div id="action-menu" className='hit' style={{...actionsStyle, ...style}}>
          <Segment>
            <Popup
                inverted
                trigger={<Label
                  as='a'
                  corner='right'
                  icon={store.overlay.locked ? 'lock' : 'unlock alternate'}
                  onClick={store.toggleLock} />}
                content={store.overlay.locked ? 'Unlock sidebar' : 'Lock sidebar'}
            />

            <Menu compact secondary icon>
              <Menu.Item active={store.overlay.menu === 'default'} name='default' onClick={store.onMenuClick}>
                <Popup
                    inverted
                    trigger={<Icon name='unhide' />}
                    content='Visualization'
                />
              </Menu.Item>

              <Menu.Item active={store.overlay.menu === 'search'} name='search' onClick={store.onMenuClick}>
                <Popup
                    inverted
                    trigger={<Icon name='search' />}
                    content='Search'
                />
              </Menu.Item>

              <Menu.Item active={store.overlay.menu === 'route66'} name='route66' onClick={store.onMenuClick}>
                <Popup
                    inverted
                    trigger={<Icon name='wizard' />}
                    content='Route Generator'
                />
              </Menu.Item>
            </Menu>
          </Segment>

          { store.overlay.menu === 'default' &&
            <div>
              <Segment>
                <Header as='h3' style={{float: 'left'}} icon='food' content='Restaurants'/>
                <div style={{float: 'right'}}><Radio size='tiny' toggle onChange={store.toggleRestaurants} checked={store.overlay.restaurantsVisible}/></div>
                <div style={{clear: 'both'}} />
                Data Visualization Options here ...
              </Segment>

              <Segment>
                <Header as='h3' style={{float: 'left'}} icon='shipping' content='Drivers'/>
                <div style={{float: 'right'}}><Radio size='tiny' toggle onChange={store.toggleDrivers} checked={store.overlay.driversVisible}/></div>
                <div style={{clear: 'both'}} />
                Etc..
              </Segment>
            </div>
          }

          { store.overlay.menu === 'search' &&
              <Search
                id='search-bar'
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                fluid
                category
                loading={this.state.loading}
                results={this.state.results}
                value={this.state.value}
                onChange={this.handleChange}
                onSearchChange={this.handleSearchChange}
                minCharacters={3}
                 />
          }

        </div>
      }

      </Motion>
      </div>
      </div>
      </div>
    );
  }
}

export default MapOverlay;
