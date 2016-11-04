import request from 'superagent';

const GET = 'my-app/countries/GET';

export function getCountries () {
    return function (dispatch) {
        request
            .get('https://restcountries.eu/rest/v1/all')
            .end(function (err, res) {
                dispatch({ type: GET, content: res.body });
            });
    };
}

export default function reducer (state = [], action = {}) {

    switch (action.type) {
        case GET:
            state = action.content;
            return state;
        default:
            return state;
    }
}
