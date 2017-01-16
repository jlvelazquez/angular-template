import './style';
import Controller from './controller';
import template from './template';

export default {
  url: '/login',
  template: template,
  controllerAs: 'login',
  controller: [
    '$state',
    '$scope',
    '$ngRedux',
    'authService',
    ($state, $scope, $ngRedux, authService) => {
      return new Controller($state, $scope, $ngRedux, authService)
    }
  ]
};
