import di from '../../util/di';

/**
 * This is the link of the directive.
 */
export default class Link {

  /**
   * This method maps redux state to the directive scope.
   */
  static mapStateToThis(state) {
    return {
      messages: state.messages
    };
  }

  /**
   * This is the constructor.
   *
   * @param {Object} scope This is the directive scope
   */
  constructor (scope) {
    let unsubscribe = di('$ngRedux').connect(Link.mapStateToThis, {})(scope);
    scope.$on('$destroy', unsubscribe);
  }
}
