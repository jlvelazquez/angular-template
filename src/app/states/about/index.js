import './style';
import Controller from './controller';
import template from './template';

export default {
  url: '/about',
  parent: 'app',
  template: template,
  controllerAs: 'about',
  controller: () => new Controller()
};
