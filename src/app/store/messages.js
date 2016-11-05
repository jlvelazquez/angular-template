const ADD = 'my-app/message/ADD';

export function addMessage (message) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: ADD, content: message });
    }, 3000);
  };
}

export default function reducer (state = [], action = {}) {
  switch (action.type) {
    case ADD:
      state.push(action.content);
      return state;
    default:
      return state;
  }
}
