import Immutable from 'immutable';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/UserActions';

const initialState = Immutable.Map({
  isFetching: false,
  isAuthenticated: false,
  token: null,
  error: false,
  message: ''
});

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return state
        .set('isFetching', true)
        .set('error', false)
        .set('message', '')
    case LOGIN_SUCCESS:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', true)
        .set('token', action.token)
        .set('error', false)
        .set('message', '')
    case LOGIN_FAILED:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', false)
        .set('error', true)
        .set('message', action.message)
    default:
      return state;
  }
};
