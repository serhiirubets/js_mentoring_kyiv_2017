export const ADD_KEEP = 'ADD_KEEP';
export const EDIT_KEEP = 'EDIT_KEEP';
export const REMOVE_KEEP = 'REMOVE_KEEP';

export const addKeep = (payload) => {
  return {
    type: ADD_KEEP,
    payload
  }
};

export const removeKeep = (payload) => {
  return {
    type: REMOVE_KEEP,
    payload
  }
};

