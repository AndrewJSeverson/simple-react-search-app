import {
  compose, createStore, applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducer';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(ReduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
    ),
  );
}
