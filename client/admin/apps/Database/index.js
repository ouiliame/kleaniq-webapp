import React from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

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
      <div style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        Hello there
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mouseX: state.mouse.x
});

const mapDispatchToProps = (dispatch) => ({
  setAppName: () => dispatch(AppInfo.setName('Database'))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminMap);
