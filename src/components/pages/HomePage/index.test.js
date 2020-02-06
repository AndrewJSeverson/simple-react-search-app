import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '.';

describe('AboutPage container tests', () => {
  test('renders the about page title', () => {
    const { getByText } = render(<HomePage />);
    const foundElement = getByText('Select Your Search');
    expect(foundElement).toBeInTheDocument();
  });
});
