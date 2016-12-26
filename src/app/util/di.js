import angular from 'angular';

/**
 * This function gets a service.
 * @param  {String} name Service name
 * @return {Object}      Service
 */
export default function (name) {
  return angular
    .element(document.body)
    .injector()
    .get(name);
}
