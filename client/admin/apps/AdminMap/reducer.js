import AdminMap from './actions.js';
import enhanceMapReducer from 'redux-map-gl';

export const defaultViewport = {
  latitude: 33.876615,
  longitude: -117.876434,
  zoom: 9
};

function adminMapReducer(state = {}, action) {
  switch(action.type) {
  default:
    return state;
  }
}

const appState = enhanceMapReducer(adminMapReducer, defaultViewport);
export default appState;
