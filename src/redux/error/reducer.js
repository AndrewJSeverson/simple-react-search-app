import _ from 'lodash';
import * as types from './types';

export default (state = { errorMessages: [] }, action) => {
  switch (action.errorType) {
    case types.TEMPORARY_ERROR:
      return {
        ...state,
        errorMessages: (action.error && action.error.length > 0)
          ? [
            ...state.errorMessages,
            {
              id: state.errorMessages.length + 1,
              message: action.error,
              dismissable: false,
            },
          ]
          : state.errorMessages,
      };
    case types.CONSTANT_ERROR:
      return {
        ...state,
        errorMessages: (action.error && action.error.length > 0)
          ? [
            ...state.errorMessages,
            {
              id: state.errorMessages.length + 1,
              message: action.error,
              dismissable: true,
            },
          ]
          : state.errorMessages,
      };
    case types.REMOVE_ERROR:
      return {
        ...state,
        errorMessages:
          _.filter(state.errorMessages, (errorMessage) => errorMessage.id !== action.errorId),
      };
    default:
      return state;
  }
};
