import './style';
import Controller from './controller';
import template from './template';

export default {
  url: '/login',
  template: template,
  controllerAs: 'login',
  controller: ['$state', 'authService', ($state, authService) => new Controller($state, authService)]
};
