import {
  BOARD_GENERATE_RESULT,
} from '../actions/board';

const initialState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

export default (state = initialState, action) => {
  if (action.type === BOARD_GENERATE_RESULT) {
    return action.payload;
  }

  return state;
}
