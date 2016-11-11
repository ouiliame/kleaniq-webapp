// TODO: handle jquery error correctly
// FAILED = request FAILED (connection errror)
// ERROR = request succeeded, but received application error


import $ from 'jquery';


export function thunkActionsFor(options) {

  const defaultConfig = {
    actionPrefix: '',
    endpoint: '',
    dataKeyName: 'data',
    requestTypeKey: 'REQUEST',
    errorTypeKey: 'ERROR',
    successTypeKey: 'SUCCESS',
    failedTypeKey: 'FAILED',
    requestCreatorKey: 'request',
    errorCreatorKey: 'error',
    successCreatorKey: 'success',
    failedCreatorKey: 'failed'
  };

  const {
    actionPrefix,
    endpoint,
    dataKeyName,
    requestTypeKey,
    errorTypeKey,
    successTypeKey,
    failedTypeKey,
    requestCreatorKey,
    errorCreatorKey,
    successCreatorKey,
    failedCreatorKey,
  } = Object.assign(defaultConfig, options);

  const defaultOnError = (type, error) => ({ type, error });
  const defaultOnSuccess = (type, data) => ({ type, [dataKeyName]: data });
  const defaultOnFailed = (type, status) => ({ type, error: { status } });

  const defaultHandlersConfig = {
    onError: defaultOnError,
    onSuccess: defaultOnSuccess,
    onFailed: defaultOnFailed
  };

  const {
    onError,
    onSuccess,
    onFailed
  } = Object.assign(defaultHandlersConfig, options);

  const request = payload => dispatch => {
    dispatch({ type: actionPrefix + '_REQUEST' });
    $.post(endpoint, payload)
        .done((data) =>
          (data.error) ? dispatch(onError(actionPrefix + '_ERROR', data.error))
                         : dispatch(onSuccess(actionPrefix + '_SUCCESS', data[dataKeyName])))
        .fail((jqXHR, status) => dispatch(onFailed(actionPrefix + '_FAILED', status)));
  };

  return {
    [requestTypeKey]: actionPrefix + '_REQUEST',
    [failedTypeKey]: actionPrefix + '_FAILED',
    [successTypeKey]: actionPrefix + '_SUCCESS',
    [errorTypeKey]: actionPrefix + '_ERROR',

    [requestCreatorKey]: request,
    [failedCreatorKey]: onFailed,
    [successCreatorKey]: onSuccess,
    [errorCreatorKey]: onError
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
