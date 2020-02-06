import reducer from './reducer';
import * as types from './types';

describe('Error reducer', () => {
  it('should return errors', () => {
    expect(reducer(undefined, {})).toEqual({ errorMessages: [] });
  });

  it('should handle a temporary error', () => {
    expect(reducer({ errorMessages: [] }, {
      errorType: types.TEMPORARY_ERROR,
      error: 'Error message',
    })).toEqual({ errorMessages: [{
      id: 1,
      message: 'Error message',
      dismissable: false,
    }] });
  });

  it('should handle a constant error', () => {
    expect(reducer({ errorMessages: [] }, {
      errorType: types.CONSTANT_ERROR,
      error: 'Error message',
    })).toEqual({ errorMessages: [{
      id: 1,
      message: 'Error message',
      dismissable: true,
    }] });
  });

  it('should hide a message', () => {
    expect(reducer({ errorMessages: [{ id: 1 }] }, {
      errorType: types.REMOVE_ERROR,
      errorId: 1,
    })).toEqual({ errorMessages: [] });
  });
});
