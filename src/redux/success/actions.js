import * as types from './types';

export const removeSuccess = (successId) => ({
  type: types.REMOVE_SUCCESS,
  successType: types.REMOVE_SUCCESS,
  successId,
});

export const addSuccess = (success) => ({
  type: types.TEMPORARY_SUCCESS,
  successType: types.TEMPORARY_SUCCESS,
  success,
});

export const addConstantSuccess = (success) => ({
  type: types.CONSTANT_SUCCESS,
  successType: types.CONSTANT_SUCCESS,
  success,
});
