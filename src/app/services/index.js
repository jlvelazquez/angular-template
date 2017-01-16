import angular from 'angular';

import AuthService from './auth.service';

const services = angular.module('services', [])
  .factory('authService', ['$state', $state => new AuthService($state)]);

export default services.name;
