import Link from './link';
import './style.styl';
import template from './template.jade';

export default {
  scope: {},
  restrict: 'E',
  replace: true,
  template: template({}),
  link: (scope, element, attributes) => new Link(scope, attributes)
};
