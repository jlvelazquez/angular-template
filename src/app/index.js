// Styles

import './styles/reset';
import './styles/layout';

// Angular

import angular from 'angular';
import router from 'angular-ui-router';

// Redux

import ngRedux from 'ng-redux';
import reducer from './store/index';
import thunk from 'redux-thunk';

let middleware = [thunk];

import Home from './states/home';

import filters from './filters';
import directives from './directives';
import components from './components';

const providers = ['$stateProvider', '$urlRouterProvider', '$ngReduxProvider'];

angular
  .module('myApp', [router, filters, directives, components, ngRedux])
  .config([...providers, (state, router, redux) => {

    state
      .state('home', Home);

    router.otherwise('/');

    redux.createStoreWith(reducer, middleware, []);
  }]);
