import request from 'superagent';

const GET = 'my-app/countries/GET';

/**
 * This function gets the countries.
 * @return {Object} Action
 */

export function getCountries () {
  return function (dispatch) {
    request
      .get('https://restcountries.eu/rest/v1/all')
      .end((error, response) => {
        if (error) {
          throw error;
        }
        dispatch({ type: GET, content: response.body });
      });
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
    case GET:
      return action.content;
    default:
      return state;
  }
}
