import {
  PARTICIPANT_ADD,
  PARTICIPANT_EDIT,
  PARTICIPANT_REMOVE,
  PARTICIPANT_GET,
} from '../actions/participants';

const initialState = [
  {name: 'First Name', age: 37, balance: 500, id: 23},
  {name: 'Second Name', age: 27, balance: 400, id: 56},
  {name: 'Third Name', age: 57, balance: 200, id: 85},
  {name: 'Fourth Name', age: 33, balance: 100, id: 785}
];

export default (state = initialState, action) => {
  if (action.type === PARTICIPANT_ADD) {
    return [
      ...state,
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
