import reducer from './reducer';
import * as types from './types';

describe('Success reducer', () => {
  it('should return successes', () => {
    expect(reducer(undefined, {})).toEqual({ successMessages: [] });
  });

  it('should handle a temporary success', () => {
    expect(reducer({ successMessages: [] }, {
      successType: types.TEMPORARY_SUCCESS,
      success: 'Success message',
    })).toEqual({ successMessages: [{
      id: 1,
      message: 'Success message',
      dismissable: true,
    }] });
  });

  it('should handle a constant success', () => {
    expect(reducer({ successMessages: [] }, {
      successType: types.CONSTANT_SUCCESS,
      success: 'Success message',
    })).toEqual({ successMessages: [{
      id: 1,
      message: 'Success message',
      dismissable: false,
    }] });
  });

  it('should hide a message', () => {
    expect(reducer({ successMessages: [{ id: 1 }] }, {
      successType: types.REMOVE_SUCCESS,
      successId: 1,
    })).toEqual({ successMessages: [] });
  });
});
