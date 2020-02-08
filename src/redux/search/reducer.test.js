import reducer from './reducer';
import * as types from './types';

describe('(Reducer) Search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      searchResults: [],
      isEmptySearch: false,
      isSearching: false,
      searchingError: false,
      sortField: 'name',
    });
  });

  it('should handle SEARCH_REQUESTED', () => {
    const state = reducer({
      searchResults: [{ id: 1 }],
      isSearching: false,
      searchingError: true,
      isEmptySearch: true,
    }, { type: types.SEARCH_REQUESTED });

    expect(state.isEmptySearch).toEqual(false);
    expect(state.searchingError).toEqual(false);
    expect(state.isSearching).toEqual(true);
    expect(state.searchResults).toEqual([]);
  });

  it('should handle SEARCH_SUCCESS with results', () => {
    const state = reducer({
      searchResults: [],
      isSearching: true,
      hasSearched: false,
      searchingError: true,
    }, {
      type: types.SEARCH_SUCCESS,
      results: [{ show: { id: 1 } }],
    });

    expect(state.searchingError).toEqual(false);
    expect(state.isSearching).toEqual(false);
    expect(state.isEmptySearch).toEqual(false);
    expect(state.searchResults).toEqual([{ id: 1 }]);
  });

  it('should handle SEARCH_SUCCESS withouot results', () => {
    const state = reducer({
      searchResults: [],
      isSearching: true,
      hasSearched: false,
      searchingError: true,
    }, {
      type: types.SEARCH_SUCCESS,
      results: [],
    });

    expect(state.searchingError).toEqual(false);
    expect(state.isSearching).toEqual(false);
    expect(state.isEmptySearch).toEqual(true);
    expect(state.searchResults).toEqual([]);
  });

  it('should handle SEARCH_ERROR', () => {
    const state = reducer({
      searchResults: [{ id: 1 }],
      isSearching: true,
      searchingError: false,
    }, { type: types.SEARCH_ERROR });

    expect(state.searchingError).toEqual(true);
    expect(state.isSearching).toEqual(false);
    expect(state.searchResults).toEqual([]);
  });

  it('should handle CHANGE_SORT_FIELD', () => {
    const state = reducer({ searchResults: 'name' }, {
      type: types.CHANGE_SORT_FIELD,
      sortField: 'language',
    });

    expect(state.sortField).toEqual('language');
  });
});
