import React from 'react';
import { Segment, Menu, Icon } from 'semantic-ui-react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';

import $ from 'jquery';

class MapOverlay extends React.Component {
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
      <div id='map-overlay' className='pass-through'>
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
    );
  }
}

const mapStateToProps = (state) => ({
  mouseX: state.mouse.x
});

export default connect(mapStateToProps)(MapOverlay);
