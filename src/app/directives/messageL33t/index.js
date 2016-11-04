import Link from './link';
import Style from './style.styl';
import Template from './template.jade';

export default {
    scope    : {},
    restrict : 'E',
    replace  : true,
    template : Template({}),
    link     : (scope, element, attributes) => new Link(scope, attributes)
};
