import { Login, TokenLogin } from './actions';

export function user(state = null, action) {
  switch (action.type) {
  case TokenLogin.SUCCESS:
  case Login.SUCCESS:
    return action.user;

  case TokenLogin.CLEAR:
  case TokenLogin.ERROR:
  case Login.ERROR:
  case Login.LOGOUT:
    return null;

  default:
    return state;
  }
}

// Auth vs. User : Auth = authentication status (login / token validation attempts)
export function auth(state = {}, action) {
  switch (action.type) {

  case Login.REQUEST:
    return { loginStatus: 'request' };

  case Login.FAILED:
    return  {
      notification: {
        type: 'error',
        message: 'Error connecting to KleanIQ servers. Try again later.'
      }
    };

  case TokenLogin.REQUEST:
    return { tokenStatus: 'request' };

  case TokenLogin.FAILED:
    return  {
      notification: {
        type: 'error',
        message: 'Error connecting to KleanIQ servers. Try again later.'
      }
    };

  case Login.SUCCESS:
    return { loginStatus: 'success' };

  case TokenLogin.SUCCESS:
    return { tokenStatus: 'success' };

  case Login.ERROR:
    return {
      loginStatus: 'error',
      notification: {
        type: 'error',
        message: action.error.message
      }
    };

  case TokenLogin.ERROR:
    return {
      tokenStatus: 'error',
      notification: {
        type: 'error',
        message: action.error.message
      }
    };

  case Login.LOGOUT:
    return {
      notification: {
        type: 'success',
        message: 'You have successfully logged out.'
      }
    };

  default:
    return state;
  }
}
