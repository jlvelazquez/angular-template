const ADD = 'my-app/message/ADD';

/**
 * This function gets the message.
 * @return {Object} Action
 */
export function addMessage (message) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: ADD, content: message });
    }, 3000);
  };
}

/**
 * This is the reducer.
 * @param  {Array}  [state=[]]  [description]
 * @param  {Object} [action={}] [description]
 * @return {Object}             This is the new state
 */
export default function reducer (state = [], action = {}) {
  switch (action.type) {
    case ADD:
      state.push(action.content);
      return state;
    default:
      return state;
  }
}
