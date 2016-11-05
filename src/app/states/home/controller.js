import { getCountries } from '../../store/countries';
import { incrementCounter, decrementCounter } from '../../store/counter';

class Controller {

  static mapStateToThis(state) {
    return {
      count: state.counter,
      messages: state.messages,
      countries: state.countries
    };
  }

  constructor ($scope, $ngRedux) {

    this.content = 'Lorem ipsum dolor sit amet.';

    let unsubscribe = $ngRedux.connect(Controller.mapStateToThis, { getCountries, incrementCounter, decrementCounter })(this);
    $scope.$on('$destroy', unsubscribe);

    this.getCountries();
  }
}

export default Controller;
