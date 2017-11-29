const BOARD_GENERATE_DATA = 'BOARD_GENERATE_DATA';
const BOARD_GENERATE_WINNER_SCORES = 'BOARD_GENERATE_WINNER_SCORES';

const generateBoardData = (data) => ({
  type: BOARD_GENERATE_DATA,
  payload: data
});

const generateWinnerScores = (data) => ({
  type: BOARD_GENERATE_WINNER_SCORES,
  payload: data
});

export { BOARD_GENERATE_DATA, BOARD_GENERATE_WINNER_SCORES };
export { generateBoardData, generateWinnerScores }
