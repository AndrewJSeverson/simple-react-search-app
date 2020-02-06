import * as actions from './actions';
import * as types from './types';

describe('Error actions', () => {
  it('removes an error', () => {
    expect(actions.removeError(1).errorType).toEqual(types.REMOVE_ERROR);
  });

  it('adds a temporary error', () => {
    expect(actions.addError('Error message')).toEqual({
      type: types.TEMPORARY_ERROR,
      errorType: types.TEMPORARY_ERROR,
      error: 'Error message',
    });
  });
});
