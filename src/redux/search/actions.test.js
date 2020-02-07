
import sinon from 'sinon';
import * as actions from './actions';
import SearchService from '../../services/SearchService';
import * as types from './types';

const checkDispatchedActions = (expectedActions, stubs, done) => {
  let expectedActionIndex = 0;

  const dispatch = (action) => {
    expect(action).toEqual(expectedActions[expectedActionIndex]);
    expectedActionIndex += 1;

    if (expectedActionIndex === expectedActions.length) {
      stubs.forEach((stub) => {
        stub.restore();
      });
      done();
    }
  };
  return dispatch;
};

describe('search actions', () => {
  it('should create an action for searchTvShows', (done) => {
    const expectedActions = [{ type: types.SEARCH_REQUESTED }, {
      type: types.SEARCH_SUCCESS,
      results: [],
    }];
    const stubs = [
      sinon.stub(SearchService, 'searchTvShows').callsFake(() => Promise.resolve([])),
    ];

    const dispatch = checkDispatchedActions(expectedActions, stubs, done);

    actions.searchTvShows()(dispatch);
  });
});
