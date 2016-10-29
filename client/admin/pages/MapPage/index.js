import React, { PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { Segment, Message, Form, Button, Checkbox, Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

@autobind
class MapPage extends React.Component {

  componentDidMount() {
  }

  render () {
    return (
      null
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
