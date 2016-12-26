import di from '../../util/di';
import { addMessage } from '../../store/messages';

/**
 * This is the link of the directive.
 */
export default class Link {

  /**
   * This is the constructor.
   *
   * @param {Object} scope This is the directive scope
   */
  constructor (scope) {

    scope.message = '';

    let unsubscribe = di('$ngRedux').connect(null, { addMessage })(scope);

    scope.addMessageWrapper = function (message) {
      if (scope.message) {
        scope.addMessage(message);
        scope.message = '';
      }
    };

    scope.$on('$destroy', unsubscribe);
  }
}
