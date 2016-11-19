import { observable, action, computed, toJS } from 'mobx';
import autobind from 'autobind-decorator';
import data from './data.json';
import Fuse from 'fuse.js';

// FUCK REDUX, MOBX ALL THE WAY.
// That being said, TODO: refactor ENTIRE codebase to MobX

const defaultViewport = {
  center: [-118.032844, 33.979179],
  zoom: [9],
  pitch: 0,
  bearing: 0
};

@autobind
export default class AdminMapStore {

  constructor() {
    this.restaurants = data.restaurants;
    this.fuse = new Fuse(this.restaurants, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      keys: [
        {
          'name': 'name',
          'weight': 0.75
        },
        {
          'name': 'formattedAddress',
          'weight': 0.2
        },
        {
          'name': 'telephone',
          'weight': 0.05
        }
      ]
    });
  }

  // MAP PROPERTIES
  @observable map = {};
  @observable viewport = defaultViewport;

  @computed get mapState() {
    return toJS(this.viewport);
  }

  // MAP ACTIONS

  // pass in an immutable object!
  @action changeViewport(newViewport) {
    this.viewport = newViewport;
  }

  // yay, we get our map instance.
  @action onStyleLoad(map) {
    this.map = map;
  }

  @action onMoveEnd(map, e) {
    this.map = map;
    if (e.originalEvent) {
      // action was instigated by user
      const coords = map.getCenter();
      const newViewport = {
        zoom: [map.getZoom()],
        center: [coords.lng, coords.lat],
        pitch: map.getPitch(),
        bearing: map.getBearing()
      };
      this.changeViewport(newViewport);
    }
  }

  // OVERLAY PROPERTIES

  @observable overlay = {
    menu: 'default',
    locked: false,

    restaurantsVisible: true,
    driversVisible: false
  }

  // OVERLAY ACTIONS

  @action onMenuClick(e, {name}) {
    this.overlay.menu = name;
  }

  @action toggleRestaurants() {
    this.overlay.restaurantsVisible = !this.overlay.restaurantsVisible;
  }

  @action toggleDrivers() {
    this.overlay.driversVisible = !this.overlay.driversVisible;
  }

  @action toggleLock() {
    this.overlay.locked = !this.overlay.locked;
  }
}
