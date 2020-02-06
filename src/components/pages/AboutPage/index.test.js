import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from '.';

describe('AboutPage container tests', () => {
  test('renders the about page title', () => {
    const { getByText } = render(<AboutPage />);
    const foundElement = getByText('About Simple React Search App');
    expect(foundElement).toBeInTheDocument();
  });
});
