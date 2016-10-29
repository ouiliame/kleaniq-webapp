import React, { PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { Segment, Message, Form, Button, Checkbox, Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { login } from '../../actions/UserActions';
import './style.css';

@autobind
class LoginPage extends React.Component {

  componentDidMount() {
    if (this.props.isAuthenticated) {
      hashHistory.replace('map');
    }
  }

  handleSubmit(e, formData) {
    e.preventDefault();
    const { email, password } = formData;
    this.props.doLogin(email, password);
  }

  render () {
    return (
      <div id="login-wrapper">
        <Segment id="login-segment" padded='very' raised>
          <object className='hvr-grow' id='admin-logo' type='image/svg+xml' data='/images/admin_logo.svg'></object>

          { this.props.hasError &&
            <Message error>{ this.props.errorMessage }</Message> }

          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Email Address</label>
                <Input name="email" icon='at' iconPosition='left' placeholder='Email Address' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <Input name="password" icon='lock' type='password' iconPosition='left' placeholder='Password' />
            </Form.Field>
            <Button loading={this.props.isFetching} primary fluid type='submit'>Login</Button>
            <br/>
            <Button fluid>I can't login</Button>
          </Form>
          <a id="back-link" href="/">Return to KleanIQ for Restaurants</a>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.user.get('isFetching'),
  isAuthenticated: state.user.get('isAuthenticated'),
  hasError: state.user.get('error'),
  errorMessage: state.user.get('message')
});

const mapDispatchToProps = (dispatch) => ({
  doLogin(email, password) {
    dispatch(login(email, password))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
