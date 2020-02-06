import React from 'react';
import App from '.';
import { renderWithRedux } from '../../utils/test-utils';
import {
  userIsWelcomed, userIsNotWelcomed,
} from '../../utils/test-redux-states';

describe('App container tests', () => {
  test('renders the app with app bar title', () => {
    const { getByText } = renderWithRedux(<App />);
    const foundElement = getByText('Simple Search');
    expect(foundElement).toBeInTheDocument();
  });

  test('displays welcome message when visiting for first time', () => {
    const { queryByTestId } = renderWithRedux(<App />, { state: userIsNotWelcomed });
    const foundElement = queryByTestId('success-snackbar-container');
    expect(foundElement).toBeInTheDocument();
  });

  test('does not display welcome message if already welcomed', () => {
    const { queryByTestId } = renderWithRedux(<App />, { state: userIsWelcomed });
    const foundElement = queryByTestId('success-snackbar-container');
    expect(foundElement).toEqual(null);
  });
});
