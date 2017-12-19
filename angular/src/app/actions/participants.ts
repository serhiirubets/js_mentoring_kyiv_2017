const PARTICIPANT_ADD: string = 'PARTICIPANT_ADD';
const PARTICIPANT_REMOVE: string = 'PARTICIPANT_REMOVE';
const PARTICIPANT_EDIT: string = 'PARTICIPANT_EDIT';
const PARTICIPANT_GET: string = 'PARTICIPANT_GET';

interface Action {
  type: string,
  payload: object | string
}

const add = (data): Action => ({
  type: PARTICIPANT_ADD,
  payload: data
});

const remove = (id): Action => ({
  type: PARTICIPANT_REMOVE,
  payload: id
});

const edit = (id): Action => ({
  type: PARTICIPANT_EDIT,
  payload: id
});

const get = (id): Action => ({
  type: PARTICIPANT_GET,
  payload: id
});

export { PARTICIPANT_ADD, PARTICIPANT_EDIT, PARTICIPANT_REMOVE, PARTICIPANT_GET };
export { add, remove, edit, get };
