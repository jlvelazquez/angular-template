import angular from 'angular';

import infoBoxCmp from './info-box-cmp';

const components = angular.module('components', [])
  .component('infoBoxCmp', infoBoxCmp);

export default components.name;
