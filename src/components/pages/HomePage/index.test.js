import React from 'react';
import { renderWithRedux } from '../../../utils/test-utils';
import HomePage from '.';

describe('HomePage container tests', () => {
  test('renders the home page title', () => {
    const { queryByTestId } = renderWithRedux(<HomePage />);
    const foundElement = queryByTestId('search-text-box');
    expect(foundElement).toBeInTheDocument();
  });
});
