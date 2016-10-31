import { Login, Token } from './actions';

export function user(state = null, action) {
  switch (action.type) {
    case Token.SUCCESS:
    case Login.SUCCESS:
    return action.user;

    // we don't have token here because possible for token error
    // we don't want to log the user out
    case Token.CLEAR:
    case Login.FAILED:
    case Login.LOGOUT:
    return null;

    default:
    return state;
  }
}

export function auth(state = {}, action) {
  switch (action.type) {

    case Login.REQUEST:
    return { loginStatus: 'request' }

    case Token.REQUEST:
    return { tokenStatus: 'request' }

    case Login.SUCCESS:
    return { loginStatus: 'success' }

    case Token.SUCCESS:
    return { tokenStatus: 'success' }

    case Login.FAILED:
    state = { ...state, loginStatus: 'failed' }
    case Token.FAILED:
    state = { ...state, tokenStatus: 'failed' }
    return { ...state,
      notification: {
        type: 'error',
        message: action.error.message
      }
    }

    case Login.LOGOUT:
    return {
      notification: {
        type: 'success',
        message: "You have successfully logged out."
      }
    }

    case Token.CLEAR:
    return {};

    default:
    return state;
  }
}
