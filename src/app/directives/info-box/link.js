/**
 * This is the link of the directive.
 */
export default class Link {

  /**
   * This method returns a funny message.
   */
  static getFunnyMessage () {
    return 'This is a funny directive!';
  }

  /**
   * This method returns a message.
   */
  static getMessage () {
    return 'This is a directive!';
  }

  /**
   * This is the constructor.
   *
   * @param {Object} scope      This is the directive scope
   * @param {Object} attributes These are the directive attributes
   */
  constructor (scope, attributes) {
    if (attributes.hasOwnProperty('funny')) {
      scope.directiveContent = Link.getFunnyMessage();
    } else {
      scope.directiveContent = Link.getMessage();
    }
  }
}
