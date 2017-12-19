import { combineReducers } from 'redux';
import keeps from './keeps';
import keep from './keep';

export default combineReducers({
  keeps,
  keep
});
