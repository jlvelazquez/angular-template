import request from 'superagent';
import { setError } from '../store/errors';

export default class AuthService {

  static mapStateToThis(state) {
    return {
      errors: state.errors
    };
  }

  constructor ($state, $ngRedux) {
    this.state = $state;
    this.server = 'http://localhost:1337';

    $ngRedux.connect(AuthService.mapStateToThis, { setError })(this);
  }

  login (email, password) {

    // Here we need to call our authentication server and store the token
    // returned to use it in every call to the server.

    let onSuccess = response => {
      localStorage.setItem('templateToken', response.body.token);
      this.setError({ login: false });
      this.state.go('about');
    };

    let onError = () => {
      this.setError({ login: true });
    };

    request
      .post(`${ this.server }/api/login`)
      .send({ email, password })
      .then(onSuccess, onError);
  }

  isLogged () {
    return localStorage.getItem('templateToken');
  }

  logout () {
    localStorage.removeItem('templateToken');
    this.state.go('login');
  }
}
