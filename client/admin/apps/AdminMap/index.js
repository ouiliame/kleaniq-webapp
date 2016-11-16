import React from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

import MapComponent from './components/MapComponent';
import MapOverlay from './components/MapOverlay';

import { AppInfo } from 'state/app/actions';
import './style.css';

@autobind
class AdminMap extends React.Component {

  constructor(props) {
    super(props);
    this.props.setAppName();
  }

  render () {

    return (
      <div>
        <MapComponent />
        <MapOverlay />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mouseX: state.mouse.x
});

const mapDispatchToProps = (dispatch) => ({
  setAppName: () => dispatch(AppInfo.setName('AdminMap'))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminMap);
