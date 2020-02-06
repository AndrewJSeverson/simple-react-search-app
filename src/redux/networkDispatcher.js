import * as errorTypes from './error/types';
import * as successTypes from './success/types';

export const getErrorMessage = ({
  error,
  defaultErrorMessage,
}) => {
  if (typeof error === 'string') {
    return error;
  }
  if (error && error.message) {
    return error.message;
  }
  if (error && error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  }
  return defaultErrorMessage;
};

export const addDispatchItems = (dispatchAction, response, responseName, successMessage) => {
  const updatedDispatchAction = dispatchAction;
  updatedDispatchAction[responseName] = response;
  if (successMessage) {
    updatedDispatchAction.successType = successTypes.TEMPORARY_SUCCESS;
    updatedDispatchAction.success = successMessage;
  }
  return updatedDispatchAction;
};

export const dispatchNetworkRequestDynamicSuccessDispatch = ({
  dispatch,
  requestType,
  successDispatch,
  errorType,
  promise,
  successMessage,
  defaultErrorMessage,
  responseName,
}) => {
  dispatch({ type: requestType });
  promise.then((response) => {
    const dispatchAction
      = addDispatchItems(successDispatch, response, responseName, successMessage);
    dispatch(dispatchAction);
  }).catch((error) => dispatch({
    type: errorType,
    errorType: errorTypes.TEMPORARY_ERROR,
    error: getErrorMessage({
      error,
      defaultErrorMessage,
    }),
  }));
};

export const dispatchNetworkRequest = ({
  dispatch,
  requestType,
  successType,
  errorType,
  promise,
  successMessage,
  defaultErrorMessage,
  responseName,
}) => {
  dispatchNetworkRequestDynamicSuccessDispatch({
    dispatch,
    requestType,
    successDispatch: { type: successType },
    errorType,
    promise,
    successMessage,
    defaultErrorMessage,
    responseName,
  });
};

export default {
  dispatchNetworkRequest,
  dispatchNetworkRequestDynamicSuccessDispatch,
};
