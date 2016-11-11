import { getThunkActionsCreator } from 'utils';

// TODO: redirect to routes other than '/' from Login and TokenLogin on success

const thunkActionsFor = getThunkActionsCreator('/api/admin/');
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
  };
};

// TOKEN LOGIN

const TokenLogin = thunkActionsFor({
  actionPrefix: 'TOKEN_LOGIN',
  endpoint: 'token_login',
  onSuccess: (type, user) => {
    localStorage.token = user.token;
    return { type, user };
  },
  dataKeyName: 'user',
  requestCreatorKey: 'login'
});

TokenLogin.CLEAR = 'TOKEN_CLEAR';

TokenLogin.clear = () => {
  delete localStorage.token;
  return {
    type: TokenLogin.CLEAR
  };
};

export {
  Login,
  TokenLogin
};
