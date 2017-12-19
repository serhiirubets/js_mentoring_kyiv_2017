import { ADD_KEEP, REMOVE_KEEP, EDIT_KEEP } from '../actions'

const defaultState = [
  {
    title: 'First Title',
    text: 'First text',
    id: Date.now() + Math.random()
  },
  {
    title: 'Second Title',
    text: 'Second text',
    id: Date.now() + Math.random()
  }
];

export default (state = defaultState, action) => {
  if (action.type === ADD_KEEP) {
    return [...state, {title: action.payload.title, id: Date.now() + Math.random()}]
  }

  if (action.type === REMOVE_KEEP) {
    return state.filter(item => item.id !== action.payload)
  }

  if (action.type === EDIT_KEEP) {
    const newState = state.filter(item => item.id !== action.payload);
    return [...newState, action.payload];
  }

  return state;
}
