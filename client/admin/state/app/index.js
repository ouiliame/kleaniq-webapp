import { AppInfo } from './actions';
import _ from 'lodash';

import AdminMap from 'apps/AdminMap/reducer';
import Database from 'apps/Database/reducer';

const appReducers = {
  AdminMap,
  Database
};

export function appInfo(state = {}, action) {
  switch (action.type) {
  case AppInfo.SET_NAME:
    return { name: action.name };
  default:
    return state;
  }
}

export function appState(state = {}, action) {
  switch (action.type) {
  case AppInfo.SET_NAME: {
    const reducer = appReducers[action.name];
    const nextState = reducer(undefined, {type: 'APP_INIT'});
    return { $appName: action.name,...nextState };
  }
  default:
    if (state.$appName) {
      const currentState = _.omit(state, '$appName');
      const nextState = appReducers[state.$appName](currentState, action);
      return { $appName: state.$appName, ...nextState };
    } else {
      return state;
    }
  }
}
