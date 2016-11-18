import './style';
import Controller from './controller';
import template from './template';

export default {
  template: template,
  controller: () => new Controller(),
  controllerAs: 'infoBoxCmp'
}
