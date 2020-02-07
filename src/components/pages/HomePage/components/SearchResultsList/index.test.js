import React from 'react';
import SearchResultsList from '.';
import { renderWithRedux } from '../../../../../utils/test-utils';
import {
  searchResultAllData,
  resultWithAllData,
  searchResultMissingData,
} from '../../../../../utils/test-redux-states';

describe('SearchResultsList container tests', () => {
  describe('SearchResultsList content tests', () => {
    test('shows all fields for result with no missing data', () => {
      const {
        queryByText, queryByTitle,
      } = renderWithRedux(<SearchResultsList width="sm" />, { state: searchResultAllData });

      const foundShowName = queryByText(resultWithAllData.name);
      expect(foundShowName).toBeInTheDocument();

      const foundGenres = queryByText('Genres');
      expect(foundGenres).toBeInTheDocument();

      const foundWebsite = queryByText('Website');
      expect(foundWebsite).toBeInTheDocument();

      const foundImageTitle = queryByTitle(`${resultWithAllData.name} poster image`);
      expect(foundImageTitle).toBeInTheDocument();
    });

    test('hides fields missing from result', () => {
      const { queryByText } = renderWithRedux(<SearchResultsList width="sm" />, { state: searchResultMissingData });

      const foundGenres = queryByText('Genres');
      expect(foundGenres).toEqual(null);

      const foundWebsite = queryByText('Website');
      expect(foundWebsite).toEqual(null);

      const foundImageTitle = queryByText('No show image');
      expect(foundImageTitle).toBeInTheDocument();
    });
  });
});
