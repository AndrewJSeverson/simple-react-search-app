import _ from 'lodash';
import * as types from './types';

export default (state = { successMessages: [] }, action) => {
  switch (action.successType) {
    case types.TEMPORARY_SUCCESS:
      return {
        ...state,
        successMessages: [
          ...state.successMessages,
          {
            id: state.successMessages.length + 1,
            message: action.success,
            dismissable: true,
          },
        ],
      };
    case types.CONSTANT_SUCCESS:
      return {
        ...state,
        successMessages: [
          ...state.successMessages,
          {
            id: state.successMessages.length + 1,
            message: action.success,
            dismissable: false,
          },
        ],
      };
    case types.REMOVE_SUCCESS:
      return {
        ...state,
        successMessages:
          _.filter(state.successMessages, (successMessage) => successMessage.id !== action.successId),
      };
    default:
      return state;
  }
};
