import React, { PropTypes } from 'react'
import { Segment, Message, Form, Button, Checkbox, Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logout } from '../../actions/UserActions';
import { hashHistory } from 'react-router';

class LogoutPage extends React.Component {

  render() {
    return(
      <div>
        You have been logged out.
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
