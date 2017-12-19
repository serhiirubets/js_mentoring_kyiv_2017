import {
  PARTICIPANT_ADD,
  PARTICIPANT_EDIT,
  PARTICIPANT_REMOVE
} from '../actions/participants';

const initialState = [];

export default (state = initialState, action) => {
  if (action.type === PARTICIPANT_ADD) {
    return [
      ...initialState,
      ...action.payload
    ]
  }

  if (action.type === PARTICIPANT_EDIT) {
    const participants = state.filter(participant => participant.id !== action.id);

    return [
      participants,
      {
        id: action.payload.id
      }
    ]
  }

  if (action.type === PARTICIPANT_REMOVE) {
    return state.filter(participant => participant.id !== action.payload);
  }

  return state;
}
