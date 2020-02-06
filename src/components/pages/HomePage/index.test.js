import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '.';

describe('HomePage container tests', () => {
  test('renders the home page title', () => {
    const { getByText } = render(<HomePage />);
    const foundElement = getByText('Select Your Search');
    expect(foundElement).toBeInTheDocument();
  });
});
