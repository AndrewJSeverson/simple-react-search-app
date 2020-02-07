import HttpService from '../HttpService';

export default class SearchService {
  static searchTvShows(searchText) {
    if (!searchText || searchText.length <= 0) {
      return Promise.reject(new Error('Invalid search term'));
    }
    return this.httpService.get(`/search/shows?q=${searchText}`);
  }
}

SearchService.httpService = new HttpService({ baseURL: '/api/tv' });
