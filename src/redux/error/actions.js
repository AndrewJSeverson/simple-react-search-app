import * as types from './types';

export const removeError = (errorId) => ({
  type: types.REMOVE_ERROR,
  errorType: types.REMOVE_ERROR,
  errorId,
});

export const addError = (error) => ({
  type: types.TEMPORARY_ERROR,
  errorType: types.TEMPORARY_ERROR,
  error,
});
