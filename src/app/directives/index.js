import angular from 'angular';

import infoBox from './info-box';
import inputBox from './input-box';
import messageL33t from './messageL33t';
import messageReversed from './messageReversed';
import messageWithoutVowels from './messageWithoutVowels';

const directives = angular.module('directives', [])
    .directive('infoBox', () => infoBox)
    .directive('inputBox', () => inputBox)
    .directive('messageL33t', () => messageL33t)
    .directive('messageReversed', () => messageReversed)
    .directive('messageWithoutVowels', () => messageWithoutVowels);

export default directives.name;
