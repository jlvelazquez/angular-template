/**
 * This is the route controller.
 */

export default class Controller {

  constructor ($state, authService) {
    this.state = $state;
    this.authService = authService;
  }

  logout () {
    this.authService.logout();
  }
}
