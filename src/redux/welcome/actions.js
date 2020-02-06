import React from 'react';
import * as types from './types';
import { addConstantSuccess } from '../success/actions';

export const welcomeUser = () => (dispatch) => {
  // sent success message with welcome
  dispatch(addConstantSuccess(
    <span>
      Welcome to the simple react search app! If you have any questions, email me at <a href="mailto:andrewjseverson@gmail.com?Subject=About%20your%20app" target="_top">andrewjseverson@gmail.com</a>
    </span>,
  ));
  // update welcome state
  return dispatch({ type: types.WELCOME_SENT });
};
