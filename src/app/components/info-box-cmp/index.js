import './style';
import Controller from './controller';
import template from './template';

export default {
  template: template,
  controllerAs: 'infoBoxCmp',
  controller: () => new Controller()
}
