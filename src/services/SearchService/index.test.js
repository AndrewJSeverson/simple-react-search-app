import SearchService from '.';

const EXAMPLE_SEARCH_RESPONSE_OBJECT = { show: { id: 1 } };

describe('Search Service', () => {
  let getCalled;
  beforeEach(() => {
    getCalled = false;
    SearchService.httpService = { get: () => {
      getCalled = true;
      return Promise.resolve([EXAMPLE_SEARCH_RESPONSE_OBJECT]);
    } };
  });

  it('search tv shows', (done) => {
    const response = SearchService.searchTvShows('search text');
    response.then((results) => {
      expect(getCalled).toEqual(true);
      expect(results).toEqual([EXAMPLE_SEARCH_RESPONSE_OBJECT]);
      done();
    });
  });

  it('rejects searching tv shows with empty search text', (done) => {
    SearchService.searchTvShows().catch((e) => {
      expect(e.message).toEqual('Invalid search term');
      done();
    });
  });

  it('rejects searching tv shows with bad search text', (done) => {
    SearchService.searchTvShows('').catch((e) => {
      expect(e.message).toEqual('Invalid search term');
      done();
    });
  });
});
