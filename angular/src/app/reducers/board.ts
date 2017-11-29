import {
  BOARD_GENERATE_DATA,
  BOARD_GENERATE_WINNER_SCORES
} from '../actions/board';

export default (state, action) => {
  if (action.type === BOARD_GENERATE_DATA) {
    return {
      winnerScores: state.winnerScores,
      fields: action.payload
    }
  }

  if (action.type === BOARD_GENERATE_WINNER_SCORES) {
    return {
      winnerScores: action.payload,
      fields: state.fields
    }
  }

  return state;
}
