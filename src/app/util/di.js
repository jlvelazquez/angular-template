import angular from 'angular';

export default function (name) {

    return angular
        .element(document.body)
        .injector()
        .get(name);
};
