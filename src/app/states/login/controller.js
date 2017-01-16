/**
 * This is the route controller.
 */

export default class Controller {

  static mapStateToThis(state) {
    return {
      errors: state.errors
    };
  }

  constructor ($state, $scope, $ngRedux, authService) {
    this.email = 'user@user.com';
    this.password = '123456';
    this.state = $state;
    this.authService = authService;

    const unsubscribe = $ngRedux.connect(Controller.mapStateToThis, {})(this);
    $scope.$on('$destroy', unsubscribe);
  }

  submit () {
    this.authService.login(this.email, this.password);
  }
}
