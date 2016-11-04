import Controller from './controller';
import Style from './style.styl';
import Template from './template.jade';

export default {
    template: Template({}),
    controller: () => new Controller(),
    controllerAs: 'infoBoxCmp'
}
