import React from 'react';
import { connect } from 'react-redux';

import { Application } from 'state/application/actions';

import AdminMapStore from './store';
import MapComponent from './components/MapComponent';
import MapOverlay from './components/MapOverlay';

import './style.css';


class AdminMap extends React.Component {

  constructor(props) {
    super(props);
    this.props.init();
  }

  render () {

    if (this.props.isLoading) {
      return null;
    }

    const { store } = this.props;

    return (
      <div>
        <MapComponent store={store} />
        <MapOverlay mouseX={this.props.mouseX} store={store} />
      </div>
    );
  }
}

const mapStateToProps = ({mouse, application}) => ({
  mouseX: mouse.x,
  store: application.store,
  isLoading: !(application.store instanceof AdminMapStore)
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(Application.setName('AdminMap'))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminMap);
