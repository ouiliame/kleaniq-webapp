import { hashHistory } from 'react-router';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

export function login_success(token) {
  localStorage.token = token;
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

export function login_failed(message) {
  return {
    type: LOGIN_FAILED,
    notification: {
      type: 'error',
      message
    }
  }
}

export function login(email, password) {
  return (dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    $.post('/api/admin/login', {email, password}, (data) => {
      if (data.error) {
        dispatch(login_failed(data.message));
      } else {
        dispatch(login_success(data.token));
        hashHistory.replace('/');
      }
    });
  }
}

export function logout() {
  delete localStorage.token;
  return {
    type: LOGOUT
  }
}
