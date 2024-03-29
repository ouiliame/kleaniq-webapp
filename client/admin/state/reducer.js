import { combineReducers } from 'redux';

// each subdirectory's index is reducer
import { user, auth } from './auth';
import { application } from './application';

import { reducer as burgerMenu } from 'redux-burger-menu';
import { routerReducer } from 'react-router-redux';
import { mouseReducer } from 'redux-mouse';

export default combineReducers({
  user,
  auth,
  application,

  // vendor
  burgerMenu,
  mouse: mouseReducer,
  routing: routerReducer
});
