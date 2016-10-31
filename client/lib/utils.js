// TODO: handle jquery error correctly

import $ from 'zepto-webpack';

const onSuccess = function(type, data) {
  return {
    type
  };
};

const onError = function(type, err) {
  return {
    type,
    error: err
  };
};

const defaultConfig = {
  actionPrefix: '',
  endpoint: '',
  onSuccess,
  onError,
  dataKeyName: 'data',
  requestTypeKey: 'REQUEST',
  successTypeKey: 'SUCCESS',
  failedTypeKey: 'FAILED',
  requestCreatorKey: 'request',
  successCreatorKey: 'success',
  failedCreatorKey: 'failed'
};

export function thunkActionsFor(options) {

  const {
    actionPrefix,
    endpoint,
    onSuccess,
    onError,
    dataKeyName,
    requestTypeKey,
    successTypeKey,
    failedTypeKey,
    requestCreatorKey,
    successCreatorKey,
    failedCreatorKey,
  } = Object.assign(defaultConfig, options);


  function request(payload) {
    return (dispatch) => {
      dispatch({ type: actionPrefix + '_REQUEST' });
      $.post(endpoint, payload, (data) => {
        if (data.error) {
          dispatch(onError(actionPrefix + '_FAILED', data.error));
        } else {
          dispatch(onSuccess(actionPrefix + '_SUCCESS', data[dataKeyName]));
        }
      });
    };
  }

  return {
    [requestTypeKey]: actionPrefix + '_REQUEST',
    [successTypeKey]: actionPrefix + '_SUCCESS',
    [failedTypeKey]: actionPrefix + '_FAILED',

    [requestCreatorKey]: request,
    [successCreatorKey]: onSuccess,
    [failedCreatorKey]: onError
  };
}

export function getThunkActionsCreator(baseEndpoint) {
  return (options) => {
    var { endpoint } = options;
    endpoint = baseEndpoint + endpoint;
    const newOpts = { ...options, endpoint };
    return thunkActionsFor(newOpts);
  };
}
