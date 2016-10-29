import Immutable from 'immutable';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../actions/UserActions';

const initialState = Immutable.Map({
  isFetching: false,
  isAuthenticated: localStorage.token !== undefined,
  token: localStorage.token !== undefined ? localStorage.token : null,
  notification: null
});

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return state
        .set('isFetching', true)
        .set('notification', null)
    case LOGIN_SUCCESS:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', true)
        .set('token', action.token)
        .set('notification', null)
    case LOGIN_FAILED:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', false)
        .set('notification', action.notification)
    case LOGOUT:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', null)
        .set('token', null)
        .set('notification', {
          type: 'success',
          message: 'You have been successfully logged out.'
        })
    default:
      return state;
  }
};
