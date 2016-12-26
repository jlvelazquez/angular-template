import { getCountries } from '../../store/countries';
import { incrementCounter, decrementCounter } from '../../store/counter';

/**
 * This is the route controller.
 */
class Controller {

  /**
   * This method maps redux state to the directive scope.
   */
  static mapStateToThis(state) {
    return {
      count: state.counter,
      messages: state.messages,
      countries: state.countries
    };
  }

  /**
   * This is the constructor.
   * @param {Object} $scope   This is the directive scope
   * @param {Object} $ngRedux This is the redux element
   */
  constructor ($scope, $ngRedux) {

    /**
     * This is the route content.
     * @type {String}
     */
    this.content = 'Lorem ipsum dolor sit amet.';

    let unsubscribe = $ngRedux.connect(Controller.mapStateToThis, { getCountries, incrementCounter, decrementCounter })(this);
    $scope.$on('$destroy', unsubscribe);

    this.getCountries();
  }
}

export default Controller;
