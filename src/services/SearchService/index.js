import HttpService from '../HttpService';

const TV_MAZE_API_ENDPOINT = 'https://api.tvmaze.com';

export default class SearchService {
  static searchTvShows(searchText) {
    if (!searchText || searchText.length <= 0) {
      return Promise.reject(new Error('Invalid search term'));
    }
    return this.httpService.get(`/search/shows?q=${searchText}`);
  }
}

SearchService.httpService = new HttpService({ baseURL: process.env.NODE_ENV === 'production'
  ? TV_MAZE_API_ENDPOINT
  : '/api/tv' });
