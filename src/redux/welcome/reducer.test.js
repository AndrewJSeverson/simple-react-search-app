import reducer from './reducer';
import * as types from './types';

describe('Welcome reducer', () => {
  it('should not have welcomed state by default', () => {
    expect(reducer(undefined, {})).toEqual({ hasBeenWelcomed: false });
  });

  it('should change welcome state after welcoming', () => {
    expect(reducer({ hasBeenWelcomed: false }, { type: types.WELCOME_SENT })).toEqual({ hasBeenWelcomed: true });
  });
});
