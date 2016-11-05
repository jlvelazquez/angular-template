import request from 'superagent';

const GET = 'my-app/countries/GET';

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

export default function reducer (state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.content;
    default:
      return state;
  }
}
