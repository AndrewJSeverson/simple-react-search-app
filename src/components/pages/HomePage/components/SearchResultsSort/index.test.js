import React from 'react';
import { fireEvent } from '@testing-library/react';
import SearchResultsSort from '.';
import { renderWithRedux } from '../../../../../utils/test-utils';
import { defaultSearch } from '../../../../../utils/test-redux-states';

describe('SearchResultsSort container tests', () => {
  describe('SearchResultsSort content tests', () => {
    test('shows default content on page load', () => {
      const { queryByText } = renderWithRedux(<SearchResultsSort />, { state: defaultSearch });

      const foundSortByLabel = queryByText('Sort By');
      expect(foundSortByLabel).toBeInTheDocument();

      const foundNameField = queryByText('Name');
      expect(foundNameField).toBeInTheDocument();
    });
  });

  describe('SearchResultsSort user action tests', () => {
    test('should update sort field on change', () => {
      const { queryByTestId } = renderWithRedux(<SearchResultsSort />, { state: defaultSearch });
      const foundSortSelect = queryByTestId('sort-select');
      expect(foundSortSelect).toBeInTheDocument();
      expect(foundSortSelect.value).toEqual('name');

      fireEvent.change(foundSortSelect, { target: { value: 'language' } });
      expect(foundSortSelect.value).toEqual('language');
    });
  });
});
