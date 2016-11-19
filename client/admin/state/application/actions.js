export const Application = {
  // action types
  SET_NAME: 'APP_SET_NAME',

  // action creators
  setName(name) {
    return {
      type: Application.SET_NAME,
      name
    };
  }
};
