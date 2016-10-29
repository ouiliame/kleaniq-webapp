export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export function login_success(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

export function login_failed(message) {
  return {
    type: LOGIN_FAILED,
    message
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
      }
    });
  }
}
