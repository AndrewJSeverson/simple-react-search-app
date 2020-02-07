import * as types from './types';
import { dispatchNetworkRequest } from '../networkDispatcher';
import SearchService from '../../services/SearchService';

export const searchTvShows = (searchText) => (dispatch) => {
  dispatchNetworkRequest({
    dispatch,
    requestType: types.SEARCH_REQUESTED,
    successType: types.SEARCH_SUCCESS,
    errorType: types.SEARCH_ERROR,
    promise: SearchService.searchTvShows(searchText),
    defaultErrorMessage: 'There was a problem searching for tv shows',
    responseName: 'results',
  });
};
