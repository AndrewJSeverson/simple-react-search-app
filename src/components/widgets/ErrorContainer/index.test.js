import React from 'react';
import { fireEvent } from '@testing-library/react';
import ErrorContainer from '.';
import { renderWithRedux } from '../../../utils/test-utils';
import {
  hasErrors, emptyErrors,
} from '../../../utils/test-redux-states';

describe('ErrorContainer container tests', () => {
  test('does not display errors when no errors in state', () => {
    const { queryByTestId } = renderWithRedux(<ErrorContainer />, { state: emptyErrors });
    const foundElement = queryByTestId('error-snackbar-container');
    expect(foundElement).toEqual(null);
  });

  test('displays error message when errors are in the state', () => {
    const { queryByTestId } = renderWithRedux(<ErrorContainer />, { state: hasErrors });
    const foundElement = queryByTestId('error-snackbar-container');
    expect(foundElement).toBeInTheDocument();
  });

  test('should remove errors when close icon is selected', () => {
    const { queryByTestId } = renderWithRedux(<ErrorContainer />, { state: hasErrors });
    const foundElement = queryByTestId('error-snackbar-close-button');
    expect(foundElement).toBeInTheDocument();

    fireEvent.click(foundElement);
    const checkElement = queryByTestId('error-snackbar-close-button');
    expect(checkElement).toEqual(null);
  });
});
