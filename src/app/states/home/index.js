import './style.styl';
import Controller from './controller';
import template from './template.jade';

export default {
  url: '/',
  template: template({}),
  controllerAs: 'home',
  controller: ['$scope', '$ngRedux', ($scope, $ngRedux) => new Controller($scope, $ngRedux)]
};
