import * as actions from './actions';
import * as types from './types';

describe('Error actions', () => {
  it('removes an success', () => {
    expect(actions.removeSuccess(1).successType).toEqual(types.REMOVE_SUCCESS);
  });

  it('adds a temporary success', () => {
    expect(actions.addSuccess('Success message')).toEqual({
      type: types.TEMPORARY_SUCCESS,
      successType: types.TEMPORARY_SUCCESS,
      success: 'Success message',
    });
  });

  it('adds a constant success', () => {
    expect(actions.addConstantSuccess('Success message')).toEqual({
      type: types.CONSTANT_SUCCESS,
      successType: types.CONSTANT_SUCCESS,
      success: 'Success message',
    });
  });
});
