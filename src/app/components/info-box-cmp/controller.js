/**
 * This is the component controller.
 */

export default class Controller {

  /**
   * This is the constructor.
   */

  constructor ($state) {

    /**
     * This variable stores the component data.
     * @type {String}
     */

    this.componentContent = 'This is a component!';
    this.state = $state;
  }
}
