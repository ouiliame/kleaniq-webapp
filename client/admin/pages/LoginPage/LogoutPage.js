import React from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { action as toggleMenu } from 'react-burger-menu';
import { Login } from 'state/auth/actions';

class LogoutPage extends React.Component {

  componentWillMount() {
    this.props.logout();
  }

  render() {
    return(
      <div>
        You have been logged out.
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(Login.logout());
    dispatch(replace('/'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
