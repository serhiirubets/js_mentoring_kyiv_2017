const host = 'http://localhost:3000';

export const ADD_KEEP = 'ADD_KEEP';
export const EDIT_KEEP = 'EDIT_KEEP';
export const REMOVE_KEEP = 'REMOVE_KEEP';

export const SUCCESS_RECEIVE_KEEP = 'SUCCESS_RECEIVE_KEEP';
export const RECEIVE_ALL_KEEPS = 'RECEIVE_ALL_KEEPS';

export const addKeep = (payload) => {
  return {
    type: ADD_KEEP,
    payload,
  };
};

const reciveSuccessful = (payload) => {
  return {
    type: RECEIVE_ALL_KEEPS,
    payload
  }
};

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

export const saveKeep = keep => (dispatch) => {
  const registerUrl = `${host}/api/keeps/add`;
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(keep),
  };

  return fetch(registerUrl, options)
    .then(response => response.json())
    .then((keep) => {
      dispatch(addKeep(keep))
    })
    .catch(error => dispatch(recieveKeepSuccess(error)));
};

export const removeKeep = (payload) => {
  return {
    type: REMOVE_KEEP,
    payload,
  };
};

const recieveKeepSuccess = (keep) => {
  return {
    type: SUCCESS_RECEIVE_KEEP,
    payload: keep,
  };
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
    .then(response => dispatch(recieveKeepSuccess(response)))
    .catch(error => dispatch(recieveKeepSuccess(error)));
};

