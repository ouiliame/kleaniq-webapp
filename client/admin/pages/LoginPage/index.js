import React from 'react';
import { replace } from 'react-router-redux';
import autobind from 'autobind-decorator';
import { Segment, Message, Header, Form, Button, Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Login, Token } from 'state/auth/actions';
import './style.css';

@autobind
class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    if (!this.props.user && localStorage.token) {
      this.props.validateToken(localStorage.token);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { user, tokenStatus, loginStatus } = nextProps;

    if (loginStatus === 'success') {
      this.props.redirectTo(nextProps.redirectPath);
    }

    if (tokenStatus === 'failed') {
      this.props.clearToken();
      this.setState({
        user: null
      });
    }

    if (user && user.token && tokenStatus === 'success') {
      this.setState({
        user
      });
    }

  }

  handleLogin(e, credentials) {
    e.preventDefault();
    this.props.login(credentials);
  }

  handleResume(e, {password}) {
    e.preventDefault();
    this.props.login({ email: this.state.user.email, password });
  }

  clearUser(e) {
    e.preventDefault();
    this.props.clearToken();
    this.setState({
      user: null
    });
  }

  render () {

    const { tokenStatus, loginStatus, notification } = this.props;

    const LoginForm = (
      <Form onSubmit={this.handleLogin} method='POST'>
        <Form.Field>
          <label>Email Address</label>
          <Input name="email" icon='at' iconPosition='left' placeholder='Email Address' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input name="password" icon='lock' type='password' iconPosition='left' placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <Button fluid loading={loginStatus === 'request'} primary type='submit'>Login</Button>
          <br/>
          <Button fluid>I can't login</Button>
        </Form.Field>
      </Form>
    );

    const TokenFetching = (
      <Header as='h1' icon>
        <Icon loading name='circle notched' />
        Restoring session...
      </Header>
    );

    let body;
    if (tokenStatus === 'request') {
      body = TokenFetching;
    } else if (this.state.user && tokenStatus === 'success') {
      body = (
        <div>
          <Header as='h3'>
            <Icon name='lock' />
            <Header.Content>
              Welcome back, {this.state.user.name.first} {this.state.user.name.last}
              <Header.Subheader>
                Re-enter your password to resume your session.
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Form onSubmit={this.handleResume} method='POST'>
            <Form.Field onSubmit={this.handleResume}>
              <Input name="password" icon='lock' type='password' iconPosition='left' placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <Button fluid animated primary type='submit'>
                  Resume previous session
                <Icon name='right arrow' />
              </Button>
              <br/>
              <Button fluid animated onClick={this.clearUser}>
                <Button.Content visible>I'm not {this.state.user.name.first} {this.state.user.name.last}</Button.Content>
                <Button.Content hidden>
                  <Icon name='left arrow' />
                  Login as a different user
                </Button.Content>
              </Button>
            </Form.Field>
          </Form>
        </div>
      );
    } else {
      body = LoginForm;
    }

    return (
      <div id="login-wrapper">
        <Segment id="login-segment" padded='very' raised>
          <object className='hvr-grow' id='admin-logo' type='image/svg+xml' data='/images/admin_logo.svg'></object>

          {
            notification &&
            <Message
              success={notification.type === 'success'}
              error={notification.type === 'error'}>
              { notification.message }
            </Message>
          }

          { body }

          <a id="back-link" href="/">Return to KleanIQ for Restaurants</a>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  tokenStatus: state.auth.tokenStatus,
  loginStatus: state.auth.loginStatus,
  user: state.user,
  notification: state.auth.notification,
  redirectPath: ownProps.location.query.redirect || '/'
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(Login.login(credentials)),
  validateToken: (token) => dispatch(Token.validate({token})),
  clearToken: () => dispatch(Token.clear()),
  redirectTo: (location) => dispatch(replace(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
