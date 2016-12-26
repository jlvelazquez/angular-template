const INCREMENT = 'my-app/counter/INCREMENT';
const DECREMENT = 'my-app/counter/DECREMENT';

/**
 * This function increments the counter.
 * @return {Object} Action
 */
export function incrementCounter () {
  return { type: INCREMENT }
}

/**
 * This function decrements the counter.
 * @return {Object} Action
 */
export function decrementCounter () {
  return { type: DECREMENT }
}

/**
 * This is the reducer.
 * @param  {Number} [state=0]   This is the state
 * @param  {Object} [action={}] This is the action
 * @return {Object}             This is the new state
 */
export default function reducer (state = 0, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
