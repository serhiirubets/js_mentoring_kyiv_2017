const GAME_START = 'GAME_START';
import { getRandomNumber} from "../helpers/index";

function generateGameData(): Array<Number> {
  const gameData = [];

  for (let i = 0; i < 3; i++) {
    gameData.push(getRandomNumber(1, 9));
  }

  return gameData;
}

const start = (): Object => ({
  type: GAME_START,
  payload: generateGameData()
});

export { GAME_START };
export { start };
