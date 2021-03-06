import './style';
import Controller from './controller';
import template from './template';

export default {
  url: '/home',
  parent: 'app',
  template: template,
  controllerAs: 'home',
  controller: ['$scope', '$ngRedux', ($scope, $ngRedux) => new Controller($scope, $ngRedux)]
};
