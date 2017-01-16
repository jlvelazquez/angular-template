import { v4 } from 'uuid';

export default class AuthService {

  constructor ($state) {
    this.state = $state;
  }

  login () {

    // Here we need to call our authentification service and store the token
    // returned to use it in every call to the server.

    localStorage.setItem('templateToken', v4());
    this.state.go('about');
  }

  isLogged () {
    return localStorage.getItem('templateToken');
  }

  logout () {
    localStorage.removeItem('templateToken');
    this.state.go('login');
  }
}
