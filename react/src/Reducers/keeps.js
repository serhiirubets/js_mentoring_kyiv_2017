import { ADD_KEEP, REMOVE_KEEP, EDIT_KEEP, RECEIVE_ALL_KEEPS } from '../actions';

const defaultState = [];

export default (state = defaultState, action) => {
  if (action.type === RECEIVE_ALL_KEEPS) {
    return action.payload;
  }

  if (action.type === ADD_KEEP) {
    return [...state, { title: action.payload.title, _id: action.payload._id }];
  }

  if (action.type === REMOVE_KEEP) {
    return state.filter(item => item.id !== action.payload);
  }

  if (action.type === EDIT_KEEP) {
    const newState = state.filter(item => item.id !== action.payload);
    return [...newState, action.payload];
  }

  return state;
};
