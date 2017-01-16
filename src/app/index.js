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

import Login from './states/login';
import App from './states/app';
import Home from './states/home';
import About from './states/about';

import filters from './filters';
import services from './services';
import directives from './directives';
import components from './components';

const providers = ['$stateProvider', '$urlRouterProvider', '$ngReduxProvider'];

angular
  .module('myApp', [router, filters, services, directives, components, ngRedux])
  .config([...providers, (state, routerProvider, redux) => {

    state
      .state('login', Login)
      .state('app', App)
      .state('home', Home)
      .state('about', About);

    routerProvider.otherwise('/login');

    redux.createStoreWith(reducer, middleware, [
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ]);
  }])
  .run(['$rootScope', '$state', 'authService', ($rootScope, $state, authService) => {
    $rootScope.$on('$stateChangeStart', (event, toState) => {

      // If we are not logged we are redirected to login page.

      if (!authService.isLogged() && toState.name !== 'login') {
        event.preventDefault();
        $state.go('login');
      }

      // If we are already logged, when going to login page we are redirected
      // to home page.

      if (authService.isLogged() && toState.name === 'login') {
        event.preventDefault();
        $state.go('home');
      }

      // En cualquier otro caso, vamos a la página solicitada.
    });
  }]);
