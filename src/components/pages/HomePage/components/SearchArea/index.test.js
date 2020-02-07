import React from 'react';
import { fireEvent } from '@testing-library/react';
import axios from 'axios';
import SearchAreaComponent from '.';
import { renderWithRedux } from '../../../../../utils/test-utils';
import {
  defaultSearch, searchingSearch,
} from '../../../../../utils/test-redux-states';

afterEach(() => {
  axios.get.mockClear();
});

function mockCall() {
  axios.get.mockResolvedValueOnce({ data: {} });
}

describe('SearchAreaComponent container tests', () => {
  describe('SearchAreaComponent content tests', () => {
    test('shows default content on page load', () => {
      const {
        queryByTestId, queryByText,
      } = renderWithRedux(<SearchAreaComponent />, { state: defaultSearch });

      const foundSearchBox = queryByTestId('search-text-box');
      expect(foundSearchBox).toBeInTheDocument();

      const foundSearchIcon = queryByTestId('search-icon');
      expect(foundSearchIcon).toBeInTheDocument();

      const foundLoadingIcon = queryByTestId('loading-icon');
      expect(foundLoadingIcon).toEqual(null);

      const foundResultsText = queryByText('results for');
      expect(foundResultsText).toEqual(null);
    });

    test('shows searching content when in searching state', () => {
      const { queryByTestId } = renderWithRedux(<SearchAreaComponent />, { state: searchingSearch });

      const foundSearchIcon = queryByTestId('search-icon');
      expect(foundSearchIcon).toEqual(null);

      const foundLoadingIcon = queryByTestId('loading-icon');
      expect(foundLoadingIcon).toBeInTheDocument();
    });
  });

  describe('SearchAreaComponent user action tests', () => {
    test('should update input on user search input', () => {
      const { queryByTestId } = renderWithRedux(<SearchAreaComponent />, { state: defaultSearch });
      const foundSearchInput = queryByTestId('search-input');
      expect(foundSearchInput).toBeInTheDocument();

      const foundSearchButton = queryByTestId('search-button');
      expect(foundSearchButton).toHaveProperty('disabled', true);

      fireEvent.change(foundSearchInput, { target: { value: 'search term' } });
      expect(foundSearchInput.value).toEqual('search term');
      expect(foundSearchButton).toHaveProperty('disabled', false);
    });

    test('should dispatch search action on submit click', () => {
      mockCall();
      const { queryByTestId } = renderWithRedux(<SearchAreaComponent />, { state: defaultSearch });
      const foundSearchInput = queryByTestId('search-input');
      const foundSearchButton = queryByTestId('search-button');

      fireEvent.change(foundSearchInput, { target: { value: 'search term' } });
      fireEvent.click(foundSearchButton);

      const foundLoadingIcon = queryByTestId('loading-icon');
      expect(foundLoadingIcon).toBeInTheDocument();
    });

    test('should dispatch search action on input enter press', () => {
      mockCall();
      const { queryByTestId } = renderWithRedux(<SearchAreaComponent />, { state: defaultSearch });
      const foundSearchInput = queryByTestId('search-input');

      fireEvent.change(foundSearchInput, { target: { value: 'search term' } });
      fireEvent.keyDown(foundSearchInput, {
        key: 'Enter',
        keyCode: 13,
      });

      const foundLoadingIcon = queryByTestId('loading-icon');
      expect(foundLoadingIcon).toBeInTheDocument();
    });
  });
});
