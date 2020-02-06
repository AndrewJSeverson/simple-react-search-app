import * as types from './types';

export default (state = { hasBeenWelcomed: false }, action) => {
  switch (action.type) {
    case types.WELCOME_SENT:
      return {
        ...state,
        hasBeenWelcomed: true,
      };
    default:
      return state;
  }
};
