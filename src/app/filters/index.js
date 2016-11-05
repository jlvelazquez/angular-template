import angular from 'angular';

import l33t from './l33t';
import removeVowels from './remove-vowels';
import reversed from './reversed';

const filters = angular.module('filters', [])
  .filter('l33t', () => l33t)
  .filter('removeVowels', () => removeVowels)
  .filter('reversed', () => reversed);

export default filters.name;
