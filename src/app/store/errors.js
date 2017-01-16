const SET_ERROR = 'angular-template/errors/SET_ERROR';

export function setError (error) {
  return { type: SET_ERROR, content: error }
}

export default function reducer (state = {}, action = {}) {
  switch (action.type) {
    case SET_ERROR:
      return Object.assign({}, state, action.content);
    default:
      return state;
  }
}
