import './style';
import Link from './link';
import template from './template';

export default {
  scope: {},
  restrict: 'E',
  replace: true,
  template: template,
  link: (scope, element, attributes) => new Link(scope, attributes)
};
