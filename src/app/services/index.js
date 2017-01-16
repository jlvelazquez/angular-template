import angular from 'angular';

import AuthService from './auth.service';

const services = angular.module('services', [])
  .factory('authService', [
    '$state',
    '$ngRedux',
    ($state, $ngRedux) => new AuthService($state, $ngRedux)
  ]);

export default services.name;
