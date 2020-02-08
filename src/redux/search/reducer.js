import * as types from './types';

export default (state = {
  searchResults: [],
  isEmptySearch: false,
  isSearching: false,
  searchingError: false,
  sortField: 'name',
}, action) => {
  switch (action.type) {
    case types.SEARCH_REQUESTED:
      return {
        ...state,
        isEmptySearch: false,
        isSearching: true,
        searchingError: false,
        searchResults: [],
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        isEmptySearch: action.results.length === 0,
        isSearching: false,
        searchingError: false,
        searchResults: action.results.map((result) => ({
          ...result.show,
          relevance: result.score,
        })),
      };
    case types.SEARCH_ERROR:
      return {
        ...state,
        isSearching: false,
        searchingError: true,
        searchResults: [],
      };
    case types.CHANGE_SORT_FIELD:
      return {
        ...state,
        sortField: action.sortField,
      };
    default:
      return state;
  }
};
