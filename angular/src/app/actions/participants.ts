const PARTICIPANT_ADD: string = 'PARTICIPANT_ADD';
const PARTICIPANT_REMOVE: string = 'PARTICIPANT_REMOVE';
const PARTICIPANT_EDIT: string = 'PARTICIPANT_EDIT';

const add = (data): Object => ({
  type: PARTICIPANT_ADD,
  payload: data
});

const remove = (id): Object => ({
  type: PARTICIPANT_REMOVE,
  payload: id
});

const edit = (data): Object => ({
  type: PARTICIPANT_EDIT,
  payload: data
});

export { PARTICIPANT_ADD, PARTICIPANT_EDIT, PARTICIPANT_REMOVE };
export { add, remove, edit };
