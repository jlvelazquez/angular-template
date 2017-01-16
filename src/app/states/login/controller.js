/**
 * This is the route controller.
 */

export default class Controller {

  constructor ($state, authService) {
    this.email = 'pepe@pepe.com';
    this.password = '123456';
    this.state = $state;
    this.authService = authService;
  }

  submit () {
    this.authService.login();
  }
}
