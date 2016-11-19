import { Application } from './actions';

import AdminMapStore from 'apps/AdminMap/store';
import DatabaseStore from 'apps/Database/store';

const stores = {
  AdminMap: new AdminMapStore(),
  Database: new DatabaseStore()
};

if (window.stores === undefined) {
  window.stores = stores;
}

export function application(state = {}, action) {
  switch (action.type) {
  case Application.SET_NAME: {

    if (stores[action.name] === undefined) { // not able to find that app!
      return state;
    }

    return { name: action.name, store: window.stores[action.name] };
  }
  default:
    return state;
  }
}
