const host = 'http://localhost:3000';

export const ADD_KEEP = 'ADD_KEEP';
export const EDIT_KEEP = 'EDIT_KEEP';
export const REMOVE_KEEP = 'REMOVE_KEEP';

export const SUCCESS_RECEIVE_KEEP = 'SUCCESS_RECEIVE_KEEP';
export const RECEIVE_ALL_KEEPS = 'RECEIVE_ALL_KEEPS';

export const RECEIVE_KEEP_BY_ID = 'RECEIVE_KEEP_BY_ID';

const receiveKeepById = payload => ({
  type: RECEIVE_KEEP_BY_ID,
  payload,
});

const addKeep = payload => ({
  type: ADD_KEEP,
  payload,
});

const reciveSuccessful = payload => ({
  type: RECEIVE_ALL_KEEPS,
  payload,
});

const recieveKeepSuccess = keep => ({
  type: SUCCESS_RECEIVE_KEEP,
  payload: keep,
});

export const removeKeep = payload => ({
  type: REMOVE_KEEP,
  payload,
});

export const receiveAllKeeps = () => (dispatch) => {
  const registerUrl = `${host}/api/keeps/`;
  const options = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(registerUrl, options)
    .then(response => response.json())
    .then(response => dispatch(reciveSuccessful(response)))
    .catch(error => dispatch(recieveKeepSuccess(error)));
};

export const saveKeep = keepData => (dispatch) => {
  const registerUrl = `${host}/api/keeps/add`;
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(keepData),
  };

  return fetch(registerUrl, options)
    .then(response => response.json())
    .then((keep) => {
      dispatch(addKeep(keep));
    })
    .catch(error => dispatch(recieveKeepSuccess(error)));
};

export const getKeepById = id => (dispatch) => {
  const registerUrl = `${host}/api/keeps/${id}`;
  const options = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(registerUrl, options)
    .then(response => response.json())
    .then(response => dispatch(receiveKeepById(response)))
    .catch(error => dispatch(receiveKeepById(error)));
};

