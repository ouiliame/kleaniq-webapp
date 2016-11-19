import React from 'react';

import { observer } from 'mobx-react';
import { connect } from 'react-redux';

import { Application } from 'state/application/actions';
import DatabaseStore from './store';

@observer
class Database extends React.Component {

  constructor(props) {
    super(props);
    this.props.init();
  }

  render () {

    if (this.props.isLoading) {
      return null;
    }

    return (
      <div style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        Text
      </div>
    );
  }
}

const mapStateToProps = ({mouse, application}) => ({
  mouseX: mouse.x,
  store: application.store,
  isLoading: !(application.store instanceof DatabaseStore)
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(Application.setName('Database'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Database);
