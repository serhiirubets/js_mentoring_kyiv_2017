import {
  GAME_START
} from '../actions/game';

const initialState = [];

export default (state = initialState, action) => {
  if (action.type === GAME_START) {
    return action.payload
  }

  return state;
}
