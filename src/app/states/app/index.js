import './style';
import Controller from './controller';
import template from './template';

export default {
  url: '/app',
  abstract: true,
  template: template,
  controllerAs: 'app',
  controller: [
    '$state',
    'authService',
    ($state, authService) => new Controller($state, authService)
  ]
};
