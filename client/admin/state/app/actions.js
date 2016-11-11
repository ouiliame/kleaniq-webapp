export const AppInfo = {
  // action types
  SET_NAME: 'APP_SET_NAME',

  // action creators
  setName(name) {
    return {
      type: AppInfo.SET_NAME,
      name
    };
  }
};
