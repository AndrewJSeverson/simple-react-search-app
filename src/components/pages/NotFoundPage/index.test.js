import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '.';

describe('NotFoundPage container tests', () => {
  test('renders the not found page title', () => {
    const { getByText } = render(<NotFoundPage />);
    const foundElement = getByText('404');
    expect(foundElement).toBeInTheDocument();
  });
});
