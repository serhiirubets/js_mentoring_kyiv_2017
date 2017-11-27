import {
  PARTICIPANT_ADD,
  PARTICIPANT_EDIT,
  PARTICIPANT_REMOVE,
  PARTICIPANT_GET,
} from '../actions/participants';

const initialState = [
  {name: 'First Name', age: 37, bet: 500, id: 23},
  {name: 'Second Name', age: 27, bet: 400, id: 56},
  {name: 'Third Name', age: 57, bet: 200, id: 85},
  {name: 'Fourth Name', age: 33, bet: 100, id: 785}
];

export default (state = initialState, action) => {
  if (action.type === PARTICIPANT_ADD) {
    const newState = state.filter(participant => participant.id != action.payload.id);

    return [
      ...newState,
      action.payload
    ]
  }

  if (action.type === PARTICIPANT_GET) {
    return state.find(participant => participant.id === action.payload);
  }

  if (action.type === PARTICIPANT_EDIT) {
    return [
      ...state,
      action.payload
    ]
  }

  return state;
}
