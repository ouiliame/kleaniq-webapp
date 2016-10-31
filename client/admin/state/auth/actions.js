import { getThunkActionsCreator } from 'utils';
import { hashHistory } from 'react-router';

// TODO: redirect to routes other than '/' from Login and TokenLogin on success

const thunkActionsFor = getThunkActionsCreator('/api/admin/')
// LOGIN

const Login = thunkActionsFor({
  actionPrefix: 'LOGIN',
  endpoint: 'login',
  onSuccess: (type, user) => {
    localStorage.token = user.token;
    return { type, user };
  },
  dataKeyName: 'user',
  requestCreatorKey: 'login'
});

Login.LOGOUT = 'LOGOUT';

Login.logout = () => {
  delete localStorage.token;
  return {
    type: Login.LOGOUT
  }
};

// TOKEN

const Token = thunkActionsFor({
  actionPrefix: 'TOKEN',
  endpoint: 'validate_token',
  onSuccess: (type, user) => {
    localStorage.token = user.token;
    return { type, user };
  },
  onFailed: (type, error) => {
    // TODO: notify
    return { type, error }
  },
  dataKeyName: 'user',
  requestCreatorKey: 'validate'
});

Token.CLEAR = 'TOKEN_CLEAR';

Token.clear = () => {
  delete localStorage.token;
  return {
    type: Token.CLEAR
  }
}

export {
  Login,
  Token
};
