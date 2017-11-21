import { combineReducers } from '@ngrx/store';
import gameReducer from './game';
import participants from './participants';

export default combineReducers({
  gameReducer,
  participants
})
