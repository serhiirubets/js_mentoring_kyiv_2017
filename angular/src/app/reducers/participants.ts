import {
  PARTICIPANT_ADD,
  PARTICIPANT_EDIT,
  PARTICIPANT_REMOVE,
  PARTICIPANT_GET,
} from '../actions/participants';

export default (state, action) => {
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

  if (action.type === PARTICIPANT_REMOVE) {
    return state.filter(participant => participant.id != action.payload)
  }

  return state;
}
