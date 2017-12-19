import { RECEIVE_KEEP_BY_ID } from '../actions';

const defaultState = {};

export default (state = defaultState, action) => {
  if (action.type === RECEIVE_KEEP_BY_ID) {
    return action.payload;
  }

  return state;
};
