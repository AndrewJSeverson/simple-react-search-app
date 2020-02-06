import React from 'react';
import { fireEvent } from '@testing-library/react';
import SuccessContainer from '.';
import { renderWithRedux } from '../../../utils/test-utils';
import {
  emptySuccesses, hasSuccesses,
} from '../../../utils/test-redux-states';

describe('SuccessContainer container tests', () => {
  test('does not display successes when no successes in state', () => {
    const { queryByTestId } = renderWithRedux(<SuccessContainer />, { state: emptySuccesses });
    const foundElement = queryByTestId('success-snackbar-container');
    expect(foundElement).toEqual(null);
  });

  test('displays success message when successes are in the state', () => {
    const { queryByTestId } = renderWithRedux(<SuccessContainer />, { state: hasSuccesses });
    const foundElement = queryByTestId('success-snackbar-container');
    expect(foundElement).toBeInTheDocument();
  });

  test('should remove successes when close icon is selected', () => {
    const { queryByTestId } = renderWithRedux(<SuccessContainer />, { state: hasSuccesses });
    const foundElement = queryByTestId('success-snackbar-close-button');
    expect(foundElement).toBeInTheDocument();

    fireEvent.click(foundElement);
    const checkElement = queryByTestId('success-snackbar-close-button');
    expect(checkElement).toEqual(null);
  });
});
