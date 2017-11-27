const BOARD_GENERATE_RESULT = 'BOARD_GENERATE_RESULT';

const generateResult = (data) => ({
  type: BOARD_GENERATE_RESULT,
  payload: data
});

export { BOARD_GENERATE_RESULT };
export { generateResult }
