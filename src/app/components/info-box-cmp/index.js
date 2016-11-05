import Controller from './controller';
import './style.styl';
import template from './template.jade';

export default {
  template: template({}),
  controller: () => new Controller(),
  controllerAs: 'infoBoxCmp'
}
