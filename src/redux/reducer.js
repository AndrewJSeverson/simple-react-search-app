import { combineReducers } from 'redux';
import error from './error/reducer';
import success from './success/reducer';
import welcome from './welcome/reducer';

export default combineReducers({
  error,
  success,
  welcome,
});
